const fn = document.getElementById('fileName')
const searchstat = document.getElementById('searchStat')
const keyword = document.getElementById('keyword')
const fileContent = document.getElementById('fileContent')

function loadBook(filename, displayName) {
    let currentBook = ""
    let url = "/assets/scripts/" + filename
    console.log(fn)

    // reset our UI
    fn.innerHTML = displayName
    searchstat.innerHTML = ""
    keyword.value = ""

    // request a book
    let xhr = new XMLHttpRequest()
    xhr.open('GET', url, true)
    xhr.send();

    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            currentBook = xhr.responseText;

            // regex for formatting text
            currentBook = currentBook.replace(/(?:\r\n|\r|\n)/g, '<br>')

            fileContent.innerHTML = currentBook
            fileContent.scrollTop = 0
        }
    }
}