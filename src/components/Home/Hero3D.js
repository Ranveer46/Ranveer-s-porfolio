import React, { useEffect, useRef } from "react";
import * as THREE from "three";

/**
 * Hero3D — Interactive 3D Holographic AI Neural Brain & Synaptic Core (Enlarged)
 * Scaled up for high-impact visibility while maintaining clean, centered framing.
 */
function Hero3D() {
  const mountRef = useRef(null);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    const W = container.clientWidth || 520;
    const H = container.clientHeight || 540;

    // ── 1. Scene, Camera, Renderer ──────────────────────────────────────
    const scene = new THREE.Scene();
    // Positioned closer (4.6 vs 5.8) for an impactful, larger view
    const camera = new THREE.PerspectiveCamera(45, W / H, 0.1, 100);
    camera.position.set(0, 0, 4.5);

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(W, H);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.35;
    container.appendChild(renderer.domElement);

    // Root Group
    const brainGroup = new THREE.Group();
    // Enlarged scale: 1.25x for larger, bold presentation
    brainGroup.scale.set(1.22, 1.22, 1.22);
    scene.add(brainGroup);

    // ── 2. Parametric AI Brain Hemisphere Nodes ─────────────────────────
    const nodeCountPerSide = 58;
    const leftNodes = [];
    const rightNodes = [];
    const allNodePositions = [];
    const allNodeColors = [];

    const cyanColor = new THREE.Color(0x38bdf8);
    const indigoColor = new THREE.Color(0x818cf8);
    const whiteColor = new THREE.Color(0xffffff);

    // Generate dual-hemisphere brain point cloud
    for (let side = -1; side <= 1; side += 2) {
      for (let i = 0; i < nodeCountPerSide; i++) {
        const u = Math.random() * Math.PI;
        const v = Math.random() * Math.PI * 2;

        const rx = 1.08 * Math.sin(u) * Math.cos(v);
        const ry = 0.88 * Math.cos(u) + (Math.sin(u) * 0.15);
        const rz = 1.38 * Math.sin(u) * Math.sin(v);

        const separation = 0.28;
        const x = rx * 0.85 + side * (separation + Math.abs(rx) * 0.2);
        const y = ry * 0.95;
        const z = rz * 0.95;

        const pos = new THREE.Vector3(x, y, z);
        allNodePositions.push(pos);

        const col = side === -1 ? cyanColor : indigoColor;
        allNodeColors.push(col.r, col.g, col.b);

        if (side === -1) {
          leftNodes.push(pos);
        } else {
          rightNodes.push(pos);
        }
      }
    }

    // ── 3. Synaptic Axon Connections ───────────────────────────────────
    const linePositions = [];
    const lineColors = [];
    const allNodes = [...leftNodes, ...rightNodes];
    const threshold = 0.74;

    for (let i = 0; i < allNodes.length; i++) {
      for (let j = i + 1; j < allNodes.length; j++) {
        const dist = allNodes[i].distanceTo(allNodes[j]);
        if (dist < threshold) {
          linePositions.push(
            allNodes[i].x, allNodes[i].y, allNodes[i].z,
            allNodes[j].x, allNodes[j].y, allNodes[j].z
          );
          const c = allNodes[i].x < 0 ? cyanColor : indigoColor;
          lineColors.push(c.r, c.g, c.b, c.r, c.g, c.b);
        }
      }
    }

    // Corpus callosum bridge connections
    for (let i = 0; i < 16; i++) {
      const l = leftNodes[Math.floor(Math.random() * leftNodes.length)];
      const r = rightNodes[Math.floor(Math.random() * rightNodes.length)];
      if (Math.abs(l.z - r.z) < 0.52 && Math.abs(l.y - r.y) < 0.42) {
        linePositions.push(l.x, l.y, l.z, r.x, r.y, r.z);
        lineColors.push(whiteColor.r, whiteColor.g, whiteColor.b, cyanColor.r, cyanColor.g, cyanColor.b);
      }
    }

    const linesGeo = new THREE.BufferGeometry();
    linesGeo.setAttribute("position", new THREE.Float32BufferAttribute(linePositions, 3));
    linesGeo.setAttribute("color", new THREE.Float32BufferAttribute(lineColors, 3));

    const linesMat = new THREE.LineBasicMaterial({
      vertexColors: true,
      transparent: true,
      opacity: 0.42,
      blending: THREE.AdditiveBlending,
    });
    const axons = new THREE.LineSegments(linesGeo, linesMat);
    brainGroup.add(axons);

    // ── 4. Glowing Synaptic Nodes (Points) — slightly larger & bolder ──
    const nodesGeo = new THREE.BufferGeometry();
    const nodePosArr = new Float32Array(allNodePositions.length * 3);
    for (let i = 0; i < allNodePositions.length; i++) {
      nodePosArr[i * 3] = allNodePositions[i].x;
      nodePosArr[i * 3 + 1] = allNodePositions[i].y;
      nodePosArr[i * 3 + 2] = allNodePositions[i].z;
    }
    nodesGeo.setAttribute("position", new THREE.BufferAttribute(nodePosArr, 3));
    nodesGeo.setAttribute("color", new THREE.Float32BufferAttribute(allNodeColors, 3));

    const nodesMat = new THREE.PointsMaterial({
      size: 0.095, // Increased from 0.08 for richer glowing points
      vertexColors: true,
      transparent: true,
      opacity: 0.95,
      blending: THREE.AdditiveBlending,
    });
    const neuronPoints = new THREE.Points(nodesGeo, nodesMat);
    brainGroup.add(neuronPoints);

    // ── 5. Neural Impulses (Action Potentials firing) ──────────────────
    const impulseCount = 9;
    const impulses = [];
    const impulseGeo = new THREE.SphereGeometry(0.052, 12, 12);
    const impulseMat = new THREE.MeshBasicMaterial({
      color: 0xffffff,
      transparent: true,
      opacity: 0.95,
      blending: THREE.AdditiveBlending,
    });

    for (let i = 0; i < impulseCount; i++) {
      const mesh = new THREE.Mesh(impulseGeo, impulseMat);
      brainGroup.add(mesh);
      impulses.push({
        mesh,
        startNode: Math.floor(Math.random() * allNodes.length),
        endNode: Math.floor(Math.random() * allNodes.length),
        progress: Math.random(),
        speed: 0.8 + Math.random() * 0.7,
      });
    }

    // ── 6. Central Luminous AI Core ─────────────────────────────────────
    const nucleusGeo = new THREE.IcosahedronGeometry(0.55, 2);
    const nucleusMat = new THREE.MeshStandardMaterial({
      color: 0x091224,
      emissive: 0x38bdf8,
      emissiveIntensity: 0.65,
      wireframe: true,
      roughness: 0.2,
      metalness: 0.85,
    });
    const nucleus = new THREE.Mesh(nucleusGeo, nucleusMat);
    brainGroup.add(nucleus);

    // Soft inner glow orb
    const glowGeo = new THREE.SphereGeometry(0.38, 24, 24);
    const glowMat = new THREE.MeshBasicMaterial({
      color: 0x818cf8,
      transparent: true,
      opacity: 0.48,
    });
    const innerGlow = new THREE.Mesh(glowGeo, glowMat);
    brainGroup.add(innerGlow);

    // ── 7. Orbiting Tech Data Horizon Rings ─────────────────────────────
    const ringGeo = new THREE.TorusGeometry(1.9, 0.013, 16, 120);
    const ringMat = new THREE.MeshBasicMaterial({
      color: 0x38bdf8,
      transparent: true,
      opacity: 0.58,
    });
    const dataRing = new THREE.Mesh(ringGeo, ringMat);
    dataRing.rotation.x = Math.PI / 2.3;
    dataRing.rotation.y = Math.PI / 6;
    brainGroup.add(dataRing);

    const ringGeo2 = new THREE.TorusGeometry(2.2, 0.009, 16, 120);
    const ringMat2 = new THREE.MeshBasicMaterial({
      color: 0x818cf8,
      transparent: true,
      opacity: 0.38,
    });
    const dataRing2 = new THREE.Mesh(ringGeo2, ringMat2);
    dataRing2.rotation.x = -Math.PI / 3;
    dataRing2.rotation.z = Math.PI / 4;
    brainGroup.add(dataRing2);

    // ── 8. Floating Micro Developer Badges ─────────────────────────────
    const createBadge = (text, colorHex) => {
      const canvas = document.createElement("canvas");
      canvas.width = 256;
      canvas.height = 128;
      const ctx = canvas.getContext("2d");
      ctx.fillStyle = "rgba(10, 15, 29, 0.92)";
      ctx.strokeStyle = colorHex;
      ctx.lineWidth = 4;
      ctx.beginPath();
      ctx.roundRect(8, 8, 240, 112, 20);
      ctx.fill();
      ctx.stroke();

      ctx.fillStyle = colorHex;
      ctx.font = "bold 52px Consolas, monospace";
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      ctx.fillText(text, 128, 64);

      const texture = new THREE.CanvasTexture(canvas);
      const spriteMat = new THREE.SpriteMaterial({ map: texture, transparent: true, opacity: 0.88 });
      const sprite = new THREE.Sprite(spriteMat);
      sprite.scale.set(0.72, 0.36, 1);
      return sprite;
    };

    const aiBadge = createBadge("<AI />", "#38bdf8");
    aiBadge.position.set(-1.85, 1.0, 0.3);
    brainGroup.add(aiBadge);

    const llmBadge = createBadge("{ LLM }", "#818cf8");
    llmBadge.position.set(1.85, -0.9, 0.4);
    brainGroup.add(llmBadge);

    // ── 9. Lighting ────────────────────────────────────────────────────
    scene.add(new THREE.AmbientLight(0xffffff, 0.65));

    const cyanLight = new THREE.PointLight(0x38bdf8, 3.8, 14);
    cyanLight.position.set(-3, 2, 3);
    scene.add(cyanLight);

    const indigoLight = new THREE.PointLight(0x818cf8, 3.2, 14);
    indigoLight.position.set(3, -2, 2);
    scene.add(indigoLight);

    // ── 10. Mouse Interaction (Smooth LERP) ────────────────────────────
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;

    const onMouseMove = (e) => {
      const rect = container.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      targetX = x * 1.1;
      targetY = y * 1.1;
    };
    window.addEventListener("mousemove", onMouseMove);

    const onResize = () => {
      if (!container) return;
      const w = container.clientWidth || 520;
      const h = container.clientHeight || 540;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };
    window.addEventListener("resize", onResize);

    // ── 11. Animation Loop ─────────────────────────────────────────────
    let raf;
    const clock = new THREE.Clock();

    const animate = () => {
      raf = requestAnimationFrame(animate);
      const t = clock.getElapsedTime();

      // Mouse Parallax
      mouseX += (targetX - mouseX) * 0.05;
      mouseY += (targetY - mouseY) * 0.05;

      brainGroup.rotation.y = t * 0.18 + mouseX * 0.7;
      brainGroup.rotation.x = Math.sin(t * 0.15) * 0.1 - mouseY * 0.5;

      // Levitation
      brainGroup.position.y = Math.sin(t * 1.2) * 0.06;

      // Core nucleus pulse
      const pulse = 1.0 + Math.sin(t * 2.2) * 0.06;
      nucleus.scale.setScalar(pulse);
      nucleus.rotation.y = -t * 0.3;
      nucleus.rotation.z = t * 0.2;

      innerGlow.scale.setScalar(1.0 + Math.sin(t * 2.2) * 0.1);

      // Rings rotation
      dataRing.rotation.z = t * 0.25;
      dataRing2.rotation.z = -t * 0.2;

      // Badges subtle floating bob
      aiBadge.position.y = 1.0 + Math.sin(t * 1.6) * 0.06;
      llmBadge.position.y = -0.9 + Math.sin(t * 1.6 + 1.2) * 0.06;

      // Animate firing neural impulses
      impulses.forEach((imp) => {
        imp.progress += imp.speed * 0.016;
        if (imp.progress >= 1.0) {
          imp.progress = 0;
          imp.startNode = Math.floor(Math.random() * allNodes.length);
          let candidate = Math.floor(Math.random() * allNodes.length);
          let attempts = 0;
          while (allNodes[imp.startNode].distanceTo(allNodes[candidate]) > threshold && attempts < 8) {
            candidate = Math.floor(Math.random() * allNodes.length);
            attempts++;
          }
          imp.endNode = candidate;
        }

        const start = allNodes[imp.startNode];
        const end = allNodes[imp.endNode];
        imp.mesh.position.lerpVectors(start, end, imp.progress);
        imp.mesh.scale.setScalar(0.7 + Math.sin(imp.progress * Math.PI) * 0.6);
      });

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("resize", onResize);
      if (container && renderer.domElement.parentNode === container) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, []);

  return (
    <div
      ref={mountRef}
      style={{
        width: "100%",
        height: "540px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    />
  );
}

export default Hero3D;
