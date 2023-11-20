
function checkViewport() {
  if (window.matchMedia("(max-width: 375px)").matches) {
      console.log("M view")
      document.getElementById("burgermenu").style.display='flex'
      document.getElementById("navclose").style.display='none'
      document.getElementById("navbaranchors").style.display='none'
    
      var menuicon = document.getElementById("burgermenu")
      var closeicon = document.getElementById("navclose")
      var navbar = document.getElementById("navbaranchors")
      var navbarcontainer=document.getElementById("navbar")
      function shownavbar() {
         navbar.style.display = 'flex'
         closeicon.style.display = 'flex'
         navbarcontainer.style.width='100%'
         navbarcontainer.style.height='100%'
         navbarcontainer.style.flexDirection='column'
         navbarcontainer.style.justifyContent='space-around'
         navbarcontainer.style.paddingLeft='10px'
         navbarcontainer.style.alignItems='start'
         menuicon.style.display='none'
         document.getElementById("blackbox").style.display = 'block'
  }
  menuicon.onclick=shownavbar
  function hidenavbar() {
    navbar.style.display = 'none'
    closeicon.style.display = 'none'
    navbarcontainer.style.width='90%'
    navbarcontainer.style.height='25%'
    navbarcontainer.style.flexDirection='row'
    navbarcontainer.style.columnGap='20px'
    navbarcontainer.style.justifyContent='space-between'
    navbarcontainer.style.paddingLeft='unset'
    navbarcontainer.style.alignItems='center'
    menuicon.style.display='flex'
    document.getElementById("blackbox").style.display = 'none'

  }
  closeicon.onclick=hidenavbar
  } else {
      console.log("D view");
      //
      document.getElementById("burgermenu").style.display='none'
      document.getElementById("navclose").style.display='none'
      document.getElementById("navbaranchors").style.display='flex'
      document.getElementById("navbar").style.flexDirection='row'
    
      ///changing the opacity of cards on hover//////////////////
      var gridImages = document.getElementsByClassName("cardimg");
      // Check if there are elements with the class "cardimg"
      if (gridImages.length === 0) {
          console.log("No elements with the class 'cardimg' found.");
          return;
      }

      function changeOpacity(index) {
          gridImages[index].style.opacity = '0.5';
      }

      function resetOpacity(index) {
          gridImages[index].style.opacity = '1.0';
      }

      for (var i = 0; i < gridImages.length; i++) {
          gridImages[i].addEventListener('mouseenter', (function (index) {
              return function () {
                  changeOpacity(index);
              };
          })(i));

          gridImages[i].addEventListener('mouseleave', (function (index) {
              return function () {
                  resetOpacity(index);
              };
          })(i));
      }
      ///////////changing the background color of see all button on hover//////
      var seeallbtn=document.getElementById("creatwseeallanc")
      seeallbtn.addEventListener('mouseenter', (function () {
        return function () {
            seeallbtn.style.color="white"
            seeallbtn.style.backgroundColor="black"
        };
    })(i));

      seeallbtn.addEventListener('mouseleave', (function () {
        return function () {
          seeallbtn.style.color="black"
            seeallbtn.style.backgroundColor="white"
        };
    })(i));
  }
}

// Run checkViewport initially and whenever the window is resized
checkViewport();
window.addEventListener('resize', checkViewport);

