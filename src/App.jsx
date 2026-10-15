import React from 'react';
import Header from './components/sections/Header';
import HeroSection from './components/sections/HeroSection';
import StatsSection from './components/sections/StatsSection';
import OpportunityFeed from './components/sections/OpportunityFeed';
import ResumeUpload from './components/sections/ResumeUpload';
import ForColleges from './components/sections/ForColleges';
import ForEmployers from './components/sections/ForEmployers';
import AppInterface from './components/sections/AppInterface';
import Footer from './components/sections/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white font-sans antialiased text-gray-900">
      <Header />
      <main>
        <HeroSection />
        <StatsSection />
        <OpportunityFeed />
        <ResumeUpload />
        <ForColleges />
        <ForEmployers />
        <AppInterface />
      </main>
      <Footer />
    </div>
  );
}

export default App;