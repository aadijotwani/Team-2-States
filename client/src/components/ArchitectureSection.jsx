import { motion } from 'framer-motion';

export default function ArchitectureSection() {
  return (
    <section id="architecture" className="flex items-center min-h-[calc(100vh-80px)] section-padding">
      <div className="section-container">
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-[clamp(28px,4.5vw,44px)] font-extrabold text-center mb-6 text-white"
        >
          Our <span className="bg-clip-text text-transparent bg-gradient-to-r from-accent to-[#ffaa00]">Architecture</span>
        </motion.h2>

        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center text-muted max-w-[820px] mx-auto mb-10 text-lg"
        >
          A look inside our intelligent system that processes geospatial data to deliver actionable insights.
        </motion.p>

        <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-[40px] items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <img 
              src="https://i.postimg.cc/LXWkvRTF/temp-Imageq-Xxp-Fd.avif" 
              alt="Wildfire architecture diagram"
              className="w-full rounded-2xl shadow-[0_15px_40px_rgba(0,0,0,0.5)] border border-white/5 bg-card/50"
            />
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            variants={{
              hidden: { opacity: 0 },
              show: {
                opacity: 1,
                transition: { staggerChildren: 0.15 }
              }
            }}
          >
            <motion.div variants={{ hidden: { opacity: 0, x: 30 }, show: { opacity: 1, x: 0, transition: { duration: 0.5, ease: "easeOut" } } }} className="bg-card/60 backdrop-blur-sm border border-white/5 rounded-2xl p-6 mb-4 shadow-lg hover:-translate-y-1 transition-transform">
              <h4 className="m-0 mb-2 font-bold text-white text-lg">1. Occurrence Prediction (O_PRED)</h4>
              <p className="m-0 text-muted leading-relaxed">When a user selects coordinates, our model analyzes historical fire data, weather patterns, and vegetation density to calculate the initial probability at that location.</p>
            </motion.div>

            <motion.div variants={{ hidden: { opacity: 0, x: 30 }, show: { opacity: 1, x: 0, transition: { duration: 0.5, ease: "easeOut" } } }} className="bg-card/60 backdrop-blur-sm border border-white/5 rounded-2xl p-6 mb-4 shadow-lg hover:-translate-y-1 transition-transform">
              <h4 className="m-0 mb-2 font-bold text-white text-lg">2. Threat Prediction (T_PRED)</h4>
              <p className="m-0 text-muted leading-relaxed">Simultaneously, a second model assesses potential damage using proximity to infrastructure, water bodies, and forest coverage to determine overall risk level.</p>
            </motion.div>

            <motion.div variants={{ hidden: { opacity: 0, x: 30 }, show: { opacity: 1, x: 0, transition: { duration: 0.5, ease: "easeOut" } } }} className="bg-card/60 backdrop-blur-sm border border-white/5 rounded-2xl p-6 mb-4 shadow-lg hover:-translate-y-1 transition-transform">
              <h4 className="m-0 mb-2 font-bold text-white text-lg">3. Output &amp; Visualization</h4>
              <p className="m-0 text-muted leading-relaxed">Both outputs are synthesized into a comprehensive risk &amp; damage analysis and visualized on the map for fast, informed decisions.</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

