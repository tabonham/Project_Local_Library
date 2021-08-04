function getTotalBooksCount(books) {
  return books.length;
}
//correct
function getTotalAccountsCount(accounts) {
  return accounts.length;
}
//correct
function getBooksBorrowedCount(books) {
return books.reduce((acc, book) => {
  let booksBorrowed = book.borrows[0].returned;
  if(booksBorrowed === false) {
    acc+=1;
  }
  return acc;
},0);
}
//correct
function _sortObjectByValues(obj){
  const keys = Object.keys(obj);
  return keys.sort((keyA, keyB)=>{
      if(obj[keyA]> obj[keyB]){
          return -1;
      } else if(obj[keyB]> obj[keyA]){
          return 1;
      }
      return 0;
  })
}
function getMostCommonGenres(books) {
  let countObj = books.reduce((acc, {genre})=>{
    if(acc[genre]){
        acc[genre]+=1;
    } else{
        acc[genre]=1;
    }
    return acc;
}, {});
let sortedKeys =  _sortObjectByValues(countObj);
return sortedKeys.map((key)=> ({ name:key, count:countObj[key]})).slice(0, 5)
}
//correct
function getMostPopularBooks(books) {
const popularBooks = books.map(({title, borrows}) => ({name: title, count: borrows.length, }));
return popularBooks.sort((bookA, bookB) => bookB.count - bookA.count).slice(0, 5);
};

function getMostPopularAuthors(books, authors){
 return authors.reduce((acc, {id, name: {first, last}}) => {
   const name = `${first} ${last}`;
   let count = 0;
   const bookAuthors = books.forEach((book) => {
     if (book.authorId === id) {
       count += book.borrows.length;
     }
   });
   acc.push({name, count});
   return acc.sort((authorA, authorB) => authorB.count - authorA.count).slice(0, 5);
 }, []);
}

module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
