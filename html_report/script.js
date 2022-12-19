
const LINK_PREFIX = "projectname_"
function makeUL(array) {
    var list = document.createElement('ul');

    for (var i = 0; i < array.length; i++) {
        var item = document.createElement('li');
        item.appendChild(document.createTextNode(array[i]));
        list.appendChild(item);
    }

    // Finally, return the constructed list:
    return list;
}
$(document).ready(function() {
    fetch('branches.txt')
        .then(response => response.text())
        .then(text => text.split("\n"))
        .then(array => array.filter(n => n))
        .then(array => {
            console.log(array);
            return array;
        })
        .then(array => document.getElementById('foo').appendChild(makeUL(array)));
})
