//$('body').text('this is jquery class');
//$('h1').text('I changed the text');
//$('body').html('<h1>this is jquery class</h1>');

//$('h1').append(' added text2');
//$('h1').prepend('added text1 ');

$('.ap').click(function()
  {
	$('h1').append(' Append');
  } 

);

$('.pre').click(function(){
	$('h1').prepend('Prepend ');
});