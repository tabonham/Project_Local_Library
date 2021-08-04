function findAuthorById(authors, id) {
  return authors.find(author => author.id === id);
}
//correct
function findBookById(books, id) {
  return books.find(book => book.id === id);
}
//correct
function partitionBooksByBorrowedStatus(books) {
  return books.reduce((acc, book) => {
    const [borrowed, returned] = acc;
    if(book.borrows[0].returned === false) {
      borrowed.push(book);
    } else {
      returned.push(book);
    }
    return acc;
  },[[],[]]);
}
//correct
function getBorrowersForBook(book, accounts) {
  let result = [];
  let {borrows} = book;
  borrows.forEach(borrow => {
    let account = accounts.find(acc => acc.id === borrow.id);
    account['returned'] = borrow.returned;
    result.push(account);
  })
  return result.slice(0, 10);
}
//correct
module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
