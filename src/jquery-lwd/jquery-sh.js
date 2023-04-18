$(document).ready(function() {
  var containerWidth = $('#desktop').width();
  var maxContainerWidth = 1800;
  var minContainerWidth = 400;
  var maxScale = 100;
  var minScale = 50;

  var leftPos = 20;
  var topPos = 20;

  var gapWidth = 180 * (maxScale / 100);
  var scale = (((containerWidth - gapWidth) / (maxContainerWidth - gapWidth)) * (maxScale - minScale)) + minScale;

  // Function to set the button positions and hotspots
  function setButtonPositions() {
    $('.openbutton').each(function() {
      var $button = $(this).find('button');
      var buttonWidth = $button.outerWidth() * (scale / 100);
      var buttonHeight = $button.outerHeight() * (scale / 100);
  
      $(this).css('left', leftPos + 'px');
      $(this).css('top', topPos + 'px');
      $(this).css('width', buttonWidth + 'px');
      $(this).css('height', buttonHeight + 'px');
      $(this).find('button').css('transform', 'scale(' + (scale / 100) + ')');
  
      // Increment the left position for the next button
      leftPos += 130 * (scale / 100);
  
      // Set the top and left position for the next row of buttons
      if (leftPos > 330 * (scale / 100)) {
        topPos += 170 * (scale / 100);
        leftPos = 20;
      }
    });
  }

  // Call the function to set the initial button positions
  setButtonPositions();

  // Add a window resize event listener
  $(window).on('resize', function() {
    containerWidth = $('#desktop').width();
    scale = (((containerWidth - gapWidth) / (maxContainerWidth - gapWidth)) * (maxScale - minScale)) + minScale;

    // Reset the button positions and hotspots
    leftPos = 20;
    topPos = 20;
    setButtonPositions();
  });
});
