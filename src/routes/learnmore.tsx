import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/learnmore")({
  component: RouteComponent,
});

function RouteComponent() {
  const data = [
    {
      type: "Savings Account",
      values: [
        [
          "🔒 No transactions allowed (view-only).",
          "💼 Ideal for holding funds.",
          "💰 50,000 PHP card withdrawal limit.",
        ],
        [
          "🔒 No transactions allowed (view-only).",
          "🏢 Can link to multiple checking accounts.",
          "💰 100,000 PHP card withdrawal limit.",
        ],
      ],
    },
    {
      type: "Checking Account",
      values: [
        [
          "💸 Transfer & Pay Bills allowed.",
          "📅 Daily transaction limit: 100,000 PHP.",
          "🧾 Used for daily expenses.",
        ],
        [
          "💸 Transfer & Pay Bills allowed.",
          "📅 Daily transaction limit: 250,000 PHP.",
          "🏢 Priority processing and support.",
        ],
      ],
    },
    {
      type: "Credit Account",
      values: [
        [
          "💳 Used for credit payments.",
          "📅 Daily spend limit: 100,000 PHP.",
          "⚠️ Monthly minimum payment required.",
        ],
        [
          "💳 Used for credit payments.",
          "📅 Daily spend limit: 300,000 PHP.",
          "🏦 Access to business credit tools.",
        ],
      ],
    },
  ];

  const accountHeaders = ["Personal Account", "Business Account"];

  return (
    <div className="h-svh lg:h-[70vh] flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="p-4 mb-10 max-w-6xl w-full">
        <h2 className="text-2xl font-bold mb-6 text-gray-800 text-center sm:text-left">
          Account Benefits
        </h2>

        <div className="overflow-x-auto shadow-lg rounded-xl">
          <table className="w-full text-left min-w-[600px]">
            <thead>
              <tr>
                <th className="p-4 text-base sm:text-lg font-semibold text-gray-700 bg-gray-100 rounded-tl-xl sticky left-0 z-10">
                  Account Type
                </th>
                {accountHeaders.map((header, index) => (
                  <th
                    key={index}
                    className={`p-4 text-base sm:text-lg font-semibold text-gray-700 bg-gray-100 whitespace-nowrap ${
                      index === accountHeaders.length - 1 ? "rounded-tr-xl" : ""
                    }`}
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
                  <td className="p-4 font-medium text-gray-600 sticky left-0 bg-inherit min-w-[200px] z-0">
                    {row.type}
                  </td>
                  {row.values.map((val, valIndex) => (
                    <td key={valIndex} className={`p-4 border-l border-gray-200 align-top`}>
                      <ul className="space-y-2 text-sm sm:text-base">
                        {val.map((item, i) => (
                          <li key={i} className="flex items-start">
                            <span className="mr-2">{item.match(/^[^\s]+/)?.[0]}</span>
                            <span>{item.replace(/^[^\s]+/, "")}</span>
                          </li>
                        ))}
                      </ul>
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
