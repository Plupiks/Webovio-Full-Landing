const quote = $('.quote')
const featuresImg = $('.features-block__image')
const windowWidth = $('window').width()
const mediaQuery = window.matchMedia('(max-width: 1200px)')

if (quote.hasClass('quote-disable')) {
  featuresImg.on('click', function(){
    quote.css({'position':'absolute', 'top':'x', 'left':'y'}).toggleClass('quote-active');
  });
}

function clickPos() {
  featuresImg.on('click', function(e){
    e.stopPropagation();
    x = e.pageX;
    y = e.pageY
  })
}




