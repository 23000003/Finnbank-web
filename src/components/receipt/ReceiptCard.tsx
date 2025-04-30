import React from "react";
import { ActivityData } from "../../types/entities/transaction.entity";
import { ArrowDown, ArrowUp, CheckCircle2, Clock, XCircle } from "lucide-react";
import { TransactionTypeEnum } from "../../types/enums/transaction.enum";
import { OpenedAccountNumber } from "../../types/entities/opened-account.entity";
import { hideAccountNumber } from "../../utils/hide-account-number";
import { resolveTransactionType } from "../../utils/resolve-transaction-type";

type ReceiptCardProps = {
  activityData: ActivityData;
  accountNums: OpenedAccountNumber[];
};

const ReceiptCard: React.FC<ReceiptCardProps> = ({ activityData, accountNums }) => {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  const StatusIcon = {
    completed: <CheckCircle2 className="h-5 w-5 text-green-500" />,
    pending: <Clock className="h-5 w-5 text-amber-500" />,
    failed: <XCircle className="h-5 w-5 text-red-500" />,
  }[activityData.transaction_status.toLowerCase()];

  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-500 p-6 text-white">
        <div className="flex justify-between items-start">
          <div>
            <h1 className="text-2xl font-bold">Transaction Receipt</h1>
            <p className="text-blue-100 mt-1">Ref: {activityData.ref_no}</p>
          </div>
          <div className="flex items-center gap-2 bg-white/20 px-3 py-1 rounded-full">
            {StatusIcon}
            <span className="text-sm font-medium capitalize">
              {activityData.transaction_status}
            </span>
          </div>
        </div>
      </div>
      {/* Transaction Details */}
      <div className="p-6 space-y-6">
        {/* Amount */}
        <div className="text-center">
          <p className="text-gray-500">Amount</p>
          <p className="text-3xl font-bold mt-2">₱{parseFloat(activityData.amount).toFixed(2)}</p>
          <div className="flex items-center justify-center gap-2 mt-3 text-gray-500">
            {activityData.transaction_type === TransactionTypeEnum.PAYMENT ? (
              <>
                <ArrowUp className="h-5 w-5 text-red-500" />
                <span className="text-red-500">
                  {resolveTransactionType({
                    type: activityData.transaction_type,
                    receiver_id: activityData.receiver_id,
                    sender_id: activityData.sender_id,
                    openedAccountIds: accountNums.map((account) => account.openedaccount_id),
                  })}
                </span>
              </>
            ) : (
              <>
                <ArrowDown className="h-5 w-5 text-green-500" />
                <span className="text-green-500">
                  {resolveTransactionType({
                    type: activityData.transaction_type,
                    receiver_id: activityData.receiver_id,
                    sender_id: activityData.sender_id,
                    openedAccountIds: accountNums.map((account) => account.openedaccount_id),
                  })}
                </span>
              </>
            )}
          </div>
        </div>
        {/* Divider */}
        <div className="border-t border-gray-100"></div>
        {/* Accounts */}
        <div className="grid grid-cols-2 gap-4">
          <div>
            <p className="text-gray-500 text-sm">From Account</p>
            <p className="font-mono mt-1 text-sm">
              {hideAccountNumber(accountNums[0].account_number)}
            </p>
          </div>
          <div>
            <p className="text-gray-500 text-sm">To Account</p>
            <p className="font-mono mt-1 text-sm">{hideAccountNumber("21451231252131")}</p>
          </div>
        </div>
        {/* Transaction Info */}
        <div className="space-y-4">
          <div className="flex justify-between">
            <p className="text-gray-500">Date</p>
            <p>{formatDate(activityData.date_transaction)}</p>
          </div>
          <div className="flex justify-between">
            <p className="text-gray-500">Transaction Fee</p>
            <p className="text-red-500">-₱{parseFloat(activityData.transaction_fee).toFixed(2)}</p>
          </div>
          {activityData.notes && (
            <div className="flex justify-between">
              <p className="text-gray-500">Notes</p>
              <p className="text-right max-w-[200px]">"{activityData.notes}"</p>
            </div>
          )}
        </div>
      </div>
      <div className="bg-gray-50 p-4 border-t border-gray-100 text-center"></div>
    </div>
  );
};

export default ReceiptCard;
