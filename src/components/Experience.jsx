import Skills from "./Skills";
import Slider from "react-slick";

function Experience() {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 5000,
    speed: 700,
    slidesToShow: 2,
    slidesToScroll: 1,
  };
  return (
    <div className="pt-20 px-24">
      <h1 className="text-xl font-extrabold">Experience</h1>
      <Slider {...settings}>
        <div className="mb-10 flex flex-col items-center py-10">
          <div>
            <h3 className="text-lg font-bold ">
              Equip Africa Institute -{" "}
              <span className="font-medium">Technical Trainer</span>
            </h3>
            <p className="text-sm font-medium italic">Nairobi, Kenya</p>
            <p className="text-sm font-medium italic">09/22 - Current</p>
            <ul className="list-none pl-5">
              <li className="text-sm">
                Computer Organisation and Architecture.
              </li>
              <li className="text-sm">Mobile Application Development.</li>
              <li className="text-sm">Manage Information Systems.</li>
            </ul>
          </div>
        </div>
        <div className="mb-10 flex flex-col items-center py-10">
          <h3 className="text-lg font-bold ">
            Seqtech Security Solutions -{" "}
            <span className="font-medium">Assistant Technician</span>
          </h3>
          <p className="text-sm font-medium italic">Nairobi, Kenya</p>
          <p className="text-sm font-medium italic">05/2020-08/2020</p>
          <ul className="list-none pl-5">
            <li className="text-sm">WIFI installation.</li>
            <li className="text-sm">Network cabling.</li>
            <li className="text-sm">Electric fence installation.</li>
            <li className="text-sm">Routers Configurations.</li>
          </ul>
        </div>
        <div className="mb-10 flex flex-col items-center py-10">
          <h3 className="text-lg font-bold ">
            Kisii County Government -{" "}
            <span className="font-medium">ICT Attaché</span>
          </h3>
          <p className="text-sm font-medium italic">Kisii, Kenya</p>
          <p className="text-sm font-medium italic">04/2019-08/2019</p>
          <ul className="list-none pl-5">
            <li className="text-sm">
              Computer hardware repair and maintenance.
            </li>
            <li className="text-sm">Revenue collection systems management.</li>
            <li className="text-sm">
              Software applications installations and uninstallations.
            </li>
            <li className="text-sm">Additions of new customers to ZIZI.</li>
            <li className="text-sm">Additions of new businesses to ZIZI</li>
            <li className="text-sm">Additions of new vehicles to ZIZI</li>
          </ul>
          <p className="text-xs italic">
            ZIZI is a Kisii County Revenue Collection System
          </p>
        </div>
      </Slider>
      <Skills />
    </div>
  );
}

export default Experience;
