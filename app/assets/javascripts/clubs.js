$(function() {
  $(".choose").click(function(event) {
    event.preventDefault();
    var button = $(this);
    var clubDiv = button.parents('.club');

    var formTag = button.parent('form');
    var url = formTag.attr('action');
    var type = formTag.attr('method');

    $.ajax(url, {
      type: type,
      success: function (data) {
        clubDiv.toggleClass('chosen');
      }
    });
  });
});
