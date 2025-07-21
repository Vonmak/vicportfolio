import phone from "../assets/phone.png";

function Phone() {
  const handleClick = () => {
    if (typeof window !== 'undefined') {
      window.open(`tel:+254791665710`);
    }
  };

  return (
    <div className="fixed bottom-24 left-6 z-50 group">
      <div className="absolute bottom-20 left-0 opacity-0 group-hover:opacity-100 transition-opacity bg-gray-900 text-white text-xs rounded px-3 py-1 mb-2 pointer-events-none shadow-lg">
        Call Me
      </div>
      <button
        onClick={handleClick}
        className="bg-blue-500 hover:bg-blue-600 rounded-full shadow-lg p-3 flex items-center justify-center transition-transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-blue-400"
        aria-label="Call Me"
      >
        <img
          src={phone}
          alt="Phone contact button"
          className="h-10 w-10 object-contain"
        />
      </button>
    </div>
  );
}

export default Phone;
