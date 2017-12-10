const permissionsNeeded = {
  permissions: ['clipboardRead', 'clipboardWrite'],
  origins: ['https://www.linkedin.com/']
}

chrome.browserAction.onClicked.addListener(tab => {
  chrome.permissions.contains(permissionsNeeded, result => {
    if (result) {
      alert('Persmissions already set.')
    } else {
      chrome.permissions.request(permissionsNeeded, granted => {
        if (granted) {
          alert('Thanks. Permissions granted.')
        } else {
          alert('Ups. Something went wrong! No permission.')
        }
      })
    }
  })
})
