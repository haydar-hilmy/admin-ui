import { useContext } from "react";
import { AuthContext } from "../../context/authContext";
import Input from "../Elements/LabeledInput/Input";
import NotificationsIcon from "@mui/icons-material/Notifications";

const Header = () => {
  const date = new Date().toDateString().slice(4);

  const { setIsLoggedIn, setName, name } = useContext(AuthContext)

  return (
    <header className="border-b-2 py-4 px-6 flex items-center justify-between">
      <div className="flex items-center">
        <div className="font-bold text-lg">{name}</div>
        <div className="ms-6 text-gray-03">{date}</div>
      </div>
      <div className="flex">
        <div className="self-center">
          <NotificationsIcon className="text-gray-700 scale-110" />
        </div>
        <div className="ms-2 hidden sm:block">
          <Input placeholder="Search" variant="bg-white w-80" />
        </div>
      </div>
    </header>
  );
};

export default Header;
