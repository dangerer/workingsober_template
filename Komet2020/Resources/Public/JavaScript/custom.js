
 $(function () {
   $('[data-toggle="tooltip"]').tooltip()
 });
 

/*
$(document).ready(function() {
 
     // Funktion, die die AJAX-Anfrage durchführt
     function loadAjaxContent() {
         $.ajax({
             url: 'fileadmin/Komet2020/Resources/Private/Partials/Session-Users.html',  // Ersetzen Sie dies durch den Pfad zu Ihrer HTML-Datei
             type: 'GET',
             success: function(response) {
                 // Der Inhalt der geladenen HTML-Datei wird beispielsweise in ein Element mit der ID 'Session-Users-Ajax' eingefügt.
                 $('#Session-Users-Ajax').html(response);
             },
             error: function() {
                 console.error('Ein Fehler ist aufgetreten beim Laden der HTML-Datei.');
             }
         });
     }
 
     // Rufe die Funktion beim ersten Laden der Seite auf
     loadAjaxContent();
 
     // Setze einen Intervall, um die Funktion alle 2 Sekunden aufzurufen
     setInterval(loadAjaxContent, 15000);
 });*/


// Stepper Login
$(document).ready(function () {
$('.stepper').mdbStepper();
})

// ######## Context Menu ######## //

$(function() {
    var elements = document.querySelectorAll('.extbase-debugger-floating');
// Initialize the accumulated height
    var accumulatedHeight = 0;

// Loop through each element
    for (var i = 0; i < elements.length; i++) {
        var element = elements[i];

        // Get the height of the current element
        var elementHeight = element.clientHeight;

        // Add the accumulated height to the top style
        element.style.top = accumulatedHeight + 'px';

        // Update the accumulated height for the next iteration
        accumulatedHeight += elementHeight;
    }

        $('.context-menu-one').on('click', function(e){
            console.log('clicked', this);
        })    
 });
    

    

$(function() {
        $.contextMenu({
            selector: '.context-menu-sub-descriptor', 
            trigger: 'right',
            hideOnSecondTrigger: true,
            callback: function(key, options) {
                switch(key) {
                    case 'subcompedit':
                         var modal_id = '#modal-subdescriptor';
                         break;
                    case 'subcompadd':
                         var modal_id = '#modal-subdescriptor';
                         break;
                    case 'matadd':
                         var modal_id = '#modal-material';
                         break;
                    case 'delete':
                         var modal_id = '#modal-delete';
                         break;
                    default:
                        var modal_id = '#modal-empty';
                    break;
                }

                $(modal_id).modal('show');
            },
            items: {
                "subcompedit": {name: "Teilkompetenz bearbeiten"},
                "copy": {name: "Kopieren"},
                "paste": {name: "Einfügen nach"},
                "delete": {name: "Löschen"},
                "sep1": "---------",
                "subcompadd": {name: "Teilkompetenz anfügen"},
                "matadd": {name: "Material hinzufügen"},
            }
        });

        $('.context-menu-sub-descriptor').on('click', function(e){
            console.log('clicked', this);
        })    
});





$(function () {
  $('.material-tooltip-email').tooltip({
    template: '<div class="tooltip md-tooltip-email"><div class="tooltip-arrow md-arrow"></div><div class="tooltip-inner md-inner-email"></div></div>'
  });
})

// popovers Initialization
$(function () {
$('[data-toggle="popover"]').popover()
})

// Multiselect

// Material Select Initialization
$(document).ready(function() {
$('.mdb-select').materialSelect();
});

// Sidebar Nav

(function($) {

	"use strict";

	var fullHeight = function() {

		$('.js-fullheight').css('height', $(window).height());
		$(window).resize(function(){
			$('.js-fullheight').css('height', $(window).height());
		});

	};
	fullHeight();

	$('#sidebarCollapse').on('click', function () {
      $('#sidebar').toggleClass('active');
  });

})(jQuery);

// Sidebar Nav Collapse
$(document).ready(function() {
    // SideNav Initialization
    var windowWidth = $(window).width();
    if (windowWidth > 1440) {
        var snIsOpen = true;
    } else {
        var snIsOpen = false;
    }
    var sideNavButton = $(".btn-dashboard-collapse");
    var mainContent = $('.maincontent');

    $(window).resize(function() {
        windowWidth = $(window).width();
        // this rule only for comet sidebar
        if ($('.side-nav-comet').length) {
            if (windowWidth > 1440) {
                mainContent.css('padding-left', '230px');
                sideNavButton.css('left', '230px');
                sideNavButton.sideNav('show');
                $('#sidenav-overlay').css('display', 'none');
                snIsOpen = true;
            } else if (windowWidth < 530 && snIsOpen) {
                sideNavButton.css('left', '0');
                mainContent.css('padding-left', '0');
                $('#sidenav-overlay').css('display', 'block');
                sideNavButton.trigger('click');
            } else {
                snIsOpen = false;
                sideNavButton.sideNav('hide');
                mainContent.css('padding-left', '0');
                sideNavButton.css('left', '0');
            }
        }
    });

    sideNavButton.sideNav();

    if (windowWidth > 1440) {
        sideNavButton.sideNav('show');
    }

    sideNavButton.on('click', function() {
        snIsOpen = !snIsOpen;
        const elPadding = snIsOpen ? '230px' : '0';
        sideNavButton.css('left', elPadding);
        mainContent.css('padding-left', elPadding);
        $('#sidenav-overlay').css('display', 'none');
    });
    $('#sidenav-overlay').on('click', function() {
        snIsOpen = !snIsOpen;
    });

  new WOW().init();
});


// Smooth Scroll Homepage
$('a[href^="#"]').on('click',function(e) {
 e.preventDefault();
 var target = this.hash;
 var $target = $(target);
 $('html, body').stop().animate({
  'scrollTop': $target.offset().top
 }, 900, 'swing', function () {
  window.location.hash = target;
 });
});

 $(document).ready(function(){
        $("#modal-newcomet").modal('show');
 });

