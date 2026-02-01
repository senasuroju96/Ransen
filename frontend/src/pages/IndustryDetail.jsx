import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  ArrowLeft, CheckCircle, BarChart3, ShoppingBag, Laptop, Heart, 
  Briefcase, Home as HomeIcon, TrendingUp, BookOpen, Plane, Factory, 
  Scale, Car, UtensilsCrossed
} from 'lucide-react';
import { industries } from '../mock';
import { Button } from '../components/ui/button';
import { Card } from '../components/ui/card';

const iconMap = {
  ShoppingBag, Laptop, Heart, Briefcase, Home: HomeIcon, TrendingUp,
  BookOpen, Plane, Factory, Scale, Car, UtensilsCrossed
};

const IndustryDetail = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
  const industry = industries.find(i => i.slug === slug);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  if (!industry) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Industry Not Found</h1>
          <Button onClick={() => navigate('/')} className="btn-purple">
            <ArrowLeft className="mr-2" size={20} />
            Back to Home
          </Button>
        </div>
      </div>
    );
  }

  const IconComponent = iconMap[industry.icon];

  const scrollToContact = () => {
    navigate('/', { state: { scrollTo: 'contact' } });
  };

  return (
    <div className="min-h-screen bg-white">
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
              onClick={() => navigate('/')}
            >
              <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center">
                <BarChart3 className="text-white" size={24} />
              </div>
              <div>
                <div className="text-2xl font-bold text-white tracking-tight">RANSEN</div>
                <div className="text-xs text-white/80">Digital Media Works</div>
              </div>
            </motion.div>

            <Button 
              onClick={() => navigate('/')} 
              className="btn-black"
            >
              <ArrowLeft className="mr-2" size={18} />
              Back to Home
            </Button>
          </div>
        </div>
      </motion.nav>

      {/* Hero Section with Interactive Elements */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-purple-50 to-white relative overflow-hidden min-h-[70vh]">
        {/* Interactive floating elements */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {[...Array(8)].map((_, i) => {
            const elementX = (i * 12.5) % 100;
            const elementY = ((i * 15) % 60) + 10;
            const distanceX = mousePosition.x - (window.innerWidth * elementX / 100);
            const distanceY = mousePosition.y - (window.innerHeight * elementY / 100);
            const distance = Math.sqrt(distanceX * distanceX + distanceY * distanceY);
            const influence = Math.max(0, 1 - distance / 400);

            return (
              <motion.div
                key={i}
                className="absolute"
                style={{
                  left: `${elementX}%`,
                  top: `${elementY}%`,
                }}
                animate={{
                  x: -distanceX * influence * 0.15,
                  y: -distanceY * influence * 0.15,
                  scale: 1 + influence * 0.3,
                }}
                transition={{
                  type: "spring",
                  stiffness: 100,
                  damping: 20,
                }}
              >
                <div 
                  className="w-16 h-16 rounded-full"
                  style={{
                    background: `radial-gradient(circle, rgba(138, 43, 226, ${0.1 + influence * 0.2}), transparent)`,
                    backdropFilter: 'blur(8px)',
                  }}
                />
              </motion.div>
            );
          })}
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <motion.div 
                className="w-20 h-20 bg-gradient-to-br from-[#6A0DAD] to-[#8A2BE2] rounded-2xl flex items-center justify-center mb-6"
                whileHover={{ rotate: 360, scale: 1.1 }}
                transition={{ duration: 0.6 }}
              >
                <IconComponent className="text-white" size={40} />
              </motion.div>
              
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
                {industry.name} <span className="text-purple-600">Marketing</span>
              </h1>
              <p className="text-xl text-gray-700 leading-relaxed mb-8">
                {industry.detailedDescription}
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button onClick={scrollToContact} className="btn-purple">
                  Get Started
                </Button>
                <Button onClick={() => navigate('/services')} className="btn-secondary">
                  View All Services
                </Button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <img 
                src={industry.heroImage} 
                alt={industry.name}
                className="rounded-2xl shadow-2xl w-full"
              />
            </motion.div>
          </div>

          {/* Stats */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid md:grid-cols-3 gap-6 mt-16"
          >
            {Object.entries(industry.results).map(([key, value], index) => (
              <motion.div
                key={key}
                whileHover={{ y: -5, scale: 1.02 }}
              >
                <Card className="text-center p-6 bg-white border-purple-200">
                  <div className="text-4xl font-bold text-purple-600 mb-2">{value}</div>
                  <div className="text-gray-600 capitalize text-sm">
                    {key.replace(/([A-Z])/g, ' $1').replace(/stat\d+/, '').trim()}
                  </div>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Challenges Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-purple-600 mb-4">Common Challenges</h2>
            <p className="text-lg text-gray-700">
              We understand the unique obstacles in {industry.name.toLowerCase()}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {industry.challenges.map((challenge, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ x: 10 }}
              >
                <Card className="p-6 border-red-200 bg-red-50/30 hover:border-red-400 transition-all">
                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-red-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                      <span className="text-red-600 font-bold">!</span>
                    </div>
                    <p className="text-gray-700 leading-relaxed">{challenge}</p>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-purple-50 to-white">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-purple-600 mb-4">Our Solutions</h2>
            <p className="text-lg text-gray-700">
              Proven strategies tailored for {industry.name.toLowerCase()} success
            </p>
          </motion.div>

          <div className="space-y-4">
            {industry.solutions.map((solution, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ x: 10, scale: 1.02 }}
              >
                <Card className="p-6 border-green-200 bg-green-50/30 hover:border-green-400 transition-all">
                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-gradient-to-br from-[#6A0DAD] to-[#8A2BE2] rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                      <CheckCircle className="text-white" size={18} />
                    </div>
                    <p className="text-lg text-gray-700 leading-relaxed">{solution}</p>
                  </div>
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
          animate={{ scale: [1, 1.2, 1], rotate: [0, 90, 0] }}
          transition={{ duration: 20, repeat: Infinity }}
        />
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Transform Your {industry.name} Business?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Let's discuss how our specialized {industry.name.toLowerCase()} marketing strategies can accelerate your growth.
            </p>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button 
                onClick={scrollToContact} 
                className="btn-white text-lg px-8 py-6"
              >
                Schedule Your Free Consultation
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 px-4 sm:px-6 lg:px-8">
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
          <p className="text-white/60">
            &copy; 2025 RANSEN Digital Marketing Agency. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default IndustryDetail;