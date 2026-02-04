// Home Page 1 

$(document).ready(function () {
    var owl = $('.classic-con .owl-carousel');
    owl.owlCarousel({
        margin: 30,
        nav: false,
        loop: true,
        dots: true,
        autoplay: true,
        autoplayTimeout: 4500,
        responsive: {
            0: {
                items: 1
            },
            576: {
                items: 2
            },
            768: {
                items: 2
            },
            992: {
                items: 3
            },
            1200: {
                items: 4
            }
        }
    })
})

// Home Page 1 - Categories carousel
$(document).ready(function () {
    var $owl = $('.categories-con .categories-carousel');
    var $dots = $('.categories-con .categories-dots');

    $owl.owlCarousel({
        margin: 30,
        nav: false,
        loop: true,
        dots: false,
        // Smooth + controllable
        autoplay: true,
        autoplayTimeout: 4500,
        autoplayHoverPause: true,
        smartSpeed: 650,
        slideBy: 1,
        responsive: {
            0: {
                items: 1
            },
            576: {
                items: 2
            },
            768: {
                items: 2
            },
            992: {
                items: 3
            },
            1200: {
                items: 4
            }
        }
    })

    // Custom dots: number of dots adapts to how many "scroll positions" exist for the current breakpoint.
    // Example: 6 cards, 4 visible => 3 dots (start positions 0,1,2).
    if ($dots.length) {
        function getCarousel() {
            return $owl.data('owl.carousel');
        }
        function getItemsPerView() {
            var c = getCarousel();
            return (c && c.settings && c.settings.items) ? c.settings.items : 1;
        }
        function getCardCount() {
            // IMPORTANT: in loop mode Owl clones DOM nodes, so count via Owl internals.
            var c = getCarousel();
            return (c && c._items) ? c._items.length : $owl.find('.item').length;
        }
        function clamp(n, min, max) {
            return Math.max(min, Math.min(max, n));
        }
        function getMaxStart() {
            var count = getCardCount();
            var itemsPerView = getItemsPerView();
            return Math.max(0, count - itemsPerView);
        }
        function getDotCount() {
            // One dot per possible start position
            return getMaxStart() + 1;
        }
        function getRelativeIndex() {
            var c = getCarousel();
            if (!c) return 0;
            var absIndex = (typeof c.current === 'function') ? c.current() : 0;
            return (typeof c.relative === 'function') ? c.relative(absIndex) : absIndex;
        }
        function getActiveDotIndex() {
            var dotCount = getDotCount();
            if (!dotCount) return 0;
            // Loop-friendly: keep dot index stable by wrapping with modulo.
            // Example: 6 items, 4 visible => dotCount 3. Relative indices 0..5 map to dots 0..2 repeating.
            return ((getRelativeIndex() % dotCount) + dotCount) % dotCount;
        }
        function setActiveDot(dotIndex) {
            $dots.find('.cat-dot').removeClass('active').eq(dotIndex).addClass('active');
        }
        function rebuildDots() {
            var dotCount = getDotCount();
            $dots.empty();
            for (var i = 0; i < dotCount; i++) {
                $dots.append('<button type="button" class="cat-dot" aria-label="Go to categories page ' + (i + 1) + '"></button>');
            }
            setActiveDot(clamp(getActiveDotIndex(), 0, dotCount - 1));
        }

        rebuildDots();

        $dots.on('click', '.cat-dot', function () {
            var dotIndex = $(this).index();
            var startIndex = clamp(dotIndex, 0, getMaxStart());
            $owl.trigger('to.owl.carousel', [startIndex, 350, true]);
            setActiveDot(dotIndex);
        });

        $owl.on('changed.owl.carousel', function (event) {
            if (!event || !event.item) return;
            var dotCount = getDotCount();
            if (!dotCount) return;

            var relIndex;
            if (event.relatedTarget && typeof event.relatedTarget.relative === 'function') {
                relIndex = event.relatedTarget.relative(event.item.index || 0);
            } else {
                relIndex = event.item.index || 0;
            }

            var dotIndex = ((relIndex % dotCount) + dotCount) % dotCount;
            setActiveDot(dotIndex);
        });

        $owl.on('resized.owl.carousel', function () {
            rebuildDots();
        });
    }
})

$(document).ready(function () {
    var owl = $('.seller-con .owl-carousel');
    owl.owlCarousel({
        margin: 30,
        nav: false,
        loop: true,
        dots: true,
        autoplay: true,
        autoplayTimeout: 4500,
        responsive: {
            0: {
                items: 1
            },
            576: {
                items: 2
            },
            768: {
                items: 2
            },
            992: {
                items: 3
            },
            1200: {
                items: 4
            }
        }
    })
})

$(document).ready(function () {
    var owl = $('.testimonial-con .owl-carousel');
    owl.owlCarousel({
        margin: 30,
        nav: false,
        loop: true,
        dots: true,
        autoplay: true,
        autoplayTimeout: 4500,
        responsive: {
            0: {
                items: 1
            },
            576: {
                items: 1
            },
            768: {
                items: 1
            }
        }
    })
})

// Home Page 2 

$(document).ready(function () {
    var owl = $('.insta-con .owl-carousel');
    owl.owlCarousel({
        margin: 0,
        nav: false,
        loop: true,
        dots: false,
        autoplay: true,
        autoplayTimeout: 6000,
        responsive: {
            0: {
                items: 2
            },
            576: {
                items: 3
            },
            768: {
                items: 4
            },
            992: {
                items: 5
            },
            1200: {
                items: 6
            }
        }
    })
})

$(document).ready(function () {
    var owl = $('.best-con .owl-carousel');
    owl.owlCarousel({
        margin: 30,
        nav: true,
        loop: true,
        dots: false,
        autoplay: true,
        autoplayTimeout: 4500,
        responsive: {
            0: {
                items: 1
            },
            576: {
                items: 2
            },
            768: {
                items: 3
            },
            992: {
                items: 3
            }
        }
    })
})

// Home Page 3 

$(document).ready(function () {
    var owl = $('.popular-con .owl-carousel');
    owl.owlCarousel({
        margin: 30,
        nav: true,
        loop: true,
        dots: false,
        autoplay: true,
        autoplayTimeout: 4500,
        responsive: {
            0: {
                items: 1
            },
            576: {
                items: 2
            },
            768: {
                items: 3
            },
            992: {
                items: 3
            },
            1200: {
                items: 4
            }
        }
    })
})

$(document).ready(function () {
    var owl = $('.testimonial3-con .owl-carousel');
    owl.owlCarousel({
        margin: 30,
        nav: false,
        loop: true,
        dots: true,
        autoplay: true,
        autoplayTimeout: 4500,
        responsive: {
            0: {
                items: 1
            },
            576: {
                items: 1
            },
            768: {
                items: 2
            },
            992: {
                items: 3
            }
        }
    })
})

// About Page 

$(document).ready(function () {
    var owl = $('.team-con .owl-carousel');
    owl.owlCarousel({
        margin: 30,
        nav: true,
        loop: true,
        dots: false,
        autoplay: true,
        autoplayTimeout: 4500,
        responsive: {
            0: {
                items: 1
            },
            576: {
                items: 2
            },
            768: {
                items: 3
            },
            992: {
                items: 3
            }
        }
    })
})