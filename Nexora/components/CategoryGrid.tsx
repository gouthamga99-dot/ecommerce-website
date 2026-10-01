import Link from 'next/link';

const categories = [
  { id: 'smartphones', name: 'Smartphones', icon: 'smartphone', price: 'FROM ₹19,999', desc: 'Flagship 5G & Next-Gen Foldables' },
  { id: 'laptops', name: 'Laptops', icon: 'laptop_mac', price: 'FROM ₹2,49,900', desc: 'Creator Workstations & Ultrabooks' },
  { id: 'cameras', name: 'Cameras', icon: 'photo_camera', price: 'FROM ₹49,990', desc: 'Mirrorless & Cinema Lenses' },
  { id: 'docks', name: 'Docks & Chargers', icon: 'memory', price: 'FROM ₹2,990', desc: 'GaN Fast Charging & TB4 Docks' }
];

export default function CategoryGrid() {
  return (
    <section className="section">
      <div className="container">
        <div className="section-header">
          <div>
            <div className="section-tag">
              <span className="material-symbols-outlined">apps</span>
              <span>Engineered Hardware</span>
            </div>
            <h2>Explore the Ecosystem</h2>
          </div>
          <p className="section-desc">
            Browse certified flagship configurations with nationwide express shipping and official manufacturer guarantee.
          </p>
        </div>
        <div className="category-grid">
          {categories.map(cat => (
            <Link
              key={cat.id}
              href={cat.id === 'smartphones' ? '/products' : cat.id === 'laptops' ? '/product/1' : '#'}
              className="category-card"
            >
              <div className="card-top">
                <div className="card-icon"><span className="material-symbols-outlined">{cat.icon}</span></div>
                <span className="card-price">{cat.price}</span>
              </div>
              <h3>{cat.name}</h3>
              <p>{cat.desc}</p>
              <div className="card-bottom">
                <span>Explore Lineup</span>
                <span className="material-symbols-outlined">arrow_forward</span>
              </div>
              <div className="glow"></div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
