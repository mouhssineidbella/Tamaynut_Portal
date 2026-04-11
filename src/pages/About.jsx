import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <div className="section-padding py-32">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-16 text-center"
        >
          <span className="text-brand-green font-bold uppercase tracking-widest text-sm mb-4 block">Our Story</span>
          <h1 className="text-4xl md:text-6xl font-bold text-slate-900 tracking-tight">
            An Unwavering Legacy of Advocacy
          </h1>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="prose prose-lg text-slate-600 max-w-none space-y-8"
        >
          <p className="text-xl text-slate-700 leading-relaxed font-medium">
            Founded in 1978, Tamaynut (The Youth Organization for Amazigh Cultural and Educational Exchanges) emerged during a pivotal moment in Moroccan history as a grassroots initiative to preserve and promote the indigenous identity of North Africa.
          </p>
          
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-slate-900 pt-8 border-t border-slate-100">Our History</h2>
            <p>
              For over four decades, Tamaynut has been at the forefront of the Amazigh movement. What began as a small group of passionate youth in Rabat has grown into a nationwide network with dozens of local chapters throughout Morocco. Our journey has been defined by a commitment to peaceful advocacy, educational reform, and the recognition of Tamazight as an official language.
            </p>
            <p>
              Throughout the years, we have collaborated with international human rights organizations, United Nations bodies, and local civil society to ensure that the voices of indigenous communities are heard in the highest corridors of power.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 py-12">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-brand-navy">Our Vision</h3>
              <p className="text-sm italic">
                "To build a pluralistic Morocco where diversity is celebrated as a source of national strength, and where every citizen, regardless of their cultural background, enjoys full human rights."
              </p>
            </div>
            <div className="space-y-4 border-l border-brand-gold/30 pl-8">
              <h3 className="text-2xl font-bold text-brand-navy">Our Values</h3>
              <ul className="list-disc list-inside space-y-2 text-sm">
                <li>Non-discrimination and equality</li>
                <li>Independence from political partisanship</li>
                <li>Commitment to non-violence</li>
                <li>Transparency and democratic governance</li>
                <li>Respect for universal human rights</li>
              </ul>
            </div>
          </div>

          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-slate-900 pt-8 border-t border-slate-100">What We Do</h2>
            <p>
              Our activities are structured around three pillars: legal advocacy, cultural promotion, and youth leadership. We organize seminars, cultural festivals, and human rights workshops that bridge the gap between traditional wisdom and modern civil society practices.
            </p>
            <p>
              We believe that culture is not just a relic of the past, but a living, breathing foundation for sustainable development and social justice.
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mt-20 p-12 bg-slate-50 rounded-3xl border border-slate-200 text-center"
        >
          <h3 className="text-2xl font-bold mb-4">Support Our Cause</h3>
          <p className="text-slate-600 mb-8 max-w-xl mx-auto">
            Our work is made possible through the dedication of our volunteers and the generosity of our supporters.
          </p>
          <button className="btn-primary">Get Involved</button>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
