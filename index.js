const booksDb = [
{
    id:1, 
    title: 'clean code'
},

{

     id: 2,
     title: 'the pragmatic programmer'
},
   {
     id: 3,
     title: 'web development node.js'

   }
];
   function getBookById( id, callback) {
       const book = booksDb.find(book =>book.id===id);
    if (!book){
       const error = new Error();
       error.message = "The book not found"
       return callback(error);  
   }
   callback(null , book);
}

getBookById(3, (err, book) => {
     if(err) {
       return console.log(err.message);
   }
   return console.log(book);
});
