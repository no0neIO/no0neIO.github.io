// const url="http://35.180.182.8/search?keywords=north&language=en";

// fetch(url)
//     .then(resp=>resp.json())
//     .then(function(data){
//         x=data.entries;
//         x.forEach(element => {
//             console.log(element.name)
//         });
//         console.log(data);
//     })

var typingTimer;                //timer identifier
var doneTypingInterval = 500;  //time in ms (5 seconds)

//on keyup, start the countdown
$('.search').keyup(function(){
    clearTimeout(typingTimer);
    if ($('.search').val()) {
        typingTimer = setTimeout(doneTyping, doneTypingInterval);
    }
});

//user is "finished typing," do something
function doneTyping () {
    $('.results').empty();
    const typed = $('.search').val();
    console.log(`DONE TYPING! ${typed}`);
    const url=`http://35.180.182.8/search?keywords=${typed}&language=en`;
    fetch(url)
    .then(resp=>resp.json())
    .then(function(data){
        x=data.entries;
        x.forEach(element => {
            $('.results').append(element.name+"<br>");
            console.log(element.name);
        });
        console.log(data);
    })
}






// $(document).ready(function(){
//     $('.search').click(function(){
//         $('.results').hide();
//     })
// })