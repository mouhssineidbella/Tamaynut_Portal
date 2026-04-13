import React from 'react';
import { motion } from 'framer-motion';
import { Scale, Globe, Shield } from 'lucide-react';

const About = () => {
  const fadeUpVariant = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <div className="pt-20"> {/* Padding top to offset fixed navbar */}
      {/* 1. Page Header (Hero) */}
      <section className="bg-ngo-dark py-24 md:py-32 flex flex-col items-center justify-center text-center px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-blue-950/50" />
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={fadeUpVariant}
          className="relative z-10 max-w-4xl"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight">
            Notre Histoire et Vision
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 font-light max-w-2xl mx-auto">
            Défendre les droits humains depuis 1978
          </p>
        </motion.div>
      </section>

      {/* 2. The History Section */}
      <section className="bg-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-center">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeUpVariant}
            >
              <h2 className="text-3xl font-bold text-ngo-dark mb-6 tracking-tight">Qui sommes-nous ?</h2>
              <p className="text-ngo-dark/80 text-lg leading-relaxed mb-6 font-light">
                Fondée en 1978, l'Organisation Tamaynut est une ONG marocaine indépendante dédiée à la promotion et à la protection des droits humains. Pionnière dans la défense des droits culturels et linguistiques, elle milite pour la reconnaissance officielle de l'identité amazighe.
              </p>
              <p className="text-ngo-dark/80 text-lg leading-relaxed font-light">
                À travers ses dizaines de sections locales, Tamaynut forme les jeunes, plaide auprès des instances internationales, et bâtit une société démocratique respectueuse de la diversité.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="relative rounded-3xl overflow-hidden shadow-2xl shadow-blue-900/10 aspect-[4/3] md:aspect-square lg:aspect-[4/3]"
            >
              <img 
                src="https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&q=80&w=1200" 
                alt="Communauté Tamaynut" 
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* 3. Core Values Grid */}
      <section className="bg-blue-50/50 py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUpVariant}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-ngo-dark tracking-tight">Nos Valeurs Fondamentales</h2>
            <div className="w-16 h-1 bg-ngo-primary mx-auto mt-6 rounded-full" />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={fadeUpVariant}
              transition={{ delay: 0.1 }}
              className="bg-white p-10 rounded-2xl shadow-lg shadow-blue-900/5 hover:-translate-y-2 transition-transform duration-300 border border-slate-100"
            >
              <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center text-ngo-primary mb-8">
                <Scale className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-ngo-dark mb-4 tracking-tight">Justice & Équité</h3>
              <p className="text-slate-600 leading-relaxed font-light">
                Nous luttons contre toutes les formes de discrimination.
              </p>
            </motion.div>

            {/* Card 2 */}
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={fadeUpVariant}
              transition={{ delay: 0.2 }}
              className="bg-white p-10 rounded-2xl shadow-lg shadow-blue-900/5 hover:-translate-y-2 transition-transform duration-300 border border-slate-100"
            >
              <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center text-ngo-primary mb-8">
                <Globe className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-ngo-dark mb-4 tracking-tight">Universalité</h3>
              <p className="text-slate-600 leading-relaxed font-light">
                Engagement indéfectible envers les conventions internationales des droits humains.
              </p>
            </motion.div>

            {/* Card 3 */}
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={fadeUpVariant}
              transition={{ delay: 0.3 }}
              className="bg-white p-10 rounded-2xl shadow-lg shadow-blue-900/5 hover:-translate-y-2 transition-transform duration-300 border border-slate-100"
            >
              <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center text-ngo-primary mb-8">
                <Shield className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-ngo-dark mb-4 tracking-tight">Indépendance</h3>
              <p className="text-slate-600 leading-relaxed font-light">
                Une action citoyenne libre, démocratique et autonome.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
