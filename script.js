import Books from "./data.js";
const booklist = document.querySelector("#booklist li");

const allBooks = Books.reduce((acc, book) => {
    acc =
      acc +
      `
       <a
          href=${book.url}
          target="_blank"
        >
           ${book.title}
           <img src=${book.image} alt="book"/>
           <i class="fa fa-thumbs-up" aria-hidden="true"></i>
        </a> 
  `;
   return acc;
  }, ''
  
);

console.log(allBooks)
booklist.innerHTML = allBooks;
