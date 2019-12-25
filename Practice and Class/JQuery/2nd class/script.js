//$('body').text('this is jquery class');
//$('body').html('<h1>this is jquery class</h1>');
//$('h1').text('I changed the text');
//$('h1').append(' added text');
//$('h1').prepend('added text ');




 $('.ap').click(function(){
	 $('h1').append('<span class="apHide"> Append</span>');
	 $('.ap').hide(1000);
	 $('p').hide();
	 $('p').remove();
	 $('.pre').show(500);
});

 $('.pre').click(function(){
	 $('h1').prepend('<span class="preHide">Prepend </span>');
	$('.ap').show(1000);
	 $('.pre').hide(500);
	
});


$('.tg').click(function(){
	//$('h1').toggle(500);
	//$('h1').slideToggle(500);
	//$('h1').fadeToggle(1000);
	//$('h1').fadeOut(1000);
	//$('h1').slideUp(1000);
	//$('h1').slideDown(100);
	
});

