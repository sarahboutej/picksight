
  let _rating = 0; // [0..5]
  const setRating = num => {
    _rating = num;
  };

  // For example: out of 5 existing reviews, the average is 3.2
  let avg = 3.2;
  let count = 5.0;

  // Round a floating point number to n decimal places.
  const rounded = (f, n = 2) => {
    let i = 0;
    if (n > 0) {
      i = Math.round(f * Math.pow(10, n));
      return i / Math.pow(10, n);
    }
    return f;
  };

/*   const getAvg = () => {
    if (avg + _rating) {
      if (_rating === 0) return 1.0 * avg;
      if (avg === 0) return 1.0 * _rating;
      return rounded((count * avg + 1.0 * _rating) / (1 + count));
    }
    return "(unrated)";
  };
  const getRate = () => {
    if (_rating) {
      return _rating * 1.0;
    }
    return "(unrated)";
  }; */

 /*  const updateDOM = () => {
    //document.querySelector('span.avg').innerHTML = getAvg();
    document.querySelector('span.rate').innerHTML = getRate();
  }; */

/*   $(function () {// onload
    updateDOM();
  }); */

  const stars = document.querySelectorAll('.star');

  $('.star').on('click', function (e) {
    stars.forEach((star, i) => {
      if (star === e.currentTarget) {
        setRating(i + 1);
        // $('#game_rating').addClass('rated');
        if ($('.star.rated').length) {
          $('.star.rated').removeClass('rated');
        }
        e.currentTarget.classList.add('rated');
        $('.stars').addClass('rated');
        updateDOM();
      }
    });
  });


  $('#clear').click(function () {
    setRating(0);
    $('.rated').removeClass('rated');
    updateDOM();
  });