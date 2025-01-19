import React, { useState, useEffect, FormEvent } from 'react';
import { 
  Rocket, 
  Target, 
  Lightbulb, 
  BarChart3, 
  Users, 
  MessageSquare,
  ArrowRight,
  Mail,
  Phone,
  MapPin,
  ChevronDown,
  Globe,
  Zap,
  Award,
  Play,
  X,
  Check,
  ArrowUpRight
} from 'lucide-react';

function App() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showDemo, setShowDemo] = useState(false);
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      setIsMenuOpen(false);
    }
  };

  const handleGetStarted = () => {
    scrollToSection('contact');
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setFormStatus('submitting');
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));
    setFormStatus('success');
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setFormStatus('idle');
      setFormData({ name: '', email: '', message: '' });
    }, 3000);
  };

  const testimonials = [
    {
      quote: "Their innovative approach transformed our digital presence completely. The results exceeded our expectations in every way possible.",
      author: "Sarah Johnson",
      role: "CEO, TechStart",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80",
      stats: { growth: "156%", metric: "Revenue Growth" }
    },
    {
      quote: "The results exceeded our expectations. Best marketing investment ever. Their team's dedication to our success was evident throughout.",
      author: "Michael Chen",
      role: "Founder, GrowthLabs",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80",
      stats: { growth: "2.4x", metric: "User Engagement" }
    },
    {
      quote: "Professional, creative, and data-driven. Exactly what we needed to scale our business to the next level.",
      author: "Emma Williams",
      role: "Marketing Director, InnovateCo",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80",
      stats: { growth: "89%", metric: "Conversion Rate" }
    }
  ];

  const services = [
    {
      icon: <Rocket className="w-8 h-8" />,
      title: "Digital Strategy",
      description: "Data-driven approaches to maximize your digital presence and achieve sustainable growth.",
      features: ["Market Analysis", "Competitor Research", "Growth Planning"]
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Brand Development",
      description: "Create memorable brand experiences that resonate with your target audience.",
      features: ["Brand Identity", "Voice & Tone", "Visual Design"]
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: "Growth Marketing",
      description: "Scale your business with proven marketing tactics and optimization strategies.",
      features: ["SEO Optimization", "Content Strategy", "Performance Marketing"]
    },
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: "Content Creation",
      description: "Engaging content that tells your brand story and drives user engagement.",
      features: ["Copywriting", "Visual Content", "Video Production"]
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Social Media",
      description: "Build and engage your community across all relevant platforms.",
      features: ["Platform Strategy", "Community Management", "Paid Social"]
    },
    {
      icon: <MessageSquare className="w-8 h-8" />,
      title: "Analytics",
      description: "Deep insights to drive informed decisions and optimize performance.",
      features: ["Data Analysis", "Performance Tracking", "ROI Reporting"]
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${
        scrollPosition > 50 ? 'bg-black/80 backdrop-blur-lg' : 'bg-transparent'
      }`}>
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Zap className="w-8 h-8 text-blue-400" />
              <span className="text-xl font-bold">FutureForward</span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              {[
                { name: 'Services', id: 'services' },
                { name: 'Work', id: 'testimonials' },
                { name: 'About', id: 'about' },
                { name: 'Contact', id: 'contact' }
              ].map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.id)}
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  {item.name}
                </button>
              ))}
              <button 
                onClick={handleGetStarted}
                className="px-6 py-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 hover:scale-105 transition-transform"
              >
                Get Started
              </button>
            </div>
            <button 
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <div className="space-y-2">
                <div className="w-8 h-0.5 bg-white"></div>
                <div className="w-8 h-0.5 bg-white"></div>
                <div className="w-8 h-0.5 bg-white"></div>
              </div>
            </button>
          </div>
        </div>
        {/* Mobile menu */}
        <div className={`md:hidden transition-all duration-300 ${isMenuOpen ? 'max-h-96' : 'max-h-0'} overflow-hidden bg-black/90 backdrop-blur-lg`}>
          <div className="container mx-auto px-6 py-4">
            {[
              { name: 'Services', id: 'services' },
              { name: 'Work', id: 'testimonials' },
              { name: 'About', id: 'about' },
              { name: 'Contact', id: 'contact' }
            ].map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.id)}
                className="block w-full text-left py-2 text-gray-300 hover:text-white transition-colors"
              >
                {item.name}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/80 to-blue-900/80 z-10"></div>
        <div className="absolute inset-0 z-0 grid-pattern"></div>
        <div 
          className="absolute inset-0 z-0" 
          style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80")',
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        ></div>
        <div className="container mx-auto px-6 relative z-20">
          <div className="text-center">
            <div className="relative inline-block animate-float mb-8">
              <Globe className="w-24 h-24 text-blue-400 mx-auto animate-pulse-glow" />
              <div className="absolute inset-0 bg-blue-400 rounded-full blur-3xl opacity-20"></div>
            </div>
            <h1 className="text-6xl md:text-8xl font-bold mb-8 animated-gradient-text">
              Future Forward Marketing
            </h1>
            <p className="text-xl md:text-2xl mb-12 text-gray-300 max-w-3xl mx-auto">
              Transforming brands through innovative digital solutions and cutting-edge marketing strategies
            </p>
            <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
              <button 
                onClick={handleGetStarted}
                className="group bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:scale-105 transition-all duration-300 flex items-center gap-2"
              >
                Get Started 
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button 
                onClick={() => setShowDemo(true)}
                className="glass px-8 py-4 rounded-full text-lg font-semibold hover:scale-105 transition-all duration-300 flex items-center gap-2"
              >
                <Play className="w-5 h-5" />
                Watch Demo
              </button>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 w-full overflow-hidden">
          <svg className="relative block w-full h-[100px]" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path 
              d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" 
              fill="rgba(17, 24, 39, 1)"
            />
          </svg>
        </div>
      </header>

      {/* Services Section */}
      <section id="services" className="py-32 bg-gradient-to-b from-gray-900 to-black relative">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <Award className="w-16 h-16 text-blue-400 mx-auto mb-6" />
            <h2 className="text-4xl md:text-5xl font-bold mb-6 animated-gradient-text">
              Our Services
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Elevate your brand with our comprehensive suite of digital marketing solutions
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div 
                key={index} 
                className="group relative glass p-8 rounded-2xl transition-all duration-500 hover:scale-105"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-purple-600/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="relative z-10">
                  <div className="text-blue-400 mb-4 group-hover:scale-110 transition-transform">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
                  <p className="text-gray-400 mb-6">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-gray-300">
                        <Check className="w-4 h-4 text-blue-400" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-32 bg-gradient-to-b from-black to-gray-900 relative">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-8 animated-gradient-text">
                Driving Digital Success Through Innovation
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                We're not just another marketing agency. We're your strategic partner in navigating the digital landscape and achieving unprecedented growth.
              </p>
              <div className="space-y-6">
                {[
                  { title: "Data-Driven Approach", desc: "Every strategy is backed by comprehensive market research and analytics" },
                  { title: "Creative Excellence", desc: "Pushing boundaries with innovative solutions that capture attention" },
                  { title: "Results Focused", desc: "Measurable outcomes that directly impact your bottom line" }
                ].map((item, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 rounded-full glass flex items-center justify-center">
                        <Check className="w-6 h-6 text-blue-400" />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                      <p className="text-gray-400">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-2xl overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                  alt="Team collaboration"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/20 to-purple-600/20 rounded-2xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-32 bg-gradient-to-b from-gray-900 to-black relative overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 animated-gradient-text">
              Client Success Stories
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Real results from real clients who trusted us with their digital growth
            </p>
          </div>
          <div className="relative">
            <div className="flex transition-transform duration-500" style={{ transform: `translateX(-${activeTestimonial * 100}%)` }}>
              {testimonials.map((testimonial, index) => (
                <div key={index} className="w-full flex-shrink-0">
                  <div className="max-w-4xl mx-auto">
                    <div className="glass p-8 md:p-12 rounded-2xl">
                      <div className="flex flex-col md:flex-row gap-8 items-center">
                        <div className="flex-shrink-0">
                          <img 
                            src={testimonial.image} 
                            alt={testimonial.author}
                            className="w-24 h-24 rounded-full object-cover"
                          />
                        </div>
                        <div className="flex-grow">
                          <p className="text-xl md:text-2xl text-gray-300 mb-6">"{testimonial.quote}"</p>
                          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                            <div>
                              <p className="font-semibold text-lg">{testimonial.author}</p>
                              <p className="text-gray-400">{testimonial.role}</p>
                            </div>
                            <div className="glass px-6 py-3 rounded-full">
                              <p className="text-blue-400 font-bold">{testimonial.stats.growth}</p>
                              <p className="text-sm text-gray-400">{testimonial.stats.metric}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex justify-center mt-8 gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    index === activeTestimonial ? 'bg-blue-400 w-12' : 'bg-gray-600'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-32 bg-gradient-to-b from-black to-gray-900 relative">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: '250+', label: 'Clients Served', icon: <Users className="w-8 h-8" /> },
              { number: '95%', label: 'Client Retention', icon: <Award className="w-8 h-8" /> },
              { number: '15+', label: 'Years Experience', icon: <Target className="w-8 h-8" /> },
              { number: '500+', label: 'Projects Completed', icon: <Rocket className="w-8 h-8" /> }
            ].map((stat, index) => (
              <div key={index} className="glass p-6 rounded-2xl text-center group hover:scale-105 transition-all duration-300">
                <div className="text-blue-400 mx-auto mb-4 group-hover:scale-110 transition-transform">
                  {stat.icon}
                </div>
                <div className="text-4xl font-bold animated-gradient-text mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 bg-gradient-to-b from-gray-900 to-black relative">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 animated-gradient-text">
            Let's Connect
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="glass p-8 rounded-2xl">
              <h3 className="text-2xl font-semibold mb-6">Get in Touch</h3>
              <div className="space-y-6">
                <div className="flex items-center gap-4 group">
                  <div className="w-12 h-12 rounded-full glass flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Mail className="text-blue-400" />
                  </div>
                  <span>contact@futureforward.com</span>
                </div>
                <div className="flex items-center gap-4 group">
                  <div className="w-12 h-12 rounded-full glass flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Phone className="text-blue-400" />
                  </div>
                  <span>+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center gap-4 group">
                  <div className="w-12 h-12 rounded-full glass flex items-center justify-center group-hover:scale-110 transition-transform">
                    <MapPin className="text-blue-400" />
                  </div>
                  <span>123 Innovation Street, Tech City</span>
                </div>
              </div>
            </div>
            <form onSubmit={handleSubmit} className="glass p-8 rounded-2xl space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">Your Name</label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full bg-black/50 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all"
                  placeholder="John Doe"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">Your Email</label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full bg-black/50 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all"
                  placeholder="john@example.com"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">Your Message</label>
                <textarea
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full bg-black/50 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all"
                  placeholder="Tell us about your project..."
                  required
                ></textarea>
              </div>
              <button 
                type="submit"
                disabled={formStatus === 'submitting'}
                className={`w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2 ${
                  formStatus === 'submitting' ? 'opacity-70 cursor-not-allowed' : ''
                }`}
              >
                {formStatus === 'submitting' ? (
                  <div className="animate-spin rounded-full h-6 w-6 border-2 border-white border-t-transparent"></div>
                ) : formStatus === 'success' ? (
                  <>
                    Sent Successfully
                    <Check className="w-5 h-5" />
                  </>
                ) : (
                  <>
                    Send Message
                    <ArrowRight className="w-5 h-5" />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-black border-t border-gray-800">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            <div>
              <div className="flex items-center space-x-2 mb-6">
                <Zap className="w-8 h-8 text-blue-400" />
                <span className="text-xl font-bold">FutureForward</span>
              </div>
              <p className="text-gray-400">
                Transforming brands through innovative digital solutions and cutting-edge marketing strategies.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-gray-400">
                <li className="hover:text-white transition-colors cursor-pointer">Digital Strategy</li>
                <li className="hover:text-white transition-colors cursor-pointer">Brand Development</li>
                <li className="hover:text-white transition-colors cursor-pointer">Growth Marketing</li>
                <li className="hover:text-white transition-colors cursor-pointer">Content Creation</li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400">
                <li className="hover:text-white transition-colors cursor-pointer">About Us</li>
                <li className="hover:text-white transition-colors cursor-pointer">Careers</li>
                <li className="hover:text-white transition-colors cursor-pointer">Blog</li>
                <li className="hover:text-white transition-colors cursor-pointer">Contact</li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Legal</h4>
              <ul className="space-y-2 text-gray-400">
                <li className="hover:text-white transition-colors cursor-pointer">Privacy Policy</li>
                <li className="hover:text-white transition-colors cursor-pointer">Terms of Service</li>
                <li className="hover:text-white transition-colors cursor-pointer">Cookie Policy</li>
              </ul>
            </div>
          </div>
          <div className="text-center text-gray-400 pt-8 border-t border-gray-800">
            <p>© 2024 Future Forward Marketing. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Demo Video Modal */}
      {showDemo && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
          <div className="relative w-full max-w-4xl bg-gray-900 rounded-2xl overflow-hidden">
            <button 
              onClick={() => setShowDemo(false)}
              className="absolute top-4 right-4 text-white/80 hover:text-white transition-colors z-10"
            >
              <X className="w-6 h-6" />
            </button>
            <div className="aspect-video">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"
                title="Marketing Demo Video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;