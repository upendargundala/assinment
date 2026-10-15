import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion } from 'framer-motion';
import { GraduationCap, Briefcase, Search, MessageCircle, FileText, CheckCircle2, ArrowRight, Sparkles } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative w-full pt-20 pb-16 overflow-hidden bg-gradient-to-b from-white via-white to-blue-50/30">
      <div className="container mx-auto px-4 relative z-10">
        {/* Top Badges Row */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6 mb-12">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="bg-white/80 backdrop-blur-sm border border-blue-100 p-4 rounded-2xl shadow-sm w-full lg:w-72">
            <div className="flex items-center gap-2 mb-2">
              <div className="bg-green-100 p-1.5 rounded-full"><MessageCircle className="w-4 h-4 text-green-600" /></div>
              <span className="text-sm font-semibold text-gray-800">WhatsApp Alert</span>
            </div>
            <p className="text-xs text-gray-500">Get notified on whatsapp</p>
          </motion.div>

          <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5, delay: 0.2 }} className="flex items-center gap-2 bg-blue-50 border border-blue-100 px-4 py-2 rounded-full">
            <Sparkles className="w-4 h-4 text-blue-600" />
            <span className="text-sm font-medium text-blue-700">AI-Powered Campus Assistant</span>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 }} className="bg-white/80 backdrop-blur-sm border border-purple-100 p-4 rounded-2xl shadow-sm w-full lg:w-72">
            <div className="flex items-center gap-2 mb-2">
              <div className="bg-purple-100 p-1.5 rounded-full"><FileText className="w-4 h-4 text-purple-600" /></div>
              <span className="text-sm font-semibold text-gray-800">Resume Builder</span>
            </div>
            <p className="text-xs text-gray-500">Build Your Resume</p>
          </motion.div>
        </div>

        {/* Main Headline */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }} className="text-5xl md:text-7xl font-bold text-gray-900 tracking-tight mb-6">
            Connect <span className="text-blue-600">10X Faster.</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.4 }} className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
            One platform connecting students, colleges & employers — faster.
          </motion.p>
        </div>

        {/* Search CTA Section */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-6 mb-20">
          <div className="flex items-center gap-4 bg-white p-2 rounded-full shadow-sm border border-gray-100">
            <div className="flex -space-x-2">
              {[1, 2, 3].map((i) => (
                <div key={i} className="w-8 h-8 rounded-full bg-blue-100 border-2 border-white flex items-center justify-center text-xs font-bold text-blue-600">{String.fromCharCode(64 + i)}</div>
              ))}
            </div>
            <div className="flex items-center gap-2 pr-4">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
              <span className="text-sm font-medium text-gray-700">142 students matched today</span>
            </div>
          </div>
          
          <div className="flex items-center gap-2 text-blue-600 font-semibold text-lg">
            <Sparkles className="w-5 h-5" /><span>What are you looking for?</span><Sparkles className="w-5 h-5" />
          </div>

          <div className="flex items-center gap-3 bg-white p-2 pr-4 rounded-full shadow-sm border border-gray-100">
            <div className="bg-blue-100 p-1.5 rounded-full"><Briefcase className="w-4 h-4 text-blue-600" /></div>
            <div>
              <p className="text-xs font-bold text-gray-800">Radiant Info</p>
              <p className="text-[10px] text-gray-500">shortlisted 8 interns</p>
            </div>
          </div>
        </div>

        {/* 3 Main Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1: College */}
          <motion.div whileHover={{ y: -5 }} className="h-full">
            <Card className="h-full border-blue-100 shadow-lg relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-4"><Badge variant="outline" className="text-blue-600 border-blue-200 bg-blue-50">Coming Soon</Badge></div>
              <CardHeader>
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-4 group-hover:bg-blue-600 transition-colors"><GraduationCap className="w-6 h-6 text-blue-600 group-hover:text-white transition-colors" /></div>
                <CardTitle>College</CardTitle>
                <CardDescription>Explore colleges, courses, fees, placements & more</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-3">
                  {['Search by course, location, fees', 'Connect directly with colleges', 'Improve student placements'].map((item, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-gray-600"><CheckCircle2 className="w-4 h-4 text-green-500" /> {item}</li>
                  ))}
                </ul>
                <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white mt-4">Join Waitlist <ArrowRight className="w-4 h-4 ml-2" /></Button>
              </CardContent>
            </Card>
          </motion.div>

          {/* Card 2: Looking for a Job */}
          <motion.div whileHover={{ y: -5 }} className="h-full">
            <Card className="h-full border-blue-200 shadow-xl relative overflow-hidden group bg-gradient-to-b from-white to-blue-50/20">
              <div className="absolute top-0 right-0 p-4"><Badge variant="outline" className="text-green-600 border-green-200 bg-green-50">Available Now</Badge></div>
              <CardHeader>
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-4 group-hover:bg-blue-600 transition-colors"><Search className="w-6 h-6 text-blue-600 group-hover:text-white transition-colors" /></div>
                <CardTitle>I'm Looking for a Job</CardTitle>
                <CardDescription>Upload your resume. We'll find jobs that fit you.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-3">
                  {['Jobs from 1000+ sources', 'AI powered matching', 'WhatsApp & email alerts'].map((item, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-gray-600"><CheckCircle2 className="w-4 h-4 text-green-500" /> {item}</li>
                  ))}
                </ul>
                <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white mt-4">Explore Jobs <ArrowRight className="w-4 h-4 ml-2" /></Button>
              </CardContent>
            </Card>
          </motion.div>

          {/* Card 3: Hiring */}
          <motion.div whileHover={{ y: -5 }} className="h-full">
            <Card className="h-full border-blue-100 shadow-lg relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-4"><Badge variant="outline" className="text-blue-600 border-blue-200 bg-blue-50">Coming Soon</Badge></div>
              <CardHeader>
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-4 group-hover:bg-blue-600 transition-colors"><Briefcase className="w-6 h-6 text-blue-600 group-hover:text-white transition-colors" /></div>
                <CardTitle>I'm Hiring</CardTitle>
                <CardDescription>Connect with colleges and find candidates.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-3">
                  {['Connect directly with colleges', 'Find the right candidates', 'Simplify your hiring'].map((item, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-gray-600"><CheckCircle2 className="w-4 h-4 text-green-500" /> {item}</li>
                  ))}
                </ul>
                <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white mt-4">Join Waitlist <ArrowRight className="w-4 h-4 ml-2" /></Button>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;