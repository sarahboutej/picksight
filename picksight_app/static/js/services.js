var idItemToBookmark = "";
var itemToRemove = "";
var idItemToDelete = "";


function showSnackBar(text) {
  $("#snackbar").text(text);
  $("#snackbar").addClass("show");
  setTimeout(function () {
    $("#snackbar").removeClass("show");
  }, 2000);
};

function triggerBookmarkAction(itemToBookmark) {
  if (itemToBookmark.hasClass("fill")) {
    itemToBookmark.html("<svg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='currentColor' class='bi bi-star' viewBox='0 0 16 16'><path d='M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z'/></svg>");
    itemToBookmark.removeClass("fill").addClass("empty");
    showSnackBar("The image has beed removed from favorite succsefully!");
  } else {
    itemToBookmark.html("<svg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='currentColor' class='bi bi-star-fill' viewBox='0 0 16 16'><path d='M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z'/></svg>")
    itemToBookmark.removeClass("empty").addClass("fill");
    showSnackBar("The image has beed added to favorite succsefully!");
  }
}

$(".delete-button").click(function () {
  window.idItemToDelete = $(this).parent().parent().attr('id').split('-')[1];
});

$(".bookmark-button").click(function () {
  bookmark($(this).attr('id').split('-')[1])
});
function bookmark(itemId){
  console.log(itemId)
  let item = $('#'+itemId)
  if (item.attr('starred') == 'true')
    item.attr('starred', 'false')
  else
    item.attr('starred', 'false')

  $.ajax({
    url: 'http://localhost:8003/static/data/validation.json',
    type: 'POST',
    success: function () {
      setTimeout(function () {
        triggerBookmarkAction($('#star-'+itemId));
      }, 500);
    }
  });
}
$("#delete-modal").click(function () {
  itemToRemove = $("#item-" + window.idItemToDelete);
  console.log('aaa')
  console.log(itemToRemove)
  console.log(window.idItemToDelete)
  $.ajax({
    url: 'http://localhost:8003/static/data/validation.json',
    type: 'DELETE',
    success: function () {
      setTimeout(function () {
        window.itemToRemove.remove();
      }, 1000);
    }
  });
});

$(document).ready(function () {
  setTimeout(() => {
    $('.photo-option').removeClass("md:invisible").addClass("flex").addClass("md:visible");
  }, 1000);

  var timer, delay = 800;
  $("#senderName").on("input", function () {
    var senderName = $(this).val().toLowerCase();
    clearTimeout(timer);
    timer = setTimeout(function () {
      $(".gellery-item").each(function () {
        var value = $(this).val().toLowerCase();;
        if (!value.includes(senderName) && senderName.trim() !== '') {
          $(this).parent().addClass('hidden');
        } else {
          $(this).parent().removeClass('hidden');
        }
      });
    }, delay);
  });

});

