var $phrase = document.querySelector('.phrase')

var phrase = 'Hello people, guess what, I\'m such a great typer I could out-type anyone on this planet';

var chars = phrase.split('')

function renderChar(char) {
  var  $char = document.createElement('span')
  $char.textContent = char
  return $char
}

for (var i = 0; i < chars.length; i++) {
  var $char = renderChar(chars[i])
  $phrase.appendChild($char)
}

var $current = document.querySelector('span')
$current.classList.add('current')
