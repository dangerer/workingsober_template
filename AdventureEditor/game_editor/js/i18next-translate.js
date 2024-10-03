
const params = new URLSearchParams((window.location != window.parent.location)
    ? document.referrer
    : document.location.href);
let lang = "de"
let lParam = params.get("L") != null ? Number(params.get("L")) : -1

switch(lParam) {
    case 0:
        lang = "de"
        break
    case 1:
        lang = "en"
        break
    default:
        lang = "de"
        break
}

console.log("lang", lang);
i18next.init({
    lng: lang,
    resources: {
        de: {
            translation: {

                scene: {
                    defaultName: 'Szene 1',
                },
                card: {
                    title: 'Titel',
                    fields: {
                        requiredCard: 'Bedingung',
                        initialText: 'Initialer Text',
                        advancingText: 'Weiterführender Text',
                        isFinalScene: 'Finale Szene?',
                        sceneLink: 'Verknüpfung',
                        receiveCard: 'Mitnehmbar'
                    },
                    defaults: {
                        title: 'Kartenname',
                        sceneLink: 'Keine',
                        requiredCard: 'Keine'
                    }
                },
                dialog: {
                    isConfigured: 'Konversation konfiguriert',
                    scenelink: {
                        connectWithScene: 'Mit Szene verknüpfen',
                        requiredItem: 'Benötigter Gegenstand'
                    },
                    weblink: {
                        pageURL: 'Seiten-URL'
                    }
                },
                status: {
                    needTitleForCards: 'Es muss erst ein Titel für diese Karte gesetzt werden!',
                    save: {
                        needTitleForCards: 'Es muss für alle Karten ein Titel vergeben werden!',
                        needCardsMinimized: 'Alle Karten müssen minimiert und positioniert sein!',
                        needActionsMinimized: 'Alle Interaktionsflächen müssen minimiert und positioniert sein!',
                        success: 'Konfiguration gespeichert!',
                        error: 'Fehler beim Speichern!',
                    },
                    init: {
                        needOneBackgroundImage: 'Um den Editor zu verwenden muss mindestens ein Hintergrundbild verfügbar sein!'
                    }
                },
                baseFields: {
                    editScene: 'Szene bearbeiten',
                    editGraphics: 'Grafik bearbeiten',
                    newAction: 'Neue Aktionsfläche',
                    newCard: 'Neue Karte',
                    save: 'Speichern',
                    scene: 'Szene:',
                    newScene: 'Neue Szene',
                    deleteScene: "Szene löschen",
                    changeBackground: 'Hintergrundbild ändern'
                },
                editor: {
                    placeholder: 'Platzhalter'
                }
            }
        },
        en: {
            translation: {
                scene: {
                    defaultName: 'Scene 1',
                },
                card: {
                    title: 'Title',
                    fields: {
                        requiredCard: 'Required',
                        initialText: 'Initial text',
                        advancingText: 'Further text',
                        isFinalScene: 'Is final scene?',
                        sceneLink: 'Link scene',
                        receiveCard: 'Receivable'
                    },
                    defaults: {
                        title: 'Card title',
                        sceneLink: 'None',
                        requiredCard: 'None'
                    }
                },
                dialog: {
                    isConfigured: 'Conversation is configured',
                    scenelink: {
                        connectWithScene: 'Connect with scene',
                        requiredItem: 'Required item'
                    },
                    weblink: {
                        pageURL: 'Page URL'
                    }
                },
                status: {
                    needTitleForCards: 'Need to set a title first!',
                    save: {
                        needTitleForCards: 'Each card must have a card title assigned!',
                        needCardsMinimized: 'All cards must be minimized and their position set!',
                        needActionsMinimized: 'All interaction areas must be minimized and their position set!',
                        success: 'Configuration saved!',
                        error: 'Error saving!',
                    },
                    init: {
                        needOneBackgroundImage: 'Need to upload at least 1 background image first to use editor!'
                    }

                },
                baseFields: {
                    editScene: 'Edit scene',
                    editGraphics: 'Edit background',
                    newAction: 'New action',
                    newCard: 'New card',
                    save: 'Save',
                    scene: 'Scene:',
                    newScene: 'New scene',
                    deleteScene: "Delete scene",
                    changeBackground: 'Change background',
                },
                editor: {
                    placeholder: 'Placeholder'
                }
            }
        }
    }
});

export const ll = i18next