$(document).ready(function() {
  var containerWidth = $('#desktop').width();
  var maxContainerWidth = 7680;
  var minContainerWidth = 640; //unused variable
  var maxScale = 100;
  var minScale = 50;

  var leftPos = 20;
  var topPos = 20;

  var gapWidth = 180 * (maxScale / 100);
  var scale = (((containerWidth - gapWidth) / (maxContainerWidth - gapWidth)) * (maxScale - minScale)) + minScale;


  // Set the button positions
  function setButtonPositions() {
    var scaleValue;
    if (containerWidth <= 360) {
      scaleValue = scale / 90;
    }else if (containerWidth <= 480) {
      scaleValue = scale / 60;
    } else if (containerWidth >= 1600) {
      scaleValue = scale / 50;
    } else {
      scaleValue = scale / 100;
    }
  
    $('.openbutton').each(function () {
      var $button = $(this).find('button');
      var buttonWidth = $button.outerWidth() * scaleValue;
      var buttonHeight = $button.outerHeight() * scaleValue;
  
      $(this).css('left', leftPos + 'px');
      $(this).css('top', topPos + 'px');
      $(this).css('width', buttonWidth + 'px');
      $(this).css('height', buttonHeight + 'px');
      $(this).find('button').css('transform', 'scale(' + scaleValue + ')');
  
      // Increment the left position for the next button
      leftPos += 130 * scaleValue;
  
      // Set the top and left position for the next row of buttons
      if (leftPos > 330 * scaleValue) {
        topPos += 170 * scaleValue;
        leftPos = 20;
      }
    });
  }
  
  // Call the function to set the initial button positions
  setButtonPositions();

  function updateLayout() {
    containerWidth = $('#desktop').width();
    scale = (((containerWidth - gapWidth) / (maxContainerWidth - gapWidth)) * (maxScale - minScale)) + minScale;

    // Reset the button positions
    leftPos = 20;
    topPos = 20;
    setButtonPositions();
  }

  // Call the function to set the initial layout
  updateLayout();

  // Add a window resize event listener
  $(window).on('resize', function() {
    containerWidth = $('#desktop').width();
    scale = (((containerWidth - gapWidth) / (maxContainerWidth - gapWidth)) * (maxScale - minScale)) + minScale;

    // Reset the button positions and hotspots
    leftPos = 20;
    topPos = 20;
    setButtonPositions();
    updateLayout();
  });
});
