import { DashRevenue } from "./DashRevenue";
import { Footer } from "./Footer";
import { HamBurger } from "./HamBurger";
import { Order } from "./Order";
import { OverView } from "./Overview";
import { Payout } from "./Payout";
import { TopBar } from "./TopBar";

export function DashBoard() {
    return <div>
        <div>
            <HamBurger/>
        </div>
        <div>
            <TopBar/>
        </div>
        <div className="sm:ml-64">
            <OverView/>
            <DashRevenue/>
            <div className="font-medium text-xl mt-8">Transactions | This Month</div>
            <Payout/>
            <Order/>
            <div className="flex justify-center">
                <Footer/>
            </div>
        </div>
    </div>
}