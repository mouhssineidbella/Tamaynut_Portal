import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Heart, ShieldCheck } from 'lucide-react';

const Donate = () => {
  const [amount, setAmount] = useState('100');
  const [customAmount, setCustomAmount] = useState('');

  const amounts = ['50', '100', '500'];

  const handleAmountClick = (val) => {
    setAmount(val);
    setCustomAmount('');
  };

  const handleCustomChange = (e) => {
    setCustomAmount(e.target.value);
    setAmount('custom');
  };

  return (
    <div className="pt-20 bg-slate-50 min-h-screen">
      {/* 1. Header */}
      <section className="bg-ngo-dark py-16 text-center">
        <h1 className="text-3xl md:text-5xl font-bold text-white mb-4 tracking-tight flex items-center justify-center gap-3">
          <Heart className="w-8 h-8 text-red-400" fill="currentColor" /> Soutenez Notre Action
        </h1>
        <p className="text-blue-200 text-lg">Votre générosité fait la différence.</p>
      </section>

      {/* 2. Main Layout (Split View) */}
      <section className="py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            
            {/* Left Side: Impact Text */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-5 pt-4"
            >
              <h2 className="text-3xl font-bold text-ngo-dark mb-6 tracking-tight">Pourquoi donner ?</h2>
              <p className="text-slate-600 leading-relaxed text-lg font-light mb-6">
                En soutenant l'Organisation Tamaynut, vous participez directement à la construction d'une société plus juste et équitable.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex gap-4 p-4 bg-white rounded-2xl shadow-sm border border-slate-100">
                  <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-ngo-primary shrink-0">
                    <span className="font-bold">1</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-ngo-dark">Action sur le terrain</h4>
                    <p className="text-slate-500 text-sm">Votre don aide à financer nos interventions de sensibilisation dans les régions reculées.</p>
                  </div>
                </li>
                <li className="flex gap-4 p-4 bg-white rounded-2xl shadow-sm border border-slate-100">
                  <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-ngo-primary shrink-0">
                    <span className="font-bold">2</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-ngo-dark">Formation des jeunes</h4>
                    <p className="text-slate-500 text-sm">Nous organisons des ateliers essentiels pour développer le leadership citoyen.</p>
                  </div>
                </li>
              </ul>
              
              <div className="flex items-center gap-3 text-sm text-slate-500 font-medium bg-blue-50/50 p-4 rounded-xl border border-blue-100">
                <ShieldCheck className="w-6 h-6 text-green-600" />
                Vos dons sont gérés en toute transparence pour garantir le maximum d'impact sociétal.
              </div>
            </motion.div>

            {/* Right Side: Form */}
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:col-span-7"
            >
              <div className="bg-white shadow-xl shadow-blue-900/5 rounded-3xl p-8 md:p-10 border border-slate-100">
                <h3 className="text-xl font-bold text-ngo-dark mb-6">Choisissez votre montant</h3>
                
                {/* Amount Selectors */}
                <div className="grid grid-cols-3 gap-3 mb-4">
                  {amounts.map(val => (
                    <button
                      key={val}
                      onClick={() => handleAmountClick(val)}
                      className={`py-3 rounded-xl font-bold transition-all duration-200 border-2 ${amount === val ? 'bg-ngo-primary border-ngo-primary text-white shadow-md' : 'bg-transparent border-slate-200 text-slate-600 hover:border-ngo-primary hover:text-ngo-primary'}`}
                    >
                      {val} MAD
                    </button>
                  ))}
                </div>
                
                {/* Custom Amount */}
                <div className="mb-8">
                  <input 
                    type="number"
                    placeholder="Autre montant (MAD)"
                    value={customAmount}
                    onChange={handleCustomChange}
                    className={`w-full px-4 py-3 rounded-xl border-2 transition-all duration-200 outline-none font-medium ${amount === 'custom' ? 'border-ngo-primary focus:ring-4 focus:ring-blue-500/10' : 'border-slate-200 bg-slate-50 focus:bg-white focus:border-ngo-primary'}`}
                  />
                </div>

                <div className="border-t border-slate-100 my-8" />

                {/* Info Fields */}
                <div className="space-y-5">
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">Nom Complet</label>
                    <input type="text" className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 outline-none transition-all duration-200" placeholder="Ex: Ahmed Amzil" />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">Adresse Email</label>
                    <input type="email" className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 outline-none transition-all duration-200" placeholder="Ex: contact@example.com" />
                  </div>
                </div>

                {/* Submit */}
                <button className="w-full mt-10 py-4 px-6 bg-ngo-primary text-white font-bold rounded-xl shadow-lg shadow-ngo-primary/30 hover:bg-blue-700 hover:-translate-y-0.5 transition-all duration-300">
                  Continuer vers le paiement sécurisé
                </button>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

    </div>
  );
};

export default Donate;
