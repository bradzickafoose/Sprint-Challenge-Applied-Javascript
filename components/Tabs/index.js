// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>


axios
    .get('https://lambda-times-backend.herokuapp.com/topics')
    .then(response => {
        response.data.topics.forEach(element => {
            topicsContainer.appendChild(tabComponent(element));
        })
        // console.log(response);
    })
    .catch(err => {
        console.log(err);
    })
    
    const topicsContainer = document.querySelector(".topics");

    function tabComponent(trending) {

        // define new element
        const tab = document.createElement('div');

        // set class name 
        tab.classList.add('tab');

        // set text content
        tab.textContent = trending;

        return tab;
    }
