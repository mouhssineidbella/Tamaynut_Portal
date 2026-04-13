import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Calendar, ArrowLeft } from 'lucide-react';
import { Link, useParams } from 'react-router-dom';

const ArticleDetail = () => {
  const { id } = useParams();

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  return (
    <div className="bg-slate-50 min-h-screen pb-24">
      {/* Hero Image */}
      <div className="relative w-full h-[50vh] md:h-[60vh]">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1541944743827-e04bb645d993?auto=format&fit=crop&q=80&w=1600')" }}
        />
        <div className="absolute inset-0 bg-blue-900/40 backdrop-blur-[2px]" />
        
        <Link 
          to="/" 
          className="absolute top-28 left-6 md:left-12 flex items-center gap-2 text-white font-medium hover:text-blue-200 transition-colors bg-black/20 px-4 py-2 rounded-full backdrop-blur-md"
        >
          <ArrowLeft className="w-4 h-4" /> Retour
        </Link>
      </div>

      {/* Content Container */}
      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="relative z-10 max-w-3xl mx-auto -mt-16 sm:-mt-24 md:-mt-32 px-6"
      >
        <div className="bg-white rounded-3xl shadow-xl shadow-blue-900/10 p-8 md:p-12 lg:p-16">
          
          {/* Article Header */}
          <div className="mb-10 border-b border-slate-100 pb-8">
            <div className="flex flex-wrap items-center gap-4 mb-6">
              <span className="bg-blue-50 text-ngo-primary px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider">
                Droits Humains
              </span>
              <span className="flex items-center gap-2 text-slate-500 text-sm font-medium">
                <Calendar className="w-4 h-4" /> 12 Avril 2026
              </span>
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-ngo-dark leading-tight tracking-tight">
              Campagne Nationale de Sensibilisation
            </h1>
          </div>

          {/* Article Body */}
          <div className="prose prose-lg prose-slate max-w-none">
            <p className="text-ngo-dark/90 leading-relaxed font-light text-lg mb-6">
              L'Organisation Tamaynut a officiellement lancé sa nouvelle campagne de terrain visant à éduquer les communautés locales sur l'importance des droits humains universels et la sauvegarde de l'héritage culturel. Cet effort d'envergure nationale s'inscrit dans la longue tradition de plaidoirie de notre ONG.
            </p>
            <p className="text-ngo-dark/90 leading-relaxed font-light text-lg mb-6">
              À travers cette initiative, des dizaines de bénévoles formés se déploieront dans des régions souvent marginalisées. Leur mission principale: organiser des ateliers interactifs, créer des espaces de discussion sécures et distribuer du matériel éducatif traduit en langue locale pour s'assurer que le message soit compris par tous.
            </p>
            <blockquote className="border-l-4 border-ngo-primary pl-6 my-8 text-xl font-medium italic text-ngo-dark/80 bg-blue-50/50 p-6 rounded-r-2xl">
              "Notre objectif est de donner à chaque citoyen, quel que soit son lieu de résidence, les outils nécessaires pour comprendre et revendiquer ses droits fondamentaux."
            </blockquote>
            <p className="text-ngo-dark/90 leading-relaxed font-light text-lg mb-6">
              Le programme, soutenu par plusieurs partenaires internationaux, se poursuivra tout au long de l'année. Des rapports d'étape seront publiés trimestriellement pour mesurer l'impact réel des interventions et adapter les stratégies pédagogiques aux besoins spécifiques de chaque région.
            </p>
            <p className="text-ngo-dark/90 leading-relaxed font-light text-lg">
              Nous invitons le grand public à suivre l'évolution de cette campagne majeure sur nos réseaux sociaux et à participer activement aux sessions de formation ouvertes qui seront annoncées prochainement.
            </p>
          </div>
          
        </div>
      </motion.div>
    </div>
  );
};

export default ArticleDetail;
