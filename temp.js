
document.getElementById("JStest").innerText = 'JS connected';


$('#buttonTitle').click(function(){
  let titleInput = $('#bookTitle').val();
  var $query = $.get('https://www.googleapis.com/books/v1/volumes?q=title:' + titleInput);
  $query.done((data) => {
    if($query.status !== 200){
      return;
    }
    console.log(data);
    display(data);
  })
})

function display(search) {
  $('#bookDisplay').empty();
  let result = search.items;
  for(let i=0; i< result.length; i++){
    let bookInfo = result[i].volumeInfo;
    let bookPic = bookInfo.imageLinks.thumbnail;
    $('#bookDisplay').append("<div class='bookBox'>");
    $('#bookDisplay').append("<img src=" +bookPic+ ">");
    $('#bookDisplay').append("<p>" +bookInfo.title+ "</p>");
    $('#bookDisplay').append("<p>" +bookInfo.authors+ "</p>");
    $('#bookDisplay').append("</div>");

  }

}
