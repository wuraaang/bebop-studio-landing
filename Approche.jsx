/* Approche — three steps */
const Approche = () => {
  const steps = [
    {
      num: '01',
      title: 'Diagnostic de votre existant',
      body: 'Un rendez-vous de 45 minutes pour comprendre vos flux administratifs actuels, vos outils, vos points de friction.',
    },
    {
      num: '02',
      title: 'Plan de mise en conformité',
      body: "Un document synthétique qui liste les écarts avec l'échéance légale, les actions à mener, et l'ordre dans lequel les traiter.",
    },
    {
      num: '03',
      title: 'Déploiement et formation',
      body: 'Mise en place progressive des outils, formation des équipes, transfert complet. Un interlocuteur unique, du début à la fin.',
    },
  ];

  return (
    <section className="section" id="approche">
      <div className="container in-view">
        <div className="eyebrow" style={{ marginBottom: 12 }}>Notre approche</div>
        <h2 style={{ fontSize: 40, lineHeight: 1.12, letterSpacing: '-0.02em', fontWeight: 400, margin: '0 0 56px', maxWidth: 680 }}>
          Un accompagnement structuré, calé sur votre activité.
        </h2>

        <ol style={{ listStyle: 'none', padding: 0, margin: 0, display: 'grid', gap: 0, borderTop: '1px solid var(--border-subtle)' }}>
          {steps.map((s, i) => (
            <li
              key={s.num}
              className="step-row"
              style={{
                display: 'grid',
                gridTemplateColumns: '88px 1fr 1fr',
                gap: 32,
                padding: '32px 0',
                borderBottom: '1px solid var(--border-subtle)',
                alignItems: 'baseline',
              }}
            >
              <div className="mono step-num">— {s.num}</div>
              <h3 style={{ fontFamily: 'var(--font-body)', fontSize: 20, fontWeight: 500, letterSpacing: '-0.01em', color: 'var(--fg-1)', margin: 0 }}>
                {s.title}
              </h3>
              <p style={{ fontSize: 16, color: 'var(--fg-2)', margin: 0, lineHeight: 1.55 }}>{s.body}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
};

Object.assign(window, { Approche });
