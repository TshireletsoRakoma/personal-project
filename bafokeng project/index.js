<script>
  // Get all buttons with the class "button"
  const buttons = document.querySelectorAll('.button');

  // Loop through each button and add an event listener
  buttons.forEach(button => {
    button.addEventListener('click', () => {
      // Navigate to the phonebook page when clicked
      window.location.href = 'phonebook.html';
    });
  });
</script>