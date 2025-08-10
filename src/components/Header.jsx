import PokemonLogo from "../assets/pokemon_logo.svg";
import { Link, useNavigate } from "react-router-dom";
import ToggleDarkMode from "./ui/ToggleDarkMode";
const Header = () => {
  const navigate = useNavigate();

  return (
    <nav className="bg-gray-900 fixed w-full z-20 top-0 start-0 border-b border-gray-600">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link to="/">
          <img src={PokemonLogo} className="h-10" alt="Pokemon Logo" />
        </Link>
        <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse gap-x-3">
          <ToggleDarkMode />
        </div>
      </div>
    </nav>
  );
};

export default Header;
