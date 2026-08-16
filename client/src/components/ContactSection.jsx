export default function ContactSection() {
  return (
    <section className="flex items-center min-h-[calc(100vh-72px)] section-padding">
      <div className="section-container grid grid-cols-1 lg:grid-cols-[0.9fr_1.3fr] items-center gap-[32px]">
        <div>
          <h2 className="text-[clamp(42px,10vw,80px)] leading-[0.9] tracking-[0.5px] text-accent font-extrabold m-0">
            <span className="block">CONTACT</span>
            <span className="block">US</span>
          </h2>
        </div>

        <form className="bg-bg-elev border border-[rgba(255,255,255,0.06)] rounded-[16px] p-[22px] shadow-[0_10px_30px_rgba(0,0,0,0.35)]" onSubmit={(e) => e.preventDefault()}>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-[14px] mb-[14px]">
            <input 
              type="text" 
              placeholder="First Name" 
              required 
              className="w-full bg-[#12172a] text-[#e9eefc] border border-[rgba(255,255,255,0.08)] rounded-[10px] p-[12px] font-inherit outline-none placeholder:text-[#96a0be] focus:border-[rgba(255,255,255,0.25)] transition-colors"
            />
            <input 
              type="text" 
              placeholder="Last Name" 
              required 
              className="w-full bg-[#12172a] text-[#e9eefc] border border-[rgba(255,255,255,0.08)] rounded-[10px] p-[12px] font-inherit outline-none placeholder:text-[#96a0be] focus:border-[rgba(255,255,255,0.25)] transition-colors"
            />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-[14px] mb-[14px]">
            <input 
              type="text" 
              placeholder="City" 
              className="w-full bg-[#12172a] text-[#e9eefc] border border-[rgba(255,255,255,0.08)] rounded-[10px] p-[12px] font-inherit outline-none placeholder:text-[#96a0be] focus:border-[rgba(255,255,255,0.25)] transition-colors"
            />
            <input 
              type="email" 
              placeholder="Email" 
              required 
              className="w-full bg-[#12172a] text-[#e9eefc] border border-[rgba(255,255,255,0.08)] rounded-[10px] p-[12px] font-inherit outline-none placeholder:text-[#96a0be] focus:border-[rgba(255,255,255,0.25)] transition-colors"
            />
          </div>
          <textarea 
            rows="6" 
            placeholder="Your Message" 
            className="w-full bg-[#12172a] text-[#e9eefc] border border-[rgba(255,255,255,0.08)] rounded-[10px] p-[12px] font-inherit outline-none placeholder:text-[#96a0be] focus:border-[rgba(255,255,255,0.25)] transition-colors resize-y mb-4"
          ></textarea>
          <button 
            type="submit"
            className="inline-flex items-center justify-center h-[46px] px-[22px] rounded-[10px] font-semibold text-white no-underline cursor-pointer card-gradient shadow-[0_10px_22px_rgba(255,90,50,0.25)] transition-transform duration-200 hover:-translate-y-[1.5px] hover:brightness-[1.04]"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}

