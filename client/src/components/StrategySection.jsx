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

export default function StrategySection() {
  return (
    <section id="strategy" className="section-padding bg-bg">
      <div className="section-container">
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-[clamp(28px,4.5vw,44px)] font-extrabold text-center mb-6 text-white"
        >
          Our Business <span className="bg-clip-text text-transparent bg-gradient-to-r from-accent to-[#ffaa00]">Model</span>
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center text-muted max-w-[820px] mx-auto mb-10 leading-relaxed text-lg"
        >
          Our strategy is centered on a multi-faceted approach to create a sustainable and impactful business. We aim to collaborate with partners while building diverse revenue streams to fuel our growth and innovation.
        </motion.p>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <motion.div variants={itemVariants} className="group bg-card/60 backdrop-blur-sm border border-white/5 rounded-2xl p-6 shadow-xl transition-all duration-300 hover:-translate-y-2 hover:bg-card hover:shadow-[0_15px_40px_rgba(255,69,0,0.15)] hover:border-accent/30">
            <h3 className="mb-2 font-bold text-xl text-white">Subscription Models</h3>
            <p className="text-muted leading-relaxed">Offering tiered subscription plans for governments, NGOs, and large enterprises, providing access to advanced analytics, priority support, and higher data resolution.</p>
          </motion.div>
          <motion.div variants={itemVariants} className="group bg-card/60 backdrop-blur-sm border border-white/5 rounded-2xl p-6 shadow-xl transition-all duration-300 hover:-translate-y-2 hover:bg-card hover:shadow-[0_15px_40px_rgba(255,69,0,0.15)] hover:border-accent/30">
            <h3 className="mb-2 font-bold text-xl text-white">Premium Features</h3>
            <p className="text-muted leading-relaxed">Implementing a paywall for specialized tools, such as high-frequency satellite monitoring, long-term predictive modeling, and detailed damage assessment reports.</p>
          </motion.div>
          <motion.div variants={itemVariants} className="group bg-card/60 backdrop-blur-sm border border-white/5 rounded-2xl p-6 shadow-xl transition-all duration-300 hover:-translate-y-2 hover:bg-card hover:shadow-[0_15px_40px_rgba(255,69,0,0.15)] hover:border-accent/30">
            <h3 className="mb-2 font-bold text-xl text-white">Data &amp; API Services</h3>
            <p className="text-muted leading-relaxed">Monetizing our aggregated and processed data by providing secure API endpoints for third-party developers, researchers, and insurance companies.</p>
          </motion.div>
          <motion.div variants={itemVariants} className="group bg-card/60 backdrop-blur-sm border border-white/5 rounded-2xl p-6 shadow-xl transition-all duration-300 hover:-translate-y-2 hover:bg-card hover:shadow-[0_15px_40px_rgba(255,69,0,0.15)] hover:border-accent/30">
            <h3 className="mb-2 font-bold text-xl text-white">Government Sponsorships</h3>
            <p className="text-muted leading-relaxed">Securing contracts and sponsorships from government agencies to integrate our platform as an official tool for national disaster management and public safety.</p>
          </motion.div>
          <motion.div variants={itemVariants} className="group bg-card/60 backdrop-blur-sm border border-white/5 rounded-2xl p-6 shadow-xl transition-all duration-300 hover:-translate-y-2 hover:bg-card hover:shadow-[0_15px_40px_rgba(255,69,0,0.15)] hover:border-accent/30">
            <h3 className="mb-2 font-bold text-xl text-white">NGO &amp; Corporate Partnerships</h3>
            <p className="text-muted leading-relaxed">Collaborating with NGOs and corporations on specific projects, providing them with data-driven insights for environmental conservation and CSR initiatives.</p>
          </motion.div>
          <motion.div variants={itemVariants} className="group bg-card/60 backdrop-blur-sm border border-white/5 rounded-2xl p-6 shadow-xl transition-all duration-300 hover:-translate-y-2 hover:bg-card hover:shadow-[0_15px_40px_rgba(255,69,0,0.15)] hover:border-accent/30">
            <h3 className="mb-2 font-bold text-xl text-white">Targeted Advertising</h3>
            <p className="text-muted leading-relaxed">Running non-intrusive, relevant advertisements for products and services related to safety, insurance, and environmental sustainability on our public-facing platforms.</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

