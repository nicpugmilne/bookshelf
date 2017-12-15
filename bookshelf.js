var books = [
  {name: "Harry Potter and the Philosopher's Stone",
    isbn: '9780590353427'},
  {name: 'Harry Potter and the Chamber of Secrets',
    isbn: '9780439064873'},
  {name: 'Harry Potter and the Prisoner of Azkaban',
    isbn: '9780439136365'},
  {name: 'Harry Potter and the Goblet of Fire',
    isbn: '9780439139601'},
  {name: 'Harry Potter and the Order of the Phoenix',
    isbn: '9780439358071'},
  {name: 'Harry Potter and the Half-Blood Prince',
    isbn: '9780439785969'},
  {name: 'Harry Potter and the Deathly Hallows',
    isbn: '9780545139700'}
]

$( document ).ready(function() {
  for (var i = 0; i < books.length; i++) {
    var book = books[i]
    var left = 40 * i
    console.log(book.name);
    $('.bookshelf').append('<li data-id='+book.isbn +' class="book" style="left:' + left + 'px">' + book.name + '</li>')
  // $('.bookshelf').append('<img src="" id="bookPreview">')
  }

  $( ".book" ).click(function() {
  console.log($(this));

var bookCover =
   $.ajax({
        url: "http://covers.openlibrary.org/b/isbn/"+$(this).attr('data-id')+"-S.jpg",
        type: "GET",
        crossDomain: true,
        dataType: "jsonp",
        error: function(err, status, xhr){
          console.log(err.redirectUrl)
        },
        complete: function(response, status, xhr) {
          // $('#bookPreview').attr("src", response.message)
          console.log(response)
        }
  });
});
});

//
// http://covers.openlibrary.org/b/$key/$value-L.jpg
