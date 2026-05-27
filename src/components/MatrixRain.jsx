import { useEffect, useRef } from 'react';

const MatrixRain = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let animationId;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    const cols = Math.floor(window.innerWidth / 18);
    const drops = Array(cols).fill(1);
    const chars = '0123456789ABCDEF'; // hex characters for cyber feel

    const draw = () => {
      ctx.fillStyle = 'rgba(10,10,10,0.07)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.font = '12px JetBrains Mono, monospace';

      for (let i = 0; i < drops.length; i++) {
        const char = chars[Math.floor(Math.random() * chars.length)];
        const alpha = Math.random() > 0.6 ? 0.7 : 0.2;

        if (Math.random() > 0.8) {
          ctx.fillStyle = `rgba(255, 59, 59, ${alpha})`;
        } else {
          ctx.fillStyle = `rgba(140, 140, 140, ${alpha * 0.4})`;
        }

        ctx.fillText(char, i * 18, drops[i] * 18);

        if (drops[i] * 18 > canvas.height && Math.random() > 0.985) {
          drops[i] = 0;
        }
        drops[i]++;
      }

      animationId = requestAnimationFrame(draw);
    };

    animationId = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      id="matrix-canvas"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        zIndex: 0,
        opacity: 0.015,
        pointerEvents: 'none',
      }}
    />
  );
};

export default MatrixRain;
