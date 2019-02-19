import $ from 'jquery';

export default (function() {
  const $pickerButtons = $('.product__color-picker-set');

  $pickerButtons.on('mouseover', function() {
    const $this = $(this);
    const skin = $this.attr('data-skin');
    const $previewImage = $this
      .parents('.product')
      .find(`img[data-skin=${skin}]`);

    $this
      .addClass('active')
      .siblings()
      .removeClass('active');

    $previewImage
      .addClass('active')
      .siblings()
      .removeClass('active');
  });
})();
