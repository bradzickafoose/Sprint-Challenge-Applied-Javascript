// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.

axios
    .get('https://lambda-times-backend.herokuapp.com/articles')
    .then(response => {
        const articlesArray = Object.values(response.data.articles);
        console.log(articlesArray);

        articlesArray.forEach(element => {
            element.forEach(e => cardsContainer.appendChild(cardComponent(e)))
        })
    })
    .catch(err => {
        console.log(err);
    })

    // Another axios solution shared by Justin
    // axios.get('https://lambda-times-backend.herokuapp.com/articles').then(response => {
    //     let articles = response.data.articles;
    //     console.log(response.data);
    //     for (topic in articles) {
    //         articles[topic].forEach(article => {
    //             entry.appendChild(cardComponent(article));
    //         });
    //     }
    // });

    const cardsContainer = document.querySelector(".cards-container");

    function cardComponent(article) {

        // define new element
        const 
            card = document.createElement('div'),
            headline = document.createElement('div'),
            author = document.createElement('div'),
            imgContainer = document.createElement('div'),
            img = document.createElement('img'),
            authorName = document.createElement('span');

        // set class name 
        card.classList.add('card');
        headline.classList.add('headline');
        author.classList.add('author');
        imgContainer.classList.add('img-container');

        // set text content
        headline.textContent = article.headline;
        img.src = article.authorPhoto;
        authorName.textContent = article.authorName;

        // set structure of elements 
        card.appendChild(headline);
        card.appendChild(author);
        author.appendChild(imgContainer);
        imgContainer.appendChild(img);
        author.appendChild(authorName);

        return card;
    }

