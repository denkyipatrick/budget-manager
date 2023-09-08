function showBasicNotification(title, message) {
  const notifOptions = {
    type: 'basic',
    iconUrl: '../assets/images/icon48.png',
    title,
    message
  };

  chrome.notifications.create('limitNotif', notifOptions);
}