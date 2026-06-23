import React, { useState } from 'react';
import LegalModal from '../components/LegalModal';

const legalContent = {
  privacy: {
    title: 'Privacy Policy',
    sections: [
      {
        heading: '1. Introduction',
        body: 'NLR Group of Companies ("NLR Group," "we," "us," or "our") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, store, and protect your personal information when you visit our website (nlrgroupofcompany.in), use our services, or interact with us through any channel including WhatsApp, email, or phone.\nBy using our website or services, you consent to the practices described in this policy. If you do not agree, please discontinue use of our services.',
      },
      {
        heading: '2. Information We Collect',
        body: 'We may collect the following types of information:\n• Personal Information: Name, email address, phone number, and any details you voluntarily provide through our contact form or WhatsApp.\n• Usage Data: Pages visited, time spent on pages, browser type, device information, IP address, and referring URLs — collected automatically through standard web analytics.\n• Cookies & Local Storage: We use essential cookies for site functionality and analytics cookies (such as Google Analytics) to understand traffic patterns. No advertising or tracking cookies are used.\n• Project Information: Details about your project requirements, business needs, and technical specifications shared during consultations.',
      },
      {
        heading: '3. How We Use Your Information',
        body: 'We use the information we collect to:\n• Respond to your inquiries and provide project consultations.\n• Deliver, maintain, and improve our services.\n• Send project updates, invoices, and service-related communications.\n• Analyze website usage to improve user experience and performance.\n• Comply with legal obligations and protect our rights.\nWe do not use your information for unsolicited marketing. We will never send you promotional messages unless you explicitly opt in.',
      },
      {
        heading: '4. Data Sharing & Third Parties',
        body: 'We do not sell, rent, or trade your personal information to any third party. We may share limited data with:\n• Service Providers: Hosting providers (Vercel/AWS), analytics tools (Google Analytics), and communication tools (WhatsApp Business) that help us operate our services. These providers are bound by their own privacy policies.\n• Legal Requirements: If required by law, court order, or government regulation, we may disclose your information to comply with legal obligations.\nAll third-party services we use are industry-standard and maintain their own data protection practices.',
      },
      {
        heading: '5. Data Security',
        body: 'We implement appropriate technical and organizational measures to protect your data, including:\n• HTTPS encryption on all pages.\n• Secure hosting infrastructure with regular security updates.\n• Access controls limiting data access to authorized personnel only.\n• No storage of payment information on our servers — all payments are handled through secure third-party processors.\nWhile we take reasonable precautions, no method of transmission over the internet is 100% secure. We cannot guarantee absolute security.',
      },
      {
        heading: '6. Data Retention',
        body: 'We retain your personal information only for as long as necessary to fulfill the purposes outlined in this policy, unless a longer retention period is required by law. Contact form submissions and project inquiries are retained for up to 24 months. You may request deletion at any time.',
      },
      {
        heading: '7. Your Rights',
        body: 'You have the right to:\n• Access: Request a copy of the personal data we hold about you.\n• Correction: Request correction of inaccurate or incomplete data.\n• Deletion: Request deletion of your personal data from our systems.\n• Objection: Object to the processing of your data for specific purposes.\nTo exercise any of these rights, contact us at nlrgroupofcompany@gmail.com. We will respond within 30 days.',
      },
      {
        heading: '8. Children\'s Privacy',
        body: 'Our services are not directed to individuals under the age of 16. We do not knowingly collect personal information from children. If we become aware that we have collected data from a child under 16, we will take steps to delete it promptly.',
      },
      {
        heading: '9. Changes to This Policy',
        body: 'We may update this Privacy Policy from time to time. Changes will be reflected on this page with an updated "Last updated" date. Continued use of our website or services after changes constitutes acceptance of the revised policy.',
      },
      {
        heading: '10. Contact Us',
        body: 'If you have questions or concerns about this Privacy Policy, contact us:\n• Email: nlrgroupofcompany@gmail.com\n• Phone: +91 79895 05968\n• WhatsApp: +91 63022 45307\n• Location: India',
      },
    ],
  },
  terms: {
    title: 'Terms of Service',
    sections: [
      {
        heading: '1. Acceptance of Terms',
        body: 'By accessing or using the website and services of NLR Group of Companies ("NLR Group," "we," "us," or "our"), you agree to be bound by these Terms of Service. If you do not agree to these terms, do not use our website or services.\nThese terms apply to all visitors, users, clients, and anyone who accesses or uses our website (nlrgroupofcompany.in) or engages our services.',
      },
      {
        heading: '2. Services Overview',
        body: 'NLR Group provides the following services on a freelance and project basis:\n• AI & Machine Learning Solutions\n• Web Development & Full-Stack Applications\n• Mobile App Development\n• Agriculture Technology Solutions\n• Social Media Management, SEO & GEO Optimization\nThe scope, timeline, deliverables, and pricing for each project are agreed upon individually through written communication (email, WhatsApp, or formal proposal) before work begins.',
      },
      {
        heading: '3. Project Engagement & Payments',
        body: 'All projects begin only after mutual agreement on scope and terms. Key conditions:\n• Quotations are valid for 15 days from the date of issue unless stated otherwise.\n• A minimum advance payment (typically 30–50% of the project cost) is required before development begins.\n• Final payment is due upon project completion and before handover of source code, deployment access, or final deliverables.\n• Payment methods and schedules are communicated per project.\n• Prices quoted are exclusive of applicable taxes unless explicitly stated.',
      },
      {
        heading: '4. Intellectual Property',
        body: 'Unless otherwise agreed in writing:\n• All source code, designs, and deliverables created for a client project become the client\'s property upon full payment.\n• NLR Group retains the right to use anonymized project descriptions and screenshots in our portfolio and marketing materials.\n• Pre-existing tools, libraries, frameworks, and open-source components used in your project remain under their respective licenses.\n• You must not resell, redistribute, or sublicense our work as a template or product to third parties without written permission.',
      },
      {
        heading: '5. Client Responsibilities',
        body: 'To ensure successful project delivery, clients are responsible for:\n• Providing accurate, complete, and timely information, content, and assets required for the project.\n• Reviewing and providing feedback on deliverables within agreed timelines.\n• Ensuring that all content, images, and data provided to us do not infringe on third-party intellectual property rights or violate applicable laws.\n• Maintaining the confidentiality of any credentials, API keys, or access provided during the project.\nDelays caused by late client input may result in adjusted timelines.',
      },
      {
        heading: '6. Revisions & Scope Changes',
        body: 'Each project includes a reasonable number of revisions as agreed in the project scope. Additional revisions or scope changes beyond the original agreement may incur additional charges, which will be communicated and agreed upon before work proceeds.\nMajor scope changes may require a revised proposal with updated timelines and pricing.',
      },
      {
        heading: '7. Warranties & Disclaimers',
        body: 'We strive to deliver high-quality work, but:\n• Our services and website are provided "as is" without warranties of any kind, express or implied.\n• We do not guarantee specific results such as search rankings, traffic numbers, revenue increases, or app store approval.\n• We are not liable for any issues arising from third-party services, APIs, hosting providers, or platforms used in your project.\n• We warrant that deliverables will be free from known defects at the time of handover. Bug fixes for issues attributable to our work are provided free of charge for 30 days after project completion.',
      },
      {
        heading: '8. Limitation of Liability',
        body: 'To the maximum extent permitted by law, NLR Group shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including but not limited to loss of profits, data, business, or goodwill.\nOur total liability for any claim arising from our services shall not exceed the total amount paid by you for the specific project giving rise to the claim.',
      },
      {
        heading: '9. Termination',
        body: 'Either party may terminate a project engagement with written notice:\n• If the client terminates after work has begun, payment is due for all work completed up to the termination date.\n• If NLR Group terminates, we will deliver all completed work and refund any payment for undelivered portions.\n• We reserve the right to terminate or refuse service to anyone who violates these terms, engages in abusive behavior, or requests work that is illegal or unethical.',
      },
      {
        heading: '10. Confidentiality',
        body: 'Both parties agree to keep confidential any proprietary information, business strategies, technical details, or trade secrets shared during the engagement. This obligation survives the termination of the project.\nNLR Group will never share your project details, credentials, or business information with third parties without your explicit written consent.',
      },
      {
        heading: '11. Website Usage',
        body: 'When using our website, you agree not to:\n• Attempt to gain unauthorized access to any part of the website or its systems.\n• Use automated tools to scrape, crawl, or extract data from the website beyond what is permitted in our robots.txt.\n• Upload or transmit malicious code, viruses, or harmful content.\n• Use the website for any unlawful purpose or in violation of any applicable laws.',
      },
      {
        heading: '12. Governing Law',
        body: 'These Terms of Service are governed by and construed in accordance with the laws of India. Any disputes arising from these terms or our services shall be subject to the exclusive jurisdiction of the courts in India.',
      },
      {
        heading: '13. Changes to These Terms',
        body: 'We reserve the right to modify these Terms of Service at any time. Changes take effect immediately upon being posted on this page. Continued use of our website or services after any changes constitutes acceptance of the revised terms.',
      },
      {
        heading: '14. Contact Us',
        body: 'For questions about these Terms of Service, contact us:\n• Email: nlrgroupofcompany@gmail.com\n• Phone: +91 79895 05968\n• WhatsApp: +91 63022 45307\n• Website: nlrgroupofcompany.in',
      },
    ],
  },
};

const Footer = () => {
  const [activeModal, setActiveModal] = useState(null);

  return (
    <footer aria-label="Site footer" className="py-9 border-t border-line">
      <div className="wrap flex justify-between gap-5 flex-wrap font-mono text-[0.72rem] text-ink-soft items-center">
        <span>© 2026 NLR Group of Companies</span>
        <div className="flex gap-6">
          <button
            onClick={() => setActiveModal('privacy')}
            className="bg-transparent border-none text-ink-soft hover:text-ink cursor-pointer font-mono text-[0.72rem] p-0 transition-colors"
          >
            Privacy Policy
          </button>
          <button
            onClick={() => setActiveModal('terms')}
            className="bg-transparent border-none text-ink-soft hover:text-ink cursor-pointer font-mono text-[0.72rem] p-0 transition-colors"
          >
            Terms of Service
          </button>
        </div>
        <span className="italic">"Today's Decision Tomorrow's Future"</span>
      </div>

      <LegalModal
        isOpen={activeModal !== null}
        onClose={() => setActiveModal(null)}
        title={activeModal ? legalContent[activeModal].title : ''}
        sections={activeModal ? legalContent[activeModal].sections : []}
      />
    </footer>
  );
};

export default Footer;
