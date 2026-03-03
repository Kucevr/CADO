import { useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Home from './pages/Home'
import Projects from './pages/Projects'
import ProjectDetail from './pages/ProjectDetail'
import Approach from './pages/Approach'
import AboutUs from './pages/AboutUs'
import News from './pages/News'
import Blog from './pages/Blog'
import ArticleDetail from './pages/ArticleDetail'
import Contact from './pages/Contact'
import PrivacyPolicy from './pages/PrivacyPolicy'
import Layout from './components/Layout'
import { Preloader } from './components/Preloader'
import { TransitionProvider } from './context/TransitionContext'
import Lenis from 'lenis'

gsap.registerPlugin(ScrollTrigger);

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

function AppContent() {
  const location = useLocation();

  useEffect(() => {
    // Delay refresh so it doesn't fire mid-transition and break the curtain animation
    const timer = setTimeout(() => {
      ScrollTrigger.refresh();
    }, 1200);
    return () => clearTimeout(timer);
  }, [location.pathname]);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
    })

    lenis.on('scroll', ScrollTrigger.update)

    const updateLenis = (time: number) => {
      lenis.raf(time * 1000)
    }

    gsap.ticker.add(updateLenis)
    gsap.ticker.lagSmoothing(0)

    return () => {
      lenis.destroy()
      gsap.ticker.remove(updateLenis)
    }
  }, [])

  return (
    <TransitionProvider>
      <Preloader />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="projects" element={<Projects />} />
          <Route path="project/:id" element={<ProjectDetail />} />
          <Route path="projects/:id" element={<ProjectDetail />} />
          <Route path="approach" element={<Approach />} />
          <Route path="about-us" element={<AboutUs />} />
          <Route path="news" element={<News />} />
          <Route path="blog" element={<Blog />} />
          <Route path="blog/:id" element={<ArticleDetail />} />
          <Route path="contact" element={<Contact />} />
          <Route path="privacy-policy" element={<PrivacyPolicy />} />
        </Route>
      </Routes>
    </TransitionProvider>
  )
}

export default App
