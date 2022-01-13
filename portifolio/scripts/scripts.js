$(function() {
    var stopOnHover = false;
    if ($(window).outerWidth() > 992) {
        stopOnHover = true;
    }
    // Chama o carousel de testimonial
    $(".owl-carousel").owlCarousel({
        navigation: true, // Show next and prev buttons
        slideSpeed: 300,
        //pagination: false,
        paginationSpeed: 400,
        singleItem: true,
        autoPlay: 8000,
        stopOnHover: stopOnHover
    });

    var playerWidth,
        playerHeight;

    // Verifica o tamanho da tela para aplicar o tamanho do vídeo no modal
    if ($(window).outerWidth() > 992) {
        playerWidth = 902;
        playerHeight = 507;
    } else {
        playerWidth = $(window).outerWidth() - 40;
        playerHeight = playerWidth * 0.55;
    }

    // Ativa o balão da Steam
    $('.steam-included').popover();

    //  Chama o modal do Youtube
    $(".youtube").YouTubeModal({
        autoplay: 1,
        width: playerWidth,
        height: playerHeight
    });

    // Controle de links internos
    /*$('.internal-link').on('click', function(e) {
		e.preventDefault();

		var distance = $(this).attr('data-distance');
		var dest = $(this).attr('href').split("#");

		$(this).parent().siblings().removeClass('active');
		$(this).parent().addClass('active');

		if ($(window).outerWidth() < 992) {
			$('.navbar-toggle').addClass('collapsed');
			$('.navbar-collapse').removeClass('in');
		}

		if (dest[1] == 'topo') {
			$('.navbar-nav li').each(function() { $(this).removeClass('active') });
		}

		$('html,body').animate({ scrollTop: $("a[name="+dest[1]+"]").offset().top + - distance }, 'slow');
		window.history.pushState("", null, "#" + dest[1]);
	});*/

    // Cache selectors
    var lastId,
        topMenu = $("#header"),
        topMenuHeight = topMenu.outerHeight(),
        // All list items
        menuItems = topMenu.find(".internal-link"),
        // Anchors corresponding to menu items
        scrollItems = menuItems.map(function() {
            var item = $($(this).attr("href"));
            if (item.length) {
                return item;
            }
        });

    menuItems.click(function(e) {
        var href = $(this).attr("href"),
        	distance = $(this).attr('data-distance'),
            offsetTop = href === "#" ? 0 : $(href).offset().top - distance;
        $('html, body').stop().animate({
            scrollTop: offsetTop
        }, 300);
        e.preventDefault();
    });

    // Ações no scroll da tela
    $(window).scroll(function() {
        // Get container scroll position
        var fromTop = $(this).scrollTop() + topMenuHeight;

        // Get id of current scroll item
        var cur = scrollItems.map(function() {
            if ($(this).offset().top < fromTop)
                return this;
        });
        // Get the id of the current element
        cur = cur[cur.length - 1];
        var id = cur && cur.length ? cur[0].id : "";

        if (lastId !== id) {
            lastId = id;

            menuItems
                .parent().removeClass("active")
                .end().filter("[href=#" + id + "]").parent().addClass("active");
        }
		// Fixa a barra no topo no scroll
        if ($(window).scrollTop() > 100) {
            $('.navbar-default').addClass('navbar-fixed');
        } else {
            $('.navbar-default').removeClass('navbar-fixed');
        }
    });

    // Ação de click do FAQ
    $('.faq-item h2').each(function() {
        $(this).on('click', function() {
            console.log('oi');
            if ($(this).next('.faq-answer').is(':visible')) {
                $(this).next('.faq-answer').slideUp('fast');
            } else {
                $(this).next('.faq-answer').slideDown('fast');
            }
        });
    });
    // Limite de faq-itens exibidos na tela
    if ($('.faq-item').length > 4) {
        $('.faq-item').each(function(i) {
            if (i > 4) {
                $(this).hide();
            }
        })
    }
    // Ação de click para ver mais itens no faq
    $('#faqMore').on('click', function(e) {
        $('.faq-item').each(function(i) {
            if (i > 4) {
                $(this).slideDown('fast');
            }
        });

        $(this).fadeOut('fast');

        e.preventDefault();
    });


    // Ação de click do play customizado - Inicio
    $('.start-initial-video').on('click', function() {
        $('.initial-video-area')
            .append('<iframe id="yt01" src="//www.youtube.com/embed/gWytdyL2yTo?rel=0&amp;showinfo=0&amp;autoplay=1" frameborder="0" allowfullscreen></iframe>');
        $('.initial-video-area')
            .find('.iframe-img')
            .fadeOut('fast');
        $(this)
            .parent()
            .fadeOut('fast');

    });

    // Ação de click do play customizado - Mídia
    $('.start-midia-video').on('click', function() {
        $('.midia-video-area')
            .append('<iframe id="yt02" src="//www.youtube.com/embed/4VgRzOu-VU0?rel=0&amp;showinfo=0&amp;autoplay=1" frameborder="0" allowfullscreen></iframe>');
        $('.midia-video-area')
            .find('.iframe-img')
            .fadeOut('fast');
        $(this)
            .parent()
            .fadeOut('fast');

    });
	
	// Ação de click do play customizado - Brindes
    $('.start-gifts-video').on('click', function() {
        $('.gifts-video-area')
            .append('<iframe id="yt04" src="//www.youtube.com/embed/gWytdyL2yTo?rel=0&amp;showinfo=0&amp;autoplay=1" frameborder="0" allowfullscreen></iframe>');
        $('.gifts-video-area')
            .find('.iframe-img')
            .fadeOut('fast');
        $(this)
            .parent()
            .fadeOut('fast');

    });

    // Ação de click do play customizado - Making of
    $('.start-makingof-video').on('click', function() {
        $('.makingof-video-area')
            .append('<iframe id="yt03" src="//www.youtube.com/embed/oGYu6kQu3uk?rel=0&amp;showinfo=0&amp;autoplay=1" frameborder="0" allowfullscreen></iframe>');
        $('.makingof-video-area')
            .find('.iframe-img')
            .fadeOut('fast');
        $(this)
            .parent()
            .fadeOut('fast');

    });

});
