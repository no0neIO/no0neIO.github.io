const fn = document.getElementById('fileName')
const searchstat = document.getElementById('searchStat')
const keyword = document.getElementById('keyword')
const fileContent = document.getElementById('fileContent')
const docLenght = document.getElementById('docLenght')
const wordCount = document.getElementById('wordCount')
const charCount = document.getElementById('charCount')

function loadBook(filename, displayName) {
    let currentBook = ""
    let url = "./assets/scripts/" + filename
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
            c = currentBook
            // regex for formatting text
            currentBook = currentBook.replace(/(?:\r\n|\r|\n)/g, '<br>')

            fileContent.innerHTML = currentBook
            fileContent.scrollTop = 0
            getStats(c)
        }
    }
}

function getStats(currentBook) {
    const text = currentBook.toLowerCase()
    const wordArray = text.match(/\b\S+\b/g)
    console.log(wordArray)
    const wordDictionary = {}
    wordCount.innerHTML = `Word Count: ${wordArray.length}`
    charCount.innerHTML = `Character Count: ${text.replace(/\s+/g, '').length}`;

    // count every word in wordArray
    for (let word in wordArray) {
        let wordValue = wordArray[word]
            (wordDictionary[wordValue]) ? wordDictionary[wordValue]++ : wordDictionary[wordValue] = 1
    }
}