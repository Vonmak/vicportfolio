import gmail from "../assets/gmail.png";

function Mail() {
  const handleClick = () => {
    if (typeof window !== 'undefined') {
      window.open(`mailto:vonmak2@gmail.com`);
    }
  };

  return (
    <div className="fixed bottom-6 left-6 z-50 group">
      <div className="absolute bottom-20 left-0 opacity-0 group-hover:opacity-100 transition-opacity bg-gray-900 text-white text-xs rounded px-3 py-1 mb-2 pointer-events-none shadow-lg">
        Email Me
      </div>
      <button
        onClick={handleClick}
        className="bg-red-500 hover:bg-red-600 rounded-full shadow-lg p-3 flex items-center justify-center transition-transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-red-400"
        aria-label="Email Me"
      >
        <img
          src={gmail}
          alt="Gmail contact button"
          className="h-10 w-10 object-contain"
        />
      </button>
    </div>
  );
}

export default Mail;
