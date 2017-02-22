
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

// "&maxResults=40&startIndex=100"

$('#buttonAuthor').click(function(){
  let authorInput = $('#bookAuthor').val();
  var $query = $.get('https://www.googleapis.com/books/v1/volumes?q=author:' + authorInput);
  $query.done((data) => {
    if($query.status !== 200){
      return;
    }``
    console.log(data);
    display(data);
  })
})

// $('#buttonAuthor').click(function(){
//   let authorInput = $('#bookAuthor').val();
//   var $query = $.get('https://www.googleapis.com/books/v1/volumes?q=author:' + authorInput);
//   $query.done((data) => {
//     if($query.status !== 200){
//       return;
//     }``
//     console.log(data);
//     display(data);
//   })
// })

function display(search) {
  $('#bookDisplay').empty();
  let result = search.items;
  for(let i=0; i< result.length; i++){
    let bookInfo = result[i].volumeInfo;
    let bookPic = bookInfo.imageLinks.thumbnail;
    let bookDesc = bookInfo.description
    if (bookDesc === undefined) {
      bookDesc = "NA"
    }else if (bookDesc.length > 200){
      bookDesc = bookDesc.substring(0,200) +"..."
    }


    $('#bookDisplay').append("<div class='bookBox'><div class='infoBox'><img class='bookCover' src=" +bookPic+ "><div class ='bookInfoBox'><p class='titleFont'>Title: "+bookInfo.title+ "</p><p class='authorFont'> Author: " +bookInfo.authors+ "</p><p>Average Rating: " +bookInfo.averageRating+"</p></div></div><p>description:</p><p class='descript'>" +bookDesc+ "</p></div>");

  }

}
