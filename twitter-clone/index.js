const form = document.getElementById("add-tweet-form");
const main = document.getElementById("main");
const tweet = document.getElementById("name");
const addTweetButton = document.getElementById("add-tweet-button");

const tweets = [
  {
    tweet_author: "Izzat",
    tweet_text: "tweet.value",
  },
];
addTweetButton.addEventListener("click", (e) => {
  e.preventDefault();
  const newTweet = {
    tweet_author: "Izzat",
    tweet_text: tweet.value,
  };
  tweets.push(newTweet);
  main.appendChild(createTweet(newTweet));
});

function createTweet({ tweet_text, tweet_author }) {
  const article = document.createElement("article");
  const likeButton = document.createElement("button");
  likeButton.innerHTML = `<img src="./images/heart-992 (1).png" />`;
  likeButton.onclick = () => {
    if (article.style.backgroundColor === "red") {
      article.style.backgroundColor = "white";
    } else {
      article.style.backgroundColor = "red";
    }
    if (article.style.color === "white") {
      article.style.color = "black";
    } else {
      article.style.color = "white";
    }
  };
  const retweetButton = document.createElement("button");
  retweetButton.innerHTML = `<img src="./images/transfer-3787.png" />`;
  retweetButton.onclick = () => {
    tweets.unshift(
      createTweet({ tweet_text: "tweet_text", tweet_author: "tweet_author" })
    );
    main.appendChild(
      createTweet({ tweet_text: "tweet_text", tweet_author: "tweet_author" })
    );
  };
  article.classList.add("tweet");

  article.innerHTML = `
    <div class="tweet-header">
      <img
        src="https://t4.ftcdn.net/jpg/00/65/77/27/360_F_65772719_A1UV5kLi5nCEWI0BNLLiFaBPEkUbv5Fv.jpg"
        alt="Avatar"
        class="avatar"
      />
      <div>
        <h2>${tweet_author}</h2>
        <span>@${tweet_author}</span>
        <time>Jan 1, 2021</time>
      </div>
    </div>
    <p>${tweet_text}</p>
  `;
  const footer = document.createElement("footer");
  footer.append(likeButton, retweetButton);
  article.appendChild(footer);
  return article;
}

tweets.forEach((tweet) => {
  console.log("tweet");
});
