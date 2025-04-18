export default function WalletCards() {
  return (
    <div className="flex flex-col mx-24 gap-8">
      <h1 className="text-2xl font-bold">Wallet Account</h1>
      {/* Debit Card */}
      <div className="flex flex-row items-center gap-4 border-2 border-blue-600 p-5 rounded-2xl w-fit">
        <img
          src="https://pics.paypal.com//00/s/OTY5WDE1MzZYUE5H/p/MGEzZWI5MTktMmUzOS00YjU1LTk5ZmEtNjUwYzQ0OGFmMjBl/image__141.png"
          alt="debit-card"
          className="w-15 h-10 rounded-lg"
        />
        <div className="flex flex-col">
          <span className="font-bold font-mono text-lg text-blue-600">Debit Card</span>
          <p className="font-mono">Card No. ••4215</p>
        </div>
      </div>
      {/* Credit Card */}
      <div className="flex flex-row items-center gap-4 p-5 border-2 rounded-2xl w-fit border-transparent">
        <img
          src="https://pics.paypal.com//00/s/OTY5WDE1MzZYUE5H/p/MGEzZWI5MTktMmUzOS00YjU1LTk5ZmEtNjUwYzQ0OGFmMjBl/image__141.png"
          alt="credit-card"
          className="w-15 h-10 rounded-lg"
        />
        <div className="flex flex-col">
          <span className="font-semibold text-lg font-mono">Credit Card</span>
          <p className="font-mono">Card No. ••4215</p>
        </div>
      </div>
    </div>
  );
}
