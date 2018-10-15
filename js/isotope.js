
// init Isotope
var $grid = $('.item').isotope({
  itemSelector: '.professional',
  layoutMode: 'fitRows',
  getSortData: {
    unit: '[data-category]',
  },
  // sort by color then number
  sortBy: [ 'unit' ]
});

// bind sort button click
$('.sort-by-button-group').on( 'click', 'button', function() {
  var sortValue = $(this).attr('data-sort-value');
  // make an array of values
  sortValue = sortValue.split(',');
  $grid.isotope({ sortBy: sortValue });
});

// change is-checked class on buttons
$('.button-group').each( function( i, buttonGroup ) {
  var $buttonGroup = $( buttonGroup );
  $buttonGroup.on( 'click', 'button', function() {
    $buttonGroup.find('.is-checked').removeClass('is-checked');
    $( this ).addClass('is-checked');
  });
});
