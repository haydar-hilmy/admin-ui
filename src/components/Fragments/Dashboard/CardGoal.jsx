import { useContext, useEffect, useState } from "react";
import { goals } from "../../../data/goals";
import Card from "../../Elements/Card";
import CompositionExample from "../../Elements/GaugeChart";
import { Icon } from "../../Icons/Icons";
import axios from "axios";
import { NotifContext } from "../../../context/notifContext";
import { AuthContext } from "../../../context/authContext";
import SimpleBackdrop from "../../Elements/Backdrop";
import { CircularProgress } from "@mui/material";

const CardGoal = () => {

    const [goals, setGoals] = useState({ presentAmount: 0, targetAmount: 0 })
    const { setOpen, setMsg } = useContext(NotifContext)
    const { setIsLoggedIn } = useContext(AuthContext)
    const [isLoadingGoals, setIsLoadingGoals] = useState(true)

    const chartValue = (goals.presentAmount * 100) / goals.targetAmount;

    const getData = async () => {
        try {
            setIsLoadingGoals(true)
            const refreshToken = localStorage.getItem("refreshToken");

            console.info("RefreshToken: ", refreshToken)
            const response = await axios.get(
                "https://jwt-auth-eight-neon.vercel.app/goals",
                {
                    headers: {
                        Authorization: `Bearer ${refreshToken}`,
                    },
                }
            );

            setGoals({
                presentAmount: response.data.data[0].present_amount,
                targetAmount: response.data.data[0].target_amount,
            })

            setIsLoadingGoals(false)
            console.log("response: ", response);
        } catch (error) {
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
    };

    useEffect(() => {
        getData();
        console.log("GetData")
    }, []);

    const getDate = new Date().toDateString().slice(4);

    return (
        <Card
            title="Goals">

            {
                isLoadingGoals ? (
                    <div className="flex h-full justify-center items-center">
                        <CircularProgress />
                    </div>
                ) : (
                    <>
                        <div className="p-2">
                            <div className="flex justify-between">
                                <div className="flex">
                                    <span className="text-2xl font-bold me-4 self-center">
                                        ${goals.presentAmount}
                                    </span>
                                    <div className="p-2 bg-gray-05 rounded-md box-border">
                                        <Icon.Edit />
                                    </div>
                                </div>
                                <div>{getDate}</div>
                            </div>
                            <div className="border-b-2 my-4"></div>
                            <div className="flex justify-between">
                                <div>
                                    <div className="flex mt-3 mb-10">
                                        <div>
                                            <Icon.Award />
                                        </div>
                                        <div className="ms-2">
                                            <span className="text-gray-02">Target Achieved</span>
                                            <br />
                                            <span className="font-bold text-xl">
                                                ${goals.targetAmount}
                                            </span>
                                        </div>
                                    </div>
                                    <div className="flex">
                                        <div>
                                            <Icon.Target />
                                        </div>
                                        <div className="ms-2">
                                            <span className="text-gray-02">This Month Target</span>
                                            <br />
                                            <span className="font-bold text-xl">
                                                ${goals.presentAmount}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <div className="ms-4 text-center">
                                    <CompositionExample desc={chartValue} />
                                    <div className="flex justify-between">
                                        <span className="text-gray-03">$0</span>
                                        <span className="font-bold text-2xl">12K</span>
                                        <span className="text-gray-03">$20K</span>
                                    </div>
                                    <div className="mt-2">Target vs Achievement</div>
                                </div>
                            </div>
                        </div>
                    </>
                )
            }
        </Card>
    );
};

export default CardGoal;
