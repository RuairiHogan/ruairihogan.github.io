/*
	Dopetrope by HTML5 UP
	html5up.net | @ajlkn
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/

(function($) {

	var	$window = $(window),
		$body = $('body');

	// Breakpoints.
		breakpoints({
			xlarge:  [ '1281px',  '1680px' ],
			large:   [ '981px',   '1280px' ],
			medium:  [ '737px',   '980px'  ],
			small:   [ null,      '736px'  ]
		});

	// Play initial animations on page load.
		$window.on('load', function() {
			window.setTimeout(function() {
				$body.removeClass('is-preload');
			}, 100);
		});

	// Dropdowns.
		$('#nav > ul').dropotron({
			mode: 'fade',
			noOpenerFade: true,
			alignment: 'center'
		});

	// Nav.

		// Title Bar.
			$(
				'<div id="titleBar">' +
					'<a href="#navPanel" class="toggle"></a>' +
				'</div>'
			)
				.appendTo($body);

		// Panel.
			$(
				'<div id="navPanel">' +
					'<nav>' +
						$('#nav').navList() +
					'</nav>' +
				'</div>'
			)
				.appendTo($body)
				.panel({
					delay: 500,
					hideOnClick: true,
					hideOnSwipe: true,
					resetScroll: true,
					resetForms: true,
					side: 'left',
					target: $body,
					visibleClass: 'navPanel-visible'
				});

	// Sidebar Navigation Toggle.
		var $sidebarToggle = $('#sidebarToggle'),
			$sidebar = $('#sidebar'),
			$sidebarOverlay = $('#sidebarOverlay'),
			$sidebarClose = $('#sidebarClose');

		// Toggle sidebar on button click
		$sidebarToggle.on('click', function(e) {
			e.stopPropagation();
			$sidebar.toggleClass('active');
			$sidebarToggle.toggleClass('active');
			$sidebarOverlay.toggleClass('active');
		});

		// Close sidebar on overlay click
		$sidebarOverlay.on('click', function() {
			$sidebar.removeClass('active');
			$sidebarToggle.removeClass('active');
			$sidebarOverlay.removeClass('active');
		});

		// Close sidebar on close button click
		$sidebarClose.on('click', function() {
			$sidebar.removeClass('active');
			$sidebarToggle.removeClass('active');
			$sidebarOverlay.removeClass('active');
		});

		// Close sidebar on link click
		$sidebar.find('a').on('click', function() {
			$sidebar.removeClass('active');
			$sidebarToggle.removeClass('active');
			$sidebarOverlay.removeClass('active');
		});

		// Close sidebar on Escape key
		$(document).on('keydown', function(e) {
			if (e.keyCode === 27 && $sidebar.hasClass('active')) {
				$sidebar.removeClass('active');
				$sidebarToggle.removeClass('active');
				$sidebarOverlay.removeClass('active');
			}
		});

	// Desktop Projects Dropdown Menu.
		var $dropdownBtn = $('#projectsDropdownToggle'),
			$dropdownMenu = $('#projectsDropdown');

		// Toggle dropdown on button click
		$dropdownBtn.on('click', function(e) {
			e.stopPropagation();
			$dropdownMenu.toggleClass('active');
			$dropdownBtn.toggleClass('active');
		});

		// Close dropdown on menu link click
		$dropdownMenu.find('a').on('click', function() {
			$dropdownMenu.removeClass('active');
			$dropdownBtn.removeClass('active');
		});

		// Close dropdown when clicking outside
		$(document).on('click', function(e) {
			if (!$(e.target).closest('.projects-dropdown-container').length) {
				$dropdownMenu.removeClass('active');
				$dropdownBtn.removeClass('active');
			}
		});

		// Close dropdown on Escape key
		$(document).on('keydown', function(e) {
			if (e.keyCode === 27) {
				$dropdownMenu.removeClass('active');
				$dropdownBtn.removeClass('active');
			}
		});

})(jQuery);
