"use client";

import React from 'react';
import { ArrowLeft, CheckCircle, Building, Layout, Target, Wrench } from 'lucide-react';
import Link from 'next/link';

const FitnessCenterDesign = () => {
  const designFeatures = [
    {
      icon: <Layout className="w-8 h-8 text-blue-400" />,
      title: "Space Planning & Layout",
      description: "Strategic planning of your fitness space to maximize flow, functionality, and member experience. We consider traffic patterns, equipment zones, and activity areas."
    },
    {
      icon: <Building className="w-8 h-8 text-purple-400" />,
      title: "Interior Design & Aesthetics",
      description: "Create an inspiring atmosphere with carefully chosen color schemes, lighting design, flooring options, and branded elements that reflect your unique identity."
    },
    {
      icon: <Target className="w-8 h-8 text-green-400" />,
      title: "Equipment Selection & Placement",
      description: "Expert guidance on choosing and positioning the right mix of cardio, strength, and functional training equipment for your target demographic."
    },
    {
      icon: <Wrench className="w-8 h-8 text-orange-400" />,
      title: "Technical Infrastructure",
      description: "Implementation of essential systems including ventilation, sound systems, security, and digital integration for modern fitness experiences."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-blue-950 text-gray-100">
      {/* Header Section */}
      <div className="relative py-20 overflow-hidden">
        {/* Background Image with Overlay */}
        <div 
          className="absolute inset-0 bg-cover bg-center z-0"
          style={{
            backgroundImage: "linear-gradient(rgba(17,24,39,0.85), rgba(17,24,39,0.85)), url('/victor-freitas-qZ-U9z4TQ6A-unsplash.jpg')"
          }}
        ></div>
        
        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link 
            href="/"
            className="inline-flex items-center text-blue-400 hover:text-blue-300 mb-8"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to Home
          </Link>
          
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Fitness Center Design
            </span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mb-8">
            Transform your space into a state-of-the-art fitness facility with our expert design services. We combine functionality, aesthetics, and innovation to create inspiring fitness environments.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Features Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          {designFeatures.map((feature, index) => (
            <div 
              key={index}
              className="bg-gradient-to-br from-gray-800 to-blue-950 p-8 rounded-xl border border-gray-800 hover:border-blue-400 transition-all"
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold mb-4 text-gray-100">{feature.title}</h3>
              <p className="text-gray-300">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Process Section */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold mb-8">
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Our Design Process
            </span>
          </h2>
          <div className="space-y-6">
            {[
              {
                step: "1. Initial Consultation",
                description: "We begin with understanding your vision, requirements, target audience, and budget constraints."
              },
              {
                step: "2. Space Analysis",
                description: "Our team conducts a thorough analysis of your space, considering dimensions, structural elements, and utilities."
              },
              {
                step: "3. Concept Development",
                description: "We create detailed 2D and 3D concepts of your fitness center, including layout plans and visual renderings."
              },
              {
                step: "4. Equipment Planning",
                description: "Selection and arrangement of fitness equipment based on your facility's focus and target demographic."
              },
              {
                step: "5. Implementation",
                description: "Coordinated execution of the design plan, including construction, equipment installation, and finishing touches."
              }
            ].map((item, index) => (
              <div key={index} className="flex items-start">
                <CheckCircle className="w-6 h-6 text-blue-400 mr-4 mt-1" />
                <div>
                  <h3 className="text-xl font-semibold text-gray-100 mb-2">{item.step}</h3>
                  <p className="text-gray-300">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gradient-to-br from-gray-800 to-blue-950 p-12 rounded-xl border border-gray-800">
          <h2 className="text-3xl font-bold mb-4">Ready to Start Your Project?</h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Let's discuss how we can create the perfect fitness space for your needs. Our team is ready to bring your vision to life.
          </p>
          <Link 
            href="/#contact"
            className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all shadow-lg hover:shadow-xl"
          >
            Get Free Consultation
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FitnessCenterDesign;
