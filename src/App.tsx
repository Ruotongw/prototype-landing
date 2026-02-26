/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Wind, 
  Heart, 
  BarChart3, 
  ArrowRight, 
  CheckCircle2, 
  Menu, 
  X,
  Smile,
  Meh,
  Frown,
  CloudSun
} from 'lucide-react';

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-stone-50 text-stone-900 overflow-x-hidden selection:bg-sage-100 selection:text-sage-900">
      {/* Navigation */}
      <nav className="fixed w-full z-50 bg-stone-50/80 backdrop-blur-md border-b border-stone-200/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-sage-500 rounded-full flex items-center justify-center text-white">
                <Wind size={18} />
              </div>
              <span className="font-serif text-2xl font-medium tracking-tight">InnerSpace</span>
            </div>
            
            <div className="hidden md:flex items-center gap-8">
              <a href="#features" className="text-sm font-medium text-stone-600 hover:text-stone-900 transition-colors">Features</a>
              <a href="#science" className="text-sm font-medium text-stone-600 hover:text-stone-900 transition-colors">The Science</a>
              <a href="#reviews" className="text-sm font-medium text-stone-600 hover:text-stone-900 transition-colors">Stories</a>
              <button className="bg-stone-900 text-white px-5 py-2.5 rounded-full text-sm font-medium hover:bg-stone-800 transition-colors">
                Get Started
              </button>
            </div>

            <button 
              className="md:hidden p-2 text-stone-600"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-stone-50 border-b border-stone-200"
            >
              <div className="px-4 py-4 space-y-4">
                <a href="#features" className="block text-base font-medium text-stone-600" onClick={() => setIsMenuOpen(false)}>Features</a>
                <a href="#science" className="block text-base font-medium text-stone-600" onClick={() => setIsMenuOpen(false)}>The Science</a>
                <a href="#reviews" className="block text-base font-medium text-stone-600" onClick={() => setIsMenuOpen(false)}>Stories</a>
                <button className="w-full bg-stone-900 text-white px-5 py-3 rounded-full text-sm font-medium">
                  Get Started
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 lg:pt-48 lg:pb-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sage-100 text-sage-900 text-xs font-medium mb-6">
              <span className="w-2 h-2 rounded-full bg-sage-500 animate-pulse"></span>
              New: Guided Evening Reflections
            </div>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-serif font-medium leading-[1.1] mb-6 text-stone-900">
              Make space for <br />
              <span className="italic text-sage-600">your mind.</span>
            </h1>
            <p className="text-lg sm:text-xl text-stone-600 mb-8 max-w-lg leading-relaxed">
              A gentle daily companion to help you pause, reflect, and understand your emotional patterns. No pressure, just presence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-stone-900 text-white px-8 py-4 rounded-full text-base font-medium hover:bg-stone-800 transition-all hover:scale-105 active:scale-95 flex items-center justify-center gap-2">
                Start Checking In <ArrowRight size={18} />
              </button>
              <button className="bg-white border border-stone-200 text-stone-900 px-8 py-4 rounded-full text-base font-medium hover:bg-stone-50 transition-colors flex items-center justify-center">
                View Demo
              </button>
            </div>
            <div className="mt-12 flex items-center gap-4 text-sm text-stone-500">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <img 
                    key={i}
                    src={`https://picsum.photos/seed/${i + 20}/100/100`} 
                    alt="User" 
                    className="w-8 h-8 rounded-full border-2 border-stone-50 object-cover"
                    referrerPolicy="no-referrer"
                  />
                ))}
              </div>
              <p>Joined by 10,000+ mindful people</p>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            {/* Abstract Background Blob */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-sage-100/50 rounded-full blur-3xl -z-10"></div>
            
            {/* App Interface Mockup */}
            <div className="relative mx-auto max-w-[320px] bg-white rounded-[2.5rem] shadow-2xl border-8 border-stone-900 overflow-hidden">
              <div className="h-full bg-stone-50 flex flex-col">
                {/* Status Bar */}
                <div className="h-8 bg-stone-50 flex items-center justify-between px-6 pt-2">
                  <span className="text-[10px] font-bold">9:41</span>
                  <div className="flex gap-1">
                    <div className="w-3 h-3 rounded-full bg-stone-900/10"></div>
                    <div className="w-3 h-3 rounded-full bg-stone-900/10"></div>
                  </div>
                </div>

                {/* App Content */}
                <div className="p-6 flex-1 flex flex-col">
                  <div className="flex justify-between items-center mb-8">
                    <div className="w-8 h-8 rounded-full bg-stone-200"></div>
                    <div className="w-8 h-8 rounded-full border border-stone-200 flex items-center justify-center">
                      <Menu size={14} className="text-stone-400" />
                    </div>
                  </div>

                  <h3 className="font-serif text-2xl mb-2">Good morning, Alex.</h3>
                  <p className="text-stone-500 text-sm mb-8">How are you feeling right now?</p>

                  <div className="space-y-3 mb-8">
                    <div className="p-4 rounded-2xl bg-white border border-stone-100 shadow-sm flex items-center gap-3 cursor-pointer hover:border-sage-200 transition-colors">
                      <div className="w-8 h-8 rounded-full bg-sage-100 flex items-center justify-center text-sage-600">
                        <Smile size={16} />
                      </div>
                      <span className="font-medium text-stone-700">Calm & Focused</span>
                    </div>
                    <div className="p-4 rounded-2xl bg-white border border-stone-100 shadow-sm flex items-center gap-3 cursor-pointer hover:border-sage-200 transition-colors">
                      <div className="w-8 h-8 rounded-full bg-orange-50 flex items-center justify-center text-orange-400">
                        <Meh size={16} />
                      </div>
                      <span className="font-medium text-stone-700">A bit anxious</span>
                    </div>
                    <div className="p-4 rounded-2xl bg-white border border-stone-100 shadow-sm flex items-center gap-3 cursor-pointer hover:border-sage-200 transition-colors">
                      <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center text-blue-400">
                        <Frown size={16} />
                      </div>
                      <span className="font-medium text-stone-700">Tired</span>
                    </div>
                  </div>

                  <div className="mt-auto">
                    <div className="h-1 w-full bg-stone-100 rounded-full overflow-hidden">
                      <div className="h-full w-1/3 bg-sage-500 rounded-full"></div>
                    </div>
                    <p className="text-center text-xs text-stone-400 mt-4">Daily Streak: 12 Days</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-serif mb-4">Designed for quiet moments</h2>
            <p className="text-stone-600">We stripped away the noise to create a sanctuary for your thoughts. No ads, no infinite scrolling, just you.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
            {[
              {
                icon: <CloudSun className="w-6 h-6 text-sage-600" />,
                title: "Daily Check-ins",
                desc: "Quick, intuitive mood tracking that takes seconds, not minutes. Build a habit of self-awareness without the friction."
              },
              {
                icon: <BarChart3 className="w-6 h-6 text-sage-600" />,
                title: "Gentle Insights",
                desc: "Visualize your emotional trends over time. Spot patterns between your sleep, activities, and how you feel."
              },
              {
                icon: <Heart className="w-6 h-6 text-sage-600" />,
                title: "Guided Reflection",
                desc: "Thoughtful prompts that adapt to your mood. From gratitude to processing difficult emotions, we guide the way."
              }
            ].map((feature, idx) => (
              <motion.div 
                key={idx}
                whileHover={{ y: -5 }}
                className="p-8 rounded-3xl bg-stone-50 border border-stone-100 hover:shadow-lg transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-2xl bg-white border border-stone-100 flex items-center justify-center mb-6 shadow-sm">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-serif font-medium mb-3">{feature.title}</h3>
                <p className="text-stone-600 leading-relaxed text-sm">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Quote/Testimonial Section */}
      <section id="reviews" className="py-24 bg-sage-900 text-sage-50 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
           <svg width="100%" height="100%">
             <filter id="noise">
               <feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="3" stitchTiles="stitch" />
             </filter>
             <rect width="100%" height="100%" filter="url(#noise)" />
           </svg>
        </div>
        
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <div className="mb-8 flex justify-center">
            <div className="flex gap-1 text-sage-300">
              {[1, 2, 3, 4, 5].map(i => <span key={i}>★</span>)}
            </div>
          </div>
          <h2 className="text-3xl sm:text-5xl font-serif italic font-light leading-tight mb-8">
            "Finally, an app that doesn't feel like another task on my to-do list. It feels like a deep breath."
          </h2>
          <div className="flex items-center justify-center gap-4">
            <img 
              src="https://picsum.photos/seed/sarah/100/100" 
              alt="Sarah J." 
              className="w-12 h-12 rounded-full border-2 border-sage-700"
              referrerPolicy="no-referrer"
            />
            <div className="text-left">
              <div className="font-medium text-white">Sarah Jenkins</div>
              <div className="text-sage-400 text-sm">Mindfulness Coach</div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing/CTA Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <div className="bg-white rounded-[3rem] p-8 sm:p-12 lg:p-16 shadow-xl border border-stone-100 text-center relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-sage-50 rounded-full -translate-y-1/2 translate-x-1/3 -z-0"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-stone-50 rounded-full translate-y-1/2 -translate-x-1/3 -z-0"></div>
          
          <div className="relative z-10">
            <h2 className="text-4xl sm:text-5xl font-serif mb-6">Start your journey inward.</h2>
            <p className="text-stone-600 text-lg mb-10 max-w-xl mx-auto">
              Join thousands of others who are building a healthier relationship with their mind. Free to start, fair to upgrade.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button className="bg-stone-900 text-white px-8 py-4 rounded-full text-base font-medium hover:bg-stone-800 transition-all hover:scale-105 w-full sm:w-auto">
                Download for iOS
              </button>
              <button className="bg-white border border-stone-200 text-stone-900 px-8 py-4 rounded-full text-base font-medium hover:bg-stone-50 transition-colors w-full sm:w-auto">
                Download for Android
              </button>
            </div>
            
            <p className="mt-6 text-xs text-stone-400">
              No credit card required for free tier. Cancel anytime.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-stone-100 pt-16 pb-8 border-t border-stone-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
            <div className="col-span-2 md:col-span-1">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-6 h-6 bg-sage-500 rounded-full flex items-center justify-center text-white">
                  <Wind size={14} />
                </div>
                <span className="font-serif text-xl font-medium">InnerSpace</span>
              </div>
              <p className="text-stone-500 text-sm">
                Making the world a little more mindful, one check-in at a time.
              </p>
            </div>
            
            <div>
              <h4 className="font-medium mb-4">Product</h4>
              <ul className="space-y-2 text-sm text-stone-500">
                <li><a href="#" className="hover:text-stone-900">Features</a></li>
                <li><a href="#" className="hover:text-stone-900">Pricing</a></li>
                <li><a href="#" className="hover:text-stone-900">Download</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-medium mb-4">Company</h4>
              <ul className="space-y-2 text-sm text-stone-500">
                <li><a href="#" className="hover:text-stone-900">About</a></li>
                <li><a href="#" className="hover:text-stone-900">Blog</a></li>
                <li><a href="#" className="hover:text-stone-900">Careers</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-medium mb-4">Legal</h4>
              <ul className="space-y-2 text-sm text-stone-500">
                <li><a href="#" className="hover:text-stone-900">Privacy</a></li>
                <li><a href="#" className="hover:text-stone-900">Terms</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-stone-200 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-xs text-stone-400">© 2024 InnerSpace Inc. All rights reserved.</p>
            <div className="flex gap-4">
              {/* Social icons would go here */}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

