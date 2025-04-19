import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';

const ThreeBackground: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    if (!containerRef.current) return;
    
    // Scene setup
    const scene = new THREE.Scene();
    
    // Camera setup with enhanced perspective
    const camera = new THREE.PerspectiveCamera(
      85, // Wider field of view for more 3D feel
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.z = 5;
    
    // Renderer setup with improved settings
    const renderer = new THREE.WebGLRenderer({ 
      antialias: true, 
      alpha: true,
      powerPreference: 'high-performance' 
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2)); // Limit for performance
    containerRef.current.appendChild(renderer.domElement);
    
    // Create particles with depth
    const particlesGeometry = new THREE.BufferGeometry();
    const particlesCount = window.innerWidth < 768 ? 4000 : 8000; // Reduced particles for mobile
    
    const posArray = new Float32Array(particlesCount * 3);
    const scaleArray = new Float32Array(particlesCount);
    const opacityArray = new Float32Array(particlesCount);
    
    // Position particles with more depth variation
    for (let i = 0; i < particlesCount * 3; i += 3) {
      // Position with greater Z-depth
      posArray[i] = (Math.random() - 0.5) * (window.innerWidth < 768 ? 10 : 15); // x
      posArray[i + 1] = (Math.random() - 0.5) * (window.innerWidth < 768 ? 10 : 15); // y
      posArray[i + 2] = (Math.random() - 0.5) * (window.innerWidth < 768 ? 15 : 20); // z with greater depth
      
      // Varying scale for particles (for 3D feel)
      scaleArray[i / 3] = Math.random() * (window.innerWidth < 768 ? 1.5 : 2) + 0.1;
      
      // Varying opacity based on z-position
      opacityArray[i / 3] = Math.random() * 0.8 + 0.2;
    }
    
    particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));
    particlesGeometry.setAttribute('aScale', new THREE.BufferAttribute(scaleArray, 1));
    
    // Create material for particles with depth effect
    const particlesMaterial = new THREE.PointsMaterial({
      size: window.innerWidth < 768 ? 0.05 : 0.03, // Larger particles on mobile
      color: 0x5865F2,
      transparent: true,
      opacity: 0.8,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
      vertexColors: false,
      sizeAttenuation: true
    });
    
    // Create the particle system
    const particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial);
    scene.add(particlesMesh);
    
    // Add a secondary particle system with different color
    const particlesGeometry2 = new THREE.BufferGeometry();
    const posArray2 = new Float32Array((particlesCount / 2) * 3);
    
    for (let i = 0; i < (particlesCount / 2) * 3; i += 3) {
      posArray2[i] = (Math.random() - 0.5) * (window.innerWidth < 768 ? 10 : 15);
      posArray2[i + 1] = (Math.random() - 0.5) * (window.innerWidth < 768 ? 10 : 15);
      posArray2[i + 2] = (Math.random() - 0.5) * (window.innerWidth < 768 ? 15 : 20);
    }
    
    particlesGeometry2.setAttribute('position', new THREE.BufferAttribute(posArray2, 3));
    
    const particlesMaterial2 = new THREE.PointsMaterial({
      size: window.innerWidth < 768 ? 0.04 : 0.02, // Larger particles on mobile
      color: 0x9546C4,
      transparent: true,
      opacity: 0.7,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
      sizeAttenuation: true
    });
    
    const particlesMesh2 = new THREE.Points(particlesGeometry2, particlesMaterial2);
    scene.add(particlesMesh2);
    
    // Mouse interaction for parallax effect
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;
    
    const windowHalfX = window.innerWidth / 2;
    const windowHalfY = window.innerHeight / 2;
    
    const handleMouseMove = (event: MouseEvent) => {
      mouseX = (event.clientX - windowHalfX) / 100;
      mouseY = (event.clientY - windowHalfY) / 100;
    };
    
    document.addEventListener('mousemove', handleMouseMove);
    
    // Handle window resize
    const handleResize = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };
    window.addEventListener('resize', handleResize);
    
    // Animation with interactive camera movement
    const animate = () => {
      requestAnimationFrame(animate);
      
      // Smooth camera movement following mouse for parallax
      targetX = mouseX * (window.innerWidth < 768 ? 0.1 : 0.2); // Reduced movement on mobile
      targetY = mouseY * (window.innerWidth < 768 ? 0.1 : 0.2);
      
      particlesMesh.rotation.x += (window.innerWidth < 768 ? 0.0003 : 0.0005);
      particlesMesh.rotation.y += (window.innerWidth < 768 ? 0.0005 : 0.0008);
      
      particlesMesh2.rotation.x -= (window.innerWidth < 768 ? 0.0002 : 0.0003);
      particlesMesh2.rotation.y -= (window.innerWidth < 768 ? 0.0003 : 0.0005);
      
      // Move camera slightly based on mouse position for parallax effect
      camera.position.x += (targetX - camera.position.x) * 0.05;
      camera.position.y += (-targetY - camera.position.y) * 0.05;
      camera.lookAt(scene.position);
      
      renderer.render(scene, camera);
    };
    animate();
    
    // Cleanup
    return () => {
      if (containerRef.current) {
        containerRef.current.removeChild(renderer.domElement);
      }
      window.removeEventListener('resize', handleResize);
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);
  
  return (
    <div 
      ref={containerRef} 
      className="fixed top-0 left-0 w-full h-full z-[-1]"
    />
  );
};

export default ThreeBackground;
