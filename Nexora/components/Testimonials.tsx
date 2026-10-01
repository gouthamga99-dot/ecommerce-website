import { testimonials } from '@/data/products';

export default function Testimonials() {
  return (
    <section className="section" style={{ background: 'rgba(241,245,249,0.4)', borderRadius: '24px', border: '1px solid rgba(226,232,240,0.6)' }}>
      <div className="container">
        <div className="section-header">
          <div>
            <span className="section-tag">
              <span className="material-symbols-outlined">star</span>
              <span>Verified Real-World Field Reviews</span>
            </span>
            <h2>Built for India's Leading Creators</h2>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <span style={{ fontFamily: 'var(--font-display)', fontSize: '24px', fontWeight: 700, color: 'var(--primary)' }}>
              4.96 / 5.0
            </span>
            <div className="stars" style={{ color: '#f59e0b' }}>
              <span className="material-symbols-outlined fill">star</span>
              <span className="material-symbols-outlined fill">star</span>
              <span className="material-symbols-outlined fill">star</span>
              <span className="material-symbols-outlined fill">star</span>
              <span className="material-symbols-outlined fill">star</span>
            </div>
            <span style={{ fontFamily: 'var(--font-body)', fontSize: '12px', color: 'var(--on-surface-variant)' }}>
              (14,280+ Reviews)
            </span>
          </div>
        </div>

        <div className="testimonials-grid">
          {testimonials.map(t => (
            <div key={t.id} className="testimonial-card">
              <div className="stars">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <span key={i} className="material-symbols-outlined fill">star</span>
                ))}
              </div>
              <p className="quote">"{t.quote}"</p>
              <div className="testimonial-footer">
                <div className="testimonial-avatar">
                  <img src={t.avatar} alt={t.name} onError={e => { (e.target as HTMLImageElement).style.display = 'none'; }} />
                </div>
                <div>
                  <h5>{t.name}</h5>
                  <p>{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
