const PAYMENT_URL = "PASTE_YOOKASSA_PAYMENT_LINK_HERE";
const FALLBACK_EMAIL = "bezuhovpsy@gmail.com";

function paymentTarget() {
  if (PAYMENT_URL && !PAYMENT_URL.includes("PASTE_YOOKASSA")) {
    return PAYMENT_URL;
  }

  const subject = encodeURIComponent("Заказ: текстовый разбор личности");
  const body = encodeURIComponent(
    "Здравствуйте! Хочу оформить текстовый разбор личности за 3 000 ₽."
  );
  return `mailto:${FALLBACK_EMAIL}?subject=${subject}&body=${body}`;
}

document.querySelectorAll("[data-payment-button]").forEach((button) => {
  button.setAttribute("href", paymentTarget());
});
