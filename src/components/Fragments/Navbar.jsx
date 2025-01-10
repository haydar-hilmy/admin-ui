import { Link, Navigate, useNavigate } from "react-router-dom"
import PersonIcon from '@mui/icons-material/Person';
import GridViewIcon from '@mui/icons-material/GridView';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import CompareArrowsIcon from '@mui/icons-material/CompareArrows';
import AdsClickIcon from '@mui/icons-material/AdsClick';
import { ExitToApp, MoreVert } from "@mui/icons-material";
import Logo from "../Elements/Logo";
import { useContext, useState } from "react";
import { ThemeContext } from "../../context/themeContext";
import { AuthContext } from "../../context/authContext";
import { NotifContext } from "../../context/notifContext";
import axios from "axios";

const Navbar = (props) => {
    const { type } = props

    const themes = [
        { name: "theme-green", bgcolor: "bg-[#299D91]", color: "#299D91" },
        { name: "theme-blue", bgcolor: "bg-[#1E90FF]", color: "#1E90FF" },
        { name: "theme-purple", bgcolor: "bg-[#6A5ACD]", color: "#6A5ACD" },
        { name: "theme-pink", bgcolor: "bg-[#DB7093]", color: "#DB7093" },
        { name: "theme-brown", bgcolor: "bg-[#8B4513]", color: "#8B4513" },
    ];

    const { theme, setTheme } = useContext(ThemeContext);
    const { setIsLoggedIn, setName, name } = useContext(AuthContext)
    const { setMsg, setOpen, setIsLoading } = useContext(NotifContext)

    const navigate = useNavigate()

    const refreshToken = localStorage.getItem("refreshToken")

    const Logout = async () => {
        setIsLoading(true)
        console.log("Logout")
        try {
            await axios.get("ttps://jwt-auth-eight-neon.vercel.app/logout", {
                headers: {
                    Authorization: `Bearer ${refreshToken}`
                }
            })


            setOpen(true)
            setMsg({ severity: "success", desc: "Logout Success" })
        } catch (error) {
            console.log("Error")
            setIsLoading(false)
            if (error.response) {
                setOpen(true)
                setMsg({ severity: "error", desc: error.response.data.msg })
                console.error("Error: ", error)
                console.error("Error Response: ", error.response)
            }
        }

        setIsLoggedIn(false)
        setName("")
        setIsLoading(false)

        localStorage.removeItem("name")
        localStorage.removeItem("refreshToken")
        navigate('/login')
    }

    // const { name } = useContext(AuthContext)

    return (
        <div className="bg-primary sm:w-72 w-36">
            <nav className="bg-gray-800 text-special-bg2 h-screen px-7 py-12 flex flex-col justify-between sticky left-0 top-0">
                <div>
                    <Link to="/">
                        <div className="flex justify-center mb-10 text-white"><Logo type="navbar" /></div>
                        <div className={`${type == "dashboard" ? "bg-primary" : ""} zoom-in flex  text-white px-4 py-3 rounded-md duration-100 hover:bg-slate-700`}>
                            <div className="text-white mx-auto sm:mx-0"><GridViewIcon></GridViewIcon></div>
                            <div className="ms-3 hidden text-white sm:block">Overview</div>
                        </div>
                    </Link>
                    <Link to="/balance">
                        <div className={`${type == "balance" ? "bg-primary" : ""} zoom-in flex  text-white px-4 py-3 rounded-md duration-100 hover:bg-slate-700`}>
                            <div className="mx-auto text-white sm:mx-0"><AccountBalanceWalletIcon /></div>
                            <div className="ms-3 hidden text-white sm:block">Balances</div>
                        </div>
                    </Link>
                    <Link to="/transaction">
                        <div className={`${type == "transaction" ? "bg-primary" : ""} zoom-in flex  text-white px-4 py-3 rounded-md duration-100 hover:bg-slate-700`}>
                            <div className="mx-auto text-white sm:mx-0"><CompareArrowsIcon /> </div>
                            <div className="ms-3 hidden text-white sm:block">Transaction</div>
                        </div>
                    </Link>
                    <Link to="/goals">
                        <div className={`${type == "goals" ? "bg-primary" : ""} zoom-in flex  text-white px-4 py-3 rounded-md duration-100 hover:bg-slate-700`}>
                            <div className="mx-auto text-white sm:mx-0"><AdsClickIcon /> </div>
                            <div className="ms-3 hidden text-white sm:block">Goals</div>
                        </div>
                    </Link>
                </div>

                <div className="md:flex md:gap-2 text-sm text-white">
                    Themes
                    {themes.map((t) => (
                        <div
                            key={t.name}
                            className={`${t.bgcolor} zoom-in md:w-4 h-4 rounded-sm cursor-pointer mb-2`}
                            onClick={() => setTheme(t)}
                        ></div>
                    ))}
                </div>

                <div className="sticky bottom-12">
                    <div onClick={Logout} className="flex cursor-pointer zoom-in bg-special-bg3 px-4 py-3 rounded-md duration-100 bg-gray-600 hover:bg-red-500">
                        <div className="mx-auto text-white sm:mx-0"><ExitToApp /></div>
                        <div className="ms-3 hidden text-white sm:block">Logout</div>
                    </div>
                    <div className="border-b my-10 border-b-special-bg items-center"></div>
                    <div className="flex justify-between items-center cursor-pointer">
                        <div className="mx-auto text-white sm:mx-0"><img className="w-10" src="images/icon-user-manx.png" /></div>
                        <div className="hidden text-white sm:block">
                            {name}
                            {/* Admin */}
                            <br />
                            <span className="text-sm"><b>View Profile</b></span>
                        </div>
                        <div className="hidden text-white sm:block"><MoreVert /> </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}
export default Navbar