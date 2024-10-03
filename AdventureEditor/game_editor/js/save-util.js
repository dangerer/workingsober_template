import {setBackgroundActive, showStatusText} from "./view-utils.js";
import { Store } from "./store.js"
import {ll} from "./i18next-translate.js"

const store = new Store()

export function checksBeforeSaving() {
    let scenes = store.get("scenes")
    let noError = true;
    $('.action-card #title').each(function() {
        if (this.value.trim().length == 0) {
            noError = false;
            showStatusText(ll.t('status.save.needTitleForCards'))
            return false;
        }
    })

    for(let i = 0; i < scenes.length; i++) {
            let isSomeNotMinimized = scenes[i].actions.filter(a => a.actionType == "card").some(a => !a.properties.isMinimized)
            if (isSomeNotMinimized) {
                showStatusText(ll.t('status.save.needCardsMinimized'))
                return false;
            }
            isSomeNotMinimized = scenes[i].actions.some(a => !a.properties.isMinimized)
            if (isSomeNotMinimized) {
                showStatusText(ll.t('status.save.needActionsMinimized'))
                return false;
            }
    }

    return noError;
}
export function saveFunc(gameid) {
    let scenes = store.get("scenes")
    let schatzImages = store.get("schatzImages")
    let allItems = [];
    for (let i = 0; i < scenes.length; i++) {
        for (let j = 0; j < scenes[i].actions.length; j++) {
            if (scenes[i].actions[j].hasOwnProperty("rounds")) {
                for (let k = 0; k < scenes[i].actions[j].rounds.length; k++) {
                    for (let l = 0; l < scenes[i].actions[j].rounds[k].conversations.length; l++) {
                        let curConversation = scenes[i].actions[j].rounds[k].conversations[l];
                        if (curConversation.collectible != "none") {
                            if (!allItems.includes(curConversation.collectible))
                                allItems.push(curConversation.collectible);
                        }
                    }
                }
            }
        }
    }
    let requiredSchatzItems = [];
    for (let i = 0; i < allItems.length; i++) {
        for (let j = 0; j < schatzImages.length; j++) {
            if (allItems[i] == schatzImages[j].name) {
                requiredSchatzItems.push({
                    name: schatzImages[j].name,
                    path: schatzImages[j].path
                });
                break;
            }
        }
    }
    let gameConfiguration = {
        items: requiredSchatzItems,
        scenes: scenes,
        startScene: store.get("startScene"),
        endScene: store.get("endScene")
    }
    console.log(gameConfiguration);

    let dialogs = document.getElementsByClassName("ui-dialog");
    let dialogArr = [];
    for (let i = 0; i < dialogs.length; i++) {
        dialogArr.push(domJSON.toJSON(dialogs[i]));
    }
    let mainContainer = document.getElementById("mainContainer");
    let controlPane = document.getElementById("controlPane");
    let editObj = {
        mainContainer: domJSON.toJSON(mainContainer),
        controlPane: domJSON.toJSON(controlPane),
        dialogs: dialogArr,
        scenes: scenes
    }
    let baseUrl = window.location.protocol + "//" + window.location.host;

    let storeUrl =  baseUrl + `/index.php?id=${store.get("savePageId")}&tx_gtnescapegame_gtnescapegameplugin%5Baction%5D=saveCardAdventure&tx_gtnescapegame_gtnescapegameplugin%5Bcontroller%5D=Rooms&tx_gtnescapegame_gtnescapegameplugin%5Broom%5D=${store.get('roomId')}`;

    if (Number.isInteger(store.get("saveTypenum"))) storeUrl += `&type=${store.get("saveTypenum")}`;
 
    console.log(storeUrl);
    console.log(gameConfiguration);

    var ajaxCall = {
        url: storeUrl,
        method: "POST",
        data: {
            gameid: gameid,
            json: JSON.stringify(gameConfiguration),
            editorConfig: JSON.stringify(editObj)
        },
        success: function (data, status, xhr) {
            setBackgroundActive(true);
            $('.loader').hide();
            showStatusText(ll.t('status.save.success'));
        },
        error: function (xhr, status, error) {
            setBackgroundActive(true);

            $('.loader').hide();
            console.log("error");
            showStatusText(ll.t('status.save.error'));

        }
    };
    $.ajax(ajaxCall);

}



