function openChatbot() {
  const chatbotModal = document.createElement("div");
  chatbotModal.classList.add("chatbot-modal");

  chatbotModal.innerHTML = `
    <div class="chatbot-content">
      <h2>Book Your Appointment</h2>
      <form id="booking-form">
        <input type="text" id="name" placeholder="Your Name" required />
        <select id="service" required>
          <option value="">Select Service</option>
          <option value="Haircut">Haircut</option>
          <option value="Shave">Shave</option>
          <option value="Beard Grooming">Beard Grooming</option>
        </select>
        <input type="date" id="date" required />
        <button type="submit">Confirm Booking</button>
      </form>
      <button class="close-chatbot" onclick="closeChatbot()">Close</button>
    </div>
  `;

  document.body.appendChild(chatbotModal);
}

function closeChatbot() {
  const chatbotModal = document.querySelector(".chatbot-modal");
  if (chatbotModal) chatbotModal.remove();
}

document.addEventListener('submit', function(event) {
  if (event.target.id === 'booking-form') {
    event.preventDefault();
    const name = document.getElementById("name").value;
    const service = document.getElementById("service").value;
    const date = document.getElementById("date").value;

    alert(`Thanks ${name}, your ${service} is booked for ${date}.`);
    closeChatbot();
  }
});
