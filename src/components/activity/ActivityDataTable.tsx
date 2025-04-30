import { ActivityData } from "../../types/entities/transaction.entity";
import { useNavigate } from "@tanstack/react-router";
import { resolveTransactionType } from "../../utils/resolve-transaction-type";
import { TransactionStatusEnum } from "../../types/enums/transaction.enum";

type ActivityProps = {
  data: ActivityData[];
  openedAccountIds: number[];
};

const ActivityDataTable: React.FC<ActivityProps> = ({ data, openedAccountIds }) => {
  const navigate = useNavigate();

  return (
    <div className="border rounded-lg overflow-hidden">
      <table className="w-full">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Date
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Ref. No
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Message
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Type
            </th>
            <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
              Amount
            </th>
            <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
              Fee
            </th>
            <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
              Status
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {data.length > 0 ? (
            data.map((item, index) => (
              <tr key={index}>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {new Date(item.date_transaction).toLocaleDateString()}
                </td>
                <td
                  className="px-6 py-4 whitespace-nowrap text-sm text-blue-600 cursor-pointer underline hover:text-blue-400"
                  onClick={() => {
                    // Handle click event for ref_no
                    console.log(item);
                    navigate({
                      to: `/home/receipt/$id`,
                      params: { id: item.ref_no },
                      state: { activityData: item },
                    });
                  }}
                >
                  {item.ref_no}
                </td>
                <td className="px-6 py-4 text-sm text-gray-500">{item.notes}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                    {resolveTransactionType({
                      type: item.transaction_type,
                      receiver_id: item.receiver_id,
                      sender_id: item.sender_id,
                      openedAccountIds,
                    })}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 text-right">
                  ₱{Number(item.amount).toFixed(2)}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 text-right">
                  ₱{item.transaction_fee}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-right">
                  <span
                    className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                      item.transaction_status === TransactionStatusEnum.PENDING
                        ? "bg-yellow-100 text-yellow-800"
                        : item.transaction_status === TransactionStatusEnum.COMPLETED
                          ? "bg-green-100 text-green-800"
                          : item.transaction_status === TransactionStatusEnum.FAILED
                            ? "bg-red-100 text-red-800"
                            : "bg-gray-100 text-gray-800"
                    }`}
                  >
                    {item.transaction_status}
                  </span>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={7} className="px-6 py-4 text-center text-sm text-gray-500">
                No activity found
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default ActivityDataTable;
