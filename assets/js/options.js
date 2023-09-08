$(function () {
  chrome.storage.sync.get('limit', function(budget) {
    $('#limit').val(budget.limit);
  });

  $('#resetTotal').on('click', function () {
    chrome.storage.sync.set({ 'total': 0 });
  });

  $('#close-btn').on('click', function () {
    close();
  });

  $('#saveLimit').on('click', function () {
    let limit = parseInt($('#limit').val());

    if (isNaN(limit)) {
      alert('Limit must be a digit');
      $('#limit').val('');

      return;
    }

    setLimit(limit);
  });

  $('#resetTotal').on('click', function () {
    resetTotal();
  });
});

function setLimit(limit) {
  if (limit) {
    chrome.storage.sync.set({ 'limit': limit }, function () {
      showBasicNotification(
        'Limit is Changed',
        `You have changed your limit to ${limit}.`
      );
    });
  }
}

function resetTotal() {
  chrome.storage.sync.set({ limit: 0 }, function () {
    showBasicNotification(
      'Total Reset',
      'You have reset your total to 0.'
    );
  })
}