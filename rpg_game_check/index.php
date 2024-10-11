<?php
// Zielverzeichnis für den Upload und die Extraktion
$uploadDir = 'uploads/';
$extractDir = 'extracted/';

// Funktion zum Löschen eines Verzeichnisses und dessen Inhalt
function deleteDir($dirPath) {
    if (!is_dir($dirPath)) {
        return;
    }
    $files = array_diff(scandir($dirPath), ['.', '..']);
    foreach ($files as $file) {
        $filePath = $dirPath . '/' . $file;
        is_dir($filePath) ? deleteDir($filePath) : unlink($filePath);
    }
    rmdir($dirPath);
}

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    // Vorherigen extrahierten Ordner löschen
    deleteDir($extractDir);

    // Hochladen der ZIP-Datei
    if (isset($_FILES['zipfile'])) {
        $zipFile = $_FILES['zipfile'];
        $zipFilePath = $uploadDir . basename($zipFile['name']);

        // ZIP-Datei ins Upload-Verzeichnis verschieben
        if (move_uploaded_file($zipFile['tmp_name'], $zipFilePath)) {
            // ZIP-Datei öffnen und extrahieren
            $zip = new ZipArchive;
            if ($zip->open($zipFilePath) === TRUE) {
                $zip->extractTo($extractDir);
                $zip->close();

                // Extrahiertes Verzeichnis finden
                $extractedFolders = array_diff(scandir($extractDir), ['.', '..']);

                // Prüfen, ob genau ein Verzeichnis extrahiert wurde
                if (count($extractedFolders) == 1) {
                    $extractedFolder = $extractDir . reset($extractedFolders) . '/';

                    // Überprüfen, ob index.html existiert
                    if (file_exists($extractedFolder . 'index.html')) {
                        $message.='Datei index.html gefunden! <a href="' . $extractedFolder . 'index.html">Hier klicken, um sie anzuzeigen.</a>';
                    } else {
                        $message.='Die Struktur der Dateien ist falsch, die Datei index.html muss im ersten Verzeichnis existieren.';
                    }
                } else {
                    $message.='Fehler: Mehr als ein Verzeichnis oder keine Verzeichnisse extrahiert.';
                }
            } else {
                $message.='Fehler beim Öffnen der ZIP-Datei.';
            }

            // ZIP-Datei nach Extraktion löschen
            unlink($zipFilePath);
        } else {
            $message.='Fehler beim Hochladen der Datei.';
        }
    }
}
?>

<!DOCTYPE html>
<html lang="de">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>ZIP-Datei hochladen und testen</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            background-color: #f4f4f9;
            margin: 0;
            padding: 0;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
        }
        .container {
            background-color: #fff;
            padding: 30px;
            border-radius: 8px;
            box-shadow: 0 0 15px rgba(0, 0, 0, 0.1);
            max-width: 400px;
            width: 100%;
        }
        h1 {
            font-size: 24px;
            color: #333;
            margin-bottom: 20px;
            text-align: center;
        }
        form {
            display: flex;
            flex-direction: column;
        }
        label {
            margin-bottom: 10px;
            font-weight: bold;
            color: #555;
        }
        input[type="file"] {
            padding: 10px;
            border: 1px solid #ddd;
            border-radius: 4px;
            margin-bottom: 20px;
        }
        button {
            padding: 10px;
            background-color: #28a745;
            color: white;
            border: none;
            border-radius: 4px;
            cursor: pointer;
        }
        button:hover {
            background-color: #218838;
        }
        .message {
            margin-top: 20px;
            padding: 10px;
            border-radius: 4px;
            background-color: #e9ecef;
            color: #333;
        }
        .error {
            background-color: #f8d7da;
            color: #721c24;
        }
        .success {
            background-color: #d4edda;
            color: #155724;
        }
        a {
            color: #007bff;
            text-decoration: none;
        }
        a:hover {
            text-decoration: underline;
        }
    </style>
</head>
<body>

    <div class="container">
        <h1>RPG Spiel (zip Datei) hochladen und testen</h1>
        <form action="" method="POST" enctype="multipart/form-data">
            <label for="zipfile">Wähle eine ZIP-Datei:</label>
            <input type="file" name="zipfile" id="zipfile" required>
            <button type="submit">Hochladen</button>
        </form>
        <!-- Diese Nachricht wird dynamisch durch PHP ersetzt -->
        <?php if (isset($message)) : ?>
            <div class="message <?= $messageType ?>">
                <?= $message ?>
            </div>
        <?php endif; ?>
    </div>

</body>
</html>

