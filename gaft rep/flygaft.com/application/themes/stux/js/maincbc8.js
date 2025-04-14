$(document).ready(function() { 
    var wh = $(window).width();
    var ww = $(window).width();
    var $hamburger = $(".hamburger");

    
    init();
    function init(){
        
        //gsap.to(".card-image", {rotation: 27, x: 100, duration: 1});
    }

    
    $hamburger.on("click", function(e) {

        $hamburger.toggleClass("is-active");
        $('body').toggleClass("active-menu");
        
    });
 

// menu balk
$(window).scroll(function () {
  var scrollTop = $(window).scrollTop();
  if (scrollTop > 70) {
      $('.global-nav').addClass('scrolledstate');
  } else {
      $('.global-nav').removeClass('scrolledstate');
  }
});



// start stop video als in beeld
if ($('#hpTeaserMovie').length > 0) {

var vid = document.getElementById("hpTeaserMovie");
vid.play();

// init controller
var controllervideo = new ScrollMagic.Controller();

// build scene
var scenevideo = new ScrollMagic.Scene({triggerElement: "#hpTeaserMovie", duration: 600})
    .addTo(controllervideo)
    
    .on('enter', function (e) {
        vid.play();
    })
    .on("leave", function (e) {
        vid.pause();
    });
}


//----- fixed navigatie homepage:

// Cache selectors
var lastId,
 topMenu = $("#section_nav"),
 topMenuHeight = topMenu.outerHeight()+1,
 // All list items
 menuItems = topMenu.find("a"),
 // Anchors corresponding to menu items
 scrollItems = menuItems.map(function(){
   var item = $($(this).attr("href"));
    if (item.length) { return item; }
 });

 

// Bind click handler to menu items
// so we can get a fancy scroll animation
// menuItems.click(function(e){
//   var href = $(this).attr("href"),
//       offsetTop = href === "#" ? 0 : $(href).offset().top-topMenuHeight+1;
//   $('html, body').stop().animate({ 
//       scrollTop: offsetTop
//   }, 850);
//   e.preventDefault();
// });

// Bind to scroll
$(window).scroll(function(){
   // Get container scroll position
   var fromTop = $(this).scrollTop()+100;
   
   // Get id of current scroll item
   var cur = scrollItems.map(function(){
     if ($(this).offset().top < fromTop)
       return this;
   });

   // Get the id of the current element
   cur = cur[cur.length-1];
   var id = cur && cur.length ? cur[0].id : "";
   
   if (lastId !== id) {
       lastId = id;
      
      $('.section-nav-link').removeClass('active');
        l = "a[href*=" + id + "]";
       $(l).addClass('active');

   }                   
});

      //\ homepage


      // form

      if ($('.ccm-dashboard-express-form').length == 1){ // als we op een pagina met een form zijn

      t = qs('msg');
   
      $(".ccm-dashboard-express-form textarea").val(t);

            function qs(key) { // haalt querystring op
                key = key.replace(/[*+?^$.\[\]{}()|\\\/]/g, "\\$&"); // escape RegEx meta chars
                var match = location.search.match(new RegExp("[?&]"+key+"=([^&]+)(&|$)"));
                return match && decodeURIComponent(match[1].replace(/\+/g, " "));
            }
      }

      //\ form

// team info
      $( ".team-member" ).hover(
        function() {
          t =$( this ).find( ".beschrijving" ).html();
            $('.team-information').html(t);

            $( ".naam h3" ).css('border-bottom', 'solid 1px transparent');
            $( this ).find( ".naam h3" ).css('border-bottom', 'solid 1px #fff');
        }, function() {
            //$('.team-information').html("");
        }
      );

});