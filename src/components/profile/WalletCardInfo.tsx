export default function WalletCardInfo() {
  return (
    <div className="flex flex-col mx-24 gap-8">
      <img
        src="https://pics.paypal.com//00/s/OTY5WDE1MzZYUE5H/p/MGEzZWI5MTktMmUzOS00YjU1LTk5ZmEtNjUwYzQ0OGFmMjBl/image__140.png"
        alt="debit-card"
        className="w-90 h-50 rounded-2xl shadow-lg"
      />
      <div className="flex flex-col">
        <span className="font-bold font-mono text-lg text-blue-600">Debit Card</span>
        <span className="font-mono">Finnbank Debit • Card No. ••4215</span>
      </div>
      <div className="flex flex-col">
        <span className="font-bold font-mono text-lg text-blue-600">Issued Date</span>
        <span className="font-mono">09/25</span>
      </div>
      <div className="flex flex-col">
        <span className="font-bold font-mono text-lg text-blue-600">Expiration date</span>
        <span className="font-mono">09/29</span>
      </div>
      <div className="flex flex-col">
        <span className="font-bold font-mono text-lg text-blue-600">CVV</span>
        <span className="font-mono">123</span>
      </div>
    </div>
  );
}
