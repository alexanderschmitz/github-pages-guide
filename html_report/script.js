const LINK_PREFIX = "https://alexanderschmitz.github.io/github-pages-guide/projectname_"


function makeUL(array) {
    let list = document.createElement('ul');

    for (let i = 0; i < array.length; i++) {
        let item = document.createElement('li');
        let link = document.createElement('a');
        link.text = array[i];
        link.href = LINK_PREFIX.concat(array[i])
        item.appendChild(link);
        list.appendChild(item);
    }

    return list;
}

function createBranchList(fileName) {
    fetch(fileName)
    .then(response => response.text())
    .then(text => text.split("\n"))
    .then(array => array.filter(n => n))
    .then(array => {
        console.log(array);
        return array;
    })
    .then(array => document.getElementById('foo').appendChild(makeUL(array)));
}

document.addEventListener("DOMContentLoaded", function (event) {
    createBranchList("./branches.txt");
})
