export default function decorate(block) {
    let children = block.children;
    for(let i=0; i<children.length; i++){
        let child = children[i];
        child.classList.add("table-row");
        if (i==0) child.classList.add("table-header");

        let children2 = child.children;
        for(let j=0; j<children2.length; j++){
            let child2 = children2[j];
            child2.classList.add("table-cell");
        }
    }
}
  