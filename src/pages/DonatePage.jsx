import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const DonatePage = () => {
  return (
    <div className="min-h-screen bg-[#dff7fb] flex flex-col">
      <Header />

      <main className="flex-grow pt-20 pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">

            <h1 className="text-4xl md:text-5xl font-serif font-bold text-blue-900 mb-6">
              Donation Bank Details
            </h1>

            <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto mb-12 leading-relaxed">
              Your support transforms lives. Every contribution helps us provide
              essential healthcare, diabetes awareness, and protection for
              vulnerable children.
            </p>

            <div className="grid md:grid-cols-2 gap-8 text-left">
              <div className="bg-white rounded-2xl shadow-lg p-8 border border-blue-100">
                <h2 className="text-2xl font-bold text-blue-900 mb-6">
                  United Bank for Africa (UBA)
                </h2>

                <div className="space-y-5">
                  <div>
                    <p className="text-sm uppercase tracking-wide text-gray-500 font-semibold">
                      Account Name
                    </p>
                    <p className="text-lg text-blue-950 font-semibold">
                      Zainab and Ismail Diabetes and Child Care Initiative
                    </p>
                  </div>

                  <div>
                    <p className="text-sm uppercase tracking-wide text-gray-500 font-semibold">
                      Account Number
                    </p>
                    <p className="text-2xl text-blue-900 font-bold">
                      1029908021
                    </p>
                  </div>

                  <div>
                    <p className="text-sm uppercase tracking-wide text-gray-500 font-semibold">
                      Bank
                    </p>
                    <p className="text-lg text-blue-950 font-semibold">
                      United Bank for Africa (UBA)
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl shadow-lg p-8 border border-blue-100">
                <h2 className="text-2xl font-bold text-blue-900 mb-6">
                  Taj Bank
                </h2>

                <div className="space-y-5">
                  <div>
                    <p className="text-sm uppercase tracking-wide text-gray-500 font-semibold">
                      Account Name
                    </p>
                    <p className="text-lg text-blue-950 font-semibold">
                      Zainab and Ismail Diabetes and Child Care Initiative
                    </p>
                  </div>

                  <div>
                    <p className="text-sm uppercase tracking-wide text-gray-500 font-semibold">
                      Account Number
                    </p>
                    <p className="text-2xl text-blue-900 font-bold">
                      0015156894
                    </p>
                  </div>

                  <div>
                    <p className="text-sm uppercase tracking-wide text-gray-500 font-semibold">
                      Bank
                    </p>
                    <p className="text-lg text-blue-950 font-semibold">
                      Taj Bank
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <p className="text-xl text-blue-900 font-semibold mt-12">
              Thank you for supporting our mission.
            </p>

          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default DonatePage;