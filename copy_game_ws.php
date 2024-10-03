<?php
			
				
// Verbindung zur Datenbank herstellen
$mysqli = new mysqli("localhost", "dbu_dev-working-sober-at", "vwsZAXB5R.64K5kb", "db_dev-working-sober-at");
if ($mysqli->connect_error) {
    die("Verbindung fehlgeschlagen: " . $mysqli->connect_error);
}

// UID des zu kopierenden Spiels
$old_game_id = 26; // Diese UID anpassen


// Informationen des alten Spiels abrufen
$game_query = "SELECT * FROM tx_gtnescapegame_domain_model_games WHERE uid = ?";
$stmt = $mysqli->prepare($game_query);
$stmt->bind_param("i", $old_game_id);
$stmt->execute();
$old_game = $stmt->get_result()->fetch_assoc();
$stmt->close();

// Neues Spiel erstellen und alle Felder kopieren, Anpassungen vornehmen
$columns = array_keys($old_game);
$columns_str = implode(", ", array_filter($columns, function($col) {
    return $col !== 'uid'; // Primärschlüssel ausschließen
}));
$placeholders = implode(", ", array_fill(0, count($columns) - 1, '?'));

// Felder vorbereiten, Titel und veröffentlicht-Status anpassen
$old_game['title'] .= " Kopie";
$old_game['published'] = 0;
$params = array_values(array_filter($old_game, function($key) {
    return $key !== 'uid';
}, ARRAY_FILTER_USE_KEY));

// Neues Spiel in die Datenbank einfügen
$insert_query = "INSERT INTO tx_gtnescapegame_domain_model_games ($columns_str) VALUES ($placeholders)";
$stmt_insert_game = $mysqli->prepare($insert_query);

// Dynamische Parameterbindung
$types = str_repeat("s", count($params));
$stmt_insert_game->bind_param($types, ...$params);
$stmt_insert_game->execute();
$new_game_id = $stmt_insert_game->insert_id;
$stmt_insert_game->close();

// Räume des zu kopierenden Spiels abrufen
$rooms_query = "SELECT * FROM tx_gtnescapegame_domain_model_rooms WHERE gameid = ?";
$stmt = $mysqli->prepare($rooms_query);
$stmt->bind_param("i", $old_game_id);
$stmt->execute();
$rooms_result = $stmt->get_result();

$new_room_ids = [];
$old_to_new_room_map = [];

// Räume kopieren und Änderungen vornehmen
while ($room = $rooms_result->fetch_assoc()) {
    $old_room_id = $room['uid'];

    // Raumdaten anpassen
    $room['gameid'] = $new_game_id;
    $columns = array_keys($room);
    $columns_str = implode(", ", array_filter($columns, function($col) {
        return $col !== 'uid'; // Primärschlüssel ausschließen
    }));
    $placeholders = implode(", ", array_fill(0, count($columns) - 1, '?'));
    $params = array_values(array_filter($room, function($key) {
        return $key !== 'uid';
    }, ARRAY_FILTER_USE_KEY));

    // Raum kopieren
    $room_insert_query = "INSERT INTO tx_gtnescapegame_domain_model_rooms ($columns_str) VALUES ($placeholders)";
    $stmt_insert = $mysqli->prepare($room_insert_query);

    // Dynamische Parameterbindung
    $types = str_repeat("s", count($params));
    $stmt_insert->bind_param($types, ...$params);
    $stmt_insert->execute();
    $new_room_id = $stmt_insert->insert_id;
    $stmt_insert->close();

    $new_room_ids[] = $new_room_id;
    $old_to_new_room_map[$old_room_id] = $new_room_id;
}

// Räume erneut durchlaufen, um `parent_room` und `minigames` zu aktualisieren
foreach ($old_to_new_room_map as $old_room_id => $new_room_id) {
    // Parent-Raum aktualisieren
    $parent_room = null;
    $minigames = null;

    $update_needed = false;
    $room_query = "SELECT parent_room, minigames FROM tx_gtnescapegame_domain_model_rooms WHERE uid = ?";
    $stmt = $mysqli->prepare($room_query);
    $stmt->bind_param("i", $old_room_id);
    $stmt->execute();
    $stmt->bind_result($parent_room, $minigames);
    $stmt->fetch();
    $stmt->close();

    if ($parent_room && isset($old_to_new_room_map[$parent_room])) {
        $parent_room = $old_to_new_room_map[$parent_room];
        $update_needed = true;
    }

    if ($minigames) {
        // Minigame-IDs aktualisieren
        $minigame_ids = explode(",", $minigames);
        foreach ($minigame_ids as &$id) {
            if (isset($old_to_new_room_map[$id])) {
                $id = $old_to_new_room_map[$id];
                $update_needed = true;
            }
        }
        $minigames = implode(",", $minigame_ids);
    }

    if ($update_needed) {
        $update_room_query = "UPDATE tx_gtnescapegame_domain_model_rooms
                              SET parent_room = ?, minigames = ?
                              WHERE uid = ?";
        $stmt_update = $mysqli->prepare($update_room_query);
        $stmt_update->bind_param("isi", $parent_room, $minigames, $new_room_id);
        $stmt_update->execute();
        $stmt_update->close();
    }
}

// Raum-UIDs im neuen Spiel-Datensatz aktualisieren
$new_rooms_list = implode(",", $new_room_ids);
$update_game_query = "UPDATE tx_gtnescapegame_domain_model_games
                      SET rooms = ?
                      WHERE uid = ?";
$stmt_update_game = $mysqli->prepare($update_game_query);
$stmt_update_game->bind_param("si", $new_rooms_list, $new_game_id);
$stmt_update_game->execute();
$stmt_update_game->close();

// Verbindung schließen
$mysqli->close();

echo "Das Spiel wurde erfolgreich kopiert, die neue Spiel-UID lautet: " . $new_game_id;

?>
