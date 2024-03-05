const url = "https://api.quotable.io/random";
let quote = document.getElementById("quote");
let author = document.getElementById("author");
let next = document.getElementById("next");

async function quotable(url) {
  const response = await fetch(url);
  const data = await response.json();
  quote.innerHTML = data.content;
  author.innerHTML = data.author;
}

quotable(url);

next.addEventListener("click", function () {
  quotable(url);
});

let postFb = document.getElementById("post-fb");

postFb.addEventListener("click", function () {
  // Ask for confirmation
  let confirmed = confirm(
    "Are you sure you want to post this quote on Facebook?"
  );
  if (confirmed) {
    // Construct the URL for sharing on Facebook
    let quoteText = quote.innerText;
    let quoteAuthor = author.innerText;
    let facebookShareUrl = "https://www.facebook.com/sharer/sharer.php?u=";

    // Encode the quote text and author for the URL
    let encodedQuote = encodeURIComponent(`"${quoteText}" - ${quoteAuthor}`);
    let finalUrl = facebookShareUrl + encodedQuote;

    // Open a new window with the Facebook share dialog
    window.open(finalUrl, "_blank", "width=600,height=400");
  }
});
