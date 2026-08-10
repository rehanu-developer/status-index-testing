import{t as e}from"./rolldown-runtime.Dh6celcD.mjs";import{M as t,T as n,b as r,j as i,k as a,l as o,s,u as c,v as l}from"./react.BcaIDK9K.mjs";import{S as u,a as d,r as f,t as p}from"./motion.BcpjdyXO.mjs";import{L as m,T as h,W as g,a as _,at as v,i as y,k as b,l as x,lt as S,nt as C,ot as w,st as T,ut as E,y as D,yt as O}from"./framer.B4AXX-9p.mjs";import{n as k,t as A}from"./Embed.Cc2crdEH.mjs";import j,{t as M}from"./xurYUOMC6pFOdX8ihCoI5LS3eIwqNQmGog3Rk6eJhRM.xRWLMYbD.mjs";var N,P,F,I,L,R,z,B,V,H,U;e((()=>{s(),g(),p(),n(),k(),M(),N=m(A),P={LJhmf0VQr:`(min-width: 1200px)`,sDd3SWqQr:`(max-width: 809.98px)`,ZCSBptmmD:`(min-width: 810px) and (max-width: 1199.98px)`},F=[],I=`framer-X6TW4`,L={LJhmf0VQr:`framer-v-7gu3ih`,sDd3SWqQr:`framer-v-1vssf84`,ZCSBptmmD:`framer-v-1avjya9`},R=(e,t,n)=>e&&t?`position`:n,z={"Artists Page":`LJhmf0VQr`,Phone:`sDd3SWqQr`,Tablet:`ZCSBptmmD`},B=({value:e})=>T()?null:o(`style`,{dangerouslySetInnerHTML:{__html:e},"data-framer-html-style":``}),V=({height:e,id:t,width:n,...r})=>({...r,variant:z[r.variant]??r.variant??`LJhmf0VQr`}),H=O(l(function(e,n){let s=a(null),l=n??s,p=r(),{activeLocale:m,setLocale:h}=S();C();let{style:g,className:T,layoutId:O,variant:k,...M}=V(e);E(t(()=>j({},m),[m]));let[N,F]=w(k,P,!1),H=b(I),U=i(x)?.isLayoutTemplate,W=!!i(d)?.transition?.layout,G=R(U,W);return v({}),o(x.Provider,{value:{activeVariantId:N,humanReadableVariantMap:z,primaryVariantId:`LJhmf0VQr`,variantClassNames:L},children:c(f,{id:O??p,children:[o(B,{value:`html body { background: none; }`}),o(u.div,{...M,className:b(H,`framer-7gu3ih`,T),ref:l,style:{...g},children:o(y,{children:o(_,{className:`framer-9g18ng-container`,isModuleExternal:!0,layout:G,nodeId:`R_ZyevHyF`,scopeId:`wxCCE8cdd`,children:o(D,{breakpoint:N,overrides:{sDd3SWqQr:{html:`<meta name="viewport" content="width=device-width, initial-scale=1.0">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=Inter+Display:wght@400;500;600&display=swap" rel="stylesheet">

<style>
  :root {
    --bg-main: #FFFFFF;
    --bg-soft: #F8F9FA;
    --border-color: #E5E7EB;
    --border-dark: #111827;
    --text-primary: #111827;
    --text-muted: #4B5563;
    --font-serif: 'Instrument Serif', Georgia, serif;
    --font-sans: 'Inter Display', -apple-system, BlinkMacSystemFont, sans-serif;
  }

  .si-artists-mobile * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  .si-artists-mobile {
    background: var(--bg-main);
    color: var(--text-primary);
    font-family: var(--font-sans);
    -webkit-font-smoothing: antialiased;
    max-width: 480px;
    margin: 0 auto;
    padding: 40px 16px;
    display: flex;
    flex-direction: column;
    gap: 64px;
  }

  /* Typography Base - Uniformed to Sans-Serif except H1 */
  h1 {
    font-family: var(--font-serif);
    font-weight: 400;
    line-height: 1.15;
    letter-spacing: -0.02em;
    color: var(--text-primary);
    font-size: 42px;
    margin-bottom: 16px;
  }

  h2 {
    font-family: var(--font-sans);
    font-weight: 600;
    line-height: 1.25;
    letter-spacing: -0.01em;
    color: var(--text-primary);
    font-size: 28px;
    margin-bottom: 20px;
  }

  h3 {
    font-family: var(--font-sans);
    font-weight: 600;
    line-height: 1.3;
    color: var(--text-primary);
    font-size: 20px;
    margin-bottom: 8px;
  }

  p {
    font-family: var(--font-sans);
    font-weight: 400;
    font-size: 15px;
    line-height: 1.6;
    color: var(--text-muted);
  }

  .eyebrow {
    font-family: var(--font-sans);
    font-size: 11px;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.12em;
    color: var(--text-primary);
    opacity: 0.6;
    margin-bottom: 12px;
    display: block;
  }

  .btn {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 16px 28px;
    background: var(--border-dark);
    color: var(--bg-main);
    border: 1px solid var(--border-dark);
    border-radius: 4px;
    font-weight: 500;
    font-size: 15px;
    text-decoration: none;
    transition: background 0.2s ease;
    cursor: pointer;
    width: 100%;
    text-align: center;
  }

  .btn:hover {
    background: #1f2937;
  }

  .btn-outline {
    background: transparent;
    color: var(--text-primary);
    border: 1px solid var(--border-color);
  }

  .btn-outline:hover {
    background: var(--bg-soft);
  }

  /* MOBILE HERO STRUCTURE */
  .mobile-hero {
    display: flex;
    flex-direction: column;
    gap: 32px;
    border-bottom: 1px solid var(--border-color);
    padding-bottom: 48px;
  }

  .hero-content .lead {
    font-size: 16px;
    line-height: 1.6;
    margin-bottom: 24px;
  }

  .hero-image-container {
    width: 100%;
    background: var(--bg-soft);
    border-radius: 8px;
    overflow: hidden;
    border: 1px solid var(--border-color);
    display: flex;
    aspect-ratio: 600 / 400;
    position: relative;
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.02);
  }

  .hero-img {
    width: 100%;
    height: 100%;
    display: block;
    object-fit: cover;
    opacity: 0;
    animation: smoothRenderReveal 0.35s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
  }

  @keyframes smoothRenderReveal {
    from { opacity: 0; }
    to { opacity: 1; }
  }

  /* Problems Section */
  .problem-section {
    display: flex;
    flex-direction: column;
    gap: 28px;
  }

  .problem-matrix {
    display: flex;
    flex-direction: column;
    gap: 24px;
  }

  .problem-node-box {
    border-left: 2px solid var(--border-dark);
    padding-left: 16px;
  }

  .problem-alert-box {
    background: rgba(17, 24, 39, 0.02);
    border: 1px solid var(--border-color);
    padding: 20px;
    border-radius: 4px;
  }

  /* Architectural Framework */
  .framework-section {
    background: var(--bg-soft);
    padding: 32px 20px;
    border-radius: 8px;
    border: 1px solid var(--border-color);
  }

  .framework-header {
    margin-bottom: 32px;
  }

  .framework-grid {
    display: flex;
    flex-direction: column;
    gap: 28px;
  }

  .framework-item {
    display: flex;
    gap: 16px;
  }

  .framework-index {
    font-family: var(--font-sans);
    font-weight: 500;
    font-size: 28px;
    line-height: 1;
    opacity: 0.3;
  }

  /* Benefits Grid Layout */
  .benefits-section {
    border-top: 1px solid var(--border-color);
    padding-top: 48px;
  }

  .benefits-grid {
    display: flex;
    flex-direction: column;
    gap: 16px;
  }

  .benefit-card {
    border: 1px solid var(--border-color);
    padding: 24px;
    border-radius: 6px;
  }

  /* Process Timeline Section */
  .process-section {
    display: flex;
    flex-direction: column;
    gap: 32px;
  }

  .linear-timeline {
    position: relative;
    padding-left: 24px;
  }

  .linear-timeline::before {
    content: '';
    position: absolute;
    left: 0; top: 8px; bottom: 8px;
    width: 1px;
    background: var(--border-color);
  }

  .linear-step-row {
    position: relative;
    padding-bottom: 32px;
  }

  .linear-step-row:last-child {
    padding-bottom: 0;
  }

  .linear-step-row::before {
    content: '';
    position: absolute;
    left: -28px; top: 8px;
    width: 7px; height: 7px;
    border-radius: 50%;
    background: var(--bg-main);
    border: 2px solid var(--border-dark);
  }

  /* Claim and Manage Architecture */
  .claim-section {
    display: flex;
    flex-direction: column;
    gap: 32px;
    background: #111827;
    color: #FFFFFF;
    padding: 32px 20px;
    border-radius: 8px;
  }

  .claim-section h2, .claim-section h3 {
    color: #FFFFFF;
  }

  .claim-section p {
    color: #9CA3AF;
    font-size: 15px;
    margin-bottom: 24px;
  }

  .claim-features {
    border-top: 1px solid #374151;
    padding-top: 24px;
  }

  /* Pricing Grid Architecture */
  .pricing-header {
    text-align: center;
    margin-bottom: 32px;
  }

  .pricing-three-card {
    display: flex;
    flex-direction: column;
    gap: 16px;
  }

  .price-tier-card {
    border: 1px solid var(--border-color);
    padding: 32px 20px;
    border-radius: 6px;
    background: var(--bg-main);
  }

  .price-tier-card h3 {
    font-size: 26px;
    margin-bottom: 12px;
  }

  /* CLICK-TO-OPEN FAQ ACCORDION */
  .faq-section {
    display: flex;
    flex-direction: column;
    gap: 32px;
  }

  .faq-wrapper-list {
    display: flex;
    flex-direction: column;
    gap: 12px;
  }

  .faq-node-item {
    border-bottom: 1px solid var(--border-color);
    padding-bottom: 8px;
  }

  .faq-node-item summary {
    list-style: none;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-family: var(--font-sans);
    font-weight: 600;
    font-size: 17px;
    padding: 14px 0;
    cursor: pointer;
    user-select: none;
    color: var(--text-primary);
  }

  .faq-node-item summary::-webkit-details-marker {
    display: none;
  }

  .faq-node-item summary::after {
    content: '+';
    font-size: 18px;
    font-weight: 400;
    transition: transform 0.2s ease;
  }

  .faq-node-item[open] summary::after {
    transform: rotate(45deg);
  }

  .faq-node-item p {
    padding: 4px 0 16px 0;
    font-size: 14px;
  }

  /* Conversion Segment Block */
  .conversion-panel-block {
    background: var(--bg-soft);
    border: 1px solid var(--border-color);
    padding: 40px 20px;
    text-align: center;
    border-radius: 6px;
  }

  .conversion-panel-block h2 {
    font-size: 32px;
    margin-bottom: 16px;
  }

  .tags-row-flex {
    display: flex;
    gap: 6px;
    justify-content: center;
    margin-bottom: 24px;
    flex-wrap: wrap;
  }

  .tag-node-chip {
    font-size: 11px;
    font-weight: 500;
    color: var(--text-muted);
    background: var(--bg-main);
    border: 1px solid var(--border-color);
    padding: 4px 10px;
    border-radius: 4px;
  }

  .conversion-panel-block p {
    margin-bottom: 24px;
  }
</style>

<div class="si-artists-mobile">

  <!-- HERO SECTION WITH UPDATED HERO IMAGE -->
  <header class="mobile-hero">
    <div class="hero-content">
      <span class="eyebrow">Data Authority Architecture</span>
      <h1>Google Knowledge Panel for Artists</h1>
      <p class="lead">Build a stronger digital identity with a professionally optimized Google Knowledge Panel for Artists. At StatusIndex, we help musicians, performers, visual artists, and independent creators build, optimize, and manage their presence in Google's Knowledge Graph. Unlike traditional SEO agencies, we focus on entity recognition that helps Google understand who you are and display accurate information in Search.</p>
      <a class="btn" href="/eligibility">Check Your Eligibility Today</a>
    </div>
    
    <div class="hero-image-container">
      <img class="hero-img" 
           src="https://framerusercontent.com/images/PmHEo5mTrqoySD67cwLj8JGLb4.webp?width=600&height=400" 
           width="600" 
           height="400" 
           fetchpriority="high" 
           loading="eager" 
           alt="Google Knowledge Panel for Artists">
    </div>
  </header>

  <!-- WHY MANY ARTISTS NEVER RECEIVE A PANEL -->
  <section class="problem-section">
    <div>
      <span class="eyebrow">The Index Imperfection</span>
      <h2>Why Many Artists Never Receive a Google Knowledge Panel</h2>
    </div>
    <div class="problem-matrix">
      <div class="problem-node-box">
        <h3>Asset Dispersion</h3>
        <p>Having talent, a website, or active social media profiles does not earn you a Google Knowledge Panel automatically.</p>
      </div>
      <div class="problem-node-box">
        <h3>Signal Fragmentation</h3>
        <p>Google relies on consistent entity signals, trusted sources, and a well-connected digital footprint before verification.</p>
      </div>
      <div class="problem-alert-box">
        <p>Many artists struggle with inconsistent names across platforms, fragmented online profiles, missing structured data, limited press coverage, and weak authority signals. Without these trusted connections, Google's Knowledge Graph cannot confidently verify your identity, making your branded search presence incomplete even if you have an established audience.</p>
      </div>
    </div>
  </section>

  <!-- HOW STATUSINDEX BUILDS ENTITIES -->
  <section class="framework-section">
    <div class="framework-header">
      <span class="eyebrow">The System Blueprint</span>
      <h2>How StatusIndex Builds Google-Recognized Artist Entities</h2>
      <p style="margin-top: 12px;">At StatusIndex, we use an entity-first framework designed to strengthen your digital identity rather than simply improve keyword rankings. Our goal is to help Google confidently recognize you as an artist by creating consistent, trustworthy entity relationships across the web.</p>
    </div>
    <div class="framework-grid">
      <div class="framework-item">
        <div class="framework-index">01</div>
        <div class="framework-body">
          <h3>Footprint Audit</h3>
          <p>Our process begins by auditing your current digital footprint and identifying entity gaps across platforms.</p>
        </div>
      </div>
      <div class="framework-item">
        <div class="framework-index">02</div>
        <div class="framework-body">
          <h3>Data Alignment</h3>
          <p>We align your official website, implement Schema.org structured data, and stabilize asset provenance metrics.</p>
        </div>
      </div>
      <div class="framework-item">
        <div class="framework-index">03</div>
        <div class="framework-body">
          <h3>Authority Routing</h3>
          <p>We optimize Wikidata and MusicBrainz profiles where applicable while strengthening authoritative citations across references.</p>
        </div>
      </div>
    </div>
  </section>

  <!-- BENEFITS OF AN OPTIMIZED PANEL -->
  <section class="benefits-section">
    <span class="eyebrow">Strategic Value</span>
    <h2>Benefits of an Optimized Google Knowledge Panel</h2>
    <div class="benefits-grid">
      <div class="benefit-card">
        <h3>Search Credibility</h3>
        <p>Build instant credibility in Google Search with a unified dashboard showcasing your verified artistic career data.</p>
      </div>
      <div class="benefit-card">
        <h3>Brand Authority</h3>
        <p>Strengthen your artist brand and online authority by maintaining structural control over entity graph properties.</p>
      </div>
      <div class="benefit-card">
        <h3>AI &amp; Search Visibility</h3>
        <p>Improve zero-click and AI engine search visibility, making it effortless for generation models to extract your data.</p>
      </div>
      <div class="benefit-card">
        <h3>Audience Discovery</h3>
        <p>Help fans easily discover your music, artwork, or performances directly from global search results matrices.</p>
      </div>
      <div class="benefit-card">
        <h3>Global Consistency</h3>
        <p>Keep your official records, social graph platforms, and biographical information completely consistent across the web.</p>
      </div>
      <div class="benefit-card">
        <h3>Entity Architecture</h3>
        <p>Create a stronger foundation for long-term entity recognition that scales as your creative body of work expands.</p>
      </div>
    </div>
  </section>

  <!-- THE STEP-BY-STEP PROCESS -->
  <section class="process-section">
    <div>
      <span class="eyebrow">Deployment Lifecycle</span>
      <h2>Our Artist Knowledge Panel Process</h2>
      <p style="margin-top: 12px;">We follow a transparent, step-by-step process designed to strengthen your entity signals and improve your eligibility for a Google Knowledge Panel.</p>
    </div>
    <div class="linear-timeline">
      <div class="linear-step-row">
        <h3>1. Entity Audit</h3>
        <p>We analyze your digital footprint to identify missing signals, inconsistencies, and factors preventing entity recognition.</p>
      </div>
      <div class="linear-step-row">
        <h3>2. Entity Research</h3>
        <p>We review your online presence, trusted sources, and artist profiles to understand how Google currently interprets your identity.</p>
      </div>
      <div class="linear-step-row">
        <h3>3. Schema Alignment</h3>
        <p>We implement structured data that helps Google's systems connect your website with your verified digital identity.</p>
      </div>
      <div class="linear-step-row">
        <h3>4. Authority Building</h3>
        <p>We strengthen trusted references through authoritative citations, artist databases, press mentions, and consistent entity information.</p>
      </div>
      <div class="linear-step-row">
        <h3>5. Knowledge Graph Optimization</h3>
        <p>We improve the signals Google uses to connect your official website, social profiles, and authoritative sources within the Knowledge Graph.</p>
      </div>
      <div class="linear-step-row">
        <h3>6. Monitoring &amp; Management</h3>
        <p>As your career grows, we help keep your entity information accurate, consistent, and aligned across trusted platforms.</p>
      </div>
    </div>
  </section>

  <!-- CLAIM, VERIFY, AND MANAGE SECTION -->
  <section class="claim-section">
    <div>
      <span class="eyebrow" style="color:#9CA3AF;">Lifecycle Ownership</span>
      <h2>Claim, Verify and Manage Your Artist Knowledge Panel</h2>
      <p>Once Google generates your Knowledge Panel, maintaining accurate information becomes just as important as earning it. StatusIndex helps artists navigate the official verification process, claim eligible panels, and keep their information up to date.</p>
      <a class="btn" style="background:#FFFFFF; color:#111827;" href="/eligibility">Get System Assistance</a>
    </div>
    <div class="claim-features">
      <div>
        <h3 style="margin-bottom:6px;">Panel Management</h3>
        <p style="font-size:14px; margin:0;">Our services include identity verification guidance, correcting inaccurate details, updating images, official links, and maintaining consistent entity signals as your career evolves.</p>
      </div>
    </div>
  </section>

  <!-- PRICING OPTIONS -->
  <section>
    <div class="pricing-header">
      <span class="eyebrow">Investment Options</span>
      <h2>Transparent Artist Knowledge Panel Pricing</h2>
      <p style="margin-top: 12px;">Choose the service that matches your current entity architecture needs.</p>
    </div>
    <div class="pricing-three-card">
      <div class="price-tier-card">
        <div>
          <h3>Entity Audit &amp; Strategy</h3>
          <p>A complete review of your digital footprint with a personalized action plan to improve your Knowledge Panel eligibility.</p>
        </div>
        <a class="btn btn-outline" style="margin-top:24px;" href="/pricing">View Pricing</a>
      </div>
      <div class="price-tier-card" style="background:var(--bg-soft);">
        <div>
          <h3>Build &amp; Optimization</h3>
          <p>Implementation of structured data, entity alignment, authoritative citations, and Google Knowledge Graph optimization.</p>
        </div>
        <a class="btn" style="margin-top:24px;" href="/pricing">View Pricing</a>
      </div>
      <div class="price-tier-card">
        <div>
          <h3>Panel Management</h3>
          <p>Ongoing monitoring, updates, corrections, and optimization to keep your Knowledge Panel accurate as your career grows.</p>
        </div>
        <a class="btn btn-outline" style="margin-top:24px;" href="/pricing">View Pricing</a>
      </div>
    </div>
  </section>

  <!-- FAQS INTERACTIVE ACCORDION -->
  <section class="faq-section">
    <div>
      <span class="eyebrow">Clear Diagnostics</span>
      <h2>Frequently Asked Questions</h2>
    </div>
    <div class="faq-wrapper-list">
      <details class="faq-node-item">
        <summary>Can I create a Google Knowledge Panel myself?</summary>
        <p>No. Google generates Knowledge Panels automatically after recognizing strong and consistent entity signals across authorized networks.</p>
      </details>
      <details class="faq-node-item">
        <summary>How long does the process take?</summary>
        <p>Timelines vary based on your current digital footprint, but many artists begin strengthening their entity presence within 60–120 days.</p>
      </details>
      <details class="faq-node-item">
        <summary>Do independent artists qualify?</summary>
        <p>Yes. Independent artists can become eligible by building authority, maintaining consistent information, and strengthening trusted entity signals.</p>
      </details>
      <details class="faq-node-item">
        <summary>Is MusicBrainz or Wikidata required?</summary>
        <p>Not always, but they are valuable authoritative sources that can reinforce Google's understanding of music-related entities.</p>
      </details>
      <details class="faq-node-item">
        <summary>Can I claim my Knowledge Panel?</summary>
        <p>Yes, but only after Google has generated one. Verified representatives can claim eligible panels through Google's official verification process.</p>
      </details>
      <details class="faq-node-item">
        <summary>Can incorrect information be fixed?</summary>
        <p>Yes. Once verified, eligible artists can suggest edits, and StatusIndex helps manage updates and maintain accurate information over time.</p>
      </details>
    </div>
  </section>

  <!-- CONVERSION BLOCK -->
  <footer class="conversion-panel-block">
    <h2>Get Your Free Artist Entity Audit</h2>
    <div class="tags-row-flex">
      <span class="tag-node-chip">One Audit</span>
      <span class="tag-node-chip">No Obligation</span>
      <span class="tag-node-chip">Actionable Insights</span>
    </div>
    <p>Find out what's preventing your Google Knowledge Panel for Artist from appearing. We'll review your digital identity, identify entity gaps, and provide a clear roadmap to strengthen your Google Knowledge Graph presence.</p>
    <a class="btn" href="/contact">Contact Us</a>
  </footer>

</div>`}},children:o(A,{height:`100%`,html:`<meta name="viewport" content="width=device-width, initial-scale=1.0">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=Inter+Display:wght@400;500;600&display=swap" rel="stylesheet">

<style>
  :root {
    --bg-main: #FFFFFF;
    --bg-soft: #F8F9FA;
    --border-color: #E5E7EB;
    --border-dark: #111827;
    --text-primary: #111827;
    --text-muted: #4B5563;
    --font-serif: 'Instrument Serif', Georgia, serif;
    --font-sans: 'Inter Display', -apple-system, BlinkMacSystemFont, sans-serif;
  }

  .si-artists-desktop * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  .si-artists-desktop {
    background: var(--bg-main);
    color: var(--text-primary);
    font-family: var(--font-sans);
    -webkit-font-smoothing: antialiased;
    max-width: 1200px;
    margin: 0 auto;
    padding: 60px 24px;
    display: flex;
    flex-direction: column;
    gap: 100px;
  }

  /* Typography Base - Uniformed to Sans-Serif except H1 */
  h1 {
    font-family: var(--font-serif);
    font-weight: 400;
    line-height: 1.1;
    letter-spacing: -0.02em;
    color: var(--text-primary);
  }

  h2, h3, h4 {
    font-family: var(--font-sans);
    font-weight: 600;
    line-height: 1.2;
    letter-spacing: -0.01em;
    color: var(--text-primary);
  }

  p {
    font-family: var(--font-sans);
    font-weight: 400;
    font-size: 16px;
    line-height: 1.65;
    color: var(--text-muted);
  }

  .eyebrow {
    font-family: var(--font-sans);
    font-size: 12px;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.15em;
    color: var(--text-primary);
    opacity: 0.6;
    margin-bottom: 20px;
    display: block;
  }

  .btn {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: 18px 36px;
    background: var(--border-dark);
    color: var(--bg-main);
    border: 1px solid var(--border-dark);
    border-radius: 4px;
    font-weight: 500;
    font-size: 15px;
    text-decoration: none;
    transition: background 0.2s ease, transform 0.2s ease;
    cursor: pointer;
  }

  .btn:hover {
    background: #1f2937;
  }

  .btn-outline {
    background: transparent;
    color: var(--text-primary);
    border: 1px solid var(--border-color);
  }

  .btn-outline:hover {
    background: var(--bg-soft);
  }

  /* HERO SECTION WITH EXPANDED GRID PROPORTIONS */
  .split-hero {
    display: grid;
    grid-template-columns: 1fr 1fr; /* Equal distribution for larger picture footprint */
    gap: 64px;
    align-items: center;
    border-bottom: 1px solid var(--border-color);
    padding-bottom: 80px;
  }

  .hero-content h1 {
    font-size: 68px;
    margin-bottom: 24px;
    letter-spacing: -0.03em;
  }

  .hero-content .lead {
    font-size: 19px;
    line-height: 1.68;
    margin-bottom: 36px;
    color: var(--text-muted);
  }

  /* EXPANDED ANTI-GLITCH HERO IMAGE COMPONENT */
  .hero-image-container {
    width: 100%;
    background: var(--bg-soft);
    border-radius: 8px;
    overflow: hidden;
    border: 1px solid var(--border-color);
    display: flex;
    justify-content: center;
    align-items: center;
    aspect-ratio: 600 / 480; /* Scaled vertical aspect ratio for a larger picture surface */
    position: relative;
    transform: translateZ(0);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.03);
  }

  .hero-img {
    width: 100%;
    height: 100%;
    display: block;
    object-fit: cover;
    opacity: 0;
    will-change: transform, opacity;
    transform: translateZ(0);
    animation: smoothRenderReveal 0.35s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
  }

  @keyframes smoothRenderReveal {
    from { opacity: 0; }
    to { opacity: 1; }
  }

  /* Core Problems Layout */
  .problem-section {
    display: grid;
    grid-template-columns: 0.8fr 1.2fr;
    gap: 48px;
  }

  .problem-section h2 {
    font-size: 48px;
  }

  .problem-matrix {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 24px;
  }

  .problem-node-box {
    background: var(--bg-main);
    border-left: 2px solid var(--border-dark);
    padding-left: 20px;
  }

  .problem-node-box h3 {
    font-size: 24px;
    margin-bottom: 8px;
  }

  .problem-alert-box {
    grid-column: span 2;
    background: rgba(17, 24, 39, 0.02);
    border: 1px solid var(--border-color);
    padding: 24px;
    border-radius: 4px;
    margin-top: 16px;
  }

  /* Architectural Framework */
  .framework-section {
    background: var(--bg-soft);
    padding: 60px 40px;
    border-radius: 8px;
    border: 1px solid var(--border-color);
  }

  .framework-header {
    max-width: 700px;
    margin-bottom: 48px;
  }

  .framework-header h2 {
    font-size: 48px;
    margin-bottom: 16px;
  }

  .framework-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 32px;
  }

  .framework-item {
    display: flex;
    gap: 20px;
  }

  .framework-index {
    font-family: var(--font-sans);
    font-weight: 500;
    font-size: 36px;
    line-height: 1;
    opacity: 0.3;
  }

  .framework-body h3 {
    font-size: 26px;
    margin-bottom: 10px;
  }

  /* Benefits Grid Layout */
  .benefits-section {
    border-top: 1px solid var(--border-color);
    padding-top: 80px;
  }

  .benefits-section h2 {
    font-size: 48px;
    margin-bottom: 48px;
  }

  .benefits-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 24px;
  }

  .benefit-card {
    border: 1px solid var(--border-color);
    padding: 32px;
    border-radius: 6px;
    transition: border-color 0.2s ease;
  }

  .benefit-card:hover {
    border-color: var(--border-dark);
  }

  .benefit-card h3 {
    font-size: 24px;
    margin-bottom: 12px;
  }

  /* Process Timeline Section */
  .process-section {
    display: grid;
    grid-template-columns: 0.8fr 1.2fr;
    gap: 48px;
  }

  .process-section h2 {
    font-size: 48px;
  }

  .linear-timeline {
    position: relative;
    padding-left: 32px;
  }

  .linear-timeline::before {
    content: '';
    position: absolute;
    left: 0; top: 12px; bottom: 12px;
    width: 1px;
    background: var(--border-color);
  }

  .linear-step-row {
    position: relative;
    padding-bottom: 40px;
  }

  .linear-step-row:last-child {
    padding-bottom: 0;
  }

  .linear-step-row::before {
    content: '';
    position: absolute;
    left: -36px; top: 10px;
    width: 9px; height: 9px;
    border-radius: 50%;
    background: var(--bg-main);
    border: 2px solid var(--border-dark);
  }

  .linear-step-row h3 {
    font-size: 24px;
    margin-bottom: 8px;
  }

  /* Claim and Manage Architecture */
  .claim-section {
    display: grid;
    grid-template-columns: 1.1fr 0.9fr;
    gap: 64px;
    background: #111827;
    color: #FFFFFF;
    padding: 60px;
    border-radius: 8px;
  }

  .claim-section h2, .claim-section h3 {
    color: #FFFFFF;
  }

  .claim-section h2 {
    font-size: 48px;
    margin-bottom: 20px;
  }

  .claim-section p {
    color: #9CA3AF;
    font-size: 17px;
    margin-bottom: 28px;
  }

  .claim-features {
    display: flex;
    flex-direction: column;
    gap: 20px;
    border-left: 1px solid #374151;
    padding-left: 40px;
  }

  /* Pricing Grid Architecture */
  .pricing-header {
    text-align: center;
    max-width: 600px;
    margin: 0 auto 48px;
  }

  .pricing-header h2 {
    font-size: 48px;
    margin-bottom: 16px;
  }

  .pricing-three-card {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 24px;
  }

  .price-tier-card {
    border: 1px solid var(--border-color);
    padding: 40px 32px;
    border-radius: 6px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .price-tier-card h3 {
    font-size: 32px;
    margin-bottom: 16px;
  }

  /* CLICK-TO-OPEN FAQ ACCORDION */
  .faq-section {
    display: grid;
    grid-template-columns: 0.8fr 1.2fr;
    gap: 48px;
  }

  .faq-section h2 {
    font-size: 48px;
  }

  .faq-wrapper-list {
    display: flex;
    flex-direction: column;
    gap: 16px;
  }

  .faq-node-item {
    border-bottom: 1px solid var(--border-color);
    padding-bottom: 8px;
  }

  .faq-node-item summary {
    list-style: none;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-family: var(--font-sans);
    font-weight: 600;
    font-size: 24px;
    padding: 16px 0;
    cursor: pointer;
    user-select: none;
    color: var(--text-primary);
  }

  .faq-node-item summary::-webkit-details-marker {
    display: none;
  }

  .faq-node-item summary::after {
    content: '+';
    font-family: var(--font-sans);
    font-size: 20px;
    font-weight: 400;
    transition: transform 0.2s ease;
  }

  .faq-node-item[open] summary::after {
    transform: rotate(45deg);
  }

  .faq-node-item p {
    padding: 4px 0 20px 0;
    animation: fadeInReveal 0.25s ease-out;
  }

  @keyframes fadeInReveal {
    from { opacity: 0; transform: translateY(-4px); }
    to { opacity: 1; transform: translateY(0); }
  }

  /* Conversion Segment Block */
  .conversion-panel-block {
    background: var(--bg-soft);
    border: 1px solid var(--border-color);
    padding: 60px;
    text-align: center;
    border-radius: 6px;
  }

  .conversion-panel-block h2 {
    font-size: 56px;
    margin-bottom: 20px;
  }

  .tags-row-flex {
    display: flex;
    gap: 8px;
    justify-content: center;
    margin-bottom: 32px;
  }

  .tag-node-chip {
    font-size: 12px;
    font-weight: 500;
    color: var(--text-muted);
    background: var(--bg-main);
    border: 1px solid var(--border-color);
    padding: 6px 14px;
    border-radius: 4px;
  }

  .conversion-panel-block p {
    max-width: 600px;
    margin: 0 auto 32px;
    font-size: 17px;
  }
</style>

<div class="si-artists-desktop">

  <!-- HERO SECTION WITH SCALED HERO IMAGE -->
  <header class="split-hero">
    <div class="hero-content">
      <span class="eyebrow">Data Authority Architecture</span>
      <h1>Google Knowledge Panel for Artists</h1>
      <p class="lead">Build a stronger digital identity with a professionally optimized Google Knowledge Panel for Artists. At StatusIndex, we help musicians, performers, visual artists, and independent creators build, optimize, and manage their presence in Google's Knowledge Graph. Unlike traditional SEO agencies, we focus on entity recognition that helps Google understand who you are and display accurate information in Search.</p>
      <a class="btn" href="/eligibility">Check Your Eligibility Today</a>
    </div>
    
    <div class="hero-image-container">
      <img class="hero-img" 
           src="https://framerusercontent.com/images/PmHEo5mTrqoySD67cwLj8JGLb4.webp?width=600&height=400" 
           width="600" 
           height="400" 
           fetchpriority="high" 
           loading="eager" 
           alt="Google Knowledge Panel for Artists">
    </div>
  </header>

  <!-- WHY MANY ARTISTS NEVER RECEIVE A PANEL -->
  <section class="problem-section">
    <div>
      <span class="eyebrow">The Index Imperfection</span>
      <h2>Why Many Artists Never Receive a Google Knowledge Panel</h2>
    </div>
    <div class="problem-matrix">
      <div class="problem-node-box">
        <h3>Asset Dispersion</h3>
        <p>Having talent, a website, or active social media profiles does not earn you a Google Knowledge Panel automatically.</p>
      </div>
      <div class="problem-node-box">
        <h3>Signal Fragmentation</h3>
        <p>Google relies on consistent entity signals, trusted sources, and a well-connected digital footprint before verification.</p>
      </div>
      <div class="problem-alert-box">
        <p>Many artists struggle with inconsistent names across platforms, fragmented online profiles, missing structured data, limited press coverage, and weak authority signals. Without these trusted connections, Google's Knowledge Graph cannot confidently verify your identity, making your branded search presence incomplete even if you have an established audience.</p>
      </div>
    </div>
  </section>

  <!-- HOW STATUSINDEX BUILDS ENTITIES -->
  <section class="framework-section">
    <div class="framework-header">
      <span class="eyebrow">The System Blueprint</span>
      <h2>How StatusIndex Builds Google-Recognized Artist Entities</h2>
      <p>At StatusIndex, we use an entity-first framework designed to strengthen your digital identity rather than simply improve keyword rankings. Our goal is to help Google confidently recognize you as an artist by creating consistent, trustworthy entity relationships across the web.</p>
    </div>
    <div class="framework-grid">
      <div class="framework-item">
        <div class="framework-index">01</div>
        <div class="framework-body">
          <h3>Footprint Audit</h3>
          <p>Our process begins by auditing your current digital footprint and identifying entity gaps across platforms.</p>
        </div>
      </div>
      <div class="framework-item">
        <div class="framework-index">02</div>
        <div class="framework-body">
          <h3>Data Alignment</h3>
          <p>We align your official website, implement Schema.org structured data, and stabilize asset provenance metrics.</p>
        </div>
      </div>
      <div class="framework-item">
        <div class="framework-index">03</div>
        <div class="framework-body">
          <h3>Authority Routing</h3>
          <p>We optimize Wikidata and MusicBrainz profiles where applicable while strengthening authoritative citations across references.</p>
        </div>
      </div>
    </div>
  </section>

  <!-- BENEFITS OF AN OPTIMIZED PANEL -->
  <section class="benefits-section">
    <span class="eyebrow">Strategic Value</span>
    <h2>Benefits of an Optimized Google Knowledge Panel</h2>
    <div class="benefits-grid">
      <div class="benefit-card">
        <h3>Search Credibility</h3>
        <p>Build instant credibility in Google Search with a unified dashboard showcasing your verified artistic career data.</p>
      </div>
      <div class="benefit-card">
        <h3>Brand Authority</h3>
        <p>Strengthen your artist brand and online authority by maintaining structural control over entity graph properties.</p>
      </div>
      <div class="benefit-card">
        <h3>AI &amp; Search Visibility</h3>
        <p>Improve zero-click and AI engine search visibility, making it effortless for generation models to extract your data.</p>
      </div>
      <div class="benefit-card">
        <h3>Audience Discovery</h3>
        <p>Help fans easily discover your music, artwork, or performances directly from global search results matrices.</p>
      </div>
      <div class="benefit-card">
        <h3>Global Consistency</h3>
        <p>Keep your official records, social graph platforms, and biographical information completely consistent across the web.</p>
      </div>
      <div class="benefit-card">
        <h3>Entity Architecture</h3>
        <p>Create a stronger foundation for long-term entity recognition that scales as your creative body of work expands.</p>
      </div>
    </div>
  </section>

  <!-- THE STEP-BY-STEP PROCESS -->
  <section class="process-section">
    <div>
      <span class="eyebrow">Deployment Lifecycle</span>
      <h2>Our Artist Knowledge Panel Process</h2>
      <p>We follow a transparent, step-by-step process designed to strengthen your entity signals and improve your eligibility for a Google Knowledge Panel.</p>
    </div>
    <div class="linear-timeline">
      <div class="linear-step-row">
        <h3>1. Entity Audit</h3>
        <p>We analyze your digital footprint to identify missing signals, inconsistencies, and factors preventing entity recognition.</p>
      </div>
      <div class="linear-step-row">
        <h3>2. Entity Research</h3>
        <p>We review your online presence, trusted sources, and artist profiles to understand how Google currently interprets your identity.</p>
      </div>
      <div class="linear-step-row">
        <h3>3. Schema Alignment</h3>
        <p>We implement structured data that helps Google's systems connect your website with your verified digital identity.</p>
      </div>
      <div class="linear-step-row">
        <h3>4. Authority Building</h3>
        <p>We strengthen trusted references through authoritative citations, artist databases, press mentions, and consistent entity information.</p>
      </div>
      <div class="linear-step-row">
        <h3>5. Knowledge Graph Optimization</h3>
        <p>We improve the signals Google uses to connect your official website, social profiles, and authoritative sources within the Knowledge Graph.</p>
      </div>
      <div class="linear-step-row">
        <h3>6. Monitoring &amp; Management</h3>
        <p>As your career grows, we help keep your entity information accurate, consistent, and aligned across trusted platforms.</p>
      </div>
    </div>
  </section>

  <!-- CLAIM, VERIFY, AND MANAGE SECTION -->
  <section class="claim-section">
    <div>
      <span class="eyebrow" style="color:#9CA3AF;">Lifecycle Ownership</span>
      <h2>Claim, Verify and Manage Your Artist Knowledge Panel</h2>
      <p>Once Google generates your Knowledge Panel, maintaining accurate information becomes just as important as earning it. StatusIndex helps artists navigate the official verification process, claim eligible panels, and keep their information up to date.</p>
      <a class="btn" style="background:#FFFFFF; color:#111827;" href="/eligibility">Get System Assistance</a>
    </div>
    <div class="claim-features">
      <div>
        <h3 style="font-size:22px; margin-bottom:6px;">Panel Management</h3>
        <p style="font-size:15px; margin:0;">Our services include identity verification guidance, correcting inaccurate details, updating images, official links, and maintaining consistent entity signals as your career evolves.</p>
      </div>
    </div>
  </section>

  <!-- PRICING OPTIONS -->
  <section>
    <div class="pricing-header">
      <span class="eyebrow">Investment Options</span>
      <h2>Transparent Artist Knowledge Panel Pricing</h2>
      <p>Choose the service that matches your current entity architecture needs.</p>
    </div>
    <div class="pricing-three-card">
      <div class="price-tier-card">
        <div>
          <h3>Entity Audit &amp; Strategy</h3>
          <p>A complete review of your digital footprint with a personalized action plan to improve your Knowledge Panel eligibility.</p>
        </div>
        <a class="btn btn-outline" style="margin-top:32px;" href="/pricing">View Pricing</a>
      </div>
      <div class="price-tier-card" style="background:var(--bg-soft);">
        <div>
          <h3>Build &amp; Optimization</h3>
          <p>Implementation of structured data, entity alignment, authoritative citations, and Google Knowledge Graph optimization.</p>
        </div>
        <a class="btn" style="margin-top:32px;" href="/pricing">View Pricing</a>
      </div>
      <div class="price-tier-card">
        <div>
          <h3>Panel Management</h3>
          <p>Ongoing monitoring, updates, corrections, and optimization to keep your Knowledge Panel accurate as your career grows.</p>
        </div>
        <a class="btn btn-outline" style="margin-top:32px;" href="/pricing">View Pricing</a>
      </div>
    </div>
  </section>

  <!-- FAQS INTERACTIVE ACCORDION -->
  <section class="faq-section">
    <div>
      <span class="eyebrow">Clear Diagnostics</span>
      <h2>Frequently Asked Questions</h2>
    </div>
    <div class="faq-wrapper-list">
      <details class="faq-node-item">
        <summary>Can I create a Google Knowledge Panel myself?</summary>
        <p>No. Google generates Knowledge Panels automatically after recognizing strong and consistent entity signals across authorized networks.</p>
      </details>
      <details class="faq-node-item">
        <summary>How long does the process take?</summary>
        <p>Timelines vary based on your current digital footprint, but many artists begin strengthening their entity presence within 60–120 days.</p>
      </details>
      <details class="faq-node-item">
        <summary>Do independent artists qualify?</summary>
        <p>Yes. Independent artists can become eligible by building authority, maintaining consistent information, and strengthening trusted entity signals.</p>
      </details>
      <details class="faq-node-item">
        <summary>Is MusicBrainz or Wikidata required?</summary>
        <p>Not always, but they are valuable authoritative sources that can reinforce Google's understanding of music-related entities.</p>
      </details>
      <details class="faq-node-item">
        <summary>Can I claim my Knowledge Panel?</summary>
        <p>Yes, but only after Google has generated one. Verified representatives can claim eligible panels through Google's official verification process.</p>
      </details>
      <details class="faq-node-item">
        <summary>Can incorrect information be fixed?</summary>
        <p>Yes. Once verified, eligible artists can suggest edits, and StatusIndex helps manage updates and maintain accurate information over time.</p>
      </details>
    </div>
  </section>

  <!-- CONVERSION BLOCK -->
  <footer class="conversion-panel-block">
    <h2>Get Your Free Artist Entity Audit</h2>
    <div class="tags-row-flex">
      <span class="tag-node-chip">One Audit</span>
      <span class="tag-node-chip">No Obligation</span>
      <span class="tag-node-chip">Actionable Insights</span>
    </div>
    <p>Find out what's preventing your Google Knowledge Panel for Artist from appearing. We'll review your digital identity, identify entity gaps, and provide a clear roadmap to strengthen your Google Knowledge Graph presence.</p>
    <a class="btn" href="/eligibility">Contact Us</a>
  </footer>

</div>`,id:`R_ZyevHyF`,layoutId:`R_ZyevHyF`,radius:`0px`,style:{height:`100%`,width:`100%`},type:`html`,url:``,width:`100%`,zoom:1})})})})}),o(`div`,{id:`overlay`})]})})}),[`.framer-X6TW4.framer-p3oq33, .framer-X6TW4 .framer-p3oq33 { display: block; }`,`.framer-X6TW4.framer-7gu3ih { align-content: center; align-items: center; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 1200px; }`,`.framer-X6TW4 .framer-9g18ng-container { flex: none; height: 6150px; position: relative; width: 1200px; }`,`@media (min-width: 810px) and (max-width: 1199.98px) { .framer-X6TW4.framer-7gu3ih { width: 810px; } .framer-X6TW4 .framer-9g18ng-container { height: 7450px; width: 100%; }}`,`@media (max-width: 809.98px) { .framer-X6TW4.framer-7gu3ih { width: 390px; } .framer-X6TW4 .framer-9g18ng-container { height: 7550px; width: 100%; }}`],`framer-X6TW4`),H.displayName=`Artists`,H.defaultProps={height:6668,width:1200},h(H,[{explicitInter:!0,fonts:[]},...N],{supportsExplicitInterCodegen:!0}),U={exports:{queryParamNames:{type:`variable`,annotations:{framerContractVersion:`1`}},default:{type:`reactComponent`,name:`FramerwxCCE8cdd`,slots:[],annotations:{framerIntrinsicHeight:`6668`,framerResponsiveScreen:`true`,framerScrollSections:`false`,framerIntrinsicWidth:`1200`,framerColorSyntax:`true`,framerLayoutTemplateFlowEffect:`true`,framerDisplayContentsDiv:`false`,framerAcceptsLayoutTemplate:`true`,framerCanvasComponentVariantDetails:`{"propertyName":"variant","data":{"default":{"layout":["fixed","auto"]},"ZCSBptmmD":{"layout":["fixed","auto"]},"sDd3SWqQr":{"layout":["fixed","auto"]}}}`,framerComponentViewportWidth:`true`,framerContractVersion:`1`,framerImmutableVariables:`true`,framerAutoSizeImages:`true`}},Props:{type:`tsType`,annotations:{framerContractVersion:`1`}},__FramerMetadata__:{type:`variable`}}}}))();export{U as __FramerMetadata__,H as default,F as queryParamNames};
//# sourceMappingURL=um6IlQ2f9Xd0OiFHpumBQqEaGn1vV9cyrnvzu_cchUE.CH4nnraE.mjs.map