import { lockPortrait } from '../../scripts/aem.js';

export default function decorate(block) {
    lockPortrait();

    let children = block.children;
    for(let i=0; i<children.length; i++){
        let child = children[i];

        if (i%2==0 && i!=0) {
            child.classList.add("panel");
            child.style.display = "none";
        } else {
            if (i!=0) {
                child.classList.add("accordion");
                child.addEventListener("click", function(){
                    if (this.classList.contains("active")) {
                        this.classList.remove("active");
                        this.nextElementSibling.style.display = "none";
                    } else {
                        this.classList.add("active");
                        this.nextElementSibling.style.display = "block";
                    }
                });
            }
        }

        child.classList.add("table-row");
        if (i==0) child.classList.add("table-header");

        let children2 = child.children;
        for(let j=0; j<children2.length; j++){
            let child2 = children2[j];
            child2.classList.add("table-cell");
        }
    }
}
  