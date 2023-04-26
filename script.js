import Books from './data.js'
let html = "";
const booklist = document.querySelector("#booklist")

Books.map(book => {
    html = html + `<li>
       <a
          href=${book.url}
          target="_blank"
        >
           ${book.title}
           <img src=${book.image} alt="book"/>
           <i class="fa fa-thumbs-up" aria-hidden="true"></i>
        </a> 
      </li>
  `
})
booklist.innerHTML = html

