// Called when the user clicks on the browser action.
const permissionsNeeded = {
  permissions: ['clipboardRead', 'clipboardWrite'],
  origins: ['https://www.linkedin.com/']
}
chrome.browserAction.onClicked.addListener(tab => {
  // Send a message to the active tab
  chrome.permissions.contains(permissionsNeeded, result => {
    if (result) {
      alert('Persmissions already working.')
    } else {
      chrome.permissions.request(permissionsNeeded, granted => {
        // The callback argument will be true if the user granted the permissions.
        if (granted) {
          alert('Thanks')
        } else {
          alert('DEPP!')
        }
      })
    }
  })

  // chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
  //   var activeTab = tabs[0]
  //   chrome.tabs.sendMessage(activeTab.id, { message: 'clicked_browser_action' })
  // })
})

// chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
//   if (request.message === 'open_new_tab') {
//     chrome.tabs.create({ url: request.url })
//   }
// })
