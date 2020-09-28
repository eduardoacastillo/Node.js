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
    
   
    getBookById(id, callback) 
      return new Promise((resolve,reject) => {
      const book = booksDb.find(book =>book.id === id);
          if (!book) {
            const error = new Error();
            error.message = "Book not found!";
            reject(error);
         }
         resolve(book);
      });
   

   getAuthorById(id) 
      return new Promise((resolve,reject) => {
      const author = booksDb.find(author =>author.id === id);
         if (!author) {
            const error = new Error();
            error.message = "Author not found!";
            reject(error);
         }
         resolve(author);
      });
   

   getBookById(10) 
      .then(book => {
      return getAuthorById(book.id);
   })
      .then(author => {
      console.log(author);
   })
      .catch(error => {
      console.log(error.message);
   });
