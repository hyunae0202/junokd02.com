import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, MapPin, Clock, ChevronDown, Menu as MenuIcon, X, Star, Scissors, Calendar, MessageCircle } from 'lucide-react';
import { SITE, DESIGNERS, MENU_CATEGORIES, FAQ_ITEMS } from '@/data/index';

/* ─────────────────────────────────────────────
   Spring / animation presets
───────────────────────────────────────────── */
const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};
const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

/* ─────────────────────────────────────────────
   Navbar
───────────────────────────────────────────── */
function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handler);
    return () => window.removeEventListener('scroll', handler);
  }, []);

  const links = [
    { label: '소개', id: 'about' },
    { label: '디자이너', id: 'designers' },
    { label: '시술 메뉴', id: 'menu' },
    { label: '오시는 길', id: 'location' },
    { label: 'FAQ', id: 'faq' },
  ];

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    setOpen(false);
  };

  return (
    /* @section: navbar */
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'bg-card/95 shadow-md backdrop-blur-sm border-b border-border' : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="flex flex-col leading-none group"
        >
          <span
            className="font-serif text-xl font-semibold tracking-wide"
            style={{
              fontFamily: "'Noto Serif KR', serif",
              color: scrolled ? 'var(--primary)' : '#FAF7F2',
            }}
          >
            준오헤어
          </span>
          <span
            className="text-xs tracking-widest font-light"
            style={{ color: scrolled ? 'var(--accent)' : 'rgba(250,247,242,0.75)' }}
          >
            건대역2호점
          </span>
        </button>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <button
              key={l.id}
              onClick={() => scrollTo(l.id)}
              className="text-sm font-light tracking-wide transition-all duration-200 hover:opacity-100"
              style={{ color: scrolled ? 'var(--foreground)' : 'rgba(250,247,242,0.85)', fontFamily: "'Noto Sans KR', sans-serif" }}
            >
              {l.label}
            </button>
          ))}
          <a
            href={SITE.naverBookingUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2 text-sm font-medium rounded-full transition-all duration-300 hover:brightness-110 hover:scale-105"
            style={{
              background: 'var(--accent)',
              color: 'var(--accent-foreground)',
              fontFamily: "'Noto Sans KR', sans-serif",
            }}
          >
            네이버 예약
          </a>
        </nav>

        {/* Mobile hamburger */}
        <button
          className="md:hidden p-2"
          onClick={() => setOpen(!open)}
          style={{ color: scrolled ? 'var(--primary)' : '#FAF7F2' }}
        >
          {open ? <X size={22} /> : <MenuIcon size={22} />}
        </button>
      </div>

      {/* Mobile drawer */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-card border-t border-border"
          >
            <div className="px-6 py-4 flex flex-col gap-4">
              {links.map((l) => (
                <button
                  key={l.id}
                  onClick={() => scrollTo(l.id)}
                  className="text-left text-sm py-2 border-b border-border"
                  style={{ color: 'var(--foreground)', fontFamily: "'Noto Sans KR', sans-serif" }}
                >
                  {l.label}
                </button>
              ))}
              <a
                href={SITE.naverBookingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 px-5 py-3 text-sm font-medium rounded-full text-center"
                style={{ background: 'var(--accent)', color: 'var(--accent-foreground)' }}
              >
                네이버 예약하기
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

/* ─────────────────────────────────────────────
   Hero Section
───────────────────────────────────────────── */
function Hero() {
  return (
    /* @section: hero */
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background gradient layers */}
      <div
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(160deg, #2c1c0f 0%, #3b2512 30%, #4a3020 60%, #2c1c0f 100%)',
        }}
      />
      {/* Warm texture overlay */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: `radial-gradient(ellipse at 20% 50%, oklch(0.55 0.08 45 / 0.4) 0%, transparent 60%),
            radial-gradient(ellipse at 80% 20%, oklch(0.68 0.08 45 / 0.25) 0%, transparent 50%),
            radial-gradient(ellipse at 60% 80%, oklch(0.45 0.06 30 / 0.3) 0%, transparent 50%)`,
        }}
      />
      {/* Noise grain for texture */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
          backgroundSize: '200px 200px',
        }}
      />

      {/* Decorative lines */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-0 w-64 h-px" style={{ background: 'linear-gradient(90deg, transparent, rgba(201,169,110,0.3), transparent)' }} />
        <div className="absolute bottom-1/3 right-0 w-96 h-px" style={{ background: 'linear-gradient(90deg, transparent, rgba(201,169,110,0.2), transparent)' }} />
      </div>

      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        {/* Brand badge */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex items-center justify-center gap-3 mb-8"
        >
          <div className="h-px w-12 opacity-60" style={{ background: 'var(--accent)' }} />
          <span className="text-xs tracking-[0.35em] font-light uppercase" style={{ color: 'var(--accent)', fontFamily: "'Cormorant Garamond', serif" }}>
            Premium Hair Salon
          </span>
          <div className="h-px w-12 opacity-60" style={{ background: 'var(--accent)' }} />
        </motion.div>

        {/* Main title */}
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="text-5xl md:text-7xl font-semibold mb-3 leading-tight"
          style={{ fontFamily: "'Noto Serif KR', serif", color: '#FAF7F2' }}
        >
          준오헤어
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-lg md:text-xl tracking-[0.2em] mb-6"
          style={{ color: 'rgba(201,169,110,0.9)', fontFamily: "'Noto Sans KR', sans-serif", fontWeight: 300 }}
        >
          건대역 2호점
        </motion.p>

        {/* Divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="flex items-center justify-center gap-3 mb-8"
        >
          <div className="h-px w-16" style={{ background: 'rgba(250,247,242,0.25)' }} />
          <div className="w-1.5 h-1.5 rounded-full" style={{ background: 'var(--accent)' }} />
          <div className="h-px w-16" style={{ background: 'rgba(250,247,242,0.25)' }} />
        </motion.div>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-base md:text-lg leading-relaxed mb-12 max-w-xl mx-auto font-light"
          style={{ color: 'rgba(250,247,242,0.7)', fontFamily: "'Noto Sans KR', sans-serif" }}
        >
          당신의 아름다움을 가장 잘 아는 공간.<br />
          세심한 손길과 프리미엄 케어로 완성되는 특별한 경험.
        </motion.p>

        {/* CTA buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a
            href={SITE.naverBookingUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 text-sm font-medium rounded-full transition-all duration-300 hover:brightness-110 hover:scale-105 inline-flex items-center justify-center gap-2"
            style={{ background: 'var(--accent)', color: '#1a0f00', fontFamily: "'Noto Sans KR', sans-serif" }}
          >
            <Calendar size={16} />
            네이버 예약하기
          </a>
          <a
            href={`tel:${SITE.phone}`}
            className="px-8 py-4 text-sm font-medium rounded-full border transition-all duration-300 hover:bg-white/10 inline-flex items-center justify-center gap-2"
            style={{ borderColor: 'rgba(250,247,242,0.35)', color: '#FAF7F2', fontFamily: "'Noto Sans KR', sans-serif" }}
          >
            <Phone size={16} />
            전화 문의
          </a>
        </motion.div>

        {/* Scroll hint */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.4 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="text-xs tracking-widest" style={{ color: 'rgba(250,247,242,0.4)', fontFamily: "'Noto Sans KR', sans-serif" }}>SCROLL</span>
          <motion.div animate={{ y: [0, 6, 0] }} transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}>
            <ChevronDown size={16} style={{ color: 'rgba(250,247,242,0.4)' }} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────
   About Section
───────────────────────────────────────────── */
function About() {
  return (
    /* @section: about */
    <section id="about" className="py-28 px-6" style={{ background: 'var(--background)' }}>
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: decorative visual */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="relative"
          >
            {/* Main card */}
            <div
              className="relative rounded-2xl overflow-hidden aspect-[4/5] flex flex-col justify-end p-10"
              style={{ background: 'linear-gradient(160deg, #3b2512 0%, #4a3020 50%, #2c1c0f 100%)' }}
            >
              {/* Pattern overlay */}
              <div className="absolute inset-0 opacity-10" style={{
                backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 20px, rgba(201,169,110,0.5) 20px, rgba(201,169,110,0.5) 21px)`
              }} />
              <div className="relative z-10">
                <div className="h-px mb-6" style={{ background: 'linear-gradient(90deg, var(--accent), transparent)' }} />
                <p className="text-4xl font-semibold mb-2 leading-tight" style={{ fontFamily: "'Cormorant Garamond', serif", color: '#FAF7F2' }}>
                  12+
                </p>
                <p className="text-sm tracking-wide font-light" style={{ color: 'rgba(201,169,110,0.85)', fontFamily: "'Noto Sans KR', sans-serif" }}>
                  년의 헤어케어 전문 경력
                </p>
              </div>
            </div>
            {/* Floating stats */}
            <div
              className="absolute -bottom-6 -right-6 rounded-xl p-6 shadow-2xl"
              style={{ background: 'var(--card)', border: '1px solid var(--border)' }}
            >
              <div className="flex items-center gap-3 mb-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={14} fill="currentColor" style={{ color: 'var(--accent)' }} />
                ))}
              </div>
              <p className="text-2xl font-semibold" style={{ fontFamily: "'Noto Serif KR', serif", color: 'var(--foreground)' }}>4.9</p>
              <p className="text-xs mt-1 font-light" style={{ color: 'var(--muted-foreground)', fontFamily: "'Noto Sans KR', sans-serif" }}>네이버 리뷰 평점</p>
            </div>
          </motion.div>

          {/* Right: text */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <motion.div variants={fadeUp} className="mb-3">
              <span className="text-xs tracking-[0.3em] font-light" style={{ color: 'var(--accent)', fontFamily: "'Cormorant Garamond', serif" }}>
                ABOUT US
              </span>
            </motion.div>
            <motion.h2
              variants={fadeUp}
              className="text-3xl md:text-4xl font-semibold mb-6 leading-snug"
              style={{ fontFamily: "'Noto Serif KR', serif", color: 'var(--foreground)' }}
            >
              당신을 위한<br />
              <span style={{ color: 'var(--accent)' }}>프리미엄</span> 헤어살롱
            </motion.h2>
            <motion.div variants={fadeUp} className="h-px w-12 mb-8" style={{ background: 'var(--accent)' }} />
            <motion.p
              variants={fadeUp}
              className="text-base leading-relaxed mb-6 font-light"
              style={{ color: 'var(--muted-foreground)', fontFamily: "'Noto Sans KR', sans-serif" }}
            >
              준오헤어 건대역2호점은 고객 한 분 한 분의 개성과 라이프스타일을 존중합니다. 
              숙련된 디자이너들이 최신 트렌드와 전통적인 기술을 결합하여 
              당신에게 가장 잘 어울리는 스타일을 완성해드립니다.
            </motion.p>
            <motion.p
              variants={fadeUp}
              className="text-base leading-relaxed mb-10 font-light"
              style={{ color: 'var(--muted-foreground)', fontFamily: "'Noto Sans KR', sans-serif" }}
            >
              차분하고 편안한 살롱 환경에서 충분한 상담을 통해 진행되는 
              1:1 맞춤 시술 — 그것이 준오헤어만의 차별점입니다.
            </motion.p>
            {/* Feature badges */}
            <motion.div variants={staggerContainer} className="grid grid-cols-2 gap-4">
              {[
                { icon: <Scissors size={16} />, label: '전문 디자이너 상담' },
                { icon: <Star size={16} />, label: '프리미엄 케어 제품' },
                { icon: <Clock size={16} />, label: '정확한 예약 시간 준수' },
                { icon: <MessageCircle size={16} />, label: '시술 후 A/S 보장' },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  variants={fadeUp}
                  className="flex items-center gap-3 p-4 rounded-xl"
                  style={{ background: 'var(--muted)', border: '1px solid var(--border)' }}
                >
                  <span style={{ color: 'var(--accent)' }}>{item.icon}</span>
                  <span className="text-sm font-light" style={{ color: 'var(--foreground)', fontFamily: "'Noto Sans KR', sans-serif" }}>
                    {item.label}
                  </span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────
   Designers Section
───────────────────────────────────────────── */
function Designers() {
  return (
    /* @section: designers */
    <section id="designers" className="py-28 px-6" style={{ background: 'var(--card)' }}>
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="text-center mb-16"
        >
          <motion.span variants={fadeUp} className="text-xs tracking-[0.3em]" style={{ color: 'var(--accent)', fontFamily: "'Cormorant Garamond', serif" }}>
            OUR TEAM
          </motion.span>
          <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl font-semibold mt-3 mb-4" style={{ fontFamily: "'Noto Serif KR', serif", color: 'var(--foreground)' }}>
            디자이너 소개
          </motion.h2>
          <motion.p variants={fadeUp} className="text-sm font-light max-w-md mx-auto" style={{ color: 'var(--muted-foreground)', fontFamily: "'Noto Sans KR', sans-serif" }}>
            풍부한 경험과 섬세한 감각을 갖춘 전문 디자이너들이 함께합니다.
          </motion.p>
        </motion.div>

        {/* Cards */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {DESIGNERS.map((d) => (
            <motion.div
              key={d.id}
              variants={fadeUp}
              whileHover={{ y: -6 }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              className="rounded-2xl overflow-hidden group cursor-pointer"
              style={{ background: 'var(--background)', border: '1px solid var(--border)', boxShadow: '0 4px 24px -8px rgba(59,42,26,0.12)' }}
            >
              {/* Avatar area */}
              <div className={`relative h-52 bg-gradient-to-br ${d.color} flex items-center justify-center`}>
                <div
                  className="w-24 h-24 rounded-full flex items-center justify-center text-3xl font-semibold shadow-lg"
                  style={{ background: 'rgba(255,255,255,0.6)', color: '#3B2A1A', fontFamily: "'Cormorant Garamond', serif" }}
                >
                  {d.tag}
                </div>
                <div
                  className="absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-light"
                  style={{ background: 'rgba(59,42,26,0.15)', color: '#3B2A1A', fontFamily: "'Noto Sans KR', sans-serif" }}
                >
                  {d.career}
                </div>
              </div>
              {/* Info */}
              <div className="p-7">
                <div className="mb-1">
                  <span className="text-xs tracking-widest font-light" style={{ color: 'var(--accent)', fontFamily: "'Cormorant Garamond', serif" }}>
                    {d.title}
                  </span>
                </div>
                <h3 className="text-xl font-semibold mb-1" style={{ fontFamily: "'Noto Serif KR', serif", color: 'var(--foreground)' }}>
                  {d.name} 디자이너
                </h3>
                <div className="h-px my-4" style={{ background: 'var(--border)' }} />
                <p className="text-xs mb-3 font-medium tracking-wide" style={{ color: 'var(--accent)', fontFamily: "'Noto Sans KR', sans-serif" }}>
                  {d.specialty}
                </p>
                <p className="text-sm leading-relaxed font-light" style={{ color: 'var(--muted-foreground)', fontFamily: "'Noto Sans KR', sans-serif" }}>
                  {d.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────
   Menu Section
───────────────────────────────────────────── */
function Menu() {
  return (
    /* @section: menu */
    <section id="menu" className="py-28 px-6" style={{ background: 'var(--background)' }}>
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="text-center mb-16"
        >
          <motion.span variants={fadeUp} className="text-xs tracking-[0.3em]" style={{ color: 'var(--accent)', fontFamily: "'Cormorant Garamond', serif" }}>
            SERVICES
          </motion.span>
          <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl font-semibold mt-3 mb-4" style={{ fontFamily: "'Noto Serif KR', serif", color: 'var(--foreground)' }}>
            시술 메뉴 &amp; 가격
          </motion.h2>
          <motion.p variants={fadeUp} className="text-sm font-light max-w-md mx-auto" style={{ color: 'var(--muted-foreground)', fontFamily: "'Noto Sans KR', sans-serif" }}>
            모든 가격은 모발 상태와 길이에 따라 달라질 수 있으며, 정확한 금액은 상담 후 안내드립니다.
          </motion.p>
        </motion.div>

        {/* Grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {MENU_CATEGORIES.map((cat) => (
            <motion.div
              key={cat.category}
              variants={fadeUp}
              className="rounded-2xl p-8"
              style={{ background: 'var(--card)', border: '1px solid var(--border)' }}
            >
              <div className="flex items-center gap-3 mb-6">
                <span className="text-2xl">{cat.icon}</span>
                <h3 className="text-xl font-semibold" style={{ fontFamily: "'Noto Serif KR', serif", color: 'var(--foreground)' }}>
                  {cat.category}
                </h3>
              </div>
              <div className="h-px mb-6" style={{ background: 'var(--border)' }} />
              <div className="space-y-4">
                {cat.items.map((item) => (
                  <div key={item.name} className="flex items-center justify-between">
                    <span className="text-sm font-light" style={{ color: 'var(--foreground)', fontFamily: "'Noto Sans KR', sans-serif" }}>
                      {item.name}
                    </span>
                    <span className="text-sm font-medium" style={{ color: 'var(--accent)', fontFamily: "'Noto Sans KR', sans-serif" }}>
                      {item.price}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA banner */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-12 rounded-2xl p-10 text-center"
          style={{ background: 'linear-gradient(135deg, #3b2512 0%, #4a3020 100%)', border: '1px solid rgba(201,169,110,0.2)' }}
        >
          <p className="text-xs tracking-[0.3em] mb-3 font-light" style={{ color: 'rgba(201,169,110,0.7)', fontFamily: "'Cormorant Garamond', serif" }}>
            RESERVATION
          </p>
          <h3 className="text-2xl md:text-3xl font-semibold mb-4" style={{ fontFamily: "'Noto Serif KR', serif", color: '#FAF7F2' }}>
            지금 바로 예약하세요
          </h3>
          <p className="text-sm font-light mb-8" style={{ color: 'rgba(250,247,242,0.65)', fontFamily: "'Noto Sans KR', sans-serif" }}>
            네이버 예약으로 간편하게, 또는 전화로 문의주세요.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={SITE.naverBookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 text-sm font-medium rounded-full transition-all duration-300 hover:brightness-110 hover:scale-105 inline-flex items-center justify-center gap-2"
              style={{ background: 'var(--accent)', color: '#1a0f00', fontFamily: "'Noto Sans KR', sans-serif" }}
            >
              <Calendar size={16} />
              네이버 예약하기
            </a>
            <a
              href={`tel:${SITE.phone}`}
              className="px-8 py-4 text-sm font-medium rounded-full border transition-all duration-300 hover:bg-white/10 inline-flex items-center justify-center gap-2"
              style={{ borderColor: 'rgba(250,247,242,0.3)', color: '#FAF7F2', fontFamily: "'Noto Sans KR', sans-serif" }}
            >
              <Phone size={16} />
              {SITE.phone}
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────
   Location Section
───────────────────────────────────────────── */
function Location() {
  return (
    /* @section: location */
    <section id="location" className="py-28 px-6" style={{ background: 'var(--card)' }}>
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="text-center mb-16"
        >
          <motion.span variants={fadeUp} className="text-xs tracking-[0.3em]" style={{ color: 'var(--accent)', fontFamily: "'Cormorant Garamond', serif" }}>
            LOCATION
          </motion.span>
          <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl font-semibold mt-3 mb-4" style={{ fontFamily: "'Noto Serif KR', serif", color: 'var(--foreground)' }}>
            오시는 길
          </motion.h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Info */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="space-y-6"
          >
            {/* Address */}
            <motion.div
              variants={fadeUp}
              className="flex gap-4 p-6 rounded-2xl"
              style={{ background: 'var(--background)', border: '1px solid var(--border)' }}
            >
              <div className="mt-1 flex-shrink-0">
                <MapPin size={20} style={{ color: 'var(--accent)' }} />
              </div>
              <div>
                <p className="text-sm font-medium mb-1" style={{ color: 'var(--foreground)', fontFamily: "'Noto Sans KR', sans-serif" }}>주소</p>
                <p className="text-sm font-light mb-1" style={{ color: 'var(--muted-foreground)', fontFamily: "'Noto Sans KR', sans-serif" }}>{SITE.address}</p>
                <p className="text-xs font-light" style={{ color: 'var(--accent)', fontFamily: "'Noto Sans KR', sans-serif" }}>{SITE.addressDetail}</p>
              </div>
            </motion.div>

            {/* Phone */}
            <motion.a
              variants={fadeUp}
              href={`tel:${SITE.phone}`}
              className="flex gap-4 p-6 rounded-2xl transition-all duration-300 hover:border-accent"
              style={{ background: 'var(--background)', border: '1px solid var(--border)', display: 'flex' }}
            >
              <div className="mt-1 flex-shrink-0">
                <Phone size={20} style={{ color: 'var(--accent)' }} />
              </div>
              <div>
                <p className="text-sm font-medium mb-1" style={{ color: 'var(--foreground)', fontFamily: "'Noto Sans KR', sans-serif" }}>전화 문의</p>
                <p className="text-base font-light" style={{ color: 'var(--muted-foreground)', fontFamily: "'Noto Sans KR', sans-serif" }}>{SITE.phone}</p>
              </div>
            </motion.a>

            {/* Hours */}
            <motion.div
              variants={fadeUp}
              className="p-6 rounded-2xl"
              style={{ background: 'var(--background)', border: '1px solid var(--border)' }}
            >
              <div className="flex gap-4">
                <div className="mt-1 flex-shrink-0">
                  <Clock size={20} style={{ color: 'var(--accent)' }} />
                </div>
                <div className="flex-1">
                  <p className="text-sm font-medium mb-4" style={{ color: 'var(--foreground)', fontFamily: "'Noto Sans KR', sans-serif" }}>영업 시간</p>
                  <div className="space-y-2">
                    {SITE.hours.map((h) => (
                      <div key={h.day} className="flex items-center justify-between">
                        <span className="text-sm font-light" style={{ color: 'var(--muted-foreground)', fontFamily: "'Noto Sans KR', sans-serif" }}>{h.day}</span>
                        <span className="text-sm font-light" style={{ color: h.time === '휴무' ? 'var(--destructive)' : 'var(--foreground)', fontFamily: "'Noto Sans KR', sans-serif" }}>{h.time}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Naver map button */}
            <motion.div variants={fadeUp}>
              <a
                href={SITE.mapEmbed}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 py-4 rounded-full text-sm font-medium transition-all duration-300 hover:brightness-110 hover:scale-105"
                style={{ background: '#03C75A', color: '#fff', fontFamily: "'Noto Sans KR', sans-serif" }}
              >
                <MapPin size={16} />
                카카오맵으로 길 찾기
              </a>
            </motion.div>
          </motion.div>

          {/* Map visual */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="rounded-2xl overflow-hidden"
            style={{ border: '1px solid var(--border)', minHeight: '420px', position: 'relative' }}
          >
            <div
              className="absolute inset-0 flex flex-col items-center justify-center text-center p-10"
              style={{ background: 'linear-gradient(160deg, #3b2512 0%, #4a3020 50%, #2c1c0f 100%)' }}
            >
              <div className="w-16 h-16 rounded-full flex items-center justify-center mb-6" style={{ background: 'rgba(201,169,110,0.2)', border: '1px solid rgba(201,169,110,0.3)' }}>
                <MapPin size={28} style={{ color: 'var(--accent)' }} />
              </div>
              <h4 className="text-lg font-semibold mb-3" style={{ fontFamily: "'Noto Serif KR', serif", color: '#FAF7F2' }}>
                준오헤어 건대역2호점
              </h4>
              <p className="text-sm font-light mb-2" style={{ color: 'rgba(250,247,242,0.6)', fontFamily: "'Noto Sans KR', sans-serif" }}>
                {SITE.address}
              </p>
              <p className="text-xs font-light mb-8" style={{ color: 'rgba(201,169,110,0.8)', fontFamily: "'Noto Sans KR', sans-serif" }}>
                {SITE.addressDetail}
              </p>
              {/* Subway badge */}
              <div className="flex gap-3">
                <span className="px-3 py-1.5 rounded-full text-xs font-medium" style={{ background: '#00A84D', color: '#fff' }}>2호선</span>
                <span className="px-3 py-1.5 rounded-full text-xs font-medium" style={{ background: '#747F00', color: '#fff' }}>7호선</span>
                <span className="px-3 py-1.5 rounded-full text-xs font-light" style={{ background: 'rgba(250,247,242,0.1)', color: 'rgba(250,247,242,0.8)', fontFamily: "'Noto Sans KR', sans-serif", fontSize: '11px' }}>
                  건대입구역 2번 출구
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────
   FAQ Section
───────────────────────────────────────────── */
function FAQ() {
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  return (
    /* @section: faq */
    <section id="faq" className="py-28 px-6" style={{ background: 'var(--background)' }}>
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="text-center mb-16"
        >
          <motion.span variants={fadeUp} className="text-xs tracking-[0.3em]" style={{ color: 'var(--accent)', fontFamily: "'Cormorant Garamond', serif" }}>
            FAQ
          </motion.span>
          <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl font-semibold mt-3 mb-4" style={{ fontFamily: "'Noto Serif KR', serif", color: 'var(--foreground)' }}>
            자주 묻는 질문
          </motion.h2>
          <motion.p variants={fadeUp} className="text-sm font-light" style={{ color: 'var(--muted-foreground)', fontFamily: "'Noto Sans KR', sans-serif" }}>
            더 궁금한 점은 전화 또는 네이버 예약 채팅으로 문의해주세요.
          </motion.p>
        </motion.div>

        {/* Accordion */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="space-y-3"
        >
          {FAQ_ITEMS.map((item, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              className="rounded-xl overflow-hidden"
              style={{ border: '1px solid var(--border)', background: 'var(--card)' }}
            >
              <button
                className="w-full flex items-center justify-between px-6 py-5 text-left transition-colors duration-200"
                style={{ fontFamily: "'Noto Sans KR', sans-serif" }}
                onClick={() => setOpenIdx(openIdx === i ? null : i)}
              >
                <span className="text-sm font-medium pr-4" style={{ color: 'var(--foreground)' }}>
                  {item.q}
                </span>
                <motion.div
                  animate={{ rotate: openIdx === i ? 180 : 0 }}
                  transition={{ duration: 0.25 }}
                  className="flex-shrink-0"
                >
                  <ChevronDown size={16} style={{ color: 'var(--accent)' }} />
                </motion.div>
              </button>
              <AnimatePresence initial={false}>
                {openIdx === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-5">
                      <div className="h-px mb-4" style={{ background: 'var(--border)' }} />
                      <p className="text-sm leading-relaxed font-light" style={{ color: 'var(--muted-foreground)', fontFamily: "'Noto Sans KR', sans-serif" }}>
                        {item.a}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────
   Footer
───────────────────────────────────────────── */
function Footer() {
  return (
    /* @section: footer */
    <footer className="py-16 px-6" style={{ background: '#1e0f07', borderTop: '1px solid rgba(201,169,110,0.15)' }}>
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">
          {/* Brand */}
          <div>
            <p className="text-2xl font-semibold mb-1" style={{ fontFamily: "'Noto Serif KR', serif", color: '#FAF7F2' }}>준오헤어</p>
            <p className="text-xs tracking-widest mb-4 font-light" style={{ color: 'rgba(201,169,110,0.7)' }}>건대역 2호점</p>
            <p className="text-xs font-light leading-relaxed" style={{ color: 'rgba(250,247,242,0.45)', fontFamily: "'Noto Sans KR', sans-serif" }}>
              고객의 아름다움을 가장 잘 아는 곳,<br />준오헤어가 함께합니다.
            </p>
          </div>
          {/* Quick links */}
          <div>
            <p className="text-xs tracking-widest mb-5 font-light" style={{ color: 'rgba(201,169,110,0.7)', fontFamily: "'Cormorant Garamond', serif" }}>QUICK LINKS</p>
            <div className="space-y-3">
              {['about', 'designers', 'menu', 'location', 'faq'].map((id) => {
                const labels: Record<string, string> = { about: '살롱 소개', designers: '디자이너', menu: '시술 메뉴', location: '오시는 길', faq: 'FAQ' };
                return (
                  <button
                    key={id}
                    onClick={() => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })}
                    className="block text-sm font-light transition-opacity hover:opacity-80"
                    style={{ color: 'rgba(250,247,242,0.55)', fontFamily: "'Noto Sans KR', sans-serif" }}
                  >
                    {labels[id]}
                  </button>
                );
              })}
            </div>
          </div>
          {/* Contact */}
          <div>
            <p className="text-xs tracking-widest mb-5 font-light" style={{ color: 'rgba(201,169,110,0.7)', fontFamily: "'Cormorant Garamond', serif" }}>CONTACT</p>
            <div className="space-y-3">
              <a href={`tel:${SITE.phone}`} className="flex items-center gap-2 text-sm font-light hover:opacity-80 transition-opacity" style={{ color: 'rgba(250,247,242,0.55)', fontFamily: "'Noto Sans KR', sans-serif" }}>
                <Phone size={13} />
                {SITE.phone}
              </a>
              <p className="flex items-start gap-2 text-sm font-light" style={{ color: 'rgba(250,247,242,0.55)', fontFamily: "'Noto Sans KR', sans-serif" }}>
                <MapPin size={13} className="mt-0.5 flex-shrink-0" />
                {SITE.address}
              </p>
              <a
                href={SITE.naverBookingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-medium transition-all duration-300 hover:brightness-110"
                style={{ background: 'rgba(201,169,110,0.15)', color: 'rgba(201,169,110,0.9)', border: '1px solid rgba(201,169,110,0.25)', fontFamily: "'Noto Sans KR', sans-serif" }}
              >
                <Calendar size={13} />
                네이버 예약
              </a>
            </div>
          </div>
        </div>
        <div className="h-px mb-8" style={{ background: 'rgba(201,169,110,0.1)' }} />
        <p className="text-xs text-center font-light" style={{ color: 'rgba(250,247,242,0.25)', fontFamily: "'Noto Sans KR', sans-serif" }}>
          © {new Date().getFullYear()} 준오헤어 건대역2호점. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

/* ─────────────────────────────────────────────
   Page
───────────────────────────────────────────── */
export default function Home() {
  return (
    <div style={{ fontFamily: "'Noto Sans KR', sans-serif", background: 'var(--background)', color: 'var(--foreground)' }}>
      <Navbar />
      <Hero />
      <About />
      <Designers />
      <Menu />
      <Location />
      <FAQ />
      <Footer />
      {/* Floating contact button */}
      <div className="fixed bottom-6 right-6 z-40 flex flex-col gap-3">
        <a
          href={`tel:${SITE.phone}`}
          className="w-12 h-12 rounded-full flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-110"
          style={{ background: 'var(--primary)', color: 'var(--primary-foreground)' }}
          aria-label="전화 문의"
        >
          <Phone size={18} />
        </a>
        <a
          href={SITE.naverBookingUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="w-12 h-12 rounded-full flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-110"
          style={{ background: 'var(--accent)', color: '#1a0f00' }}
          aria-label="네이버 예약"
        >
          <Calendar size={18} />
        </a>
      </div>
    </div>
  );
}
