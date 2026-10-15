import React from 'react';

const AppInterface = () => {
  return (
    <section className="py-24 bg-gray-50 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-blue-600 mb-6">Checkout Our App Interface Look</h2>
          <p className="text-lg text-gray-600">Experience the power of a unified campus ecosystem right in your pocket.</p>
        </div>
        <div className="flex flex-wrap justify-center gap-8 md:gap-4 lg:gap-8">
          {[1, 2, 3, 4, 5].map((id, i) => (
            <div key={id} className={`relative w-[200px] h-[400px] rounded-[2.5rem] border-8 border-gray-800 bg-white overflow-hidden shadow-2xl transition-transform hover:scale-105 duration-300 ${i % 2 === 0 ? 'mt-8' : '-mt-8'}`}>
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-6 bg-gray-800 rounded-b-2xl z-20"></div>
              <div className="p-4 pt-10 h-full flex flex-col bg-gray-50">
                <div className="w-full h-24 bg-white rounded-xl shadow-sm mb-4"></div>
                <div className="w-full h-24 bg-white rounded-xl shadow-sm mb-4"></div>
                <div className="w-full h-24 bg-white rounded-xl shadow-sm mb-4"></div>
                <div className="mt-auto flex justify-around bg-white p-2 rounded-xl shadow-sm">
                  {[1, 2, 3, 4].map(dot => <div key={dot} className="w-6 h-6 rounded-full bg-gray-200"></div>)}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AppInterface;