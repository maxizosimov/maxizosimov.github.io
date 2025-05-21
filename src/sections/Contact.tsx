import React from 'react';
import SectionHeading from '../components/SectionHeading';
import SocialButton from '../components/SocialButton';
import { SOCIAL_LINKS } from '../constants';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-slate-800 to-slate-900 text-white">
      <div className="container mx-auto px-4 md:px-6">
        <SectionHeading 
          title="Get In Touch"
          subtitle="Feel free to reach out through email or social media!"
          centered
        />
        
        <div className="max-w-2xl mx-auto text-center">
          <div className="space-y-8">
            <div>
              <p className="text-gray-400 mb-2">Email</p>
              <a 
                href="mailto:maxizosimov@gmail.com" 
                className="text-xl font-medium text-teal-400 hover:text-teal-300 transition-colors"
              >
                maxizosimov@gmail.com
              </a>
            </div>
            
            <div>
              <p className="text-gray-400 mb-4">Connect with me</p>
              <div className="flex justify-center gap-4">
                {SOCIAL_LINKS.map((social, index) => (
                  <SocialButton key={index} social={social} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;