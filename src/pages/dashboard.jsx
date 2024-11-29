import { ArrowRight } from "@mui/icons-material";
import Card from "../components/Elements/Card";
import MainLayout from "../components/Layouts/MainLayout";
import bills from "../data/bill";
import { expensesBreakdowns } from "../data/expenses";
import transactions from "../data/transactions";
import CardTransaction from "../components/Fragments/Dashboard/CardTransaction";
import CardBill from "../components/Fragments/Dashboard/CardBill";
import CardExpenseBreakdown from "../components/Fragments/Dashboard/CardExpenseBreakdown";

const DashboardPage = (props) => {

    const { page } = props
    return (
        <MainLayout type="dashboard">
            {/* top content start*/}
            <div className="md:grid md:grid-cols-3 mb-8 sm:flex sm:gap-6">
                <div className="mb-4 sm:w-full flex flex-col">
                    <Card title="Total Balance" />
                </div>
                <div className="mb-4 sm:w-full flex flex-col">
                    <Card title="Goals" />
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
                        <Card title="Statistics" />
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