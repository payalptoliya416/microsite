
$('select.select-club-services').each(function() {

var dropdown = $('<div />').addClass('select-club-services selectDropdown');

$(this).wrap(dropdown);

var label = $('<div />').text($(this).attr('placeholder')).insertAfter($(this));
var list = $('<ul />');

$(this).find('option').each(function() {
list.append($('<li />').append($('<a />').text($(this).text())));
});

list.insertAfter($(this));

if($(this).find('option:selected').length) {
label.text($(this).find('option:selected').text());
list.find('li:contains(' + $(this).find('option:selected').text() + ')').addClass('active');
$(this).parent().addClass('filled');
}
});

$(document).on('click touch', '.selectDropdown ul li a', function(e) {
e.preventDefault();
var dropdown = $(this).parent().parent().parent();
var active = $(this).parent().hasClass('active');
var label = active ? dropdown.find('select').attr('placeholder') : $(this).text();

if (dropdown.find('select').attr('id') === 'reason-select') {
  const otherReasonSection = document.getElementById('other-reason-section');
  if (label === "Others") {
    otherReasonSection.classList.remove('hidden');
  } else {
    otherReasonSection.classList.add('hidden');
  }
}

// Handle the second dropdown for 'btm-other'
if (dropdown.find('select').attr('id') === 'main_select_services') {
  const otherReasonSectiona = document.getElementById('btm-other');
  if (label === "others") {
    otherReasonSectiona.classList.remove('hidden');
  } else {
    otherReasonSectiona.classList.add('hidden');
  }
}

dropdown.find('option').prop('selected', false);
dropdown.find('ul li').removeClass('active');

dropdown.toggleClass('filled', !active);
dropdown.children('div').text(label);

if(!active) {
dropdown.find('option:contains(' + $(this).text() + ')').prop('selected', true);
$(this).parent().addClass('active');
}

dropdown.removeClass('open');
});

$('.select-club-services > div').on('click touch', function(e) {
var self = $(this).parent();
self.toggleClass('open');
});

$(document).on('click touch', function(e) {
var dropdown = $('.select-club-services');
if(dropdown !== e.target && !dropdown.has(e.target).length) {
dropdown.removeClass('open');
}

});
