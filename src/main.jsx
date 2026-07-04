import React from 'react';
import { createRoot } from 'react-dom/client';
import { MapPin, Phone, Clock, Scissors, Sparkles, Droplets, Heart, CalendarCheck, ChevronRight, Star, MessageCircle } from 'lucide-react';
import './styles.css';

const bookingUrl = 'https://map.naver.com/p/entry/place/33431131';
const phone = '02-497-6050';

const services = [
  { icon: Scissors, title: '커트', desc: '디자인컷 · 앞머리커트 · 주니어컷', price: '35,000원~' },
  { icon: Sparkles, title: '펌', desc: '베이직펌 · 열펌 · 다운펌 · 모류교정펌', price: '상담 후 안내' },
  { icon: Droplets, title: '염색/탈색', desc: '전체염색 · 뿌리염색 · 탈색 · 토닝', price: '상담 후 안내' },
  { icon: Heart, title: '케어', desc: '모발 클리닉 · 헤드스파 · 두피케어', price: '상담 후 안내' },
];

const designers = [
  { name: '혜진', role: '디자이너', tag: '섬세한 상담과 데일리 스타일' },
  { name: '지형', role: '디자이너', tag: '트렌디한 컷과 컬 디자인' },
  { name: '호빈', role: '디자이너', tag: '깔끔한 남성 스타일과 다운펌' },
  { name: '백건', role: '디자이너', tag: '손질 편한 실용 스타일' },
];

const priceRows = [
  ['디자인컷', '35,000원'],
  ['주니어컷', '28,000원'],
  ['앞머리커트', '별도 문의'],
  ['드라이/스타일링', '상담 후 안내'],
  ['펌/열펌/다운펌', '상담 후 안내'],
  ['염색/탈색/토닝', '상담 후 안내'],
  ['클리닉/헤드스파', '상담 후 안내'],
];

function App() {
  return (
    <main>
      <nav className="nav">
        <a className="brand" href="#top">JUNO HAIR 건대역2호점</a>
        <div className="navLinks">
          <a href="#services">시술</a>
          <a href="#designers">디자이너</a>
          <a href="#price">가격</a>
          <a href="#location">오시는 길</a>
          <a className="navBtn" href={bookingUrl} target="_blank" rel="noreferrer">예약</a>
        </div>
      </nav>

      <section id="top" className="hero">
        <div className="heroText">
          <span className="eyebrow">건대입구역 프리미엄 헤어살롱</span>
          <h1>준오헤어<br />건대역2호점</h1>
          <p>커트, 펌, 염색, 클리닉까지 내 얼굴형과 라이프스타일에 맞춰 상담받는 건대입구역 미용실 안내 페이지입니다.</p>
          <div className="heroActions">
            <a className="btn primary" href={bookingUrl} target="_blank" rel="noreferrer"><CalendarCheck size={18}/> 네이버 예약하기</a>
            <a className="btn ghost" href={`tel:${phone}`}><Phone size={18}/> 전화 문의</a>
          </div>
          <div className="quickInfo">
            <span><MapPin size={16}/> 서울 광진구 능동로 109 2층</span>
            <span><Clock size={16}/> 월~토 10:00 - 20:30</span>
          </div>
        </div>
        <div className="heroCard">
          <div className="cardGlow" />
          <h2>오늘 상담하기 좋은 메뉴</h2>
          <ul>
            <li>손질 편한 레이어드컷</li>
            <li>톤다운·토닝 컬러 상담</li>
            <li>남성 다운펌·깔끔한 커트</li>
            <li>모발 클리닉·헤드스파</li>
          </ul>
        </div>
      </section>

      <section className="section intro">
        <div>
          <span className="sectionLabel">About</span>
          <h2>처음 방문해도 편하게 상담할 수 있도록</h2>
        </div>
        <p>원하는 스타일 사진이 없어도 괜찮아요. 모질, 두상, 평소 손질 습관을 기준으로 어울리는 방향을 함께 정리해드립니다.</p>
      </section>

      <section id="services" className="section">
        <span className="sectionLabel">Services</span>
        <h2>대표 시술</h2>
        <div className="grid cards">
          {services.map(({ icon: Icon, title, desc, price }) => (
            <article className="serviceCard" key={title}>
              <Icon size={28}/>
              <h3>{title}</h3>
              <p>{desc}</p>
              <strong>{price}</strong>
            </article>
          ))}
        </div>
      </section>

      <section id="designers" className="section beige">
        <span className="sectionLabel">Designers</span>
        <h2>디자이너 안내</h2>
        <div className="grid designers">
          {designers.map((d) => (
            <article className="designer" key={d.name}>
              <div className="avatar">{d.name.slice(0,1)}</div>
              <h3>{d.name} <small>{d.role}</small></h3>
              <p>{d.tag}</p>
              <div className="stars"><Star/><Star/><Star/><Star/><Star/></div>
            </article>
          ))}
        </div>
      </section>

      <section id="price" className="section split">
        <div>
          <span className="sectionLabel">Price</span>
          <h2>가격 안내</h2>
          <p className="muted">모발 길이, 손상도, 디자인 난이도에 따라 금액이 달라질 수 있습니다. 정확한 가격은 상담 후 안내됩니다.</p>
        </div>
        <div className="priceBox">
          {priceRows.map(([name, price]) => (
            <div className="priceRow" key={name}><span>{name}</span><b>{price}</b></div>
          ))}
        </div>
      </section>

      <section className="section consult">
        <div>
          <MessageCircle size={34}/>
          <h2>방문 전 상담 체크</h2>
          <p>원하는 느낌, 피하고 싶은 스타일, 최근 시술 이력만 정리해오면 상담이 훨씬 쉬워집니다.</p>
        </div>
        <a className="btn primary" href={bookingUrl} target="_blank" rel="noreferrer">예약 페이지로 이동 <ChevronRight size={18}/></a>
      </section>

      <section id="location" className="section location">
        <span className="sectionLabel">Location</span>
        <h2>오시는 길</h2>
        <div className="locationCard">
          <div>
            <p><b>주소</b><br/>서울 광진구 능동로 109 2층</p>
            <p><b>영업시간</b><br/>월~토 10:00 - 20:30</p>
            <p><b>전화</b><br/>{phone}</p>
          </div>
          <div className="mapMock">건대입구역 인근<br/>스타시티 영존 주차 가능</div>
        </div>
      </section>

      <footer>
        <b>JUNO HAIR 건대역2호점</b>
        <p>본 페이지는 매장 안내용 랜딩페이지입니다.</p>
      </footer>
    </main>
  );
}

createRoot(document.getElementById('root')).render(<App />);
