const HomeFooter: React.FC = () => {
  return (
    <footer className="w-full border-t border-gray-200 bg-white mt-auto px-4 md:px-12 lg:px-24">
      <div className="mx-auto py-8">
        <div className="flex flex-row items-center gap-6">
          <div className="flex items-center gap-2">
            {/* Replace with your actual logo */}
            <div className="w-8 h-8 bg-blue-500 rounded-full"></div>
            <span className="text-2xl font-semibold text-gray-800">Finnbank</span>
          </div>

          <div className="flex flex-row gap-8 text-gray-600">
            <a href="#" className="hover:text-blue-500 transition-colors">
              Help
            </a>
            <a href="#" className="hover:text-blue-500 transition-colors">
              Contact Us
            </a>
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
