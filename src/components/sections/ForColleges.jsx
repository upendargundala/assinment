import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight } from 'lucide-react';

const ForColleges = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-16">
          <div className="w-full lg:w-1/3 space-y-8 lg:sticky lg:top-24 h-fit">
            <Badge variant="outline" className="text-blue-600 border-blue-200 bg-blue-50 px-3 py-1 text-sm">• 02 • FOR COLLEGES</Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">Get Discovered<br />by <span className="text-blue-600">Students and Recruiters.</span></h2>
            <p className="text-lg text-gray-600">Put your college in front of students searching for the right course and recruiters looking for the right talent. CampusPe helps you build your presence, attract enquiries and connect with opportunities.</p>
            <Button className="bg-blue-600 hover:bg-blue-700 text-white rounded-full px-8 py-6 text-lg shadow-lg">List Your College <ArrowRight className="w-5 h-5 ml-2" /></Button>
          </div>
          <div className="w-full lg:w-2/3 space-y-6">
            {[
              { num: '01', tag: 'VERIFIED PROFILE', title: 'Build your college profile', desc: 'Showcase your college, courses, fees, campus, placements and achievements in one structured profile.', badge: 'NAAC A++ Ready', badgeColor: 'bg-green-50 text-green-700 border-green-200' },
              { num: '02', tag: 'DIRECT ENROLL', title: 'Students discover and connect', desc: 'Students searching for colleges can discover your profile, explore your courses and fees, and connect directly.', badge: 'Direct Enquiries', badgeColor: 'bg-blue-50 text-blue-700 border-blue-200' },
              { num: '03', tag: 'CAMPUS RECRUITING', title: 'Recruiters discover your College', desc: 'Companies hiring fresh talent can discover your college, explore your talent and connect with your placement team.', badge: '500+ Hiring Partners', badgeColor: 'bg-purple-50 text-purple-700 border-purple-200' },
              { num: '04', tag: 'LIVE HUD', title: 'Track placements in real time', desc: 'Track students, interviews, offers and placements from one single dashboard.', badge: '• LIVE PLACEMENTS', badgeColor: 'bg-red-50 text-red-700 border-red-200' },
            ].map((item, i) => (
              <Card key={i} className="border-0 shadow-sm hover:shadow-md transition-shadow bg-white">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center text-blue-600 font-bold text-sm">{item.num}</div>
                    <div className="flex-1">
                      <div className="flex justify-between items-start mb-2">
                        <div><span className="text-xs font-semibold text-gray-400 tracking-wider">{item.tag}</span><h4 className="text-xl font-bold text-gray-900 mt-1">{item.title}</h4></div>
                        <Badge variant="outline" className={`text-xs ${item.badgeColor}`}>{item.badge}</Badge>
                      </div>
                      <p className="text-gray-500">{item.desc}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ForColleges;