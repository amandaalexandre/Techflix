let slider = tns({
    container: '.my-list',
    items: 4,
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

  let top10 = tns({
    container: '.top-10',
    items: 3,
    slideBy: 'page',
    mouseDrag: 'mouseDrag',
    autoplay: false,
    autoWidth: true,
    loop: false,
    rewind: true,
    gutter: 10,
    controlsContainer: '#controls-top-10',
    prevButton: '#previous-top-10',
    nextButton: '#next-top-10',
    responsive: {
        800: {
          items: 3
        },
        1000: {
          items: 6
        }
      }
  });

let movies = tns({
    container: '.movies',
    items: 4,
    slideBy: 'page',
    mouseDrag: 'mouseDrag',
    autoplay: false,
    controlsContainer: '#controls-movies',
    prevButton: '#previous-movies',
    nextButton: '#next-movies',
    responsive: {
        800: {
          items: 3
        },
        1000: {
          items: 6
        }
      }
  });

  let series = tns({
    container: '.series',
    items: 4,
    slideBy: 'page',
    mouseDrag: 'mouseDrag',
    autoplay: false,
    controlsContainer: '#controls-series',
    prevButton: '#previous-series',
    nextButton: '#next-series',
    responsive: {
        800: {
          items: 3
        },
        1000: {
          items: 6
        }
      }
  });
