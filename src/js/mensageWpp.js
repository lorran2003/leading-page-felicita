export default function SubmitWpp() {
  document.querySelector("#whatsapp-button").addEventListener("click", () => {
    const phoneNumber = "5521993497432";
    const message = "Olá, gostaria de mais informações!";

    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`;

    window.location.href = whatsappUrl;
  });
}
