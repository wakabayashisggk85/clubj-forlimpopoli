import { lockPortrait } from '../../scripts/aem.js';

export default function decorate(block) {
  lockPortrait();
  
  const cols = [...block.firstElementChild.children];
  block.classList.add(`columns-results-${cols.length}-cols`);

  // setup image columns
  [...block.children].forEach((row) => {
    [...row.children].forEach((col) => {
      const pic = col.querySelector('picture');
      if (pic) {
        const picWrapper = pic.closest('div');
        if (picWrapper && picWrapper.children.length === 1) {
          // picture is only content in column
          picWrapper.classList.add('columns-results-img-col');
        }
      }
    });
  });
}
