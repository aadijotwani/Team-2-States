export default function ResearchSection() {
  return (
    <section className="flex items-center section-padding pt-[48px]">
      <div className="section-container">
        <h2 className="text-[clamp(28px,4.5vw,44px)] font-extrabold text-center mb-7">Grounded in <span className="text-accent">Research</span></h2>
        <p className="text-center text-[#c4cae1] max-w-[820px] mx-auto mb-[34px]">
          Our methodologies are built upon established academic research in the field of wildfire prediction using machine learning.
          The primary research paper we referred to is:
        </p>

        <div className="bg-bg-elev border border-[rgba(255,255,255,0.06)] rounded-[16px] p-[22px] max-w-[800px] mx-auto text-center flex flex-col items-center shadow-[0_10px_30px_rgba(0,0,0,0.35)]">
          <div className="mb-5">
            <h3 className="font-bold text-xl mb-2 text-[#e9eefc]">
              Predicting Forest Fire Occurrence Using Machine Learning Algorithms in the Mediterranean Region of Türkiye
            </h3>
            <p className="text-[#c6cde3] mb-1">
              Eker, İ., Triyaki, İ., &amp; Avdan, U. (2024).
            </p>
            <p className="text-[#c6cde3] mb-0">Published in <em className="text-[#aab1c5]">Forestist</em>.</p>
          </div>

          <a
            className="inline-flex items-center justify-center h-[46px] px-[22px] rounded-[10px] font-semibold text-white no-underline cursor-pointer card-gradient shadow-[0_10px_22px_rgba(255,90,50,0.25)] transition-transform duration-200 hover:-translate-y-[1.5px] hover:brightness-[1.04]"
            href="https://forestist.org/Content/files/sayilar/260/FRSTST_20240022_nlm_new_indd(1).pdf"
            target="_blank" rel="noopener noreferrer"
            aria-label="Read the referenced research paper in a new tab"
          >
            Read The Paper
          </a>
        </div>
      </div>
    </section>
  );
}
