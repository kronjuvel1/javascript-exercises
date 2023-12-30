const books = [
    {
      title: 'Book',
      author: 'Name'
    },
    {
      title: 'Book2',
      author: 'Name2'
    }
  ]

const getTheTitles = function() {
    const bookTitle = books.map(obj => obj.title);

    return bookTitle;
};

// Do not edit below this line
module.exports = getTheTitles;