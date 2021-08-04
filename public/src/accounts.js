function findAccountById(accounts, id) {
  return accounts.find(account => account.id === id);
}
//correct
function sortAccountsByLastName(accounts) {
  accounts.sort((accountsA, accountsB) => (accountsA.name.last < accountsB.name.last ? -1 : 1));
  return accounts;
}
//correct
function getTotalNumberOfBorrows(account, books) {
 const {id: acctId} = account;
return books.reduce((acc, book) => {
  return (acc + book.borrows.filter(borrow => borrow.id === acctId)
  .reduce((accountBorrowed, borrow) => accountBorrowed + 1, 0));
}, 0);
}
//correct
function getBooksPossessedByAccount(account, books, authors) {
return books.reduce((acc,book) => {
  if(book.borrows[0].id === account.id) {
    const author = authors.find(author => author.id === book.authorId);
    acc.push({...book, author});
  }
  return acc;
}, []);
}

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
