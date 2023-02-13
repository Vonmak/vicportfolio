import phone from "../assets/phone.png";

function Phone() {
  const handleClick = () => {
    window.open(`tel:+254791665710`);
  };

  return (
    <div className="">
      <img
        src={phone}
        alt=""
        onClick={handleClick}
        className="cursor-pointer h-16 w-16"
      />
    </div>
  );
}

export default Phone;
