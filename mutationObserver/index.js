const target = document.getElementById('playarea');
const logs = document.getElementById('logs');
let count = 1;
let attrCount = 1;


function changeAttribute() {
    const currentColor = target.style.color;
    target.style.color = currentColor == 'green' ? 'red' : currentColor == 'red' ? 'blue' : 'green';
}

document.querySelector('#changeAttribute').addEventListener('click', changeAttribute);

document.querySelector('#changeCustomAttribute').addEventListener('click', function(){
    target.setAttribute('custom-data', `custom-data-${attrCount}`);
    attrCount++;
});

function addDomElement() {
    const p = document.createElement('p');
    p.innerHTML = 'New Element Added '+count;
    count++;
    target.appendChild(p);
}
document.querySelector('#changeDom').addEventListener('click', addDomElement);

function removeDomElement() {
    const childCount = target.childNodes.length;
    target.childNodes[childCount-1].remove();
}
document.querySelector('#removeDom').addEventListener('click', removeDomElement);

const mutationConfig = { attributes: true, childList: true };
function onMutationChangeCallack(mutationConfigList) {
    for(const mutationConfig of mutationConfigList) {
        if(mutationConfig.type === 'attributes') {
            addLogs(`${mutationConfig.attributeName} attribute changed`);
        } else if(mutationConfig.type === 'childList') {
            const isAddedNode = mutationConfig.addedNodes.length;
            const isRemovedNode = mutationConfig.removedNodes.length;
            if(isAddedNode > 0) {
                addLogs(`childList updated. new dom element added`);
            } else if(isRemovedNode > 0) {
                addLogs(`childList updated. last dom element removed`);
            }
        }
    }
}

const observer = new MutationObserver(onMutationChangeCallack);
observer.observe(target, mutationConfig);

function addLogs(log) {
    const p = document.createElement('p');
    p.innerHTML = log;
    logs.appendChild(p);
}
