import { Store } from "./store.js"
import {ll} from "./i18next-translate.js"

const store = new Store()
export const EditorId = {
    initialText: 'initialText',
    advancingText: 'advancingText'
}

function extractBlockText(blocks) {
    let nText = ""
    for (let i = 0; i < blocks.length; i++) {
        nText += blocks[i].data.text
        if (i < blocks.length-1) {
            nText += "<br><br>"
        }
    }
    return nText;
}

export function initEditor(scene, action, editorId) {
    let editor = null
    switch(editorId) {
        case EditorId.initialText:
            const initialTextEditor = new EditorJS({
                holder: `scene-${scene.uid}-action-${action.uid}-edit-initialText`,
                minHeight : 60,
                tools: {
                    hyperlink: {
                        class: Hyperlink,
                        config: {
                            target: '_blank',
                            //rel: 'nofollow',
                            availableTargets: [],
                            availableRels: [],
                            validate: false,
                        }
                    },
                    /*paragraph: {
                        class: CustomParagraph,
                    },*/
                },

                onChange: async () => {
                    let content = await initialTextEditor.saver.save();
                    let actIdx = scene.actions.findIndex(x => x.uid == action.uid)
                    let props = scene.actions[actIdx].properties
                    let nText = extractBlockText(content.blocks).replace(/(<br>)+$/, "")

                    props['initialText'] = nText

                    let scenes = store.get("scenes")
                    scenes[scenes.findIndex(x => x.uid == scene.uid)] = scene
                    store.update("scenes", scenes)
                },
                data: {
                    blocks: [
                        {
                            type: 'paragraph',
                            data: {
                                text: action.properties['initialText'] != '' ? action.properties['initialText'] : ll.t('editor.placeholder')
                            }
                        }
                    ]
                }

            })
            return initialTextEditor
            break;
        case EditorId.advancingText:
            const advancingTextEditor = new EditorJS({
                holder: `scene-${scene.uid}-action-${action.uid}-edit-advancingText`,
                minHeight : 60,
                readOnly: action.properties.requiredCard == -1,
                tools: {
                    hyperlink: {
                        class: Hyperlink,
                        config: {
                            target: '_blank',
                            //rel: 'nofollow',
                            availableTargets: [],
                            availableRels: [],
                            validate: false,
                        }
                    },
                },
                onChange: async () => {
                    let content = await advancingTextEditor.saver.save();
                    let actIdx = scene.actions.findIndex(x => x.uid == action.uid)
                    let props = scene.actions[actIdx].properties
                    let nText = extractBlockText(content.blocks).replace(/(<br>)+$/, "")

                    props['advancingText'] = nText
                        let scenes = store.get("scenes")
                    scenes[scenes.findIndex(x => x.uid == scene.uid)] = scene
                    store.update("scenes", scenes)
                },
                data: {
                    blocks: [
                        {
                            type: 'paragraph',
                            data: {
                                text: action.properties['advancingText'] != '' ? action.properties['advancingText'] : ll.t('editor.placeholder')
                            }
                        }
                    ]
                }

            })
            return advancingTextEditor
            break;
    }
}

