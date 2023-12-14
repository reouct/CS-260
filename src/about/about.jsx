import React from "react";
import "./about.css";

export function About(props) {
  const [imageUrl, setImageUrl] = React.useState("");
  const [quote, setQuote] = React.useState("Loading...");
  const [quoteAuthor, setQuoteAuthor] = React.useState("unknown");

  // We only want this to render the first time the component is created and so we provide an empty dependency list.
  React.useEffect(() => {
    const random = Math.floor(Math.random() * 1000);
    fetch(`https://picsum.photos/v2/list?page=${random}&limit=1`)
      .then((response) => response.json())
      .then((data) => {
        const containerEl = document.querySelector("#picture");

        const width = containerEl.offsetWidth;
        const height = containerEl.offsetHeight;
        const apiUrl = `https://picsum.photos/id/${data[0].id}/${width}/${height}?grayscale`;
        setImageUrl(apiUrl);
      })
      .catch();

    fetch("https://api.quotable.io/random")
      .then((response) => response.json())
      .then((data) => {
        setQuote(data.content);
        setQuoteAuthor(data.author);
      })
      .catch();
  }, []);

  let imgEl = "";

  if (imageUrl) {
    imgEl = <img src={imageUrl} alt="stock background" />;
  }

  return (
    <main className="container-fluid bg-secondary text-center">
      <div>
        <div id="picture" className="picture-box">
          {imgEl}
        </div>

        <p>
          Have you ever found it is so hard to create a good resume? The Resume
          creater application is all you will need! You could log in to your own
          account in this website and save all your work! You just need to fill
          out a few question about yourself and then the website will just
          created a resume for you!
        </p>

        <div className="quote-box bg-light text-dark">
          <p className="quote">{quote}</p>
          <p className="author">{quoteAuthor}</p>
        </div>
      </div>
    </main>
  );
}
