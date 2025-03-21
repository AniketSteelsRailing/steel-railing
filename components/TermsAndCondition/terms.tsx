import { Metadata } from 'next';
import React from 'react';

export const metadata :Metadata = {
  title:"Terms and Condition"
}

const Terms: React.FC = () => {
  return (
    <div className="bg-gray-50 py-10 px-6 md:px-16 lg:px-24">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-3xl font-bold text-textColor mb-8 text-center">Terms and Conditions</h1>
        <h2 className="text-textColor mb-10 text-center">When you use our services, including requesting a quote or signing a contract, you accept and agree to these Terms and Conditions. This includes agreeing to our pricing, payment schedules, timelines, warranties, and your responsibilities as a client. If you do not agree, please do not use our services.</h2>

        <div className="mb-8">
          <ol className="space-y-4 text-gray-600 list-decimal list-inside pl-4">
            <h2 className="font-semibold text-textColor mb-4">
              1. Our Services
            </h2>
            <ul className="space-y-4 text-textColor list-disc list-inside pl-4">
              <li>We provide custom railings, window, gate solutions, and other related services for homes and commercial properties.</li>
              <li>Our goal is to deliver high-quality craftsmanship and innovative design.</li>
            </ul>
            <h2 className="font-semibold text-textColor mb-4">
              2. Client Responsibilities
            </h2>
            <ul className="space-y-4 text-textColor list-disc list-inside pl-4">
              <li>You must provide accurate project details, including permits and access to the site.</li>
              <li>You are responsible for securing necessary approvals or permits for the project.</li>
            </ul>
            <h2 className="font-semibold text-textColor mb-4">
              3. Payment Terms
            </h2>
            <ul className="space-y-4 text-textColor list-disc list-inside pl-4">
              <li>Pricing will be discussed upfront, with payment schedules outlined in the agreement.</li>
              <li>A deposit may be required, and final payment is due upon project completion.</li>
              <li>Late payments may incur fees.</li>
            </ul>
            <h2 className="font-semibold text-textColor mb-4">
              4. Warranty and Liability
            </h2>
            <ul className="space-y-4 text-textColor list-disc list-inside pl-4">
              <li>We offer a warranty for our work, covering defects in materials and workmanship for a specified period.
              </li>
              <li>We are not responsible for damages caused by misuse, accidents, or alterations made after installation.
              </li>
            </ul>
            <h2 className="font-semibold text-textColor mb-4">
              5. Cancellation
            </h2>
            <ul className="space-y-4 text-textColor list-disc list-inside pl-4">
              <li>You can cancel the project before work begins, but deposits may not be refundable.
              </li>
              <li>We reserve the right to cancel if terms are not met.
              </li>
            </ul>
            <h2 className="font-semibold text-textColor mb-4">
              6. Privacy
            </h2>
            <ul className="space-y-4 text-textColor list-disc list-inside pl-4">
              <li>Combining steel with glass panels or wooden elements for a modern or classic look.
              </li>
            </ul>
            <h2 className="font-semibold text-textColor mb-4">
              7. Disputes
            </h2>
            <ul className="space-y-4 text-textColor list-disc list-inside pl-4">
              <li>Any disputes will be resolved through arbitration, following the laws of Legal Authority.
              </li>
            </ul>
          </ol>
        </div>
      </div>
    </div>
  );
};

export default Terms;
