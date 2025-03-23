// Patient Login Form Submission
document.getElementById('patient-login-form').addEventListener('submit', function (e) {
    e.preventDefault();
    const loginId = document.getElementById('login-id').value;
    // Redirect to patient dashboard (for now)
    window.location.href = 'patient-dashboard.html';
  });
  
  // Fetch and display surgery details (to be integrated with backend)
  document.addEventListener('DOMContentLoaded', function () {
    const surgeryDetails = {
      name: 'Heart Bypass Surgery',
      time: '2 hours',
      phase: 'Incision'
    };
  
    document.getElementById('surgery-name').textContent = surgeryDetails.name;
    document.getElementById('estimated-time').textContent = surgeryDetails.time;
    document.getElementById('current-phase').textContent = surgeryDetails.phase;
  });
  // Show loading spinner
function showLoader() {
    document.getElementById('loader').style.display = 'block';
  }
  
  // Hide loading spinner
  function hideLoader() {
    document.getElementById('loader').style.display = 'none';
  }
  
  // Example usage in patient.js
  document.addEventListener('DOMContentLoaded', function () {
    showLoader();
    fetch(`http://localhost:5000/api/patients/${loginId}`)
      .then(response => response.json())
      .then(data => {
        hideLoader();
        // Display data
      })
      .catch(error => {
        hideLoader();
        console.error('Error:', error);
      });
  });function showError(message) {
    const errorDiv = document.createElement('div');
    errorDiv.className = 'error-message';
    errorDiv.textContent = message;
    document.body.prepend(errorDiv);
  
    // Remove error message after 5 seconds
    setTimeout(() => {
      errorDiv.remove();
    }, 5000);
  }
  
  // Example usage in patient.js
  fetch(`http://localhost:5000/api/patients/${loginId}`)
    .then(response => response.json())
    .then(data => {
      if (data.message === 'Patient not found') {
        showError('Patient not found. Please check your Login ID.');
      } else {
        // Display data
      }
    })
    .catch(error => {
      showError('An error occurred. Please try again later.');
      console.error('Error:', error);
    });