$(document).ready(function(){
			/*
			$('#header').removeClass('default');
			$(window).scroll(function(){
				if ($(this).scrollTop()>20){
					$('header').addClass('default').fadeIn('fast');
				}else{
					$('header').removeClass('default').fadeIn('fast');
				};
			});
			*/
			$('a[href^="#"]').click(function(){
				elementClick=$(this).attr('href');
				destination=$(elementClick).offset().top;
				
					$('body').animate({scrollTop: destination},1000);
				
					$('html').animate({scrollTop: destination},1000);
				
				return false;
			});
		});