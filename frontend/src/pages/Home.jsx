import React, { useState } from 'react';
import {
  Search, Share2, FileText, Target, Sparkles, Monitor,
  ArrowRight, Mail, Phone, MapPin, Menu, X, CheckCircle } from
'lucide-react';
import { services, portfolioItems, testimonials, stats } from '../mock';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';
import { Card } from '../components/ui/card';
import { useToast } from '../hooks/use-toast';

const iconMap = {
  Search: Search,
  Share2: Share2,
  FileText: FileText,
  Target: Target,
  Sparkles: Sparkles,
  Monitor: Monitor
};

const Home = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const { toast } = useToast();

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
    // Mock form submission
    toast({
      title: "Message Sent!",
      description: "Thank you for reaching out. We'll get back to you soon."
    });
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  return (
    <div className="min-h-screen bg-[#ECEC75]">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="text-2xl font-bold text-[#0f172a]" style={{ fontFamily: 'Crimson Text, serif' }}>
              RANSEN
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              <button onClick={() => scrollToSection('home')} className="nav-link">Home</button>
              <button onClick={() => scrollToSection('services')} className="nav-link">Services</button>
              <button onClick={() => scrollToSection('portfolio')} className="nav-link">Portfolio</button>
              <button onClick={() => scrollToSection('about')} className="nav-link">About</button>
              <button onClick={() => scrollToSection('contact')} className="nav-link">Contact</button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>

              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen &&
          <div className="md:hidden py-4 space-y-2">
              <button onClick={() => scrollToSection('home')} className="block w-full text-left px-4 py-2 hover:bg-gray-100">Home</button>
              <button onClick={() => scrollToSection('services')} className="block w-full text-left px-4 py-2 hover:bg-gray-100">Services</button>
              <button onClick={() => scrollToSection('portfolio')} className="block w-full text-left px-4 py-2 hover:bg-gray-100">Portfolio</button>
              <button onClick={() => scrollToSection('about')} className="block w-full text-left px-4 py-2 hover:bg-gray-100">About</button>
              <button onClick={() => scrollToSection('contact')} className="block w-full text-left px-4 py-2 hover:bg-gray-100">Contact</button>
            </div>
          }
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="hero-title !font-['Tahoma'] !font-bold !text-6xl mb-6">
              Transform Your Digital Presence
            </h1>
            <p className="text-xl text-gray-700 mb-8 leading-relaxed">
              We craft data-driven digital marketing strategies that elevate brands, 
              engage audiences, and drive measurable growth in the modern marketplace.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                onClick={() => scrollToSection('contact')}
                className="btn-primary">

                Get Started <ArrowRight className="ml-2" size={20} />
              </Button>
              <Button
                onClick={() => scrollToSection('portfolio')}
                variant="outline"
                className="btn-secondary">

                View Our Work
              </Button>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mt-20">
            {stats.map((stat) =>
            <div key={stat.id} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-[#0f172a] mb-2" style={{ fontFamily: 'Crimson Text, serif' }}>
                  {stat.value}
                </div>
                <div className="text-gray-700 font-medium">{stat.label}</div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="section-title mb-4">Our Services</h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              Comprehensive digital marketing solutions tailored to your business goals
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => {
              const IconComponent = iconMap[service.icon];
              return (
                <Card key={service.id} className="service-card">
                  <div className="p-8">
                    <div className="w-14 h-14 bg-[#0f172a] rounded-lg flex items-center justify-center mb-6">
                      <IconComponent className="text-white" size={28} />
                    </div>
                    <h3 className="text-xl font-semibold mb-3 text-[#0f172a]">
                      {service.title}
                    </h3>
                    <p className="text-gray-700 leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </Card>);

            })}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="section-title mb-6">Why Choose RANSEN?</h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                We're not just another digital marketing agency. We're your strategic partner 
                in building a powerful online presence that drives real business results.
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <CheckCircle className="text-[#0f172a] mr-3 flex-shrink-0 mt-1" size={20} />
                  <div>
                    <h4 className="font-semibold text-[#0f172a] mb-1">Data-Driven Approach</h4>
                    <p className="text-gray-700">Every decision backed by analytics and insights</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="text-[#0f172a] mr-3 flex-shrink-0 mt-1" size={20} />
                  <div>
                    <h4 className="font-semibold text-[#0f172a] mb-1">Creative Excellence</h4>
                    <p className="text-gray-700">Award-winning campaigns that stand out</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="text-[#0f172a] mr-3 flex-shrink-0 mt-1" size={20} />
                  <div>
                    <h4 className="font-semibold text-[0f172a] mb-1">Proven Results</h4>
                    <p className="text-gray-700">Track record of delivering measurable growth</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="text-[#0f172a] mr-3 flex-shrink-0 mt-1" size={20} />
                  <div>
                    <h4 className="font-semibold text-[#0f172a] mb-1">Dedicated Support</h4>
                    <p className="text-gray-700">Your success is our priority, always</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80"
                alt="Team collaboration"
                className="rounded-lg shadow-lg w-full" />

            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="section-title mb-4">Our Work</h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              Success stories from brands we've helped transform
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {portfolioItems.map((item) =>
            <Card key={item.id} className="portfolio-card overflow-hidden">
                <img
                src={item.image}
                alt={item.project}
                className="w-full h-64 object-cover" />

                <div className="p-6">
                  <div className="text-sm text-gray-600 mb-2">{item.category}</div>
                  <h3 className="text-xl font-semibold mb-2 text-[#0f172a]">{item.client}</h3>
                  <p className="text-gray-700 mb-3">{item.project}</p>
                  <div className="flex items-center text-[#0f172a] font-semibold">
                    <CheckCircle size={18} className="mr-2" />
                    {item.results}
                  </div>
                </div>
              </Card>
            )}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="section-title mb-4">Client Success Stories</h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              Hear what our clients have to say about working with RANSEN
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial) =>
            <Card key={testimonial.id} className="testimonial-card">
                <div className="p-6">
                  <p className="text-gray-700 mb-6 leading-relaxed italic">
                    "{testimonial.content}"
                  </p>
                  <div className="flex items-center">
                    <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full mr-4 object-cover" />

                    <div>
                      <div className="font-semibold text-[#0f172a]">{testimonial.name}</div>
                      <div className="text-sm text-gray-600">{testimonial.position}</div>
                    </div>
                  </div>
                </div>
              </Card>
            )}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="section-title mb-4">Get In Touch</h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              Ready to transform your digital presence? Let's talk about your project
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <Card className="contact-card">
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
                    placeholder="Your name" />

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
                    placeholder="your@email.com" />

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
                    placeholder="+1 (555) 000-0000" />

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
                    placeholder="Tell us about your project..." />

                </div>
                <Button type="submit" className="btn-primary w-full">
                  Send Message
                </Button>
              </form>
            </Card>

            <div className="space-y-6">
              <Card className="contact-info-card">
                <div className="p-6 flex items-start">
                  <div className="w-12 h-12 bg-[#0f172a] rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <Mail className="text-white" size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#0f172a] mb-1">Email</h4>
                    <p className="text-gray-700">hello@ransen.agency</p>
                  </div>
                </div>
              </Card>

              <Card className="contact-info-card">
                <div className="p-6 flex items-start">
                  <div className="w-12 h-12 bg-[#0f172a] rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <Phone className="text-white" size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#0f172a] mb-1">Phone</h4>
                    <p className="text-gray-700">+1 (555) 123-4567</p>
                  </div>
                </div>
              </Card>

              <Card className="contact-info-card">
                <div className="p-6 flex items-start">
                  <div className="w-12 h-12 bg-[#0f172a] rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <MapPin className="text-white" size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#0f172a] mb-1">Office</h4>
                    <p className="text-gray-700">123 Marketing Street<br />San Francisco, CA 94102</p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#0f172a] text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="text-2xl font-bold mb-4" style={{ fontFamily: 'Crimson Text, serif' }}>
                RANSEN
              </h3>
              <p className="text-gray-400">
                Transforming brands through innovative digital marketing strategies.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#services" className="hover:text-white">SEO</a></li>
                <li><a href="#services" className="hover:text-white">Social Media</a></li>
                <li><a href="#services" className="hover:text-white">Content Marketing</a></li>
                <li><a href="#services" className="hover:text-white">PPC Advertising</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#about" className="hover:text-white">About Us</a></li>
                <li><a href="#portfolio" className="hover:text-white">Portfolio</a></li>
                <li><a href="#contact" className="hover:text-white">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Connect</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white">LinkedIn</a></li>
                <li><a href="#" className="hover:text-white">Twitter</a></li>
                <li><a href="#" className="hover:text-white">Instagram</a></li>
                <li><a href="#" className="hover:text-white">Facebook</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
            <p>&copy; 2025 RANSEN Digital Marketing Agency. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>);

};

export default Home;