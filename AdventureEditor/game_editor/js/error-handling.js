

export function showError(message) {
    document.getElementById("info-overlay-container").style.display = 'flex'
    document.getElementById("info-overlay-text").innerText = message
    throw new Error();
}

/*
function getErrorMessageContainer(errorMsg, sceneNr) {
    var mainOffset = $('#scene-' + sceneNr).offset();
    var top = mainOffset.top + $('#scene-' + sceneNr)[0].clientHeight / 2;
    var left = mainOffset.left;
    var comp = '<div id="errorMessageContainer">'
        + '<h5 class="new-error-message-text">' + errorMsg + '</h5>'
        + '</div>';
    return comp;
}*/