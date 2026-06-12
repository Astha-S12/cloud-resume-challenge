fetch('https://epdvym2fqc.execute-api.ap-south-1.amazonaws.com/visitor-count')
  .then(response => response.json())
  .then(data => {
    document.getElementById('visitor-count').textContent = data.count;
  })
  .catch(error => {
    console.error('Error:', error);
    document.getElementById('visitor-count').textContent = 'Error';
  });