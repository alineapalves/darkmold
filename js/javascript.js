/*var, let, const*/

const $html = document.querySelector("html");
const $checkbox = document.querySelector('#switch');
// change é para mudar um evento
$checkbox.addEventListener('change', function (){
  $html.classList.toggle('dark-mode');
})