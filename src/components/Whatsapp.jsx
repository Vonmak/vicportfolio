import whatsapp from "../assets/whatsapp.png";

function WhatsApp() {
  const handleClick = () => {
    if (typeof window !== 'undefined') {
      window.open(`https://wa.me/+254791665710`, "Hi, How are you?");
    }
  };

  return (
    <div className="fixed bottom-0 right-0">
      <img
        src={whatsapp}
        alt="WhatsApp contact button"
        onClick={handleClick}
        className="cursor-pointer h-20 w-20"
      />
    </div>
  );
}

export default WhatsApp;
