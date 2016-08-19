$(function() {
  window.subvisual = window.subvisual || {};
  window.subvisual.nav = window.subvisual.nav || {};
  window.subvisual.nav.bar = (function() {
    let $element = $('#fixed-nav');

    function update(currentScrollTop, lastScrollTop) {
      let scrollState = new ScrollState(currentScrollTop, lastScrollTop);

      if (scrollState.isAtTheTop()) {
        $element.addClass('is-hidden').addClass('is-transparent');
        return;
      }

      if (scrollState.hasntScrolledEnough()) {
        return;
      }

      let hasPassedTheElement = scrollState.hasPassedTheElement($element.outerHeight());

      if (scrollState.hasScrolledDown()) {
        $element.addClass('is-hidden');
      } else if (hasPassedTheElement) {
        $element.removeClass('is-hidden is-transparent');
      }
    }

    return { update };
  })();
});
