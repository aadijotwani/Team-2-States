export default function Footer() {
  return (
    <footer className="border-t border-[rgba(255,255,255,0.05)] bg-[#050101] text-gray-400 py-8 text-center mt-auto">
      <div className="section-container flex flex-col items-center justify-center gap-2">
        <div className="flex items-center gap-2 text-white font-bold text-lg mb-2">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#ff4500]">
            <path d="M12 2c0 0-5 6.5-5 11a5 5 0 0 0 10 0c0-4.5-5-11-5-11Z" />
            <path d="M12 10a2 2 0 1 0 0 4 2 2 0 0 0 0-4Z" />
          </svg>
          Firewall
        </div>
        <p className="text-sm">Built by Team 2 States.</p>
        <p className="text-xs text-gray-600 mt-2">&copy; {new Date().getFullYear()} Firewall Predictive System. All rights reserved.</p>
      </div>
    </footer>
  );
}
