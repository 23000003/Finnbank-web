import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/welcome/learnmore")({
  component: RouteComponent,
});

function RouteComponent() {
  const data = [
    {
      type: "Purpose",
      values: [
        "Primarily for storing funds and limited access",
        "Everyday spending and bill management",
        "For borrowing, paying off, or managing credit use",
      ],
    },
    {
      type: "Allowed Actions",
      values: [
        [
          "✅ Receive deposits from other accounts",
          "✅ Withdraw to credit card (cash-out only, not transfer)",
        ],
        [
          "✅ Pay bills",
          "✅ Transfer to any account (except blocked savings direction)",
          "✅ Receive salary, deposits from other accounts",
          "✅ ATM withdrawals (if part of design)",
        ],
        [
          "✅ Pay bills",
          "✅ Transfer funds (to vendors or other linked accounts)",
          "✅ Receive payments (loan top-ups, salary if enabled)",
        ],
      ],
    },
    {
      type: "Not Allowed",
      values: [
        [
          "❌ Pay bills",
          "❌ Transfer to other accounts directly",
          "❌ Receive direct deposits from employers (optional)",
        ],
        ["🚫 Cannot loan money or go negative (unless overdraft enabled)"],
        ["🚫 Cannot receive transfers from Savings"],
      ],
    },
    {
      type: "Limits & Rules",
      values: [
        [
          "💸 Withdrawal limit: Max 50,000 per day",
          "🛑 No withdrawal to other bank accounts (only to linked credit card)",
          "♾️ No cap on how much the account can hold",
        ],
        [
          "💵 Daily spend limit (e.g., 100,000/day for security)",
          "🧾 Optional: Require 500 minimum balance",
        ],
        [
          "🏦 Credit limit: Set per user (e.g., 200,000 total)",
          "💰 Cash advance fee if transferring to checking or paying bills",
          "⚠️ Minimum monthly payment enforced",
        ],
      ],
    },
    {
      type: "Extra Features",
      values: [
        [
          "✨ Add interest accrual over time",
          "⏳ Add a cool-down period between large withdrawals",
        ],
        [
          "🔔 Instant transaction notifications",
          "📊 Budget setting based on spending patterns",
          '🔄 Linked auto-transfer to savings ("Save the Change" type feature)',
        ],
        [
          "💳 Interest applies only on used credit",
          "🎨 Balance usage color indicators (e.g., Green/Yellow/Red)",
          "📈 Spending categories dashboard",
        ],
      ],
    },
  ];

  const accountHeaders = ["Savings Account", "Checking Account", "Credit Account"];
  const accountColors = ["bg-blue-50", "bg-green-50", "bg-purple-50"];

  return (
    <div className="p-4 max-w-6xl mx-auto">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">Account Features and Rules</h2>

      <div className="overflow-x-auto shadow-lg rounded-xl">
        <table className="w-full text-left">
          <thead>
            <tr>
              <th className="p-4 text-lg font-semibold text-gray-700 bg-gray-100 rounded-tl-xl sticky left-0">
                Category
              </th>
              {accountHeaders.map((header, index) => (
                <th
                  key={index}
                  className={`p-4 text-lg font-semibold text-gray-700 ${accountColors[index]} ${index === accountHeaders.length - 1 ? "rounded-tr-xl" : ""}`}
                >
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.map((row, rowIndex) => (
              <tr
                key={rowIndex}
                className={`border-t ${rowIndex % 2 === 0 ? "bg-white" : "bg-gray-50"}`}
              >
                <td className="p-4 font-medium text-gray-600 sticky left-0 bg-inherit min-w-[200px]">
                  {row.type}
                </td>
                {row.values.map((val, valIndex) => (
                  <td
                    key={valIndex}
                    className={`p-4 ${accountColors[valIndex]} border-l border-gray-200`}
                  >
                    {Array.isArray(val) ? (
                      <ul className="space-y-2">
                        {val.map((item, i) => (
                          <li key={i} className="flex items-start">
                            <span className="mr-2">{item.match(/^[^\s]+/)?.[0]}</span>
                            <span>{item.replace(/^[^\s]+/, "")}</span>
                          </li>
                        ))}
                      </ul>
                    ) : (
                      <div>{val}</div>
                    )}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mt-8 p-4 bg-gray-50 rounded-lg">
        <h3 className="text-lg font-semibold mb-2 text-gray-700">Key to Symbols</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="flex items-center">
            <span className="mr-2">✅</span>
            <span>Allowed</span>
          </div>
          <div className="flex items-center">
            <span className="mr-2">❌</span>
            <span>Not Allowed</span>
          </div>
          <div className="flex items-center">
            <span className="mr-2">🚫</span>
            <span>Restricted</span>
          </div>
          <div className="flex items-center">
            <span className="mr-2">✨</span>
            <span>Special Feature</span>
          </div>
        </div>
      </div>
    </div>
  );
}
