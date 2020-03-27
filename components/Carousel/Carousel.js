/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to write a function that creates the carousel component, you will find the HTML below.
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this component. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/

/* HTML:
  <div class="carousel">
    <div class="left-button"> < </div>
    <img src="./assets/carousel/mountains.jpeg" />
    <img src="./assets/carousel/computer.jpeg" />
    <img src="./assets/carousel/trees.jpeg" />
    <img src="./assets/carousel/turntable.jpeg" />
    <div class="right-button"> > </div>
  </div>
*/

const carouselContainer = document.querySelector('.carousel-container');

var imgArray = ['./assets/carousel/computer.jpeg', './assets/carousel/mountains.jpeg', './assets/carousel/trees.jpeg', './assets/carousel/turntable.jpeg'], i = 0;

function carouselComponent() {

  // define new elements
  const 
    carousel = document.createElement('div'),
    leftButton = document.createElement('div'),
    rightButton = document.createElement('div'),
    image = document.createElement('img'),
    // Button arrows (thx https://graphemica.com)
    leftArrow = '\u276e',
    rightArrow = '\u276f';

  // set class names
  carousel.classList.add('carousel');
  leftButton.classList.add('left-button');
  rightButton.classList.add('right-button');

  // set text content 
  leftButton.textContent = leftArrow;
  rightButton.textContent = rightArrow;

  // set structure of elements
  carousel.appendChild(leftButton);
  carousel.appendChild(image);
  carousel.appendChild(rightButton);

  // set image src to array
  image.src = imgArray[i];
  image.style.display = 'block';

  // set event listeners for buttons
  leftButton.addEventListener('click', () => {
    i === 0 ? i = imgArray.length - 1 : i--;
    image.src = imgArray[i];
  })

  rightButton.addEventListener('click', () => {
    i === imgArray.length - 1 ? i = 0 : i++;
    image.src = imgArray[i];
  })

  // return that shiz
  console.log('Uh... Hello?')
  return carousel;
}

carouselContainer.appendChild(carouselComponent());