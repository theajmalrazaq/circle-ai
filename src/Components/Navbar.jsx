import brand from "../assets/brand.svg";
import menu from "../assets/menu.svg";

export default function Navbar() {
  return (
    <nav className="flex justify-around p-4">
      <div className="brand">
        <a href="/">
          <img src={brand} alt="" className="h-9" />
        </a>
      </div>
      <ul className=" gap-7 items-center md:flex hidden">
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/about">About</a>
        </li>
        <li>
          <a href="/contact">Contact</a>
        </li>
        <li>
          <a href="/contact">
            <button className="bg-blue-800 text-white py-2 px-3 rounded-xl">
              Get Circle AI
            </button>
          </a>
        </li>
      </ul>
      <div className="md:hidden">
        <img src={menu} alt="" className="h-6" />
      </div>
    </nav>
  );
}
