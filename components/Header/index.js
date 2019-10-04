// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .header-container component

function Header() {

    // define new elements
    const   
        header = document.createElement('div'),
        date = document.createElement('span'),
        logo = document.createElement('h1'),
        temperature = document.createElement('span');

    // set class names
    header.classList.add('header');
    date.classList.add('date');
    temperature.classList.add('temp');
    
    // set text content
    date.textContent = "MARCH 28, 2019";
    logo.textContent = "Lambda Times";
    temperature.textContent = "98°";

    // set structure of elements
    header.appendChild(date);
    header.appendChild(logo);
    header.appendChild(temperature);

    return header;
}

const headerContainer = document.querySelector(".header-container");

headerContainer.appendChild(Header());
