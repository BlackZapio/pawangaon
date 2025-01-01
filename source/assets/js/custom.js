			 
 jQuery( document ).ready(function( $ ) {
		
		$('.colorblue').click(function (){
		   $('#cs3').attr('href','assets/css/blue.css');
		});
		$('.colorgreen').click(function (){
		   $('#cs3').attr('href','assets/css/green.css');
		});
		$('.colororange').click(function (){
		   $('#cs3').attr('href','assets/css/orange.css');
		});
		
		
		var originalSize = $('div, a, p, li').css('font-size');
		 
		   $(".resetMe").click(function(){
		  $('div, a, p, li').css('font-size', originalSize); 

		   });

		  
		   $(".increase").click(function()
		   {
		  var currentSize = $('div, a, p, li').css('font-size');
		 // alert(currentSize);
		  var yyy = parseFloat(currentSize)+1;
		  if (yyy <=15)
		  {
			  
		  $('div, a, p, li').css('font-size', yyy);
		  }
		  else
		  {
			  return false;
			  //alert("sorry,u dont increasesize greater than 17");
		  }
		  //return false;
		   });

		  //Fiont size - Increase and decrease
		   $(".decrease").click(function(){
		  var currentFontSize = $('div, a, p, h1, h2, h3, h4, h5, li').css('font-size');
		  var currentSize = $('div, a, p, h1, h2, h3, h4, h5, li').css('font-size');
		  var currentSize = parseFloat(currentSize)-0.8;
		  if(currentSize>=12)
		  {
		  $('div, a, p, h1, h2, h3, h4, h5, li').css('font-size', currentSize);
		  }
		  return false;
		   });

});		

		
		//Logo Fade In Fade Out 
		function imageOneFade()	{
		$('#picOne, #picOne1').fadeIn(2000, function() { setTimeout("$('#picOne, #picOne1').fadeOut(2500); imageTwoFade();",10000); }); }

		function imageTwoFade()	{ $('#picTwo, #picTwo1').fadeIn(2000,	function(){ setTimeout("$('#picTwo, #picTwo1').fadeOut(2500); imageOneFade();",10000); }); }

		$(document).ready(function() {imageOneFade(); });
		
		
		
			
		

	$(function() {
		
	  $('.colororange').click(function(){ $("#color1").attr('src',"assets/images/icon-5.png");  });
	  $('.colororange').click(function(){ $("#color2").attr('src',"assets/images/icon-2.png");  });
	  $('.colororange').click(function(){ $("#color3").attr('src',"assets/images/icon-4.png");  });
	  $('.colororange').click(function(){ $("#color4").attr('src',"assets/images/icon-1.png");  });
	  $('.colororange').click(function(){ $("#color5").attr('src',"assets/images/icon-3.png");  });
	  
	  $('.colorblue').click(function(){ $("#color1").attr('src',"assets/images/icon-55.png");  });
	  $('.colorblue').click(function(){ $("#color2").attr('src',"assets/images/icon-22.png");  });
	  $('.colorblue').click(function(){ $("#color3").attr('src',"assets/images/icon-44.png");  });
	  $('.colorblue').click(function(){ $("#color4").attr('src',"assets/images/icon-11.png");  });
	  $('.colorblue').click(function(){ $("#color5").attr('src',"assets/images/icon-33.png");  });
	  
	  $('.colorgreen').click(function(){ $("#color1").attr('src',"assets/images/icon-555.png");  });
	  $('.colorgreen').click(function(){ $("#color2").attr('src',"assets/images/icon-222.png");  });
	  $('.colorgreen').click(function(){ $("#color3").attr('src',"assets/images/icon-444.png");  });
	  $('.colorgreen').click(function(){ $("#color4").attr('src',"assets/images/icon-111.png");  });
	  $('.colorgreen').click(function(){ $("#color5").attr('src',"assets/images/icon-333.png");  });
	  
	  
	  
	});	
			   
			   

		
