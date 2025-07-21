import whatsapp from "../assets/whatsapp.png";

function WhatsApp() {
  const handleClick = () => {
    if (typeof window !== 'undefined') {
      window.open(`https://wa.me/+254791665710`, "Hi, How are you?");
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 group">
      <div className="absolute bottom-20 right-0 opacity-0 group-hover:opacity-100 transition-opacity bg-gray-900 text-white text-xs rounded px-3 py-1 mb-2 pointer-events-none shadow-lg">
        Chat on WhatsApp
      </div>
      <button
        onClick={handleClick}
        className="bg-green-500 hover:bg-green-600 rounded-full shadow-lg p-3 flex items-center justify-center transition-transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-green-400"
        aria-label="Chat on WhatsApp"
      >
        <img
          src={whatsapp}
          alt="WhatsApp contact button"
          className="h-10 w-10 object-contain"
        />
      </button>
    </div>
  );
}

export default WhatsApp;
