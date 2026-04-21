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

  const onSubmit = () => {
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 6000);
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
