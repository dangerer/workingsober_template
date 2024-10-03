//
// Scroll To Top
//

export default class GotoTop {
  constructor($ele) {
    this.$body = document.body;
    this.$gotoTop = $ele;

    this.goTopTrigger();
    this.onScroll();
  }

  goTopTrigger() {
    this.$gotoTop.addEventListener('click', (event) => {
      event.preventDefault();
      document.documentElement.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    });
  }

  onScroll() {
    if (this.$gotoTop) {
      window.addEventListener('scroll', () => {
        const st = window.pageYOffset || document.documentElement.scrollTop;
        if (st > 100) {
          this.$gotoTop.classList.add('goto-top--visible');
        } else {
          this.$gotoTop.classList.remove('goto-top--visible');
        }
      });
    }
  }
}

document.querySelectorAll('.goto-top').forEach(($el) => new GotoTop($el));
