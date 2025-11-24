import { useEffect, useRef } from 'react';

interface LiquidEtherProps {
  colors?: string[];
  mouseForce?: number;
  cursorSize?: number;
  isViscous?: boolean;
  autoDemo?: boolean;
  autoSpeed?: number;
  autoIntensity?: number;
  autoResumeDelay?: number;
}

const LiquidEther = ({
  colors = ['#5227FF', '#FF9FFC', '#B19EEF'],
  mouseForce = 20,
  cursorSize = 100,
  isViscous = false,
  autoDemo = true,
  autoSpeed = 0.5,
  autoIntensity = 2.2,
  autoResumeDelay = 3000,
}: LiquidEtherProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = window.innerWidth;
    let height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;

    const particles: any[] = [];
    const particleCount = 50;
    let mouse = { x: width / 2, y: height / 2 };
    let autoX = width / 2;
    let autoY = height / 2;
    let autoAngle = 0;
    let lastMouseMove = Date.now();

    class Particle {
      x: number;
      y: number;
      vx: number;
      vy: number;
      color: string;
      radius: number;

      constructor() {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.vx = (Math.random() - 0.5) * 2;
        this.vy = (Math.random() - 0.5) * 2;
        this.color = colors[Math.floor(Math.random() * colors.length)];
        this.radius = Math.random() * 100 + 50;
      }

      update() {
        const currentMouse = Date.now() - lastMouseMove > autoResumeDelay ? { x: autoX, y: autoY } : mouse;
        
        const dx = currentMouse.x - this.x;
        const dy = currentMouse.y - this.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        
        if (dist < cursorSize) {
          const force = (cursorSize - dist) / cursorSize;
          this.vx += (dx / dist) * force * mouseForce;
          this.vy += (dy / dist) * force * mouseForce;
        }

        if (isViscous) {
          this.vx *= 0.95;
          this.vy *= 0.95;
        } else {
          this.vx *= 0.99;
          this.vy *= 0.99;
        }

        this.x += this.vx;
        this.y += this.vy;

        if (this.x < 0) this.x = width;
        if (this.x > width) this.x = 0;
        if (this.y < 0) this.y = height;
        if (this.y > height) this.y = 0;
      }

      draw() {
        if (!ctx) return;
        const gradient = ctx.createRadialGradient(this.x, this.y, 0, this.x, this.y, this.radius);
        gradient.addColorStop(0, this.color + '40');
        gradient.addColorStop(1, this.color + '00');
        
        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle());
    }

    const animate = () => {
      ctx.fillStyle = 'rgba(15, 15, 20, 0.1)';
      ctx.fillRect(0, 0, width, height);

      if (autoDemo && Date.now() - lastMouseMove > autoResumeDelay) {
        autoAngle += autoSpeed * 0.02;
        autoX = width / 2 + Math.cos(autoAngle) * (width * 0.3) * autoIntensity;
        autoY = height / 2 + Math.sin(autoAngle * 1.3) * (height * 0.3) * autoIntensity;
      }

      particles.forEach(particle => {
        particle.update();
        particle.draw();
      });

      requestAnimationFrame(animate);
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouse = { x: e.clientX, y: e.clientY };
      lastMouseMove = Date.now();
    };

    const handleResize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('resize', handleResize);
    animate();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
    };
  }, [colors, mouseForce, cursorSize, isViscous, autoDemo, autoSpeed, autoIntensity, autoResumeDelay]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full -z-10 opacity-40"
      style={{ background: 'hsl(240 10% 3.9%)' }}
    />
  );
};

export default LiquidEther;
