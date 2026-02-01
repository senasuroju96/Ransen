import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Search, Share2, Target, Monitor, Video, Bot, Headphones, Sparkles, MessageSquare,
  ArrowRight, Mail, Phone, MapPin, Menu, X, CheckCircle, BarChart3,
  ShoppingBag, Laptop, Heart, Briefcase, Home as HomeIcon, TrendingUp,
  Zap, Clock, Award, Users
} from 'lucide-react';
import { services, portfolioItems, testimonials, stats, industries, process } from '../mock';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';
import { Card } from '../components/ui/card';
import { useToast } from '../hooks/use-toast';

const iconMap = {
  Search, Share2, Target, Monitor, Video, Bot, Headphones,
  ShoppingBag, Laptop, Heart, Briefcase, Home: HomeIcon, TrendingUp,
  Sparkles, MessageSquare
};

const Home = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' });
  const { toast } = useToast();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

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
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "Thank you for reaching out. We'll get back to you soon.",
    });
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      {/* Navigation */}
      <motion.nav 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-[#6A0DAD] to-[#8A2BE2] shadow-lg"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
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
            
            <div className="hidden md:flex items-center space-x-1 bg-white/90 backdrop-blur-md rounded-full px-8 py-3">
              <button onClick={() => scrollToSection('services')} className="nav-link-purple">Services</button>
              <button onClick={() => scrollToSection('about')} className="nav-link-purple">About Us</button>
              <button onClick={() => scrollToSection('testimonials')} className="nav-link-purple">Testimonials</button>
            </div>

            <div className="hidden md:block">
              <Button onClick={() => scrollToSection('contact')} className="btn-black">
                Book A Free Strategy Call
              </Button>
            </div>

            <button 
              className="md:hidden text-white"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

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

      {/* Hero Section with Interactive Cursor Elements */}
      <section id="home" className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-purple-50 via-white to-purple-50">
        {/* Interactive Elements that follow cursor */}
        <div className="absolute inset-0 pointer-events-none">
          {[
            { x: 10, y: 20, size: 80, delay: 0 },
            { x: 90, y: 25, size: 60, delay: 0.2 },
            { x: 15, y: 75, size: 70, delay: 0.4 },
            { x: 85, y: 70, size: 90, delay: 0.6 },
          ].map((elem, i) => {
            const distX = mousePosition.x - (window.innerWidth * elem.x / 100);
            const distY = mousePosition.y - (window.innerHeight * elem.y / 100);
            const distance = Math.sqrt(distX * distX + distY * distY);
            const influence = Math.max(0, 1 - distance / 500);

            return (
              <motion.div
                key={i}
                className="absolute"
                style={{ left: `${elem.x}%`, top: `${elem.y}%` }}
                animate={{
                  x: -distX * influence * 0.2,
                  y: -distY * influence * 0.2,
                  scale: 1 + influence * 0.5,
                }}
                transition={{ type: "spring", stiffness: 80, damping: 15 }}
              >
                <motion.div
                  className="rounded-full"
                  style={{
                    width: elem.size,
                    height: elem.size,
                    background: `radial-gradient(circle, rgba(138, 43, 226, ${0.15 + influence * 0.2}), transparent)`,
                    backdropFilter: 'blur(20px)',
                  }}
                  animate={{
                    rotate: influence > 0.3 ? 360 : 0,
                  }}
                  transition={{ duration: 3, ease: "easeInOut" }}
                />
              </motion.div>
            );
          })}
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <motion.h1 
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-6xl md:text-7xl font-bold mb-6"
            >
              <span className="text-purple-gradient">Data-Driven Digital</span><br />
              <span className="text-gray-900">Marketing</span> for<br />
              Businesses That Want to Scale
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-2xl text-gray-700 mb-10 leading-relaxed"
            >
              AI-powered strategies that deliver measurable results. Generate more leads, increase revenue, and scale with confidence.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <Button 
                onClick={() => scrollToSection('contact')} 
                className="btn-purple group text-lg px-8 py-6"
              >
                Book a Free Consultation
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
              </Button>
            </motion.div>
          </div>

          {/* Stats */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-20"
          >
            {[
              { value: '500+', label: 'Projects' },
              { value: '98%', label: 'Satisfaction' },
              { value: '150+', label: 'Clients' },
              { value: '50+', label: 'Awards' },
            ].map((stat, i) => (
              <Card key={i} className="text-center p-6 bg-white/80 backdrop-blur-sm border-purple-200">
                <div className="text-4xl font-bold text-purple-600">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </Card>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-32 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl font-bold text-purple-600 mb-6">Our Services</h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Comprehensive digital marketing solutions designed to scale your business
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
                  whileHover={{ y: -10 }}
                >
                  <Card className="service-card-purple h-full flex flex-col">
                    <div className="p-8 flex-grow">
                      <div className="w-14 h-14 bg-gradient-to-br from-[#6A0DAD] to-[#8A2BE2] rounded-xl flex items-center justify-center mb-6">
                        <IconComponent className="text-white" size={28} />
                      </div>
                      <h3 className="text-xl font-bold mb-3 text-gray-900">{service.title}</h3>
                      <p className="text-gray-600 leading-relaxed mb-4">{service.description}</p>
                    </div>
                    <div className="px-8 pb-8">
                      <Button 
                        onClick={() => navigate(`/services/${service.slug}`)}
                        className="w-full bg-purple-600 hover:bg-purple-700 text-white"
                      >
                        Learn More <ArrowRight className="ml-2" size={16} />
                      </Button>
                    </div>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Industries Section with Links */}
      <section className="py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-purple-50 to-white">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl font-bold text-purple-600 mb-6">Industries We Serve</h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Specialized expertise across 12+ sectors
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {industries.map((industry, index) => {
              const IconComponent = iconMap[industry.icon] || Users;
              return (
                <motion.div
                  key={industry.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5, scale: 1.03 }}
                  onClick={() => navigate(`/industries/${industry.slug}`)}
                  className="cursor-pointer"
                >
                  <Card className="industry-card p-6 h-full">
                    <div className="flex items-start space-x-4">
                      <div className="w-14 h-14 bg-gradient-to-br from-[#6A0DAD] to-[#8A2BE2] rounded-xl flex items-center justify-center flex-shrink-0">
                        <IconComponent className="text-white" size={26} />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-gray-900 mb-1">{industry.name}</h3>
                        <p className="text-gray-600 text-sm">{industry.description}</p>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-bold text-purple-600 mb-4">Get In Touch</h2>
            <p className="text-xl text-gray-700 max-w-2xl mx-auto">
              Ready to transform your digital presence? Let's talk
            </p>
          </motion.div>

          <div className="max-w-2xl mx-auto">
            <Card className="p-8 bg-white border-purple-200">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Name *</label>
                  <Input 
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email *</label>
                  <Input 
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Phone</label>
                  <Input 
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="+1 (555) 000-0000"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Message *</label>
                  <Textarea 
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={4}
                    placeholder="Tell us about your project..."
                  />
                </div>
                <Button type="submit" className="btn-purple w-full">Send Message</Button>
              </form>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-[#6A0DAD] to-[#8A2BE2] text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center">
              <BarChart3 className="text-white" size={20} />
            </div>
            <div>
              <h3 className="text-xl font-bold">RANSEN</h3>
              <p className="text-xs text-white/80">Digital Media Works</p>
            </div>
          </div>
          <p className="text-white/60">&copy; 2025 RANSEN Digital Marketing Agency. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Home;