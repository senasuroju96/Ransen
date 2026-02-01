import React, { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform, useSpring, useInView, useAnimation } from 'framer-motion';
import { useNavigate, useLocation } from 'react-router-dom';
import { 
  Search, Share2, Target, Monitor, Video, Bot, Headphones, Sparkles, MessageSquare,
  ArrowRight, Mail, Phone, MapPin, Menu, X, CheckCircle, BarChart3,
  ShoppingBag, Laptop, Heart, Briefcase, Home as HomeIcon, TrendingUp,
  Zap, Clock, Award, Users, BookOpen, Plane, Factory, Scale, Car, UtensilsCrossed
} from 'lucide-react';
import { services, portfolioItems, testimonials, stats, industries, process } from '../mock';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';
import { Card } from '../components/ui/card';
import { useToast } from '../hooks/use-toast';

const iconMap = {
  Search: Search,
  Share2: Share2,
  Target: Target,
  Monitor: Monitor,
  Video: Video,
  Bot: Bot,
  Headphones: Headphones,
  ShoppingBag: ShoppingBag,
  Laptop: Laptop,
  Heart: Heart,
  Briefcase: Briefcase,
  Home: HomeIcon,
  TrendingUp: TrendingUp,
  Sparkles: Sparkles,
  MessageSquare: MessageSquare,
  BookOpen: BookOpen,
  Plane: Plane,
  Factory: Factory,
  Scale: Scale,
  Car: Car,
  UtensilsCrossed: UtensilsCrossed
};

// Animated Counter Component
const AnimatedCounter = ({ end, suffix = "", duration = 2 }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      let startTime;
      let animationFrame;

      const animate = (currentTime) => {
        if (!startTime) startTime = currentTime;
        const progress = (currentTime - startTime) / (duration * 1000);

        if (progress < 1) {
          setCount(Math.floor(end * progress));
          animationFrame = requestAnimationFrame(animate);
        } else {
          setCount(end);
        }
      };

      animationFrame = requestAnimationFrame(animate);
      return () => cancelAnimationFrame(animationFrame);
    }
  }, [isInView, end, duration]);

  return (
    <span ref={ref}>
      {count}{suffix}
    </span>
  );
};

const Home = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [cursorVariant, setCursorVariant] = useState("default");
  const [floatingElements, setFloatingElements] = useState([]);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const { toast } = useToast();
  const { scrollYProgress } = useScroll();
  const smoothProgress = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });
  const navigate = useNavigate();
  const location = useLocation();

  // Initialize floating marketing elements on edges only
  useEffect(() => {
    const elements = [
      // Top edge elements
      { id: 1, type: 'orb', x: 5, y: 15, size: 'small', color: '#8A2BE2' },
      { id: 2, type: 'orb', x: 95, y: 12, size: 'medium', color: '#6A0DAD' },
      
      // Right edge elements
      { id: 3, type: 'orb', x: 92, y: 35, size: 'small', color: '#9370DB' },
      { id: 4, type: 'orb', x: 96, y: 60, size: 'medium', color: '#8A2BE2' },
      { id: 5, type: 'orb', x: 93, y: 85, size: 'small', color: '#6A0DAD' },
      
      // Bottom edge elements
      { id: 6, type: 'orb', x: 70, y: 92, size: 'medium', color: '#9370DB' },
      { id: 7, type: 'orb', x: 30, y: 95, size: 'small', color: '#8A2BE2' },
      
      // Left edge elements
      { id: 8, type: 'orb', x: 3, y: 40, size: 'medium', color: '#6A0DAD' },
      { id: 9, type: 'orb', x: 5, y: 70, size: 'small', color: '#9370DB' },
      { id: 10, type: 'orb', x: 7, y: 90, size: 'medium', color: '#8A2BE2' },
    ];
    setFloatingElements(elements);
  }, []);

  // Mouse move effect with smooth tracking
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Cursor followers
  const cursorX = useSpring(mousePosition.x, { stiffness: 150, damping: 20 });
  const cursorY = useSpring(mousePosition.y, { stiffness: 150, damping: 20 });

  // Auto-scroll to section if coming from service detail page
  useEffect(() => {
    if (location.state?.scrollTo) {
      setTimeout(() => {
        scrollToSection(location.state.scrollTo);
      }, 100);
    }
  }, [location]);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "Thank you for reaching out. We'll get back to you soon.",
    });
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  // Parallax values
  const y1 = useTransform(smoothProgress, [0, 1], [0, -100]);
  const y2 = useTransform(smoothProgress, [0, 1], [0, -200]);
  const opacity = useTransform(smoothProgress, [0, 0.2], [1, 0]);

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#6A0DAD] to-[#8A2BE2] origin-left z-[100]"
        style={{ scaleX: smoothProgress }}
      />

      {/* Custom Cursor */}
      <motion.div
        className="custom-cursor"
        style={{
          x: cursorX,
          y: cursorY,
        }}
      />
      <motion.div
        className="custom-cursor-dot"
        animate={{
          x: mousePosition.x - 4,
          y: mousePosition.y - 4,
        }}
        transition={{ type: "spring", stiffness: 500, damping: 28 }}
      />

      {/* Cursor follower effect */}
      <motion.div
        className="cursor-glow"
        animate={{
          x: mousePosition.x - 300,
          y: mousePosition.y - 300,
        }}
        transition={{ type: "spring", stiffness: 50, damping: 20 }}
      />

      {/* Navigation */}
      <motion.nav 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-[#6A0DAD] to-[#8A2BE2] shadow-lg"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <motion.div 
              className="flex items-center space-x-3 cursor-pointer"
              whileHover={{ scale: 1.05 }}
              onClick={() => scrollToSection('home')}
            >
              <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center">
                <BarChart3 className="text-white" size={24} />
              </div>
              <div>
                <div className="text-2xl font-bold text-white tracking-tight">RANSEN</div>
                <div className="text-xs text-white/80">Digital Media Works</div>
              </div>
            </motion.div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-1 bg-white/90 backdrop-blur-md rounded-full px-8 py-3">
              <button onClick={() => scrollToSection('services')} className="nav-link-purple">Services</button>
              <button onClick={() => scrollToSection('about')} className="nav-link-purple">About Us</button>
              <button onClick={() => scrollToSection('testimonials')} className="nav-link-purple">Testimonials</button>
            </div>

            <div className="hidden md:block">
              <Button 
                onClick={() => scrollToSection('contact')} 
                className="btn-black"
              >
                Book A Free Strategy Call
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden text-white"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="md:hidden py-4 space-y-2"
            >
              <button onClick={() => scrollToSection('services')} className="block w-full text-left px-4 py-2 text-white hover:bg-white/10 rounded">Services</button>
              <button onClick={() => scrollToSection('about')} className="block w-full text-left px-4 py-2 text-white hover:bg-white/10 rounded">About Us</button>
              <button onClick={() => scrollToSection('testimonials')} className="block w-full text-left px-4 py-2 text-white hover:bg-white/10 rounded">Testimonials</button>
              <button onClick={() => scrollToSection('contact')} className="block w-full text-left px-4 py-2 text-white hover:bg-white/10 rounded">Contact</button>
            </motion.div>
          )}
        </div>
      </motion.nav>

      {/* Hero Section - Dark Theme with 3D Bar Graphs */}
      <section id="home" className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900">
        {/* Animated gradient background */}
        <motion.div 
          className="absolute inset-0"
          style={{
            background: 'radial-gradient(circle at 20% 50%, rgba(138, 43, 226, 0.15) 0%, transparent 50%), radial-gradient(circle at 80% 80%, rgba(106, 13, 173, 0.15) 0%, transparent 50%)',
          }}
          animate={{
            opacity: [0.5, 0.8, 0.5],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />

        {/* Grid overlay */}
        <div className="absolute inset-0 opacity-5">
          <div 
            className="w-full h-full" 
            style={{
              backgroundImage: 'linear-gradient(rgba(138, 43, 226, 0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(138, 43, 226, 0.5) 1px, transparent 1px)',
              backgroundSize: '50px 50px',
            }}
          />
        </div>

        <div className="max-w-7xl mx-auto relative z-10 w-full">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <motion.h1 
                className="text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                Scale Your Business with{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
                  Data-Driven Marketing
                </span>
              </motion.h1>
              
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-xl text-gray-300 mb-8 leading-relaxed"
              >
                AI-powered strategies that deliver measurable results. From SEO to paid media, 
                we engineer growth campaigns that convert.
              </motion.p>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="flex flex-col sm:flex-row gap-4"
              >
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button 
                    onClick={() => scrollToSection('contact')} 
                    className="btn-purple-light group text-lg px-8 py-6"
                  >
                    Get Started
                    <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
                  </Button>
                </motion.div>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button 
                    onClick={() => scrollToSection('services')} 
                    className="bg-white/10 hover:bg-white/20 text-white border-2 border-white/20 text-lg px-8 py-6 backdrop-blur-sm"
                  >
                    View Services
                  </Button>
                </motion.div>
              </motion.div>

              {/* Mini stats */}
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
                className="grid grid-cols-3 gap-6 mt-12"
              >
                {[
                  { value: '250%', label: 'Avg Growth' },
                  { value: '98%', label: 'Client Satisfaction' },
                  { value: '500+', label: 'Projects' },
                ].map((stat, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8 + i * 0.1 }}
                    className="text-center"
                  >
                    <div className="text-3xl font-bold text-purple-400">{stat.value}</div>
                    <div className="text-sm text-gray-400 mt-1">{stat.label}</div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>

            {/* Right - 3D Bar Graphs */}
            <motion.div 
              className="relative h-[600px] hidden lg:block"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.3 }}
            >
              {/* 3D Bar Chart Visualization */}
              <div className="absolute inset-0 flex items-center justify-center perspective-1000">
                {[
                  { height: 60, color: '#FF6B6B', x: -120, y: 50, delay: 0 },
                  { height: 80, color: '#4ECDC4', x: -60, y: 30, delay: 0.1 },
                  { height: 95, color: '#45B7D1', x: 0, y: 10, delay: 0.2 },
                  { height: 75, color: '#FFA07A', x: 60, y: 35, delay: 0.3 },
                  { height: 88, color: '#98D8C8', x: 120, y: 20, delay: 0.4 },
                ].map((bar, index) => {
                  const distanceX = mousePosition.x - (window.innerWidth * 0.7);
                  const distanceY = mousePosition.y - (window.innerHeight * 0.4);
                  const distance = Math.sqrt(distanceX * distanceX + distanceY * distanceY);
                  const influence = Math.max(0, 1 - distance / 500);

                  return (
                    <motion.div
                      key={index}
                      className="absolute"
                      style={{
                        left: `50%`,
                        top: `50%`,
                        marginLeft: bar.x,
                        marginTop: bar.y,
                      }}
                      initial={{ opacity: 0, y: 100, rotateX: 45 }}
                      animate={{ 
                        opacity: 1, 
                        y: 0,
                        rotateX: 45 + influence * 10,
                        rotateY: influence * 15,
                        scale: 1 + influence * 0.2,
                      }}
                      transition={{ 
                        duration: 0.8, 
                        delay: bar.delay,
                        rotateX: { type: "spring", stiffness: 100 },
                        rotateY: { type: "spring", stiffness: 100 },
                      }}
                      whileHover={{ 
                        scale: 1.2,
                        rotateY: 25,
                        transition: { duration: 0.3 }
                      }}
                    >
                      {/* 3D Bar */}
                      <div 
                        className="relative"
                        style={{
                          width: '80px',
                          height: `${bar.height * 3}px`,
                          transformStyle: 'preserve-3d',
                        }}
                      >
                        {/* Front face */}
                        <motion.div
                          className="absolute inset-0 rounded-t-lg"
                          style={{
                            background: `linear-gradient(180deg, ${bar.color}, ${bar.color}dd)`,
                            boxShadow: `0 0 30px ${bar.color}80`,
                          }}
                          animate={{
                            boxShadow: [
                              `0 0 30px ${bar.color}80`,
                              `0 0 50px ${bar.color}`,
                              `0 0 30px ${bar.color}80`,
                            ],
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            delay: bar.delay,
                          }}
                        />
                        
                        {/* Top face */}
                        <div
                          className="absolute top-0 left-0 right-0 rounded-lg"
                          style={{
                            height: '10px',
                            background: `linear-gradient(135deg, ${bar.color}ff, ${bar.color}cc)`,
                            transform: 'rotateX(90deg) translateZ(5px)',
                          }}
                        />
                        
                        {/* Side face */}
                        <div
                          className="absolute top-0 right-0 bottom-0 rounded-r-lg"
                          style={{
                            width: '10px',
                            background: `linear-gradient(90deg, ${bar.color}dd, ${bar.color}99)`,
                            transform: 'rotateY(90deg) translateZ(75px)',
                          }}
                        />

                        {/* Percentage label */}
                        <motion.div
                          className="absolute -top-8 left-1/2 transform -translate-x-1/2 text-white font-bold text-lg whitespace-nowrap"
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: bar.delay + 0.5 }}
                        >
                          {bar.height}%
                        </motion.div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>

              {/* Growth arrow */}
              <motion.div
                className="absolute top-1/4 left-1/4 text-green-400"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.2, duration: 0.5 }}
              >
                <motion.div
                  animate={{ 
                    y: [-5, 5, -5],
                    rotate: [-5, 5, -5]
                  }}
                  transition={{ duration: 3, repeat: Infinity }}
                  className="text-6xl"
                >
                  📈
                </motion.div>
              </motion.div>

              {/* Data points */}
              {[...Array(15)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-2 h-2 rounded-full bg-purple-400"
                  style={{
                    left: `${20 + Math.random() * 60}%`,
                    top: `${20 + Math.random() * 60}%`,
                  }}
                  animate={{
                    scale: [1, 1.5, 1],
                    opacity: [0.3, 0.8, 0.3],
                    y: [0, -20, 0],
                  }}
                  transition={{
                    duration: 3 + Math.random() * 2,
                    repeat: Infinity,
                    delay: Math.random() * 2,
                  }}
                />
              ))}
            </motion.div>
          </div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="w-6 h-10 border-2 border-purple-400 rounded-full flex justify-center">
            <motion.div 
              className="w-1 h-3 bg-purple-400 rounded-full mt-2"
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </div>
        </motion.div>
      </section>
        {/* Animated background elements */}
        <motion.div 
          className="absolute top-20 right-10 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-30"
          animate={{
            x: [0, 30, 0],
            y: [0, 50, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute bottom-20 left-10 w-96 h-96 bg-violet-200 rounded-full mix-blend-multiply filter blur-xl opacity-20"
          animate={{
            x: [0, -30, 0],
            y: [0, -50, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />

        {/* Interactive Floating Orbs on Edges */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {floatingElements.map((element) => {
            const distanceX = mousePosition.x - (window.innerWidth * element.x / 100);
            const distanceY = mousePosition.y - (window.innerHeight * element.y / 100);
            const distance = Math.sqrt(distanceX * distanceX + distanceY * distanceY);
            const maxDistance = 400;
            const influence = Math.max(0, 1 - distance / maxDistance);
            const moveX = -distanceX * influence * 0.15;
            const moveY = -distanceY * influence * 0.15;

            const sizeMap = {
              small: 60,
              medium: 90,
              large: 120
            };
            const baseSize = sizeMap[element.size] || 60;

            return (
              <motion.div
                key={element.id}
                className="absolute"
                style={{
                  left: `${element.x}%`,
                  top: `${element.y}%`,
                }}
                animate={{
                  x: moveX,
                  y: moveY,
                }}
                transition={{
                  type: "spring",
                  stiffness: 100,
                  damping: 20,
                }}
              >
                {/* Main orb */}
                <motion.div
                  className="relative"
                  style={{
                    width: baseSize,
                    height: baseSize,
                  }}
                  animate={{
                    scale: 1 + influence * 0.4,
                  }}
                >
                  {/* Orb body with glassmorphism */}
                  <motion.div
                    className="absolute inset-0 rounded-full"
                    style={{
                      background: `radial-gradient(circle at 30% 30%, ${element.color}40, ${element.color}20)`,
                      backdropFilter: 'blur(8px)',
                      border: `2px solid ${element.color}30`,
                    }}
                    animate={{
                      rotate: influence > 0.3 ? 360 : 0,
                    }}
                    transition={{
                      rotate: { duration: 3, ease: "linear" },
                    }}
                  >
                    {/* Inner glow */}
                    <motion.div
                      className="absolute inset-2 rounded-full"
                      style={{
                        background: `radial-gradient(circle at center, ${element.color}60, transparent)`,
                      }}
                      animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.5, 0.8, 0.5],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    />
                  </motion.div>

                  {/* Outer glow ring */}
                  <motion.div
                    className="absolute -inset-2 rounded-full"
                    style={{
                      background: `radial-gradient(circle, ${element.color}20, transparent 70%)`,
                      filter: 'blur(10px)',
                    }}
                    animate={{
                      opacity: influence * 0.8,
                      scale: 1 + influence * 0.5,
                    }}
                  />

                  {/* Connecting arc to cursor when close */}
                  {influence > 0.4 && (
                    <motion.div
                      className="absolute top-1/2 left-1/2"
                      style={{
                        width: 2,
                        height: Math.abs(distance),
                        background: `linear-gradient(to bottom, ${element.color}, transparent)`,
                        transformOrigin: 'top',
                        transform: `rotate(${Math.atan2(distanceY, distanceX) * 180 / Math.PI + 90}deg)`,
                      }}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: influence * 0.5 }}
                    />
                  )}
                </motion.div>
              </motion.div>
            );
          })}
        </div>

        {/* Cursor Trail Effect */}
        <motion.div
          className="absolute pointer-events-none"
          style={{
            left: mousePosition.x,
            top: mousePosition.y,
            width: 200,
            height: 200,
            marginLeft: -100,
            marginTop: -100,
          }}
        >
          <motion.div
            className="absolute inset-0 rounded-full"
            style={{
              background: 'radial-gradient(circle, rgba(138, 43, 226, 0.15), transparent 70%)',
            }}
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.5, 0, 0.5],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeOut",
            }}
          />
        </motion.div>

        {/* Interactive Grid Points */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(20)].map((_, i) => {
            // Position points in a grid avoiding center text area
            const col = i % 5;
            const row = Math.floor(i / 5);
            const elementX = 10 + (col * 20);
            const elementY = 10 + (row * 22);
            
            // Skip center area (30-70% width, 30-70% height)
            if (elementX > 30 && elementX < 70 && elementY > 30 && elementY < 70) {
              return null;
            }

            const distanceX = mousePosition.x - (window.innerWidth * elementX / 100);
            const distanceY = mousePosition.y - (window.innerHeight * elementY / 100);
            const distance = Math.sqrt(distanceX * distanceX + distanceY * distanceY);
            const influence = Math.max(0, 1 - distance / 300);

            return (
              <motion.div
                key={`grid-${i}`}
                className="absolute w-2 h-2 rounded-full"
                style={{
                  left: `${elementX}%`,
                  top: `${elementY}%`,
                  background: `radial-gradient(circle, #8A2BE2, #6A0DAD)`,
                }}
                animate={{
                  scale: 1 + influence * 3,
                  opacity: 0.2 + influence * 0.6,
                }}
                transition={{
                  type: "spring",
                  stiffness: 200,
                  damping: 25,
                }}
              />
            );
          })}
        </div>

        {/* AI Animation Container */}
        <div className="absolute inset-0 overflow-hidden" style={{ zIndex: 1 }}>
          {/* Animated Grid Lines */}
          <svg className="absolute inset-0 w-full h-full opacity-10">
            <defs>
              <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <motion.path
                  d="M 40 0 L 0 0 0 40"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="0.5"
                  className="text-purple-600"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 0.3 }}
                  transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
                />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>

          {/* Floating AI Elements */}
          {[...Array(15)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute"
              initial={{
                x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1920),
                y: Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 1080),
                scale: 0,
                opacity: 0
              }}
              animate={{
                x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1920),
                y: Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 1080),
                scale: [0, 1, 1, 0],
                opacity: [0, 0.6, 0.6, 0]
              }}
              transition={{
                duration: Math.random() * 10 + 15,
                repeat: Infinity,
                delay: Math.random() * 5,
                ease: "easeInOut"
              }}
            >
              <div 
                className="w-2 h-2 bg-purple-500 rounded-full"
                style={{
                  boxShadow: '0 0 10px rgba(138, 43, 226, 0.5)'
                }}
              />
            </motion.div>
          ))}

          {/* Animated Neural Network Lines */}
          <svg className="absolute inset-0 w-full h-full" style={{ zIndex: 2 }}>
            {[...Array(8)].map((_, i) => {
              const startX = (i * 15) + '%';
              const endX = ((i + 1) * 15 + Math.random() * 20) + '%';
              return (
                <motion.line
                  key={i}
                  x1={startX}
                  y1="20%"
                  x2={endX}
                  y2="80%"
                  stroke="url(#gradient1)"
                  strokeWidth="1"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ 
                    pathLength: [0, 1, 0],
                    opacity: [0, 0.3, 0]
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    delay: i * 0.5,
                    ease: "easeInOut"
                  }}
                />
              );
            })}
            <defs>
              <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#6A0DAD" stopOpacity="0" />
                <stop offset="50%" stopColor="#8A2BE2" stopOpacity="1" />
                <stop offset="100%" stopColor="#6A0DAD" stopOpacity="0" />
              </linearGradient>
            </defs>
          </svg>

          {/* Pulsing AI Brain Icon */}
          <motion.div
            className="absolute right-10 top-1/4 hidden lg:block"
            animate={{
              scale: [1, 1.1, 1],
              rotate: [0, 5, 0, -5, 0]
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <div className="relative">
              <motion.div
                className="absolute inset-0 bg-purple-500 rounded-full blur-2xl"
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [0.3, 0.1, 0.3]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              <svg width="200" height="200" viewBox="0 0 200 200" className="relative">
                <motion.circle
                  cx="100"
                  cy="100"
                  r="60"
                  fill="none"
                  stroke="url(#brainGradient)"
                  strokeWidth="2"
                  strokeDasharray="4 4"
                  initial={{ rotate: 0 }}
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                />
                <motion.circle
                  cx="100"
                  cy="100"
                  r="45"
                  fill="none"
                  stroke="url(#brainGradient)"
                  strokeWidth="2"
                  strokeDasharray="3 3"
                  initial={{ rotate: 0 }}
                  animate={{ rotate: -360 }}
                  transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                />
                <motion.path
                  d="M 100 55 Q 120 70 115 90 Q 110 110 100 115 Q 90 110 85 90 Q 80 70 100 55"
                  fill="url(#brainGradient)"
                  initial={{ scale: 0.8, opacity: 0.5 }}
                  animate={{ scale: [0.8, 1, 0.8], opacity: [0.5, 1, 0.5] }}
                  transition={{ duration: 3, repeat: Infinity }}
                />
                <defs>
                  <linearGradient id="brainGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#6A0DAD" />
                    <stop offset="100%" stopColor="#8A2BE2" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
          </motion.div>

          {/* Binary Rain Effect */}
          <div className="absolute inset-0 overflow-hidden opacity-5">
            {[...Array(20)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute text-purple-600 font-mono text-xs"
                style={{ left: `${i * 5}%` }}
                initial={{ y: -100 }}
                animate={{ y: window.innerHeight + 100 }}
                transition={{
                  duration: Math.random() * 10 + 10,
                  repeat: Infinity,
                  delay: Math.random() * 5,
                  ease: "linear"
                }}
              >
                {Array.from({ length: 20 }, () => Math.random() > 0.5 ? '1' : '0').join('\n')}
              </motion.div>
            ))}
          </div>

          {/* Animated Rings */}
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
              style={{
                width: `${300 + i * 150}px`,
                height: `${300 + i * 150}px`,
                border: '1px solid',
                borderColor: 'rgba(138, 43, 226, 0.2)',
                borderRadius: '50%',
                zIndex: 0
              }}
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{
                scale: [0.8, 1.2, 0.8],
                opacity: [0, 0.3, 0]
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                delay: i * 2,
                ease: "easeInOut"
              }}
            />
          ))}
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          {/* Subtle instruction hint */}
          <motion.div
            className="absolute -top-4 right-0 text-purple-600 text-sm font-medium flex items-center gap-2"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: [0.5, 1, 0.5], y: 0 }}
            transition={{ 
              opacity: { duration: 2, repeat: Infinity },
              y: { duration: 0.5 }
            }}
          >
            <motion.span
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              ✨
            </motion.span>
            Move your cursor
          </motion.div>

          <motion.div 
            className="max-w-4xl"
            style={{ y: y1, opacity }}
          >
            <motion.h1 
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="hero-title-purple mb-6"
            >
              <span className="text-purple-gradient">Data-Driven Digital</span>
              <br />
              <span className="text-black">Marketing</span> for<br />
              Businesses That Want<br />
              to Scale.
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-2xl text-gray-700 mb-10 leading-relaxed max-w-3xl font-medium"
            >
              AI-powered digital marketing engineered to drive qualified leads, increase revenue, 
              and deliver measurable ROI for businesses ready to scale.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <Button 
                onClick={() => scrollToSection('contact')} 
                className="btn-purple group"
              >
                Book a Free Consultation
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
              </Button>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="w-6 h-10 border-2 border-purple-600 rounded-full flex justify-center">
            <motion.div 
              className="w-1 h-3 bg-purple-600 rounded-full mt-2"
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </div>
        </motion.div>
      </section>

      {/* Stats Section with Animated Counters */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-[#6A0DAD] to-[#8A2BE2]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.id}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-5xl md:text-6xl font-bold text-white mb-2">
                  <AnimatedCounter end={stat.value} suffix={stat.suffix} />
                </div>
                <div className="text-white/90 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-purple-50 to-white relative overflow-hidden">
        {/* Background decoration */}
        <motion.div
          className="absolute top-0 right-0 w-96 h-96 bg-purple-100 rounded-full blur-3xl opacity-30"
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 50, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <motion.h2 
              className="section-title-purple mb-6"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              Comprehensive Digital Marketing Services
            </motion.h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
              From SEO and paid advertising to AI automation and LLMO, we offer cutting-edge solutions 
              tailored to accelerate your business growth and dominate your market.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const IconComponent = iconMap[service.icon];
              return (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  style={{
                    transformStyle: "preserve-3d",
                  }}
                  onMouseMove={(e) => {
                    const rect = e.currentTarget.getBoundingClientRect();
                    const x = e.clientX - rect.left;
                    const y = e.clientY - rect.top;
                    const centerX = rect.width / 2;
                    const centerY = rect.height / 2;
                    const rotateX = (y - centerY) / 10;
                    const rotateY = (centerX - x) / 10;
                    e.currentTarget.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.05, 1.05, 1.05)`;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
                  }}
                >
                  <Card className="service-card-purple h-full flex flex-col relative overflow-hidden group">
                    {/* Animated gradient overlay */}
                    <motion.div
                      className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                      style={{
                        background: 'radial-gradient(circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(138, 43, 226, 0.1) 0%, transparent 50%)',
                      }}
                      onMouseMove={(e) => {
                        const rect = e.currentTarget.getBoundingClientRect();
                        const x = ((e.clientX - rect.left) / rect.width) * 100;
                        const y = ((e.clientY - rect.top) / rect.height) * 100;
                        e.currentTarget.style.setProperty('--mouse-x', `${x}%`);
                        e.currentTarget.style.setProperty('--mouse-y', `${y}%`);
                      }}
                    />
                    
                    <div className="p-8 flex-grow relative z-10">
                      <motion.div 
                        className="w-14 h-14 bg-gradient-to-br from-[#6A0DAD] to-[#8A2BE2] rounded-xl flex items-center justify-center mb-6 relative"
                        whileHover={{ 
                          rotate: 360,
                          scale: 1.1
                        }}
                        transition={{ duration: 0.6 }}
                      >
                        <motion.div
                          className="absolute inset-0 bg-white rounded-xl"
                          initial={{ scale: 0 }}
                          whileHover={{ scale: 1 }}
                          transition={{ duration: 0.3 }}
                          style={{ opacity: 0.2 }}
                        />
                        <IconComponent className="text-white relative z-10" size={28} />
                      </motion.div>
                      <h3 className="text-xl font-bold mb-3 text-gray-900">
                        {service.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed mb-4">
                        {service.description}
                      </p>
                    </div>
                    <div className="px-8 pb-8 relative z-10">
                      <motion.div 
                        whileHover={{ scale: 1.05 }} 
                        whileTap={{ scale: 0.95 }}
                      >
                        <Button 
                          onClick={() => navigate(`/services/${service.slug}`)}
                          className="w-full bg-purple-600 hover:bg-purple-700 text-white relative overflow-hidden group/btn"
                        >
                          <motion.span
                            className="absolute inset-0 bg-gradient-to-r from-purple-400 to-purple-600"
                            initial={{ x: '-100%' }}
                            whileHover={{ x: 0 }}
                            transition={{ duration: 0.3 }}
                          />
                          <span className="relative z-10 flex items-center justify-center">
                            Learn More
                            <ArrowRight className="ml-2 group-hover/btn:translate-x-1 transition-transform" size={16} />
                          </span>
                        </Button>
                      </motion.div>
                    </div>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-32 px-4 sm:px-6 lg:px-8 bg-white relative overflow-hidden">
        {/* Parallax background elements */}
        <motion.div
          style={{ y: y2 }}
          className="absolute left-0 top-1/4 w-64 h-64 bg-purple-100 rounded-full blur-3xl opacity-20"
        />
        
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="section-title-purple mb-6">Our Proven Process</h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
              A systematic 4-step approach to digital marketing success that delivers consistent, 
              measurable results for businesses across all industries.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((step, index) => (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                viewport={{ once: true }}
                className="relative"
              >
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="relative p-8 rounded-2xl bg-gradient-to-br from-white to-purple-50 border border-purple-100 hover:border-purple-300 transition-all"
                >
                  <div className="text-8xl font-bold text-purple-100 mb-4 leading-none">{step.step}</div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{step.title}</h3>
                  <p className="text-gray-600 leading-relaxed text-lg">{step.description}</p>
                  
                  {/* Connecting line */}
                  {index < process.length - 1 && (
                    <motion.div
                      initial={{ scaleX: 0 }}
                      whileInView={{ scaleX: 1 }}
                      transition={{ duration: 0.8, delay: index * 0.15 + 0.3 }}
                      viewport={{ once: true }}
                      className="hidden lg:block absolute top-12 -right-4 w-8 h-0.5 bg-purple-300 origin-left"
                    />
                  )}
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-purple-50 to-white relative overflow-hidden">
        <motion.div
          className="absolute bottom-0 right-0 w-96 h-96 bg-purple-100 rounded-full blur-3xl opacity-30"
          animate={{
            scale: [1, 1.3, 1],
            y: [0, -50, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="section-title-purple mb-6">Industries We Serve</h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
              Deep industry expertise across 12+ sectors, delivering specialized digital marketing 
              strategies that drive growth in your specific market.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {industries.map((industry, index) => {
              const IconComponent = iconMap[industry.icon];
              return (
                <motion.div
                  key={industry.id}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: index * 0.08 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -8, scale: 1.03 }}
                >
                  <Card className="industry-card p-6 h-full hover:shadow-2xl transition-all duration-300">
                    <div className="flex items-start space-x-4">
                      <motion.div 
                        className="w-14 h-14 bg-gradient-to-br from-[#6A0DAD] to-[#8A2BE2] rounded-xl flex items-center justify-center flex-shrink-0"
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.6 }}
                      >
                        <IconComponent className="text-white" size={26} />
                      </motion.div>
                      <div>
                        <h3 className="text-lg font-bold text-gray-900 mb-1">{industry.name}</h3>
                        <p className="text-gray-600 text-sm leading-relaxed">{industry.description}</p>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section id="about" className="py-32 px-4 sm:px-6 lg:px-8 bg-white relative overflow-hidden">
        <motion.div
          style={{ y: y1 }}
          className="absolute right-0 top-1/3 w-72 h-72 bg-purple-100 rounded-full blur-3xl opacity-20"
        />
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="section-title-purple mb-6">Why RANSEN Digital Media Works?</h2>
              <p className="text-xl text-gray-700 mb-8 leading-relaxed">
                We combine cutting-edge AI technology with proven marketing strategies to deliver 
                exceptional results. Our data-driven approach ensures every campaign is optimized 
                for maximum ROI and sustainable growth.
              </p>
              <div className="space-y-4">
                {[
                  { icon: Zap, title: "Lightning-Fast Results", desc: "See measurable improvements in weeks, not months" },
                  { icon: Award, title: "Award-Winning Team", desc: "Industry-recognized experts with proven track records" },
                  { icon: Clock, title: "24/7 Support", desc: "Always available when you need us most" },
                  { icon: Users, title: "Dedicated Account Team", desc: "Personal attention from strategy to execution" }
                ].map((item, index) => (
                  <motion.div 
                    key={index}
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-start p-4 rounded-lg hover:bg-purple-50 transition-colors"
                  >
                    <div className="w-10 h-10 bg-gradient-to-br from-[#6A0DAD] to-[#8A2BE2] rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                      <item.icon className="text-white" size={20} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">{item.title}</h4>
                      <p className="text-gray-600">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative group"
            >
              <motion.div
                className="relative overflow-hidden rounded-2xl"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.4 }}
              >
                <motion.img 
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80" 
                  alt="Team collaboration" 
                  className="rounded-2xl shadow-2xl w-full"
                  style={{
                    transformStyle: "preserve-3d",
                  }}
                  whileHover={{ 
                    rotateY: 5,
                    rotateX: 5,
                  }}
                />
                {/* Animated border on hover */}
                <motion.div
                  className="absolute inset-0 rounded-2xl"
                  style={{
                    background: 'linear-gradient(45deg, #6A0DAD, #8A2BE2, #6A0DAD)',
                    backgroundSize: '200% 200%',
                  }}
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 0.3 }}
                  animate={{
                    backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                  }}
                  transition={{
                    backgroundPosition: {
                      duration: 3,
                      repeat: Infinity,
                      ease: "linear"
                    }
                  }}
                />
              </motion.div>
              <motion.div 
                className="absolute -bottom-6 -left-6 w-32 h-32 bg-purple-600 rounded-full opacity-20 blur-2xl"
                animate={{
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                }}
              />
              
              {/* Floating stats badges */}
              <motion.div
                className="absolute top-4 right-4 bg-white rounded-lg shadow-xl p-3"
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5 }}
                whileHover={{ scale: 1.1, rotate: 5 }}
              >
                <div className="text-2xl font-bold text-purple-600">98%</div>
                <div className="text-xs text-gray-600">Success Rate</div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-white to-purple-50">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="section-title-purple mb-4">Our Work</h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              Success stories from brands we've helped transform
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {portfolioItems.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                style={{
                  transformStyle: "preserve-3d",
                }}
              >
                <Card 
                  className="portfolio-card-purple overflow-hidden h-full group cursor-none"
                  onMouseMove={(e) => {
                    const rect = e.currentTarget.getBoundingClientRect();
                    const x = e.clientX - rect.left;
                    const y = e.clientY - rect.top;
                    const centerX = rect.width / 2;
                    const centerY = rect.height / 2;
                    const rotateX = (y - centerY) / 20;
                    const rotateY = (centerX - x) / 20;
                    e.currentTarget.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg)';
                  }}
                >
                  <div className="relative overflow-hidden">
                    <motion.img 
                      src={item.image} 
                      alt={item.project}
                      className="w-full h-64 object-cover"
                      whileHover={{ scale: 1.15 }}
                      transition={{ duration: 0.6 }}
                    />
                    <motion.div 
                      className="absolute inset-0 bg-gradient-to-t from-purple-900/70 to-transparent"
                      initial={{ opacity: 0.5 }}
                      whileHover={{ opacity: 0.8 }}
                    />
                    {/* Animated overlay */}
                    <motion.div
                      className="absolute inset-0"
                      initial={{ x: '-100%' }}
                      whileHover={{ x: '100%' }}
                      transition={{ duration: 0.8 }}
                      style={{
                        background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent)',
                      }}
                    />
                  </div>
                  <div className="p-6 relative">
                    <motion.div 
                      className="text-sm text-purple-600 font-semibold mb-2"
                      initial={{ x: -20, opacity: 0 }}
                      whileInView={{ x: 0, opacity: 1 }}
                      transition={{ delay: 0.2 }}
                    >
                      {item.category}
                    </motion.div>
                    <h3 className="text-xl font-bold mb-2 text-gray-900">{item.client}</h3>
                    <p className="text-gray-600 mb-3">{item.project}</p>
                    <motion.div 
                      className="flex items-center text-purple-700 font-semibold"
                      whileHover={{ x: 10 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <CheckCircle size={18} className="mr-2" />
                      {item.results}
                    </motion.div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="section-title-purple mb-4">Client Success Stories</h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              Hear what our clients have to say about working with RANSEN
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                viewport={{ once: true }}
                whileHover={{ 
                  y: -10,
                  rotateY: 5,
                  transition: { duration: 0.3 }
                }}
                style={{
                  transformStyle: "preserve-3d",
                }}
              >
                <Card className="testimonial-card-purple h-full relative overflow-hidden group">
                  {/* Animated gradient background on hover */}
                  <motion.div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity"
                    style={{
                      background: 'radial-gradient(circle at 50% 0%, rgba(138, 43, 226, 0.1), transparent 70%)',
                    }}
                  />
                  
                  <div className="p-6 relative z-10">
                    {/* Quote icon */}
                    <motion.div
                      className="text-6xl text-purple-200 mb-4 font-serif"
                      initial={{ scale: 0, rotate: -180 }}
                      whileInView={{ scale: 1, rotate: 0 }}
                      transition={{ duration: 0.5 }}
                    >
                      "
                    </motion.div>
                    
                    <p className="text-gray-700 mb-6 leading-relaxed italic">
                      {testimonial.content}
                    </p>
                    
                    <div className="flex items-center">
                      <motion.div
                        whileHover={{ scale: 1.2, rotate: 360 }}
                        transition={{ duration: 0.6 }}
                      >
                        <img 
                          src={testimonial.avatar} 
                          alt={testimonial.name}
                          className="w-12 h-12 rounded-full mr-4 object-cover ring-2 ring-purple-200"
                        />
                      </motion.div>
                      <div>
                        <div className="font-semibold text-gray-900">{testimonial.name}</div>
                        <div className="text-sm text-gray-600">{testimonial.position}</div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Corner accent */}
                  <motion.div
                    className="absolute top-0 right-0 w-20 h-20"
                    style={{
                      background: 'linear-gradient(135deg, transparent 50%, rgba(138, 43, 226, 0.1) 50%)',
                    }}
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ delay: 0.3 }}
                  />
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-[#6A0DAD] to-[#8A2BE2] relative overflow-hidden">
        <motion.div
          className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
          }}
        />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Scale Your Business?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Let's discuss how our data-driven strategies can accelerate your growth and drive measurable results.
            </p>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button 
                onClick={() => scrollToSection('contact')} 
                className="btn-white group text-lg px-8 py-6"
              >
                Book Your Free Consultation Now
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={24} />
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-purple-50 to-white">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="section-title-purple mb-4">Get In Touch</h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              Ready to transform your digital presence? Let's talk about your project
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Card className="contact-card-purple">
                <form onSubmit={handleSubmit} className="p-8 space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Name *
                    </label>
                    <Input 
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      placeholder="Your name"
                      className="input-purple"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email *
                    </label>
                    <Input 
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      placeholder="your@email.com"
                      className="input-purple"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Phone
                    </label>
                    <Input 
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="+1 (555) 000-0000"
                      className="input-purple"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Message *
                    </label>
                    <Textarea 
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={4}
                      placeholder="Tell us about your project..."
                      className="input-purple"
                    />
                  </div>
                  <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                    <Button type="submit" className="btn-purple w-full">
                      Send Message
                    </Button>
                  </motion.div>
                </form>
              </Card>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              {[
                { icon: Mail, title: "Email", content: "hello@ransen.agency" },
                { icon: Phone, title: "Phone", content: "+1 (555) 123-4567" },
                { icon: MapPin, title: "Office", content: "123 Marketing Street\nSan Francisco, CA 94102" }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  whileHover={{ x: 10 }}
                >
                  <Card className="contact-info-card-purple">
                    <div className="p-6 flex items-start">
                      <div className="w-12 h-12 bg-gradient-to-br from-[#6A0DAD] to-[#8A2BE2] rounded-xl flex items-center justify-center mr-4 flex-shrink-0">
                        <item.icon className="text-white" size={24} />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-1">{item.title}</h4>
                        <p className="text-gray-600 whitespace-pre-line">{item.content}</p>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-[#6A0DAD] to-[#8A2BE2] text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center">
                  <BarChart3 className="text-white" size={20} />
                </div>
                <div>
                  <h3 className="text-xl font-bold">RANSEN</h3>
                  <p className="text-xs text-white/80">Digital Media Works</p>
                </div>
              </div>
              <p className="text-white/80">
                Transforming brands through innovative digital marketing strategies.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-white/80">
                <li><a href="#services" className="hover:text-white transition-colors">Paid Media</a></li>
                <li><a href="#services" className="hover:text-white transition-colors">Social Media</a></li>
                <li><a href="#services" className="hover:text-white transition-colors">SEO</a></li>
                <li><a href="#services" className="hover:text-white transition-colors">AI Automation</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-white/80">
                <li><a href="#about" className="hover:text-white transition-colors">About Us</a></li>
                <li><a href="#portfolio" className="hover:text-white transition-colors">Portfolio</a></li>
                <li><a href="#contact" className="hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Connect</h4>
              <ul className="space-y-2 text-white/80">
                <li><a href="#" className="hover:text-white transition-colors">LinkedIn</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Twitter</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Instagram</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Facebook</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-white/20 pt-8 text-center text-white/80">
            <p>&copy; 2025 RANSEN Digital Marketing Agency. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;