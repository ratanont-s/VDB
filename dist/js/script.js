$(function () {
  'use strict'

  $('[data-toggle="offcanvas"]').on('click', function () {
    $('.offcanvas-collapse').toggleClass('open')
  });

})

// Tooltip
$(function () {
  $('[data-toggle="tooltip"]').tooltip();
});

// Toggle input search
function toggleInputSearch() {
  $('.navbar-nav').toggleClass('active');
  $('.btn-search').toggleClass('active');
  $('#inputSearch').toggleClass('active');
}



// Document
$(document).ready(function () {
  // Header
  $(".header").sticky({
    topSpacing: 0,
    zIndex: 1031
  });

});