'use strict';

const statusCodeFuncs = {
  200: function() { location.reload() },
  500: function() { alert('Failed') }
}

$('#modal').on('shown.bs.modal', function(event) {
  // focus input
  $('#name-input').trigger('focus');

  // get button that called modal
  let trigger = $(event.relatedTarget);
  // store the id on the modal button
  $('#submit-name-btn').val(trigger.val());
});

$(document).on('submit', '#form-eat-burger', function(event) {
  event.preventDefault();
  $('#modal').modal('hide');
  let burgerId = $('#submit-name-btn').val();
  let name = $('#name-input').val();

  $.ajax({
    url: '/api/search/customers?' + $.param({name}),
    method: 'GET'
  }).then(customer => {
    if(customer) {
      // customer in database
      return customer;
    } else {
      // customer NOT in database
      // create new customer
      return $.ajax({
        url: '/api/customers',
        method: 'POST',
        contentType: 'application/json', 
        data: JSON.stringify({name})
      });
    }
  }).then(customer => {
    // update burger
    return $.ajax({
      url: '/api/burgers',
      method: 'PUT',
      contentType: 'application/json',
      data: JSON.stringify({id: burgerId, CustomerId: customer.id}),
      statusCode: statusCodeFuncs
    });
  });
  
});

$(document).on('submit', '#form-add-burger', function(event) {
  event.preventDefault();
  $.ajax({
    url: '/api/burgers',
    method: 'POST',
    contentType: 'application/json',
    data: JSON.stringify({name: $('#burger-name-input').val()}),
    statusCode: statusCodeFuncs
  });
});
