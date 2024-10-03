//
// Header
//
export default class HeaderMenu {
  constructor($ele) {
    this.$body = document.body;
    this.$pageHeader = $ele;
    this.$menuBar = $ele.querySelector('#menuTrigger');
    this.$mainMenu = $ele.querySelector('navigation');
    this.$nav_list = $ele.querySelectorAll('.nav-items');
    this.$nav_items = $ele.querySelectorAll('.nav-items li');
    this.$navArrow = $ele.querySelectorAll('.navigation .has-sub .nav-arrow');

    if (this.$menuBar) {
      this.menuTrigger();
    }
    this.menuOpen();
    this.onResize();
    this.onScroll();
  }

  onResize() {
    window.addEventListener('resize', () => {
      if (window.innerWidth > 992) {
        if (this.$body.classList.contains('menu--open')) {
          this.$body.classList.remove('menu--open');
        }
      }
    });
  }

  onScroll() {
    window.addEventListener('scroll', () => {
      this.$pageHeader.classList.toggle('page-header--sticky', window.scrollY > 100);
    });
  }

  // Menu Trigger
  menuTrigger() {
    this.$menuBar.addEventListener('click', () => {
      this.$body.classList.toggle('menu--open');
      for (let i = 0; i < this.$nav_items.length; i += 1) {
        this.$nav_items[i].classList.remove('has-sub--open');
      }
    });
  }

  // menu Open Mobile devices
  menuOpen() {
    this.$navArrow.forEach(($e) => {
      $e.addEventListener('click', () => {
        this.removeChildFromSiblings($e.parentNode);
        $e.parentNode.classList.toggle('active');
        $e.parentNode.classList.toggle('has-sub--open');
      });
    });
  }

  removeChildFromSiblings(elem) {
    const siblings = [];

    if (!elem.parentNode) {
      return siblings;
    }

    let sibling = elem.parentNode.firstChild;

    while (sibling) {
      if (sibling.nodeType === 1 && sibling !== elem) {
        sibling.classList.remove('active');
        sibling.classList.remove('has-sub--open');
      }
      sibling = sibling.nextElementSibling;
    }
    return siblings;
  }
}

document.querySelectorAll('.page-header').forEach(($el) => new HeaderMenu($el));

if (!document.body.className.includes('ns-website-content')) {
  document.addEventListener('click', (event) => {
    if (event.target.href && event.target.href !== '#' && !event.target.href.includes('javascript:;') && !event.target.href.includes('tel:') && !event.target.href.includes('mailto:') && event.target.tagName === 'A' && !event.target.hasAttribute('target') && !event.target.hasAttribute('data-fancybox') && !event.target.hasAttribute('data-bs-toggle', 'modal') && !event.target.hasAttribute('data-glightbox') && !event.target.hasAttribute('data-darkbox') && !event.target.className.includes('lightbox')) {
      document.body.classList.remove('menu--open');
    }
  });
}
