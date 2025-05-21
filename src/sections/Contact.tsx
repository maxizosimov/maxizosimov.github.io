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
          subtitle="Interested in working together? Feel free to reach out!"
          centered
        />
        
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div>
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                <div>
                  <p className="text-gray-400 mb-1">Email</p>
                  <a 
                    href="mailto:maxizosimov@gmail.com" 
                    className="text-lg font-medium text-teal-400 hover:text-teal-300 transition-colors"
                  >
                    maxizosimov@gmail.com
                  </a>
                </div>
                
                <div>
                  <p className="text-gray-400 mb-1">Location</p>
                  <p className="text-lg font-medium">Boston, United States</p>
                  <p className="text-lg font-medium">Stockholm, Sweden</p>
                </div>
                
                <div>
                  <p className="text-gray-400 mb-3">Connect with me</p>
                  <div className="flex gap-3">
                    {SOCIAL_LINKS.map((social, index) => (
                      <SocialButton key={index} social={social} />
                    ))}
                  </div>
                </div>
              </div>
            </div>
            
            {/* Contact Form */}
            <div>
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-3 bg-white/10 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 text-white"
                    placeholder="Your name"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 bg-white/10 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 text-white"
                    placeholder="Your email"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full px-4 py-3 bg-white/10 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 text-white resize-none"
                    placeholder="Your message"
                  />
                </div>
                
                <button
                  type="submit"
                  className="w-full px-6 py-3 bg-gradient-to-r from-teal-500 to-blue-500 hover:from-teal-600 hover:to-blue-600 text-white font-medium rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;