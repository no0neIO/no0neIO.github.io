document.getElementById("btn").addEventListener("click", getPhoto);

function getPhoto() {
    const url = document.getElementById('url').value;
    alert(url);


    document.getElementById('url').value = "";
}