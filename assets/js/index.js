$(function () {
  let appBudget;

  chrome.storage.sync.get(['total', 'limit'], function (budget) {
    $('#limit').text(budget.limit);
    $('#total').text(budget.total);
    appBudget = budget;
  });

  $('#save-btn').on('click', function () {
    chrome.storage.sync.get('total', function (budget) {
      let newTotal = 0;

      if (budget.total) {
        newTotal += parseInt(budget.total);
      }

      const amount = parseInt($('#amount').val());

      if (isNaN(amount)) {
        alert('The amount must be a digit');
        return;
      }

      newTotal += amount;
      $('#total').text(newTotal);
      $('#amount').val('');
      chrome.storage.sync.set({'total': newTotal});
    });
  });
});

