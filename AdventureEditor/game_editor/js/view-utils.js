import {addDialogArrowListeners, createDialog, getBackgroundChangeContainer, getChoosableActionContainer,getCardActionContent, getSceneLinkActionContainer, getWebLinkActionContainer, getDialogCreatedContainer, newCardSubscriptions, newCardListeners, newPropListeners, getDialogueElement, newDialogueListeners, addSceneLinkButton, addPlainLinkButton, initDialogue, newDialogueSubscriptions} from "./element-provider.js"
import {Selectors} from "./c-selectors.js"
import { Store } from "./store.js"

const store = new Store()

export function addScenes(scenes) {
    scenes.forEach(function (scene) {
        $('#selectorScene').append($('<option/>', {
            value: scene.uid,
            text: scene.sceneName
        }));
    });
}


export function changeBackground() {

    let curSceneNr = store.get("curSceneNr")
    let scenes = store.get("scenes")
    let scene = scenes[curSceneNr]
    let backgroundImages = store.get('backgroundImages')
   // {scene: scenes[store.get("curSceneNr")], backgroundImages: backgroundImages}

    toggleControlPane();

    let backgroundPaths = backgroundImages.map(i => i.path_name);

    Selectors.scene(scene.uid).append(getBackgroundChangeContainer(backgroundPaths[0], scene.uid));
    let curBackgroundFile = 0;
    $('#backgroundImageSelectorLeft').on('click', function () {
        if (curBackgroundFile > 0) {
            curBackgroundFile--;
            Selectors.bgImage().attr('src', backgroundPaths[curBackgroundFile]);
        }
    })

    $('#backgroundImageSelectorRight').on('click', function () {
        if (curBackgroundFile < backgroundPaths.length - 1) {
            curBackgroundFile++;
            Selectors.bgImage().attr('src', backgroundPaths[curBackgroundFile]);
        }
    })

    $('#confirmBackgroundImageButton').on('click', function () {
        Selectors.currentSceneImage(scene.uid).attr('src', backgroundPaths[curBackgroundFile]);
        scene.backgroundPath = backgroundPaths[curBackgroundFile];
        scenes[curSceneNr] = scene
        store.update("scenes", scenes)

        Selectors.changeBackgroundContainer().remove();
        toggleControlPane();
    });


}

function updateActionLinkToSceneSelectors(scenes, uid, curActionNr) {
    $('#scene-' + uid + '-action-' + (Number(curActionNr)) + ' > .link-to-scene-selector').empty();
    //if(curOptionsArr.length > 0) {

    scenes.forEach(function (scene) {
        if (scene.uid != uid) {
            $('#scene-' + uid + '-action-' + (Number(curActionNr)) + ' > .link-to-scene-selector').append($('<option>', {
                id: 'opt' + scene.sceneName,
                value: scene.sceneName,
                text: scene.sceneName
            }));
        }
    });
    let curSelectedOpt = $('#scene-' + uid + '-action-' + (Number(curActionNr)) + ' > .link-to-scene-selector').val();
    if (curSelectedOpt != undefined) {
        for (let j = 0; j < scenes[uid].actions.length; j++) {
            if (scenes[uid].actions[j].uid == Number(curActionNr)) {
                scenes[uid].actions[j].toScene = curSelectedOpt;
            }
        }
        $('#scene-' + uid + '-action-' + (Number(curActionNr)) + ' > .link-to-scene-selector').val(curSelectedOpt);
    }
}
export function changeToScene(uid) {
    let scenes = store.get("scenes")
    //change id to act uid
    $('#newSceneContainer').remove();
  /*  var dialogs = $('.ui-dialog');

    $('.ui-dialog').each(function() {
        if ($(this).attr('aria-describedby').includes('scene-' + uid)) {
            $(this).show();
            let curDialogId = $(this).attr('aria-describedby')
            let curActionNr = curDialogId.substring((curDialogId.indexOf("action-") + 7), curDialogId.length);
            //updateActionLinkToSceneSelectors(scenes, uid, curActionNr)
        } else {
            $(this).hide();


        }
    })*/

    /*for (let i = 0; i < dialogs.length; i++) {
        if ($($(dialogs[i])[0]).attr('aria-describedby').includes('scene-' + uid)) {
            $('#' + $($(dialogs[i])[0]).attr('aria-describedby')).parent().hide();
        } else if ($($(dialogs[i])[0]).attr('aria-describedby').includes('scene-' + uid)) {
            $('#' + $($(dialogs[i])[0]).attr('aria-describedby')).parent().show();
            let curDialogId = $($(dialogs[i])[0]).attr('aria-describedby')
            let curActionNr = curDialogId.substring((curDialogId.indexOf("action-") + 7), curDialogId.length);
            updateActionLinkToSceneSelectors(scenes, uid, curActionNr)
        }
    }*/
    var props = $('.prop-item');

    $('.prop-item').each(function() {
        if (this.attributes[0].value.includes('scene-' + uid)) {
            $(this).show();
        } else {
            $(this).hide();
        }
    })

    $('.action-card, .action').each(function() {
        if (this.id.includes('scene-' + uid)) {
            $(this).show()
        } else {
            $(this).hide();
        }
    })

    let curSceneNr = store.get("curSceneNr")
    $('#selectorScene').val(uid).prop('selected', 'true');

    /*$('#scene-' + curSceneNr + '-img').on('load', function() {
  
    })*/

    $('#scene-' + curSceneNr + '-img').attr('src', scenes[uid].backgroundPath);
    $('#scene-' + curSceneNr + '-img').attr('id', 'scene-' + uid + '-img');
    $('#scene-' + curSceneNr).attr('id', 'scene-' + uid);


    store.update("curSceneNr", uid)
}


export function addActions(scene) {
    let scenes = store.get("scenes")
    let schatzImages = store.get("schatzImages")

    scene.actions.forEach(function (a) {
        switch (a.actionType) {
            case "card":
                Selectors.scene(scene.uid).append(getCardActionContent(scenes, scene, a));
                newCardListeners(scenes, scene, a, true)
                newCardSubscriptions(scene, a)
                break;
            default:
                Selectors.scene(scene.uid).append(getDialogueElement(scene, a));
                initDialogue(scene, a)
                newDialogueListeners(scenes, scene, a, true)

                if (a.actionType !== undefined && a.actionType.trim() != "") {
                    switch (a.actionType) {
                        case 'scenelink':
                            addSceneLinkButton(scenes, scene, a, schatzImages)
                            break;
                        case 'weblink':
                            addPlainLinkButton(scenes, scene, a)
                            break;
                    }
                }
                newDialogueSubscriptions(scene, a)
                break;
        }
    });
}


export function toggleControlPane() {
    let config = $('#controlPane').css('pointer-events') == 'none' ? { 'pointer-events': '', 'opacity': '1.0' } : { 'pointer-events': 'none', 'opacity': '0.5' }
    $('#controlPane').css(config);
}
export function showProp(objCategoriesToPaths, curPropFileNr) {
    let propPath = objCategoriesToPaths[$("#selectorCategory option:selected").text()][curPropFileNr];
    $('#propImage').attr('src', propPath);
}
export function changeToScreen(screenCode) {
    debugger
    let curSceneNr = store.get("curSceneNr")
    let relParents = [];
    $('.ui-dialog').each(function () {
        if ($(this).attr('aria-describedby').includes('scene-' + curSceneNr))
            relParents.push($(this))
    })
    $('.action-card').each(function () {
        if (this.id.includes('scene-' + curSceneNr))
            relParents.push($(this))
    })

    switch(screenCode) {
        case 1: //graphics screen
            $("#sceneLayer").css("display", "none");
            $("#graphicsLayer").css("display", "");
            relParents.forEach(el => el.hide());
            break;
        case 2: //scene screen
            $("#sceneLayer").css("display", "");
            $("#graphicsLayer").css("display", "none");
            relParents.forEach(el => el.show());
            break;
    }

}
export function initCurrentView(curSceneNr, scene) {
    $('#selectorScene').val(curSceneNr).prop('selected', 'true');
    $('#scene-' + curSceneNr + '-img').attr('src', scene.backgroundPath);
    $('#scene-' + curSceneNr + '-img').attr('id', 'scene-' + curSceneNr + '-img');
    $('#scene-' + curSceneNr).attr('id', 'scene-' + curSceneNr);
    $('#sceneNameDisplay').val(scene.sceneName);
}

export function showDialogsOfScene(curSceneNr) {
    let dialogs = $('.ui-dialog');
    for (let i = 0; i < dialogs.length; i++) {


        if ($($(dialogs[i])[0]).attr('aria-describedby').includes('scene-' + curSceneNr)) {
            $('#' + $($(dialogs[i])[0]).attr('aria-describedby')).parent().show();
        } else {
            $('#' + $($(dialogs[i])[0]).attr('aria-describedby')).parent().hide();
        }
    }
}

export function showPropsOfScene(curSceneNr) {
    let props = $('.prop-item');
    for (let i = 0; i < props.length; i++) {
        if (props[i].attributes[0].value.includes('scene-' + curSceneNr)) {
            $('#' + props[i].attributes[0].value).show();
        } else {
            $('#' + props[i].attributes[0].value).hide();
        }
    }
}

export function addProps(scene) {
    let scenes = store.get("scenes")
    scene.props.forEach(function (prop) {
        Selectors.scene(scene.uid).append(getDialogueElement(scene, dialogue));
        newPropListeners(scenes, scene, prop, true)
    });
}

export function deleteScene() {
    let scenes = store.get("scenes")
    let curSceneNr = store.get("curSceneNr")
    let scene = scenes[curSceneNr]

    toggleControlPane();
    $('#scene-' + curSceneNr).append(getDeleteSceneContainer(scene.sceneName));
    $('#confirmDeleteSceneButton').on('click', function () {
        if (scenes.length < 2) {
            showStatusText("Es muss mindestens 1 Szene existieren!");
        } else {
            $('#deleteSceneContainer').remove();
            let sceneToDeleteIndex;
            for (let i = 0; i < scenes.length; i++) {
                if (scenes[i].uid == curSceneNr) {
                    sceneToDeleteIndex = i;
                    break;
                }
            }
            $('.ui-dialog').each(function () {
                if ($(this).attr('aria-describedby').includes("scene-" + sceneToDeleteIndex)) {
                    $('#' + $(this).attr('aria-describedby')).remove();
                    $(this).remove();
                }
            });
            $('.prop-item').each(function () {
                if ($(this).attr('id').includes("scene-" + sceneToDeleteIndex)) {
                    $('#' + $(this).attr('id')).remove();
                }
            });
            $("#selectorScene option[value='" + curSceneNr + "']").remove();
            scenes.splice(sceneToDeleteIndex, 1);
            changeToScene(0, scenes, curSceneNr);
            toggleControlPane();
        }
    });
    $('#abortDeleteSceneButton').on('click', function () {
        $('#deleteSceneContainer').remove();
        toggleControlPane();
    });

    store.update("scenes", scenes)
}

function getDeleteSceneContainer(sceneName) {
    /*var mainOffset = $('#scene-' + curSceneNr).offset();
    var top = mainOffset.top + $('#scene-' + curSceneNr)[0].clientHeight/2;
    var left = mainOffset.left;*/
    let comp = '<div id="deleteSceneContainer">'
        + '<h5 class="delete-scene-name-text">Szene "' + sceneName + '" wirklich löschen?</h5>'
        + '<button id="confirmDeleteSceneButton">Ja</button>'
        + '<button id="abortDeleteSceneButton">Abbrechen</button>'
        + '</div>';
    return comp;
}


export function setBackgroundActive(setActive) {
    var opac = setActive ? '1.0' : '0.3';
    var pointers = setActive ? '' : 'none';
    $('#controlPane').css({
        'opacity': opac,
        'pointer-events': pointers
    });
    $('#mainContainer').css({
        'opacity': opac,
        'pointer-events': pointers
    });

}


var statusTextInt = undefined;

export function showStatusText(str) {
    if (statusTextInt != undefined)
        clearTimeout(statusTextInt);
    $('#saveText').css('display', 'none');
    $('#saveText').html(str);
    $('#saveText').fadeIn();
    statusTextInt = setTimeout(function () {
        $('#saveText').fadeOut();
    }, 5000);
}