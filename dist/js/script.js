$(function () {
  'use strict'

  $('[data-toggle="offcanvas"]').on('click', function () {
    $('.offcanvas-collapse').toggleClass('open')
  })
})

// Document
$(document).ready(function () {
  // Header
  $(".header").sticky({
    topSpacing: 0,
    zIndex: 1031
  });

  // Tooltip
  $(function () {
    $('[data-toggle="tooltip"]').tooltip();
  });

});