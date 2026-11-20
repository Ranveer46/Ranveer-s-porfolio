import React, { useEffect, useRef } from "react";
import * as THREE from "three";

/**
 * FloatingCrystal3D — Elegant About page 3D element
 * Clean indigo/violet/sky palette — not cluttered
 */
function FloatingCrystal3D() {
  const mountRef = useRef(null);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    const W = container.clientWidth  || 400;
    const H = container.clientHeight || 420;

    const scene  = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, W / H, 0.1, 100);
    camera.position.z = 6;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(W, H);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    // ── Main Octahedron crystal ───────────────────────────────────────────
    const crystalGeo = new THREE.OctahedronGeometry(1.5, 0);

    // Per-face vertex colors — indigo to sky gradient
    const faceColors = [
      0x6366f1, 0x818cf8,  // indigo faces
      0x4f46e5, 0x38bdf8,  // deep indigo + sky
      0xa78bfa, 0x818cf8,  // violet + indigo
      0x38bdf8, 0x0ea5e9,  // sky faces
    ];
    const colorsArr = new Float32Array(crystalGeo.attributes.position.count * 3);
    for (let i = 0; i < crystalGeo.attributes.position.count; i++) {
      const faceIndex = Math.floor(i / 3) % faceColors.length;
      const c = new THREE.Color(faceColors[faceIndex]);
      colorsArr[i * 3]     = c.r;
      colorsArr[i * 3 + 1] = c.g;
      colorsArr[i * 3 + 2] = c.b;
    }
    crystalGeo.setAttribute("color", new THREE.Float32BufferAttribute(colorsArr, 3));

    const crystalMat = new THREE.MeshPhongMaterial({
      vertexColors: true,
      transparent: true,
      opacity: 0.88,
      shininess: 180,
      specular: new THREE.Color(0xffffff),
      side: THREE.DoubleSide,
      flatShading: true,
    });
    scene.add(new THREE.Mesh(crystalGeo, crystalMat));

    // Subtle wireframe overlay
    scene.add(new THREE.Mesh(crystalGeo, new THREE.MeshBasicMaterial({
      color: 0xc7d2fe,
      wireframe: true,
      transparent: true,
      opacity: 0.07,
    })));

    // ── Glow shell ────────────────────────────────────────────────────────
    scene.add(new THREE.Mesh(
      new THREE.OctahedronGeometry(1.75, 0),
      new THREE.MeshBasicMaterial({ color: 0x818cf8, transparent: true, opacity: 0.04, side: THREE.BackSide })
    ));

    // ── 2 clean orbiting rings ────────────────────────────────────────────
    const ringA = new THREE.Mesh(
      new THREE.TorusGeometry(2.1, 0.02, 8, 100),
      new THREE.MeshBasicMaterial({ color: 0x818cf8, transparent: true, opacity: 0.65 })
    );
    ringA.rotation.x = Math.PI / 2.5;
    scene.add(ringA);

    const ringB = new THREE.Mesh(
      new THREE.TorusGeometry(2.5, 0.014, 8, 100),
      new THREE.MeshBasicMaterial({ color: 0x38bdf8, transparent: true, opacity: 0.45 })
    );
    ringB.rotation.x = -Math.PI / 3.5;
    ringB.rotation.z = Math.PI / 5;
    scene.add(ringB);

    // ── Sparse clean particles ────────────────────────────────────────────
    const COUNT = 100;
    const pGeo  = new THREE.BufferGeometry();
    const pPos  = new Float32Array(COUNT * 3);
    const pCol  = new Float32Array(COUNT * 3);
    const palette = [
      new THREE.Color(0x818cf8),
      new THREE.Color(0x38bdf8),
      new THREE.Color(0xa78bfa),
      new THREE.Color(0xe0f2fe),
    ];
    for (let i = 0; i < COUNT; i++) {
      const r = 2.8 + Math.random() * 1.5;
      const th = Math.random() * Math.PI * 2;
      const ph = Math.acos(Math.random() * 2 - 1);
      pPos[i*3]   = r * Math.sin(ph) * Math.cos(th);
      pPos[i*3+1] = r * Math.sin(ph) * Math.sin(th);
      pPos[i*3+2] = r * Math.cos(ph);
      const c = palette[i % palette.length];
      pCol[i*3] = c.r; pCol[i*3+1] = c.g; pCol[i*3+2] = c.b;
    }
    pGeo.setAttribute("position", new THREE.Float32BufferAttribute(pPos, 3));
    pGeo.setAttribute("color",    new THREE.Float32BufferAttribute(pCol, 3));
    const halo = new THREE.Points(pGeo, new THREE.PointsMaterial({
      size: 0.055, vertexColors: true, transparent: true, opacity: 0.7, blending: THREE.AdditiveBlending,
    }));
    scene.add(halo);

    // ── Lighting ──────────────────────────────────────────────────────────
    scene.add(new THREE.AmbientLight(0xffffff, 0.8));
    const pl1 = new THREE.PointLight(0x818cf8, 3.5, 15); pl1.position.set(3, 3, 3); scene.add(pl1);
    const pl2 = new THREE.PointLight(0x38bdf8, 2.5, 12); pl2.position.set(-3, -2, 2); scene.add(pl2);

    // ── Mouse tilt ────────────────────────────────────────────────────────
    let tx = 0, ty = 0;
    const onMove = (e) => {
      const rect = container.getBoundingClientRect();
      tx = ((e.clientX - rect.left) / rect.width  - 0.5) * 1.5;
      ty = ((e.clientY - rect.top)  / rect.height - 0.5) * 1.5;
    };
    window.addEventListener("mousemove", onMove);

    const onResize = () => {
      if (!container) return;
      const w = container.clientWidth  || 400;
      const h = container.clientHeight || 420;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };
    window.addEventListener("resize", onResize);

    // ── Animate ───────────────────────────────────────────────────────────
    let raf;
    const clock = new THREE.Clock();
    const crystal = scene.children[0];

    const animate = () => {
      raf = requestAnimationFrame(animate);
      const t = clock.getElapsedTime();

      crystal.rotation.y = t * 0.3 + tx * 0.35;
      crystal.rotation.x = Math.sin(t * 0.25) * 0.15 - ty * 0.18;
      crystal.position.y = Math.sin(t * 0.9) * 0.18;

      ringA.rotation.z = t * 0.5;
      ringB.rotation.z = -t * 0.32;

      halo.rotation.y = t * 0.07;

      pl1.position.x = Math.cos(t * 0.6) * 4;
      pl1.position.z = Math.sin(t * 0.6) * 4;
      pl2.position.x = Math.cos(t * 0.4 + 2) * 3;
      pl2.position.z = Math.sin(t * 0.4 + 2) * 3;

      renderer.render(scene, camera);
    };
    animate();

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("resize", onResize);
      if (container && renderer.domElement.parentNode === container) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, []);

  return (
    <div ref={mountRef} style={{ width: "100%", height: "420px", cursor: "crosshair" }} />
  );
}

export default FloatingCrystal3D;
