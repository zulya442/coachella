function getTimeRemaining(endtime) {
  var t = Date.parse(endtime) - Date.parse(new Date());
  var seconds = Math.floor((t / 1000) % 60);
  var minutes = Math.floor((t / 1000 / 60) % 60);
  var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
  var days = Math.floor(t / (1000 * 60 * 60 * 24));
  return {
    'total': t,
    'days': days,
    'hours': hours,
    'minutes': minutes,
    'seconds': seconds
  };
}

function initializeClock(id, endtime) {
  var clock = document.getElementById(id);
  var daysSpan = clock.querySelector('.days');
  var hoursSpan = clock.querySelector('.hours');
  var minutesSpan = clock.querySelector('.minutes');
  var secondsSpan = clock.querySelector('.seconds');

  function updateClock() {
    var t = getTimeRemaining(endtime);

    daysSpan.innerHTML = t.days;
    hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
    minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
    secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);

    if (t.total <= 0) {
      clearInterval(timeinterval);
    }
  }

  updateClock();
  var timeinterval = setInterval(updateClock, 1000);
}

var deadline = new Date(Date.parse(new Date()) + 15 * 24 * 60 * 60 * 1000);
initializeClock('clockdiv', deadline);

//anchor link js
$(document).ready(function() {
    $('#fullpage').fullpage({
        //Navigation
        menu: '#menu',
        lockAnchors: false,
        anchors:['firstPage', 'secondPage'],
        navigation: false,
        navigationPosition: 'right',
        navigationTooltips: ['firstSlide', 'secondSlide'],
        showActiveTooltip: false,
        slidesNavigation: true,
        slidesNavPosition: 'bottom',

        //Scrolling
        css3: true,
        scrollingSpeed: 700,
        autoScrolling: true,
        fitToSection: true,
        fitToSectionDelay: 1000,
        scrollBar: false,
        easing: 'easeInOutCubic',
        easingcss3: 'ease',
        loopBottom: false,
        loopTop: false,
        loopHorizontal: true,
        continuousVertical: false,
        normalScrollElements: '#element1, .element2',
        scrollOverflow: false,
        scrollOverflowOptions: null,
        touchSensitivity: 15,
        normalScrollElementTouchThreshold: 5,

        //Accessibility
        keyboardScrolling: true,
        animateAnchor: true,
        recordHistory: true,

        //Design
        controlArrows: true,
        verticalCentered: true,
        sectionsColor : ['#ccc', '#fff'],
        paddingTop: '3em',
        paddingBottom: '10px',
        fixedElements: '#header, .footer',
        responsiveWidth: 0,
        responsiveHeight: 0,

        //Custom selectors
        sectionSelector: '.section',
        slideSelector: '.slide',

        //events
        onLeave: function(index, nextIndex, direction){},
        afterLoad: function(anchorLink, index){
              var loadedSection = $(this);

              //using anchorLink
              if(anchorLink == 'secondPage'){
                  $(".signup-container").addClass("signup-active");
              }
          
        },
        afterRender: function(){
          $('video').get(0).play();
          $('audio').get(0).play();
        },
        afterResize: function(){},
        afterSlideLoad: function(anchorLink, index, slideAnchor, slideIndex){},
        onSlideLeave: function(anchorLink, index, slideIndex, direction, nextSlideIndex){}
    });
});

function modalInit(){
    $('#submitModal').on("click",function() {
        var value = $('#contactname').val();
        var email = $('#email').val();
        var text = document.getElementById('modalText');
        if (!value || !email){
          text.innerHTML = 'Please fill in your details';
        } else {
          text.innerHTML = 'Thanks! We will be in touch soon';
        }
       
      });

  };


modalInit();

function arrowMover(){
  $(".music-info").hover(function(){
    $(".music-arrow").toggleClass("arrow-mover");
  });
  $(".art-info").hover(function(){
    $(".art-arrow").toggleClass("arrow-mover");
  });
  $(".where-info").hover(function(){
    $(".where-arrow").toggleClass("arrow-mover");
  });
}

arrowMover();

//Annabel's code
  var audio = document.getElementById('background_audio');

  document.getElementById('mute').addEventListener('click', function (e)
  {
    e = e || window.event;
      audio.muted = !audio.muted; 
      e.preventDefault();
    }, false);

  document.getElementById('unmute').addEventListener('click', function (e)
  {
    e = e || window.event;
      audio.muted = !audio.muted; 
      e.preventDefault();
    }, false);

  $(document).ready(function(){
  
  $( "#mute" ).click(function(){
  $("#mute").hide();
  $("#unmute").show();
  });

  $( "#unmute" ).click(function(){
  $("#unmute").hide();
  $("#mute").show();
  });
});
// * annabels code ends
   