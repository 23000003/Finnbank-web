import logo from "../../../assets/finnbank-logo.png";

const HomeFooter: React.FC = () => {
  return (
    <footer className="w-full border-t border-gray-200 bg-white mt-auto px-4 md:px-12 lg:px-24">
      <div className="mx-auto py-8">
        <div className="flex flex-row items-center gap-6">
          <div className="flex items-center gap-2">
            {/* Replace with your actual logo */}
            <img src={logo} alt="finnbank-logo" className="h-12 w-16" />
            <span className="text-2xl font-semibold text-gray-800">Finnbank</span>
          </div>
        </div>

        <div className="border-t border-gray-200 mt-6 pt-6 text-gray-500 text-sm">
          <p>© 2025 Finnbank. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default HomeFooter;
