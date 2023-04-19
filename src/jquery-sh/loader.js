//Loading screen
$(window).on('load', function () {
  // Set the minimum display time (in milliseconds)
  var minDisplayTime = 4000; // 4 seconds

  // Get the current time
  var startTime = new Date().getTime();

  // Custom function to handle the fade-out of the loading screen
  function hideLoadingScreen() {
    var currentTime = new Date().getTime();
    var elapsedTime = currentTime - startTime;

    if (elapsedTime >= minDisplayTime) {
      // If the minimum display time has passed, fade out the loading screen
      $('#loading-container').fadeOut('slow');
    } else {
      // If the minimum display time has not passed, wait for the remaining time and then fade out the loading screen
      setTimeout(hideLoadingScreen, minDisplayTime - elapsedTime);
    }
  }

  // Call the custom function to hide the loading screen
  hideLoadingScreen();
});


//Loading function
$(document).ready(function () {
  var scriptsToLoad = [
    '../lib/jquery-ui/jquery-ui.min.js',
    '../src/jquery-lwd/jquery-lwd.js',
    '../src/jquery-sh/jquery-sh.js',
    'https://cdnjs.cloudflare.com/ajax/libs/p5.js/1.4.1/p5.js',
    'https://cdnjs.cloudflare.com/ajax/libs/p5.js/1.4.1/addons/p5.sound.min.js',
  ];
  var loadedScripts = 0;

  function updateLoadingBar() {
    var progress = (loadedScripts / scriptsToLoad.length) * 100;
    $('#loading-bar').css('width', progress + '%');
  }

  function onScriptLoaded() {
    loadedScripts++;
    updateLoadingBar();

    if (loadedScripts === scriptsToLoad.length) {
      // All scripts are loaded, hide the loading screen
      $('#loading-screen').fadeOut();
    }
  }

  function loadScripts() {
    for (var i = 0; i < scriptsToLoad.length; i++) {
      $.getScript(scriptsToLoad[i], onScriptLoaded);
    }
  }

  // Load scripts and update the loading bar
  loadScripts();
});



//Loading text styling
document.addEventListener('DOMContentLoaded', function (event) {
  // Array with texts to Type
  var dataText = ["Loading...", "Welcome :)", "My name is Sophia", "artist and designer", "     ", "Thank you for being so patient!", "Loading...", "Loading...", "Loading...", "Loading..."];

  // Cycle through text array
  function typeWriter(text, i, fnCallback) {
    if (i < (text.length)) {
      document.getElementById("loading-bar-text").innerHTML = text.substring(0, i + 1) + '<span aria-hidden="true"></span>';

      // Wait then call the function again for next character of the text
      setTimeout(function () {
        typeWriter(text, i + 1, fnCallback)
      }, 150); // this value sets the type speed
    }
    // Once text is finished, call callback if there is a callback function
    else if (typeof fnCallback == 'function') {
      // call callback after timeout
      setTimeout(fnCallback, 700);
    }
  }
  // Start a typewriter animation for a text in the dataText array
  function StartTextAnimation(i) {
    if (typeof dataText[i] == 'undefined') {
      setTimeout(function () {
        StartTextAnimation(0);
      }, 0); //0 seconds -- Value sets how long after the sequence has finished to reloop the text array
    }
    // check if dataText[i] exists
    if (i < dataText[i].length) {
      // text exists! start typewriter animation
      typeWriter(dataText[i], 0, function () {
        // after callback (and whole text has been animated), start next text
        StartTextAnimation(i + 1);
      });
    }
  }
  // start the text animation
  StartTextAnimation(0);
});
