import mockup from "../assets/Mockup.svg";
import trust from "../assets/trust.svg";
import donwnload from "../assets/download.svg";
import apple from "../assets/Apple.svg";
import play from "../assets/google_play.svg";

export default function Hero() {
  return (
    <section className="hero">
      <div className="container mx-auto flex md:flex-row flex-col justify-between  ">
        <div className="hero-content flex flex-col p-6 justify-center md:w-1/2 items-center">
          <div>
            <h1 className="text-5xl font-bold text-blue-700">Meet Circle AI</h1>
            <p className="text-lg mt-4 capitalize">
              Pakistan’s first AI chatbot for startups and investors
            </p>
            <div className="mt-6 bg-white p-3 flex rounded-xl gap-2 items-center  w-fit">
              <img
                src={trust}
                alt=""
                className="hover:scale-105 cursor-pointer"
              />
              <h1>
                <strong> Trusted By </strong>

                <span className="text-gray-500">
                  25+ Startups and Investors
                </span>
              </h1>
            </div>
            <div className="mt-6 p-3 flex rounded-xl gap-2 items-center w-fit">
              <h1 className="text-xl font-bold text-black opacity-50">
                200K+ Dowloads
              </h1>
              <img
                src={donwnload}
                alt=""
                className="hover:scale-105 cursor-pointer"
              />
            </div>
            <div className="mt-6 flex gap-4 flex-wrap">
              <button className=" bg-white  w-52  px-3 py-2 rounded-xl flex gap-5 items-center justify-center hover:bg-gray-100 border-gray-600 border-2 border-opacity-50 ">
                <div>
                  <img src={apple} alt="" />
                </div>

                <div className="flex flex-col items-start">
                  <p className="text-sm">Download on the</p>
                  <p className="md:text-xl font-bold text-lg">App Store</p>
                </div>
              </button>
              <button className=" bg-white w-52  px-3 py-2 rounded-xl flex gap-5 items-center  border-gray-600 border-2 hover:bg-gray-100  border-opacity-50 ">
                <div>
                  <img src={play} alt="" />
                </div>

                <div className="flex flex-col items-start">
                  <p className="text-sm">Get it On</p>
                  <p className="md:text-xl font-bold text-lg">Play Store</p>
                </div>
              </button>
              {/* <button className="bg-blue-800 text-white py-2 px-3 rounded-xl">
              <img src={play} alt="" />
              <span>Get it on Google Play</span>
            </button> */}
            </div>
          </div>
        </div>

        <div className="hero-image">
          <img
            src={mockup}
            alt=""
            width={750}
            className="cursor-pointer hover:scale-90 transition-all duration-100 ease-in"
          />
        </div>
      </div>
    </section>
  );
}
