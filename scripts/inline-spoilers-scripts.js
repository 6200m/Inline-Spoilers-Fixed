/**
 * @package Inline Spoilers
 */

function inlineSpoiler() {
  jQuery(".spoiler-head").on('click', function(event) {
    $this = jQuery(this);
    event.stopImmediatePropagation();
    if ($this.hasClass("expanded")) {
      $this.removeClass("expanded");
      $this.addClass("collapsed");
      $this.prop('title', title.expand);
      $this.next().slideUp("fast");
    } else {
      $this.removeClass("collapsed");
      $this.addClass("expanded");
      $this.prop('title', title.collapse);
      $this.next().slideDown("fast");
    }
  });
}

jQuery(function() {
  inlineSpoiler();
});

jQuery(function($) {
  $(document.body).on('post-load', function() {
    inlineSpoiler();
  });
});