import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Mail, Phone } from 'lucide-react';

const Contact = () => {
  const fadeUpVariant = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <div className="pt-20 bg-slate-50 min-h-screen pb-24">
      {/* 1. Page Header (Hero) */}
      <section className="bg-ngo-dark py-20 md:py-28 text-center px-6">
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={fadeUpVariant}
          className="max-w-4xl mx-auto"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight">
            Contactez-nous
          </h1>
          <p className="text-lg md:text-2xl text-blue-100 font-light max-w-3xl mx-auto leading-relaxed">
            Notre équipe est à votre disposition pour toute question ou proposition de partenariat.
          </p>
        </motion.div>
      </section>

      {/* 2. Main Layout */}
      <section className="py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            
            {/* Left Column: Informations de Contact */}
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={fadeUpVariant}
            >
              <h2 className="text-3xl font-bold text-ngo-dark mb-8 tracking-tight">
                Informations de Contact
              </h2>
              
              <ul className="space-y-8 mb-12">
                <li className="flex items-start gap-5">
                  <div className="w-12 h-12 rounded-full bg-blue-100/50 flex items-center justify-center text-ngo-primary shrink-0">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-ngo-dark text-lg mb-1">Siège Central</h3>
                    <p className="text-slate-600 leading-relaxed">Rabat, Maroc</p>
                  </div>
                </li>
                
                <li className="flex items-start gap-5">
                  <div className="w-12 h-12 rounded-full bg-blue-100/50 flex items-center justify-center text-ngo-primary shrink-0">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-ngo-dark text-lg mb-1">Email</h3>
                    <p className="text-slate-600 leading-relaxed">contact@tamaynut.org</p>
                  </div>
                </li>

                <li className="flex items-start gap-5">
                  <div className="w-12 h-12 rounded-full bg-blue-100/50 flex items-center justify-center text-ngo-primary shrink-0">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-ngo-dark text-lg mb-1">Téléphone</h3>
                    <p className="text-slate-600 leading-relaxed">+212 5XX XX XX XX <br/><span className="text-sm text-slate-400 font-light">(Accessible aux horaires de bureau)</span></p>
                  </div>
                </li>
              </ul>

              <hr className="border-slate-200 mb-8" />
              
              <h3 className="font-bold text-ngo-dark text-xl mb-6">Suivez-nous</h3>
              <div className="flex gap-4">
                <a href="#" className="w-12 h-12 rounded-full bg-slate-200 flex items-center justify-center text-ngo-dark hover:bg-ngo-primary hover:text-white transition-all duration-300">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path></svg>
                </a>
                <a href="#" className="w-12 h-12 rounded-full bg-slate-200 flex items-center justify-center text-ngo-dark hover:bg-ngo-primary hover:text-white transition-all duration-300">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path></svg>
                </a>
                <a href="#" className="w-12 h-12 rounded-full bg-slate-200 flex items-center justify-center text-ngo-dark hover:bg-ngo-primary hover:text-white transition-all duration-300">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                </a>
              </div>
            </motion.div>

            {/* Right Column: Contact Form */}
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
            >
              <div className="bg-white shadow-xl shadow-blue-900/5 rounded-2xl p-8 md:p-10 border border-slate-100">
                <h3 className="text-2xl font-bold text-ngo-dark mb-8">Envoyez-nous un message</h3>
                
                <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">Nom Complet</label>
                    <input type="text" className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 outline-none transition-all duration-200" placeholder="Ex: Ali Ider" required />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">Adresse Email</label>
                    <input type="email" className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 outline-none transition-all duration-200" placeholder="Ex: ali@example.com" required />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">Sujet</label>
                    <input type="text" className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 outline-none transition-all duration-200" placeholder="Ex: Proposition de partenariat" required />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">Votre Message</label>
                    <textarea rows="5" className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 outline-none transition-all duration-200 resize-none" placeholder="Comment pouvons-nous vous aider ?" required></textarea>
                  </div>

                  <button type="submit" className="w-full py-4 px-6 bg-ngo-primary text-white font-bold rounded-xl shadow-lg shadow-ngo-primary/30 hover:bg-blue-700 hover:-translate-y-0.5 transition-all duration-300">
                    Envoyer le message
                  </button>
                </form>
              </div>
            </motion.div>

          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
