import { useState } from 'react';
import ImageModal from './ImageModal';

export default function PerformanceSection() {
  const [activeTab, setActiveTab] = useState('fire');
  const [modalImage, setModalImage] = useState(null);

  const openModal = (src) => {
    setModalImage(src);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setModalImage(null);
    document.body.style.overflow = '';
  };

  return (
    <section className="flex items-center min-h-[calc(100vh-72px)] section-padding">
      <div className="section-container">
        <h2 className="text-[clamp(28px,4.5vw,44px)] font-extrabold text-center mb-7">Model <span className="text-accent">Performance</span></h2>
        <p className="text-center text-[#c4cae1] max-w-[820px] mx-auto mb-[34px]">
          A transparent look at the accuracy and reliability of our prediction models. We believe in data-driven
          results for forecasting both fire occurrence and its potential rate of spread.
        </p>

        {/* Tabs */}
        <div className="flex gap-[18px] justify-center my-[10px] mb-[24px] flex-wrap">
          <button 
            onClick={() => setActiveTab('fire')}
            className={`inline-flex items-center justify-center h-[46px] px-[22px] rounded-[10px] font-semibold transition-all duration-200 cursor-pointer border-none ${
              activeTab === 'fire' 
                ? 'card-gradient text-white shadow-[0_10px_22px_rgba(255,90,50,0.25)] brightness-[1.06]' 
                : 'bg-[#2a3046] text-[#d6dcf1] border border-[rgba(255,255,255,0.08)]'
            }`}
          >
            Fire Spread Prediction
          </button>
          <button 
            onClick={() => setActiveTab('occ')}
            className={`inline-flex items-center justify-center h-[46px] px-[22px] rounded-[10px] font-semibold transition-all duration-200 cursor-pointer border-none ${
              activeTab === 'occ' 
                ? 'card-gradient text-white shadow-[0_10px_22px_rgba(255,90,50,0.25)] brightness-[1.06]' 
                : 'bg-[#2a3046] text-[#d6dcf1] border border-[rgba(255,255,255,0.08)]'
            }`}
          >
            Wildfire Occurrence Prediction
          </button>
        </div>

        {/* Pane: Fire Spread */}
        {activeTab === 'fire' && (
          <div>
            <div className="bg-card border border-[rgba(255,255,255,0.06)] rounded-[16px] p-[16px] shadow-[0_10px_30px_rgba(0,0,0,0.35)] mb-[22px]">
              <h3 className="text-center font-bold text-xl m-[4px_10px_12px]">Comprehensive Rate of Spread (ROS) Model Validation</h3>
              <div className="bg-[#0f1425] border border-[rgba(255,255,255,0.06)] rounded-[12px] overflow-hidden">
                <img 
                  src="https://i.postimg.cc/9Myzk1LB/Whats-App-Image-2025-10-04-at-17-53-55.jpg" 
                  alt="ROS model validation" 
                  className="w-full h-auto block cursor-zoom-in"
                  onClick={(e) => openModal(e.target.src)}
                />
              </div>
              <p className="text-center text-[#c4cae1] max-w-[900px] mx-auto mt-[10px]">
                Diagnostics including residuals and distribution checks confirm statistical soundness and predictive capabilities.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-[22px]">
              <div className="bg-card border border-[rgba(255,255,255,0.06)] rounded-[16px] p-[16px] shadow-[0_10px_30px_rgba(0,0,0,0.35)] mb-[22px]">
                <h3 className="text-center font-bold text-xl m-[4px_10px_12px]">Real vs. Synthetic Data Performance</h3>
                <div className="bg-[#0f1425] border border-[rgba(255,255,255,0.06)] rounded-[12px] overflow-hidden">
                  <img 
                    src="https://i.postimg.cc/4dpn0wW9/Whats-App-Image-2025-10-04-at-17-48-26.jpg" 
                    alt="Real vs Synthetic performance" 
                    className="w-full h-auto block cursor-zoom-in"
                    onClick={(e) => openModal(e.target.src)}
                  />
                </div>
                <p className="text-center text-[#c4cae1] max-w-[900px] mx-auto mt-[10px]">
                  Comparison of validation on real-world data (left) vs training on synthetic data (right). The diagonal indicates ideal predictions.
                </p>
              </div>

              <div className="bg-card border border-[rgba(255,255,255,0.06)] rounded-[16px] p-[16px] shadow-[0_10px_30px_rgba(0,0,0,0.35)] mb-[22px]">
                <h3 className="text-center font-bold text-xl m-[4px_10px_12px]">ROS Prediction: Feature Importance</h3>
                <div className="bg-[#0f1425] border border-[rgba(255,255,255,0.06)] rounded-[12px] overflow-hidden">
                  <img 
                    src="https://i.postimg.cc/fLYkP585/Whats-App-Image-2025-10-04-at-17-54-49.jpg" 
                    alt="ROS feature importance" 
                    className="w-full h-auto block cursor-zoom-in"
                    onClick={(e) => openModal(e.target.src)}
                  />
                </div>
                <p className="text-center text-[#c4cae1] max-w-[900px] mx-auto mt-[10px]">
                  Wind speed, NDVI, and temperature emerge as leading drivers of spread predictions.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Pane: Occurrence */}
        {activeTab === 'occ' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-[22px]">
            <div className="bg-card border border-[rgba(255,255,255,0.06)] rounded-[16px] p-[16px] shadow-[0_10px_30px_rgba(0,0,0,0.35)] mb-[22px]">
              <h3 className="text-center font-bold text-xl m-[4px_10px_12px]">Occurrence Prediction: Confusion Matrix</h3>
              <div className="bg-[#0f1425] border border-[rgba(255,255,255,0.06)] rounded-[12px] overflow-hidden">
                <img 
                  src="https://i.postimg.cc/KvFStbC8/Whats-App-Image-2025-10-02-at-22-06-29.jpg" 
                  alt="Occurrence confusion matrix" 
                  className="w-full h-auto block cursor-zoom-in"
                  onClick={(e) => openModal(e.target.src)}
                />
              </div>
              <p className="text-center text-[#c4cae1] max-w-[900px] mx-auto mt-[10px]">
                Confusion matrix and report summarizing precision, recall, F1-score and overall accuracy across fire/non-fire classes.
              </p>
            </div>

            <div className="bg-card border border-[rgba(255,255,255,0.06)] rounded-[16px] p-[16px] shadow-[0_10px_30px_rgba(0,0,0,0.35)] mb-[22px]">
              <h3 className="text-center font-bold text-xl m-[4px_10px_12px]">Occurrence Prediction: Feature Importance</h3>
              <div className="bg-[#0f1425] border border-[rgba(255,255,255,0.06)] rounded-[12px] overflow-hidden">
                <img 
                  src="https://i.postimg.cc/4NZkpGjn/Whats-App-Image-2025-10-03-at-01-17-52.jpg" 
                  alt="Occurrence feature importance and diagnostics" 
                  className="w-full h-auto block cursor-zoom-in"
                  onClick={(e) => openModal(e.target.src)}
                />
              </div>
              <p className="text-center text-[#c4cae1] max-w-[900px] mx-auto mt-[10px]">
                Key contributors include temperature, relative humidity, and vegetation indices (NDVI), aligning with environmental factors.
              </p>
            </div>
          </div>
        )}
      </div>

      <ImageModal src={modalImage} onClose={closeModal} />
    </section>
  );
}
