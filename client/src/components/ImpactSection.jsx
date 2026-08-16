import { motion } from 'framer-motion';

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

export default function ImpactSection() {
  return (
    <section id="impact" className="section-padding bg-bg-elev">
      <div className="section-container">
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-[clamp(28px,4.5vw,44px)] font-extrabold text-center mb-10 text-white"
        >
          Creating a Safer <span className="bg-clip-text text-transparent bg-gradient-to-r from-accent to-[#ffaa00]">Future</span>
        </motion.h2>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <motion.div variants={itemVariants} className="group bg-card/60 backdrop-blur-sm border border-white/5 rounded-2xl p-6 shadow-xl transition-all duration-300 hover:-translate-y-2 hover:bg-card hover:shadow-[0_15px_40px_rgba(255,69,0,0.15)] hover:border-accent/30">
            <div className="w-12 h-12 rounded-xl grid place-items-center card-gradient text-white shadow-[0_8px_20px_rgba(255,69,0,0.3)] mb-5 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
              <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6 block">
                <circle cx="9" cy="9" r="3" stroke="currentColor" strokeWidth="2"/>
                <path d="M2 20c0-3.3 3.6-6 7-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                <circle cx="17" cy="11" r="2.5" stroke="currentColor" strokeWidth="2"/>
                <path d="M14 20c1.2-2.6 4.2-4 7-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </div>
            <h3 className="mb-2 font-bold text-xl text-white">For Communities</h3>
            <p className="text-muted leading-relaxed">Timely alerts and evacuation plans help reduce property damage by up to 40% and save lives.</p>
          </motion.div>

          <motion.div variants={itemVariants} className="group bg-card/60 backdrop-blur-sm border border-white/5 rounded-2xl p-6 shadow-xl transition-all duration-300 hover:-translate-y-2 hover:bg-card hover:shadow-[0_15px_40px_rgba(255,69,0,0.15)] hover:border-accent/30">
            <div className="w-12 h-12 rounded-xl grid place-items-center card-gradient text-white shadow-[0_8px_20px_rgba(255,69,0,0.3)] mb-5 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
              <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6 block">
                <path d="M3 7h11v7H3V7Z" stroke="currentColor" strokeWidth="2"/>
                <path d="M14 10h4l3 3v1h-7v-4Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/>
                <circle cx="7" cy="18" r="2" stroke="currentColor" strokeWidth="2"/>
                <circle cx="18" cy="18" r="2" stroke="currentColor" strokeWidth="2"/>
              </svg>
            </div>
            <h3 className="mb-2 font-bold text-xl text-white">For First Responders</h3>
            <p className="text-muted leading-relaxed">Real-time intelligence improves containment efficiency by ~25% and protects teams at the front lines.</p>
          </motion.div>

          <motion.div variants={itemVariants} className="group bg-card/60 backdrop-blur-sm border border-white/5 rounded-2xl p-6 shadow-xl transition-all duration-300 hover:-translate-y-2 hover:bg-card hover:shadow-[0_15px_40px_rgba(255,69,0,0.15)] hover:border-accent/30">
            <div className="w-12 h-12 rounded-xl grid place-items-center card-gradient text-white shadow-[0_8px_20px_rgba(255,69,0,0.3)] mb-5 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
              <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6 block">
                <path d="M4 20h16M6 20V10h12v10M3 10h18M10 4h4l6 6H4l6-6Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/>
              </svg>
            </div>
            <h3 className="mb-2 font-bold text-xl text-white">For Governance</h3>
            <p className="text-muted leading-relaxed">Data-driven insights power long-term planning, biodiversity protection, and resilient communities.</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

