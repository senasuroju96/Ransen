import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  ArrowLeft, CheckCircle, BarChart3, Target, Share2, Monitor, 
  Search, Video, Bot, Headphones, Sparkles, MessageSquare
} from 'lucide-react';
import { services } from '../mock';
import { Button } from '../components/ui/button';
import { Card } from '../components/ui/card';

const iconMap = {
  Target: Target,
  Share2: Share2,
  Monitor: Monitor,
  Search: Search,
  Video: Video,
  Bot: Bot,
  Headphones: Headphones,
  Sparkles: Sparkles,
  MessageSquare: MessageSquare
};

const ServiceDetail = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  
  const service = services.find(s => s.slug === slug);

  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Service Not Found</h1>
          <Button onClick={() => navigate('/')} className="btn-purple">
            <ArrowLeft className="mr-2" size={20} />
            Back to Home
          </Button>
        </div>
      </div>
    );
  }

  const IconComponent = iconMap[service.icon];
  
  // Build arrays from flattened structure
  const benefits = [
    service.benefit1,
    service.benefit2,
    service.benefit3,
    service.benefit4,
    service.benefit5
  ].filter(Boolean);
  
  const platforms = [
    service.platform1,
    service.platform2,
    service.platform3,
    service.platform4,
    service.platform5,
    service.platform6
  ].filter(Boolean);
  
  // Build metrics object
  const metrics = {};
  Object.keys(service).forEach(key => {
    if (key.startsWith('avg') || key.endsWith('Time') || key.endsWith('Growth') || 
        key.endsWith('Reach') || key.endsWith('Increase') || key.endsWith('Score') ||
        key.endsWith('Traffic') || key.endsWith('Authority') || key.endsWith('Mentions') ||
        key.endsWith('Visibility') || key.endsWith('Value') || key.endsWith('Satisfaction') ||
        key.endsWith('Conversion') || key.endsWith('Saved') || key.endsWith('Reduction') ||
        key.endsWith('Snippets') || key.endsWith('Share')) {
      metrics[key] = service[key];
    }
  });

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

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-purple-50 to-white relative overflow-hidden">
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

        <div className="max-w-5xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <motion.div 
              className="w-20 h-20 bg-gradient-to-br from-[#6A0DAD] to-[#8A2BE2] rounded-2xl flex items-center justify-center mb-6 mx-auto"
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.6 }}
            >
              <IconComponent className="text-white" size={40} />
            </motion.div>
            
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              {service.title}
            </h1>
            <p className="text-xl text-gray-700 leading-relaxed max-w-3xl mx-auto">
              {service.detailedDescription}
            </p>
          </motion.div>

          {/* Metrics */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid md:grid-cols-3 gap-6"
          >
            {Object.entries(metrics).slice(0, 3).map(([key, value], index) => (
              <motion.div
                key={key}
                whileHover={{ y: -5 }}
              >
                <Card className="text-center p-6 bg-white border-purple-200">
                  <div className="text-3xl font-bold text-purple-600 mb-2">{value}</div>
                  <div className="text-gray-600 capitalize">{key.replace(/([A-Z])/g, ' $1').trim()}</div>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-purple-600 mb-4">What's Included</h2>
            <p className="text-lg text-gray-700">
              Comprehensive solutions designed to drive results
            </p>
          </motion.div>

          <div className="space-y-4">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ x: 10 }}
              >
                <Card className="p-6 border-purple-200 hover:border-purple-400 transition-all">
                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-gradient-to-br from-[#6A0DAD] to-[#8A2BE2] rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                      <CheckCircle className="text-white" size={18} />
                    </div>
                    <p className="text-lg text-gray-700 leading-relaxed">{benefit}</p>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Platforms Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-purple-50 to-white">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-purple-600 mb-4">Platforms & Tools</h2>
            <p className="text-lg text-gray-700">
              We work with industry-leading platforms to deliver exceptional results
            </p>
          </motion.div>

          <div className="flex flex-wrap justify-center gap-4">
            {platforms.map((platform, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.1 }}
              >
                <Card className="px-6 py-3 bg-white border-purple-200 hover:border-purple-400 transition-all">
                  <span className="text-gray-800 font-medium">{platform}</span>
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
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Let's discuss how {service.title.toLowerCase()} can transform your business and drive measurable growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button 
                  onClick={scrollToContact} 
                  className="btn-white text-lg px-8 py-6"
                >
                  Schedule Free Consultation
                </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button 
                  onClick={() => navigate('/')} 
                  className="bg-white/10 hover:bg-white/20 text-white border-2 border-white text-lg px-8 py-6"
                >
                  View All Services
                </Button>
              </motion.div>
            </div>
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

export default ServiceDetail;