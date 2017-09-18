---
layout: null
sitemap:
  exclude: 'yes'
---

$(document).ready(function () {
  $('a.nav-button').click(function (e) {
    console.log("button clicked")
    // if (!$('.panel-cover').hasClass('panel-cover--collapsed')) {
    //   $('.panel-cover').addClass('panel-cover--collapsed')
    // }
    // currentWidth = $('.panel-cover').width()
    // if (currentWidth < 960) {
    //   $('.panel-cover').addClass('panel-cover--collapsed')
    //   $('.content-wrapper').addClass('animated slideInRight')
    // } else {
    //   $('.panel-cover').css('max-width', currentWidth)
    //   $('.panel-cover').animate({'max-width': '530px', 'width': '40%'}, 400, swing = 'swing', function () {})
    // }
  })

  if (window.location.hash && window.location.hash == '#blog') {
    $('.panel-cover').addClass('panel-cover--collapsed')
  }

  if (window.location.pathname !== '{{ site.baseurl }}/' && window.location.pathname !== '{{ site.baseurl }}/index.html') {
    //$('.panel-cover').addClass('panel-cover--collapsed')
    console.log($('.panel-cover'))
    console.log($('.panel-cover').hasClass('panel-cover--collapsed'))
    if (document.referrer.split("/")[3] != "") {
      $('.panel-cover').addClass('panel-cover--collapsed')
      renderContent();
      return
    }
    currentWidth = $('.panel-cover').width()
    if (currentWidth < 960) {
      $('.panel-cover').addClass('panel-cover--collapsed')
      $('.content-wrapper').addClass('animated slideInRight')
      renderContent();
    } else {
      $('.panel-cover').addClass('panel-cover--collapsed')
      $('.panel-cover').css('max-width', currentWidth)
      $('.panel-cover').animate({'max-width': '530px', 'width': '40%'}, 700, swing = 'swing', function () {
        renderContent();
      })
    }
  }

  $('.btn-mobile-menu').click(function () {
    $('.navigation-wrapper').toggleClass('visible animated bounceInDown')
    $('.btn-mobile-menu__icon').toggleClass('icon-list icon-x-circle animated fadeIn')
  })

  $('.navigation-wrapper .nav-button').click(function () {
    $('.navigation-wrapper').toggleClass('visible')
    $('.btn-mobile-menu__icon').toggleClass('icon-list icon-x-circle animated fadeIn')
  })

})

function renderContent(){
  document.getElementById('content').style.display = 'inherit';
}
