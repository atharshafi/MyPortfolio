import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Download, ArrowLeft, ChevronLeft, ChevronRight, ZoomIn, ZoomOut } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import CustomCursor from '../components/CustomCursor';
import * as pdfjsLib from 'pdfjs-dist';
import pdfjsWorker from 'pdfjs-dist/build/pdf.worker?url';

pdfjsLib.GlobalWorkerOptions.workerSrc = pdfjsWorker;

export default function ResumePage() {
  const navigate = useNavigate();
  const [numPages, setNumPages] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [scale, setScale] = useState(1.5);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [pdfDoc, setPdfDoc] = useState(null);
  const canvasRef = useRef(null);
  const renderTaskRef = useRef(null);

  useEffect(() => {
    const loadPdf = async () => {
      try {
        const loadingTask = pdfjsLib.getDocument('/resume.pdf');
        const pdf = await loadingTask.promise;
        setNumPages(pdf.numPages);
        setPdfDoc(pdf);
        setLoading(false);
      } catch (err) {
        console.error('PDF load error:', err);
        setError(true);
        setLoading(false);
      }
    };
    loadPdf();
  }, []);

  useEffect(() => {
    if (!pdfDoc || !canvasRef.current) return;

    const renderPage = async () => {
      try {
        if (renderTaskRef.current) {
          renderTaskRef.current.cancel();
        }
        const page = await pdfDoc.getPage(currentPage);
        const viewport = page.getViewport({ scale });
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        canvas.width = viewport.width;
        canvas.height = viewport.height;
        const renderTask = page.render({ canvasContext: ctx, viewport });
        renderTaskRef.current = renderTask;
        await renderTask.promise;
      } catch (err) {
        if (err?.name !== 'RenderingCancelledException') {
          console.error('Render error:', err);
        }
      }
    };

    renderPage();
  }, [pdfDoc, currentPage, scale]);

  const zoomIn = () => setScale(prev => Math.min(prev + 0.25, 3));
  const zoomOut = () => setScale(prev => Math.max(prev - 0.25, 0.75));

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', background: '#050810' }}>

      <CustomCursor />

      {/* Top Bar */}
      <div style={{
        position: 'sticky', top: 0, zIndex: 50,
        background: 'rgba(12,17,32,0.9)',
        backdropFilter: 'blur(20px)',
        borderBottom: '1px solid #1a2540',
        padding: '14px 24px',
        display: 'flex', alignItems: 'center',
        justifyContent: 'space-between', gap: '12px',
        flexWrap: 'wrap',
      }}>

        <button
          onClick={() => navigate('/')}
          style={{
            display: 'flex', alignItems: 'center', gap: '8px',
            color: '#64748b', background: 'none', border: 'none',
            cursor: 'pointer', fontFamily: 'monospace', fontSize: '13px',
          }}
          onMouseEnter={e => e.currentTarget.style.color = '#00d4ff'}
          onMouseLeave={e => e.currentTarget.style.color = '#64748b'}
        >
          <ArrowLeft size={16} />
          Back to Portfolio
        </button>

        {numPages > 0 && (
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap' }}>
            <button
              onClick={() => setCurrentPage(p => Math.max(p - 1, 1))}
              disabled={currentPage === 1}
              style={{
                width: '32px', height: '32px', borderRadius: '8px',
                border: '1px solid #1a2540', background: 'rgba(255,255,255,0.03)',
                color: currentPage === 1 ? '#2a3550' : '#e2e8f0',
                cursor: currentPage === 1 ? 'not-allowed' : 'pointer',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
              }}
            >
              <ChevronLeft size={16} />
            </button>

            <span style={{
              color: '#e2e8f0', fontFamily: 'monospace',
              fontSize: '13px', minWidth: '60px', textAlign: 'center',
            }}>
              {currentPage} / {numPages}
            </span>

            <button
              onClick={() => setCurrentPage(p => Math.min(p + 1, numPages))}
              disabled={currentPage === numPages}
              style={{
                width: '32px', height: '32px', borderRadius: '8px',
                border: '1px solid #1a2540', background: 'rgba(255,255,255,0.03)',
                color: currentPage === numPages ? '#2a3550' : '#e2e8f0',
                cursor: currentPage === numPages ? 'not-allowed' : 'pointer',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
              }}
            >
              <ChevronRight size={16} />
            </button>

            <div style={{ width: '1px', height: '20px', background: '#1a2540', margin: '0 4px' }} />

            <button
              onClick={zoomOut}
              style={{
                width: '32px', height: '32px', borderRadius: '8px',
                border: '1px solid #1a2540', background: 'rgba(255,255,255,0.03)',
                color: '#e2e8f0', cursor: 'pointer',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
              }}
            >
              <ZoomOut size={15} />
            </button>

            <span style={{ color: '#64748b', fontFamily: 'monospace', fontSize: '12px', minWidth: '44px', textAlign: 'center' }}>
              {Math.round(scale * 100)}%
            </span>

            <button
              onClick={zoomIn}
              style={{
                width: '32px', height: '32px', borderRadius: '8px',
                border: '1px solid #1a2540', background: 'rgba(255,255,255,0.03)',
                color: '#e2e8f0', cursor: 'pointer',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
              }}
            >
              <ZoomIn size={15} />
            </button>
          </div>
        )}

        <a
          href="/resume.pdf"
          download="Athar_Shafi_Resume.pdf"
          style={{
            display: 'flex', alignItems: 'center', gap: '8px',
            padding: '8px 20px', borderRadius: '12px',
            background: 'linear-gradient(135deg, #00d4ff, #0ea5e9)',
            color: '#050810', fontWeight: '600', fontSize: '13px',
            textDecoration: 'none',
          }}
          onMouseEnter={e => e.currentTarget.style.opacity = '0.85'}
          onMouseLeave={e => e.currentTarget.style.opacity = '1'}
        >
          <Download size={14} />
          Download
        </a>

      </div>

      {/* Body */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        style={{
          flex: 1, overflowY: 'auto',
          padding: '32px 16px',
          display: 'flex', flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        {loading && (
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '16px', paddingTop: '100px' }}>
            <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
            <div style={{
              width: '36px', height: '36px',
              border: '2px solid #1a2540',
              borderTop: '2px solid #00d4ff',
              borderRadius: '50%',
              animation: 'spin 0.8s linear infinite',
            }} />
            <p style={{ color: '#64748b', fontFamily: 'monospace', fontSize: '13px' }}>
              Loading resume...
            </p>
          </div>
        )}

        {error && (
          <div style={{
            display: 'flex', flexDirection: 'column',
            alignItems: 'center', gap: '16px', paddingTop: '100px',
          }}>
            <p style={{ color: '#64748b', fontFamily: 'monospace', fontSize: '14px' }}>
              Preview unavailable — please download to view.
            </p>
            <a
              href="/resume.pdf"
              download="Athar_Shafi_Resume.pdf"
              style={{
                display: 'flex', alignItems: 'center', gap: '8px',
                padding: '12px 28px', borderRadius: '12px',
                background: 'linear-gradient(135deg, #00d4ff, #0ea5e9)',
                color: '#050810', fontWeight: '600', fontSize: '14px',
                textDecoration: 'none',
              }}
            >
              <Download size={15} />
              Download Resume
            </a>
          </div>
        )}

        {!loading && !error && (
          <div style={{
            borderRadius: '16px', overflow: 'hidden',
            boxShadow: '0 25px 60px rgba(0,0,0,0.6)',
            border: '1px solid #1a2540',
            maxWidth: '100%',
          }}>
            <canvas ref={canvasRef} style={{ display: 'block', maxWidth: '100%' }} />
          </div>
        )}

      </motion.div>

    </div>
  );
}
