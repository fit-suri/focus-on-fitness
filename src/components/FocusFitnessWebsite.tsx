"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import emailjs from '@emailjs/browser';

// Initialize EmailJS with your public key
emailjs.init('yGxbJ0YGJgb9vVLf2');
import {
  Phone,
  Mail,
  MapPin,
  Star,
  Users,
  Award,
  CheckCircle,
  ArrowRight,
  Menu,
  X,
  Building,
  Heart,
  Target,
  Zap,
  Shield,
  Activity,
  Dumbbell
} from "lucide-react";

type Service = {
  icon: React.ReactNode;
  title: string;
  description: string;
  features: string[];
  link?: string;
};

const FocusFitnessWebsite = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  // SEO Meta component
  const SEOHead = () => (
    <>
      <title>
        Focus on Fitness - Premium Gym Setup, Equipment & Corporate Wellness
        Solutions
      </title>
      <meta
        name="description"
        content="Leading gym setup & fitness equipment provider in India. 100+ successful projects, certified trainers, corporate wellness programs. Contact us for premium fitness solutions."
      />
      <meta
        name="keywords"
        content="gym setup, fitness equipment, corporate wellness, personal training, gym design, fitness center management, India"
      />
      <meta
        property="og:title"
        content="Focus on Fitness - Premium Gym Services & Equipment"
      />
      <meta
        property="og:description"
        content="Transform your space with premium gym setup services. Expert fitness solutions for corporates & individuals."
      />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link rel="canonical" href="https://focusonfitness.in" />
    </>
  );

  const services: Service[] = [
    {
      icon: <Building className="w-8 h-8 text-blue-600" />,
      title: "Fitness Center Design",
      description:
        "With over 100 successful projects delivered across India, our team brings deep industry knowledge and proven design strategies. From concept to execution, we provide complete solutions—seamlessly integrating equipment, layout, and functionality for maximum impact.",
      features: [
        "Custom Design Solutions",
        "Space Optimization",
        "Equipment Integration",
        "Project Management",
      ],
      link: "/fitness-center-design",
    },
    {
      icon: <Heart className="w-8 h-8 text-pink-600" />,
      title: "Sports & Recreational Facility",
      description:
        "We specialize in creating indoor sports and recreation areas designed to elevate employee wellness and team engagement. Whether it's in a corporate office or a residential complex, our thoughtfully crafted spaces encourage regular activity, stress relief, and social connection.",
      features: [
        "Indoor Sports Setup",
        "Recreation Areas",
        "Community Building",
        "Wellness Focus",
      ],
      link: "/sports-recreational-facility",
    },
    {
      icon: <Users className="w-8 h-8 text-purple-600" />,
      title: "On-Site Fitness Management",
      description:
        "Our on-site fitness programs are carefully designed, developed, and executed to meet the specific needs of your organization. We work closely with your team to create wellness initiatives that align with your company culture and health goals.",
      features: [
        "Custom Programs",
        "Professional Management",
        "Employee Assessments",
        "Personalized Training",
      ],
      link: "/on-site-fitness-management",
    },
    {
      icon: <Target className="w-8 h-8 text-green-600" />,
      title: "Wellness Solutions",
      description:
        "We design wellness initiatives that inspire every participant to take ownership of their health journey. Our tailored programs align with your individual and organizational needs, helping foster a culture of vitality and resilience.",
      features: [
        "Holistic Wellness",
        "Custom Programs",
        "Health Coaching",
        "Corporate Integration",
      ],
      link: "/wellness-solutions",
    },
    {
      icon: <Dumbbell className="w-8 h-8 text-yellow-600" />,
      title: "Equipment on Lease",
      description:
        "Planning to open a new fitness facility or upgrade your current gym? Leasing equipment can be a cost-effective way to get started without compromising on quality. Our flexible lease options are tailored to your business needs.",
      features: [
        "Flexible Terms",
        "Premium Equipment",
        "Maintenance Support",
        "Cost-Effective Solutions",
      ],
      link: "/equipment-lease",
    },
    {
      icon: <Zap className="w-8 h-8 text-orange-600" />,
      title: "Personal Training",
      description:
        "Achieve your goals faster with expert guidance tailored to your body, your lifestyle, and your schedule. Our certified trainers design personalized workouts and coach you every step of the way.",
      features: [
        "Certified Trainers",
        "Personalized Plans",
        "Goal-Oriented",
        "Flexible Scheduling",
      ],
      link: "/personal-training",
    },
  ];

  const stats = [
    { number: "9+", label: "Years Experience" },
    { number: "24/7", label: "Support Available" },
  ];

  const handleFormSubmit = async (e: React.MouseEvent) => {
    e.preventDefault();
    
    try {
      // Replace these with your actual EmailJS service details
      const serviceId = 'default_service';
      const templateId = 'template_iif6i97';
      const publicKey = 'yGxbJ0YGJgb9vVLf2';

      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        phone: formData.phone,
        inquiry_type: formData.service,
        message: formData.message,
      };

      const response = await emailjs.send(
        serviceId,
        templateId,
        templateParams,
        publicKey
      );

      if (response.status === 200) {
        alert("Thank you for your inquiry! We will contact you soon.");
        setFormData({ name: "", email: "", phone: "", service: "", message: "" });
      } else {
        alert("Something went wrong. Please try again later.");
      }
    } catch (error) {
      console.error('Error sending email:', error);
      alert("Something went wrong. Please try again later.");
    }
  };

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "services", "contact"];
      const current = sections.find((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
  <div className="min-h-screen text-gray-900">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-md z-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
              <div className="flex items-center">
              <Activity className="w-8 h-8 text-blue-600 mr-3" />
              <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-400 bg-clip-text text-transparent">
                Focus on Fitness
              </span>
            </div>            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                {["Home", "About", "Services", "Contact"].map((item) => (
                  <a
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                      activeSection === item.toLowerCase()
                        ? "bg-blue-100 text-blue-700"
                        : "text-gray-700 hover:bg-gray-100 hover:text-blue-600"
                    }`}
                  >
                    {item}
                  </a>
                ))}
              </div>
            </div>

            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-600 hover:text-blue-600"
              >
                {isMenuOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden bg-white/95 backdrop-blur-md">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {["Home", "About", "Services", "Contact"].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-100"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section
        id="home"
        className="relative pt-16 pb-20 overflow-hidden"
      >
        {/* Carousel Background */}
        <CarouselBackground />
        {/* Overlay for readability */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/80 via-transparent to-purple-900/80 z-10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 z-20">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-8">
              <span className="text-white drop-shadow-[0_2px_20px_rgba(255,255,255,0.3)]">
                Transform Your Space
              </span>
              <br />
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mt-4 block text-5xl md:text-7xl">
                Into a Fitness Destination
              </span>
            </h1>
            <p className="text-2xl text-blue-100 mb-12 max-w-3xl mx-auto font-medium drop-shadow-lg">
              Whether you're building a high-performance fitness center,
              enhancing a corporate wellness program, or creating a vibrant
              recreational space — Focus on Fitness is your trusted partner.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <a
                href="#contact"
                className="inline-flex items-center px-10 py-4 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white font-semibold rounded-lg hover:from-blue-600 hover:via-purple-600 hover:to-pink-600 transition-all shadow-[0_4px_20px_rgba(192,38,211,0.5)] hover:shadow-[0_8px_25px_rgba(192,38,211,0.6)]"
              >
                Get Free Consultation
                <ArrowRight className="ml-2 w-5 h-5" />
              </a>
              <a
                href="#services"
                className="inline-flex items-center px-10 py-4 bg-white/10 backdrop-blur-sm border-2 border-purple-400/50 text-purple-100 font-semibold rounded-lg hover:bg-purple-500/20 hover:border-purple-400 transition-all"
              >
                View Our Services
              </a>
            </div>
          </div>

          {/* Stats */}
          <div className="mt-24 flex justify-center">
            <div className="grid grid-cols-2 gap-8 w-full max-w-2xl">
              {stats.map((stat, index) => (
                <div key={index} className="text-center p-6 rounded-2xl bg-gradient-to-br from-white/10 to-purple-500/10 backdrop-blur-sm border border-purple-400/20 hover:border-purple-400/40 transition-all duration-300">
                  <div className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-3">
                    {stat.number}
                  </div>
                  <div className="text-lg text-blue-100 font-medium tracking-wide">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section
        id="about"
        className="py-24 relative"
        style={{
          backgroundImage: "url('/victor-freitas-qZ-U9z4TQ6A-unsplash.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center 30%",
          backgroundAttachment: "fixed"
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/60 via-blue-900/50 to-indigo-900/70 backdrop-blur-[1px]"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/30"></div>
        <div className="absolute inset-0 backdrop-blur-[1px]"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-blue-300 via-purple-200 to-blue-300 bg-clip-text text-transparent drop-shadow-lg">
                About Focus on Fitness
              </span>
            </h2>
            <p className="text-2xl text-blue-100 max-w-4xl mx-auto font-light leading-relaxed">
              We specialize in end-to-end fitness solutions: from concept and
              design to equipment selection and full facility management. Every
              project is driven by our commitment to excellence and tailored to
              meet your specific needs.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="group p-8 rounded-2xl bg-white/5 backdrop-blur-[8px] border border-white/20 
              hover:border-blue-400/30 transition-all duration-500 hover:transform hover:-translate-y-2
              hover:bg-gradient-to-br hover:from-blue-100/10 hover:to-purple-500/10
              shadow-[0_4px_20px_rgba(59,130,246,0.1)] hover:shadow-[0_8px_30px_rgba(99,102,241,0.2)]">
              <div className="mb-6 transform group-hover:scale-110 transition-transform duration-500">
                <div className="w-16 h-16 flex items-center justify-center rounded-xl bg-white/10 backdrop-blur-[8px] border border-white/20 group-hover:border-blue-400/40">
                  <Award className="w-8 h-8 text-blue-400 group-hover:text-blue-300 transition-colors duration-300" />
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-blue-100 group-hover:text-blue-200 transition-colors duration-300">
                Excellence Driven
              </h3>
              <p className="text-gray-300 leading-relaxed">
                Every project is driven by our commitment to excellence and
                tailored to meet your specific needs.
              </p>
            </div>

            <div className="group p-8 rounded-2xl bg-white/5 backdrop-blur-[8px] border border-white/20 
              hover:border-blue-400/30 transition-all duration-500 hover:transform hover:-translate-y-2
              hover:bg-gradient-to-br hover:from-blue-100/10 hover:to-purple-500/10
              shadow-[0_4px_20px_rgba(59,130,246,0.1)] hover:shadow-[0_8px_30px_rgba(99,102,241,0.2)]">
              <div className="mb-6 transform group-hover:scale-110 transition-transform duration-500">
                <div className="w-16 h-16 flex items-center justify-center rounded-xl bg-white/10 backdrop-blur-[8px] border border-white/20 group-hover:border-blue-400/40">
                  <Users className="w-8 h-8 text-blue-400 group-hover:text-blue-300 transition-colors duration-300" />
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-blue-100 group-hover:text-blue-200 transition-colors duration-300">
                Community Building
              </h3>
              <p className="text-gray-300 leading-relaxed">
                We don't just build gyms — we build communities of strength,
                health, and motivation.
              </p>
            </div>

            <div className="group p-8 rounded-2xl bg-white/5 backdrop-blur-[8px] border border-white/20 
              hover:border-blue-400/30 transition-all duration-500 hover:transform hover:-translate-y-2
              hover:bg-gradient-to-br hover:from-blue-100/10 hover:to-purple-500/10
              shadow-[0_4px_20px_rgba(59,130,246,0.1)] hover:shadow-[0_8px_30px_rgba(99,102,241,0.2)]">
              <div className="mb-6 transform group-hover:scale-110 transition-transform duration-500">
                <div className="w-16 h-16 flex items-center justify-center rounded-xl bg-gradient-to-br from-amber-500/10 to-orange-500/10 border border-amber-500/20 group-hover:border-amber-400/40">
                  <Shield className="w-8 h-8 text-amber-400 group-hover:text-amber-300 transition-colors duration-300" />
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-amber-100 group-hover:text-amber-200 transition-colors duration-300">
                Trusted Partner
              </h3>
              <p className="text-gray-300 leading-relaxed">
                With 9+ years of experience and 100+ successful projects, we're
                your reliable fitness partner.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section
        id="services"
        className="py-20 relative"
        style={{
          backgroundImage: "url('/victor-freitas-qZ-U9z4TQ6A-unsplash.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundAttachment: "fixed",
          minHeight: "100vh"
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-black/10 to-purple-900/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold mb-4">
              <span className="bg-gradient-to-r from-blue-300 via-purple-300 to-pink-300 bg-clip-text text-transparent drop-shadow-lg">
                Our Services
              </span>
            </h2>
            <p className="text-2xl text-white max-w-3xl mx-auto drop-shadow-md font-light">
              Comprehensive fitness solutions tailored to your needs
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Link
                key={index}
                href={service.link || '#'}
                className="group block p-8 rounded-2xl bg-gradient-to-br from-white/5 via-purple-500/5 to-blue-500/5 backdrop-blur-[6px] border border-white/10 
                hover:border-purple-300/30 transition-all duration-500 hover:transform hover:scale-105 
                hover:bg-gradient-to-br hover:from-white/10 hover:via-purple-500/10 hover:to-blue-500/10
                shadow-[0_4px_20px_rgba(0,0,0,0.1)] hover:shadow-[0_8px_30px_rgba(168,85,247,0.2)]"
              >
                <div className="mb-6 transform group-hover:scale-110 transition-transform duration-500">
                  <div className="w-16 h-16 flex items-center justify-center rounded-xl bg-gradient-to-br from-purple-500/10 to-blue-500/10 border border-white/10 group-hover:border-purple-300/30">
                    {service.icon}
                  </div>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-white drop-shadow-md group-hover:text-purple-100 transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-gray-100 mb-8 drop-shadow-sm leading-relaxed">
                  {service.description}
                </p>
                <ul className="space-y-4">
                  {service.features.map((feature, idx) => (
                    <li
                      key={idx}
                      className="flex items-center text-base text-white/90 group-hover:text-white transition-colors duration-300"
                    >
                      <CheckCircle className="w-5 h-5 text-purple-300 mr-3 group-hover:text-purple-200 transition-colors duration-300" />
                      <span className="drop-shadow-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section
        id="contact"
        className="py-20 relative"
        style={{
          backgroundImage: "url('/pexels-leonardho-1552242.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
          minHeight: "100vh"
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-black/10 to-purple-900/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-blue-300 via-purple-300 to-pink-300 bg-clip-text text-transparent drop-shadow-lg">
                Get In Touch
              </span>
            </h2>
            <p className="text-2xl text-white max-w-3xl mx-auto font-light leading-relaxed mb-8 drop-shadow-md">
              Ready to transform your space? Let's discuss your fitness
              facility needs and create something amazing together.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="group p-6 rounded-2xl bg-gradient-to-br from-white/5 via-purple-500/5 to-blue-500/5 backdrop-blur-[6px] border border-white/10 
                hover:border-purple-300/30 transition-all duration-500
                hover:bg-gradient-to-br hover:from-white/10 hover:via-purple-500/10 hover:to-blue-500/10
                shadow-[0_4px_20px_rgba(0,0,0,0.1)] hover:shadow-[0_8px_30px_rgba(168,85,247,0.2)]">
                <div className="flex items-center">
                  <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-gradient-to-br from-purple-500/10 to-blue-500/10 border border-white/10 group-hover:border-purple-300/30">
                    <Phone className="w-6 h-6 text-blue-300 group-hover:text-blue-200" />
                  </div>
                  <div className="ml-4">
                    <p className="font-semibold text-white group-hover:text-purple-100">Call Us</p>
                    <p className="text-gray-300">+91 8310890008</p>
                  </div>
                </div>
              </div>

              <div className="group p-6 rounded-2xl bg-gradient-to-br from-white/5 via-purple-500/5 to-blue-500/5 backdrop-blur-[6px] border border-white/10 
                hover:border-purple-300/30 transition-all duration-500
                hover:bg-gradient-to-br hover:from-white/10 hover:via-purple-500/10 hover:to-blue-500/10
                shadow-[0_4px_20px_rgba(0,0,0,0.1)] hover:shadow-[0_8px_30px_rgba(168,85,247,0.2)]">
                <div className="flex items-center">
                  <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-gradient-to-br from-purple-500/10 to-blue-500/10 border border-white/10 group-hover:border-purple-300/30">
                    <Mail className="w-6 h-6 text-blue-300 group-hover:text-blue-200" />
                  </div>
                  <div className="ml-4">
                    <p className="font-semibold text-white group-hover:text-purple-100">Email Us</p>
                    <p className="text-gray-300">surendra@focusonfitness.in</p>
                  </div>
                </div>
              </div>

              <div className="group p-6 rounded-2xl bg-gradient-to-br from-white/5 via-purple-500/5 to-blue-500/5 backdrop-blur-[6px] border border-white/10 
                hover:border-purple-300/30 transition-all duration-500
                hover:bg-gradient-to-br hover:from-white/10 hover:via-purple-500/10 hover:to-blue-500/10
                shadow-[0_4px_20px_rgba(0,0,0,0.1)] hover:shadow-[0_8px_30px_rgba(168,85,247,0.2)]">
                <div className="flex items-center">
                  <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-gradient-to-br from-purple-500/10 to-blue-500/10 border border-white/10 group-hover:border-purple-300/30">
                    <MapPin className="w-6 h-6 text-blue-300 group-hover:text-blue-200" />
                  </div>
                  <div className="ml-4">
                    <p className="font-semibold text-white group-hover:text-purple-100">Visit Us</p>
                    <p className="text-gray-300">Bangalore, Karnataka, India</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-8 rounded-2xl bg-gradient-to-br from-white/5 via-purple-500/5 to-blue-500/5 backdrop-blur-[6px] border border-white/10 
              hover:border-purple-300/30 transition-all duration-500
              shadow-[0_4px_20px_rgba(0,0,0,0.1)] hover:shadow-[0_8px_30px_rgba(168,85,247,0.2)]">
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium mb-2 text-white">
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:ring-2 focus:ring-purple-400 focus:border-transparent text-white placeholder-gray-400 backdrop-blur-[4px]"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2 text-white">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:ring-2 focus:ring-purple-400 focus:border-transparent text-white placeholder-gray-400 backdrop-blur-[4px]"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2 text-white">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:ring-2 focus:ring-purple-400 focus:border-transparent text-white placeholder-gray-400 backdrop-blur-[4px]"
                    placeholder="Your phone number"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2 text-white">
                    Service Interested In
                  </label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:ring-2 focus:ring-purple-400 focus:border-transparent text-white backdrop-blur-[4px]"
                  >
                    <option value="" className="text-gray-900">Select a service</option>
                    <option value="gym-design" className="text-gray-900">Fitness Center Design</option>
                    <option value="sports-facility" className="text-gray-900">Sports & Recreational Facility</option>
                    <option value="onsite-management" className="text-gray-900">On-Site Fitness Management</option>
                    <option value="wellness-solutions" className="text-gray-900">Wellness Solutions</option>
                    <option value="equipment-lease" className="text-gray-900">Equipment on Lease</option>
                    <option value="personal-training" className="text-gray-900">Personal Training</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2 text-white">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={4}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:ring-2 focus:ring-purple-400 focus:border-transparent text-white placeholder-gray-400 backdrop-blur-[4px]"
                    placeholder="Tell us about your project requirements..."
                  ></textarea>
                </div>

                <button
                  onClick={handleFormSubmit}
                  className="w-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white font-semibold py-4 px-6 rounded-lg 
                    hover:from-blue-600 hover:via-purple-600 hover:to-pink-600 transition-all 
                    shadow-[0_4px_20px_rgba(192,38,211,0.5)] hover:shadow-[0_8px_25px_rgba(192,38,211,0.6)]"
                >
                  Send Message
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative py-12" style={{
          backgroundImage: "url('/victor-freitas-qZ-U9z4TQ6A-unsplash.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed"
        }}>
  <div className="absolute inset-0 bg-gradient-to-br from-black/20 to-black/20 backdrop-blur-[1px]"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6 rounded-2xl bg-gradient-to-br from-white/5 via-purple-500/5 to-blue-500/5 backdrop-blur-[6px] border border-white/10 
              hover:border-purple-300/30 transition-all duration-500
              shadow-[0_4px_20px_rgba(0,0,0,0.1)] hover:shadow-[0_8px_30px_rgba(168,85,247,0.2)]">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 flex items-center justify-center rounded-xl bg-gradient-to-br from-purple-500/10 to-blue-500/10 border border-white/10">
                  <Activity className="w-6 h-6 text-blue-300" />
                </div>
                <span className="text-xl font-bold ml-3 bg-gradient-to-r from-blue-300 via-purple-300 to-pink-300 bg-clip-text text-transparent">
                  Focus on Fitness
                </span>
              </div>
              <p className="text-gray-300 mb-4">
                Your trusted partner for premium fitness solutions across India.
                From gym design to wellness management, we deliver excellence.
              </p>
              <div className="flex space-x-4">
                <div className="flex items-center p-2 rounded-lg bg-gradient-to-br from-white/5 to-purple-500/10 backdrop-blur-[4px] border border-white/10">
                  <Star className="w-5 h-5 text-yellow-300 mr-1" />
                  <span className="text-sm text-gray-300">4.9/5 Rating</span>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-gradient-to-br from-white/5 via-purple-500/5 to-blue-500/5 backdrop-blur-[6px] border border-white/10 
              hover:border-purple-300/30 transition-all duration-500
              shadow-[0_4px_20px_rgba(0,0,0,0.1)] hover:shadow-[0_8px_30px_rgba(168,85,247,0.2)]">
              <h3 className="text-lg font-semibold mb-4 bg-gradient-to-r from-blue-300 via-purple-300 to-pink-300 bg-clip-text text-transparent">
                Quick Links
              </h3>
              <ul className="space-y-3">
                <li>
                  <a
                    href="#home"
                    className="text-gray-300 hover:text-purple-300 transition-colors flex items-center"
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-purple-400 mr-2"></div>
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="#about"
                    className="text-gray-300 hover:text-purple-300 transition-colors flex items-center"
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-purple-400 mr-2"></div>
                    About Us
                  </a>
                </li>
                <li>
                  <a
                    href="#services"
                    className="text-gray-300 hover:text-purple-300 transition-colors flex items-center"
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-purple-400 mr-2"></div>
                    Services
                  </a>
                </li>
                <li>
                  <a
                    href="#contact"
                    className="text-gray-300 hover:text-purple-300 transition-colors flex items-center"
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-purple-400 mr-2"></div>
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            <div className="p-6 rounded-2xl bg-gradient-to-br from-white/5 via-purple-500/5 to-blue-500/5 backdrop-blur-[6px] border border-white/10 
              hover:border-purple-300/30 transition-all duration-500
              shadow-[0_4px_20px_rgba(0,0,0,0.1)] hover:shadow-[0_8px_30px_rgba(168,85,247,0.2)]">
              <h3 className="text-lg font-semibold mb-4 bg-gradient-to-r from-blue-300 via-purple-300 to-pink-300 bg-clip-text text-transparent">
                Services
              </h3>
              <ul className="space-y-3">
                <li className="text-gray-300 flex items-center">
                  <div className="w-1.5 h-1.5 rounded-full bg-purple-400 mr-2"></div>
                  Fitness Center Design
                </li>
                <li className="text-gray-300 flex items-center">
                  <div className="w-1.5 h-1.5 rounded-full bg-purple-400 mr-2"></div>
                  Corporate Wellness
                </li>
                <li className="text-gray-300 flex items-center">
                  <div className="w-1.5 h-1.5 rounded-full bg-purple-400 mr-2"></div>
                  Equipment Leasing
                </li>
                <li className="text-gray-300 flex items-center">
                  <div className="w-1.5 h-1.5 rounded-full bg-purple-400 mr-2"></div>
                  Personal Training
                </li>
                <li className="text-gray-300 flex items-center">
                  <div className="w-1.5 h-1.5 rounded-full bg-purple-400 mr-2"></div>
                  Sports Facilities
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-8 pt-8 text-center border-t border-white/10">
            <p className="text-gray-400">
              © 2024 Focus on Fitness. All rights reserved. |{" "}
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Designed for Excellence
              </span>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

const carouselImages = [
  "/pexels-leonardho-1552242.jpg",
  "/victor-freitas-qZ-U9z4TQ6A-unsplash.jpg",
  "/2137659-3840x2160-desktop-4k-gym-motivation-wallpaper-image.jpg"
];

function CarouselBackground() {
  const [current, setCurrent] = React.useState(0);
  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % carouselImages.length);
    }, 3500);
    return () => clearInterval(interval);
  }, []);
  return (
    <div className="absolute inset-0 w-full h-full z-0 transition-all duration-1000">
      {carouselImages.map((img, idx) => (
        <img
          key={img}
          src={img}
          alt="Fitness background"
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${current === idx ? 'opacity-100' : 'opacity-0'}`}
          style={{transitionProperty: 'opacity'}}
        />
      ))}
    </div>
  );
}

export default FocusFitnessWebsite;
