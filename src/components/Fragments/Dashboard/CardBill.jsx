import { useEffect, useState } from "react";
// import bills from "../../../data/bill";
import Card from "../../Elements/Card";
import axios from "axios";
import SimpleBackdrop from "../../Elements/Backdrop";
import { CircularProgress } from "@mui/material";

const CardBill = () => {

    const [bills, setBills] = useState([])

    const [isLoadingBill, setIsLoadingBill] = useState(true)

    const getData = async () => {
        try {
            setIsLoadingBill(true)
            const refreshToken = localStorage.getItem("refreshToken");

            const response = await axios.get(
                "https://jwt-auth-eight-neon.vercel.app/bills",
                {
                    headers: {
                        Authorization: `Bearer ${refreshToken}`,
                    },
                }
            );

            setBills(response.data.data)
            setIsLoadingBill(false)
            console.group("CardBill Response")
            console.log("Response Data: ", response.data.data);
            console.groupEnd()
        } catch (error) {
            console.error(error)
            if (error.response) {
                if (error.response.status == 401) {
                    setOpen(true);
                    setMsg({
                        severity: "error",
                        desc: "Session Has Expired. Please Login.",
                    });

                    setIsLoggedIn(false);
                    setName("");

                    localStorage.removeItem("refreshToken");
                    navigate("/login");
                } else {
                    console.log(error.response);
                }
            }
        }
    }

    useEffect(() => {
        getData();
        console.group("CardBill")
        console.log("GetData Bill")
        console.groupEnd()
    }, []);

    const billCard = bills.map((bill) => (
        <div key={bill.id} className="lg:flex justify-between pt-3 pb-3">
            <div className="flex">
                <div className="bg-special-bg me-3 px-4 rounded-lg flex place-content-center flex-col">
                    <span className="text-xs">{bill.month}</span>
                    <span className="text-2xl font-bold">{bill.date}</span>
                </div>
                <div className="">
                    <img className="h-6" src={`/images/${bill.logo}`} />
                    <span className="font-bold">{bill.name}</span>
                    <br />
                    <span className="text-xs">Last Charge - {bill.lastCharge}</span>
                </div>
            </div>
            <div className="flex place-content-center flex-col">
                <span className="p-2 border rounded-lg font-bold text-center">
                    ${bill.amount}
                </span>
            </div>
        </div>
    ));

    return (
        <Card title="Upcoming Bill">
            {
                isLoadingBill ? (
                    <div className="flex justify-center items-center h-48">
                        <CircularProgress />
                    </div>
                ) : (
                    <div className="h-full flex flex-col justify-around">
                        {billCard}
                    </div>
                )
            }
        </Card>
    )
}

export default CardBill