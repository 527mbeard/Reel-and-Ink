
// ============================================================
//      JAVASCRIPT
// ============================================================

// ---------------------------------------------------------------
// STATE
// ---------------------------------------------------------------
let currentRating = 0;
let currentFilter = 'all';
let currentSort   = 'newest';


// ---------------------------------------------------------------
// ARTICLES DATA
// To add a pre-written review: copy one object and fill it in.
// Fields: id, cat (film/book/tv), rating (1-5), worktitle,
//         creator, year, reviewtitle, subtitle, excerpt,
//         body (HTML string), verdict, author, date, reads
// ---------------------------------------------------------------
const articles = [
  {
    id: 0, cat: 'film', rating: 5,
    worktitle: 'Conclave', creator: 'Edward Berger', year: '2024',
    reviewtitle: 'God is in the Doubt',
    subtitle: 'Berger's papal thriller is the most gripping film about institutional power in years.',
    excerpt: 'Conclave works on every level it attempts. As a thriller, it is gripping; as a meditation on faith, it is searching; as a portrait of institutional rot, it is unsparing.',
    body: `<p>Conclave works on every level it attempts. As a thriller, it is gripping; as a meditation on faith, it is searching; as a portrait of institutional rot, it is unsparing. Edward Berger proves himself a director who understands that the most dramatic spaces are rooms where old men argue quietly.</p>
           <p>Ralph Fiennes, playing Cardinal Lawrence, the dean tasked with overseeing the election of a new pope, gives what might be the performance of his career. His face is a weather system — clouds and clearings, sudden dark fronts. He is a man who no longer believes and cannot stop believing.</p>
           <blockquote>"A film about doubt in a world that rewards certainty is itself an act of courage."</blockquote>
           <p>The screenplay adapts Robert Harris's novel with surgical precision. Every scene adds pressure. Every revelation reframes what came before. The pacing is that rarest of things in contemporary cinema: patient without being slow.</p>`,
    verdict: 'The rare studio film that trusts its audience to sit with complexity.',
    author: 'M. Calloway', date: 'January 14, 2025', reads: 2840
  },
  {
    id: 1, cat: 'book', rating: 5,
    worktitle: 'James', creator: 'Percival Everett', year: '2024',
    reviewtitle: 'The Slave Who Sees Everything',
    subtitle: 'Everett\'s reimagining of Huckleberry Finn is a masterpiece of controlled fury.',
    excerpt: 'James does not ask you to enjoy it. It asks you to reckon. Percival Everett takes one of American literature\'s most beloved adventures and recenters it on the enslaved man at its margins.',
    body: `<p>James does not ask you to enjoy it. It asks you to reckon. Percival Everett takes one of American literature's most beloved adventures and recenters it on the enslaved man at its margins, producing a novel that feels both ancient and urgently contemporary.</p>
           <p>The central conceit — that enslaved people speak a sophisticated internal language, performing ignorance for their enslavers — is devastating and brilliant. Jim, now James, is not the comic relief of Twain's original. He is watching. He has always been watching.</p>
           <blockquote>"Everett doesn't rewrite Twain so much as he illuminates what was always there in the negative space."</blockquote>
           <p>The prose has a sharpness to it, a tautness that Everett deploys carefully. There are passages of extraordinary beauty and passages of almost unbearable dread, sometimes within the same page.</p>`,
    verdict: 'Devastating, brilliant, necessary. The novel of the year.',
    author: 'P. Osei', date: 'December 2, 2024', reads: 1920
  },
  {
    id: 2, cat: 'tv', rating: 4,
    worktitle: 'Severance Season 2', creator: 'Ben Stiller / Dan Erickson', year: '2025',
    reviewtitle: 'The Labyrinth Deepens',
    subtitle: 'Season two refuses easy answers — and is better for it.',
    excerpt: 'Three years is a long time to wait for answers you don\'t fully get. Severance\'s second season is more interested in expanding its map than marking any X.',
    body: `<p>Three years is a long time to wait for answers you don't fully get. Severance's second season is more interested in expanding its map than marking any X. That is occasionally frustrating and consistently fascinating.</p>
           <p>What the season does brilliantly is deepen the mythology while keeping the human stakes legible. The Innies are not allegories — they are people, and their desperate grasp at selfhood is often genuinely moving.</p>
           <blockquote>"To sever yourself from yourself is the ultimate corporate ask. The show never lets you forget it."</blockquote>
           <p>The finale will divide viewers. It should. That it provokes argument means it's doing something real.</p>`,
    verdict: 'Imperfect, ambitious, unmissable.',
    author: 'D. Harrington', date: 'March 28, 2025', reads: 3100
  },
  {
    id: 3, cat: 'film', rating: 4,
    worktitle: 'The Substance', creator: 'Coralie Fargeat', year: '2024',
    reviewtitle: 'The Body Revolts',
    subtitle: 'Fargeat\'s body-horror provocation is exhausting, excessive, and exactly right.',
    excerpt: 'The Substance is not a subtle film. Coralie Fargeat is not a subtle director. Her follow-up to Revenge is louder, longer, more grotesque, and more genuinely disturbing in its implications than almost anything else in recent memory.',
    body: `<p>The Substance is not a subtle film. Coralie Fargeat is not a subtle director. Her follow-up to <em>Revenge</em> is louder, longer, more grotesque, and more genuinely disturbing in its implications than almost anything else in recent memory.</p>
           <p>Demi Moore gives the kind of performance that only emerges when a director gives an actor complete permission. She is funny, pathetic, magnificent, and tragic — sometimes within a single close-up.</p>
           <p>The film's final act goes far. Then further. Then further still. Whether you see this as excess for its own sake or as the logical endpoint of the film's argument about how women are consumed and discarded will define your experience of it.</p>`,
    verdict: 'Extreme, brilliant, uncomfortable. Essential.',
    author: 'A. Chen', date: 'November 5, 2024', reads: 2200
  },
  {
    id: 4, cat: 'book', rating: 4,
    worktitle: 'Intermezzo', creator: 'Sally Rooney', year: '2024',
    reviewtitle: 'Rooney Grows Up',
    subtitle: 'Her fourth novel is her warmest and her most structurally daring.',
    excerpt: 'Sally Rooney\'s detractors have always had a point. Intermezzo doesn\'t silence them, but it does something more interesting: it makes you care so much you stop listening to them.',
    body: `<p>Sally Rooney's detractors have always had a point. Her sentences can be airless; her characters' crises provincial. <em>Intermezzo</em> doesn't silence the critics, but it does something more interesting: it makes you care so much you stop listening to them.</p>
           <p>The novel follows two brothers grieving their father, moving between Dublin and a small Irish town, between youth and middle age, between styles — one brother rendered in Rooney's trademark free indirect speech, the other in a strange, staccato present tense that ultimately pays off.</p>
           <blockquote>"Grief, Rooney suggests, does not equalise us. It reveals us."</blockquote>
           <p>What's new here is warmth. Rooney has always been smart; here she is also kind.</p>`,
    verdict: 'Her most emotionally generous novel. A real step forward.',
    author: 'T. Walsh', date: 'October 22, 2024', reads: 1750
  },
  {
    id: 5, cat: 'tv', rating: 5,
    worktitle: 'The Bear — Season 3', creator: 'Christopher Storer', year: '2024',
    reviewtitle: 'Everything Is at Stake',
    subtitle: 'Divisive on release, essential in retrospect.',
    excerpt: 'Season three of The Bear was called too slow, too literary, too in love with its own misery. These criticisms are not wrong. They are also beside the point.',
    body: `<p>Season three of The Bear was called too slow, too literary, too in love with its own misery. These criticisms are not wrong. They are also beside the point. Christopher Storer made a season of television that behaves like a great short story collection — formally daring, occasionally maddening, haunting in accumulation.</p>
           <p>The episode structured around Carmy's fever dream — a parade of culinary ghosts — is the most formally ambitious thing a streaming service has produced in years.</p>
           <blockquote>"To be this devoted is to be this isolated. The season earns its gloom."</blockquote>
           <p>If this is the show losing its audience, it is doing so magnificently.</p>`,
    verdict: 'Punishing, precise, and the best drama on television.',
    author: 'R. Diaz', date: 'August 8, 2024', reads: 2600
  }
];


// ---------------------------------------------------------------
// HELPERS
// ---------------------------------------------------------------

// Returns HTML string of filled/empty stars
function buildStarsHTML(rating, size = '0.8rem') {
  let html = '';
  for (let i = 1; i <= 5; i++) {
    const filled = i <= rating;
    html += `<span class="star ${filled ? '' : 'star--empty'}" style="font-size:${size}">★</span>`;
  }
  return html;
}

// Returns the right tag HTML for a category
function buildTagHTML(cat) {
  const map = {
    film: ['tag--film', 'Film'],
    book: ['tag--book', 'Book'],
    tv:   ['tag--tv',   'TV']
  };
  const [cls, label] = map[cat] || ['tag--film', 'Other'];
  return `<span class="tag ${cls}">${label}</span>`;
}

// SVG thumbnail icons for each category
const categoryIcons = {
  film: `<svg width="70" height="70" viewBox="0 0 70 70" fill="none">
           <circle cx="35" cy="35" r="28" stroke="#C8A84B" stroke-width="2" opacity="0.5"/>
           <polygon points="25,20 55,35 25,50" fill="#C8A84B" opacity="0.6"/>
         </svg>`,
  book: `<svg width="70" height="70" viewBox="0 0 70 70" fill="none">
           <rect x="12" y="10" width="40" height="52" rx="2" stroke="#7ABB8A" stroke-width="2" opacity="0.5"/>
           <line x1="20" y1="25" x2="44" y2="25" stroke="#7ABB8A" stroke-width="1.5" opacity="0.5"/>
           <line x1="20" y1="33" x2="44" y2="33" stroke="#7ABB8A" stroke-width="1.5" opacity="0.5"/>
           <line x1="20" y1="41" x2="36" y2="41" stroke="#7ABB8A" stroke-width="1.5" opacity="0.5"/>
         </svg>`,
  tv:   `<svg width="70" height="70" viewBox="0 0 70 70" fill="none">
           <rect x="8" y="18" width="54" height="36" rx="3" stroke="#8A9ABB" stroke-width="2" opacity="0.5"/>
           <line x1="20" y1="54" x2="20" y2="62" stroke="#8A9ABB" stroke-width="2" opacity="0.5"/>
           <line x1="50" y1="54" x2="50" y2="62" stroke="#8A9ABB" stroke-width="2" opacity="0.5"/>
         </svg>`
};


// ---------------------------------------------------------------
// RENDER FEED
// ---------------------------------------------------------------
function renderFeed() {
  const list = document.getElementById('articleList');

  // Filter and sort
  let data = [...articles];
  if (currentFilter !== 'all') data = data.filter(a => a.cat === currentFilter);
  if (currentSort === 'newest') data.sort((a, b) => b.id - a.id);
  if (currentSort === 'oldest') data.sort((a, b) => a.id - b.id);
  if (currentSort === 'rating') data.sort((a, b) => b.rating - a.rating);

  // Empty state
  if (data.length === 0) {
    list.innerHTML = `
      <div class="article-list__empty">
        No reviews yet in this category.<br><br>
        <button class="btn-primary" onclick="showView('write')">Be the first →</button>
      </div>`;
    return;
  }

  // Build cards
  list.innerHTML = data.map(article => `
    <div class="article-card" onclick="openArticle(${article.id})">
      <div class="article-card__body">
        <div class="article-card__tags">${buildTagHTML(article.cat)}</div>
        <h2 class="article-card__title">${article.reviewtitle}</h2>
        ${article.subtitle ? `<p class="article-card__subtitle">${article.subtitle}</p>` : ''}
        <p class="article-card__excerpt">${article.excerpt}</p>
        <div class="article-card__meta">
          <span class="article-card__author">${article.author}</span>
          <span>·</span>
          <span>${article.date}</span>
          <span>·</span>
          <div class="stars">${buildStarsHTML(article.rating)}</div>
          <span>·</span>
          <span>${article.reads.toLocaleString()} reads</span>
        </div>
      </div>
      <div class="article-card__image">
        ${categoryIcons[article.cat] || ''}
      </div>
    </div>
  `).join('');
}


// ---------------------------------------------------------------
// RENDER SIDEBAR
// ---------------------------------------------------------------
function renderSidebar() {
  // Top 4 most-read articles
  const topArticles = [...articles].sort((a, b) => b.reads - a.reads).slice(0, 4);

  document.getElementById('sidebarMostRead').innerHTML = topArticles.map((article, index) => `
    <div class="sidebar__item" onclick="openArticle(${article.id})">
      <div class="sidebar__item-number">0${index + 1}</div>
      <div>
        <div class="sidebar__item-title">${article.reviewtitle}</div>
        <div class="sidebar__item-meta">${article.worktitle} · ${article.author}</div>
      </div>
    </div>
  `).join('');

  // Category counts
  document.getElementById('countFilm').textContent = articles.filter(a => a.cat === 'film').length + ' reviews';
  document.getElementById('countBook').textContent = articles.filter(a => a.cat === 'book').length + ' reviews';
  document.getElementById('countTv').textContent   = articles.filter(a => a.cat === 'tv').length   + ' reviews';
}


// ---------------------------------------------------------------
// FILTER & SORT
// ---------------------------------------------------------------
function filterCat(cat, clickedEl) {
  currentFilter = cat;
  // Remove active from all filter buttons
  document.querySelectorAll('.filter-bar__btn, .hero__cat-pill, .nav__link').forEach(el => {
    el.classList.remove('active');
  });
  if (clickedEl) clickedEl.classList.add('active');
  showView('home');
  renderFeed();
}

function sortArticles(value) {
  currentSort = value;
  renderFeed();
}


// ---------------------------------------------------------------
// OPEN ARTICLE DETAIL
// ---------------------------------------------------------------
function openArticle(id) {
  const article = articles.find(a => a.id === id);
  if (!article) return;

  article.reads++; // increment read count

  const workMeta = [article.worktitle, article.creator, article.year].filter(Boolean).join(' · ');

  document.getElementById('articleDetail').innerHTML = `
    <div class="article-page">
      <button class="article-page__back" onclick="showView('home')">← Back to reviews</button>
      <div>${buildTagHTML(article.cat)}</div>
      <h1 class="article-page__title">${article.reviewtitle}</h1>
      ${article.subtitle ? `<p class="article-page__subtitle">${article.subtitle}</p>` : ''}
      <div class="article-page__byline">
        <span class="article-page__author">By <strong>${article.author}</strong></span>
        <span class="article-page__date">${article.date}</span>
        <div class="article-page__rating">
          <div class="stars">${buildStarsHTML(article.rating, '1rem')}</div>
          <span class="article-page__rating-number">${article.rating}/5</span>
        </div>
      </div>
      <p class="article-page__work-meta">${workMeta}</p>
      <div class="article-page__body">${article.body}</div>
      ${article.verdict ? `
        <div class="article-page__verdict">
          <div class="article-page__verdict-label">Verdict</div>
          <div class="article-page__verdict-text">${article.verdict}</div>
        </div>` : ''}
    </div>
  `;

  showView('article');
  window.scrollTo(0, 0);
}


// ---------------------------------------------------------------
// STAR RATING INPUT (write form)
// ---------------------------------------------------------------
function setRating(n) {
  currentRating = n;
  const ratingDescriptions = ['', 'One star — significant reservations', 'Two stars — more bad than good', 'Three stars — worth your time', 'Four stars — very good', 'Five stars — essential'];
  document.getElementById('ratingLabel').textContent = ratingDescriptions[n];
  document.querySelectorAll('.star-input__btn').forEach((btn, i) => {
    btn.classList.toggle('active', i < n);
  });
}


// ---------------------------------------------------------------
// CHARACTER COUNTER (review textarea)
// ---------------------------------------------------------------
function updateCharCount() {
  const count = document.getElementById('f-body').value.length;
  const el    = document.getElementById('charCount');
  const remaining = 200 - count;
  el.textContent  = count.toLocaleString() + ' characters' + (remaining > 0 ? ` (${remaining} more to reach minimum)` : ' ✓');
  el.style.color  = count >= 200 ? '#7ABB8A' : 'var(--color-text-muted)';
}


// ---------------------------------------------------------------
// SUBMIT REVIEW
// ---------------------------------------------------------------
function submitReview() {
  // Collect values
  const cat         = document.getElementById('f-category').value;
  const worktitle   = document.getElementById('f-worktitle').value.trim();
  const reviewtitle = document.getElementById('f-reviewtitle').value.trim();
  const body        = document.getElementById('f-body').value.trim();
  const author      = document.getElementById('f-author').value.trim();

  // Validate required fields
  const missing = [];
  if (!cat)         missing.push('category');
  if (!worktitle)   missing.push('title of work');
  if (!reviewtitle) missing.push('review title');
  if (!body)        missing.push('review text');
  if (!author)      missing.push('your name');
  if (!currentRating) missing.push('rating');

  if (missing.length > 0) {
    alert('Please fill in: ' + missing.join(', '));
    return;
  }

  // Format today's date
  const months  = ['January','February','March','April','May','June','July','August','September','October','November','December'];
  const now     = new Date();
  const dateStr = `${months[now.getMonth()]} ${now.getDate()}, ${now.getFullYear()}`;

  // Build new article object
  const newArticle = {
    id:         Math.max(...articles.map(a => a.id)) + 1,
    cat,
    rating:     currentRating,
    worktitle,
    creator:    document.getElementById('f-creator').value.trim(),
    year:       document.getElementById('f-year').value.trim(),
    reviewtitle,
    subtitle:   document.getElementById('f-subtitle').value.trim(),
    excerpt:    body.slice(0, 280) + (body.length > 280 ? '...' : ''),
    // Wrap each paragraph in <p> tags
    body:       body.split('\n').filter(p => p.trim()).map(p => `<p>${p}</p>`).join(''),
    verdict:    document.getElementById('f-verdict').value.trim(),
    author,
    date:       dateStr,
    reads:      1
  };

  articles.unshift(newArticle);

  // Reset form fields
  ['f-category','f-worktitle','f-creator','f-year','f-reviewtitle','f-subtitle','f-body','f-author','f-verdict'].forEach(id => {
    document.getElementById(id).value = '';
  });
  currentRating = 0;
  document.querySelectorAll('.star-input__btn').forEach(btn => btn.classList.remove('active'));
  document.getElementById('ratingLabel').textContent = 'Click to rate';
  document.getElementById('charCount').textContent   = '0 characters';

  // Refresh and navigate to the new article
  currentFilter = 'all';
  currentSort   = 'newest';
  renderFeed();
  renderSidebar();
  openArticle(newArticle.id);

  // Show success toast
  const toast = document.getElementById('toast');
  toast.classList.add('active');
  setTimeout(() => toast.classList.remove('active'), 3000);
}


// ---------------------------------------------------------------
// VIEW MANAGER — switches between home / write / article
// ---------------------------------------------------------------
function showView(name) {
  document.querySelectorAll('.view').forEach(v => v.classList.remove('active'));
  document.getElementById('view-' + name).classList.add('active');
  if (name !== 'article') window.scrollTo(0, 0);
}


// ---------------------------------------------------------------
// INIT
// ---------------------------------------------------------------
renderFeed();
renderSidebar();
