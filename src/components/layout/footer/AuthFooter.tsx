import { Link } from '@tanstack/react-router'

export default function AuthFooter() {
  return (
    <div className="pt-6 border-t border-gray-200 max-w-md w-full">
      <div className="flex justify-center space-x-6 mb-4">
        <a href="#" className="text-gray-400 hover:text-gray-500">
          <img 
            src="https://img.icons8.com/ios-filled/50/000000/facebook-new.png" 
            alt="facebook" 
            className="h-6 w-6"
          />
        </a>
        <a href="#" className="text-gray-400 hover:text-gray-500">
          <img 
            src="https://img.icons8.com/ios-filled/50/000000/twitter.png" 
            alt="twitter" 
            className="h-6 w-6"
          />
        </a>
        <a href="#" className="text-gray-400 hover:text-gray-500">
          <img 
            src="https://img.icons8.com/ios-filled/50/000000/linkedin.png" 
            alt="linkedin" 
            className="h-6 w-6"
          />
        </a>
      </div>
      
      <div className="flex justify-center space-x-4 text-xs text-gray-500">
        <Link to="/welcome" className="hover:text-gray-600">Terms of Service</Link>
        <Link to="/welcome" className="hover:text-gray-600">Privacy Policy</Link>
      </div>
      
      <p className="mt-4 text-center text-xs text-gray-500">
        © {new Date().getFullYear()} Finnbank. All rights reserved.
      </p>
    </div>
  )
}
