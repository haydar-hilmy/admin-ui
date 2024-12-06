import { expensesStatistics } from "../../../data/expenses";
import BarsDataset from "../../Elements/BarChart";
import Card from "../../Elements/Card";

const CardStatistic = () => {
    // const expensesStatisticCard = expensesStatistics.map((expensesStatistic) => (<div key={expensesStatistic.id}>{expensesStatistic.date}</div>));

    return (
        <Card variant="md:col-span-2 min-h-max" title="Statistics">
            <div className="h-auto">
                <select className="font-bold text-lg ring-0 focus:outline-none bg-transparent">
                    <option value="weekly">Weekly Comparison</option>
                </select>
            </div>
            <BarsDataset desc={expensesStatistics} />
        </Card>
    )
}

export default CardStatistic