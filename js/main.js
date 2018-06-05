
$(document).ready(function(){

    /* Menu drop down*/
    $('.main-menu li.menu-item-has-chldren').append('<span class="submenu-toggle"><i class="fa fa-angle-up"></i></span>');
    $('.menu-mobile').on('click', function(){

        if(!$(this).next().hasClass('menu-open')){
            $(this).next().addClass('menu-open');
        } else {
            $(this).next().removeClass('menu-open');
        }
    });

    $('.submenu-toggle').on('click', function(){

        if(!$(this).prev().hasClass('submenu-open')){
            $(this).prev().addClass('submenu-open');
            $(this).children('.fa').removeClass('fa-angle-up');
            $(this).children('.fa').addClass('fa-angle-down');
        } else {
            $(this).prev().removeClass('submenu-open');

            $(this).children('.fa').removeClass('fa-angle-down');
            $(this).children('.fa').addClass('fa-angle-up');
        }
    });

    $(".nav-item").click(function(){
    	$(".nav-tabs li").removeClass('active');
    	$(this).addClass('active');
    	console.log($(this));
    });
    $(".nav-item").hover(function(){
    	
    	$(this).toggleClass('h-active');
    	
    }
    );
});