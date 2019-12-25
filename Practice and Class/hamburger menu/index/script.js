$('.nevigaiton ul li').click(function(){
	
	//$('.nevigaiton ul ul').slideToggle(500);
	$(this).children('ul').slideToggle(500);
	
});

$('.hamberger a').click(function(){
	$('.nevigaiton').slideToggle(500);
});