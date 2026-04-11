import React from 'react';
import { Mail, Phone, MapPin, Globe, MessageCircle, Camera } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white pt-16 pb-8 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 border-b border-slate-800 pb-12">
        <div className="space-y-4">
          <h3 className="text-xl font-bold tracking-tighter">TAMAYNUT</h3>
          <p className="text-slate-400 text-sm leading-relaxed">
            Founded in 1978, Tamaynut is dedicated to defending human rights and promoting Amazigh cultural heritage in Morocco and beyond.
          </p>
          <div className="flex gap-4">
            <Globe className="w-5 h-5 text-slate-400 hover:text-brand-gold cursor-pointer transition-colors" />
            <MessageCircle className="w-5 h-5 text-slate-400 hover:text-brand-gold cursor-pointer transition-colors" />
            <Camera className="w-5 h-5 text-slate-400 hover:text-brand-gold cursor-pointer transition-colors" />
          </div>
        </div>

        <div className="space-y-4">
          <h4 className="font-bold text-lg">Quick Links</h4>
          <ul className="space-y-2 text-slate-400 text-sm">
            <li><a href="/" className="hover:text-brand-gold transition-colors">Home</a></li>
            <li><a href="/about" className="hover:text-brand-gold transition-colors">About Us</a></li>
            <li><a href="/activities" className="hover:text-brand-gold transition-colors">Recent Activities</a></li>
            <li><a href="/join" className="hover:text-brand-gold transition-colors">Join the Movement</a></li>
          </ul>
        </div>

        <div className="space-y-4">
          <h4 className="font-bold text-lg">Focus Areas</h4>
          <ul className="space-y-2 text-slate-400 text-sm">
            <li className="hover:text-brand-green transition-colors cursor-default">Human Rights Defense</li>
            <li className="hover:text-brand-green transition-colors cursor-default">Amazigh Culture</li>
            <li className="hover:text-brand-green transition-colors cursor-default">Youth Empowerment</li>
            <li className="hover:text-brand-green transition-colors cursor-default">Indigenous Rights</li>
          </ul>
        </div>

        <div className="space-y-4">
          <h4 className="font-bold text-lg">Contact Us</h4>
          <ul className="space-y-3 text-slate-400 text-sm">
            <li className="flex items-center gap-3">
              <MapPin className="w-4 h-4 text-brand-gold" />
              <span>Rabat, Morocco</span>
            </li>
            <li className="flex items-center gap-3">
              <Phone className="w-4 h-4 text-brand-gold" />
              <span>+212 (0) 5XX XX XX XX</span>
            </li>
            <li className="flex items-center gap-3">
              <Mail className="w-4 h-4 text-brand-gold" />
              <span>contact@tamaynut.org</span>
            </li>
          </ul>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto pt-8 flex flex-col md:row justify-between items-center text-slate-500 text-xs gap-4 text-center md:text-left">
        <p>© {new Date().getFullYear()} Tamaynut Organization. All rights reserved.</p>
        <div className="flex gap-6">
          <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
