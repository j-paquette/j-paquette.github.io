//https://flaviocopes.com/fetch-api/
//refer to the section: ES2017 async functions
// (async () => {
//     const response = await fetch('./sampleQuotes.json');
//     const data = await response.json();
//     const dataList = data.terryPratchett;
//     randomQuotesData = getRandomQuote(dataList);
//     console.log(quotesData);
//     return quotesData;
// })();

//https://stackoverflow.com/questions/64683303/get-data-from-javascript-fetch-and-display-it-in-another-function
let quotesData = () => fetch('./sampleQuotes.json')
    .then((response) => {
        if(!response.ok) {
            throw new Error
                (`HTTP error! Status: ${response.status}`);
        }
        return response.json();
    })
    .then((json) => {
        quotesData = json.terryPratchett;
        
        return quotesData;       
    });

const showData = async () => {
    try {
        //get the list of quotes
        const quoteListData = await quotesData();

        //get the element to act on
        const buttonElement = document.getElementById("quote-btn");

        //setup event listener to display a random quote when the "Click" button is clicked
        buttonElement.addEventListener("click", (event) => {
            //reload the page to remove the existing quote and replace it with a new quote
            
            //get a random quote, book title
            let randomQuote = getRandomQuote(quoteListData);
            //get the element for the quote text
            const quoteElement =  document.querySelector("#quote-text");
            quoteElement.textContent = `${randomQuote.quote}`;
            //create a new paragraph to display the quote
            //const pElement = document.createElement('p');
            //pElement.textContent = `${randomQuote.quote}`;
            //quoteElement.appendChild(pElement);
           
            //quoteElement.textContent = `<p>${randomQuote.quote}</p>`;
            //get the element for the book text
            const bookElement = document.querySelector("#book-text");
            bookElement.textContent = `book: `;
            //add a tag to display the book title
            const citeElement = document.createElement('cite');        
            citeElement.setAttribute('title', 'Source Title');
            citeElement.textContent = `${randomQuote.book}`;
            bookElement.appendChild(citeElement);
        });
    } catch (error) {
        console.error("Unable to initialize page due to the following error: ", error);
    }
}
    
showData();

function getRandomQuote(jsonData){
    //get a random quote, book title from the json
    const randomQuote = jsonData[Math.floor(Math.random() * jsonData.length)];

    return randomQuote;
}

