let slider = tns({
    container: '.my-list',
    items: 6,
    slideBy: 'page',
    mouseDrag: 'mouseDrag',
    autoplay: false,
    gutter: 10,
    controlsContainer: '#controls-my-list',
    prevButton: '.previous',
    nextButton: '.next',
    responsive: {
        400: {
          items: 3
        },
        800: {
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
          items: 2
        },
        1000: {
          items: 3
        }
      }
  });

let movies = tns({
    container: '.movies',
    items: 6,
    slideBy: 'page',
    mouseDrag: 'mouseDrag',
    autoplay: false,
    gutter: 10,
    controlsContainer: '#controls-movies',
    prevButton: '#previous-movies',
    nextButton: '#next-movies',
    responsive: {
        400: {
          items: 3
        },
        800: {
          items: 6
        }
      }
  });

  let series = tns({
    container: '.series',
    items: 6,
    slideBy: 'page',
    mouseDrag: 'mouseDrag',
    autoplay: false,
    gutter: 10,
    controlsContainer: '#controls-series',
    prevButton: '#previous-series',
    nextButton: '#next-series',
    responsive: {
        400: {
          items: 3
        },
        800: {
          items: 6
        }
      }
  });
