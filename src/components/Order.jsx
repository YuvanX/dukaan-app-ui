import { OrderTop } from "./OrderTop";
import { orderData } from "./info";

export function Order() {
    
    return <div className="p-4 shadow mt-4 mr-5">
        <OrderTop/>



<div className="relative overflow-x-auto mt-4">
    <table className="w-full text-left rtl:text-right">
        <thead className="text-sm font-medium text-black  uppercase   ">
            <tr>
                <th scope="col" className="px-6 py-3 font-medium">
                    ORDER ID
                </th>
                <th scope="col" className="px-6 py-3 font-medium">
                    STATUS
                </th>
                <th scope="col" className="px-6 py-3 font-medium">
                    TRANSACTION ID
                </th>
                <th scope="col" className="px-6 py-3 font-medium">
                    REFUND DATE
                </th>
                <th scope="col" className="px-6 py-3 font-medium text-right">
                    ORDER AMOUNT
                </th>
            </tr>
        </thead>
            {orderData.map(function(data) {
                return <tbody>
                    <tr className="bg-white border-b">
                        <th scope="row" className="px-6 py-4 font-medium text-sm text-blue-700 whitespace-nowrap">
                           #{data.id}
                        </th>
                        <td className="px-6 flex items-center gap-2 py-4 text-sm">
                            { (data.status === "Successful") && <div className='h-2.5 w-2.5 rounded-full bg-green-500'/>}
                            {(data.status === "Processing") && <div className='h-2.5 w-2.5 rounded-full bg-gray-400'/>}
                            {(data.status === "Failed") && <div className='h-2.5 w-2.5 rounded-full bg-red-500'/>}
                            {data.status}
                        </td>
                        <td className="px-6 py-4 text-sm">
                        {data.transactionID}
                        </td>
                        <td className="px-6 py-4 text-sm">
                            {data.refundDate}
                        </td>
                        <td className="px-6 py-4 text-right text-sm">
                            {data.amount}
                        </td>
                    </tr>
                 </tbody>
            })}

    </table>
</div>

        </div>
}