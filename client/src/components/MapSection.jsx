import { useEffect, useRef, useState } from 'react';
import L from 'leaflet';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { X, Loader2 } from 'lucide-react';
import { fetchWeatherData } from '../utils/weatherApi';
import { analyzeWildfireRisk } from '../utils/aiAnalyzer';

export default function MapSection() {
  const mapRef = useRef(null);
  const mapInstance = useRef(null);
  const [coords, setCoords] = useState(null);
  const [mapActive, setMapActive] = useState(false);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [analysisResult, setAnalysisResult] = useState(null);
  const [showModal, setShowModal] = useState(false);
  
  const activeRef = useRef(false);
  activeRef.current = mapActive;

  useEffect(() => {
    if (!mapRef.current || mapInstance.current) return;

    const startLat = 23.48340;
    const startLng = 77.34375;
    const map = L.map(mapRef.current, { zoomControl: true, attributionControl: true }).setView([startLat, startLng], 5);
    mapInstance.current = map;

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 18,
      attribution: '© OpenStreetMap'
    }).addTo(map);

    const marker = L.marker([startLat, startLng]).addTo(map);

    const FIRMS_KEY = 'af28b7077bbb1bdf9b5e67f7b83d304f';
    function getFirmsLayer(sensor, period) {
      return L.tileLayer.wms(
        `https://firms.modaps.eosdis.nasa.gov/mapserver/wms/fires/${FIRMS_KEY}/`,
        {
          layers: `fires_${sensor}_${period}`,
          format: 'image/png',
          transparent: true,
          attribution: 'NASA FIRMS'
        }
      );
    }

    const modis24 = getFirmsLayer("modis", "24");
    const modis48 = getFirmsLayer("modis", "48");
    const modis7d = getFirmsLayer("modis", "7");
    const viirs24 = getFirmsLayer("viirs", "24");
    const viirs48 = getFirmsLayer("viirs", "48");
    const viirs7d = getFirmsLayer("viirs", "7");

    const overlayMaps = {
      "MODIS (24h)": modis24,
      "MODIS (48h)": modis48,
      "MODIS (7 days)": modis7d,
      "VIIRS (24h)": viirs24,
      "VIIRS (48h)": viirs48,
      "VIIRS (7 days)": viirs7d
    };

    modis24.addTo(map);
    L.control.layers(null, overlayMaps, { collapsed: false }).addTo(map);

    map.on('click', function(e) {
      if (!activeRef.current) return;
      setCoords(e.latlng);
      marker.setLatLng(e.latlng);
    });

    return () => {
      if (mapInstance.current) {
        mapInstance.current.remove();
        mapInstance.current = null;
      }
    };
  }, []);

  useEffect(() => {
    const map = mapInstance.current;
    if (!map) return;
    
    if (!mapActive) {
      map.dragging.disable();
      map.scrollWheelZoom.disable();
      map.boxZoom.disable();
      map.keyboard.disable();
      if (map.tap) map.tap.disable();
    } else {
      map.dragging.enable();
      map.scrollWheelZoom.enable();
      map.boxZoom.enable();
      map.keyboard.enable();
      if (map.tap) map.tap.enable();
    }
  }, [mapActive]);

  const displayLat = coords ? coords.lat : 23.48340;
  const displayLng = coords ? coords.lng : 77.34375;

  const handleCheckProbability = async () => {
    setIsAnalyzing(true);
    setShowModal(true);
    setAnalysisResult(null);

    const weatherData = await fetchWeatherData(displayLat, displayLng);
    
    if (!weatherData) {
      setAnalysisResult("### ❌ Error\nFailed to fetch weather data. Please try again.");
      setIsAnalyzing(false);
      return;
    }

    const aiReport = await analyzeWildfireRisk(displayLat, displayLng, weatherData);
    setAnalysisResult(aiReport);
    setIsAnalyzing(false);
  };

  return (
    <section id="map" className="flex items-center min-h-[calc(100vh-80px)] section-padding bg-bg relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 w-full h-[600px] bg-accent/5 rounded-full blur-[150px] -translate-x-1/2 -translate-y-1/2 -z-10 pointer-events-none"></div>

      <div className="section-container relative w-full">
        <div 
          ref={mapRef} 
          className="h-[75vh] rounded-3xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)] border border-white/5"
        ></div>

        {!mapActive && (
          <div 
            className="absolute inset-0 grid place-items-center bg-bg/40 backdrop-blur-[4px] rounded-3xl z-[1003] cursor-pointer transition-all duration-300"
            onClick={() => setMapActive(true)}
          >
            <div className="bg-card/70 backdrop-blur-md border border-white/10 text-white w-[min(440px,90%)] text-center p-[32px] rounded-2xl shadow-[0_15px_40px_rgba(0,0,0,0.6)] transform transition-transform duration-300 hover:scale-[1.02]">
              <div className="grid place-items-center text-accent mb-4">
                <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none">
                  <path d="M12 22s7-6.3 7-12a7 7 0 1 0-14 0c0 5.7 7 12 7 12Z" stroke="currentColor" strokeWidth="2.5"/>
                  <circle cx="12" cy="10" r="2.5" stroke="currentColor" strokeWidth="2.5"/>
                </svg>
              </div>
              <h3 className="mt-0 mb-2 font-extrabold text-2xl tracking-tight">Activate Map</h3>
              <p className="m-0 text-muted font-medium text-lg">Click anywhere to unlock controls.</p>
            </div>
          </div>
        )}

        <div className={`absolute left-1/2 bottom-[24px] -translate-x-1/2 flex gap-4 items-center flex-wrap justify-center z-[1002] transition-all duration-500 ${mapActive ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0 pointer-events-none'}`}>
          <div className="bg-card/80 backdrop-blur-md text-white font-mono font-medium px-5 py-3.5 rounded-xl border border-white/10 shadow-xl flex items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
            {displayLat.toFixed(4)}, {displayLng.toFixed(4)}
          </div>
          
          <button 
            onClick={handleCheckProbability}
            disabled={isAnalyzing}
            className="inline-flex items-center justify-center h-[52px] px-[28px] rounded-xl font-bold text-white border-none cursor-pointer card-gradient shadow-[0_10px_25px_rgba(255,69,0,0.35)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_15px_30px_rgba(255,69,0,0.45)] hover:brightness-110 disabled:opacity-70 disabled:hover:-translate-y-0 disabled:cursor-not-allowed"
          >
            {isAnalyzing ? (
              <>
                <Loader2 className="animate-spin mr-2" size={20} />
                Analyzing...
              </>
            ) : "Analyze Risk"}
          </button>
          
          <button 
            onClick={() => setMapActive(false)}
            className="inline-flex items-center justify-center h-[52px] px-[24px] rounded-xl font-semibold text-muted bg-white/5 backdrop-blur-md border border-white/10 cursor-pointer transition-all duration-300 hover:bg-white/10 hover:text-white"
          >
            Lock Map
          </button>
        </div>

        {/* AI Analysis Modal */}
        {showModal && (
          <div className="absolute inset-0 z-[2000] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 animate-in fade-in duration-200">
            <div className="bg-bg-elev border border-white/10 rounded-2xl shadow-2xl w-full max-w-2xl max-h-[85vh] flex flex-col animate-in zoom-in-95 duration-300">
              <div className="flex items-center justify-between p-5 border-b border-white/5">
                <h2 className="text-xl font-extrabold text-white m-0 flex items-center gap-2">
                  <span className="text-accent">AI</span> Risk Analysis
                </h2>
                <button 
                  onClick={() => setShowModal(false)}
                  className="text-muted hover:text-white transition-colors bg-transparent border-none cursor-pointer p-1"
                >
                  <X size={24} />
                </button>
              </div>
              
              <div className="p-6 overflow-y-auto flex-1 custom-scrollbar">
                {isAnalyzing ? (
                  <div className="flex flex-col items-center justify-center h-48 text-muted">
                    <Loader2 className="animate-spin mb-4 text-accent" size={40} />
                    <p className="font-medium text-lg">Acquiring satellite weather data...</p>
                    <p className="text-sm opacity-70">Running prediction models</p>
                  </div>
                ) : (
                  <div className="text-gray-200 leading-relaxed">
                    <ReactMarkdown 
                      remarkPlugins={[remarkGfm]}
                      components={{
                        h1: ({node, ...props}) => <h1 className="text-2xl font-bold text-white mb-4 border-b border-white/10 pb-2" {...props} />,
                        h2: ({node, ...props}) => <h2 className="text-xl font-bold text-white mt-6 mb-3" {...props} />,
                        h3: ({node, ...props}) => <h3 className="text-lg font-bold text-white mt-5 mb-2" {...props} />,
                        p: ({node, ...props}) => <p className="mb-4 text-[#c7cee4]" {...props} />,
                        ul: ({node, ...props}) => <ul className="list-disc pl-5 mb-4 text-[#c7cee4]" {...props} />,
                        ol: ({node, ...props}) => <ol className="list-decimal pl-5 mb-4 text-[#c7cee4]" {...props} />,
                        li: ({node, ...props}) => <li className="mb-1" {...props} />,
                        strong: ({node, ...props}) => <strong className="font-bold text-white" {...props} />,
                        hr: ({node, ...props}) => <hr className="border-white/10 my-6" {...props} />,
                      }}
                    >
                      {analysisResult}
                    </ReactMarkdown>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

