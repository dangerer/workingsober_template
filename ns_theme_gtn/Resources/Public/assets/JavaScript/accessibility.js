// Accessiblity
export default class HeaderAccessiblity {
  constructor($ele) {
    this.$menuHeader = $ele.querySelectorAll('.nav-items > li > a');
    this.$menuHeaderSecond = $ele.querySelectorAll('.sub-menu > li > a');

    this.menuheader();
    this.menuheadersecond();
    this.accessibility();
  }

  menuheader() {
    this.$menuHeader.forEach(($ele) => {
      $ele.addEventListener('focus', () => {
        this.$menuHeader.forEach(($ele1) => {
          if ($ele1.closest('.has-sub')) {
            $ele1.closest('.has-sub').classList.remove('active--menu');
          }
        });
        if ($ele.closest('.has-sub')) {
          $ele.closest('.has-sub').classList.add('active--menu');
        }
        this.accessibility();
      });
    });
  }

  menuheadersecond() {
    this.$menuHeaderSecond.forEach(($menuHead) => {
      $menuHead.addEventListener('focus', () => {
        this.$menuHeaderSecond.forEach(($ele1) => {
          if ($ele1.closest('.nav-item-second')) {
            $ele1.closest('.nav-item-second').classList.remove('active--secondmenu');
          }
        });
        if ($menuHead.closest('.nav-item-second')) {
          $menuHead.closest('.nav-item-second').classList.add('active--secondmenu');
        }
        this.accessibility();
      });
    });
  }

  accessibility() {
    const tabIndexMainAll = document.querySelectorAll('.sub-menu');
    if (tabIndexMainAll.length) {
      tabIndexMainAll.forEach((element) => {
        const tabIndexItem = element.querySelectorAll('a');
        if (tabIndexItem.length) {
          tabIndexItem.forEach((item) => {
            if (element.closest('.active--menu')) {
              item.removeAttribute('tabindex');
            } else {
              item.setAttribute('tabindex', '-1');
            }
          });
        }
        if (element.closest('.active--menu')) {
          element.removeAttribute('tabindex');
        } else {
          element.setAttribute('tabindex', '-1');
        }
      });
    }
  }
}

document.querySelectorAll('.page-header').forEach(($el) => new HeaderAccessiblity($el));
