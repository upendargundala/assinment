import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight } from 'lucide-react';

const ForEmployers = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-16">
          <div className="w-full lg:w-1/3 space-y-8 lg:sticky lg:top-24 h-fit">
            <Badge variant="outline" className="text-blue-600 border-blue-200 bg-blue-50 px-3 py-1 text-sm">• 03 • FOR EMPLOYERS</Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">Stop running<br />campus drives.<br /><span className="text-blue-600">Start hiring the right people.</span></h2>
            <p className="text-lg text-gray-600">Post a role in minutes and reach relevant candidates without the time, travel and coordination of traditional hiring.</p>
            <Button className="bg-blue-600 hover:bg-blue-700 text-white rounded-full px-8 py-6 text-lg shadow-lg">Post a Job <ArrowRight className="w-5 h-5 ml-2" /></Button>
          </div>
          <div className="w-full lg:w-2/3 space-y-6">
            {[
              { num: '01', title: 'Post a role in minutes', desc: 'Define your skills, location and hiring requirements. Reach relevant candidates across the CampusPe network.', badges: ['5 Min Deployment', '500+ Campus Network'] },
              { num: '02', title: 'Receive a matched shortlist', desc: 'Get candidates matched to your role by skills, experience, location and hiring requirements.', badges: ['Zero CV Clutter', 'Tier 1-Tier 3 Parity'] },
              { num: '03', title: 'Connect with candidates directly', desc: 'Message, schedule interviews, and move candidates through your pipeline — all in one place.', badges: ['In-App Scheduling', '1-Click Video / Chat'] },
              { num: '04', title: 'Reduce your time-to-hire', desc: 'Find matched candidates, connect with them and move from shortlist to offer in one streamlined workflow.', badges: ['< 2 DAYS', '57% Faster Hiring'], highlight: true },
            ].map((item, i) => (
              <Card key={i} className={`border-0 shadow-sm hover:shadow-md transition-shadow bg-white ${item.highlight ? 'border-l-4 border-l-green-500' : ''}`}>
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center text-blue-600 font-bold text-sm">{item.num}</div>
                    <div className="flex-1">
                      <div className="flex justify-between items-start mb-2">
                        <div className="flex items-center gap-2"><h4 className="text-xl font-bold text-gray-900">{item.title}</h4><Badge variant="secondary" className="text-[10px] bg-blue-50 text-blue-600">INSTANT SETUP</Badge></div>
                      </div>
                      <p className="text-gray-500">{item.desc}</p>
                      <div className="flex flex-wrap gap-2 mt-4">
                        {item.badges.map((badge, j) => (
                          <Badge key={j} variant="outline" className={`text-xs ${item.highlight && j === 0 ? 'bg-blue-600 text-white border-blue-600' : 'bg-gray-50 text-gray-600'}`}>{badge}</Badge>
                        ))}
                      </div>
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

export default ForEmployers;