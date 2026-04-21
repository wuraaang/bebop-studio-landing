/* App — composes the landing page */
const App = () => {
  const [active, setActive] = React.useState('approche');
  const [submitted, setSubmitted] = React.useState(false);

  // IntersectionObserver reveals on scroll
  React.useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('visible');
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12 }
    );
    document.querySelectorAll('.in-view').forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  const scrollTo = (id) => {
    if (id === 'top') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      setActive('approche');
      return;
    }
    setActive(id);
    const el = document.getElementById(id);
    if (el) {
      const y = el.getBoundingClientRect().top + window.scrollY - 64;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  const goContact = () => scrollTo('contact');
  const goApproche = () => scrollTo('approche');

  const onSubmit = async (form) => {
    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          access_key: 'f2f5d73b-1932-40d8-a875-3cc3913ac916',
          subject: `[bebopstudio.fr] Nouveau contact — ${form.name} (${form.company})`,
          from_name: form.name,
          replyto: form.email,
          name: form.name,
          company: form.company,
          email: form.email,
          message: form.context || '(pas de contexte fourni)',
          botcheck: '',
        }),
      });
      if (res.ok) {
        setSubmitted(true);
        setTimeout(() => setSubmitted(false), 6000);
      } else {
        alert("Erreur d'envoi. Écrivez-nous directement à contact@bebopstudio.fr");
      }
    } catch (e) {
      alert("Erreur réseau. Écrivez-nous directement à contact@bebopstudio.fr");
    }
  };

  return (
    <>
      <Nav active={active} onNav={scrollTo} onCta={goContact} />
      <Hero onPrimary={goContact} onSecondary={goApproche} />
      <Approche />
      <Conformite onCta={goContact} />
      <Contact onSubmit={onSubmit} submitted={submitted} />
      <Footer />
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
