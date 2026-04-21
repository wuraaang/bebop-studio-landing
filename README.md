# Landing — `bebopstudio.fr`

Landing page mono-page pour Bebop Studio. Sobre, crédible, lisible en 30 secondes.

## Structure

1. **Nav** — sticky, 64px, wordmark à gauche + 3 liens + CTA "Rendez-vous" en bouton ink.
2. **Hero** — H1 serif gros, sous-titre, CTA primaire ambre + CTA secondaire outline. À droite, 2 cartes "échéances" (sept 2026 / sept 2027).
3. **Approche** — 3 étapes numérotées, format liste éditoriale (pas de cartes), avec bordures fines.
4. **Conformité** — contexte + tableau de dates en format "registre".
5. **Contact** — section ink inversée avec formulaire sur fond cream.
6. **Footer** — ink, 3 colonnes (brand, contact, légal).

## Composants

| Fichier | Rôle |
|---|---|
| `Nav.jsx` | `<Nav>` + `<Wordmark>` |
| `Hero.jsx` | `<Hero>` + `<DeadlineCard>` |
| `Approche.jsx` | `<Approche>` (trois étapes) |
| `Conformite.jsx` | `<Conformite>` + `<DateRow>` |
| `Contact.jsx` | `<Contact>` (formulaire avec state soumis) |
| `Footer.jsx` | `<Footer>` |
| `App.jsx` | Composition + scroll smooth entre sections |
| `kit.css` | Classes utilitaires (.btn, .card, .input, .nav, etc) basées sur les tokens. |

## Notes

- Toutes les couleurs passent par les tokens sémantiques de `colors_and_type.css`. Aucune couleur en dur dans les composants.
- La flèche `→` est un caractère Unicode, animée via `transform: translateX(2px)` au hover du parent.
- Le formulaire est cosmétique : à la soumission, affiche un état "envoyé" pendant 6s puis se remet.
