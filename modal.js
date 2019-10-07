$('.modal-trigger').click(function() {
	$('main').css('filter', 'blur(5px)');
	$('.form').fadeIn();
	$('.form').addClass('disabled');
})
//закрыть по крестику
$('.close').click(function(){
	$('.form').fadeOut();
});


let value1 = document.getElementById('name');
let value2 = document.getElementById('surname');
$('.form__button').click(function() {
  alert('Привет'+ ' '+ value1.value+ ' ' + value2.value);
});
 