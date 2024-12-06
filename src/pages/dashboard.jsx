import { ArrowRight } from "@mui/icons-material";
import Card from "../components/Elements/Card";
import MainLayout from "../components/Layouts/MainLayout";
import bills from "../data/bill";
import { expensesBreakdowns } from "../data/expenses";
import transactions from "../data/transactions";
import CardTransaction from "../components/Fragments/Dashboard/CardTransaction";
import CardBill from "../components/Fragments/Dashboard/CardBill";
import CardExpenseBreakdown from "../components/Fragments/Dashboard/CardExpenseBreakdown";
import CardBalance from "../components/Fragments/Dashboard/CardBalance";
import CardStatistic from "../components/Fragments/Dashboard/CardStatistic";
import CardGoal from "../components/Fragments/Dashboard/CardGoal";

const DashboardPage = (props) => {

    const { page } = props
    return (
        <MainLayout type="dashboard">
            {/* top content start*/}
            <div className="md:grid md:grid-cols-3 mb-8 sm:flex sm:gap-6">
                <div className="mb-4 sm:w-full flex flex-col">
                    <CardBalance />
                </div>
                <div className="mb-4 sm:w-full flex flex-col">
                    <CardGoal />
                </div>
                <div className="mb-4 sm:w-full">
                    <CardBill />
                </div>
            </div>
            {/* top content end*/}
            {/* bottom content start*/}
            <div className="sm:flex sm:gap-6">
                <div className="mb-4 sm:w-1/3">
                    <CardTransaction />
                </div>
                <div className="sm:w-2/3">
                    <div className="mb-8">
                        <CardStatistic />
                    </div>
                    <div className="mb-4">
                        <CardExpenseBreakdown />
                    </div>
                </div>
            </div>
            {/* bottom content end*/}
        </MainLayout>
    );
};

export default DashboardPage;