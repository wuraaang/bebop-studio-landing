/* Hero — centered, alive, no pressure. No countdown. */
const Hero = ({ onPrimary, onSecondary }) => {
  const [wordIdx, setWordIdx] = React.useState(0);
  const words = ['sans surprise', 'sans retard', 'sans stress', 'sans jargon'];

  React.useEffect(() => {
    const id = setInterval(() => setWordIdx((i) => (i + 1) % words.length), 2600);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="section hero-section" style={{ paddingTop: 96, paddingBottom: 128, position: 'relative', overflow: 'hidden' }}>
      <div className="hero-glow" aria-hidden="true" />

      <div className="container" style={{ position: 'relative', textAlign: 'center', maxWidth: 920 }}>
        <div className="eyebrow reveal" style={{ marginBottom: 28, justifyContent: 'center', display: 'inline-flex', alignItems: 'center', gap: 10 }}>
          <span className="live-dot" /> Bebop Studio · Agence française
        </div>

        <h1 className="hero-title reveal" style={{ textAlign: 'center' }}>
          La conformité{' '}
          <span className="rotator">
            {words.map((w, i) => (
              <span key={w} className={`rotator-word ${i === wordIdx ? 'is-active' : ''}`}>
                <em className="accent">{w}</em>
              </span>
            ))}
          </span>
          .<br />
          L'admin en moins.
        </h1>

        <p className="hero-sub reveal" style={{ margin: '0 auto 44px', textAlign: 'center' }}>
          Nous accompagnons les TPE et PME sur la mise en conformité à la
          facturation électronique et sur l'automatisation des tâches
          administratives répétitives.
        </p>

        <div className="reveal hero-cta-group" style={{ display: 'inline-flex', gap: 0, alignItems: 'stretch', flexWrap: 'wrap', justifyContent: 'center' }}>
          <button className="cta-primary" onClick={onPrimary}>
            <span className="cta-primary-label">Discuter de votre situation</span>
            <span className="cta-primary-arrow" aria-hidden="true">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><line x1="4" y1="12" x2="20" y2="12"/><polyline points="13 5 20 12 13 19"/></svg>
            </span>
            <span className="cta-primary-shimmer" aria-hidden="true" />
          </button>
          <button className="cta-secondary" onClick={onSecondary}>
            <span className="cta-secondary-dot" aria-hidden="true" />
            Comment nous travaillons
          </button>
        </div>
        <div className="reveal cta-note">30 minutes · sans engagement · réponse sous 48h</div>
      </div>
    </section>
  );
};

Object.assign(window, { Hero });
