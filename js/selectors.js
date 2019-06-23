// declare your functions here...
function paragraphSelector() {
  return $('p');
}

function lastImageSelector() {
  return $('img:last');
}

function ninjaBabySelector() {
  $('#baby-ninja').click(ninjaBabySelector);
}

function divSelector() {
  $('.pics').click(divSelector);
}

function firstListItem() {
  $('#pic-list:first-child').click(firstListItem);
}