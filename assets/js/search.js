$(document).ready(function(){
	$('a[href="#search"]').on('click', function(event) {                    
		$('#search').addClass('open');
		$('#search > form > input[type="search"]').focus();
	});            
	$('#search, #search button.close').on('click keyup', function(event) {
		if (event.target == this || event.target.className == 'close' || event.keyCode == 27) {
			$(this).removeClass('open');
		}
	});            

	// Customize header navigation site-wide
	(function () {
		var $nav = $('.navbar-nav.mx-auto');
		if (!$nav.length) return;

		$nav.empty().append([
			'<li class="nav-item"><a class="nav-link" href="index.html">Home</a></li>',
			'<li class="nav-item"><a class="nav-link" href="about.html">About Us</a></li>',
			'<li class="nav-item"><a class="nav-link" href="shop1.html">Kulfi Flavours</a></li>',
			'<li class="nav-item"><a class="nav-link" href="special-offer.html">Special Offers</a></li>',
			'<li class="nav-item"><a class="nav-link" href="contact.html">Contact Us</a></li>'
		].join(''));

		var path = (window.location.pathname || '').split('/').pop() || 'index.html';
		$nav.find('a.nav-link').each(function () {
			var href = $(this).attr('href') || '';
			if (href === path || (path === '' && href === 'index.html')) {
				$(this).closest('li').addClass('active');
			}
		});
	})();

	// Header CTA + icons
	(function () {
		// Remove search + shopping bag icons from header
		$('.last_list a.search-box, .last_list a[href="#search"]').remove();
		$('.last_list a.cart').remove();

		// Update CTA to point to Special Offers
		var $cta = $('.last_list a.contact_us');
		if ($cta.length) {
			$cta.attr('href', 'special-offer.html');
			// Keep the arrow icon if present; update only the text node
			var $icon = $cta.find('i').first().detach();
			$cta.text('View Special Offers ').append($icon);
		}
	})();

	// Reveal header after JS customization (prevents old header flash)
	$('.header').addClass('header--ready');
});
