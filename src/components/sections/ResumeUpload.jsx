import React from 'react';
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Upload, CheckCircle2, Zap, ShieldCheck, Search } from 'lucide-react';

const ResumeUpload = () => {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-100 px-4 py-1.5 rounded-full mb-6">
            <span className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></span>
            <span className="text-sm font-medium text-blue-700">TRY IT LIVE</span>
            <span className="text-xs text-gray-400 border-l border-gray-300 pl-2">v2.4 AI Engine</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">Upload your resume.<br /><span className="text-blue-600">Find jobs that fit.</span></h2>
          <p className="text-lg text-gray-600">Upload once. CampusPe reads your skills, experience, and preferences — then finds relevant jobs across 1,000+ sources.</p>
        </div>
        <div className="max-w-3xl mx-auto relative">
          <Card className="border-2 border-dashed border-blue-200 bg-blue-50/30 rounded-3xl p-12 text-center hover:bg-blue-50/50 transition-colors cursor-pointer group">
            <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm group-hover:scale-110 transition-transform"><Upload className="w-8 h-8 text-blue-600" /></div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Upload your resume</h3>
            <p className="text-gray-500 mb-6">PDF, DOC, or DOCX · Up to 10MB</p>
            <Button className="bg-blue-600 hover:bg-blue-700 text-white rounded-full px-8 py-6 text-lg shadow-lg">Upload resume <Upload className="w-5 h-5 ml-2" /></Button>
            <p className="text-sm text-gray-400 mt-4">or drag and drop your file here</p>
          </Card>
          <div className="absolute -left-12 top-1/4 bg-white p-3 rounded-xl shadow-lg border border-gray-100 flex items-center gap-3 animate-bounce">
            <div className="bg-green-100 p-2 rounded-lg"><Zap className="w-5 h-5 text-green-600" /></div>
            <div><p className="text-sm font-bold text-gray-900">98% Match Rate</p><p className="text-[10px] text-gray-500">AI semantic rank</p></div>
          </div>
          <div className="absolute -right-12 bottom-1/4 bg-white p-3 rounded-xl shadow-lg border border-gray-100 flex items-center gap-3">
            <div className="bg-orange-100 p-2 rounded-lg"><ShieldCheck className="w-5 h-5 text-orange-600" /></div>
            <div><p className="text-sm font-bold text-gray-900">ATS Compliant</p><p className="text-[10px] text-gray-500">Standardized parser</p></div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-16 max-w-5xl mx-auto">
          {[
            { icon: CheckCircle2, title: 'Resume analyzed', desc: 'Ready in 4s', color: 'text-green-500' },
            { icon: CheckCircle2, title: 'Skills matched', desc: 'Deep taxonomy', color: 'text-blue-500' },
            { icon: CheckCircle2, title: 'Experience matched', desc: 'Contextual seniority', color: 'text-purple-500' },
            { icon: Search, title: '1,000+ sources searched', desc: 'Real-time aggregators', color: 'text-orange-500' },
          ].map((step, i) => (
            <div key={i} className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm flex items-center gap-3">
              <step.icon className={`w-6 h-6 ${step.color} flex-shrink-0`} />
              <div><p className="text-sm font-semibold text-gray-900">{step.title}</p><p className="text-xs text-gray-500">{step.desc}</p></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ResumeUpload;