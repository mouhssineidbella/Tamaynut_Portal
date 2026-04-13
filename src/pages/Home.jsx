import React, { useEffect, useRef } from 'react';
import { motion, useMotionValue, useTransform, animate, useInView } from 'framer-motion';
import { Quote, Users, MapPin, Calendar, Award, ArrowRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

const CountUp = ({ to, duration = 2, suffix = '' }) => {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest) + suffix);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (inView) {
      animate(count, to, { duration: duration, ease: "easeOut" });
    }
  }, [inView, count, to, duration]);

  return <motion.span ref={ref}>{rounded}</motion.span>;
};

const Home = () => {
  const { t } = useTranslation();

  return (
    <div>
      {/* ═══════════════════════════════════════════════════════
          A.  IMMERSIVE HERO — Dark-blue overlay on photo
      ═══════════════════════════════════════════════════════ */}
      <section className="relative min-h-[92vh] flex items-center justify-center overflow-hidden -mt-20">
        {/* Background image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1531206715517-5c0ba140bef2?auto=format&fit=crop&q=80')",
          }}
        />

        {/* Rich dark-blue overlay */}
        <div className="absolute inset-0 bg-blue-950/60" />

        {/* Content */}
        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
          {/* Badge */}
          <motion.span
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="inline-block mb-8 px-5 py-1.5 rounded-full border border-white/25 text-white/90 text-xs font-semibold uppercase tracking-[0.2em] backdrop-blur-sm bg-white/5"
          >
            {t('hero.badge', 'Depuis 1978')}
          </motion.span>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.9, ease: 'easeOut' }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.1] tracking-tight max-w-4xl mx-auto"
          >
            Centre d'appui et de défense des droits humains et de la culture Amazighe
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8, ease: 'easeOut' }}
            className="mt-8 text-lg md:text-xl text-blue-100/80 max-w-2xl mx-auto leading-relaxed font-light"
          >
            {t(
              'hero.subtitle',
              'Promouvoir, protéger et défendre les droits fondamentaux des communautés Amazighes à travers le Maroc et au-delà.'
            )}
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.65, duration: 0.7 }}
            className="mt-12 flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link to="/about" className="bg-white text-ngo-primary px-10 py-4 rounded-full font-semibold text-base hover:bg-blue-50 transition-all duration-300 shadow-lg shadow-black/10 text-center inline-block">
              {t('hero.discoverBtn', 'Découvrir notre mission')}
            </Link>
            <Link to="/join" className="border-2 border-white/40 text-white px-10 py-4 rounded-full font-semibold text-base hover:bg-white/10 transition-all duration-300 backdrop-blur-sm text-center inline-block">
              {t('hero.joinBtn', 'Nous rejoindre')}
            </Link>
          </motion.div>
        </div>

        {/* Bottom fade to white */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent" />
      </section>

      {/* ═══════════════════════════════════════════════════════
          B.  STYLIZED QUOTE / MISSION STATEMENT
      ═══════════════════════════════════════════════════════ */}
      <section className="bg-white">
        <div className="max-w-4xl mx-auto px-6 py-20 md:py-28">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="relative"
          >
            {/* Top-left decorative quote */}
            <Quote
              className="absolute -top-4 -left-2 md:-top-6 md:-left-8 w-12 h-12 md:w-16 md:h-16 text-ngo-primary opacity-20 rotate-180"
              strokeWidth={1.5}
            />

            {/* Mission text */}
            <blockquote className="relative z-10 text-center px-6 md:px-16">
              <p className="text-xl sm:text-2xl md:text-3xl lg:text-[2rem] font-light italic leading-relaxed text-ngo-dark/90 tracking-tight">
                « Nous croyons en un Maroc pluriel où la diversité culturelle
                est une force, où chaque citoyen jouit pleinement de ses droits,
                et où l'identité Amazighe est célébrée comme un pilier
                fondamental de la nation. »
              </p>
            </blockquote>

            {/* Bottom-right decorative quote */}
            <Quote
              className="absolute -bottom-4 -right-2 md:-bottom-6 md:-right-8 w-12 h-12 md:w-16 md:h-16 text-ngo-primary opacity-20"
              strokeWidth={1.5}
            />

            {/* Attribution */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="mt-10 flex flex-col items-center gap-3"
            >
              <div className="w-12 h-px bg-ngo-primary/30" />
              <span className="text-sm font-semibold tracking-widest uppercase text-ngo-dark/50">
                Tamaynut, 1978
              </span>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          C.  INTERACTIVE JOURNEY TIMELINE
      ═══════════════════════════════════════════════════════ */}
      <section className="bg-blue-50/30 py-24 relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-20"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-ngo-dark tracking-tight">Notre Approche</h2>
            <div className="w-16 h-1 bg-ngo-primary mx-auto mt-4 rounded-full" />
          </motion.div>

          <div className="relative">
            {/* The vertical timeline line (desktop only) */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 border-l-2 border-blue-200 -translate-x-1/2" />

            <div className="space-y-16 md:space-y-24">
              {/* Step 1: Left */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.7, ease: 'easeOut' }}
                className="relative flex flex-col md:flex-row md:justify-between items-center w-full"
              >
                <div className="md:w-[45%] md:text-right flex flex-col md:items-end w-full pl-12 md:pl-0 relative">
                  {/* Mobile timeline line */}
                  <div className="md:hidden absolute left-4 top-0 bottom-[-4rem] border-l-2 border-blue-200" />
                  
                  {/* Number overlap */}
                  <span className="absolute -top-6 md:-top-12 left-0 md:left-auto md:-right-8 text-7xl md:text-9xl font-black text-ngo-primary/10 select-none -z-10">1</span>
                  
                  <div className="bg-white p-8 rounded-2xl border border-blue-50 hover:-translate-y-1 hover:shadow-xl hover:shadow-blue-900/5 transition-all duration-300 relative z-10 w-full shadow-sm">
                    <h3 className="text-2xl font-bold text-ngo-dark mb-3">Sensibilisation</h3>
                    <p className="text-slate-500 font-medium mb-3 text-sm tracking-wide">(Awareness & Education)</p>
                    <p className="text-slate-600 leading-relaxed font-light">Éduquer et informer le grand public et les jeunes sur les valeurs universelles des droits humains et l'importance de la préservation du patrimoine culturel amazigh.</p>
                  </div>
                </div>
                {/* Dot for desktop */}
                <div className="hidden md:block absolute left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2 w-6 h-6 rounded-full bg-ngo-primary border-4 border-white shadow-sm z-20" />
                {/* Dot for mobile */}
                <div className="md:hidden absolute left-4 top-8 -translate-x-1/2 w-4 h-4 rounded-full bg-ngo-primary border-2 border-white shadow-sm z-20" />
                <div className="hidden md:block md:w-[45%]" />
              </motion.div>

              {/* Step 2: Right */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.7, ease: 'easeOut' }}
                className="relative flex flex-col md:flex-row md:justify-between items-center w-full"
              >
                <div className="hidden md:block md:w-[45%]" />
                <div className="md:w-[45%] flex flex-col w-full pl-12 md:pl-0 relative text-left">
                  {/* Mobile timeline line */}
                  <div className="md:hidden absolute left-4 top-0 bottom-[-4rem] border-l-2 border-blue-200" />
                  
                  <span className="absolute -top-6 md:-top-12 left-0 md:-left-8 text-7xl md:text-9xl font-black text-ngo-primary/10 select-none -z-10">2</span>
                  
                  <div className="bg-white p-8 rounded-2xl border border-blue-50 hover:-translate-y-1 hover:shadow-xl hover:shadow-blue-900/5 transition-all duration-300 relative z-10 w-full shadow-sm">
                    <h3 className="text-2xl font-bold text-ngo-dark mb-3">Formation</h3>
                    <p className="text-slate-500 font-medium mb-3 text-sm tracking-wide">(Capacity Building & Training)</p>
                    <p className="text-slate-600 leading-relaxed font-light">Renforcer les capacités des acteurs locaux et de la société civile à travers des ateliers pratiques, des séminaires et des programmes de mentorat continu.</p>
                  </div>
                </div>
                {/* Dot */}
                <div className="hidden md:block absolute left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2 w-6 h-6 rounded-full bg-ngo-primary border-4 border-white shadow-sm z-20" />
                <div className="md:hidden absolute left-4 top-8 -translate-x-1/2 w-4 h-4 rounded-full bg-ngo-primary border-2 border-white shadow-sm z-20" />
              </motion.div>

              {/* Step 3: Left */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.7, ease: 'easeOut' }}
                className="relative flex flex-col md:flex-row md:justify-between items-center w-full"
              >
                <div className="md:w-[45%] md:text-right flex flex-col md:items-end w-full pl-12 md:pl-0 relative">
                  {/* Mobile timeline line */}
                  <div className="md:hidden absolute left-4 top-0 bottom-[-4rem] border-l-2 border-blue-200" />
                  
                  <span className="absolute -top-6 md:-top-12 left-0 md:left-auto md:-right-8 text-7xl md:text-9xl font-black text-ngo-primary/10 select-none -z-10">3</span>
                  
                  <div className="bg-white p-8 rounded-2xl border border-blue-50 hover:-translate-y-1 hover:shadow-xl hover:shadow-blue-900/5 transition-all duration-300 relative z-10 w-full shadow-sm">
                    <h3 className="text-2xl font-bold text-ngo-dark mb-3">Action</h3>
                    <p className="text-slate-500 font-medium mb-3 text-sm tracking-wide">(Field Work & Projects)</p>
                    <p className="text-slate-600 leading-relaxed font-light">Mettre en œuvre des projets de développement concrets sur le terrain, en étroite collaboration avec les communautés locales pour un impact durable.</p>
                  </div>
                </div>
                {/* Dot */}
                <div className="hidden md:block absolute left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2 w-6 h-6 rounded-full bg-ngo-primary border-4 border-white shadow-sm z-20" />
                <div className="md:hidden absolute left-4 top-8 -translate-x-1/2 w-4 h-4 rounded-full bg-ngo-primary border-2 border-white shadow-sm z-20" />
                <div className="hidden md:block md:w-[45%]" />
              </motion.div>

              {/* Step 4: Right */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.7, ease: 'easeOut' }}
                className="relative flex flex-col md:flex-row md:justify-between items-center w-full"
              >
                <div className="hidden md:block md:w-[45%]" />
                <div className="md:w-[45%] flex flex-col w-full pl-12 md:pl-0 relative text-left">
                  {/* Mobile timeline line - end here */}
                  <div className="md:hidden absolute left-4 top-0 bottom-1/2 border-l-2 border-blue-200 -z-0" />

                  <span className="absolute -top-6 md:-top-12 left-0 md:-left-8 text-7xl md:text-9xl font-black text-ngo-primary/10 select-none -z-10">4</span>
                  
                  <div className="bg-white p-8 rounded-2xl border border-blue-50 hover:-translate-y-1 hover:shadow-xl hover:shadow-blue-900/5 transition-all duration-300 relative z-10 w-full shadow-sm">
                    <h3 className="text-2xl font-bold text-ngo-dark mb-3">Plaidoyer</h3>
                    <p className="text-slate-500 font-medium mb-3 text-sm tracking-wide">(Advocacy & Human Rights Defense)</p>
                    <p className="text-slate-600 leading-relaxed font-light">Défendre les droits fondamentaux auprès des institutions nationales et internationales pour garantir des politiques publiques justes et inclusives.</p>
                  </div>
                </div>
                {/* Dot */}
                <div className="hidden md:block absolute left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2 w-6 h-6 rounded-full bg-ngo-primary border-4 border-white shadow-sm z-20" />
                <div className="md:hidden absolute left-4 top-8 -translate-x-1/2 w-4 h-4 rounded-full bg-ngo-primary border-2 border-white shadow-sm z-20" />
              </motion.div>

            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          D.  IMPACT IN FIGURES
      ═══════════════════════════════════════════════════════ */}
      <section className="bg-ngo-secondary/30 py-20 md:py-28">
        <div className="max-w-6xl mx-auto px-6">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-center text-ngo-dark mb-16 tracking-tight"
          >
            Notre Impact en Chiffres
          </motion.h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
            
            {/* Stat 1 */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="flex flex-col items-center text-center"
            >
              <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-lg shadow-blue-900/5 mb-6 text-ngo-primary">
                <Calendar className="w-8 h-8" />
              </div>
              <div className="text-4xl md:text-5xl font-black text-ngo-dark mb-2">
                <CountUp to={1978} />
              </div>
              <p className="text-sm font-medium text-slate-600 uppercase tracking-widest">Année de Fondation</p>
            </motion.div>

            {/* Stat 2 */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex flex-col items-center text-center"
            >
              <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-lg shadow-blue-900/5 mb-6 text-ngo-primary">
                <MapPin className="w-8 h-8" />
              </div>
              <div className="text-4xl md:text-5xl font-black text-ngo-dark mb-2">
                <CountUp to={40} suffix="+" />
              </div>
              <p className="text-sm font-medium text-slate-600 uppercase tracking-widest">Sections au Maroc</p>
            </motion.div>

            {/* Stat 3 */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col items-center text-center"
            >
              <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-lg shadow-blue-900/5 mb-6 text-ngo-primary">
                <Users className="w-8 h-8" />
              </div>
              <div className="text-4xl md:text-5xl font-black text-ngo-dark mb-2">
                <CountUp to={5000} suffix="+" />
              </div>
              <p className="text-sm font-medium text-slate-600 uppercase tracking-widest">Membres Actifs</p>
            </motion.div>

            {/* Stat 4 */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-col items-center text-center"
            >
              <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-lg shadow-blue-900/5 mb-6 text-ngo-primary">
                <Award className="w-8 h-8" />
              </div>
              <div className="text-4xl md:text-5xl font-black text-ngo-dark mb-2">
                <CountUp to={300} suffix="+" />
              </div>
              <p className="text-sm font-medium text-slate-600 uppercase tracking-widest">Projets Réalisés</p>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          E.  LATEST ARTICLES
      ═══════════════════════════════════════════════════════ */}
      <section className="bg-white py-24 md:py-32">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <motion.h2 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-bold text-ngo-dark tracking-tight"
            >
              Dernières Actualités
            </motion.h2>
            <motion.button 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-ngo-primary font-semibold flex items-center gap-2 hover:gap-3 transition-all"
            >
              Voir toutes les actualités <ArrowRight className="w-5 h-5" />
            </motion.button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {/* Card 1 */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="group cursor-pointer"
            >
              <div className="overflow-hidden rounded-2xl mb-6 aspect-[4/3] bg-slate-100">
                <img src="https://images.unsplash.com/photo-1541944743827-e04bb645d993?auto=format&fit=crop&q=80&w=800" alt="News 1" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out" />
              </div>
              <span className="text-ngo-primary font-bold text-xs uppercase tracking-wider mb-3 block">Droits Humains</span>
              <h3 className="text-xl font-bold text-ngo-dark mb-3 leading-snug group-hover:text-ngo-primary transition-colors">
                Conférence internationale sur la reconnaissance juridique
              </h3>
              <p className="text-slate-600 line-clamp-2 mb-4 font-light">
                Des experts internationaux se réunissent pour discuter des avancées et des défis liés à la reconnaissance des droits autochtones au Maroc.
              </p>
              <Link to="/article/1" className="inline-flex items-center gap-2 text-sm font-semibold text-ngo-primary group-hover:gap-3 transition-all">
                Lire la suite <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>

            {/* Card 2 */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="group cursor-pointer"
            >
              <div className="overflow-hidden rounded-2xl mb-6 aspect-[4/3] bg-slate-100">
                <img src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&q=80&w=800" alt="News 2" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out" />
              </div>
              <span className="text-ngo-primary font-bold text-xs uppercase tracking-wider mb-3 block">Culture</span>
              <h3 className="text-xl font-bold text-ngo-dark mb-3 leading-snug group-hover:text-ngo-primary transition-colors">
                Sauvegarde de la langue Tamazight à l'ère numérique
              </h3>
              <p className="text-slate-600 line-clamp-2 mb-4 font-light">
                Tamaynut lance un nouveau programme visant à numériser le patrimoine littéraire Amazigh pour les générations futures.
              </p>
              <Link to="/article/1" className="inline-flex items-center gap-2 text-sm font-semibold text-ngo-primary group-hover:gap-3 transition-all">
                Lire la suite <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>

            {/* Card 3 */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="group cursor-pointer"
            >
              <div className="overflow-hidden rounded-2xl mb-6 aspect-[4/3] bg-slate-100">
                <img src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&q=80&w=800" alt="News 3" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out" />
              </div>
              <span className="text-ngo-primary font-bold text-xs uppercase tracking-wider mb-3 block">Jeunesse</span>
              <h3 className="text-xl font-bold text-ngo-dark mb-3 leading-snug group-hover:text-ngo-primary transition-colors">
                Sommet régional : Renforcement de la société civile
              </h3>
              <p className="text-slate-600 line-clamp-2 mb-4 font-light">
                Une rencontre réunissant plus de 200 jeunes leaders pour partager des stratégies de développement communautaire dans le Haut Atlas.
              </p>
              <Link to="/article/1" className="inline-flex items-center gap-2 text-sm font-semibold text-ngo-primary group-hover:gap-3 transition-all">
                Lire la suite <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
