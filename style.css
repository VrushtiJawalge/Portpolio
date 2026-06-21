/* ===== RESET & BASE ===== */
*,
*::before,
*::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

:root {
  --bg: #0a0a0f;
  --bg2: #0f0f1a;
  --bg3: #14141f;
  --surface: #1a1a2e;
  --surface2: #1f1f35;
  --border: rgba(99, 102, 241, 0.15);
  --primary: #6366f1;
  --primary-light: #818cf8;
  --secondary: #a855f7;
  --accent: #06b6d4;
  --green: #10b981;
  --text: #e2e8f0;
  --text-muted: #94a3b8;
  --text-dim: #64748b;
  --gradient: linear-gradient(135deg, #6366f1, #a855f7);
  --shadow: 0 4px 32px rgba(99, 102, 241, 0.15);
  --radius: 16px;
  --radius-sm: 8px;
}

/* ===== LIGHT THEME ===== */
body.light {
  --bg: #f0f4ff;
  --bg2: #e8eeff;
  --bg3: #dde4ff;
  --surface: #ffffff;
  --surface2: #f5f7ff;
  --border: rgba(99, 102, 241, 0.2);
  --text: #1e1b4b;
  --text-muted: #4c5080;
  --text-dim: #7c82b0;
  --shadow: 0 4px 32px rgba(99, 102, 241, 0.12);
}

body.light #navbar.scrolled {
  background: rgba(240, 244, 255, 0.92);
}

body.light .nav-links {
  background: transparent;
}

body.light .grid-overlay {
  background-image:
    linear-gradient(rgba(99, 102, 241, 0.06) 1px, transparent 1px),
    linear-gradient(90deg, rgba(99, 102, 241, 0.06) 1px, transparent 1px);
}

body.light .blob {
  opacity: 0.18;
}

body.light .skill-pill {
  background: var(--bg2);
}
body.light .project-tech span {
  background: var(--bg2);
}

body.light .form-group input,
body.light .form-group textarea {
  background: var(--bg2);
}

@media (max-width: 768px) {
  body.light .nav-links {
    background: rgba(240, 244, 255, 0.97);
  }
}

html {
  scroll-behavior: smooth;
}

body {
  font-family: "Inter", sans-serif;
  background: var(--bg);
  color: var(--text);
  overflow-x: hidden;
  line-height: 1.6;
}

.container {
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 24px;
}

.gradient-text {
  background: var(--gradient);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

::-webkit-scrollbar {
  width: 6px;
}
::-webkit-scrollbar-track {
  background: var(--bg);
}
::-webkit-scrollbar-thumb {
  background: var(--primary);
  border-radius: 3px;
}

/* ===== NAVBAR ===== */
#navbar {
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 1000;
  padding: 16px 0;
  transition: all 0.3s ease;
}
#navbar.scrolled {
  background: rgba(10, 10, 15, 0.92);
  backdrop-filter: blur(20px);
  border-bottom: 1px solid var(--border);
  padding: 12px 0;
}
.nav-container {
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 24px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.nav-logo {
  font-size: 1.5rem;
  font-weight: 800;
  background: var(--gradient);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}
.dot {
  color: var(--accent);
  -webkit-text-fill-color: var(--accent);
}
.nav-links {
  display: flex;
  list-style: none;
  gap: 32px;
}
.nav-links a {
  color: var(--text-muted);
  text-decoration: none;
  font-size: 0.9rem;
  font-weight: 500;
  transition: color 0.2s;
  position: relative;
}
.nav-links a::after {
  content: "";
  position: absolute;
  bottom: -4px;
  left: 0;
  width: 0;
  height: 2px;
  background: var(--gradient);
  transition: width 0.3s;
  border-radius: 2px;
}
.nav-links a:hover,
.nav-links a.active {
  color: var(--text);
}
.nav-links a:hover::after,
.nav-links a.active::after {
  width: 100%;
}

.hamburger {
  display: none;
  flex-direction: column;
  gap: 5px;
  background: none;
  border: none;
  cursor: pointer;
  padding: 4px;
}
.hamburger span {
  display: block;
  width: 24px;
  height: 2px;
  background: var(--text);
  border-radius: 2px;
  transition: all 0.3s;
}

/* ===== THEME TOGGLE ===== */
.theme-toggle {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: var(--surface);
  border: 1px solid var(--border);
  color: var(--text-muted);
  font-size: 1rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  flex-shrink: 0;
}
.theme-toggle:hover {
  background: var(--primary);
  color: #fff;
  border-color: var(--primary);
  transform: rotate(20deg) scale(1.1);
}

/* ===== BUTTONS ===== */
.btn {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 12px 28px;
  border-radius: 50px;
  font-weight: 600;
  font-size: 0.95rem;
  text-decoration: none;
  transition: all 0.3s ease;
  cursor: pointer;
  border: none;
  font-family: "Inter", sans-serif;
}
.btn-primary {
  background: var(--gradient);
  color: #fff;
  box-shadow: 0 4px 20px rgba(99, 102, 241, 0.35);
}
.btn-primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 30px rgba(99, 102, 241, 0.5);
}
.btn-outline {
  background: transparent;
  color: var(--primary-light);
  border: 2px solid var(--primary);
}
.btn-outline:hover {
  background: var(--primary);
  color: #fff;
  transform: translateY(-2px);
}
.full-width {
  width: 100%;
  justify-content: center;
}

/* ===== SECTION ===== */
.section {
  padding: 100px 0;
}
.section-header {
  text-align: center;
  margin-bottom: 64px;
}
.section-tag {
  font-family: "Fira Code", monospace;
  color: var(--primary-light);
  font-size: 0.85rem;
  font-weight: 500;
  letter-spacing: 2px;
  display: block;
  margin-bottom: 12px;
}
.section-title {
  font-size: clamp(1.8rem, 4vw, 2.5rem);
  font-weight: 800;
  color: var(--text);
}

/* ===== HERO ===== */
.hero {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
  padding: 0 24px;
}
.hero-bg {
  position: absolute;
  inset: 0;
  pointer-events: none;
}
.blob {
  position: absolute;
  border-radius: 50%;
  filter: blur(80px);
  opacity: 0.12;
  animation: float 8s ease-in-out infinite;
}
.blob1 {
  width: 500px;
  height: 500px;
  background: var(--primary);
  top: -100px;
  right: -100px;
}
.blob2 {
  width: 400px;
  height: 400px;
  background: var(--secondary);
  bottom: -50px;
  left: -50px;
  animation-delay: 3s;
}

@keyframes float {
  0%,
  100% {
    transform: translateY(0) scale(1);
  }
  50% {
    transform: translateY(-30px) scale(1.05);
  }
}

.grid-overlay {
  position: absolute;
  inset: 0;
  background-image:
    linear-gradient(rgba(99, 102, 241, 0.04) 1px, transparent 1px),
    linear-gradient(90deg, rgba(99, 102, 241, 0.04) 1px, transparent 1px);
  background-size: 60px 60px;
}

.hero-content {
  position: relative;
  z-index: 2;
  text-align: center;
  max-width: 700px;
}
.hero-greeting {
  font-family: "Fira Code", monospace;
  color: var(--primary-light);
  font-size: 1rem;
  margin-bottom: 8px;
}
.hero-name {
  font-size: clamp(2.8rem, 8vw, 5.5rem);
  font-weight: 800;
  line-height: 1.05;
  margin-bottom: 20px;
  color: var(--text);
}
.hero-role {
  display: inline-flex;
  align-items: center;
  gap: 4px;
  font-family: "Fira Code", monospace;
  font-size: clamp(1rem, 2.5vw, 1.3rem);
  color: var(--accent);
  background: rgba(6, 182, 212, 0.08);
  border: 1px solid rgba(6, 182, 212, 0.2);
  padding: 8px 20px;
  border-radius: 50px;
  margin-bottom: 24px;
}
.role-prefix,
.role-suffix {
  color: var(--text-dim);
}
.cursor {
  animation: blink 1s infinite;
  color: var(--primary-light);
}
@keyframes blink {
  0%,
  100% {
    opacity: 1;
  }
  50% {
    opacity: 0;
  }
}

.hero-desc {
  color: var(--text-muted);
  font-size: 1.05rem;
  max-width: 560px;
  margin: 0 auto 32px;
  line-height: 1.8;
}
.hero-actions {
  display: flex;
  gap: 16px;
  justify-content: center;
  flex-wrap: wrap;
  margin-bottom: 36px;
}
.hero-socials {
  display: flex;
  gap: 20px;
  justify-content: center;
}
.hero-socials a {
  color: var(--text-muted);
  font-size: 1.4rem;
  transition: all 0.3s;
  text-decoration: none;
}
.hero-socials a:hover {
  color: var(--primary-light);
  transform: translateY(-3px);
}

.hero-scroll {
  position: absolute;
  bottom: 32px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  color: var(--text-dim);
  font-size: 0.75rem;
  letter-spacing: 2px;
}
.scroll-line {
  width: 1px;
  height: 50px;
  background: linear-gradient(to bottom, var(--primary), transparent);
  animation: scrollAnim 2s ease-in-out infinite;
}
@keyframes scrollAnim {
  0% {
    transform: scaleY(0);
    transform-origin: top;
  }
  50% {
    transform: scaleY(1);
    transform-origin: top;
  }
  51% {
    transform: scaleY(1);
    transform-origin: bottom;
  }
  100% {
    transform: scaleY(0);
    transform-origin: bottom;
  }
}

/* ===== ABOUT ===== */
.about {
  background: var(--bg2);
}
.about-grid {
  display: grid;
  grid-template-columns: 1fr 1.4fr;
  gap: 64px;
  align-items: center;
}
.about-visual {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 32px;
}

.about-avatar {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
}
.avatar-ring {
  position: absolute;
  width: 180px;
  height: 180px;
  border-radius: 50%;
  border: 2px solid var(--primary);
  opacity: 0.5;
  animation: spin 8s linear infinite;
}
@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}
.avatar-inner {
  width: 150px;
  height: 150px;
  border-radius: 50%;
  background: var(--gradient);
  display: flex;
  align-items: center;
  justify-content: center;
}
.avatar-initials {
  font-size: 3rem;
  font-weight: 800;
  color: #fff;
}
.avatar-badge {
  position: absolute;
  bottom: -10px;
  right: -10px;
  background: var(--surface2);
  border: 1px solid var(--border);
  padding: 6px 14px;
  border-radius: 50px;
  font-size: 0.8rem;
  font-weight: 600;
  color: var(--primary-light);
  white-space: nowrap;
}

.about-stats {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 12px;
  width: 100%;
}
.stat-card {
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: var(--radius-sm);
  padding: 16px 12px;
  text-align: center;
  transition:
    transform 0.3s,
    border-color 0.3s;
}
.stat-card:hover {
  transform: translateY(-4px);
  border-color: var(--primary);
}
.stat-num {
  display: block;
  font-size: 1.4rem;
  font-weight: 800;
  background: var(--gradient);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}
.stat-label {
  font-size: 0.72rem;
  color: var(--text-muted);
  text-transform: uppercase;
  letter-spacing: 1px;
}

.about-text p {
  color: var(--text-muted);
  margin-bottom: 16px;
  line-height: 1.8;
}
.about-text strong {
  color: var(--text);
  font-weight: 600;
}
.about-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin: 24px 0 32px;
}
.about-tags span {
  background: rgba(99, 102, 241, 0.1);
  border: 1px solid var(--border);
  color: var(--primary-light);
  padding: 6px 16px;
  border-radius: 50px;
  font-size: 0.82rem;
  font-weight: 500;
}

/* ===== SKILLS ===== */
.skills {
  background: var(--bg);
}
.skills-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 24px;
  margin-bottom: 40px;
}
.skill-category {
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: var(--radius);
  padding: 28px;
  transition: border-color 0.3s;
}
.skill-category:hover {
  border-color: var(--primary);
}
.skill-category h3 {
  font-size: 0.95rem;
  font-weight: 700;
  color: var(--text);
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  gap: 10px;
}
.skill-category h3 i {
  color: var(--primary-light);
}
.skill-pills {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}
.skill-pill {
  display: flex;
  align-items: center;
  gap: 8px;
  background: var(--bg2);
  border: 1px solid var(--border);
  border-radius: 50px;
  padding: 8px 16px;
  font-size: 0.88rem;
  font-weight: 500;
  color: var(--text);
  transition: all 0.3s;
}
.skill-pill:hover {
  border-color: var(--primary-light);
  color: var(--primary-light);
  transform: translateY(-2px);
}
.skill-icon {
  font-family: "Fira Code", monospace;
  font-size: 0.7rem;
  color: var(--accent);
  font-weight: 600;
}

.cert-strip {
  background: linear-gradient(
    135deg,
    rgba(99, 102, 241, 0.1),
    rgba(168, 85, 247, 0.1)
  );
  border: 1px solid var(--border);
  border-radius: var(--radius);
  padding: 24px 32px;
  display: flex;
  align-items: center;
  gap: 20px;
}
.cert-icon {
  width: 48px;
  height: 48px;
  background: var(--gradient);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
  color: #fff;
  flex-shrink: 0;
}
.cert-info {
  flex: 1;
}
.cert-info strong {
  display: block;
  font-size: 1rem;
  color: var(--text);
  margin-bottom: 4px;
}
.cert-info span {
  font-size: 0.85rem;
  color: var(--text-muted);
}
.cert-date {
  display: flex !important;
  align-items: center;
  gap: 6px;
  font-size: 0.78rem !important;
  color: var(--primary-light) !important;
  font-family: "Fira Code", monospace;
  margin-top: 6px;
}
.cert-badge {
  background: var(--gradient);
  color: #fff;
  padding: 6px 18px;
  border-radius: 50px;
  font-size: 0.8rem;
  font-weight: 700;
  white-space: nowrap;
}
.award-strip {
  margin-top: 16px;
  background: linear-gradient(
    135deg,
    rgba(250, 204, 21, 0.08),
    rgba(234, 179, 8, 0.08)
  );
  border-color: rgba(250, 204, 21, 0.2);
}
.award-strip .cert-icon {
  background: linear-gradient(135deg, #f59e0b, #d97706);
}
.award-badge {
  background: linear-gradient(135deg, #f59e0b, #d97706);
}
.ds-strip {
  margin-top: 16px;
  background: linear-gradient(
    135deg,
    rgba(6, 182, 212, 0.08),
    rgba(99, 102, 241, 0.08)
  );
  border-color: rgba(6, 182, 212, 0.2);
}
.ds-strip .cert-icon {
  background: linear-gradient(135deg, #06b6d4, #6366f1);
}
.ds-badge {
  background: linear-gradient(135deg, #06b6d4, #6366f1);
}

/* ===== PROJECTS ===== */
.projects {
  background: var(--bg2);
}
.projects-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 28px;
}
.project-card {
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: var(--radius);
  padding: 32px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
}
.project-card::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 3px;
  background: var(--gradient);
  transform: scaleX(0);
  transform-origin: left;
  transition: transform 0.4s ease;
}
.project-card:hover {
  transform: translateY(-6px);
  border-color: var(--primary);
  box-shadow: var(--shadow);
}
.project-card:hover::before {
  transform: scaleX(1);
}

.project-top {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.project-folder {
  font-size: 1.8rem;
  color: var(--primary-light);
}
.project-links a {
  color: var(--text-muted);
  font-size: 1.2rem;
  transition: color 0.2s;
  text-decoration: none;
}
.project-links a:hover {
  color: var(--primary-light);
}

.project-badge {
  display: inline-block;
  padding: 4px 12px;
  border-radius: 50px;
  font-size: 0.75rem;
  font-weight: 700;
  background: rgba(99, 102, 241, 0.15);
  color: var(--primary-light);
  border: 1px solid rgba(99, 102, 241, 0.3);
  margin-bottom: 8px;
}
.project-badge.safety {
  background: rgba(16, 185, 129, 0.12);
  color: var(--green);
  border-color: rgba(16, 185, 129, 0.3);
}
.project-title {
  font-size: 1.2rem;
  font-weight: 700;
  color: var(--text);
  margin-bottom: 8px;
}
.project-desc {
  color: var(--text-muted);
  font-size: 0.9rem;
  line-height: 1.7;
}
.project-highlights {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 6px;
}
.project-highlights li {
  font-size: 0.85rem;
  color: var(--text-muted);
  padding-left: 16px;
  position: relative;
}
.project-highlights li::before {
  content: "▹";
  position: absolute;
  left: 0;
  color: var(--primary-light);
}
.project-tech {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: auto;
  padding-top: 16px;
  border-top: 1px solid var(--border);
}
.project-tech span {
  font-family: "Fira Code", monospace;
  font-size: 0.75rem;
  color: var(--text-dim);
  background: var(--bg);
  padding: 3px 10px;
  border-radius: 4px;
  border: 1px solid var(--border);
}

/* ===== EDUCATION ===== */
.education {
  background: var(--bg);
}
.timeline {
  position: relative;
  padding-left: 40px;
  margin-bottom: 60px;
}
.timeline::before {
  content: "";
  position: absolute;
  left: 10px;
  top: 0;
  bottom: 0;
  width: 2px;
  background: linear-gradient(to bottom, var(--primary), var(--secondary));
  border-radius: 2px;
}
.timeline-item {
  position: relative;
  padding-bottom: 32px;
}
.timeline-dot {
  position: absolute;
  left: -34px;
  top: 24px;
  width: 14px;
  height: 14px;
  border-radius: 50%;
  background: var(--gradient);
  border: 3px solid var(--bg);
  box-shadow: 0 0 0 2px var(--primary);
}
.timeline-card {
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: var(--radius);
  padding: 28px 32px;
  transition: all 0.3s;
}
.timeline-card:hover {
  border-color: var(--primary);
  transform: translateX(6px);
}
.timeline-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 20px;
}
.timeline-card h3 {
  font-size: 1.1rem;
  font-weight: 700;
  color: var(--text);
  margin-bottom: 6px;
}
.timeline-inst {
  color: var(--text-muted);
  font-size: 0.9rem;
}
.timeline-score {
  text-align: right;
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 2px;
}
.score-date {
  font-size: 0.78rem;
  color: var(--primary-light);
  font-family: "Fira Code", monospace;
  display: flex;
  align-items: center;
  gap: 5px;
  margin-bottom: 4px;
}
.score-num {
  display: block;
  font-size: 1.2rem;
  font-weight: 700;
  background: var(--gradient);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}
.score-label {
  font-size: 0.75rem;
  color: var(--text-dim);
  text-transform: uppercase;
  letter-spacing: 1px;
}
.timeline-date {
  font-size: 0.8rem;
  color: var(--primary-light);
  margin-top: 6px;
  display: flex;
  align-items: center;
  gap: 6px;
  font-family: "Fira Code", monospace;
}
.timeline-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 16px;
}
.timeline-tags span {
  background: rgba(99, 102, 241, 0.08);
  border: 1px solid var(--border);
  color: var(--text-dim);
  padding: 4px 12px;
  border-radius: 50px;
  font-size: 0.78rem;
}

.languages-row {
  text-align: center;
}
.languages-row h3 {
  font-size: 0.85rem;
  font-weight: 700;
  color: var(--text-muted);
  margin-bottom: 16px;
  text-transform: uppercase;
  letter-spacing: 2px;
}
.lang-pills {
  display: flex;
  gap: 16px;
  justify-content: center;
  flex-wrap: wrap;
}
.lang-pill {
  background: var(--surface);
  border: 1px solid var(--border);
  color: var(--text);
  padding: 10px 28px;
  border-radius: 50px;
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: 8px;
  transition: all 0.3s;
}
.lang-pill i {
  color: var(--primary-light);
}
.lang-pill:hover {
  border-color: var(--primary);
  transform: translateY(-2px);
}

/* ===== CONTACT ===== */
.contact {
  background: var(--bg2);
}
.contact-grid {
  display: grid;
  grid-template-columns: 1fr 1.2fr;
  gap: 64px;
  align-items: start;
}
.contact-intro {
  color: var(--text-muted);
  font-size: 1rem;
  line-height: 1.8;
  margin-bottom: 36px;
}
.contact-items {
  display: flex;
  flex-direction: column;
  gap: 16px;
}
.contact-item {
  display: flex;
  align-items: center;
  gap: 16px;
  text-decoration: none;
  padding: 16px 20px;
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: var(--radius-sm);
  transition: all 0.3s;
}
.contact-item:hover {
  border-color: var(--primary);
  transform: translateX(6px);
}
.contact-item-icon {
  width: 44px;
  height: 44px;
  background: rgba(99, 102, 241, 0.1);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--primary-light);
  font-size: 1.1rem;
  flex-shrink: 0;
}
.contact-item-label {
  display: block;
  font-size: 0.75rem;
  color: var(--text-dim);
  text-transform: uppercase;
  letter-spacing: 1px;
  margin-bottom: 2px;
}
.contact-item-value {
  display: block;
  font-size: 0.9rem;
  color: var(--text);
  font-weight: 500;
}

.contact-form {
  display: flex;
  flex-direction: column;
  gap: 20px;
}
.form-group {
  display: flex;
  flex-direction: column;
  gap: 6px;
}
.form-group label {
  font-size: 0.82rem;
  color: var(--text-dim);
  font-weight: 500;
}
.form-group input,
.form-group textarea {
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: var(--radius-sm);
  padding: 14px 18px;
  color: var(--text);
  font-family: "Inter", sans-serif;
  font-size: 0.95rem;
  outline: none;
  transition: border-color 0.3s;
  resize: vertical;
}
.form-group input:focus,
.form-group textarea:focus {
  border-color: var(--primary);
}
.form-group input::placeholder,
.form-group textarea::placeholder {
  color: var(--text-dim);
}

/* ===== FOOTER ===== */
.footer {
  background: var(--bg3);
  border-top: 1px solid var(--border);
  padding: 40px 0;
  text-align: center;
}
.footer p {
  color: var(--text-muted);
  font-size: 0.9rem;
  margin-bottom: 4px;
}
.footer-sub {
  color: var(--text-dim);
  font-size: 0.8rem;
}

/* ===== REVEAL ANIMATIONS ===== */
.reveal {
  opacity: 0;
  transform: translateY(30px);
  transition:
    opacity 0.6s ease,
    transform 0.6s ease;
}
.reveal.visible {
  opacity: 1;
  transform: translateY(0);
}

/* ===== RESPONSIVE ===== */
@media (max-width: 900px) {
  .about-grid {
    grid-template-columns: 1fr;
    gap: 48px;
  }
  .skills-grid {
    grid-template-columns: 1fr;
  }
  .projects-grid {
    grid-template-columns: 1fr;
  }
  .contact-grid {
    grid-template-columns: 1fr;
    gap: 48px;
  }
}

@media (max-width: 768px) {
  .nav-links {
    display: none;
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    background: rgba(10, 10, 15, 0.97);
    backdrop-filter: blur(20px);
    flex-direction: column;
    gap: 0;
    border-bottom: 1px solid var(--border);
  }
  .nav-links.open {
    display: flex;
  }
  .nav-links li a {
    display: block;
    padding: 14px 24px;
    border-bottom: 1px solid var(--border);
  }
  .hamburger {
    display: flex;
  }
  .section {
    padding: 72px 0;
  }
  .timeline {
    padding-left: 28px;
  }
  .timeline-header {
    flex-direction: column;
    gap: 12px;
  }
  .timeline-score {
    text-align: left;
  }
  .cert-strip {
    flex-direction: column;
    text-align: center;
  }
  .hero-actions {
    flex-direction: column;
    align-items: center;
  }
}

@media (max-width: 480px) {
  .about-stats {
    grid-template-columns: 1fr;
  }
  .hero-name {
    font-size: 2.5rem;
  }
}
