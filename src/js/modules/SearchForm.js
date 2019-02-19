import $ from 'jquery';

export default (function() {
  const $searchOpen = $('.search-open');
  const $searchForm = $('.search');
  const $searchClose = $searchForm.children('.search__close');

  $searchOpen.on('click', function() {
    $searchForm.addClass('search--opened');
  });

  $searchClose.on('click', function() {
    $searchForm.removeClass('search--opened');
  });
})();
