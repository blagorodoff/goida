# GOYDA — redesign notes

## Files changed
- `index.html` — новые тексты трёх главных карточек, scroll-fill hero, hover-photo полосы услуг, stage visual, semantic accents.
- `style.css` — единый display-case для ST-Cyberillic, tablet/iPad layout, mobile stack/tree, hover layers, menu, accordion, social cards, motion/accessibility polish.
- `script.js` — scroll-linked hero fill, animated semantic accents, interactive stage icon, improved burger behavior.
- `components.js` — новое мобильное меню со stagger-анимацией, безопасным закрытием и Escape.
- `games.html` — карточка без `01`, жанровая подпись слева сверху.
- `games/the-way-of-the-cossack.html` — убран CTA-опрос, добавлен блок VK/Telegram.

## New assets
- `img/what-we-do/sites-hover.jpg`
- `img/what-we-do/identity-hover.jpg`
- `img/why-goyda/icon.svg`

These files are replaceable in-place without changing markup/CSS.

## Social links
The official VK/Telegram URLs for the game were not present in the source archive, so the two cards currently point to the platform roots:
- `https://vk.com/`
- `https://t.me/`

Replace only the two `href` values in `games/the-way-of-the-cossack.html` with the official game community/channel URLs.

## Existing optional assets
The source archive already referenced `img/works/project-02.jpg` and `img/works/project-03.jpg`, but those files are not present. The existing `script.js` removes a failed `<img>` without throwing a console error; add those two images later to populate the placeholder portfolio cards.


## Round 4 fixes
- Hero headline is a single H1 with its own reversible scroll-progress gradient; no transparent child spans.
- Hero progress is mapped to a stable document scroll range, so 0% at the start, 100% at the end, and fully reversible upward.
- Games card is restored to full-bleed image + bottom gradient copy + top-left genre.
- The Way of the Cossack description uses the same body typography scale as the studio intro.
