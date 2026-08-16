export default function RoadmapSection() {
  return (
    <section className="flex items-center min-h-[calc(100vh-72px)] section-padding">
      <div className="section-container">
        <h2 className="text-[clamp(28px,4.5vw,44px)] font-extrabold text-center mb-7">Our Future <span className="text-accent">Roadmap</span></h2>
        <p className="text-center text-[#c4cae1] max-w-[820px] mx-auto mb-[34px]">
          Innovation is at our core. Our roadmap outlines a phased approach to creating a fully autonomous wildfire detection and response system.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_40px_1fr] gap-[24px] items-start">
          <div className="bg-transparent">
            <h3 className="my-2 text-accent font-extrabold text-xl">Phase 1 (Current)</h3>
            <h4 className="m-0 mb-2.5 font-bold text-lg">Predictive Intelligence</h4>
            <p className="text-[#c7cee4]">Leveraging historical and real-time data to accurately predict wildfire occurrence and spread, providing the foundational insights for proactive measures.</p>
          </div>

          <div className="relative h-full hidden lg:block">
            <div className="absolute left-1/2 top-0 bottom-0 w-[1px] bg-[rgba(255,255,255,0.12)] -translate-x-1/2"></div>
            <div className="absolute top-[34px] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[66px] h-[66px] rounded-full border-2 border-accent grid place-items-center text-accent bg-[rgba(26,31,48,0.6)]">
              <svg viewBox="0 0 24 24" fill="none" className="w-[34px] h-[34px]">
                <path d="M12 2v20M2 12h20" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </div>
          </div>

          <div className="bg-transparent">
            <h3 className="my-2 text-accent font-extrabold text-xl">Phase 2 (Future)</h3>
            <h4 className="m-0 mb-2.5 font-bold text-lg">Autonomous Verification &amp; Response</h4>
            <p className="text-[#c7cee4]">A groundbreaking step towards automation:</p>
            <ul className="list-none p-0 mt-[10px] space-y-2">
              <li className="relative pl-[18px] text-[#c7cee4] before:content-[''] before:absolute before:left-0 before:top-[10px] before:w-[6px] before:h-[6px] before:bg-accent before:rounded-[2px] before:rotate-45">
                <span className="text-white font-semibold">Drone Deployment:</span> Upon high-probability prediction, automated drones are dispatched.
              </li>
              <li className="relative pl-[18px] text-[#c7cee4] before:content-[''] before:absolute before:left-0 before:top-[10px] before:w-[6px] before:h-[6px] before:bg-accent before:rounded-[2px] before:rotate-45">
                <span className="text-white font-semibold">Visual Confirmation:</span> Drones stream live imagery to our cloud platform.
              </li>
              <li className="relative pl-[18px] text-[#c7cee4] before:content-[''] before:absolute before:left-0 before:top-[10px] before:w-[6px] before:h-[6px] before:bg-accent before:rounded-[2px] before:rotate-45">
                <span className="text-white font-semibold">AI Analysis:</span> A CNN/YOLO model analyzes the feed to confirm fire presence and severity.
              </li>
              <li className="relative pl-[18px] text-[#c7cee4] before:content-[''] before:absolute before:left-0 before:top-[10px] before:w-[6px] before:h-[6px] before:bg-accent before:rounded-[2px] before:rotate-45">
                <span className="text-white font-semibold">Automated Response:</span> The system notifies authorities with precise data, recommending an appropriate response.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
