import React from 'react';
import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="w-full py-4 px-6 md:px-12 flex justify-between items-center bg-white/80 backdrop-blur-md sticky top-0 z-50 border-b border-gray-100">
      <div className="flex items-center gap-2">
        <span className="text-2xl font-bold text-blue-600">CampusPe</span>
      </div>
      
      <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-700">
        <a href="#" className="hover:text-blue-600 transition-colors">Colleges</a>
        <a href="#" className="hover:text-blue-600 transition-colors">Employers</a>
        <a href="#" className="hover:text-blue-600 transition-colors">Jobs</a>
        <a href="#" className="hover:text-blue-600 transition-colors">Blogs</a>
      </nav>

      <div className="flex items-center gap-4">
        <a href="#" className="text-sm font-medium text-gray-700 hover:text-blue-600 hidden sm:block">Sign In</a>
        <Button className="bg-blue-600 hover:bg-blue-700 text-white rounded-full px-6">Sign Up</Button>
      </div>
    </header>
  );
};

export default Header;