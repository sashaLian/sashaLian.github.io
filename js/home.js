 $(document).ready(function(){
    $('.carousel_inner').slick({
		dots: true,
        speed: 1200,
        adaptiveHeight: true,
        prevArrow: '<button type="button" class="slick-prev"><svg xmlns="http://www.w3.org/2000/svg" width="42" height="43" viewBox="0 0 42 43"><defs><clipPath id="dvnra"><path fill="#fff" d="M21.008 0C9.405 0 0 9.51 0 21.242c0 11.73 9.405 21.241 21.008 21.241 11.602 0 21.007-9.51 21.007-21.241C42.015 9.51 32.61 0 21.008 0z"/></clipPath></defs><g><g><g><path fill="#fff" d="M23.642 8.73L11.616 20.892l.706.714 12.026-12.16z"/></g><g><path fill="#fff" d="M11.708 21.043L23.89 33.359l.709-.717-12.181-12.316z"/></g><g><path fill="none" stroke="#fff" stroke-miterlimit="50" stroke-width="2" d="M21.008 0C9.405 0 0 9.51 0 21.242c0 11.73 9.405 21.241 21.008 21.241 11.602 0 21.007-9.51 21.007-21.241C42.015 9.51 32.61 0 21.008 0z" clip-path="url(&quot;#dvnra&quot;)"/></g></g></g></svg></button>',
        nextArrow: '<button type="button" class="slick-next"><svg xmlns="http://www.w3.org/2000/svg" width="42" height="43" viewBox="0 0 42 43"><defs><clipPath id="dvnra"><path fill="#fff" d="M21.008 0C9.405 0 0 9.51 0 21.242c0 11.73 9.405 21.241 21.008 21.241 11.602 0 21.007-9.51 21.007-21.241C42.015 9.51 32.61 0 21.008 0z"/></clipPath></defs><g><g><g><path fill="#fff" d="M23.642 8.73L11.616 20.892l.706.714 12.026-12.16z"/></g><g><path fill="#fff" d="M11.708 21.043L23.89 33.359l.709-.717-12.181-12.316z"/></g><g><path fill="none" stroke="#fff" stroke-miterlimit="50" stroke-width="2" d="M21.008 0C9.405 0 0 9.51 0 21.242c0 11.73 9.405 21.241 21.008 21.241 11.602 0 21.007-9.51 21.007-21.241C42.015 9.51 32.61 0 21.008 0z" clip-path="url(&quot;#dvnra&quot;)"/></g></g></g></svg></button>',
        responsive: [
            {
                breakpoint: 993,
                settings: {
                    dots: false,
					arrows: false,
					autoplay: true,
                    autoplaySpeed: 2000,
                    adaptiveHeight: true
                }
            }
        ]
    });
});
 



