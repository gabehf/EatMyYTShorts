function initContentScript() {
        let url = location.href
        url = url.substring(8, url.length) //remove 'https://'
        url = url.split('/')
        if (url[1] == 'shorts' ) { // if the video is a short
            console.log('EatMyYTShorts: Fixing video...')
            vidID = url[2] //the unique video id
            location.assign(`https://youtube.com/watch?v=${vidID}`)
        }
}


function addLocationObserver(callback) {

    // Options for the observer (which mutations to observe)
    const config = { attributes: true, childList: false, subtree: false }
  
    // Create an observer instance linked to the callback function
    const observer = new MutationObserver(callback)
  
    // Start observing the target node for configured mutations
    observer.observe(document.body, config)
}

initContentScript()
addLocationObserver(initContentScript)