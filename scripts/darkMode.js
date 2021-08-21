let stataTheme = true

function darkmode() {
  if (stataTheme) {
    $(function () {
      $('body').removeClass('StataTheme')
      $('body').addClass('dark')
      $('#navbar').removeClass('navMenuColors')
      $('#navbar').addClass('navMenuColorsDarkTheme')
      $('.main-section').css({"border-left":"50px ridge silver"})
      $('.main-section').css({"border-bottom":"50px ridge silver"})
      $('.main-section').css({"border-right":"50px ridge silver"})
      $('.main-section').css({"border-top-right":"50px ridge silver"})
      $('.main-section').css({"border-top-left":"50px ridge silver"})
      $('#insGuide').css({"color":"silver"})
      $('#licenciaDeUsuario').css({"color":"silver"})   
      $('#HideMenuButton').css({"color":"black"})   
      $('#HideMenuButton').css({"background":"silver"})   
      $('#dark-mode').css({"background":"silver"})   
    })
    stataTheme = !stataTheme
  } else {
    $(function () {
      $('body').removeClass('dark')
      $('body').addClass('StataTheme')
      $('#navbar').removeClass('navMenuColorsDarkTheme')
      $('#navbar').addClass('navMenuColors')     
      $('.main-section').css({"border-left":"50px ridge #172bb9"})
      $('.main-section').css({"border-bottom":"50px ridge #172bb9"})
      $('.main-section').css({"border-right":"50px ridge #172bb9"})
      $('.main-section').css({"border-top-right":"50px ridge #172bb9"})
      $('.main-section').css({"border-top-left":"50px ridge #172bb9"})
      $('#insGuide').css({"color":"black"})
      $('#licenciaDeUsuario').css({"color":"black"})
      $('#HideMenuButton').css({"color":"black"})   
      $('#dark-mode').css({"color":"black"})
      $('#HideMenuButton').css({"border":"black"})   
      $('#dark-mode').css({"border":"black"})
      $('#HideMenuButton').css({"background":"transparent"})   
      $('#dark-mode').css({"background":"transparent"}) 
      $('#HideMenuButton').css({"border":"1.5px solid gray"})   
      $('#dark-mode').css({"border":"1.5px solid gray"}) 
    })
    stataTheme = !stataTheme
  }
}
  
// border-left: 50px ridge $primaryBorder;
//   border-bottom: 50px ridge $primaryBorder;
//   border-right: 50px ridge $primaryBorder;
//   border-top-right-radius: 150px 150px;
//   border-top-left-radius: 150px 150px;
