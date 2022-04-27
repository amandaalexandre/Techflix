let slider = tns({
    container: '.my-list',
    items: 1,
    slideBy: 'page',
    mouseDrag: 'mouseDrag',
    autoplay: false,
    controlsContainer: '#controls-my-list',
    prevButton: '.previous',
    nextButton: '.next',
    responsive: {
        800: {
          items: 3
        },
        1000: {
          items: 6
        }
      }
  });