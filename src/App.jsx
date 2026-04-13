import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Join from './pages/Join';
import ArticleDetail from './pages/ArticleDetail';
import Donate from './pages/Donate';
import Contact from './pages/Contact';

// Placeholder components for routes under development
const PlaceholderPage = ({ title }) => (
  <div className="section-padding py-32 text-center">
    <h1 className="text-4xl font-bold text-slate-900 mb-4">{title}</h1>
    <p className="text-slate-500">This section is currently being updated by our team. Please check back soon.</p>
  </div>
);

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/activities" element={<PlaceholderPage title="Recent Activities" />} />
          <Route path="/join" element={<Join />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/article/:id" element={<ArticleDetail />} />
          <Route path="/donate" element={<Donate />} />
          {/* Catch-all route */}
          <Route path="*" element={<PlaceholderPage title="404 - Page Not Found" />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
