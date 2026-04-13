import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';

const Join = () => {
  const fadeUpVariant = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  const listVariant = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { 
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  const itemVariant = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: "easeOut" } }
  };

  return (
    <div className="pt-20"> {/* Offset for fixed navbar */}
      {/* 1. Page Header (Hero) */}
      <section className="bg-ngo-dark py-20 md:py-28 flex flex-col items-center justify-center text-center px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-blue-950/60" />
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={fadeUpVariant}
          className="relative z-10 max-w-4xl"
        >
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight">
            Rejoignez l'Organisation Tamaynut
          </h1>
          <p className="text-lg md:text-2xl text-blue-100 font-light max-w-3xl mx-auto leading-relaxed">
            Devenez acteur du changement et défendez les droits humains dans votre communauté.
          </p>
        </motion.div>
      </section>

      {/* 2. Main Layout (Split View) */}
      <section className="bg-blue-50/30 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            
            {/* 3. Left Column: Motivation */}
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={fadeUpVariant}
              className="mt-4 md:mt-10"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-ngo-dark mb-8 tracking-tight">
                Pourquoi nous rejoindre ?
              </h2>
              <p className="text-slate-600 text-lg leading-relaxed mb-10 font-light">
                Rejoindre Tamaynut, c'est intégrer une grande famille militante dévouée à la justice sociale, à l'équité, et à la célébration de l'identité amazighe. En tant que membre, vous jouerez un rôle direct dans l'édification du Maroc de demain.
              </p>
              
              <motion.ul 
                variants={listVariant}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="space-y-6"
              >
                {[
                  "Participer à des projets d'impact sur le terrain.",
                  "Bénéficier de formations en droits humains et leadership.",
                  "Intégrer un réseau national de plus de 40 sections.",
                  "Contribuer à la préservation de la culture amazighe."
                ].map((item, index) => (
                  <motion.li key={index} variants={itemVariant} className="flex items-start gap-4">
                    <CheckCircle className="w-6 h-6 text-ngo-primary shrink-0 mt-0.5" />
                    <span className="text-slate-700 text-lg leading-snug">{item}</span>
                  </motion.li>
                ))}
              </motion.ul>
            </motion.div>

            {/* 4. Right Column: The Application Form */}
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
            >
              <div className="bg-white shadow-xl shadow-blue-900/5 rounded-2xl p-8 md:p-10 border border-slate-100">
                <h3 className="text-2xl font-bold text-ngo-dark mb-8">Formulaire de candidature</h3>
                
                <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                  {/* Nom Complet */}
                  <div>
                    <label htmlFor="fullName" className="block text-sm font-semibold text-slate-700 mb-2">
                      Nom Complet
                    </label>
                    <input 
                      type="text" 
                      id="fullName" 
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 outline-none transition-all duration-200"
                      placeholder="Ex: Ahmed Amzil"
                      required
                    />
                  </div>

                  {/* Adresse Email */}
                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-slate-700 mb-2">
                      Adresse Email
                    </label>
                    <input 
                      type="email" 
                      id="email" 
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 outline-none transition-all duration-200"
                      placeholder="Ex: ahmed@example.com"
                      required
                    />
                  </div>

                  {/* Numéro de Téléphone */}
                  <div>
                    <label htmlFor="phone" className="block text-sm font-semibold text-slate-700 mb-2">
                      Numéro de Téléphone
                    </label>
                    <input 
                      type="tel" 
                      id="phone" 
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 outline-none transition-all duration-200 text-start flex flex-row"
                      placeholder="+212 6 XX XX XX XX"
                      dir="ltr"
                      required
                    />
                  </div>

                  {/* Ville / Section Locale */}
                  <div>
                    <label htmlFor="city" className="block text-sm font-semibold text-slate-700 mb-2">
                      Ville / Section Locale
                    </label>
                    <div className="relative">
                      <select 
                        id="city" 
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 outline-none transition-all duration-200 appearance-none"
                      >
                        <option value="">Sélectionnez une section...</option>
                        <option value="rabat">Rabat</option>
                        <option value="agadir">Agadir</option>
                        <option value="marrakech">Marrakech</option>
                        <option value="tiznit">Tiznit</option>
                        <option value="other">Autre / Non défini</option>
                      </select>
                      {/* Custom dropdown arrow for aesthetics */}
                      <div className="pointer-events-none absolute inset-y-0 end-0 flex items-center px-4 text-slate-500">
                        <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                      </div>
                    </div>
                  </div>

                  {/* Pourquoi souhaitez-vous... */}
                  <div>
                    <label htmlFor="motivation" className="block text-sm font-semibold text-slate-700 mb-2">
                      Pourquoi souhaitez-vous nous rejoindre ?
                    </label>
                    <textarea 
                      id="motivation" 
                      rows="4" 
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 outline-none transition-all duration-200 resize-none"
                      placeholder="Dites-nous en plus sur vos motivations..."
                      required
                    />
                  </div>

                  {/* Submit Button */}
                  <button 
                    type="submit"
                    className="w-full py-4 px-6 bg-ngo-primary text-white font-bold rounded-xl shadow-lg shadow-ngo-primary/30 hover:bg-blue-700 hover:-translate-y-0.5 transition-all duration-300"
                  >
                    Soumettre ma candidature
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

export default Join;
