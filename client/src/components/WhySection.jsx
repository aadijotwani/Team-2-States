import { motion } from 'framer-motion';

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
};

export default function WhySection() {
  return (
    <section id="why" className="flex items-center min-h-[calc(100vh-80px)] section-padding">
      <div className="section-container">
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-[clamp(28px,4.5vw,44px)] font-extrabold text-center mb-16 text-white"
        >
          Why <span className="bg-clip-text text-transparent bg-gradient-to-r from-accent to-[#ffaa00]">Firewall?</span>
        </motion.h2>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {/* Card 1 */}
          <motion.div variants={itemVariants} className="group bg-card/60 backdrop-blur-sm border border-white/5 rounded-2xl p-6 shadow-xl transition-all duration-300 hover:-translate-y-2 hover:bg-card hover:shadow-[0_15px_40px_rgba(255,69,0,0.15)] hover:border-accent/30">
            <div className="w-12 h-12 rounded-xl grid place-items-center card-gradient text-white shadow-[0_8px_20px_rgba(255,69,0,0.3)] mb-5 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
              <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6 block">
                <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2"/>
                <path d="M12 12 18 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="2"/>
              </svg>
            </div>
            <h3 className="mb-2 font-bold text-xl text-white">Real-Time Data</h3>
            <p className="text-muted leading-relaxed">Utilizes live satellite data from NASA FIRMS to detect early signs of wildfires across the globe.</p>
          </motion.div>

          {/* Card 2 */}
          <motion.div variants={itemVariants} className="group bg-card/60 backdrop-blur-sm border border-white/5 rounded-2xl p-6 shadow-xl transition-all duration-300 hover:-translate-y-2 hover:bg-card hover:shadow-[0_15px_40px_rgba(255,69,0,0.15)] hover:border-accent/30">
            <div className="w-12 h-12 rounded-xl grid place-items-center card-gradient text-white shadow-[0_8px_20px_rgba(255,69,0,0.3)] mb-5 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
              <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6 block">
                <rect x="7" y="7" width="10" height="10" rx="2" stroke="currentColor" strokeWidth="2"/>
                <path d="M4 10h2M4 14h2M18 10h2M18 14h2M10 4v2M14 4v2M10 18v2M14 18v2" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </div>
            <h3 className="mb-2 font-bold text-xl text-white">AI Predictions</h3>
            <p className="text-muted leading-relaxed">Analyzes conditions to predict fire spread, ensuring faster response and accurate threat assessment.</p>
          </motion.div>

          {/* Card 3 */}
          <motion.div variants={itemVariants} className="group bg-card/60 backdrop-blur-sm border border-white/5 rounded-2xl p-6 shadow-xl transition-all duration-300 hover:-translate-y-2 hover:bg-card hover:shadow-[0_15px_40px_rgba(255,69,0,0.15)] hover:border-accent/30">
            <div className="w-12 h-12 rounded-xl grid place-items-center card-gradient text-white shadow-[0_8px_20px_rgba(255,69,0,0.3)] mb-5 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
              <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6 block">
                <path d="M12 3l7 3v5c0 5-3.5 8.5-7 10-3.5-1.5-7-5-7-10V6l7-3Z" stroke="currentColor" strokeWidth="2"/>
              </svg>
            </div>
            <h3 className="mb-2 font-bold text-xl text-white">Community Safety</h3>
            <p className="text-muted leading-relaxed">Helps governments, NGOs, and citizens understand risk, reduce damage, and take preventive action.</p>
          </motion.div>

          {/* Card 4 */}
          <motion.div variants={itemVariants} className="group bg-card/60 backdrop-blur-sm border border-white/5 rounded-2xl p-6 shadow-xl transition-all duration-300 hover:-translate-y-2 hover:bg-card hover:shadow-[0_15px_40px_rgba(255,69,0,0.15)] hover:border-accent/30">
            <div className="w-12 h-12 rounded-xl grid place-items-center card-gradient text-white shadow-[0_8px_20px_rgba(255,69,0,0.3)] mb-5 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
              <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6 block">
                <path d="M18 16v-5a6 6 0 1 0-12 0v5l-2 2h16l-2-2Z" stroke="currentColor" strokeWidth="2"/>
                <path d="M10 20a2 2 0 0 0 4 0" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </div>
            <h3 className="mb-2 font-bold text-xl text-white">Automated Alerts</h3>
            <p className="text-muted leading-relaxed">Sends instant SMS, email, and app notifications in threatened areas to ensure timely evacuations.</p>
          </motion.div>

          {/* Card 5 */}
          <motion.div variants={itemVariants} className="group bg-card/60 backdrop-blur-sm border border-white/5 rounded-2xl p-6 shadow-xl transition-all duration-300 hover:-translate-y-2 hover:bg-card hover:shadow-[0_15px_40px_rgba(255,69,0,0.15)] hover:border-accent/30">
            <div className="w-12 h-12 rounded-xl grid place-items-center card-gradient text-white shadow-[0_8px_20px_rgba(255,69,0,0.3)] mb-5 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
              <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6 block">
                <path d="M4 20V6M8 20v-6M12 20V8M16 20v-9M20 20V4" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </div>
            <h3 className="mb-2 font-bold text-xl text-white">Historical Analysis</h3>
            <p className="text-muted leading-relaxed">Analyzes years of satellite and weather data to identify high-risk zones and seasonal patterns.</p>
          </motion.div>

          {/* Card 6 */}
          <motion.div variants={itemVariants} className="group bg-card/60 backdrop-blur-sm border border-white/5 rounded-2xl p-6 shadow-xl transition-all duration-300 hover:-translate-y-2 hover:bg-card hover:shadow-[0_15px_40px_rgba(255,69,0,0.15)] hover:border-accent/30">
            <div className="w-12 h-12 rounded-xl grid place-items-center card-gradient text-white shadow-[0_8px_20px_rgba(255,69,0,0.3)] mb-5 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
              <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6 block">
                <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2"/>
                <path d="M14.5 9.5 11 13l-1.5 3.5L13 15l3.5-3.5-2-2Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/>
              </svg>
            </div>
            <h3 className="mb-2 font-bold text-xl text-white">Evacuation Planning</h3>
            <p className="text-muted leading-relaxed">Generates dynamic, safe evacuation routes in real time based on spread predictions and roads.</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

