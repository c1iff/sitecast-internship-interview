function addForm() {
  $('.add-form').hide()
  $('.comment-form').show()
}

function postComment() {
  var currentDate = new Date();
  var day = currentDate.getDate();
  var month = currentDate.getMonth() + 1;
  var year = currentDate.getFullYear();
  $('.btn').show();
  var userName = $('#user-name').val();
  var commentText = $('#comment-text').val();
  $('.comments').prepend('<p>' + userName + '</p>' + '<blockquote>' + commentText + '</blockquote>' + '<p class="pull-right">' + day + "/" + month + "/" + year + '</p><br><hr>');
  $('.comment-form').hide();
}
