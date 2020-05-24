// options

const CLIENT_ID = '123169912074-aub057e3c4r9msuj842c9u5rqg6v5fnc.apps.googleusercontent.com'

const discoveryDocs = ['https://www.googleapis.com/discovery/v1/apis/youtube/v3/rest']
const SCOPES = 'https://www.googleapis.com/auth/youtube.readonly';

const authorizeButton = document.getElementById('authorize-button')
const signoutButton = document.getElementById('signout-button')

const content = document.getElementById('content')
const channelForm = document.getElementById('channel-form')
const channelInput = document.getElementById('channel-Input')
const videoContainer = document.getElementById('video-container')


const defaultChannel = 'techguyweb'


// load auth2 library
function handleClientLoad() {
    gapi.load('client:auth2', initClient)
}

// init api client library and set up sign in listeners
function initClient() {
    gapi.client.init({
        discoveryDocs: discoveryDocs,
        clientId: CLIENT_ID,
        scope: SCOPES
    }).then(() => {
        // listen for signin state changes
        gapi.auth2.getAuthInstance().isSignedIn.listen(updateSignInStatus)
        // hanlde initial sign in state
        updateSignInStatus(gapi.auth2.getAuthInstance().isSignedIn.get())
        authorizeButton.onclick = handleAuthClick
        signoutButton.onclick = handleSignoutClick
    })
}

// update ui signin state changes
function updateSignInStatus(isSignedIn) {
    if (isSignedIn) {
        authorizeButton.style.display = 'none'
        signoutButton.style.display = 'block'
        content.style.display = 'block'
        videoContainer.style.display = 'block'
        getChannel(defaultChannel)
    } else {
        authorizeButton.style.display = 'block'
        signoutButton.style.display = 'none'
        content.style.display = 'none'
        videoContainer.style.display = 'none'
    }
}

// handle login

function handleAuthClick() {
    gapi.auth2.getAuthInstance().signIn()
}

//  handle logout
function handleSignoutClick() {
    gapi.auth2.getAuthInstance().signOut()
}

//  get channel from api

function getChannel(channel) {
    console.log(channel)
}