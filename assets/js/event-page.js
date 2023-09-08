const contextMenuItem = {
  'id': 'spendMoney',
  'title': 'Spend Money',
  'contexts': ['selection'],
  'iconUrl': '../images/icon16.png'
};

chrome.contextMenus.create(contextMenuItem);
chrome.contextMenus.onClicked.addListener(function(e) {
  if (e.menuItemId === contextMenuItem.id && e.selectionText) {
    
  }
});