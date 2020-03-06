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
    const url = 'http://northwind.netcore.io/customers.json';
    resultsList.show();
    $.ajax({
        type: 'GET',
        url: url,
        data: { //ES6 object property name = value by default
            keywords,
        },
        success: data => successFunc(data, keywords),
        // error: function (xhr, ajaxOptions, thrownError) {
        //     alert(xhr.status);
        //     alert(thrownError);
        // }
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


// function successFunc(data, keywords) {
//     data = data.customers
//     data.map(x => {
//         // console.log(x.contactName);
//         if (x.contactName.toUpperCase().includes(keywords.toUpperCase()))
//             resultsList.append(`<div class="result" onclick="">${x.contactName}</div>`);
//         else
//             resultsList.append(`<div class="result">No Results Found.</div>`);
//     })
// }


function successFunc(data, keywords) {
    // console.log(keywords);
    // console.log(data.customers);
    keywords = keywords.toUpperCase()
    $.each(data.customers, (index, item) => {
        let name = item.contactName.toUpperCase()
        if (name.startsWith(keywords))
            resultsList.append(`
            <div class="result">
                <div class="result-name">${item.contactName}</div>
                <div class="result-address">${item.address}</div>
            </div>
            `);
    });

}