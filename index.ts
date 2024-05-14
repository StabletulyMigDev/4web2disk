document.addEventListener("DOMContentLoaded", function () {
    const loginForm = document.getElementById('loginForm') as HTMLFormElement;
  
    loginForm.addEventListener('submit', function (event) {
      event.preventDefault(); // prevent form submission
  
      // You can add your login logic here
      const username = (document.getElementById('username') as HTMLInputElement).value;
      const password = (document.getElementById('password') as HTMLInputElement).value;
  
      // Load users from JSON file
      fetch('users.json')
        .then(response => response.json())
        .then(users => {
          // Check if the entered credentials match any user in the JSON
          const user = users.find((user: any) => user.username === username && user.password === password);
          
          if (user) {
            // Redirect to another page after successful login
            window.location.href = './files/';
          } else {
            alert('Invalid username or password.');
          }
        })
        .catch(error => {
          console.error('Error loading users:', error);
          alert('Error occurred while loading users. Please try again later.');
        });
    });
  });
  