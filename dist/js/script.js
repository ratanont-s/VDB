// Document
$(document).ready(function () {
  // Header
  $(".header").sticky({
    topSpacing: 0,
    zIndex: 1030
  });

  // Tooltip
  $(function () {
    $('[data-toggle="tooltip"]').tooltip();
  });

});