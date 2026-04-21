/* Nav + Wordmark */
const Wordmark = ({ size = 20, reverse = false }) => (
  <span
    style={{
      fontFamily: 'var(--font-display)',
      fontStyle: 'italic',
      fontWeight: 400,
      fontSize: size,
      letterSpacing: '-0.02em',
      color: reverse ? 'var(--cream-50)' : 'var(--fg-1)',
      display: 'inline-flex',
      alignItems: 'baseline',
      whiteSpace: 'nowrap',
    }}
  >
    Bebop Stud
    <span
      style={{
        width: Math.round(size * 0.22),
        height: Math.round(size * 0.22),
        borderRadius: '50%',
        background: 'var(--accent)',
        display: 'inline-block',
        transform: `translateY(-${Math.round(size * 0.44)}px)`,
        margin: '0 1px',
      }}
    />
    io
  </span>
);

const Nav = ({ active = 'approche', onNav, onCta }) => {
  const items = [
    { id: 'approche', label: 'Approche' },
    { id: 'conformite', label: 'Conformité' },
  ];
  return (
    <nav className="nav">
      <a href="#" className="nav-brand" onClick={(e) => { e.preventDefault(); onNav && onNav('top'); }}>
        <Wordmark size={20} />
      </a>
      <div className="nav-links">
        {items.map((it) => (
          <a
            key={it.id}
            className={active === it.id ? 'active' : ''}
            href={`#${it.id}`}
            onClick={(e) => { e.preventDefault(); onNav && onNav(it.id); }}
          >
            {it.label}
          </a>
        ))}
        <button className="btn btn-ink btn-sm" onClick={onCta}>
          Rendez-vous <span className="arrow">→</span>
        </button>
      </div>
    </nav>
  );
};

Object.assign(window, { Wordmark, Nav });
