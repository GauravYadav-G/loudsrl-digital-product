import { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation, Link } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import Layout from './components/Layout';
import Home from './pages';
import { ServicesPage, ServiceDetail } from './pages/Services';
import { AboutPage, WorkPage, InsightsPage, CareersPage, ContactPage } from './pages/Pages';
import { CircleArrow } from './components/ui';

function NotFound() {
  return (
    <section className="min-h-[80svh] flex flex-col justify-center items-center text-center px-4 pt-24">
      <p className="mono text-[0.6rem] tracking-[0.3em] uppercase text-solar">Error 404</p>
      <h1 className="mt-5 display text-[clamp(2.5rem,9vw,7rem)] leading-none">Page not found.</h1>
      <p className="mt-5 text-[15px] font-light text-paper/60 max-w-md">The page you are looking for has moved or never existed. Try the services directory instead.</p>
      <Link to="/" data-hover className="group mt-9 inline-flex items-center gap-4 font-light text-lg">
        <span className="hover-line">Back to home</span><CircleArrow className="text-solar transition-transform duration-500 group-hover:rotate-45" />
      </Link>
    </section>
  );
}

function ScrollManager() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (hash) setTimeout(() => document.querySelector(hash)?.scrollIntoView({ behavior: 'smooth', block: 'start' }), 260);
    else window.scrollTo(0, 0);
  }, [pathname, hash]);
  return null;
}

function Shell() {
  const loc = useLocation();

  return (
    <>
      <ScrollManager />
      <AnimatePresence mode="wait">
        <motion.div key={loc.pathname} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: .3 }}>
          <Routes location={loc}>
            <Route element={<Layout />}>
              <Route path="/" element={<Home />} />
              <Route path="/services" element={<ServicesPage />} />
              <Route path="/services/:slug" element={<ServiceDetail />} />
              <Route path="/who-we-are" element={<AboutPage />} />
              <Route path="/work" element={<WorkPage />} />
              <Route path="/insights" element={<InsightsPage />} />
              <Route path="/careers" element={<CareersPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="*" element={<NotFound />} />
            </Route>
          </Routes>
        </motion.div>
      </AnimatePresence>
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Shell />
    </BrowserRouter>
  );
}
