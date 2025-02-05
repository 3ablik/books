import React from "react";

const books = [
  {
    name: "Harry Potter and the Philosopher's Stone",
    desc: "Harry Potter has never even heard of Hogwarts when the letters start dropping on the doormat at number four.",
    src: "https://images-na.ssl-images-amazon.com/images/I/51UoqRAxwEL._SX331_BO1,204,203,200_.jpg",
  },
  {
    name: "Harry Potter and the Chamber of Secrets",
    desc: "The Dursleys were so mean and hideous that summer that all Harry Potter wanted was to get back to the Hogwarts School for Witchcraft and Wizardry.",
    src: "https://res.cloudinary.com/bloomsbury-atlas/image/upload/w_360,c_scale,dpr_1.5/jackets/9781408855669.jpg",
  },
  {
    name: "Harry Potter and the Prisoner of Azkaban",
    desc: "Harry Potter is lucky to reach the age of thirteen, since he has survived the murderous attacks of the feared Dark Wizard Voldemort three times.",
    src: "https://m.media-amazon.com/images/I/81NQA1BDlnL._SY466_.jpg",
  },
];

export default function Main() {
  return (
    <main>
      <h1>Books</h1>
      <div className="book-list">
        {books.map((book) => (
          <div className="book-item" key={book.name}>
            <h2>{book.name}</h2>
            <p>{book.desc}</p>
            <img src={book.src} alt={book.name} />
          </div>
        ))}
      </div>
    </main>
  );
}
