// const url = 'https://onelineof.me/pineappleApp/data/contacts.json';
// const url2 = 'https://onelineof.me/pineappleApp/data/contact_methods.json';

var proxyUrl = 'https://cors-anywhere.herokuapp.com/';

const url = 'http://pineapple.com.gr/challenge/data/contacts.json';
const url2 = 'http://pineapple.com.gr/challenge/data/contact_methods.json';

const grid = document.getElementById('grid');

// xrisimopoiw tin fetch gia na parw ta data apo to URL pairnwntas prwta apo proxy gia na "prosperasw" to CORS
fetch(proxyUrl + url)
    .then(resp => resp.json()
        .then(data => { // gia kathe eggrafi tou contacts.json arxeiou dimiourgw ena div gia to onoma kai ena gia to button
            data.forEach(element => {
                let div = document.createElement('div');
                div.className = 'names';
                div.textContent = `${element.fullName}`;
                grid.appendChild(div);
                let div2 = document.createElement('div');
                div2.className = 'showMore';
                let btn = document.createElement("button");   // Create a <button> element
                btn.innerHTML = "Show More";
                btn.className = "btn";
                btn.setAttribute('data', `${element.id}`) // prosthetw se kathe button to id tou onomatos wste na to xrisimopoiisw argotera gia to "join"
                div2.appendChild(btn);
                grid.appendChild(div2);
            });
        })
    ).catch(function (err) {
        console.log('Fetch Error : ', err);
    });


const b = document.getElementsByClassName('grid2');

// prosthetw enan click listener se kathe button, pairnw to id pou exw thesei nwritera sto button kai to xrisimopoiw 
// gia na vrw ta swsta info kai na ta prosthesa sto lightbox
b[0].addEventListener('click', function (e) {
    if (e.target && e.target.className == 'btn') {
        let id = e.target.getAttribute('data');
        fetch(proxyUrl + url2)
            .then(resp => resp.json()
                .then(data => {
                    let details = data[id];
                    lightbox.classList.add('active');
                    const info = document.createElement("div");
                    info.innerHTML = `Address: ${details.address} <br><br> Email: ${details.email} <br><br> Mobile: ${details.mobile}`;
                    lightbox.appendChild(info);
                })
            )
    }
})


// dimourgw to lightbox(pou anoigei se kathe button click) kai to kanw append sto body
const lightbox = document.createElement("div");
lightbox.id = "lightbox";
document.body.appendChild(lightbox);

// prosthetw enan click listener otan o user kanei click eksw apo ta details
lightbox.addEventListener("click", e => {
    if (e.target !== e.currentTarget) return;
    lightbox.classList.remove("active");
    lightbox.innerHTML = "";
});