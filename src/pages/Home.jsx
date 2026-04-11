import React from 'react';
import { motion } from 'framer-motion';
import { Shield, BookOpen, Users, ArrowRight } from 'lucide-react';
import { useTranslation, Trans } from 'react-i18next';

const MissionCard = ({ icon: Icon, title, description, colorClass }) => (
  <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-xl transition-all group">
    <div className={`w-14 h-14 ${colorClass} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
      <Icon className="w-7 h-7 text-white" />
    </div>
    <h3 className="text-xl font-bold mb-3 text-slate-900">{title}</h3>
    <p className="text-slate-600 leading-relaxed text-sm">{description}</p>
  </div>
);

const ActivityCard = ({ image, date, title, category, readMore }) => (
  <div className="group cursor-pointer">
    <div className="relative overflow-hidden rounded-2xl mb-4 aspect-[16/10]">
      <img src={image} alt={title} className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500" />
      <div className="absolute top-4 start-4">
        <span className="bg-white/90 backdrop-blur-sm text-brand-navy px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
          {category}
        </span>
      </div>
    </div>
    <p className="text-brand-green text-xs font-bold mb-2 tracking-wide uppercase">{date}</p>
    <h3 className="text-lg font-bold group-hover:text-brand-navy transition-colors line-clamp-2">{title}</h3>
    <div className="mt-4 flex items-center text-brand-gold font-bold text-sm gap-2">
      {readMore} <ArrowRight className="w-4 h-4" />
    </div>
  </div>
);

const Home = () => {
  const { t } = useTranslation();

  return (
    <div className="hero-gradient">
      {/* Hero Section */}
      <section className="section-padding flex flex-col items-center text-center min-h-[80vh] justify-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="bg-brand-gold/10 text-brand-gold px-4 py-1 rounded-full text-sm font-bold mb-8 uppercase tracking-widest"
        >
          {t('hero.badge')}
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="text-5xl md:text-7xl font-bold tracking-tighter text-slate-900 max-w-4xl leading-[1.1] mb-8"
        >
          <Trans
            i18nKey="hero.title"
            values={{ highlight: t('hero.highlight') }}
            components={{
              highlight: <span className="text-brand-green" />,
            }}
          />
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="text-lg md:text-xl text-slate-600 max-w-2xl leading-relaxed mb-12"
        >
          {t('hero.subtitle')}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="flex flex-col sm:flex-row gap-4"
        >
          <button className="btn-primary flex items-center gap-2 text-lg px-8 py-4">
            {t('hero.discoverBtn')}
          </button>
          <button className="btn-secondary text-lg px-8 py-4">
            {t('hero.joinBtn')}
          </button>
        </motion.div>
      </section>

      {/* Mission Section */}
      <section className="bg-slate-50 py-24">
        <div className="section-padding">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight">{t('mission.sectionTitle')}</h2>
            <div className="h-1.5 w-20 bg-brand-gold mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <MissionCard
              icon={Shield}
              title={t('mission.humanRights.title')}
              description={t('mission.humanRights.description')}
              colorClass="bg-red-500"
            />
            <MissionCard
              icon={BookOpen}
              title={t('mission.culture.title')}
              description={t('mission.culture.description')}
              colorClass="bg-brand-green"
            />
            <MissionCard
              icon={Users}
              title={t('mission.youth.title')}
              description={t('mission.youth.description')}
              colorClass="bg-brand-gold"
            />
          </div>
        </div>
      </section>

      {/* Activities Section */}
      <section className="section-padding">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-3xl font-bold mb-2">{t('activities.sectionTitle')}</h2>
            <p className="text-slate-500">{t('activities.sectionSubtitle')}</p>
          </div>
          <button className="hidden sm:flex items-center gap-2 text-brand-navy font-bold hover:gap-3 transition-all">
            {t('activities.viewAll')} <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <ActivityCard
            image="https://images.unsplash.com/photo-1541944743827-e04bb645d993?auto=format&fit=crop&q=80&w=800"
            date="Oct 24, 2025"
            category="Advocacy"
            title="International Conference on Indigenous Identity and Legal Recognition"
            readMore={t('activities.readMore')}
          />
          <ActivityCard
            image="https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&q=80&w=800"
            date="Sep 12, 2025"
            category="Culture"
            title="Tamazight Language Preservation: Innovative Teaching Methods for Youth"
            readMore={t('activities.readMore')}
          />
          <ActivityCard
            image="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&q=80&w=800"
            date="Aug 30, 2025"
            category="Community"
            title="Regional Summit: Strengthening Civil Society Networks in the Atlas Highlands"
            readMore={t('activities.readMore')}
          />
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding">
        <div className="bg-brand-navy rounded-[2.5rem] p-12 md:p-20 text-center text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-brand-gold opacity-10 rounded-full -mr-32 -mt-32"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-brand-green opacity-10 rounded-full -ml-32 -mb-32"></div>

          <h2 className="text-3xl md:text-5xl font-bold mb-6 max-w-3xl mx-auto leading-tight">
            {t('cta.title')}
          </h2>
          <p className="text-slate-300 text-lg mb-12 max-w-2xl mx-auto">
            {t('cta.subtitle')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-brand-navy px-10 py-4 rounded-full font-bold text-lg hover:bg-slate-100 transition-all shadow-xl">
              {t('cta.donate')}
            </button>
            <button className="border border-white/30 text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-white/10 transition-all">
              {t('cta.volunteer')}
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
