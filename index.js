document.getElementById('candidate-profile-form').addEventListener('submit', function (event) {
    event.preventDefault();
  
    const candidateData = new FormData(event.target);
    const candidateProfile = {
      name: candidateData.get('name'),
      // Add more fields here
    };
  
    // Send the data to your server or store it in a database
    console.log(candidateProfile);
  });