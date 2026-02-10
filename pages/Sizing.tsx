import React from 'react';

export const Sizing: React.FC = () => {
  return (
    <div className="bg-white min-h-screen pb-24">
      <div className="max-w-5xl mx-auto px-6 py-24">
        <div className="text-center mb-16">
          <h1 className="font-serif text-4xl mb-6">Sizing Guide</h1>
          <p className="text-gray-500 font-light max-w-2xl mx-auto">
            Use the charts below to determine your size. If you are between sizes, we recommend sizing up for a more relaxed fit.
          </p>
        </div>

        <div className="space-y-20">
          {/* Ready to Wear */}
          <section className="animate-fade-in">
            <h2 className="font-serif text-2xl mb-8">Ready to Wear</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm text-left">
                <thead className="text-xs text-gray-500 uppercase bg-luxury-cream">
                  <tr>
                    <th className="px-6 py-4 font-bold tracking-widest">Size</th>
                    <th className="px-6 py-4 font-bold tracking-widest">US</th>
                    <th className="px-6 py-4 font-bold tracking-widest">UK</th>
                    <th className="px-6 py-4 font-bold tracking-widest">IT</th>
                    <th className="px-6 py-4 font-bold tracking-widest">FR</th>
                    <th className="px-6 py-4 font-bold tracking-widest">Bust (in)</th>
                    <th className="px-6 py-4 font-bold tracking-widest">Waist (in)</th>
                    <th className="px-6 py-4 font-bold tracking-widest">Hips (in)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  <tr>
                    <td className="px-6 py-4 font-bold">XS</td>
                    <td className="px-6 py-4">0-2</td>
                    <td className="px-6 py-4">4-6</td>
                    <td className="px-6 py-4">36-38</td>
                    <td className="px-6 py-4">32-34</td>
                    <td className="px-6 py-4">31-32</td>
                    <td className="px-6 py-4">24-25</td>
                    <td className="px-6 py-4">34-35</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 font-bold">S</td>
                    <td className="px-6 py-4">4-6</td>
                    <td className="px-6 py-4">8-10</td>
                    <td className="px-6 py-4">40</td>
                    <td className="px-6 py-4">36</td>
                    <td className="px-6 py-4">33-34</td>
                    <td className="px-6 py-4">26-27</td>
                    <td className="px-6 py-4">36-37</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 font-bold">M</td>
                    <td className="px-6 py-4">8-10</td>
                    <td className="px-6 py-4">12-14</td>
                    <td className="px-6 py-4">42</td>
                    <td className="px-6 py-4">38</td>
                    <td className="px-6 py-4">35-36</td>
                    <td className="px-6 py-4">28-29</td>
                    <td className="px-6 py-4">38-39</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 font-bold">L</td>
                    <td className="px-6 py-4">12-14</td>
                    <td className="px-6 py-4">16</td>
                    <td className="px-6 py-4">44</td>
                    <td className="px-6 py-4">40</td>
                    <td className="px-6 py-4">37-39</td>
                    <td className="px-6 py-4">30-31</td>
                    <td className="px-6 py-4">40-41</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 font-bold">XL</td>
                    <td className="px-6 py-4">16</td>
                    <td className="px-6 py-4">18</td>
                    <td className="px-6 py-4">46</td>
                    <td className="px-6 py-4">42</td>
                    <td className="px-6 py-4">40-42</td>
                    <td className="px-6 py-4">32-34</td>
                    <td className="px-6 py-4">42-44</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Shoes */}
          <section className="animate-fade-in">
            <h2 className="font-serif text-2xl mb-8">Footwear</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm text-left">
                <thead className="text-xs text-gray-500 uppercase bg-luxury-cream">
                  <tr>
                    <th className="px-6 py-4 font-bold tracking-widest">IT / EU</th>
                    <th className="px-6 py-4 font-bold tracking-widest">US</th>
                    <th className="px-6 py-4 font-bold tracking-widest">UK</th>
                    <th className="px-6 py-4 font-bold tracking-widest">CM</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  <tr>
                    <td className="px-6 py-4 font-bold">35</td>
                    <td className="px-6 py-4">5</td>
                    <td className="px-6 py-4">2</td>
                    <td className="px-6 py-4">22.5</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 font-bold">36</td>
                    <td className="px-6 py-4">6</td>
                    <td className="px-6 py-4">3</td>
                    <td className="px-6 py-4">23</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 font-bold">37</td>
                    <td className="px-6 py-4">7</td>
                    <td className="px-6 py-4">4</td>
                    <td className="px-6 py-4">24</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 font-bold">38</td>
                    <td className="px-6 py-4">8</td>
                    <td className="px-6 py-4">5</td>
                    <td className="px-6 py-4">24.5</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 font-bold">39</td>
                    <td className="px-6 py-4">9</td>
                    <td className="px-6 py-4">6</td>
                    <td className="px-6 py-4">25.5</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 font-bold">40</td>
                    <td className="px-6 py-4">10</td>
                    <td className="px-6 py-4">7</td>
                    <td className="px-6 py-4">26</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 font-bold">41</td>
                    <td className="px-6 py-4">11</td>
                    <td className="px-6 py-4">8</td>
                    <td className="px-6 py-4">27</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Measuring Guide */}
          <section className="bg-luxury-cream p-8 md:p-12 animate-fade-in">
             <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
               <div>
                 <h2 className="font-serif text-2xl mb-6">How to Measure</h2>
                 <ul className="space-y-4 text-sm text-gray-600 font-light">
                   <li>
                     <strong className="block text-black font-bold uppercase text-xs tracking-widest mb-1">Bust</strong>
                     Measure around the fullest part of your bust, keeping the tape horizontal.
                   </li>
                   <li>
                     <strong className="block text-black font-bold uppercase text-xs tracking-widest mb-1">Waist</strong>
                     Measure around the narrowest part (typically your small back), keeping the tape horizontal.
                   </li>
                   <li>
                     <strong className="block text-black font-bold uppercase text-xs tracking-widest mb-1">Hips</strong>
                     Measure around the widest part of your hips, keeping the tape horizontal.
                   </li>
                 </ul>
               </div>
               <div className="flex justify-center">
                  {/* Placeholder for illustration */}
                  <div className="w-full max-w-xs aspect-[3/4] border border-gray-300 flex items-center justify-center bg-white text-gray-300">
                    <span className="font-serif italic">Measurement Illustration</span>
                  </div>
               </div>
             </div>
          </section>
        </div>
      </div>
    </div>
  );
};