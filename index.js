const material = document.querySelectorAll('.material-icons');
const target = document.querySelectorAll('.div1');

let draggedItem = null;

for (let i = 0;i<material.length; i++) {
    const item = material[i];

    item.addEventListener('dragstart', function(event) {
        console.log('dragstart');
        draggedItem = this;
    });

    item.addEventListener('dragend', function(event){
        console.log('dragend');
        draggedItem = null;
    })

    for (let j = 0; j< target.length; j++){
        const list = target[j];
    }

}