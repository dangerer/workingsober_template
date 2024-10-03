export const Selectors = {
    bgImage: () => { return $("#changeToImage") },
    currentSceneImage: (uid) => { return $('#scene-' + uid + '-img') },
    changeBackgroundContainer: () => { return  $('#changeBackgroundContainer') },
    scene: (uid) => { return $('#scene-' + uid) },
    sceneProp: (sceneId, propId) => { return $('#scene-' + sceneId + '-prop-' + propId) },
    scenePropImage: (sceneId, propId) => { return $('#scene-' + sceneId + '-prop-' + propId + '-img') },
    selectorProp: () => { return $('#propImage') },
    selectorScene: () => { return $('#selectorScene') },
    any: (selector) => { return $(selector) }
}