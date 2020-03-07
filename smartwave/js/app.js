let typingTimer = Function // timer identifier function for debounce
let doneTypingInterval = 250 // time in ms

const searchText = $('.search-input')
let resultsList = $('.results')

// after keyup start timer.
searchText.keyup(function () {
    clearTimeout(typingTimer)
    let inputLen = searchText.val().length
    if (inputLen > 1) { // if lenght of search term > 1
        typingTimer = setTimeout(doneTyping, doneTypingInterval); //user probably finished typing, call doneTyping function
    } else {
        resultsList.empty()
    }
});

//get request
function doneTyping() {
    resultsList.empty(); // katharise ta proigoumena results
    let keywords = searchText.val()
    const url = 'https://onelineof.me/smartwave/customers.json';
    resultsList.show();
    $.ajax({
        type: 'GET',
        url: url,
        success: data => successFunc(data, keywords), // if successful call successFunc
        statusCode: {
            400: function () {
                alert('Errors in specified keywords and/or language.');
            }
        },
        error: function (err) {
            console.log(err)
        }
    });
}


function successFunc(data, keywords) {
    keywords = keywords.toUpperCase() // making uppercase the user input and the name from the JSON for case insensitive check
    $.each(data.customers, (index, item) => { // for every name on the JSON we check for matches
        let name = item.contactName.toUpperCase()
        name = name.split(' ')  // spliting the full name from the JSON 
        let firstName = name[0] //so we can search for both first and last name
        let lastName = name[1]
        if (firstName.startsWith(keywords) || lastName.startsWith(keywords)) //if we find a match we append a new div in results class
            resultsList.append(`
            <div class="result">
                <div class="result-name">${item.contactName}</div>
                <div class="result-address">${item.address}</div>
            </div>
            `);
    });

}