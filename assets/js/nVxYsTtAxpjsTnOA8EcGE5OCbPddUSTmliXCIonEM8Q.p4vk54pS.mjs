import{t as e}from"./rolldown-runtime.Dh6celcD.mjs";import{M as t,T as n,b as r,j as i,k as a,l as o,s,u as c,v as l}from"./react.BcaIDK9K.mjs";import{S as u,a as d,r as f,t as p}from"./motion.BcpjdyXO.mjs";import{L as m,T as h,W as g,a as _,at as v,i as y,k as b,l as x,lt as S,nt as C,ot as w,st as T,ut as E,y as D,yt as O}from"./framer.B4AXX-9p.mjs";import{n as k,t as A}from"./Embed.Cc2crdEH.mjs";import j,{t as M}from"./XieeqsgnI9VY9DoGtU5hkyMkbOXiZoopOk3nhzcF8PI.2tYA17Zi.mjs";var N,P,F,I,L,R,z,B,V,H,U;e((()=>{s(),g(),p(),n(),k(),M(),N=m(A),P={bWYRdQW1n:`(max-width: 809.98px)`,Ntwl7Qbhm:`(min-width: 1200px)`,Xo063sQsK:`(min-width: 810px) and (max-width: 1199.98px)`},F=[],I=`framer-xIhyI`,L={bWYRdQW1n:`framer-v-1i1xe4w`,Ntwl7Qbhm:`framer-v-i039l3`,Xo063sQsK:`framer-v-1sznkuc`},R=(e,t,n)=>e&&t?`position`:n,z={"Companies & Brands Page":`Ntwl7Qbhm`,Phone:`bWYRdQW1n`,Tablet:`Xo063sQsK`},B=({value:e})=>T()?null:o(`style`,{dangerouslySetInnerHTML:{__html:e},"data-framer-html-style":``}),V=({height:e,id:t,width:n,...r})=>({...r,variant:z[r.variant]??r.variant??`Ntwl7Qbhm`}),H=O(l(function(e,n){let s=a(null),l=n??s,p=r(),{activeLocale:m,setLocale:h}=S();C();let{style:g,className:T,layoutId:O,variant:k,...M}=V(e);E(t(()=>j({},m),[m]));let[N,F]=w(k,P,!1),H=b(I),U=i(x)?.isLayoutTemplate,W=!!i(d)?.transition?.layout,G=R(U,W);return v({}),o(x.Provider,{value:{activeVariantId:N,humanReadableVariantMap:z,primaryVariantId:`Ntwl7Qbhm`,variantClassNames:L},children:c(f,{id:O??p,children:[o(B,{value:`html body { background: none; }`}),o(u.div,{...M,className:b(H,`framer-i039l3`,T),ref:l,style:{...g},children:o(y,{children:o(_,{className:`framer-xjms7v-container`,isModuleExternal:!0,layout:G,nodeId:`tWOYVgeVY`,scopeId:`Fk7pYoBXe`,children:o(D,{breakpoint:N,overrides:{bWYRdQW1n:{html:`<meta name="viewport" content="width=device-width, initial-scale=1.0">
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

  .si-brands-mobile * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  .si-brands-mobile {
    background: var(--bg-main);
    color: var(--text-primary);
    font-family: var(--font-sans);
    -webkit-font-smoothing: antialiased;
    width: 100%;
    max-width: 480px; 
    margin: 0 auto;
    padding: 32px 16px;
    display: flex;
    flex-direction: column;
    gap: 64px; 
  }

  /* Typography Core */
  h1 {
    font-family: var(--font-serif);
    font-weight: 400;
    line-height: 1.15;
    letter-spacing: -0.02em;
    color: var(--text-primary);
  }

  h2 {
    font-family: var(--font-sans);
    font-weight: 600;
    line-height: 1.25;
    letter-spacing: -0.01em;
    color: var(--text-primary);
    font-size: 28px; 
  }

  h3 {
    font-family: var(--font-sans);
    font-weight: 600;
    line-height: 1.3;
    color: var(--text-primary);
    font-size: 20px;
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
    width: 100%;
    padding: 16px 24px;
    background: var(--border-dark);
    color: var(--bg-main);
    border: 1px solid var(--border-dark);
    border-radius: 6px;
    font-weight: 500;
    font-size: 15px;
    text-decoration: none;
    transition: background 0.2s ease, transform 0.1s ease;
    cursor: pointer;
  }

  .btn:active {
    transform: scale(0.98);
  }

  .btn-outline {
    background: transparent;
    color: var(--text-primary);
    border: 1px solid var(--border-color);
  }

  /* HERO ARCHITECTURE - ANTI-GLITCH IMAGE COMPONENT */
  .split-hero {
    display: flex;
    flex-direction: column;
    gap: 32px;
    border-bottom: 1px solid var(--border-color);
    padding-bottom: 40px;
  }

  .hero-content h1 {
    font-size: 40px; 
    margin-bottom: 16px;
  }

  .hero-content .lead {
    font-size: 16px;
    line-height: 1.6;
    margin-bottom: 24px;
  }

  /* Rigid container to enforce strict hardware bounding boxes */
  .hero-image-container {
    width: 100%;
    order: -1; 
    background: var(--bg-soft);
    border-radius: 12px;
    overflow: hidden;
    border: 1px solid var(--border-color);
    display: flex;
    justify-content: center;
    align-items: center;
    aspect-ratio: 600 / 400; 
    position: relative;
    transform: translateZ(0); /* Forces GPU isolation layer */
  }

  /* Added custom opacity reveal script animation to combat asynchronous paint glitches */
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

  /* Vertical Structural Layouts */
  .problem-section, .process-section, .faq-section {
    display: flex;
    flex-direction: column;
    gap: 24px;
  }

  .problem-matrix {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }

  .problem-node-box {
    background: var(--bg-main);
    border-left: 3px solid var(--border-dark);
    padding-left: 16px;
  }

  .problem-node-box h3 {
    margin-bottom: 6px;
  }

  .problem-alert-box {
    background: rgba(17, 24, 39, 0.02);
    border: 1px solid var(--border-color);
    padding: 16px;
    border-radius: 6px;
  }

  /* Framework Container Layout */
  .framework-section {
    background: var(--bg-soft);
    padding: 32px 20px;
    border-radius: 12px;
    border: 1px solid var(--border-color);
    display: flex;
    flex-direction: column;
    gap: 28px;
  }

  .framework-header p {
    margin-top: 10px;
  }

  .framework-grid {
    display: flex;
    flex-direction: column;
    gap: 24px;
  }

  .framework-item {
    display: flex;
    gap: 16px;
  }

  .framework-index {
    font-family: var(--font-sans);
    font-weight: 600;
    font-size: 24px;
    line-height: 1;
    opacity: 0.4;
    margin-top: 2px;
  }

  .framework-body h3 {
    margin-bottom: 6px;
  }

  .framework-foot-note {
    border-top: 1px solid var(--border-color);
    padding-top: 20px;
    font-style: normal;
  }

  /* Timeline Segment UI */
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

  .linear-step-row h3 {
    margin-bottom: 6px;
  }

  /* Pricing Cards Structure */
  .pricing-header {
    text-align: left;
    margin-bottom: 28px;
  }

  .pricing-header h2 {
    margin-bottom: 10px;
  }

  .pricing-three-card {
    display: flex;
    flex-direction: column;
    gap: 16px;
  }

  .price-tier-card {
    border: 1px solid var(--border-color);
    padding: 24px 20px;
    border-radius: 8px;
    background: var(--bg-main);
    display: flex;
    flex-direction: column;
    gap: 16px;
  }

  .price-tier-card h3 {
    font-size: 22px;
  }

  /* FAQ Accordion Interactive Smooth Fix */
  .faq-wrapper-list {
    display: flex;
    flex-direction: column;
    gap: 12px;
  }

  .faq-node-item {
    border-bottom: 1px solid var(--border-color);
  }

  .faq-node-item summary {
    list-style: none;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-family: var(--font-sans);
    font-weight: 500;
    font-size: 17px;
    padding: 14px 0;
    cursor: pointer;
    user-select: none;
  }

  .faq-node-item summary::-webkit-details-marker {
    display: none;
  }

  .faq-node-item summary::after {
    content: '+';
    font-size: 18px;
    transition: transform 0.2s ease;
  }

  .faq-node-item[open] summary::after {
    transform: rotate(45deg);
  }

  .faq-node-item p {
    padding: 0 0 16px 0;
    animation: mobileFadeIn 0.2s ease-out;
  }

  @keyframes mobileFadeIn {
    from { opacity: 0; transform: translateY(-4px); }
    to { opacity: 1; transform: translateY(0); }
  }

  /* Mobile Footer Conversion Block */
  .conversion-panel-block {
    background: var(--bg-soft);
    border: 1px solid var(--border-color);
    padding: 32px 20px;
    text-align: left;
    border-radius: 8px;
  }

  .conversion-panel-block h2 {
    font-size: 32px;
    margin-bottom: 16px;
  }

  .tags-row-flex {
    display: flex;
    flex-wrap: wrap;
    gap: 6px;
    margin-bottom: 24px;
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

<div class="si-brands-mobile">

  <!-- HERO SECTION - ANTI FLICKER INTEGRATED -->
  <header class="split-hero">
    <div class="hero-image-container">
      <img class="hero-img" 
           src="https://framerusercontent.com/images/gP90iU2jjAmasCWux20GTGglE.webp?width=600&height=400" 
           width="600" 
           height="400" 
           fetchpriority="high" 
           loading="eager" 
           alt="Google Knowledge Panel Architecture">
    </div>

    <div class="hero-content">
      <span class="eyebrow">Data Authority Architecture</span>
      <h1>Google Knowledge Panel for Companies &amp; Brands</h1>
      <p class="lead">Build a stronger brand presence with a professionally optimized Google Knowledge Panel for Companies and Brands. At StatusIndex, we help organizations, businesses, and independent brands build, optimize, and manage their presence in Google's Knowledge Graph. Unlike traditional SEO agencies, we focus on entity recognition that helps Google understand who your company is and display accurate information in Search.</p>
      <a class="btn" href="/eligibility">Request a Free Entity Audit</a>
    </div>
  </header>

  <!-- CORE PROBLEM -->
  <section class="problem-section">
    <div>
      <span class="eyebrow">The Index Imperfection</span>
      <h2>Why Many Companies Never Receive a Google Knowledge Panel</h2>
    </div>
    <div class="problem-matrix">
      <div class="problem-node-box">
        <h3>Asset Silos</h3>
        <p>Having a great website, active social profiles, and strong products does not automatically earn your company a Google Knowledge Panel.</p>
      </div>
      <div class="problem-node-box">
        <h3>Signal Instability</h3>
        <p>Google relies on consistent entity signals, trusted sources, and a well-connected digital footprint before recognizing a brand as a verified entity.</p>
      </div>
      <div class="problem-alert-box">
        <p>Many companies struggle with weak brand entity recognition, inconsistent company information across platforms, limited third-party authority, and unverified business identity. Without these trusted connections, customers, investors, and partners often see fragmented or outdated information instead of a reliable brand overview.</p>
      </div>
    </div>
  </section>

  <!-- FRAMEWORK -->
  <section class="framework-section">
    <div class="framework-header">
      <span class="eyebrow">The System Blueprint</span>
      <h2>How StatusIndex Builds Google-Recognized Brand Entities</h2>
      <p>At StatusIndex, we use an entity-first framework designed to strengthen your brand's digital identity rather than simply improve keyword rankings.</p>
    </div>
    <div class="framework-grid">
      <div class="framework-item">
        <div class="framework-index">01</div>
        <div class="framework-body">
          <h3>Footprint Mapping</h3>
          <p>Our process begins by auditing your current entity footprint and identifying precise structural data gaps.</p>
        </div>
      </div>
      <div class="framework-item">
        <div class="framework-index">02</div>
        <div class="framework-body">
          <h3>Provenance Optimization</h3>
          <p>We optimize your company website and About page, then implement custom high-density Organization Schema markup updates.</p>
        </div>
      </div>
      <div class="framework-item">
        <div class="framework-index">03</div>
        <div class="framework-body">
          <h3>Authority Alignment</h3>
          <p>We strengthen trusted business citations and build authoritative media references to elevate long-term Knowledge Graph recognition.</p>
        </div>
      </div>
    </div>
    <p class="framework-foot-note">Combined with credible press coverage and verified references, these signals increase Google's confidence in your organization and support long-term Knowledge Graph recognition.</p>
  </section>

  <!-- PROCESS STAGES -->
  <section class="process-section">
    <div>
      <span class="eyebrow">Deployment Lifecycle</span>
      <h2>Our Knowledge Panel Process</h2>
    </div>
    <div class="linear-timeline">
      <div class="linear-step-row">
        <h3>1. Entity Audit</h3>
        <p>We analyze your existing entity footprint to identify missing signals, inconsistencies, and factors preventing entity recognition.</p>
      </div>
      <div class="linear-step-row">
        <h3>2. Entity Research</h3>
        <p>We review your company website, trusted sources, and brand presence to understand how Google currently interprets your identity.</p>
      </div>
      <div class="linear-step-row">
        <h3>3. Schema Alignment</h3>
        <p>We implement Organization Schema markup that helps Google's systems connect your website with your verified brand identity.</p>
      </div>
      <div class="linear-step-row">
        <h3>4. Authority Building</h3>
        <p>We strengthen trusted references through authoritative business citations, media mentions, and consistent entity information.</p>
      </div>
      <div class="linear-step-row">
        <h3>5. Knowledge Graph Optimization</h3>
        <p>We improve the signals Google uses to connect your company website, leadership, and authoritative sources within the Knowledge Graph.</p>
      </div>
      <div class="linear-step-row">
        <h3>6. Monitoring &amp; Management</h3>
        <p>As your business evolves, we help keep your entity information accurate, consistent, and aligned across trusted platforms.</p>
      </div>
    </div>
  </section>

  <!-- PRICING STRUCTURE -->
  <section>
    <div class="pricing-header">
      <span class="eyebrow">Investment Options</span>
      <h2>Transparent Pricing</h2>
    </div>
    <div class="pricing-three-card">
      <div class="price-tier-card">
        <div>
          <h3>Audit &amp; Strategy</h3>
          <p>A complete review of your brand's digital footprint with a personalized action plan to improve your Knowledge Panel eligibility.</p>
        </div>
        <a class="btn btn-outline" href="/pricing">View Details</a>
      </div>
      <div class="price-tier-card" style="background:var(--bg-soft);">
        <div>
          <h3>Build &amp; Core</h3>
          <p>Implementation of structured data, entity alignment, authoritative citations, and Google Knowledge Graph optimization paths.</p>
        </div>
        <a class="btn" href="/pricing">View Details</a>
      </div>
      <div class="price-tier-card">
        <div>
          <h3>Management</h3>
          <p>Ongoing monitoring, data updates, corrections, and ongoing optimization to keep your panel pristine as the company scales.</p>
        </div>
        <a class="btn btn-outline" href="/pricing">View Details</a>
      </div>
    </div>
  </section>

  <!-- FAQ ACCORDION -->
  <section class="faq-section">
    <div>
      <span class="eyebrow">Clear Diagnostics</span>
      <h2>FAQ</h2>
    </div>
    <div class="faq-wrapper-list">
      <details class="faq-node-item">
        <summary>How does a company get a Google Knowledge Panel?</summary>
        <p>Google creates Knowledge Panels after recognizing consistent, trustworthy entity signals across authoritative sources. We help strengthen those signals.</p>
      </details>
      <details class="faq-node-item">
        <summary>How long does Knowledge Panel optimization take?</summary>
        <p>Timelines vary based on your current digital footprint, but many companies begin strengthening their entity presence within 60–120 days.</p>
      </details>
      <details class="faq-node-item">
        <summary>Do small or independent businesses qualify?</summary>
        <p>Yes. Independent businesses can become eligible by building authority, maintaining consistent information, and strengthening trusted entity signals.</p>
      </details>
    </div>
  </section>

  <!-- CONVERSION BLOCK -->
  <footer class="conversion-panel-block">
    <h2>Build a Stronger Brand Entity Today</h2>
    <div class="tags-row-flex">
      <div class="tag-node-chip">Corporate Node</div>
      <div class="tag-node-chip">Enterprise Graph</div>
      <div class="tag-node-chip">Brand Authority</div>
    </div>
    <p>Find out what's preventing your Google Knowledge Panel for Companies &amp; Brands from appearing. We'll review your brand identity, identify entity gaps, and provide a clear roadmap.</p>
    <a class="btn" href="/eligibility">Request Preliminary Audit</a>
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

  .si-brands-desktop * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  .si-brands-desktop {
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

  /* Typography Base Updates */
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

  /* HERO SECTION - CLS LOCKDOWN DESIGN */
  .split-hero {
    display: grid;
    grid-template-columns: 1fr 1fr; 
    gap: 60px;
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

  /* Container bounds are locked instantly using background skeleton footprint */
  .hero-image-container {
    width: 100%;
    max-width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background: var(--bg-soft);
    border-radius: 16px;
    overflow: hidden;
    /* Aspect ratio matches 600x400 to allocate grid block space before image load finishes */
    aspect-ratio: 600 / 400; 
  }

  .hero-img {
    width: 100%; 
    height: 100%;
    max-width: 100%;
    display: block;
    object-fit: cover;
  }

  /* Core Problems Layout */
  .problem-section {
    display: grid;
    grid-template-columns: 0.8fr 1.2fr;
    gap: 48px;
  }

  .problem-section h2 {
    font-size: 40px;
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
    font-size: 22px;
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
    font-size: 40px;
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
    font-weight: 600;
    font-size: 32px;
    line-height: 1;
    opacity: 0.3;
  }

  .framework-body h3 {
    font-size: 22px;
    margin-bottom: 10px;
  }

  .framework-foot-note {
    margin-top: 48px;
    border-top: 1px solid var(--border-color);
    padding-top: 24px;
    font-style: normal;
    max-width: 800px;
  }

  /* Process Timeline Section */
  .process-section {
    display: grid;
    grid-template-columns: 0.8fr 1.2fr;
    gap: 48px;
  }

  .process-section h2 {
    font-size: 40px;
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
    font-size: 22px;
    margin-bottom: 8px;
  }

  /* Pricing Grid Architecture */
  .pricing-header {
    text-align: center;
    max-width: 600px;
    margin: 0 auto 48px;
  }

  .pricing-header h2 {
    font-size: 40px;
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
    font-size: 26px;
    margin-bottom: 16px;
  }

  /* INTERACTIVE FAQ ACCORDION ARCHITECTURE */
  .faq-section {
    display: grid;
    grid-template-columns: 0.8fr 1.2fr;
    gap: 48px;
  }

  .faq-section h2 {
    font-size: 40px;
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
    font-weight: 500;
    font-size: 20px;
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
    font-size: 48px;
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

<div class="si-brands-desktop">

  <!-- HERO SECTION WITH PRE-RENDER DIMENSIONS INSIDE HTML MARKUP -->
  <header class="split-hero">
    <div class="hero-content">
      <span class="eyebrow">Data Authority Architecture</span>
      <h1>Google Knowledge Panel for Companies &amp; Brands</h1>
      <p class="lead">Build a stronger brand presence with a professionally optimized Google Knowledge Panel for Companies and Brands. At StatusIndex, we help organizations, businesses, and independent brands build, optimize, and manage their presence in Google's Knowledge Graph. Unlike traditional SEO agencies, we focus on entity recognition that helps Google understand who your company is and display accurate information in Search.</p>
      <a class="btn" href="/eligibility">Request a Free Entity Audit</a>
    </div>
    
    <div class="hero-image-container">
      <!-- Fixed critical CLS by forcing native dimensions, preloading flags, and high rendering priority -->
      <img class="hero-img" 
           src="https://framerusercontent.com/images/gP90iU2jjAmasCWux20GTGglE.webp?width=600&height=400" 
           width="600" 
           height="400" 
           fetchpriority="high" 
           loading="eager" 
           alt="Google Knowledge Panel for Companies &amp; Brands Architecture">
    </div>
  </header>

  <!-- CORE PROBLEM -->
  <section class="problem-section">
    <div>
      <span class="eyebrow">The Index Imperfection</span>
      <h2>Why Many Companies Never Receive a Google Knowledge Panel</h2>
    </div>
    <div class="problem-matrix">
      <div class="problem-node-box">
        <h3>Asset Silos</h3>
        <p>Having a great website, active social profiles, and strong products does not automatically earn your company a Google Knowledge Panel.</p>
      </div>
      <div class="problem-node-box">
        <h3>Signal Instability</h3>
        <p>Google relies on consistent entity signals, trusted sources, and a well-connected digital footprint before recognizing a brand as a verified entity.</p>
      </div>
      <div class="problem-alert-box">
        <p>Many companies struggle with weak brand entity recognition, inconsistent company information across platforms, limited third-party authority, and unverified business identity. Without these trusted connections, customers, investors, and partners often see fragmented or outdated information instead of a reliable brand overview.</p>
      </div>
    </div>
  </section>

  <!-- FRAMEWORK -->
  <section class="framework-section">
    <div class="framework-header">
      <span class="eyebrow">The System Blueprint</span>
      <h2>How StatusIndex Builds Google-Recognized Brand Entities</h2>
      <p>At StatusIndex, we use an entity-first framework designed to strengthen your brand's digital identity rather than simply improve keyword rankings. Our goal is to help Google confidently recognize your organization by creating consistent, trustworthy entity relationships across the web.</p>
    </div>
    <div class="framework-grid">
      <div class="framework-item">
        <div class="framework-index">01</div>
        <div class="framework-body">
          <h3>Footprint Mapping</h3>
          <p>Our process begins by auditing your current entity footprint and identifying precise structural data gaps.</p>
        </div>
      </div>
      <div class="framework-item">
        <div class="framework-index">02</div>
        <div class="framework-body">
          <h3>Provenance Optimization</h3>
          <p>We optimize your company website and About page, then implement custom high-density Organization Schema markup updates.</p>
        </div>
      </div>
      <div class="framework-item">
        <div class="framework-index">03</div>
        <div class="framework-body">
          <h3>Authority Alignment</h3>
          <p>We strengthen trusted business citations and build authoritative media references to elevate long-term Knowledge Graph recognition.</p>
        </div>
      </div>
    </div>
    <p class="framework-foot-note">Combined with credible press coverage and verified references, these signals increase Google's confidence in your organization and support long-term Knowledge Graph recognition.</p>
  </section>

  <!-- PROCESS STAGES -->
  <section class="process-section">
    <div>
      <span class="eyebrow">Deployment Lifecycle</span>
      <h2>Our Knowledge Panel Optimization Process</h2>
      <p>We follow a transparent, step-by-step process designed to strengthen your entity signals and improve your eligibility for a Google Knowledge Panel.</p>
    </div>
    <div class="linear-timeline">
      <div class="linear-step-row">
        <h3>1. Entity Audit</h3>
        <p>We analyze your existing entity footprint to identify missing signals, inconsistencies, and factors preventing entity recognition.</p>
      </div>
      <div class="linear-step-row">
        <h3>2. Entity Research</h3>
        <p>We review your company website, trusted sources, and brand presence to understand how Google currently interprets your identity.</p>
      </div>
      <div class="linear-step-row">
        <h3>3. Schema Alignment</h3>
        <p>We implement Organization Schema markup that helps Google's systems connect your website with your verified brand identity.</p>
      </div>
      <div class="linear-step-row">
        <h3>4. Authority Building</h3>
        <p>We strengthen trusted references through authoritative business citations, media mentions, and consistent entity information.</p>
      </div>
      <div class="linear-step-row">
        <h3>5. Knowledge Graph Optimization</h3>
        <p>We improve the signals Google uses to connect your company website, leadership, and authoritative sources within the Knowledge Graph.</p>
      </div>
      <div class="linear-step-row">
        <h3>6. Monitoring &amp; Management</h3>
        <p>As your business evolves, we help keep your entity information accurate, consistent, and aligned across trusted platforms.</p>
      </div>
    </div>
  </section>

  <!-- PRICING STRUCTURE -->
  <section>
    <div class="pricing-header">
      <span class="eyebrow">Investment Options</span>
      <h2>Transparent Company Knowledge Panel Pricing</h2>
      <p>Choose the service that matches your current entity architecture needs.</p>
    </div>
    <div class="pricing-three-card">
      <div class="price-tier-card">
        <div>
          <h3>Audit &amp; Strategy</h3>
          <p>A complete review of your brand's digital footprint with a personalized action plan to improve your Knowledge Panel eligibility.</p>
        </div>
        <a class="btn btn-outline" style="margin-top:32px;" href="/pricing">View Details</a>
      </div>
      <div class="price-tier-card" style="background:var(--bg-soft);">
        <div>
          <h3>Build &amp; Core</h3>
          <p>Implementation of structured data, entity alignment, authoritative citations, and Google Knowledge Graph optimization paths.</p>
        </div>
        <a class="btn" style="margin-top:32px;" href="/pricing">View Details</a>
      </div>
      <div class="price-tier-card">
        <div>
          <h3>Management</h3>
          <p>Ongoing monitoring, data updates, corrections, and ongoing optimization to keep your panel pristine as the company scales.</p>
        </div>
        <a class="btn btn-outline" style="margin-top:32px;" href="/pricing">View Details</a>
      </div>
    </div>
  </section>

  <!-- INTERACTIVE FAQ -->
  <section class="faq-section">
    <div>
      <span class="eyebrow">Clear Diagnostics</span>
      <h2>Frequently Asked Questions</h2>
    </div>
    <div class="faq-wrapper-list">
      <details class="faq-node-item">
        <summary>How does a company get a Google Knowledge Panel?</summary>
        <p>Google creates Knowledge Panels after recognizing consistent, trustworthy entity signals across authoritative sources. We help strengthen those signals.</p>
      </details>
      <details class="faq-node-item">
        <summary>How long does Knowledge Panel optimization take?</summary>
        <p>Timelines vary based on your current digital footprint, but many companies begin strengthening their entity presence within 60–120 days.</p>
      </details>
      <details class="faq-node-item">
        <summary>Do small or independent businesses qualify?</summary>
        <p>Yes. Independent businesses can become eligible by building authority, maintaining consistent information, and strengthening trusted entity signals.</p>
      </details>
      <details class="faq-node-item">
        <summary>Is media coverage required?</summary>
        <p>Not always, but authoritative business citations and press mentions are valuable sources that reinforce Google's understanding of company entities.</p>
      </details>
      <details class="faq-node-item">
        <summary>Can businesses claim a Knowledge Panel?</summary>
        <p>Yes, but only after Google has generated one. Eligible representatives can complete Google's official verification process.</p>
      </details>
      <details class="faq-node-item">
        <summary>Can incorrect company information be fixed?</summary>
        <p>Yes. Once verified, eligible businesses can suggest edits, and StatusIndex helps manage updates and maintain accurate information over time.</p>
      </details>
    </div>
  </section>

  <!-- CONVERSION BLOCK -->
  <footer class="conversion-panel-block">
    <h2>Build a Stronger Brand Entity Today</h2>
    <div class="tags-row-flex">
      <div class="tag-node-chip">Corporate Node</div>
      <div class="tag-node-chip">Enterprise Graph</div>
      <div class="tag-node-chip">Brand Authority</div>
    </div>
    <p>Find out what's preventing your Google Knowledge Panel for Companies &amp; Brands from appearing. We'll review your brand identity, identify entity gaps, and provide a clear roadmap to strengthen your Google Knowledge Graph presence.</p>
    <a class="btn" href="/eligibility">Request Preliminary Entity Audit</a>
  </footer>

</div>`,id:`tWOYVgeVY`,layoutId:`tWOYVgeVY`,radius:`0px`,style:{height:`100%`,width:`100%`},type:`html`,url:``,width:`100%`,zoom:1})})})})}),o(`div`,{id:`overlay`})]})})}),[`.framer-xIhyI.framer-376kld, .framer-xIhyI .framer-376kld { display: block; }`,`.framer-xIhyI.framer-i039l3 { align-content: center; align-items: center; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 1200px; }`,`.framer-xIhyI .framer-xjms7v-container { flex: none; height: 4750px; position: relative; width: 1200px; }`,`@media (min-width: 810px) and (max-width: 1199.98px) { .framer-xIhyI.framer-i039l3 { width: 810px; } .framer-xIhyI .framer-xjms7v-container { height: 5648px; width: 100%; }}`,`@media (max-width: 809.98px) { .framer-xIhyI.framer-i039l3 { width: 390px; } .framer-xIhyI .framer-xjms7v-container { height: 5250px; width: 100%; }}`],`framer-xIhyI`),H.displayName=`Companies & Brands`,H.defaultProps={height:5268,width:1200},h(H,[{explicitInter:!0,fonts:[]},...N],{supportsExplicitInterCodegen:!0}),U={exports:{queryParamNames:{type:`variable`,annotations:{framerContractVersion:`1`}},Props:{type:`tsType`,annotations:{framerContractVersion:`1`}},default:{type:`reactComponent`,name:`FramerFk7pYoBXe`,slots:[],annotations:{framerComponentViewportWidth:`true`,framerImmutableVariables:`true`,framerLayoutTemplateFlowEffect:`true`,framerDisplayContentsDiv:`false`,framerAutoSizeImages:`true`,framerAcceptsLayoutTemplate:`true`,framerColorSyntax:`true`,framerCanvasComponentVariantDetails:`{"propertyName":"variant","data":{"default":{"layout":["fixed","auto"]},"Xo063sQsK":{"layout":["fixed","auto"]},"bWYRdQW1n":{"layout":["fixed","auto"]}}}`,framerContractVersion:`1`,framerScrollSections:`false`,framerResponsiveScreen:`true`,framerIntrinsicHeight:`5268`,framerIntrinsicWidth:`1200`}},__FramerMetadata__:{type:`variable`}}}}))();export{U as __FramerMetadata__,H as default,F as queryParamNames};
//# sourceMappingURL=nVxYsTtAxpjsTnOA8EcGE5OCbPddUSTmliXCIonEM8Q.p4vk54pS.mjs.map