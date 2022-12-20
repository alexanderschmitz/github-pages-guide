function makeUL(branches, root, prefix) {
    let list = document.createElement('ul');

    for (let i = 0; i < branches.length; i++) {
        let item = document.createElement('li');
        let link = document.createElement('a');
        link.text = branches[i];
        link.href = root.concat(prefix.concat(branches[i]));
        item.appendChild(link);
        list.appendChild(item);
    }

    return list;
}


function getBranchList(fileName) {
    return fetch(fileName)
        .then(response => response.text())
        .then(text => text.split("\n"))
        .then(array => array.filter(n => n));
}


function readJSON(fileName) {
    return fetch(fileName)
        .then(response => response.json());
}

document.addEventListener("DOMContentLoaded", function (event) {
    let config = readJSON("./config.json");
    let branches = getBranchList("./branches.txt");
    let list = makeUL(branches, config.root, config.prefix);
    document.getElementById('branch-list').appendChild(list);
})
