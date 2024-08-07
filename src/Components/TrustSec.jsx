import sadapay from "../assets/sadapay.svg";
import nayapay from "../assets/nayapay.svg";
import jugnu from "../assets/jugnu.svg";
import oladoc from "../assets/oladoc.svg";

export default function Trustsec() {
  return (
    <>
      <div className="md:ml-40 md:mr-40 md:py-6 md:px-0 px-6">
        <p className="text-xl font-bold">Trusted By:</p>
        <div>
          <ul className="p-6 flex items-center justify-around">
            <li>
              <img
                src={sadapay}
                alt=""
                width={200}
                className="hover:scale-105 cursor-pointer"
              />
            </li>
            <li>
              <img
                src={nayapay}
                alt=""
                width={200}
                className="hover:scale-105 cursor-pointer"
              />
            </li>
            <li>
              <img
                src={jugnu}
                alt=""
                width={200}
                className="hover:scale-105 cursor-pointer"
              />
            </li>
            <li>
              <img
                src={oladoc}
                alt=""
                width={200}
                className="hover:scale-105 cursor-pointer"
              />
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
