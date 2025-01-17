'use client'
import React, { useEffect, useRef, useState } from 'react';

interface PetalProps {
  petalCount?: number;
  petalColor?: string;
  windSpeed?: number;
  petalSize?: number;
  children?: React.ReactNode;
}

interface Dimensions {
  width: number;
  height: number;
}

class Petal {
  x: number;
  y: number;
  size: number;
  rotation: number;
  rotationSpeed: number;
  speedX: number;
  speedY: number;
  wobble: number;
  wobbleSpeed: number;

  constructor(x: number, y: number, size: number, windSpeed: number) {
    this.x = x;
    this.y = y;
    this.size = size * (0.8 + Math.random() * 0.4);
    this.rotation = Math.random() * Math.PI * 2;
    this.rotationSpeed = (Math.random() - 0.5) * 0.03;
    this.speedX = (Math.random() - 0.5) * windSpeed;
    this.speedY = 0.5 + Math.random();
    this.wobble = Math.random() * Math.PI * 2;
    this.wobbleSpeed = 0.03 + Math.random() * 0.02;
  }

  update(width: number, height: number): void {
    this.x += this.speedX + Math.sin(this.wobble) * 0.3;
    this.y += this.speedY;
    this.rotation += this.rotationSpeed;
    this.wobble += this.wobbleSpeed;

    if (this.y > height + this.size) {
      this.y = -this.size;
      this.x = Math.random() * width;
    }
    if (this.x < -this.size) this.x = width + this.size;
    if (this.x > width + this.size) this.x = -this.size;
  }

  draw(ctx: CanvasRenderingContext2D, petalColor: string): void {
    ctx.save();
    ctx.translate(this.x, this.y);
    ctx.rotate(this.rotation);
    
    ctx.beginPath();
    ctx.moveTo(0, 0);
    ctx.bezierCurveTo(
      this.size / 2, -this.size / 4,
      this.size, 0,
      this.size / 2, this.size / 2
    );
    ctx.bezierCurveTo(
      0, this.size / 3,
      -this.size / 2, this.size / 2,
      0, 0
    );

    const gradient = ctx.createLinearGradient(0, -this.size/2, 0, this.size/2);
    gradient.addColorStop(0, petalColor);
    gradient.addColorStop(0.5, `${petalColor}dd`);
    gradient.addColorStop(1, `${petalColor}aa`);
    
    ctx.fillStyle = gradient;
    ctx.fill();
    
    ctx.shadowColor = 'rgba(0,0,0,0.1)';
    ctx.shadowBlur = 2;
    ctx.shadowOffsetX = 1;
    ctx.shadowOffsetY = 1;
    
    ctx.restore();
  }
}

const PetalBackground: React.FC<PetalProps> = ({
  petalCount = 50,
  petalColor = '#ffb7c5',
  windSpeed = 2,
  petalSize = 20,
  children
}) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [dimensions, setDimensions] = useState<Dimensions>({ width: 0, height: 0 });
  const petals = useRef<Petal[]>([]);
  const animationFrameId = useRef<number>(0);
  
  useEffect(() => {
    const handleResize = () => {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight
      });
    };
    
    handleResize();
    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('resize', handleResize);
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current);
      }
    };
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    canvas.width = dimensions.width;
    canvas.height = dimensions.height;

    petals.current = Array.from({ length: petalCount }, () => {
      const x = Math.random() * dimensions.width;
      const y = Math.random() * dimensions.height;
      return new Petal(x, y, petalSize, windSpeed);
    });

    const animate = () => {
      const ctx = canvas.getContext('2d');
      if (!ctx) return;
      
      ctx.clearRect(0, 0, dimensions.width, dimensions.height);
      
      petals.current.forEach(petal => {
        petal.update(dimensions.width, dimensions.height);
        petal.draw(ctx, petalColor);
      });
      
      animationFrameId.current = requestAnimationFrame(animate);
    };
    
    animate();
    
    return () => {
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current);
      }
    };
  }, [dimensions, petalCount, petalSize, petalColor, windSpeed]);

  return (
    <div className="min-h-screen">
      {/* Canvas Background */}
      <canvas
        ref={canvasRef}
        className="fixed top-0 left-0 w-full h-full -z-10"
        style={{ 
          background: 'linear-gradient(to bottom, #e6f3ff, #ffffff)'
        }}
      />
      
      {/* Content Container */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};

export default PetalBackground;