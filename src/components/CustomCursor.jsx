import { useEffect, useRef, useState } from 'react';

const CustomCursor = () => {
  const cursorRef = useRef(null);
  const [hasMouse, setHasMouse] = useState(false);
  const [isHovering, setIsHovering] = useState(false);

  // Position references to prevent re-renders from resetting the state
  const mousePos = useRef({ x: -100, y: -100 });
  const cursorPos = useRef({ x: -100, y: -100 });
  const isInitialized = useRef(false);

  useEffect(() => {
    // Detect mouse presence and set initial coordinates immediately
    const handleFirstMouseMove = (e) => {
      setHasMouse(true);
      document.documentElement.classList.add('has-mouse');
      
      // Initialize cursor positions immediately to current mouse position
      mousePos.current = { x: e.clientX, y: e.clientY };
      cursorPos.current = { x: e.clientX, y: e.clientY };
      isInitialized.current = true;
      
      window.removeEventListener('mousemove', handleFirstMouseMove);
    };
    window.addEventListener('mousemove', handleFirstMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleFirstMouseMove);
    };
  }, []);

  useEffect(() => {
    if (!hasMouse) return;

    const onMouseMove = (e) => {
      mousePos.current.x = e.clientX;
      mousePos.current.y = e.clientY;
      
      if (!isInitialized.current) {
        cursorPos.current.x = e.clientX;
        cursorPos.current.y = e.clientY;
        isInitialized.current = true;
      }
      
      checkHover(e.clientX, e.clientY);
    };

    const onScroll = () => {
      checkHover(mousePos.current.x, mousePos.current.y);
    };

    const checkHover = (x, y) => {
      if (x < 0 || y < 0) return;
      const el = document.elementFromPoint(x, y);
      if (el) {
        if (
          el.tagName === 'A' ||
          el.tagName === 'BUTTON' ||
          el.tagName === 'INPUT' ||
          el.tagName === 'TEXTAREA' ||
          el.tagName === 'SELECT' ||
          el.closest('button') ||
          el.closest('a') ||
          el.closest('input') ||
          el.closest('textarea') ||
          el.closest('select') ||
          el.closest('.clickable') ||
          el.closest('.project-card-container') ||
          el.closest('.glass-card') ||
          el.closest('.card') ||
          el.closest('[role="button"]') ||
          el.closest('[role="link"]')
        ) {
          setIsHovering(true);
        } else {
          setIsHovering(false);
        }
      }
    };

    let animId;
    const updatePosition = () => {
      // High-performance direct linear interpolation with faster response (0.35)
      cursorPos.current.x += (mousePos.current.x - cursorPos.current.x) * 0.35;
      cursorPos.current.y += (mousePos.current.y - cursorPos.current.y) * 0.35;

      const cursor = cursorRef.current;
      if (cursor) {
        // GPU accelerated translate3d (exactly at current mouse coordinates)
        cursor.style.transform = `translate3d(${cursorPos.current.x}px, ${cursorPos.current.y}px, 0)`;
      }

      animId = requestAnimationFrame(updatePosition);
    };

    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('scroll', onScroll, { passive: true });
    
    // Fast document event delegation
    const handleMouseOver = (e) => {
      if (
        e.target.tagName === 'A' ||
        e.target.tagName === 'BUTTON' ||
        e.target.tagName === 'INPUT' ||
        e.target.tagName === 'TEXTAREA' ||
        e.target.tagName === 'SELECT' ||
        e.target.closest('button') ||
        e.target.closest('a') ||
        e.target.closest('input') ||
        e.target.closest('textarea') ||
        e.target.closest('select') ||
        e.target.closest('.clickable') ||
        e.target.closest('.project-card-container') ||
        e.target.closest('.glass-card') ||
        e.target.closest('.card') ||
        e.target.closest('[role="button"]') ||
        e.target.closest('[role="link"]')
      ) {
        setIsHovering(true);
      }
    };
    const handleMouseOut = () => setIsHovering(false);
    
    document.addEventListener('mouseover', handleMouseOver);
    document.addEventListener('mouseout', handleMouseOut);

    animId = requestAnimationFrame(updatePosition);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('scroll', onScroll);
      document.removeEventListener('mouseover', handleMouseOver);
      document.removeEventListener('mouseout', handleMouseOut);
      cancelAnimationFrame(animId);
    };
  }, [hasMouse]);

  if (!hasMouse) return null;

  return (
    <div
      ref={cursorRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        pointerEvents: 'none',
        zIndex: 99999,
        willChange: 'transform',
      }}
    >
      {/* Inner skull element centered via translate(-50%, -50%) */}
      <div
        style={{
          width: '18px',
          height: '18px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          transform: `translate(-50%, -50%) scale(${isHovering ? 1.15 : 1}) rotate(${isHovering ? 5 : 0}deg)`,
          transition: 'transform 0.12s ease-out',
          pointerEvents: 'none',
        }}
      >
        <svg
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#ffffff"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          style={{
            filter: isHovering ? 'drop-shadow(0 0 3px rgba(255, 59, 59, 0.7))' : 'none',
            transition: 'filter 0.12s ease-out',
          }}
        >
          <path d="M4 10a8 8 0 1 1 16 0c0 2.5-2 4.5-4.5 4.5H8.5C6 14.5 4 12.5 4 10z" />
          <path d="M16 14v3.5a1.5 1.5 0 0 1-1.5 1.5h-5A1.5 1.5 0 0 1 8 17.5v-3.5" />
          <line x1="10" y1="16.5" x2="10" y2="19" />
          <line x1="14" y1="16.5" x2="14" y2="19" />
          <circle cx="9" cy="9.5" r="1.5" fill="#ff3b3b" stroke="#ff3b3b" />
          <circle cx="15" cy="9.5" r="1.5" fill="#ff3b3b" stroke="#ff3b3b" />
        </svg>
      </div>
    </div>
  );
};

export default CustomCursor;
