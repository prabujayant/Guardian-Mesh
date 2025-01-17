import React from 'react';
import { Shield, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { ParticleNetwork } from '../three/ParticleNetwork';
import { AnimatedText } from './AnimatedText';
import { VectorBackground } from './VectorBackground';

export function HeroSection() {
  return (
    <div className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <VectorBackground />
      </div>
      <div className="absolute inset-0 z-[1]">
        <ParticleNetwork />
      </div>
      <div className="relative z-[2] text-center px-4">
        <AnimatedText delay="0">
          <div className="flex justify-center mb-8">
            <Shield className="w-16 h-16 text-indigo-600 dark:text-indigo-400" />
          </div>
        </AnimatedText>
       
        <AnimatedText delay="100">
          <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Guardian Mesh
          </h1>
        </AnimatedText>
       
        <AnimatedText delay="200">
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
          Real-Time IoT Cybersecurity for a Safer Connected World
          </p>
        </AnimatedText>
       
        <AnimatedText delay="300">
          <Link
            to="/dashboard"
            className="inline-flex items-center px-8 py-4 text-lg font-medium text-white bg-indigo-600 rounded-lg hover:bg-indigo-700 transition-colors"
          >
            Launch Dashboard
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </AnimatedText>
      </div>
    </div>
  );
}