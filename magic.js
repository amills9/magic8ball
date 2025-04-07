function GenerateAnswer() {
    const responses = [
      'It is certain',
      'Without a doubt',
      'Most likely',
      'Yes',
      'Reply hazy, try again',
      'Ask again later',
      'My reply is no',
      'No',
      'Very doubtful',
    ];
    const response = responses[Math.floor(Math.random() * responses.length)];
    document.getElementById('outputDiv').innerHTML = `<div class="response">${response}</div>`;
  }