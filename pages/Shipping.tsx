import React from 'react';

export const Shipping: React.FC = () => {
  return (
    <div className="bg-white min-h-screen pb-24">
      <div className="max-w-3xl mx-auto px-6 py-24">
        <div className="text-center mb-16">
          <h1 className="font-serif text-4xl mb-6">Shipping & Returns</h1>
          <div className="w-12 h-0.5 bg-luxury-gold mx-auto"></div>
        </div>

        <div className="space-y-16">
          {/* Shipping */}
          <section className="animate-fade-in">
            <h2 className="font-serif text-2xl mb-6">Shipping Policy</h2>
            <div className="prose prose-slate max-w-none text-gray-600 font-light leading-relaxed">
              <p className="mb-4">
                We offer complimentary express shipping on all orders over $500. For orders under this amount, a flat rate shipping fee will be applied at checkout. All orders are processed within 1-2 business days, Monday through Friday, excluding holidays.
              </p>
              <p>
                Once your order has been shipped, you will receive a confirmation email with a tracking number. Please note that a signature is required upon delivery for all orders over $1,000 to ensure the security of your purchase.
              </p>
              
              <div className="mt-8 bg-luxury-cream p-6 rounded-sm">
                <h3 className="text-sm font-bold uppercase tracking-widest mb-4 text-black">Estimated Delivery Times</h3>
                <ul className="space-y-2 text-sm">
                  <li className="flex justify-between border-b border-gray-200 pb-2">
                    <span>Domestic Standard</span>
                    <span>3-5 Business Days</span>
                  </li>
                  <li className="flex justify-between border-b border-gray-200 pb-2">
                    <span>Domestic Express</span>
                    <span>1-2 Business Days</span>
                  </li>
                  <li className="flex justify-between pb-2">
                    <span>International Express</span>
                    <span>3-7 Business Days</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* International */}
          <section className="animate-fade-in">
            <h2 className="font-serif text-2xl mb-6">International Shipping</h2>
            <div className="prose prose-slate max-w-none text-gray-600 font-light leading-relaxed">
              <p>
                We ship to over 80 countries worldwide. International orders are shipped via DHL Express.
              </p>
              <p className="mt-4">
                <strong>Duties & Taxes:</strong> For most major destinations, we ship on a DDP (Delivery Duty Paid) basis, meaning all import taxes and duties are included in the final price at checkout. If your country is not eligible for DDP, you will be responsible for paying any applicable duties upon delivery.
              </p>
            </div>
          </section>

          {/* Returns */}
          <section className="animate-fade-in">
            <h2 className="font-serif text-2xl mb-6">Returns & Exchanges</h2>
            <div className="prose prose-slate max-w-none text-gray-600 font-light leading-relaxed">
              <p className="mb-4">
                We want you to be completely satisfied with your purchase. If for any reason you are not, we accept returns of unworn, unwashed, and undamaged items with original tags attached within 30 days of delivery.
              </p>
              <p className="mb-4">
                To initiate a return, please visit our Returns Portal using your order number and email address. A prepaid shipping label will be generated for domestic orders. A return fee of $10 will be deducted from your refund to cover restocking and processing.
              </p>
              <ul className="list-disc pl-5 space-y-2 mt-4">
                <li>Footwear must be returned in the original shoe box without damage.</li>
                <li>Beauty and fragrance items must be unopened.</li>
                <li>Final Sale items are not eligible for return or exchange.</li>
              </ul>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};