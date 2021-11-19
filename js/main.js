const quote = $('.quote')
const featuresImg = $('.features-block__image')
var windowWidth = $('window').width()
const buttonClose = $('.far')
const mediaQuery = window.matchMedia('(max-width: 1024px)')

function removeQuote() {
  quote.removeClass('quote-active');
}

function addQuote() {
 $('.features-block__image').click(function(e) {
    e.stopPropagation();
    if ($(window).width() > 992) {
      var xClick = e.pageX - $(this).offset().left;
      var yClick = e.pageY - $(this).offset().top;
      $(this).next('.fetures-block__quote').css({
        "top": yClick,
        "left": xClick
      }).toggleClass('quote-active');
    } else  if($(window).width() <= 992) {
      $(this).next('.fetures-block__quote').toggleClass('quote-active')
    }
  })
}

$(window).on('load resize', addQuote())




buttonClose.on('click', function(){
  removeQuote();
})

$(window).click(function(e){
  if (quote.hasClass('quote-active')) {
    removeQuote();
  };
});

$(window).resize(function(){
  removeQuote();
})

quote.click(function(e){
  e.stopPropagation();
})



