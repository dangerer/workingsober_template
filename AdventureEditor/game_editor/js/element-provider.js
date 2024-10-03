import {  changeToScene, showStatusText, toggleControlPane} from "./view-utils.js"
import { Selectors } from "./c-selectors.js"
import { EditorId, initEditor } from "./editors.js"
import { Store } from "./store.js"
import {ll} from "./i18next-translate.js"


const store = new Store()
export function Round(I) {
    I.conversations = [];
    return I;
}

export function Conversation(I) {
    return I;
}

export function Prop(I) {
    I.actWidth = 0;
    I.actHeight = 0;
    return I;
}

export function Action(I) {
    //I.actionType = '';
    //I.rounds = [];
    return I;
}

export function Scene(I) {
    I.actions = [];
    I.props = [];
    I.addAction = function (a) {
        this.actions.push(a);
    }

    return I;
}


export function getDialogCreatedContainer() {
    //return '<p>Konversation konfiguriert</p> <button class="change-dialog" id="changeDialog-' + (curButtonChangeDialogNr++) + '">Dialog bearbeiten</button>';
    return `<p>${ll.t('dialog.isConfigured')}</p>`;

}

export function getCardActionContent(scenes, scene, action) {
    let props = action.properties
    let sceneNr = scene.uid
    let actionNr = action.uid

    return `<div id="scene-${sceneNr}-action-${actionNr}" class="action-card ui-widget-content p04rem">
     
      <div class="action-box" style="display:none; background-color:#efd30b; width:16px;height:16px;"></div>
      <div class="control-box">

        <div style="padding: 0px 4px;" class="button-minimize">${minimizeIconSVG}</div>
        <div style="padding: 0px 4px;" class="button-close">${deleteIconSVG}</div>
      </div>
    <div class="card-fields">
      <label for="title">${ll.t('card.title')}:</label>
      <input class="form-control" type="text" id="title" title="${ll.t('card.fields.initialText')}" value="${props ? props.title : ll.t('card.defaults.title')}">
      <label for="initialText">${ll.t('card.fields.initialText')}:</label>
                 <div class="card-fields-flex">

      <div id="scene-${sceneNr}-action-${actionNr}-edit-initialText" class="form-control"></div>
      <!--<textarea class="card-input form-control" id="scene-${sceneNr}-action-${actionNr}-initialText" title="The initial card text" rows=3 cols=15 style="width:100%;resize: vertical;">${props ? props.initialText:''}</textarea>-->
     </div>      <div class="card-fields-flex">

      <label for="advancingText">${ll.t('card.fields.advancingText')}:</label> 
      <div class="info-block">
        <a class="field-tooltip" href="#" data-tooltip="Tooltip text :)"><span>i</span></a>
       </div>
       </div>
      <!--<textarea ${props.requiredCard == -1 ? 'disabled':''} class="card-input form-control" id="advancingText" title="${ll.t('card.fields.advancingText')}" rows=3 cols=15 style="width:100%;resize: vertical;">${props ? props.advancingText:''}</textarea>-->
       <div id="scene-${sceneNr}-action-${actionNr}-edit-advancingText" class="form-control"></div>


      <div class="card-fields-flex">
        <p style="margin: 0.5rem;">${ll.t('card.fields.requiredCard')}:</p> <select class="form-control" id="selector-requiredCard">
        ${getCardOptions(scenes, scene, action)}
        </select>
      </div>
      <div class="card-fields-flex">
        <p style="margin: 0.5rem;">${ll.t('card.fields.receiveCard')}</p> <input id="check-receiveCard" class="form-control" type="checkbox" ${props && props.doReceiveCard ? "checked" : ""}/>
      </div>
      <div class="card-fields-flex">
        <p style="margin: 0.5rem;">${ll.t('card.fields.sceneLink')}:</p> <select class="form-control" id="selector-scenelink"> 
                ${getSceneLinkOptions(scenes, scene, action.properties.sceneLink)}
        </select>
          </div>
          <div class="card-fields-flex">
        <p style="margin: 0.5rem;">${ll.t('card.fields.isFinalScene')}</p>
        <input ${props && props.doReceiveCard ? 'disabled':''} id="check-endWithLink" class="form-control" type="checkbox" ${props && props.doEndWithLink ? "checked" : ""} />
      </div>
    </div>
    </div>`
}

export function getSceneLinkOptions(scenes, scene, curSceneLink) {
    let comp = `<option value="-1">${ll.t('card.defaults.sceneLink')}</option>`;
    for (var i = 0; i < scenes.length; i++) {
        if (scenes[i].uid != scene.uid)
            comp += `<option id="opt${scenes[i].sceneName}" value="${scenes[i].uid}" ${curSceneLink != null && curSceneLink == scenes[i].uid ? 'selected' : ''}>${scenes[i].sceneName}</option>`;
    }
    return comp;
}

export function getCardOptions(scenes, scene, action) {
    let curRequiresCard = action.properties.requiredCard
    let comp = `<option value="-1">${ll.t('card.defaults.requiredCard')}</option>`;
    for (let i = 0; i < scenes.length; i++) {
        for (let j = 0; j < scenes[i].actions.length; j++) {
            let curAction = scenes[i].actions[j];
            if ((curAction.uid != action.uid || scenes[i].uid != scene.uid) && curAction.actionType == 'card' && curAction.properties.doReceiveCard)
                comp += `<option ${curRequiresCard && curRequiresCard == (scenes[i].uid + '-' + curAction.uid) ? 'selected':''} id="opt${scenes[i].sceneName}-${curAction.uid}" value="${scenes[i].uid}-${curAction.uid}">${curAction.properties.title}</option>'`;
        }
    }
    return comp;
}

export function getSceneLinkActionContainer(scenes, curScene, action, schatzImages) {
    var comp = `<p class="selection-box-text">${ll.t('dialog.scenelink.connectWithScene')}</p><select class="link-to-scene-selector">`;
    comp += getSceneLinkOptions(scenes, curScene, action.toScene)
    comp += '</select>';
    comp += `<p class="selection-box-text">${ll.t('dialog.scenelink.requiredItem')}</p><select class="scene-link-selector">`;
    comp += '<option id="item-none" value="none">kein Item</option>';
    for (let i = 0; i < schatzImages.length; i++) {
        comp += '<option id="item-' + schatzImages[i].name + '" value="' + schatzImages[i].name + '">' + schatzImages[i].name
            + '</option>';
    }
    return comp;
}

export function getWebLinkActionContainer(link) {
    var comp = `<p>${ll.t('dialog.weblink.pageURL')}</p><input type="text" value="${link != null ? link : "url"}" class="linkToURL"></br>`;
    return comp;
}



export function getChoosableActionContainer() {
    return '<div class="container" id="choosableActions">'
        + '<div class="row">'
        + '<div class="col-6"><button class="sceneLinkButton"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-link" viewBox="0 0 16 16">\n' +
        '  <path d="M6.354 5.5H4a3 3 0 0 0 0 6h3a3 3 0 0 0 2.83-4H9c-.086 0-.17.01-.25.031A2 2 0 0 1 7 10.5H4a2 2 0 1 1 0-4h1.535c.218-.376.495-.714.82-1z"/>\n' +
        '  <path d="M9 5.5a3 3 0 0 0-2.83 4h1.098A2 2 0 0 1 9 6.5h3a2 2 0 1 1 0 4h-1.535a4.02 4.02 0 0 1-.82 1H12a3 3 0 1 0 0-6H9z"/>\n' +
        '</svg></button></div>'
        + '<div class="col-6"><button class="plainLinkButton"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-box-arrow-up-right" viewBox="0 0 16 16">\n' +
        '  <path fill-rule="evenodd" d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5z"/>\n' +
        '  <path fill-rule="evenodd" d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0v-5z"/>\n' +
        '</svg></button></div>'
        + '</div> </div>';
}


export function newCardListeners(scenes, scene, action, reInit) {
    const advancingTextEditor = initEditor(scene, action, EditorId.advancingText)

    const initialTextEditor = initEditor(scene, action, EditorId.initialText)

    $('#scene-' + scene.uid + '-action-' + action.uid)

        .draggable(
        {
            cursor: "move",
            position: { my: "center center", at: "center center", of: "#scene-" + scene.uid }, // Set the position to center of the div.
            containment: $(".scene"), // The element the dialog is constrained to.
            cancel: `.form-control`,
            opacity: 0.80, // Fancy opacity. Optional.
            stop: function (event, ui) {
                var offset = $(this).offset();
                var offsetMain = $('#mainContent').offset();
                var left = offset.left - offsetMain.left;
                var top = offset.top - offsetMain.top;

                let actIdx = scene.actions.findIndex(x => x.uid == action.uid)


                scene.actions[actIdx].x = left;
                scene.actions[actIdx].y = top;
                scene.actions[actIdx].actWidth = $(this)[0].clientWidth;
                scene.actions[actIdx].actHeight = $(this)[0].clientHeight;

                let scenes = store.get("scenes")
                scenes[scenes.findIndex(x => x.uid == scene.uid)] = scene
                store.update("scenes", scenes)
            }
        })

   /* $('#scene-' + scene.uid + '-action-' + action.uid).children('div').first().resizable({
        containment: $(".scene"), // The element the dialog is constrained to.
    });
*/
    $(`#scene-${scene.uid}-action-${action.uid} .button-minimize`).on("click",  function(e) {
        let actIdx = scene.actions.findIndex(x => x.uid == action.uid)
        let props = scene.actions[actIdx].properties
        props.isMinimized = true;

        let title = $(this).parent().parent().find('#title').val()
        if (title.trim().length > 0) {
            $(this).closest('.action-card').toggleClass("p04rem").width(16).height(16)
            $(this).parent().hide(100)
            $(this).parent().siblings(".card-fields").hide(100)
            $(this).parent().siblings(".action-box").show(100);
        } else {
            showStatusText(ll.t('status.needTitleForCards'))
        }
        let scenes = store.get("scenes")
        scenes[scenes.findIndex(x => x.uid == scene.uid)] = scene
        store.update("scenes", scenes)

    });
    $(`#scene-${scene.uid}-action-${action.uid} .action-box`).on("dblclick", function(e) {
        let actIdx = scene.actions.findIndex(x => x.uid == action.uid)
        let props = scene.actions[actIdx].properties
        props.isMinimized = false;

        $(this).closest('.action-card').width(230).height(290).toggleClass("p04rem").find('.control-box, .card-fields').show(100)
        $(this).hide(100)

        let scenes = store.get("scenes")
        scenes[scenes.findIndex(x => x.uid == scene.uid)] = scene
        store.update("scenes", scenes)
    });
    $(`#scene-${scene.uid}-action-${action.uid} .card-fields`).find('input, textarea, select').on('change keyup', function(e) {
        let elId = this.id
        let actIdx = scene.actions.findIndex(x => x.uid == action.uid)
        let props = scene.actions[actIdx].properties
        let cardFields = $(this).closest('.card-fields');

        switch(elId) {
            case "check-receiveCard":
                props['doReceiveCard'] = $(this).prop('checked')
                break;
            case "check-endWithLink":
                props['doEndWithLink'] = $(this).prop('checked')
                break;
            case "selector-scenelink":
               /* let a = $(this).val()
                let b = cardFields.find('.check-receiveCard').is(':checked')
                debugger
                */
                props['sceneLink'] = Number($(this).val())
                break;
            case "selector-requiredCard":
                props['requiredCard'] = $(this).val()
                advancingTextEditor.readOnly.toggle(cardFields.find('#selector-requiredCard').val() == -1);
                break;
          /*  case "advancingText":
                props['advancingText'] = $(this).val()
                break;
            case "initialText":
                props['initialText'] = $(this).val()
                break;*/
            case "title":
                props['title'] = $(this).val()

                break;
        }

        let noSceneSelectedOrReceiveCard = cardFields.find('.check-receiveCard').is(':checked')
        cardFields.find('#check-endWithLink').prop('disabled', noSceneSelectedOrReceiveCard);

        let scenes = store.get("scenes")
        scenes[scenes.findIndex(x => x.uid == scene.uid)] = scene
        store.update("scenes", scenes)
    });


    //on dialog close, remove action
    $(`#scene-${scene.uid}-action-${action.uid} div.button-close`).on('click', function (e) {
            let selectedId = $(this).closest('.action-card').attr("id");
            let idNr = selectedId.substring((selectedId.indexOf("action-") + 7), selectedId.length);
            scene.actions = scene.actions.filter(a => a.uid != idNr)

       // let actionId = $(e.target)[0].id;

      //  let actionNr =  actionId.split('-')[3];
        // $(e.target).parent().remove();
        //   $('#scene-' + scene.uid + '-action-' + actionNr).remove();
        store.unsubscribe(`${scene.uid}-${action.uid}`)
        let scenes = store.get("scenes")
        scenes[scenes.findIndex(x => x.uid == scene.uid)] = scene
        store.update("scenes", scenes)
        $(this).closest('.action-card').remove()
    });

    if (reInit) {
        $(`#scene-${scene.uid}-action-${action.uid}`).css({'top': action.y, 'left':action.x})
        $(`#scene-${scene.uid}-action-${action.uid} .button-minimize`).trigger('click')
    } else {
        $(`#scene-${scene.uid}-action-${action.uid}`).css({'top': 100, 'left':200})
    }

}

export function newCardAction() {
    let curSceneNr = store.get("curSceneNr")
    let scenes = store.get("scenes")
    let scene = scenes[curSceneNr]
    //let schatzImages = store.get("schatzImages")
    //let curButtonCreateSceneLinkNr = store.get("sceneLinkNr")

    //store action
    let action = Action({
        uid: scene.actions.length > 0 ? getMaxPropInArr(scene.actions, 'uid')+1 : 0,
        actionType: "card",
        properties: {
            "isMinimized": false,
            "doReceiveCard": false,
            "doEndWithLink": false,
            "sceneLink": -1,
            "requiredCard": -1,
            "advancingText": '',
            "initialText": '',
            "title": ll.t('card.defaults.title'),

        }
    })
    scene.actions.push(action);

    Selectors.scene(scene.uid).append(`${getCardActionContent(scenes, scene, action)}`);




    newCardListeners(scenes, scene, action, false)


    scenes[curSceneNr] = scene
    store.update("scenes", scenes)

    newCardSubscriptions(scene, action)


}

export function newCardSubscriptions(scene, action) {
    store.subscribe(`${scene.uid}-${action.uid}`,(() => {
        return (data) => {
            $(`#scene-${scene.uid}-action-${action.uid} #selector-requiredCard`).html(getCardOptions(data.scenes, scene, action))
            $(`#scene-${scene.uid}-action-${action.uid} #selector-scenelink`).html(getSceneLinkOptions(data.scenes, scene, action.properties.sceneLink))
        }
    })())
}

export function addPlainLinkButton(scenes, scene, dialogue) {
    dialogue.actionType = 'weblink';
    $(`#scene-${scene.uid}-action-${dialogue.uid} .action-fields`).html(getWebLinkActionContainer(dialogue.weblink));
    dialogue.weblink = $(`${scene.uid}-action-${dialogue.uid} .linkToURL`).val();
    $(`#scene-${scene.uid}-action-${dialogue.uid} .linkToURL`).on('change keyup', function(e) {
        let diaIdx = scene.actions.findIndex(x => x.uid == dialogue.uid)

        if (this.classList.contains('linkToURL')) {
            scene.actions[diaIdx].weblink = this.value
        }

        let scenes = store.get("scenes")
        scenes[scenes.findIndex(x => x.uid == scene.uid)] = scene
        store.update("scenes", scenes)
    })
}


export function addSceneLinkButton(scenes, scene, dialogue, schatzImages) {
    dialogue.actionType = 'scenelink';

    $(`#scene-${scene.uid}-action-${dialogue.uid} .action-fields`).html(getSceneLinkActionContainer(scenes, scene, dialogue, schatzImages));
    dialogue.toScene = Number($(`#scene-${scene.uid}-action-${dialogue.uid} .link-to-scene-selector`).val());
    $(`#scene-${scene.uid}-action-${dialogue.uid} .link-to-scene-selector, #scene-${scene.uid}-action-${dialogue.uid} .scene-link-selector`).on('change', function(e) {
        let diaIdx = scene.actions.findIndex(x => x.uid == dialogue.uid)

        if (this.classList.contains('link-to-scene-selector')) {
            scene.actions[diaIdx].toScene = Number(this.value)
        } else if (this.classList.contains('scene-link-selector')) {
            scene.actions[diaIdx].conditionItem = this.value
        }

        let scenes = store.get("scenes")
        scenes[scenes.findIndex(x => x.uid == scene.uid)] = scene
        store.update("scenes", scenes)
    })

}

export function getDialogueElement(scene, dialogue) {
    let isMinimized = dialogue.properties.isMinimized
    return `
    <div class="action ui-widget-content" id="scene-${scene.uid}-action-${dialogue.uid}">
      <div class="action-box" style="${!isMinimized ? 'display:none;': ''} background-color:darkgray; border-radius: 5px; width:80px;height:80px;"></div>
      <div class="control-box" style="display:flex;${isMinimized ? 'display:none;': ''}">
        <div style="padding: 0px 4px;" class="button-minimize">${minimizeIconSVG}</div>
        <div style="padding: 0px 4px;" class="button-close">${deleteIconSVG}</div>
      </div>
      <div class="action-fields" ${isMinimized ? 'style="display:none;"': ''}>
        ${getChoosableActionContainer()}
       </div>
     </div>`
}

export function initDialogue(scene, dialogue, reInit) {

    $(`#scene-${scene.uid}-action-${dialogue.uid} .action-box`).resizable(
        {
            containment: "#scene-" + scene.uid, // Constrains the resizing to the div.
            ///appendTo: '#scene-' + scene.uid
            stop: function (event, ui) {
                /*var offset = $(this).offset();
                var offsetMain = $('#mainContent').offset();
                var left = offset.left - offsetMain.left;
                var top = offset.top - offsetMain.top;*/

                let diaIdx = scene.actions.findIndex(x => x.uid == dialogue.uid)
                //scene.actions[diaIdx].x = left;
               // scene.actions[diaIdx].y = top;
                scene.actions[diaIdx].actWidth = $(this)[0].clientWidth;
                scene.actions[diaIdx].actHeight = $(this)[0].clientHeight;

                let scenes = store.get("scenes")
                scenes[scenes.findIndex(x => x.uid == scene.uid)] = scene
                store.update("scenes", scenes)
            }
        })
    $(`#scene-${scene.uid}-action-${dialogue.uid}`).draggable(
        {
            cursor: "move",
            position: { my: "center center", at: "center center", of: "#scene-" + scene.uid }, // Set the position to center of the div.
            // Settings that execute when the dialog is dragged. If parent isn't used the text content will have dragging enabled.
            containment: "#scene-" + scene.uid, // The element the dialog is constrained to.
            opacity: 0.70, // Fancy opacity. Optional.
            stop: function (event, ui) {
                var offset = $(this).offset();
                var offsetMain = $('#mainContent').offset();
                var left = offset.left - offsetMain.left;
                var top = offset.top - offsetMain.top;

                let diaIdx = scene.actions.findIndex(x => x.uid == dialogue.uid)
                scene.actions[diaIdx].x = left;
                scene.actions[diaIdx].y = top;
              //  scene.actions[diaIdx].actWidth = $(this)[0].clientWidth;
              //  scene.actions[diaIdx].actHeight = $(this)[0].clientHeight;

                let scenes = store.get("scenes")
                scenes[scenes.findIndex(x => x.uid == scene.uid)] = scene
                store.update("scenes", scenes)
            }
        });

    $(`#scene-${scene.uid}-action-${dialogue.uid} .button-minimize`).on("click",  function(e) {
        let actIdx = scene.actions.findIndex(x => x.uid == dialogue.uid)
        let props = scene.actions[actIdx].properties
        props.isMinimized = true;

        //let title = $(this).parent().parent().find('#title').val()
       // if (title.trim().length > 0) {
            //$(this).closest('.action-card').width(16).height(16)
        $(this).closest('.action').css('background', 'unset')
        $(this).parent().hide(100)
        $(this).parent().siblings(".action-fields").hide(100)
        $(this).parent().siblings(".action-box").show(100);
       // } else {
        //    showStatusText(ll.t('status.needTitleForCards'))
        //}
        let scenes = store.get("scenes")
        scenes[scenes.findIndex(x => x.uid == scene.uid)] = scene
        store.update("scenes", scenes)

    });

    $(`#scene-${scene.uid}-action-${dialogue.uid} .action-box`).on("dblclick", function(e) {
        let actIdx = scene.actions.findIndex(x => x.uid == dialogue.uid)
        let props = scene.actions[actIdx].properties
        props.isMinimized = false;

        $(this).closest('.action').css('background', 'darkgray')

        $(this).siblings('.control-box, .action-fields').show(100)
        $(this).hide(100)

        let scenes = store.get("scenes")
        scenes[scenes.findIndex(x => x.uid == scene.uid)] = scene
        store.update("scenes", scenes)
    });

    //$(`#w-scene-${scene.uid}-action-${dialogue.uid}`).css({'top': 100, 'left':200})

    /*$(`#scene-${scene.uid}-action-${dialogue.uid}`).dialog(
        {
            // Set the settings for the jquery-ui dialog here.
            autoOpen: true, // Don't open the dialog instantly. Let an event such as a button press open it. Optional.
            position: { my: "center", at: "center", of: "#scene-" + scene.uid } // Set the position to center of the div.
            ///appendTo: '#scene-' + scene.uid
        }).parent().resizable(
        {
            // Settings that will execute when resized.
            containment: "#scene-" + scene.uid // Constrains the resizing to the div.
        }).draggable(
        {
            // Settings that execute when the dialog is dragged. If parent isn't used the text content will have dragging enabled.
            containment: "#scene-" + scene.uid, // The element the dialog is constrained to.
            opacity: 0.70, // Fancy opacity. Optional.
            stop: function (event, ui) {
                var offset = $(this).offset();
                var offsetMain = $('#mainContent').offset();
                var left = offset.left - offsetMain.left;
                var top = offset.top - offsetMain.top;

                let diaIdx = scene.actions.findIndex(x => x.uid == dialogue.uid)
                scene.actions[diaIdx].x = left;
                scene.actions[diaIdx].y = top;
                scene.actions[diaIdx].actWidth = $(this)[0].clientWidth;
                scene.actions[diaIdx].actHeight = $(this)[0].clientHeight;

                let scenes = store.get("scenes")
                scenes[scenes.findIndex(x => x.uid == scene.uid)] = scene
                store.update("scenes", scenes)
            }
        });*/

    $(`#scene-${scene.uid}-action-${dialogue.uid} div.button-close`).on('click', function (e) {
        scene.actions = scene.actions.filter(a => a.uid != dialogue.uid)

        let scenes = store.get("scenes")
        scenes[scenes.findIndex(x => x.uid == scene.uid)] = scene
        store.update("scenes", scenes)
        store.unsubscribe(`${scene.uid}-${dialogue.uid}`)

        $(this).closest('.action').remove()
    });

    if (reInit) {
        $(`#scene-${scene.uid}-action-${dialogue.uid} .action-box`).css({'width': dialogue.actWidth, 'height': dialogue.actHeight})
        $(`#scene-${scene.uid}-action-${dialogue.uid}`).css({'top': dialogue.y, 'left': dialogue.x})
    } else {
        $(`#scene-${scene.uid}-action-${dialogue.uid}`).css({'top': 100, 'left':200})
    }

}

export function newDialogueListeners(scenes, scene, dialogue, reInit) {
    let sActionId = `#scene-${scene.uid}-action-${dialogue.uid}`
    let schatzImages = store.get("schatzImages")

    initDialogue(scene, dialogue, reInit)
    //on click on text, show options

        $(`${sActionId} .sceneLinkButton`).on('click', function () {
            addSceneLinkButton(scenes, scene, dialogue, schatzImages)
        });
        $(`${sActionId} .plainLinkButton`).on('click', function () {
            addPlainLinkButton(scenes, scene, dialogue)
        });

        /*$('#newDialogButton-' + curButtonNewDialogNr).on('click', function () {
            for (var objIndex = 0; objIndex < scene.actions.length; objIndex++) {
                if (scene.actions[objIndex].uid == thisActionNr) break;
            }
            scene.actions[objIndex].actionType = 'dialog';
            toggleControlPane();
            let curDialogId = $(this).parent().parent().parent().parent().parent()[0].id;
            let tempActionNr = curDialogId.split('-')[3];
            $('#scene-' + scene.uid + '-action-' + tempActionNr).html(getDialogCreatedContainer());
            $('#scene-' + scene.uid + '-action-' + tempActionNr + ' .change-dialog').on('click', function () {
                console.log("HII");
            });
            let curPageDialogs = $('.ui-dialog');
            for (let i = 0; i < curPageDialogs.length; i++) {
                if (curPageDialogs[i].attributes[3].value.includes('scene-' + scene.uid)) {
                    $('#' + curPageDialogs[i].attributes[3].value).parent().css('display', 'none');
                }
            }
            let curRoundNr = 0;
            $('#scene-' + scene.uid).hide();
            //console.log($('#' + selectedId).parent());
            $('#' + selectedId).parent().hide();
            createDialog(scene, tempActionNr, schatzImages, curRoundNr, null);
            //changeDialog-' + (curButtonChangeDialogNr++) + '

        });*/
        //store.update("sceneLinkNr", curButtonCreateSceneLinkNr+1);
        //store.update("newDialogNr", curButtonNewDialogNr+1);
        //store.update("webLinkNr", curButtonCreateWebLinkNr+1);



}

function getMaxPropInArr(arr, prop) {
    return arr.reduce(function(prev, current) {
        return (prev[prop] > current[prop]) ? prev : current
    })[prop]
}
export function newDialogueAction() {
    let curSceneNr = store.get("curSceneNr")
    let scenes = store.get("scenes")
    let scene = scenes[curSceneNr]
    let schatzImages = store.get("schatzImages")
    //let curButtonCreateSceneLinkNr = store.get("sceneLinkNr")
    //let curButtonCreateWebLinkNr = store.get("webLinkNr")
    //let curButtonNewDialogNr = store.get("newDialogNr")


    let dialogue = Action({
        uid: scene.actions.length > 0 ? getMaxPropInArr(scene.actions, 'uid')+1 : 0,
            properties: {
                isMinimized: false
            }
    });
    scene.actions.push(dialogue)

    Selectors.scene(scene.uid).append(getDialogueElement(scene, dialogue));
    newDialogueListeners(scenes, scene, dialogue, false)

    scenes[curSceneNr] = scene
    store.update("scenes", scenes)
    newDialogueSubscriptions(scene, dialogue)

}


export function newDialogueSubscriptions(scene, action) {
    store.subscribe(`${scene.uid}-${action.uid}`,(() => {
        return (data) => {
            if (action.actionType == 'scenelink')
                $(`#scene-${scene.uid}-action-${action.uid} .link-to-scene-selector`).html(getSceneLinkOptions(data.scenes, scene, action.toScene))
        }
    })())
}
export function getBackgroundChangeContainer(initialBackgroundPath, curSceneNr) {
    let mainOffset = $('#scene-' + curSceneNr).offset();
    let top = mainOffset.top + $('#scene-' + curSceneNr)[0].clientHeight / 2;
    let left = mainOffset.left;
    var comp = '<div id="changeBackgroundContainer">'
        + '<div class="container">'
        + '<div class="row">'
        + '<div class="col-1">'
        + '<div id="backgroundImageSelectorLeft" class="arrow-left"> </div>'
        + '</div>'
        + '<div class="col-10">'
        + '<img id="changeToImage" src="' + initialBackgroundPath + '">'
        + '</div>'
        + '<div class="col-1">'
        + '<div id="backgroundImageSelectorRight" class="arrow-right"> </div>'
        + '</div>'
        + '</div>'
        + '<div id="confirmBackImageContainer" class="row">'
        + '<button id="confirmBackgroundImageButton">Als Hintergrund verwenden</button>'
        + '</div>'
        + '</div>'
        + '</div>';
    return comp;
}


function getPropElement(scene, prop) {
    let sceneNr = scene.uid
    let propNr = prop.uid

    return `<div id="scene-${sceneNr}-prop-${propNr}" class="prop-item" style="position:absolute;top:0px;left:0px;">
        <img id="scene-${scene.uid}-prop-${propNr}-img"  width="100" height="100"
        src="${prop.filepath}"></div>`
}

export function newPropListeners(scenes, scene, prop, reInit) {
    Selectors.sceneProp(scene.uid, prop.uid).draggable({
        // Settings that execute when the dialog is dragged. If parent isn't used the text content will have dragging enabled.
        containment: "#scene-" + scene.uid,
        //position: { my: "center", at: "center", of: "#scene-" + curSceneNr }, // Set the position to center of the div.

        stop: function (event, ui) {
            var offset = $(this).offset();

            var offsetMain = $('#mainContent').offset();
            var left = offset.left - offsetMain.left;
            var top = offset.top - offsetMain.top;
           // let selectedId = this.id
           // let idNr = selectedId.substring((selectedId.indexOf("prop-") + 5), selectedId.length);

            let propIdx = scene.props.findIndex(x => x.uid == prop.uid)
            scene.props[propIdx].x = left;
            scene.props[propIdx].y = top;
            scene.props[propIdx].actWidth = $(this)[0].clientWidth;
            scene.props[propIdx].actHeight = $(this)[0].clientHeight;

            let scenes = store.get("scenes")
            scenes[scenes.findIndex(x => x.uid == scene.uid)] = scene
            store.update("scenes", scenes)
        }
    });

    Selectors.scenePropImage(scene.uid, prop.uid).resizable({
        start: function (event, ui) {},
        resize: function (event, ui) {},
        stop: function (event, ui) {
            //unsure!
            //let selectedId = $(this).parent()[0].attributes[0].value;
            //let selectedId = $(this).parent()[0].id
            //let idNr = selectedId.substring((selectedId.indexOf("prop-") + 5), selectedId.length);
            let propIdx = scene.props.findIndex(x => x.uid == prop.uid)

            scene.props[propIdx].actWidth = $(this).parent()[0].clientWidth;
            scene.props[propIdx].actHeight = $(this).parent()[0].clientHeight;

            let scenes = store.get("scenes")
            scenes[scenes.findIndex(x => x.uid == scene.uid)] = scene
            store.update("scenes", scenes)
        }
    });

    Selectors.sceneProp(scene.uid, prop.uid).dblclick(function (e) {
        scene.props = scene.props.filter(a => a.uid != prop.uid)

        //unsure
        let scenes = store.get("scenes")
        scenes[scenes.findIndex(x => x.uid == scene.uid)] = scene
        store.update("scenes", scenes)

        Selectors.any(`#${this.id}`).remove();

    });
    if (reInit) {
        Selectors.sceneProp(scene.uid, prop.uid).css({'height': prop.actHeight, 'width':prop.actWidth, 'top': prop.y, 'left': prop.x})
        Selectors.scenePropImage(scene.uid, prop.uid).css({'height': prop.actHeight, 'width':prop.actHeight})
        Selectors.any(`#scene-${scene.uid}-prop-${prop.uid} > .ui-wrapper`).css({'height': prop.actHeight, 'width':prop.actWidth})
    }
}
export function newProp() {
    let curSceneNr = store.get("curSceneNr")
    let scenes = store.get("scenes")
    let scene = scenes[curSceneNr]
    let propSrc = Selectors.selectorProp().attr('src');

    let prop = Prop({
        uid: scene.props.length,
        filepath: propSrc
    })
    scene.props.push(prop)

    Selectors.scene(scene.uid).append(getPropElement(scene, prop));
    newPropListeners(scenes, scene, prop, false)

    scenes[curSceneNr] = scene
    store.update("scenes", scenes)
}

function getNewSceneContainer(scene) {
    var mainOffset = $('#scene-' + scene.uid).offset();
    var top = mainOffset.top + $('#scene-' + scene.uid)[0].clientHeight / 2;
    var left = mainOffset.left;
    var comp = '<div id="newSceneContainer">'
        + '<h5 class="new-scene-name-text"> Wie soll die neue Szene heißen?</h5>'
        + '<input type="text" id="newSceneName"></br>'
        + '<button id="confirmSceneName">OK</button>'
        + '</div>';
    return comp;
}


export function newScene() {
    let scenes = store.get("scenes")
    let curScene = scenes[store.get("curSceneNr")]
    toggleControlPane();
    Selectors.scene(curScene.uid).append(getNewSceneContainer(curScene));

    $('#confirmSceneName').on('click', function () {
        let newSceneName = $('#newSceneName').val();
        scenes.push(Scene({
            sceneName: newSceneName,
            uid: scenes.length > 0 ? getMaxPropInArr(scenes, 'uid')+1 : 0,
            backgroundPath: 'sample.png'
        }));
        store.update("scenes", scenes)

        $('#selectorScene').append($('<option/>', {
            value: scenes.length - 1,
            text: newSceneName
        }));
        changeToScene(scenes.length - 1);
        Selectors.currentSceneImage().attr('src', 'sample.png');
        toggleControlPane();
    });
}


export function createDialog(scene, actionNr, schatzImages, roundNr, eventCreator) {
    $('#mainContent').append(getDialogActionContainer(schatzImages, roundNr));
    if (roundNr === 0)
        $('#dialogContainer-' + roundNr).find('.arrow-left').remove();
    addDialogListeners(scene, actionNr, roundNr);
    addDialogArrowListeners(schatzImages, actionNr, roundNr, eventCreator);
}
export function addDialogArrowListeners(scene, actionNr, schatzImages, roundNr, eventCreator) {
    if (eventCreator !== null && eventCreator != undefined) {
        let e = eventCreator;
        let rightArrowId = e.currentTarget.attributes[0].value;
        leftArrowId = rightArrowId.substring(0, 6) + roundNr + rightArrowId.substring(7, rightArrowId.length - 5);
        leftArrowId += 'left';
        $('#' + leftArrowId).removeClass('blurry');
        $('#' + leftArrowId).on('click', function (e) {
            $(this).parent().parent().parent().hide();
            $('#dialogContainer-' + rightArrowId.charAt(6)).show();
        })

    }
    for (let i = 1; i <= 3; i++) {

        $('#round-' + roundNr + '-conv-' + i + '-arrow-right').on('click', function (e) {
            if (!$(e.target).hasClass('blurry')) {
                $(this).parent().parent().parent().hide();
                let curLink = getArrowLink($(this));
                if (curLink != undefined) {
                    $('#dialogContainer-' + curLink).show();
                } else {
                    roundNr++;
                    dialogLinks.push({
                        arrow: $(this),
                        linkTo: roundNr
                    });
                    createDialog(scene, actionNr, schatzImages, roundNr, e);
                }
            }
        })
    }
}

function getArrowLink(ref) {
    for (let i = 0; i < dialogLinks.length; i++) {
        if (dialogLinks[i].arrow[0].id == ref[0].id) {
            return dialogLinks[i].linkTo;
        }
    }
    return undefined;
}



function addDialogListeners(scene, actionNr, roundNr) {
    for (let i = 1; i <= 3; i++) {
        $('#round-' + roundNr + '-conv-' + i + '-request').change(function () {
            if ($.trim($('#round-' + roundNr + '-conv-' + i + '-request').val())
                && $.trim($('#round-' + roundNr + '-conv-' + i + '-response').val())) {
                $('#round-' + roundNr + '-conv-' + i + '-radio-endline').attr('disabled', false);
                $('#round-' + roundNr + '-conv-' + i + '-radio-continuedialog').attr('disabled', false);
                $('#round-' + roundNr + '-conv-' + i + '-radio-enddialog').attr('disabled', false);
                $('#collectibleSelector-' + roundNr + '-conv-' + i).prop('disabled', false);
                if ($('#round-' + roundNr + '-conv-' + i + '-radio-continuedialog').is(':checked'))
                    $('#round-' + roundNr + '-conv-' + i + '-arrow-right').removeClass('blurry');
            } else {
                $('#round-' + roundNr + '-conv-' + i + '-arrow-right').addClass('blurry');
                $('#round-' + roundNr + '-conv-' + i + '-radio-endline').attr('disabled', true);
                $('#round-' + roundNr + '-conv-' + i + '-radio-continuedialog').attr('disabled', true);
                $('#round-' + roundNr + '-conv-' + i + '-radio-enddialog').attr('disabled', true);
                $('#collectibleSelector-' + roundNr + '-conv-' + i).prop('disabled', true);

            }

        })
        $('#round-' + roundNr + '-conv-' + i + '-response').change(function () {
            if ($.trim($('#round-' + roundNr + '-conv-' + i + '-request').val())
                && $.trim($('#round-' + roundNr + '-conv-' + i + '-response').val())) {
                $('#round-' + roundNr + '-conv-' + i + '-radio-endline').attr('disabled', false);
                $('#round-' + roundNr + '-conv-' + i + '-radio-continuedialog').attr('disabled', false);
                $('#round-' + roundNr + '-conv-' + i + '-radio-enddialog').attr('disabled', false);
                $('#collectibleSelector-' + roundNr + '-conv-' + i).prop('disabled', false);
                if ($('#round-' + roundNr + '-conv-' + i + '-radio-continuedialog').is(':checked'))
                    $('#round-' + roundNr + '-conv-' + i + '-arrow-right').removeClass('blurry');
            } else {
                $('#round-' + roundNr + '-conv-' + i + '-arrow-right').addClass('blurry');
                $('#round-' + roundNr + '-conv-' + i + '-radio-endline').attr('disabled', true);
                $('#round-' + roundNr + '-conv-' + i + '-radio-continuedialog').attr('disabled', true);
                $('#round-' + roundNr + '-conv-' + i + '-radio-enddialog').attr('disabled', true);
                $('#collectibleSelector-' + roundNr + '-conv-' + i).prop('disabled', true);

            }
        })
        $('#round-' + roundNr + '-conv-' + i + '-radio-continuedialog').change(function () {
            if ($.trim($('#round-' + roundNr + '-conv-' + i + '-request').val())
                && $.trim($('#round-' + roundNr + '-conv-' + i + '-response').val())
                && $('#round-' + roundNr + '-conv-' + i + '-radio-continuedialog').is(':checked'))
                $('#round-' + roundNr + '-conv-' + i + '-arrow-right').removeClass('blurry');
            else
                $('#round-' + roundNr + '-conv-' + i + '-arrow-right').addClass('blurry');
        })
        $('#round-' + roundNr + '-conv-' + i + '-radio-endline').change(function () {
            $('#round-' + roundNr + '-conv-' + i + '-arrow-right').addClass('blurry');
        });

        $('#round-' + roundNr + '-conv-' + i + '-radio-enddialog').change(function () {
            $('#round-' + roundNr + '-conv-' + i + '-arrow-right').addClass('blurry');
        });

    }

    $('#abortConversationButton-' + roundNr).on('click', function () {
        $('#dialogContainer-' + roundNr).remove();
        $('#scene-' + scene.uid).show();
        let curPageDialogs = $('.ui-dialog');
        for (let i = 0; i < curPageDialogs.length; i++) {
            if (curPageDialogs[i].attributes[3].value.includes('scene-' + scene.uid)) {
                $('#' + curPageDialogs[i].attributes[3].value).parent().css('display', '');
            }
        }
        toggleControlPane();
        $('#scene-' + scene.uid + '-action-' + actionNr).remove();
    });
    $('#saveConversationButton-' + roundNr).on('click', function () {

        let convDialogs = $('.dialog');
        let fpTextAreas = $(convDialogs[convDialogs.length - 1]).find('textarea');
        //check if last page has ending option selected
        let dataValid = false;
        for (let x = 0; x < fpTextAreas.length; x = x + 2) {
            let actRadio = $(fpTextAreas[x]).parent().parent().find('.radio:checked');
            let radioValue = actRadio.length != 0 ? actRadio[0].defaultValue : 'undefined';
            if (radioValue == 'enddialog') dataValid = true;
        }
        if (dataValid) {
            for (let j = 0; j < convDialogs.length; j++) {
                let actRound = Round({ uid: j });
                let textareas = $(convDialogs[j]).find('textarea');
                for (let k = 0; k < textareas.length; k = k + 2) {
                    let actRadio = $(textareas[k]).parent().parent().find('.radio:checked');
                    let radioValue = actRadio.length != 0 ? actRadio[0].defaultValue : 'undefined';
                    let collectible = $(textareas[k]).parent().parent().find('.collectible-selector')[0].value;
                    let linkToRound = radioValue == 'continuedialog' ? dialogLinks[j].linkTo : '';
                    actRound.conversations.push(Conversation({
                        request: $(textareas[k]).val(),
                        response: $(textareas[k + 1]).val(),
                        endAction: radioValue,
                        collectible: collectible,
                        linkToRound: linkToRound
                    }));
                }
                for (let l = 0; l < scene.actions.length; l++) {
                    if (scene.actions[l].uid == actionNr) {
                        scene.actions[l].rounds.push(actRound);
                        break;
                    }
                }
            }
            $('.dialog').remove();
            $('#scene-' + scene.uid).show();
            let curPageDialogs = $('.ui-dialog');
            for (let i = 0; i < curPageDialogs.length; i++) {
                if (curPageDialogs[i].attributes[3].value.includes('scene-' + scene.uid)) {
                    $('#' + curPageDialogs[i].attributes[3].value).parent().css('display', '');
                }
            }
            dialogLinks = [];
            toggleControlPane();
        } else {
            showStatusText("\"Dialog beenden\" muss mindestens in einer Konversationszeile ausgewählt werden!");
        }
    })
}


function getDialogActionContainer(schatzImages, roundNr) {
    var comp = '<div id="dialogContainer-' + roundNr + '" class="container dialog">' +
        '<div class="row"><div class="col-1"><button id="saveConversationButton-' + roundNr + '">Speichern</button></div><div class="col-1"><button id="abortConversationButton-' + roundNr + '">Abbrechen</button></div></div>' +
        '<div class="row dialog-background">' +
        '<div class="col-1">' +

        '</div>' +
        '<div class="col-3 first-textarea-round-' + roundNr + '">' +
        '<p>Spieler sagt:</p>' +
        '</div>' +
        '<div class="col-3">' +
        '<p>Computer antwortet:</p>' +
        '</div>' +
        '</div> ' +
        '<div class="row dialog-background">' +
        '<div class="col-1">' +
        '<div id="round-' + roundNr + '-conv-1-arrow-left" class="arrow-left blurry"> </div>' +
        '</div>' +
        '<div class="col-3 first-textarea-round-' + roundNr + '">' +
        '<textarea id="round-' + roundNr + '-conv-1-request" rows="4" cols="30"> </textarea>' +
        '</div>' +
        '<div class="col-3">' +
        '<textarea id="round-' + roundNr + '-conv-1-response" rows="4" cols="30"> </textarea>' +
        '</div>' +
        '<div class="col-3">' + getDialogOptions(schatzImages, roundNr, 1) +
        '</div>' +
        '<div class="col-1">' +
        '<div id="round-' + roundNr + '-conv-1-arrow-right" class="arrow-right blurry"> </div>' +
        '</div>' +
        '</div> ' +
        '<div class="row dialog-background">' +
        '<div class="col-1">' +
        '<div id="round-' + roundNr + '-conv-2-arrow-left" class="arrow-left blurry"> </div>' +
        '</div>' +
        '<div class="col-3 first-textarea-round-' + roundNr + '">' +
        '<textarea id="round-' + roundNr + '-conv-2-request" rows="4" cols="30"> </textarea>' +
        '</div>' +
        '<div class="col-3">' +
        '<textarea id="round-' + roundNr + '-conv-2-response" rows="4" cols="30"> </textarea>' +
        '</div>' +
        '<div class="col-3">' + getDialogOptions(schatzImages, roundNr, 2) +
        '</div>' +
        '<div class="col-1">' +
        '<div id="round-' + roundNr + '-conv-2-arrow-right" class="arrow-right blurry"> </div>' +
        '</div>' +
        '</div> ' +
        '<div class="row dialog-background">' +
        '<div class="col-1">' +
        '<div id="round-' + roundNr + '-conv-3-arrow-left" class="arrow-left blurry"> </div>' +
        '</div>' +
        '<div class="col-3 first-textarea-round-' + roundNr + '">' +

        '<textarea id="round-' + roundNr + '-conv-3-request" rows="4" cols="30"> </textarea>' +
        '</div>' +
        '<div class="col-3">' +
        '<textarea id="round-' + roundNr + '-conv-3-response" rows="4" cols="30"> </textarea>' +
        '</div>' +
        '<div class="col-3">' + getDialogOptions(schatzImages, roundNr, 3) +
        '</div>' +
        '<div class="col-1">' +
        '<div id="round-' + roundNr + '-conv-3-arrow-right" class="arrow-right blurry"> </div>' +
        '</div>' +
        '</div> ' +
        '</div>';
    return comp;
}

function getDialogOptions(schatzImages, roundNr, convNr) {
    var comp = '<form action="">' +
        '<input id="round-' + roundNr + '-conv-' + convNr + '-radio-endline" class="radio" type="radio" name="dialog" value="endline" disabled="disabled"> Ende dieser Zeile<br>' +
        '<input id="round-' + roundNr + '-conv-' + convNr + '-radio-continuedialog" class="radio" type="radio" name="dialog" value="continuedialog" disabled="disabled"> Dialog weiterführen<br>' +
        '<input id="round-' + roundNr + '-conv-' + convNr + '-radio-enddialog" class="radio" type="radio" name="dialog" value="enddialog" disabled="disabled"> Dialog beenden<br>' +
        '<p>Gegenstand wird erhalten:</p><select id="collectibleSelector-' + roundNr + '-conv-' + convNr + '" class="collectible-selector" disabled="disabled">';
    comp += '<option value="none">keiner</option> '
    for (let i = 0; i < schatzImages.length; i++) {
        comp += '<option value="' + schatzImages[i].name + '">' + schatzImages[i].name + '</option>';
    }
    comp += '</select></form>';
    return comp;
}

const minimizeIconSVG = `
<svg width="22px" height="22px" version="1.1" viewBox="0 0 700 700" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
 <defs>
  <symbol id="v" overflow="visible">
   <path d="m18.766-1.125c-0.96875 0.5-1.9805 0.875-3.0312 1.125-1.043 0.25781-2.1367 0.39062-3.2812 0.39062-3.3984 0-6.0898-0.94531-8.0781-2.8438-1.9922-1.9062-2.9844-4.4844-2.9844-7.7344 0-3.2578 0.99219-5.8359 2.9844-7.7344 1.9883-1.9062 4.6797-2.8594 8.0781-2.8594 1.1445 0 2.2383 0.13281 3.2812 0.39062 1.0508 0.25 2.0625 0.625 3.0312 1.125v4.2188c-0.98047-0.65625-1.9453-1.1406-2.8906-1.4531-0.94922-0.3125-1.9492-0.46875-3-0.46875-1.875 0-3.3516 0.60547-4.4219 1.8125-1.0742 1.1992-1.6094 2.8555-1.6094 4.9688 0 2.1055 0.53516 3.7617 1.6094 4.9688 1.0703 1.1992 2.5469 1.7969 4.4219 1.7969 1.0508 0 2.0508-0.14844 3-0.45312 0.94531-0.3125 1.9102-0.80078 2.8906-1.4688z"/>
  </symbol>
  <symbol id="b" overflow="visible">
   <path d="m13.734-11.141c-0.4375-0.19531-0.87109-0.34375-1.2969-0.4375-0.41797-0.10156-0.83984-0.15625-1.2656-0.15625-1.2617 0-2.2305 0.40625-2.9062 1.2188-0.67969 0.80469-1.0156 1.9531-1.0156 3.4531v7.0625h-4.8906v-15.312h4.8906v2.5156c0.625-1 1.3438-1.7266 2.1562-2.1875 0.82031-0.46875 1.8008-0.70312 2.9375-0.70312 0.16406 0 0.34375 0.011719 0.53125 0.03125 0.19531 0.011719 0.47656 0.039062 0.84375 0.078125z"/>
  </symbol>
  <symbol id="a" overflow="visible">
   <path d="m17.641-7.7031v1.4062h-11.453c0.125 1.1484 0.53906 2.0078 1.25 2.5781 0.70703 0.57422 1.7031 0.85938 2.9844 0.85938 1.0312 0 2.082-0.14844 3.1562-0.45312 1.082-0.3125 2.1914-0.77344 3.3281-1.3906v3.7656c-1.1562 0.4375-2.3125 0.76562-3.4688 0.98438-1.1562 0.22656-2.3125 0.34375-3.4688 0.34375-2.7734 0-4.9297-0.70312-6.4688-2.1094-1.5312-1.4062-2.2969-3.3789-2.2969-5.9219 0-2.5 0.75391-4.4609 2.2656-5.8906 1.5078-1.4375 3.582-2.1562 6.2188-2.1562 2.4062 0 4.332 0.73047 5.7812 2.1875 1.4453 1.4492 2.1719 3.3828 2.1719 5.7969zm-5.0312-1.625c0-0.92578-0.27344-1.6719-0.8125-2.2344-0.54297-0.57031-1.25-0.85938-2.125-0.85938-0.94922 0-1.7188 0.26562-2.3125 0.79688s-0.96484 1.2969-1.1094 2.2969z"/>
  </symbol>
  <symbol id="e" overflow="visible">
   <path d="m9.2188-6.8906c-1.0234 0-1.793 0.17188-2.3125 0.51562-0.51172 0.34375-0.76562 0.85547-0.76562 1.5312 0 0.625 0.20703 1.1172 0.625 1.4688 0.41406 0.34375 0.98828 0.51562 1.7188 0.51562 0.92578 0 1.7031-0.32812 2.3281-0.98438 0.63281-0.66406 0.95312-1.4922 0.95312-2.4844v-0.5625zm7.4688-1.8438v8.7344h-4.9219v-2.2656c-0.65625 0.92969-1.3984 1.6055-2.2188 2.0312-0.82422 0.41406-1.8242 0.625-3 0.625-1.5859 0-2.8711-0.45703-3.8594-1.375-0.99219-0.92578-1.4844-2.1289-1.4844-3.6094 0-1.7891 0.61328-3.1016 1.8438-3.9375 1.2383-0.84375 3.1797-1.2656 5.8281-1.2656h2.8906v-0.39062c0-0.76953-0.30859-1.332-0.92188-1.6875-0.61719-0.36328-1.5703-0.54688-2.8594-0.54688-1.0547 0-2.0312 0.10547-2.9375 0.3125-0.89844 0.21094-1.7305 0.52344-2.5 0.9375v-3.7344c1.0391-0.25 2.0859-0.44141 3.1406-0.57812 1.0625-0.13281 2.125-0.20312 3.1875-0.20312 2.7578 0 4.75 0.54688 5.9688 1.6406 1.2266 1.0859 1.8438 2.8555 1.8438 5.3125z"/>
  </symbol>
  <symbol id="d" overflow="visible">
   <path d="m7.7031-19.656v4.3438h5.0469v3.5h-5.0469v6.5c0 0.71094 0.14062 1.1875 0.42188 1.4375s0.83594 0.375 1.6719 0.375h2.5156v3.5h-4.1875c-1.9375 0-3.3125-0.39844-4.125-1.2031-0.80469-0.8125-1.2031-2.1797-1.2031-4.1094v-6.5h-2.4219v-3.5h2.4219v-4.3438z"/>
  </symbol>
  <symbol id="m" overflow="visible">
   <path d="m12.766-13.078v-8.2031h4.9219v21.281h-4.9219v-2.2188c-0.66797 0.90625-1.4062 1.5703-2.2188 1.9844s-1.7578 0.625-2.8281 0.625c-1.8867 0-3.4336-0.75-4.6406-2.25-1.2109-1.5-1.8125-3.4258-1.8125-5.7812 0-2.3633 0.60156-4.2969 1.8125-5.7969 1.207-1.5 2.7539-2.25 4.6406-2.25 1.0625 0 2 0.21484 2.8125 0.64062 0.82031 0.42969 1.5664 1.0859 2.2344 1.9688zm-3.2188 9.9219c1.0391 0 1.8359-0.37891 2.3906-1.1406 0.55078-0.76953 0.82812-1.8828 0.82812-3.3438 0-1.457-0.27734-2.5664-0.82812-3.3281-0.55469-0.76953-1.3516-1.1562-2.3906-1.1562-1.043 0-1.8398 0.38672-2.3906 1.1562-0.55469 0.76172-0.82812 1.8711-0.82812 3.3281 0 1.4609 0.27344 2.5742 0.82812 3.3438 0.55078 0.76172 1.3477 1.1406 2.3906 1.1406z"/>
  </symbol>
  <symbol id="l" overflow="visible">
   <path d="m10.5-3.1562c1.0508 0 1.8516-0.37891 2.4062-1.1406 0.55078-0.76953 0.82812-1.8828 0.82812-3.3438 0-1.457-0.27734-2.5664-0.82812-3.3281-0.55469-0.76953-1.3555-1.1562-2.4062-1.1562-1.0547 0-1.8594 0.38672-2.4219 1.1562-0.55469 0.77344-0.82812 1.8828-0.82812 3.3281 0 1.4492 0.27344 2.5586 0.82812 3.3281 0.5625 0.77344 1.3672 1.1562 2.4219 1.1562zm-3.25-9.9219c0.67578-0.88281 1.4219-1.5391 2.2344-1.9688 0.82031-0.42578 1.7656-0.64062 2.8281-0.64062 1.8945 0 3.4453 0.75 4.6562 2.25 1.207 1.5 1.8125 3.4336 1.8125 5.7969 0 2.3555-0.60547 4.2812-1.8125 5.7812-1.2109 1.5-2.7617 2.25-4.6562 2.25-1.0625 0-2.0078-0.21094-2.8281-0.625-0.8125-0.42578-1.5586-1.0859-2.2344-1.9844v2.2188h-4.8906v-21.281h4.8906z"/>
  </symbol>
  <symbol id="k" overflow="visible">
   <path d="m0.34375-15.312h4.8906l4.125 10.391 3.5-10.391h4.8906l-6.4375 16.766c-0.64844 1.6953-1.4023 2.8828-2.2656 3.5625-0.86719 0.6875-2 1.0312-3.4062 1.0312h-2.8438v-3.2188h1.5312c0.83203 0 1.4375-0.13672 1.8125-0.40625 0.38281-0.26172 0.67969-0.73047 0.89062-1.4062l0.14062-0.42188z"/>
  </symbol>
  <symbol id="j" overflow="visible">
   <path d="m2.5781-20.406h5.25v18.422c0 2.5391-0.69531 4.4414-2.0781 5.7031-1.375 1.2578-3.4609 1.8906-6.25 1.8906h-1.0781v-3.9844h0.82812c1.0938 0 1.9219-0.30859 2.4844-0.92188 0.5625-0.60547 0.84375-1.5 0.84375-2.6875z"/>
  </symbol>
  <symbol id="i" overflow="visible">
   <path d="m16.547-12.766c0.61328-0.94531 1.3477-1.6719 2.2031-2.1719 0.85156-0.5 1.7891-0.75 2.8125-0.75 1.7578 0 3.0977 0.54688 4.0156 1.6406 0.92578 1.0859 1.3906 2.6562 1.3906 4.7188v9.3281h-4.9219v-7.9844-0.35938c0.007813-0.13281 0.015625-0.32031 0.015625-0.5625 0-1.082-0.16406-1.8633-0.48438-2.3438-0.3125-0.48828-0.82422-0.73438-1.5312-0.73438-0.92969 0-1.6484 0.38672-2.1562 1.1562-0.51172 0.76172-0.77344 1.8672-0.78125 3.3125v7.5156h-4.9219v-7.9844c0-1.6953-0.14844-2.7852-0.4375-3.2656-0.29297-0.48828-0.8125-0.73438-1.5625-0.73438-0.9375 0-1.6641 0.38672-2.1719 1.1562-0.51172 0.76172-0.76562 1.8594-0.76562 3.2969v7.5312h-4.9219v-15.312h4.9219v2.2344c0.60156-0.86328 1.2891-1.5156 2.0625-1.9531 0.78125-0.4375 1.6406-0.65625 2.5781-0.65625 1.0625 0 2 0.25781 2.8125 0.76562 0.8125 0.51172 1.4258 1.2305 1.8438 2.1562z"/>
  </symbol>
  <symbol id="h" overflow="visible">
   <path d="m2.3594-15.312h4.8906v15.312h-4.8906zm0-5.9688h4.8906v4h-4.8906z"/>
  </symbol>
  <symbol id="g" overflow="visible">
   <path d="m14.312-14.828v3.7188c-1.043-0.4375-2.0547-0.76562-3.0312-0.98438-0.98047-0.21875-1.9023-0.32812-2.7656-0.32812-0.92969 0-1.6211 0.11719-2.0781 0.34375-0.44922 0.23047-0.67188 0.58984-0.67188 1.0781 0 0.38672 0.17188 0.68359 0.51562 0.89062 0.34375 0.21094 0.95703 0.36719 1.8438 0.46875l0.85938 0.125c2.5078 0.32422 4.1953 0.85156 5.0625 1.5781 0.86328 0.73047 1.2969 1.8711 1.2969 3.4219 0 1.6367-0.60547 2.8672-1.8125 3.6875-1.1992 0.8125-2.9922 1.2188-5.375 1.2188-1.0234 0-2.0742-0.078125-3.1562-0.23438-1.0742-0.15625-2.1797-0.39453-3.3125-0.71875v-3.7188c0.96875 0.48047 1.9609 0.83984 2.9844 1.0781 1.0312 0.23047 2.0781 0.34375 3.1406 0.34375 0.95703 0 1.6758-0.12891 2.1562-0.39062 0.47656-0.26953 0.71875-0.66406 0.71875-1.1875 0-0.4375-0.16797-0.75781-0.5-0.96875-0.33594-0.21875-0.99609-0.38281-1.9844-0.5l-0.85938-0.10938c-2.1797-0.26953-3.7031-0.77344-4.5781-1.5156-0.875-0.73828-1.3125-1.8594-1.3125-3.3594 0-1.625 0.55078-2.8281 1.6562-3.6094 1.1133-0.78906 2.8203-1.1875 5.125-1.1875 0.89453 0 1.8359 0.074219 2.8281 0.21875 1 0.13672 2.082 0.35156 3.25 0.64062z"/>
  </symbol>
  <symbol id="c" overflow="visible">
   <path d="m9.6406-12.188c-1.0859 0-1.9141 0.39062-2.4844 1.1719-0.57422 0.78125-0.85938 1.9062-0.85938 3.375s0.28516 2.5938 0.85938 3.375c0.57031 0.77344 1.3984 1.1562 2.4844 1.1562 1.0625 0 1.875-0.38281 2.4375-1.1562 0.57031-0.78125 0.85938-1.9062 0.85938-3.375s-0.28906-2.5938-0.85938-3.375c-0.5625-0.78125-1.375-1.1719-2.4375-1.1719zm0-3.5c2.6328 0 4.6914 0.71484 6.1719 2.1406 1.4766 1.418 2.2188 3.3867 2.2188 5.9062 0 2.5117-0.74219 4.4805-2.2188 5.9062-1.4805 1.418-3.5391 2.125-6.1719 2.125-2.6484 0-4.7148-0.70703-6.2031-2.125-1.4922-1.4258-2.2344-3.3945-2.2344-5.9062 0-2.5195 0.74219-4.4883 2.2344-5.9062 1.4883-1.4258 3.5547-2.1406 6.2031-2.1406z"/>
  </symbol>
  <symbol id="f" overflow="visible">
   <path d="m17.75-9.3281v9.3281h-4.9219v-7.1406c0-1.3203-0.03125-2.2344-0.09375-2.7344s-0.16797-0.86719-0.3125-1.1094c-0.1875-0.3125-0.44922-0.55469-0.78125-0.73438-0.32422-0.17578-0.69531-0.26562-1.1094-0.26562-1.0234 0-1.8242 0.39844-2.4062 1.1875-0.58594 0.78125-0.875 1.8711-0.875 3.2656v7.5312h-4.8906v-15.312h4.8906v2.2344c0.73828-0.88281 1.5195-1.5391 2.3438-1.9688 0.83203-0.42578 1.75-0.64062 2.75-0.64062 1.7695 0 3.1133 0.54688 4.0312 1.6406 0.91406 1.0859 1.375 2.6562 1.375 4.7188z"/>
  </symbol>
  <symbol id="u" overflow="visible">
   <path d="m0.82812-20.406h5.0469l3.5312 14.828 3.5-14.828h5.0781l3.5 14.828 3.5156-14.828h5.0156l-4.8125 20.406h-6.0781l-3.7031-15.516-3.6562 15.516h-6.0781z"/>
  </symbol>
  <symbol id="t" overflow="visible">
   <path d="m12.422-21.281v3.2188h-2.7031c-0.6875 0-1.1719 0.125-1.4531 0.375-0.27344 0.25-0.40625 0.6875-0.40625 1.3125v1.0625h4.1875v3.5h-4.1875v11.812h-4.8906v-11.812h-2.4375v-3.5h2.4375v-1.0625c0-1.6641 0.46094-2.8984 1.3906-3.7031 0.92578-0.80078 2.3672-1.2031 4.3281-1.2031z"/>
  </symbol>
  <symbol id="s" overflow="visible">
   <path d="m17.75-9.3281v9.3281h-4.9219v-7.1094c0-1.3438-0.03125-2.2656-0.09375-2.7656s-0.16797-0.86719-0.3125-1.1094c-0.1875-0.3125-0.44922-0.55469-0.78125-0.73438-0.32422-0.17578-0.69531-0.26562-1.1094-0.26562-1.0234 0-1.8242 0.39844-2.4062 1.1875-0.58594 0.78125-0.875 1.8711-0.875 3.2656v7.5312h-4.8906v-21.281h4.8906v8.2031c0.73828-0.88281 1.5195-1.5391 2.3438-1.9688 0.83203-0.42578 1.75-0.64062 2.75-0.64062 1.7695 0 3.1133 0.54688 4.0312 1.6406 0.91406 1.0859 1.375 2.6562 1.375 4.7188z"/>
  </symbol>
  <symbol id="r" overflow="visible">
   <path d="m2.5781-20.406h5.875l7.4219 14v-14h4.9844v20.406h-5.875l-7.4219-14v14h-4.9844z"/>
  </symbol>
  <symbol id="q" overflow="visible">
   <path d="m2.1875-5.9688v-9.3438h4.9219v1.5312c0 0.83594-0.007813 1.875-0.015625 3.125-0.011719 1.25-0.015625 2.0859-0.015625 2.5 0 1.2422 0.03125 2.1328 0.09375 2.6719 0.070313 0.54297 0.17969 0.93359 0.32812 1.1719 0.20703 0.32422 0.47266 0.57422 0.79688 0.75 0.32031 0.16797 0.69141 0.25 1.1094 0.25 1.0195 0 1.8203-0.39062 2.4062-1.1719 0.58203-0.78125 0.875-1.8672 0.875-3.2656v-7.5625h4.8906v15.312h-4.8906v-2.2188c-0.74219 0.89844-1.5234 1.5586-2.3438 1.9844-0.82422 0.41406-1.7344 0.625-2.7344 0.625-1.7617 0-3.1055-0.53906-4.0312-1.625-0.92969-1.082-1.3906-2.6602-1.3906-4.7344z"/>
  </symbol>
  <symbol id="p" overflow="visible">
   <path d="m2.5781-20.406h8.7344c2.5938 0 4.582 0.57812 5.9688 1.7344 1.3945 1.1484 2.0938 2.7891 2.0938 4.9219 0 2.1367-0.69922 3.7812-2.0938 4.9375-1.3867 1.1562-3.375 1.7344-5.9688 1.7344h-3.4844v7.0781h-5.25zm5.25 3.8125v5.7031h2.9219c1.0195 0 1.8047-0.25 2.3594-0.75 0.5625-0.5 0.84375-1.2031 0.84375-2.1094 0-0.91406-0.28125-1.6172-0.84375-2.1094-0.55469-0.48828-1.3398-0.73438-2.3594-0.73438z"/>
  </symbol>
  <symbol id="o" overflow="visible">
   <path d="m2.3594-15.312h4.8906v15.031c0 2.0508-0.49609 3.6172-1.4844 4.7031-0.98047 1.082-2.4062 1.625-4.2812 1.625h-2.4219v-3.2188h0.85938c0.92578 0 1.5625-0.21094 1.9062-0.625 0.35156-0.41797 0.53125-1.2461 0.53125-2.4844zm0-5.9688h4.8906v4h-4.8906z"/>
  </symbol>
  <symbol id="n" overflow="visible">
   <path d="m14.719-14.828v3.9844c-0.65625-0.45703-1.3242-0.79688-2-1.0156-0.66797-0.21875-1.3594-0.32812-2.0781-0.32812-1.3672 0-2.4336 0.40234-3.2031 1.2031-0.76172 0.79297-1.1406 1.9062-1.1406 3.3438 0 1.4297 0.37891 2.543 1.1406 3.3438 0.76953 0.79297 1.8359 1.1875 3.2031 1.1875 0.75781 0 1.4844-0.10938 2.1719-0.32812 0.6875-0.22656 1.3203-0.56641 1.9062-1.0156v4c-0.76172 0.28125-1.5391 0.48828-2.3281 0.625-0.78125 0.14453-1.5742 0.21875-2.375 0.21875-2.7617 0-4.9219-0.70703-6.4844-2.125-1.5547-1.4141-2.3281-3.3828-2.3281-5.9062 0-2.5312 0.77344-4.5039 2.3281-5.9219 1.5625-1.4141 3.7227-2.125 6.4844-2.125 0.80078 0 1.5938 0.074219 2.375 0.21875 0.78125 0.13672 1.5547 0.35156 2.3281 0.64062z"/>
  </symbol>
 </defs>
 <g>
  <path d="m445.2 420h-168c-37.109 0-67.199-30.09-67.199-67.199v-179.2h-61.602c-27.789 0-50.398 22.613-50.398 50.398v257.6c0 27.789 22.613 50.398 50.398 50.398h257.6c27.789 0 50.398-22.613 50.398-50.398v-61.602z"/>
  <path d="m294 28h257.6c27.789 0 50.398 22.613 50.398 50.398v257.6c0 27.789-22.613 50.398-50.398 50.398h-257.6c-27.789 0-50.398-22.613-50.398-50.398v-257.6c0-27.785 22.609-50.398 50.398-50.398zm257.6 324.8c9.2617 0 16.801-7.5391 16.801-16.801l-0.003906-257.6c0-9.2617-7.5391-16.801-16.801-16.801l-257.6 0.003906c-9.2617 0-16.801 7.5391-16.801 16.801v257.6c0 9.2617 7.5391 16.801 16.801 16.801z"/> 
 </g>
</svg>`

const deleteIconSVG = `
<svg width="22px" height="22px" version="1.1" viewBox="0 0 700 700" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
 <defs>
  <symbol id="g" overflow="visible">
   <path d="m3.6562-0.21875c-0.1875 0.09375-0.38672 0.16797-0.59375 0.21875-0.19922 0.050781-0.40625 0.078125-0.625 0.078125-0.66797 0-1.1992-0.17969-1.5938-0.54688-0.38672-0.375-0.57812-0.87891-0.57812-1.5156 0-0.64453 0.19141-1.1484 0.57812-1.5156 0.39453-0.375 0.92578-0.5625 1.5938-0.5625 0.21875 0 0.42578 0.027344 0.625 0.078125 0.20703 0.054687 0.40625 0.125 0.59375 0.21875v0.82812c-0.1875-0.125-0.375-0.21875-0.5625-0.28125-0.17969-0.0625-0.37109-0.09375-0.57812-0.09375-0.36719 0-0.65625 0.12109-0.875 0.35938-0.21094 0.23047-0.3125 0.55469-0.3125 0.96875 0 0.40625 0.10156 0.73047 0.3125 0.96875 0.21875 0.23047 0.50781 0.34375 0.875 0.34375 0.20703 0 0.39844-0.023437 0.57812-0.078125 0.1875-0.0625 0.375-0.16016 0.5625-0.29688z"/>
  </symbol>
  <symbol id="d" overflow="visible">
   <path d="m2.6875-2.1719c-0.085938-0.039063-0.16797-0.070313-0.25-0.09375-0.085938-0.019531-0.16797-0.03125-0.25-0.03125-0.25 0-0.44531 0.085937-0.57812 0.25-0.125 0.15625-0.1875 0.38281-0.1875 0.67188v1.375h-0.96875v-2.9844h0.96875v0.48438c0.11328-0.19531 0.25-0.33594 0.40625-0.42188 0.16406-0.09375 0.35938-0.14062 0.57812-0.14062h0.10938c0.039063 0 0.09375 0.007812 0.15625 0.015625z"/>
  </symbol>
  <symbol id="a" overflow="visible">
   <path d="m3.4375-1.5v0.26562h-2.2344c0.03125 0.23047 0.11328 0.40234 0.25 0.51562 0.13281 0.10547 0.32812 0.15625 0.57812 0.15625 0.20703 0 0.41406-0.023438 0.625-0.078125 0.20703-0.0625 0.42188-0.15625 0.64062-0.28125v0.73438c-0.21875 0.09375-0.44531 0.16406-0.67188 0.20312-0.23047 0.039062-0.45312 0.0625-0.67188 0.0625-0.54297 0-0.96484-0.13281-1.2656-0.40625-0.30469-0.28125-0.45312-0.67188-0.45312-1.1719 0-0.47656 0.14453-0.85938 0.4375-1.1406 0.30078-0.28125 0.70703-0.42188 1.2188-0.42188 0.46875 0 0.84375 0.14062 1.125 0.42188s0.42188 0.66406 0.42188 1.1406zm-0.96875-0.32812c0-0.17578-0.058594-0.31641-0.17188-0.42188-0.10547-0.11328-0.24219-0.17188-0.40625-0.17188-0.1875 0-0.33984 0.054687-0.45312 0.15625-0.11719 0.10547-0.1875 0.25-0.21875 0.4375z"/>
  </symbol>
  <symbol id="l" overflow="visible">
   <path d="m1.7969-1.3438c-0.19922 0-0.35156 0.039062-0.45312 0.10938-0.09375 0.0625-0.14062 0.16406-0.14062 0.29688 0 0.11719 0.035156 0.21094 0.10938 0.28125 0.082031 0.0625 0.19531 0.09375 0.34375 0.09375 0.17578 0 0.32812-0.0625 0.45312-0.1875s0.1875-0.28516 0.1875-0.48438v-0.10938zm1.4688-0.35938v1.7031h-0.96875v-0.4375c-0.125 0.17969-0.27344 0.30859-0.4375 0.39062-0.15625 0.082031-0.35156 0.125-0.57812 0.125-0.3125 0-0.57031-0.085938-0.76562-0.26562-0.1875-0.1875-0.28125-0.42188-0.28125-0.70312 0-0.35156 0.11719-0.61328 0.35938-0.78125 0.23828-0.16406 0.61719-0.25 1.1406-0.25h0.5625v-0.0625c0-0.15625-0.0625-0.26562-0.1875-0.32812-0.11719-0.070312-0.29688-0.10938-0.54688-0.10938-0.21094 0-0.40234 0.023437-0.57812 0.0625-0.17969 0.042969-0.33984 0.10156-0.48438 0.17188v-0.71875c0.19531-0.050781 0.39844-0.085938 0.60938-0.10938 0.20703-0.03125 0.41406-0.046875 0.625-0.046875 0.53906 0 0.92969 0.10938 1.1719 0.32812 0.23828 0.21094 0.35938 0.55469 0.35938 1.0312z"/>
  </symbol>
  <symbol id="c" overflow="visible">
   <path d="m1.5-3.8438v0.85938h0.98438v0.67188h-0.98438v1.2812c0 0.13672 0.023438 0.23047 0.078125 0.28125 0.0625 0.042969 0.17578 0.0625 0.34375 0.0625h0.48438v0.6875h-0.8125c-0.38672 0-0.65625-0.078125-0.8125-0.23438s-0.23438-0.42188-0.23438-0.79688v-1.2812h-0.46875v-0.67188h0.46875v-0.85938z"/>
  </symbol>
  <symbol id="k" overflow="visible">
   <path d="m2.5-2.5469v-1.6094h0.95312v4.1562h-0.95312v-0.4375c-0.13672 0.17969-0.28125 0.30859-0.4375 0.39062-0.15625 0.082031-0.33984 0.125-0.54688 0.125-0.375 0-0.68359-0.14453-0.92188-0.4375-0.23047-0.28906-0.34375-0.67188-0.34375-1.1406 0-0.45703 0.11328-0.83203 0.34375-1.125 0.23828-0.28906 0.54688-0.4375 0.92188-0.4375 0.19531 0 0.375 0.042969 0.53125 0.125 0.16406 0.085938 0.31641 0.21484 0.45312 0.39062zm-0.64062 1.9375c0.20703 0 0.36328-0.070313 0.46875-0.21875 0.11328-0.15625 0.17188-0.37891 0.17188-0.67188 0-0.28125-0.058594-0.49219-0.17188-0.64062-0.10547-0.15625-0.26172-0.23438-0.46875-0.23438-0.19922 0-0.35547 0.078125-0.46875 0.23438-0.10547 0.14844-0.15625 0.35938-0.15625 0.64062 0 0.29297 0.050781 0.51562 0.15625 0.67188 0.11328 0.14844 0.26953 0.21875 0.46875 0.21875z"/>
  </symbol>
  <symbol id="j" overflow="visible">
   <path d="m2.0469-0.60938c0.20703 0 0.36328-0.070313 0.46875-0.21875 0.11328-0.15625 0.17188-0.37891 0.17188-0.67188 0-0.28125-0.058594-0.49219-0.17188-0.64062-0.10547-0.15625-0.26172-0.23438-0.46875-0.23438-0.19922 0-0.35547 0.078125-0.46875 0.23438-0.10547 0.14844-0.15625 0.35938-0.15625 0.64062 0 0.29297 0.050781 0.51562 0.15625 0.67188 0.11328 0.14844 0.26953 0.21875 0.46875 0.21875zm-0.625-1.9375c0.125-0.17578 0.26562-0.30469 0.42188-0.39062 0.16406-0.082031 0.35156-0.125 0.5625-0.125 0.36328 0 0.66406 0.14844 0.90625 0.4375 0.23828 0.29297 0.35938 0.66797 0.35938 1.125 0 0.46875-0.12109 0.85156-0.35938 1.1406-0.24219 0.29297-0.54297 0.4375-0.90625 0.4375-0.21094 0-0.39844-0.042969-0.5625-0.125-0.15625-0.082031-0.29688-0.21094-0.42188-0.39062v0.4375h-0.96875v-4.1562h0.96875z"/>
  </symbol>
  <symbol id="i" overflow="visible">
   <path d="m0.0625-2.9844h0.95312l0.8125 2.0156 0.6875-2.0156h0.95312l-1.2656 3.2656c-0.125 0.33203-0.27344 0.56641-0.4375 0.70312-0.16797 0.13281-0.39062 0.20312-0.67188 0.20312h-0.54688v-0.64062h0.29688c0.16406 0 0.28516-0.027344 0.35938-0.078125 0.070313-0.054688 0.12891-0.14062 0.17188-0.26562l0.03125-0.09375z"/>
  </symbol>
  <symbol id="h" overflow="visible">
   <path d="m2.9219-0.71875h-1.6094l-0.25 0.71875h-1.0312l1.4688-3.9844h1.2344l1.4688 3.9844h-1.0312zm-1.3594-0.75h1.0938l-0.53125-1.5781z"/>
  </symbol>
  <symbol id="w" overflow="visible">
   <path d="m0.45312-4.1562h0.96875v4.1562h-0.96875z"/>
  </symbol>
  <symbol id="v" overflow="visible">
   <path d="m0.45312-2.9844h0.96875v2.9844h-0.96875zm0-1.1719h0.96875v0.78125h-0.96875z"/>
  </symbol>
  <symbol id="b" overflow="visible">
   <path d="m1.875-2.375c-0.21094 0-0.37109 0.078125-0.48438 0.23438-0.10547 0.14844-0.15625 0.35938-0.15625 0.64062 0 0.29297 0.050781 0.51562 0.15625 0.67188 0.11328 0.14844 0.27344 0.21875 0.48438 0.21875 0.20703 0 0.36719-0.070313 0.48438-0.21875 0.11328-0.15625 0.17188-0.37891 0.17188-0.67188 0-0.28125-0.058594-0.49219-0.17188-0.64062-0.11719-0.15625-0.27734-0.23438-0.48438-0.23438zm0-0.6875c0.51953 0 0.92188 0.14062 1.2031 0.42188 0.28906 0.27344 0.4375 0.65234 0.4375 1.1406 0 0.5-0.14844 0.89062-0.4375 1.1719-0.28125 0.27344-0.68359 0.40625-1.2031 0.40625-0.51172 0-0.91406-0.13281-1.2031-0.40625-0.29297-0.28125-0.4375-0.67188-0.4375-1.1719 0-0.48828 0.14453-0.86719 0.4375-1.1406 0.28906-0.28125 0.69141-0.42188 1.2031-0.42188z"/>
  </symbol>
  <symbol id="u" overflow="visible">
   <path d="m2.7969-2.8906v0.71875c-0.21094-0.082031-0.40625-0.14453-0.59375-0.1875-0.1875-0.039063-0.37109-0.0625-0.54688-0.0625-0.17969 0-0.3125 0.023437-0.40625 0.0625-0.085938 0.042969-0.125 0.10938-0.125 0.20312 0 0.085938 0.03125 0.14844 0.09375 0.1875 0.070312 0.042969 0.19531 0.074219 0.375 0.09375l0.15625 0.015625c0.48828 0.0625 0.81641 0.16797 0.98438 0.3125 0.17578 0.13672 0.26562 0.35938 0.26562 0.67188s-0.12109 0.55469-0.35938 0.71875c-0.23047 0.15625-0.57812 0.23438-1.0469 0.23438-0.19922 0-0.40625-0.015625-0.625-0.046875-0.21094-0.03125-0.42188-0.078125-0.64062-0.14062v-0.71875c0.1875 0.085937 0.37891 0.15234 0.57812 0.20312 0.20703 0.042969 0.41406 0.0625 0.625 0.0625 0.1875 0 0.32812-0.023438 0.42188-0.078125 0.09375-0.050781 0.14062-0.125 0.14062-0.21875s-0.039062-0.16016-0.10938-0.20312c-0.0625-0.039062-0.1875-0.070312-0.375-0.09375l-0.17188-0.015625c-0.42969-0.050781-0.73047-0.14844-0.90625-0.29688-0.16797-0.14453-0.25-0.36328-0.25-0.65625 0-0.32031 0.10938-0.55469 0.32812-0.70312 0.21875-0.15625 0.55078-0.23438 1-0.23438 0.17578 0 0.35938 0.015625 0.54688 0.046875 0.19531 0.023437 0.41016 0.0625 0.64062 0.125zm-0.92188 2.8906c0.10156 0.11328 0.17578 0.21875 0.21875 0.3125 0.050781 0.09375 0.078125 0.17969 0.078125 0.26562 0 0.16406-0.058594 0.28906-0.17188 0.375-0.10547 0.082031-0.27344 0.125-0.5 0.125-0.085938 0-0.17188-0.011719-0.26562-0.03125-0.085937-0.011719-0.17188-0.027344-0.26562-0.046875v-0.40625c0.082031 0.03125 0.16016 0.050781 0.23438 0.0625 0.082031 0.007812 0.14844 0.015625 0.20312 0.015625 0.10156 0 0.17969-0.023437 0.23438-0.0625 0.0625-0.03125 0.09375-0.085937 0.09375-0.15625 0-0.054687-0.023437-0.11719-0.0625-0.1875-0.03125-0.074219-0.089844-0.16406-0.17188-0.26562z"/>
  </symbol>
  <symbol id="t" overflow="visible">
   <path d="m0.45312-4.1562h0.96875v2.2656l1.0938-1.0938h1.1094l-1.4531 1.3594 1.5625 1.625h-1.1562l-1.1562-1.25v1.25h-0.96875z"/>
  </symbol>
  <symbol id="f" overflow="visible">
   <path d="m0.42188-1.1719v-1.8125h0.96875v0.29688 0.60938 0.48438c0 0.24219 0.003906 0.41797 0.015625 0.53125 0.007812 0.10547 0.03125 0.17969 0.0625 0.21875 0.039062 0.0625 0.09375 0.11719 0.15625 0.15625 0.0625 0.03125 0.13281 0.046875 0.21875 0.046875 0.19531 0 0.35156-0.078125 0.46875-0.23438 0.11328-0.15625 0.17188-0.36719 0.17188-0.64062v-1.4688h0.95312v2.9844h-0.95312v-0.4375c-0.14844 0.17969-0.30469 0.30859-0.46875 0.39062-0.15625 0.082031-0.33594 0.125-0.53125 0.125-0.34375 0-0.60938-0.10156-0.79688-0.3125-0.17969-0.21875-0.26562-0.53125-0.26562-0.9375z"/>
  </symbol>
  <symbol id="e" overflow="visible">
   <path d="m3.4688-1.8281v1.8281h-0.96875v-1.3906c0-0.25781-0.007812-0.4375-0.015625-0.53125-0.011719-0.10156-0.03125-0.17578-0.0625-0.21875-0.03125-0.0625-0.085937-0.10938-0.15625-0.14062-0.0625-0.039062-0.13281-0.0625-0.20312-0.0625-0.21094 0-0.37109 0.078125-0.48438 0.23438-0.10547 0.15625-0.15625 0.37109-0.15625 0.64062v1.4688h-0.96875v-2.9844h0.96875v0.4375c0.13281-0.17578 0.28516-0.30469 0.45312-0.39062 0.16406-0.082031 0.34375-0.125 0.53125-0.125 0.34375 0 0.60156 0.10938 0.78125 0.32812 0.1875 0.21094 0.28125 0.51172 0.28125 0.90625z"/>
  </symbol>
  <symbol id="s" overflow="visible">
   <path d="m2.4219-4.1562v0.625h-0.51562c-0.13672 0-0.23438 0.027344-0.29688 0.078125-0.054687 0.054687-0.078125 0.13672-0.078125 0.25v0.21875h0.82812v0.67188h-0.82812v2.3125h-0.95312v-2.3125h-0.46875v-0.67188h0.46875v-0.21875c0-0.32031 0.085937-0.5625 0.26562-0.71875 0.1875-0.15625 0.47266-0.23438 0.85938-0.23438z"/>
  </symbol>
  <symbol id="r" overflow="visible">
   <path d="m3.2344-2.5c0.11328-0.17578 0.25391-0.3125 0.42188-0.40625 0.16406-0.10156 0.35156-0.15625 0.5625-0.15625 0.33203 0 0.58594 0.10938 0.76562 0.32812 0.1875 0.21094 0.28125 0.51172 0.28125 0.90625v1.8281h-0.96875v-1.5625c0.007813-0.019531 0.015625-0.039062 0.015625-0.0625v-0.10938c0-0.21875-0.03125-0.375-0.09375-0.46875s-0.16406-0.14062-0.29688-0.14062c-0.1875 0-0.33594 0.078125-0.4375 0.23438-0.09375 0.14844-0.14062 0.35938-0.14062 0.64062v1.4688h-0.96875v-1.5625c0-0.33203-0.03125-0.54688-0.09375-0.64062-0.054688-0.09375-0.15234-0.14062-0.29688-0.14062-0.17969 0-0.32031 0.078125-0.42188 0.23438-0.09375 0.14844-0.14062 0.35938-0.14062 0.64062v1.4688h-0.96875v-2.9844h0.96875v0.4375c0.11328-0.17578 0.24219-0.30469 0.39062-0.39062 0.15625-0.082031 0.32812-0.125 0.51562-0.125 0.20703 0 0.39062 0.054688 0.54688 0.15625 0.15625 0.09375 0.27344 0.23047 0.35938 0.40625z"/>
  </symbol>
  <symbol id="q" overflow="visible">
   <path d="m3.4688-1.8281v1.8281h-0.96875v-1.3906c0-0.25781-0.007812-0.4375-0.015625-0.53125-0.011719-0.10156-0.03125-0.17578-0.0625-0.21875-0.03125-0.0625-0.085937-0.10938-0.15625-0.14062-0.0625-0.039062-0.13281-0.0625-0.20312-0.0625-0.21094 0-0.37109 0.078125-0.48438 0.23438-0.10547 0.15625-0.15625 0.37109-0.15625 0.64062v1.4688h-0.96875v-4.1562h0.96875v1.6094c0.13281-0.17578 0.28516-0.30469 0.45312-0.39062 0.16406-0.082031 0.34375-0.125 0.53125-0.125 0.34375 0 0.60156 0.10938 0.78125 0.32812 0.1875 0.21094 0.28125 0.51172 0.28125 0.90625z"/>
  </symbol>
  <symbol id="p" overflow="visible">
   <path d="m0.5-3.9844h1.1562l1.4375 2.7344v-2.7344h0.98438v3.9844h-1.1562l-1.4375-2.7344v2.7344h-0.98438z"/>
  </symbol>
  <symbol id="o" overflow="visible">
   <path d="m0.5-3.9844h1.7031c0.50781 0 0.89844 0.11719 1.1719 0.34375 0.26953 0.21875 0.40625 0.53906 0.40625 0.95312 0 0.41797-0.13672 0.74219-0.40625 0.96875-0.27344 0.21875-0.66406 0.32812-1.1719 0.32812h-0.67188v1.3906h-1.0312zm1.0312 0.75v1.1094h0.5625c0.19531 0 0.34766-0.046875 0.45312-0.14062 0.11328-0.10156 0.17188-0.24219 0.17188-0.42188 0-0.17578-0.058594-0.3125-0.17188-0.40625-0.10547-0.09375-0.25781-0.14062-0.45312-0.14062z"/>
  </symbol>
  <symbol id="n" overflow="visible">
   <path d="m0.45312-2.9844h0.96875v2.9375c0 0.39453-0.10156 0.69531-0.29688 0.90625-0.1875 0.21875-0.46484 0.32812-0.82812 0.32812h-0.48438v-0.64062h0.17188c0.17578 0 0.29688-0.042969 0.35938-0.125 0.070312-0.074219 0.10938-0.23047 0.10938-0.46875zm0-1.1719h0.96875v0.78125h-0.96875z"/>
  </symbol>
  <symbol id="m" overflow="visible">
   <path d="m2.875-2.8906v0.76562c-0.125-0.082031-0.25781-0.14453-0.39062-0.1875-0.13672-0.039062-0.27344-0.0625-0.40625-0.0625-0.27344 0-0.48047 0.078125-0.625 0.23438-0.14844 0.15625-0.21875 0.37109-0.21875 0.64062 0 0.28125 0.070313 0.5 0.21875 0.65625 0.14453 0.15625 0.35156 0.23438 0.625 0.23438 0.14453 0 0.28516-0.019531 0.42188-0.0625 0.13281-0.039063 0.25781-0.10938 0.375-0.20312v0.78125c-0.14844 0.0625-0.29688 0.10156-0.45312 0.125-0.15625 0.03125-0.3125 0.046875-0.46875 0.046875-0.54297 0-0.96484-0.13281-1.2656-0.40625-0.30469-0.28125-0.45312-0.67188-0.45312-1.1719 0-0.48828 0.14844-0.86719 0.45312-1.1406 0.30078-0.28125 0.72266-0.42188 1.2656-0.42188 0.15625 0 0.3125 0.015625 0.46875 0.046875 0.15625 0.023437 0.30469 0.0625 0.45312 0.125z"/>
  </symbol>
 </defs>
 <g>
  <path d="m547.99 82.012c-34.754-34.754-78.043-59.75-125.52-72.469-47.477-12.723-97.465-12.723-144.94 0-47.477 12.719-90.766 37.715-125.52 72.469-34.754 34.754-59.746 78.043-72.469 125.52-12.719 47.477-12.719 97.465 0 144.94 12.723 47.477 37.715 90.766 72.469 125.52 34.758 34.754 78.047 59.746 125.52 72.469 47.473 12.719 97.461 12.719 144.94 0 47.477-12.723 90.766-37.715 125.52-72.469 34.754-34.758 59.75-78.047 72.469-125.52 12.723-47.473 12.723-97.461 0-144.94-12.719-47.477-37.715-90.766-72.469-125.52zm-111.01 79.492 31.516 31.516c5.1641 5.1641 5.168 13.484 0 18.648l-68.332 68.332 68.332 68.332c5.1641 5.1641 5.1641 13.484 0 18.648l-31.516 31.516c-5.1641 5.1641-13.484 5.168-18.648 0l-68.332-68.332-68.332 68.332c-5.1641 5.1641-13.484 5.1641-18.648 0l-31.516-31.516c-5.1641-5.1641-5.168-13.484 0-18.648l68.332-68.332-68.332-68.332c-5.1641-5.1641-5.1641-13.484 0-18.648l31.516-31.516c5.1641-5.1641 13.484-5.168 18.648 0l68.332 68.332 68.332-68.332c5.1641-5.1641 13.484-5.1641 18.648 0z"/>
 </g>
</svg>
`