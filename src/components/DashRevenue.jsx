import { ColoredRevenueCard } from "./ColoredRevenueCard";
import { RevenueCard } from "./RevenueCard";
import { SimpleRevenueCard } from "./SimpleRevenueCard";

export function DashRevenue() {
    return <div className="grid grid-cols-1 md:grid-cols-6 gap-4 mr-6">
            <div className="col-span-2">
                <ColoredRevenueCard title={"Next payout"} amount={"2,312.23"} orders={"23 orders"} paymentDate={"Next payout date:"} time={'Today, 04:00 PM'}/>
            </div>
            <div className="col-span-2">
                <RevenueCard title={'Amount Pending'} amount={'92,312.20'} orders={'13 orders'}/>
            </div>
            <div className="col-span-2">
                <SimpleRevenueCard title={'Amount Pending'} amount={' 23,92,312.19'}/>
            </div>
        </div>
}