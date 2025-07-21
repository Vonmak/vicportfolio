import gmail from "../assets/gmail.png";

function Mail() {
  const handleClick = () => {
    if (typeof window !== 'undefined') {
      window.open(`mailto:vonmak2@gmail.com`);
    }
  };

  return (
    <div className="">
      <img
        src={gmail}
        alt="Gmail contact button"
        onClick={handleClick}
        className="cursor-pointer h-16 w-16"
      />
    </div>
  );
}

export default Mail;
