import { ArrowRight } from "@mui/icons-material";
import Card from "../components/Elements/Card";
import MainLayout from "../components/Layouts/MainLayout";
import bills from "../data/bill";
import { expensesBreakdowns } from "../data/expenses";
import transactions from "../data/transactions";
import CardTransaction from "../components/Fragments/Dashboard/cardTransaction";
import CardBill from "../components/Fragments/Dashboard/cardBill";
import CardExpenseBreakdown from "../components/Fragments/Dashboard/CardExpenseBreakdown";

const DashboardPage = (props) => {

    const billCard = bills.map((bill) => (
        <div key={bill.id} className="flex pt-4 gap-3">
            <div style={{ flex: 1 }} className="flex gap-2">
                <div className="flex flex-col items-center justify-center bg-gray-200 py-1 px-3 rounded-md self-start">
                    <span className="text-sm font-normal">{bill.month}</span>
                    <span className="text-xl font-bold">{bill.date}</span>
                </div>
                <div>
                    <img src={`/images/${bill.logo}`} />
                    <span className="font-bold text-gray-700">{bill.name}</span>
                    <br />
                    <span className="text-xs opacity-70 font-normal">Last Charge - {bill.lastCharge}</span>
                </div>
            </div>
            <div className="flex items-center">
                <span className="font-bold text-gray-700 py-1 px-2 rounded-md border border-gray-300">
                    ${bill.amount}
                </span>
            </div>
        </div>
    ));

    const expenseCard = expensesBreakdowns.map((expensesBreakdown) => (
        <div key={expensesBreakdown.id} className="flex pb-4 justify-between">
            <div className="flex">
                <div className="bg-special-bg px-3 rounded-lg flex flex-col place-content-center">
                    {expensesBreakdown.icon}
                </div>
                <div className="ms-4">
                    <span className="text-gray-02">{expensesBreakdown.category}</span>
                    <br />
                    <span className="font-bold text-lg">${expensesBreakdown.amount}</span>
                    <div className="flex">
                        <span className="text-gray-02">
                            {expensesBreakdown.percentage}%*
                        </span>{" "}
                        {expensesBreakdown.arrow}
                    </div>
                </div>
            </div>
            <div className="flex place-content-center flex-col me-8">
                <ArrowRight />
            </div>
        </div>
    ));

    const transactionCard = transactions.map((transaction) => (
        <div key={transaction.id} className="flex justify-between my-6">
            <div className="flex">
                <div className="bg-special-bg px-3 rounded-lg flex flex-col place-content-center">
                    {transaction.icon}
                </div>
                <div className="ms-4">
                    <span className="text-xl font-bold">
                        {transaction.transactionName}
                    </span>
                    <br />
                    <span className="text-gray-02">{transaction.shopName}</span>
                </div>
            </div>
            <div className="text-right">
                <span className="text-xl font-bold text-gray-02">
                    ${transaction.amount}
                </span>
                <br />
                <span className="text-gray-02">{transaction.date}</span>
            </div>
        </div>
    ));

    const { page } = props
    return (
        <MainLayout type="dashboard">
            {/* top content start*/}
            <div className="mb-8 sm:flex sm:gap-6">
                <div className="mb-4 sm:w-1/3">
                    <Card title="Total Balance" />
                </div>
                <div className="mb-4 sm:w-1/3">
                    <Card title="Goals" />
                </div>
                <div className="mb-4 sm:w-1/3">
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