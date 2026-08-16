import { motion } from 'framer-motion';
import heroImage from '../assets/hero.png';

export default function Hero() {
  return (
    <section id="hero" className="relative flex flex-col items-center justify-center min-h-screen overflow-hidden">
      
      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full -z-20">
        <img 
          src={heroImage} 
          alt="Wildfire Background" 
          className="w-full h-full object-cover"
        />
      </div>

      {/* Overlays for text readability and seamless blending into the next section */}
      <div className="absolute inset-0 bg-[#0a0202]/60 -z-10"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-bg/60 via-transparent to-bg -z-10"></div>
      <div className="absolute bottom-0 inset-x-0 h-64 bg-gradient-to-t from-bg to-transparent -z-10"></div>

      {/* Main Centered Content */}
      <div className="section-container relative z-10 flex flex-col items-center text-center w-full max-w-[800px] mx-auto px-4 pt-[60px]">
        
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h1 className="text-[clamp(36px,5vw,60px)] leading-[1.15] font-extrabold tracking-tight m-0 mb-8 drop-shadow-2xl">
            <span className="block mb-2 text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-300">
              PREDICTING WILDFIRES.
            </span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-red-600 via-orange-500 to-amber-400">
              SAVING LIVES.
            </span>
          </h1>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="text-gray-200 text-base md:text-lg mb-12 leading-relaxed max-w-[600px] drop-shadow-lg font-medium"
        >
          Firewall provides a comprehensive suite of tools for proactive wildfire management. 
          By harnessing real-time satellite imagery and advanced AI, our platform helps predict outbreaks, 
          assess threats, and deploy effective preventive action.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <a 
            href="#map"
            className="inline-flex items-center justify-center h-[64px] px-[48px] rounded-[16px] font-extrabold text-white text-xl tracking-wide no-underline cursor-pointer card-gradient shadow-[0_15px_40px_rgba(255,69,0,0.5)] transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_25px_50px_rgba(255,69,0,0.7)] hover:scale-105 border border-white/20" 
          >
            Access Command Center
          </a>
        </motion.div>
      </div>
    </section>
  );
}


