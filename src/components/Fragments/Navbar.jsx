import { Link } from "react-router-dom"
import PersonIcon from '@mui/icons-material/Person';
import GridViewIcon from '@mui/icons-material/GridView';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import CompareArrowsIcon from '@mui/icons-material/CompareArrows';
import AdsClickIcon from '@mui/icons-material/AdsClick';
import {     ExitToApp } from "@mui/icons-material";
import Logo from "../Elements/Logo";

const Navbar = (props) => {
    const { type } = props
    return (
        <>
            <nav className="bg-gray-800 text-special-bg2 sm:w-72 w-36 h-screen px-7 py-12 flex flex-col justify-between sticky left-0 top-0">
                <div>
                    <Link to="/">
                        <div className="flex justify-center mb-10 text-white"><Logo type="navbar" /></div>
                        <div className={`${type == "dashboard" ? "bg-primary" : ""} flex  text-white px-4 py-3 rounded-md duration-100 hover:bg-slate-700`}>
                            <div className="text-white mx-auto sm:mx-0"><GridViewIcon></GridViewIcon></div>
                            <div className="ms-3 hidden text-white sm:block">Overview</div>
                        </div>
                    </Link>
                    <Link to="/balance">
                        <div className={`${type == "balance" ? "bg-primary" : ""} flex  text-white px-4 py-3 rounded-md duration-100 hover:bg-slate-700`}>
                            <div className="mx-auto text-white sm:mx-0"><AccountBalanceWalletIcon /></div>
                            <div className="ms-3 hidden text-white sm:block">Balances</div>
                        </div>
                    </Link>
                    <Link to="/transaction" >
                        <div className={`${type == "transaction" ? "bg-primary" : ""} flex  text-white px-4 py-3 rounded-md duration-100 hover:bg-slate-700`}>
                            <div className="mx-auto text-white sm:mx-0"><CompareArrowsIcon/> </div>
                            <div className="ms-3 hidden text-white sm:block">Transaction</div>
                        </div>
                    </Link>
                    <Link to="/goals" >
                        <div className={`${type == "goals" ? "bg-primary" : ""} flex  text-white px-4 py-3 rounded-md duration-100 hover:bg-slate-700`}>
                            <div className="mx-auto text-white sm:mx-0"><AdsClickIcon /> </div>
                            <div className="ms-3 hidden text-white sm:block">Goals</div>
                        </div>
                    </Link>
                </div>
                <div className="sticky bottom-12">
                    <Link to="/login">
                        <div className="flex bg-special-bg3 px-4 py-3 rounded-md duration-100 hover:bg-red-500">
                            <div className="mx-auto text-white sm:mx-0"><ExitToApp /></div>
                            <div className="ms-3 hidden text-white sm:block">Logout</div>
                        </div>
                    </Link>
                    <div className="border-b my-10 border-b-special-bg"></div>
                    <div className="flex justify-between">
                        <div className="mx-auto text-white sm:mx-0"><img className="w-10" src="src/assets/icon/icon-user-manx.png"/></div>
                        <div className="hidden text-white sm:block">
                            Admin
                            <br />
                            <b>View Profile</b>
                        </div>
                        <div className="hidden text-white sm:block"><PersonIcon></PersonIcon></div>
                    </div>
                </div>
            </nav>
        </>
    )
}
export default Navbar