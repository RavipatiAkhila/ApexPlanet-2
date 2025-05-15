// Contact Form Validation
document.getElementById('contactForm').addEventListener('submit', function (e) {
  e.preventDefault();

  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const contact = document.getElementById('contact').value.trim();
  const dob = document.getElementById('dob').value.trim();
  const message = document.getElementById('message').value.trim();
  const gender = document.querySelector('input[name="gender"]:checked');
  const country = document.getElementById('country').value;
  const subject = document.getElementById('subject').value;
  const contactMethods = document.querySelectorAll('input[name="method"]:checked');

  if (
    !name || !email || !contact || !dob || !message ||
    !gender || !country || !subject || contactMethods.length === 0
  ) {
    alert("Please fill in all fields and select contact method.");
    return;
  }

  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  const contactPattern = /^[0-9]{10}$/;

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

  if (!title) return;

  const li = document.createElement('li');
  li.innerHTML = `
    <strong>${title}</strong><br>
    ${description ? `<em>${description}</em><br>` : ''}
    Priority: ${priority} | Due: ${dueDate || 'Not set'}
  `;
  li.onclick = () => li.remove();

  document.getElementById('taskList').appendChild(li);

  // Reset Fields
  document.getElementById('taskInput').value = '';
  document.getElementById('description').value = '';
  document.getElementById('priority').value = 'Medium';
  document.getElementById('dueDate').value = '';
}
