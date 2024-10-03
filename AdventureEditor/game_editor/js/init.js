export function initialize(objektImages, schatzPaths, userUidStr) {
    let objCategoriesToPaths = {};
    let schatzImages = [];

    objektImages.forEach(function (elem) {
        let cat = elem.category;
        let pathName = elem.path_name;
        (cat in objCategoriesToPaths) || (objCategoriesToPaths[cat]=[])
        objCategoriesToPaths[cat].push(pathName);
    });

    for(let i = 0; i < schatzPaths.length; i++) {
        let curPathBaseName = schatzPaths[i].path_name.replace(/^.*[\\\/]/, '').split('.').slice(0, -1).join('.');
        schatzImages.push({
            name: curPathBaseName.substring(0, curPathBaseName.length - userUidStr.length),
            path: schatzPaths[i].path_name
        });
    }

    return [objCategoriesToPaths, schatzImages];
}