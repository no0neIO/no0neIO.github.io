let typingTimer = Function;                // timer identifier function for debounce
let doneTypingInterval = 250;

const searchText = $('.search-input');
let resultsList = $('.results');

searchText.keyup(function () {
    clearTimeout(typingTimer);

    let inputLen = searchText.val().length;
    if (inputLen > 1) { // an to length tou searh term einai > 1
        typingTimer = setTimeout(doneTyping, doneTypingInterval); // teleiwse pithanws to typing, kalese tin done typing
    } else { //if (!inputLen) { // an to text den exei contents na svinei to results div
        resultsList.empty();
    }
});

//user is "finished typing," do something
function doneTyping() {
    resultsList.empty(); // katharise ta proigoumena results
    let keywords = searchText.val();
    const url = 'https://onelineof.me/smartwave/customers.json';
    resultsList.show();
    $.ajax({
        type: 'GET',
        url: url,
        success: data => successFunc(data, keywords),
        statusCode: {
            400: function () {
                alert('Errors in specified keywords and/or language.');
            }
        },
        error: function (err) {
            console.log(err);
        }
    });
}


function successFunc(data, keywords) {
    keywords = keywords.toUpperCase()
    $.each(data.customers, (index, item) => {
        let name = item.contactName.toUpperCase()
        let firstName = name.split(' ').slice(0, -1).join(' ');
        let lastName = name.split(' ').slice(-1).join(' ');
        if (firstName.startsWith(keywords) || lastName.startsWith(keywords))
            resultsList.append(`
            <div class="result">
                <div class="result-name">${item.contactName}</div>
                <div class="result-address">${item.address}</div>
            </div>
            `);
    });

}