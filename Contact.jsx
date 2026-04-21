/* Contact form + CTA section (inverse) */
const Contact = ({ onSubmit, submitted }) => {
  const [form, setForm] = React.useState({ name: '', company: '', email: '', context: '' });
  const update = (k) => (e) => setForm({ ...form, [k]: e.target.value });

  return (
    <section className="section section-inverse" id="contact">
      <div className="container in-view" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80 }}>
        <div>
          <div className="eyebrow" style={{ marginBottom: 16 }}>Prendre contact</div>
          <h2 style={{ fontSize: 40, lineHeight: 1.12, letterSpacing: '-0.02em', fontWeight: 400, margin: '0 0 24px', color: 'var(--fg-on-inverse)' }}>
            Un premier échange, sans engagement.
          </h2>
          <p style={{ fontSize: 16, color: 'var(--fg-on-inverse-muted)', lineHeight: 1.6, margin: '0 0 32px', maxWidth: 440 }}>
            30 minutes en visioconférence ou par téléphone, pour écouter votre
            situation et voir ensemble si un accompagnement a du sens. Si ce
            n'est pas le cas, nous vous le disons.
          </p>
          <div style={{ borderTop: '1px solid rgba(255,255,255,0.12)', paddingTop: 24, fontSize: 14, color: 'var(--fg-on-inverse-muted)', display: 'grid', gap: 6 }}>
            <div>contact@bebopstudio.fr</div>
            <div className="mono" style={{ fontSize: 13 }}>Réponse sous 48h ouvrées</div>
          </div>
        </div>

        <form
          onSubmit={(e) => { e.preventDefault(); onSubmit && onSubmit(form); }}
          style={{
            background: 'var(--cream-50)',
            borderRadius: 'var(--r-lg)',
            padding: 32,
            display: 'grid',
            gap: 16,
            color: 'var(--fg-1)',
          }}
        >
          {submitted ? (
            <div style={{ padding: '24px 8px', textAlign: 'left' }}>
              <div className="eyebrow" style={{ color: 'var(--accent-press)', marginBottom: 10 }}>Votre mail est prêt</div>
              <div style={{ fontFamily: 'var(--font-display)', fontSize: 26, letterSpacing: '-0.02em', color: 'var(--fg-1)', marginBottom: 10 }}>
                Cliquez « Envoyer » dans votre messagerie.
              </div>
              <p style={{ margin: 0, color: 'var(--fg-2)', fontSize: 15, lineHeight: 1.55 }}>
                Votre client mail s'est ouvert avec vos informations pré-remplies. Il ne reste qu'à valider l'envoi. Si rien ne s'ouvre, écrivez-nous directement à <a href="mailto:contact@bebopstudio.fr" className="mono">contact@bebopstudio.fr</a>. Réponse sous 48h ouvrées.
              </p>
            </div>
          ) : (
            <>
              <div className="field">
                <label htmlFor="c-name">Votre nom</label>
                <input id="c-name" className="input" value={form.name} onChange={update('name')} placeholder="Jean Dupont" required />
              </div>
              <div className="field">
                <label htmlFor="c-company">Entreprise</label>
                <input id="c-company" className="input" value={form.company} onChange={update('company')} placeholder="Menuiserie Dupont" required />
              </div>
              <div className="field">
                <label htmlFor="c-email">Email professionnel</label>
                <input id="c-email" type="email" className="input" value={form.email} onChange={update('email')} placeholder="jean@entreprise.fr" required />
              </div>
              <div className="field">
                <label htmlFor="c-context">Contexte (optionnel)</label>
                <textarea id="c-context" className="input" value={form.context} onChange={update('context')} placeholder="Quelques lignes sur votre situation actuelle." />
              </div>
              <button className="btn btn-primary" type="submit" style={{ justifySelf: 'start', marginTop: 4 }}>
                Envoyer <span className="arrow">→</span>
              </button>
              <div className="mono" style={{ fontSize: 12, color: 'var(--fg-3)', marginTop: -4 }}>
                Vos informations ne sont utilisées que pour ce premier échange.
              </div>
            </>
          )}
        </form>
      </div>
    </section>
  );
};

Object.assign(window, { Contact });
