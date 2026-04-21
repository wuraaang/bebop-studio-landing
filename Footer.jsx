/* Footer */
const Footer = () => (
  <footer className="footer">
    <div className="container" style={{ display: 'grid', gridTemplateColumns: '1.5fr 1fr 1fr', gap: 48, alignItems: 'start' }}>
      <div>
        <Wordmark size={22} reverse />
        <p style={{ color: 'var(--fg-on-inverse-muted)', fontSize: 14, lineHeight: 1.6, maxWidth: 320, marginTop: 12 }}>
          Agence française. Mise en conformité et automatisation
          administrative pour TPE et PME.
        </p>
      </div>
      <div>
        <div className="eyebrow" style={{ marginBottom: 12 }}>Contact</div>
        <div style={{ display: 'grid', gap: 6, fontSize: 14 }}>
          <a href="mailto:contact@bebopstudio.fr">contact@bebopstudio.fr</a>
          <span className="mono" style={{ color: 'var(--fg-on-inverse-muted)', fontSize: 13 }}>bebopstudio.fr</span>
        </div>
      </div>
      <div>
        <div className="eyebrow" style={{ marginBottom: 12 }}>Légal</div>
        <div style={{ display: 'grid', gap: 6, fontSize: 14 }}>
          <a href="legal.html">Mentions légales</a>
          <a href="privacy.html">Politique de confidentialité</a>
        </div>
      </div>
    </div>
    <div
      style={{
        borderTop: '1px solid rgba(255,255,255,0.08)',
        marginTop: 56,
        paddingTop: 24,
        fontSize: 12,
        color: 'var(--fg-on-inverse-muted)',
        display: 'flex',
        justifyContent: 'space-between',
      }}
      className="container mono"
    >
      <span>© 2026 Bebop Studio</span>
    </div>
  </footer>
);

Object.assign(window, { Footer });
