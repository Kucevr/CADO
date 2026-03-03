import { useEffect } from 'react';
import { SEO } from '../components/SEO';

const PrivacyPolicy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-40 pb-32 px-[3%] max-w-4xl mx-auto min-h-screen text-black bg-white">
      <SEO 
        title="Privacy Policy | CODA Studio"
        description="Our Privacy Policy outlines how we collect, use, and protect your data."
        url="https://coda-architecture.vercel.app/privacy-policy"
      />
      <h1 className="text-4xl md:text-6xl font-serif mb-8 tracking-tight">Privacy Policy</h1>
      <p className="text-gray-500 mb-12 uppercase tracking-widest text-sm">Last updated: February 2026</p>
      
      <div className="space-y-12 text-lg leading-relaxed text-gray-800" style={{ fontFamily: "var(--font-sans)" }}>
        <section>
          <h2 className="text-2xl font-bold mb-4 text-black">1. Introduction</h2>
          <p>
            Welcome to Studio CODA. We respect your privacy and are committed to protecting your personal data. 
            This Privacy Policy will inform you as to how we look after your personal data when you visit our 
            website and tell you about your privacy rights and how the law protects you.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4 text-black">2. Data We Collect</h2>
          <p className="mb-4">We may collect, use, store and transfer different kinds of personal data about you which we have grouped together as follows:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Identity Data</strong> includes first name, last name, username or similar identifier.</li>
            <li><strong>Contact Data</strong> includes email address and telephone numbers.</li>
            <li><strong>Technical Data</strong> includes internet protocol (IP) address, your login data, browser type and version, time zone setting and location.</li>
            <li><strong>Usage Data</strong> includes information about how you use our website, products and services.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4 text-black">3. How We Use Your Data</h2>
          <p>
            We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances:
          </p>
          <ul className="list-disc pl-6 space-y-2 mt-4">
            <li>Where we need to perform the contract we are about to enter into or have entered into with you.</li>
            <li>Where it is necessary for our legitimate interests and your interests and fundamental rights do not override those interests.</li>
            <li>Where we need to comply with a legal obligation.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4 text-black">4. Data Security</h2>
          <p>
            We have put in place appropriate security measures to prevent your personal data from being accidentally lost, used or accessed in an unauthorized way, altered or disclosed. In addition, we limit access to your personal data to those employees, agents, contractors and other third parties who have a business need to know.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4 text-black">5. Contact Us</h2>
          <p>
            If you have any questions about this Privacy Policy or our privacy practices, please contact us at:<br/><br/>
            <strong>Email:</strong> privacy@studiocoda.com<br/>
            <strong>Address:</strong> Coral Gables, FL 33146
          </p>
        </section>
      </div>
    </div>
  );
};

export default PrivacyPolicy;