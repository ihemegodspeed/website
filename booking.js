const form = document.getElementById("bookingForm");
const statusText = document.getElementById("formStatus");

const WHATSAPP_NUMBER = "2347039431981";

form.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
    event.preventDefault();

    if (!validateForm()) {
        statusText.textContent = "Please fill all required fields correctly.";
        statusText.style.color = "red";
        return;
    }

    const formData = getFormData();
    const message = buildMessage(formData);
    const whatsappURL = buildWhatsAppURL(message);

    statusText.textContent = "Redirecting to WhatsApp...";
    statusText.style.color = "green";

    window.open(whatsappURL, "_blank");
}

function validateForm() {
    return form.checkValidity();
}

function getFormData() {
    return {
        name: form.name.value.trim(),
        email: form.email.value.trim(),
        phone: form.phone.value.trim(),
        service: form.service.value,
        date: form.date.value,
        quantity: form.quantity.value
    };
}

function buildMessage(data) {
    return `
Hello GODSPEED,

I would like to request a service.

Name: ${data.name}
Email: ${data.email}
Phone: ${data.phone}
Service: ${data.service}
Date: ${data.date}
Number of Systems: ${data.quantity}
    `.trim();
}

function buildWhatsAppURL(message) {
    const encoded = encodeURIComponent(message);
    return `https://wa.me/${WHATSAPP_NUMBER}?text=${encoded}`;
}