// Contact Form Validation
document.getElementById('contactForm').addEventListener('submit', function (e) {
  e.preventDefault();

  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const contact = document.getElementById('contactNumber').value.trim();
  const dob = document.getElementById('dob').value.trim();
  const gender = document.getElementById('gender').value;
  const contactMethod = document.getElementById('contactMethod').value;
  const country = document.getElementById('country').value;
  const subject = document.getElementById('subject').value;

  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  const contactPattern = /^[0-9]{10}$/;

  if (
    !name || !email || !contact || !dob ||
    !gender || !contactMethod || !country || !subject
  ) {
    alert("Please fill in all fields.");
    return;
  }

  if (!emailPattern.test(email)) {
    alert("Enter a valid email address.");
    return;
  }

  if (!contactPattern.test(contact)) {
    alert("Enter a 10-digit contact number.");
    return;
  }

  alert("Form submitted successfully!");
  document.getElementById('contactForm').reset();
});

// To-Do List Manager
function addTask() {
  const title = document.getElementById('taskInput').value.trim();
  const description = document.getElementById('description').value.trim();
  const priority = document.getElementById('priority').value;
  const dueDate = document.getElementById('dueDate').value;

  if (!title) {
    alert("Please enter a task title.");
    return;
  }

  const li = document.createElement('li');
  li.innerHTML = `
    <strong>${title}</strong><br>
    ${description ? `<em>${description}</em><br>` : ''}
    Priority: ${priority} | Due: ${dueDate || 'Not set'}
  `;
  li.onclick = () => li.remove();

  document.getElementById('taskList').appendChild(li);

  document.getElementById('taskInput').value = '';
  document.getElementById('description').value = '';
  document.getElementById('priority').value = 'Medium';
  document.getElementById('dueDate').value = '';
}

// Tab Switching Logic
document.querySelectorAll('.navbar nav a').forEach(link => {
  link.addEventListener('click', function (e) {
    e.preventDefault();
    const target = this.getAttribute('href').substring(1); // e.g., "contact" or "todo"

    // Hide all sections
    document.querySelectorAll('main > section').forEach(section => {
      section.style.display = 'none';
    });

    // Show the selected section
    document.getElementById(target).style.display = 'block';
  });
});

// Show default tab on page load
window.addEventListener('DOMContentLoaded', () => {
  document.getElementById('contact').style.display = 'block';
  document.getElementById('todo').style.display = 'none';
});
