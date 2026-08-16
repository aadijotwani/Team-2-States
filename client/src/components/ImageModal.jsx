export default function ImageModal({ src, onClose }) {
  if (!src) return null;

  return (
    <div 
      className="fixed inset-0 bg-[rgba(0,0,0,0.85)] z-[2000] flex items-center justify-center"
      onClick={onClose}
    >
      <button 
        className="fixed top-[18px] right-[24px] w-[44px] h-[44px] rounded-full border border-[rgba(255,255,255,0.25)] bg-[rgba(30,34,47,0.9)] text-white text-[26px] leading-none grid place-items-center cursor-pointer hover:brightness-110"
        onClick={onClose}
        aria-label="Close image"
      >
        &times;
      </button>
      <img 
        src={src} 
        alt="Preview" 
        className="max-w-[92vw] max-h-[90vh] rounded-[10px] border border-[rgba(255,255,255,0.2)] object-contain cursor-zoom-out"
      />
    </div>
  );
}
