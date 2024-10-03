import { initialize } from './init.js'
import {showError} from "./error-handling.js";
import { changeToScreen, showProp, changeBackground, setBackgroundActive, addScenes, addActions, deleteScene, addProps, changeToScene, showPropsOfScene, showDialogsOfScene, initCurrentView, toggleControlPane} from "./view-utils.js"
import {saveFunc, checksBeforeSaving} from "./save-util.js";
import {getBackgroundChangeContainer, newProp, newDialogueAction, newCardAction, newScene, Scene} from "./element-provider.js"
import { Store } from "./store.js"
import { ll } from "./i18next-translate.js"

const store = new Store();


// Mode of editor, 1 = dialogue-based, 2 = card-based
var tempRef = null;
//var scenes = [];
//var propFiles = [];
var curPropFileNr = 0;
//var prevDialogNr = 0;
//var dialogLinks = [];
//var tempActionNr = undefined;

var userUidStr = parent.userUid;
var gameid = parent.gameid;
var editorConf = parent.editorConf;
var sceneConf = JSON.parse(parent.jsonConf);
var isEditMode = parent.isEditMode;
var savePageId = parent.savePageId;
var saveTypenum = parent.saveTypenum;


const [objCategoriesToPaths, schatzImages] = initialize(parent.objektePaths, parent.schatzPaths, userUidStr);

store.update("schatzImages", schatzImages);
store.update("backgroundImages", parent.backgroundPaths);
store.update("saveTypenum", saveTypenum);
store.update("savePageId", savePageId);
store.update("roomId", gameid);

$(document).ready(function () {

//need at least 1 treasure item and at least 1 background image
    //if (parent.backgroundPaths.length <= 0) showError('Sie müssen erst mindestens 1 Hintergrundbild hochladen, um den Editor verwenden zu können!')
    if (store.get("backgroundImages").length <= 0) showError('Sie müssen erst ein Hintergrundbild hochladen, um im Editor das Spiel bearbeiten zu können!')
    if (isEditMode) {

        let scenes = sceneConf.scenes;
        store.update("scenes", scenes)


        //$('#controlPane').replaceWith(domJSON.toDOM(jsonEditConf.controlPane));
        $('#buttonScenes > a').attr('href', '#');
        $('#buttonGraphics > a').attr('href', '#');
        //scenes to container
        addScenes(scenes);
        store.update("curSceneNr", scenes[0].uid);

        scenes.forEach(function (scene) {
            changeToScene(scene.uid);
            addActions(scene)
            addProps(scene)
        });
        let curSceneNr = store.get("curSceneNr")
        changeToScene(scenes[0].uid);
        showDialogsOfScene(scenes[0].uid)
        showPropsOfScene(scenes[0].uid)

        setBackgroundActive(true);
        $('.loader').hide();
        //-----------------------------------------
       // initCurrentView(scenes[0].uid, scenes[0])

        //-----------------------------------------
        console.log(sceneConf);
    } else {
        store.update("scenes", [])
        store.update("curSceneNr", 0);
        setBackgroundActive(true);
        $('.loader').hide();
    }
    $(document).trigger('jsonLoaded');

});









$(document).on("jsonLoaded", function () {

    if (!isEditMode) {
        let scenes = store.get("scenes")
        if (scenes.length == 0) {
            scenes.push(Scene({
                sceneName: ll.t('scene.defaultName'),
                uid: 0,
                backgroundPath: 'sample.png'
            }));
            store.update("scenes", scenes)
        }

        $('#selectorScene').append([$('<option/>', {
            value: 0,
            text: ll.t('scene.defaultName')
        })]);
    } else {
        $('#selectorScene > option')
            .filter(function () {
                return !this.value || $.trim(this.value).length == 0 || $.trim(this.text).length == 0;
            })
            .remove();
    }

    for (const [i, [category, paths]] of Object.entries(Object.entries(objCategoriesToPaths))) {
        $('#selectorCategory').append($('<option>', {
            value: i,
            text: category
        }));
    }

    //$('#propImage').attr('src', objCategoriesToPaths[$("#selectorCategory option:selected").text()][0]);

    $('#selectorCategory').on('change', function () {
        $('#propImage').attr('src', objCategoriesToPaths[$("#selectorCategory option:selected").text()][0]);
    });


    $("#buttonGraphics").on("click", function () {
        changeToScreen(1);
    });

    $("#buttonScenes").on("click", function () {
        changeToScreen(2);
    });

    $("#tokenSelectorLeft").on("click", function () {
        if (curPropFileNr > 0) {
            curPropFileNr--;
            showProp(objCategoriesToPaths, curPropFileNr)
        }
    });

    $("#tokenSelectorRight").on("click", function () {
        if (curPropFileNr < objCategoriesToPaths[$("#selectorCategory option:selected").text()].length - 1) {
            curPropFileNr++;
            showProp(objCategoriesToPaths, curPropFileNr)
        }
    });


    $('#newCardButton').on('click', newCardAction);
    $('#newActionButton').on('click', newDialogueAction);


    $('#newSceneButton').on('click', newScene);

    $('#deleteSceneButton').on('click', deleteScene);

    $('#selectorScene').on('change', function () {
        changeToScene(Number(this.value));
    });;

    $('#propImage').on('click', newProp);

    $('#sceneNameDisplay').val(ll.t('scene.defaultName'));

    $('#saveButton').on('click', function () {
        setBackgroundActive(false);
        $('.loader').show();
        if (checksBeforeSaving()) {
            saveFunc(gameid);
        } else {
            setBackgroundActive(true);
            $('.loader').hide();
        }
    });

    $('#changeBackgroundButton').on('click', changeBackground);

});