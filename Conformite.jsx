/* Conformité — context block */
const Conformite = ({ onCta }) => (
  <section className="section" id="conformite" style={{ background: 'var(--bg-raised)' }}>
    <div className="container in-view" style={{ display: 'grid', gridTemplateColumns: '1fr 1.2fr', gap: 80, alignItems: 'start' }}>
      <div>
        <div className="eyebrow" style={{ marginBottom: 12 }}>Ce qui change</div>
        <h2 style={{ fontSize: 36, lineHeight: 1.15, letterSpacing: '-0.02em', fontWeight: 400, margin: '0 0 24px' }}>
          La facturation électronique devient obligatoire.
        </h2>
        <p style={{ fontSize: 16, color: 'var(--fg-2)', lineHeight: 1.6, margin: 0 }}>
          La réforme s'applique à toutes les entreprises établies en France.
          Les obligations diffèrent selon la taille de la structure. Nous
          préparons votre passage sans interruption d'activité.
        </p>
      </div>

      <div style={{ display: 'grid', gap: 12 }}>
        <DateRow date="2026" title="Réception obligatoire, pour toutes les entreprises" note="Vous devez pouvoir recevoir une facture au format électronique structuré." />
        <DateRow date="2026" title="Émission, grandes entreprises et ETI" note="Les structures moyennes et grandes émettent exclusivement en format électronique." />
        <DateRow date="2027" title="Émission, TPE et PME" note="Votre entreprise émet ses factures via une plateforme agréée." accent />
        <div style={{ marginTop: 12 }}>
          <a className="link-arrow" href="#contact" onClick={(e) => { e.preventDefault(); onCta && onCta(); }}>
            Vérifier ma situation <span className="arrow">→</span>
          </a>
        </div>
      </div>
    </div>
  </section>
);

const DateRow = ({ date, title, note, accent }) => (
  <div
    style={{
      display: 'grid',
      gridTemplateColumns: '130px 1fr',
      gap: 24,
      padding: '18px 0',
      borderTop: '1px solid var(--border-subtle)',
      borderBottom: '1px solid var(--border-subtle)',
      marginTop: -1,
    }}
  >
    <div className="mono" style={{ fontSize: 14, color: accent ? 'var(--accent-press)' : 'var(--fg-1)', fontWeight: 500, paddingTop: 2 }}>
      {date}
    </div>
    <div>
      <div style={{ fontSize: 15, fontWeight: 500, color: 'var(--fg-1)', marginBottom: 4, letterSpacing: '-0.005em' }}>{title}</div>
      <div style={{ fontSize: 14, color: 'var(--fg-3)', lineHeight: 1.5 }}>{note}</div>
    </div>
  </div>
);

Object.assign(window, { Conformite, DateRow });
