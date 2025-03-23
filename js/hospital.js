// Hospital Login Form Submission
document.getElementById('hospital-login-form').addEventListener('submit', function (e) {
    e.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
  
    // Simulate login (replace with actual API call)
    if (email === 'hospital@example.com' && password === 'password') {
      window.location.href = 'hospital-dashboard.html';
    } else {
      alert('Invalid email or password');
    }
  });
  
  // Register Patient Form Submission
  document.getElementById('register-patient-form').addEventListener('submit', function (e) {
    e.preventDefault();
    const loginId = document.getElementById('login-id').value;
    const name = document.getElementById('name').value;
    const surgeryName = document.getElementById('surgery-name').value;
    const surgeryTime = document.getElementById('surgery-time').value;
  
    // Simulate API call to register patient
    fetch('http://localhost:3000/api/hospitals/register-patient', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ loginId, name, surgeryName, surgeryTime })
    })
      .then(response => response.json())
      .then(data => {
        alert(data.message || 'Patient registered successfully');
      })
      .catch(error => {
        alert('Error registering patient');
        console.error('Error:', error);
      });
  });
  
  // Update Surgery Phase Form Submission
  document.getElementById('update-phase-form').addEventListener('submit', function (e) {
    e.preventDefault();
    const patientId = document.getElementById('patient-id').value;
    const phase = document.getElementById('phase').value;
  
    // Simulate API call to update surgery phase
    fetch('http://localhost:3000/api/hospitals/update-phase', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ patientId, phase })
    })
      .then(response => response.json())
      .then(data => {
        alert(data.message || 'Surgery phase updated successfully');
      })
      .catch(error => {
        alert('Error updating surgery phase');
        console.error('Error:', error);
      });
  });