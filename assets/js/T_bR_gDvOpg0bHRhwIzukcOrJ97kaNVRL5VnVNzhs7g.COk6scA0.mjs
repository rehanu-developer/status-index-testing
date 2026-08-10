import{t as e}from"./rolldown-runtime.Dh6celcD.mjs";import{M as t,T as n,b as r,j as i,k as a,l as o,s,u as c,v as l}from"./react.BcaIDK9K.mjs";import{S as u,a as d,r as f,t as p}from"./motion.BcpjdyXO.mjs";import{L as m,T as h,W as g,a as _,at as v,i as y,k as b,l as x,lt as S,nt as C,ot as w,st as T,ut as E,y as D,yt as O}from"./framer.B4AXX-9p.mjs";import{n as k,t as A}from"./Embed.Cc2crdEH.mjs";import j,{t as M}from"./z5oTF_LEYlSZ4nUwUHbviRrLFGvAnAsGNvYg7QdHhIk.BrUwzuJE.mjs";var N,P,F,I,L,R,z,B,V,H,U;e((()=>{s(),g(),p(),n(),k(),M(),N=m(A),P={FZpCxIIsB:`(min-width: 1200px)`,pKZgvw_vZ:`(min-width: 810px) and (max-width: 1199.98px)`,XF9cNepyg:`(max-width: 809.98px)`},F=[],I=`framer-NxWMB`,L={FZpCxIIsB:`framer-v-hnbqvu`,pKZgvw_vZ:`framer-v-18pg9dv`,XF9cNepyg:`framer-v-hvkwcu`},R=(e,t,n)=>e&&t?`position`:n,z={"Realtors Page":`FZpCxIIsB`,Phone:`XF9cNepyg`,Tablet:`pKZgvw_vZ`},B=({value:e})=>T()?null:o(`style`,{dangerouslySetInnerHTML:{__html:e},"data-framer-html-style":``}),V=({height:e,id:t,width:n,...r})=>({...r,variant:z[r.variant]??r.variant??`FZpCxIIsB`}),H=O(l(function(e,n){let s=a(null),l=n??s,p=r(),{activeLocale:m,setLocale:h}=S();C();let{style:g,className:T,layoutId:O,variant:k,...M}=V(e);E(t(()=>j({},m),[m]));let[N,F]=w(k,P,!1),H=b(I),U=i(x)?.isLayoutTemplate,W=!!i(d)?.transition?.layout,G=R(U,W);return v({}),o(x.Provider,{value:{activeVariantId:N,humanReadableVariantMap:z,primaryVariantId:`FZpCxIIsB`,variantClassNames:L},children:c(f,{id:O??p,children:[o(B,{value:`html body { background: none; }`}),o(u.div,{...M,className:b(H,`framer-hnbqvu`,T),ref:l,style:{...g},children:o(y,{children:o(_,{className:`framer-whpf7i-container`,isModuleExternal:!0,layout:G,nodeId:`eUnClJAow`,scopeId:`Mhh5yRln5`,children:o(D,{breakpoint:N,overrides:{XF9cNepyg:{html:`<meta name="viewport" content="width=device-width, initial-scale=1.0">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">

<style>
  :root {
    --bg-base: #FFFFFF;
    --bg-shade: #F9FAFB;
    --border-light: #E5E7EB;
    --border-bold: #111827;
    --text-main: #111827;
    --text-muted: #4B5563;
    --font-serif: 'Instrument Serif', Georgia, serif;
    --font-sans: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
  }

  /* Structural Resets */
  .si-executive-mobile * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  .si-executive-mobile {
    background: var(--bg-base);
    color: var(--text-main);
    font-family: var(--font-sans);
    -webkit-font-smoothing: antialiased;
    width: 100%;
    max-width: 480px;
    margin: 0 auto;
    padding: 40px 20px;
    display: flex;
    flex-direction: column;
    gap: 72px;
    overflow-x: hidden;
  }

  /* Typography Blueprint */
  .si-executive-mobile h1 {
    font-family: var(--font-serif);
    font-size: 36px;
    font-weight: 400;
    line-height: 1.1;
    letter-spacing: -0.01em;
    color: var(--text-main);
  }

  .si-executive-mobile h2.section-heading {
    font-family: var(--font-sans);
    font-size: 28px;
    font-weight: 700;
    line-height: 1.25;
    letter-spacing: -0.01em;
    margin-bottom: 14px;
  }

  .si-executive-mobile p {
    font-size: 15px;
    line-height: 1.6;
    color: var(--text-muted);
  }

  .si-eyebrow-tag {
    font-size: 11px;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.12em;
    color: var(--text-main);
    margin-bottom: 12px;
    display: block;
    opacity: 0.7;
  }

  /* Global Corporate Buttons */
  .si-btn-group {
    display: flex;
    flex-direction: column;
    gap: 12px;
    align-items: stretch;
  }

  .si-action-btn {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: 16px 24px;
    background: var(--border-bold);
    color: var(--bg-base);
    border: 1px solid var(--border-bold);
    border-radius: 4px;
    font-weight: 500;
    font-size: 15px;
    text-decoration: none;
    transition: all 0.2s cubic-bezier(0.16, 1, 0.3, 1);
    cursor: pointer;
    width: 100%;
  }

  .si-action-btn:active {
    background: transparent;
    color: var(--text-main);
  }

  .si-action-btn-secondary {
    background: transparent;
    color: var(--text-main);
    border: 1px solid var(--border-light);
  }

  /* SECTION 1: HERO STACK */
  .si-hero-wrapper {
    display: flex;
    flex-direction: column;
    gap: 28px;
    border-bottom: 1px solid var(--border-light);
    padding-bottom: 40px;
  }

  .si-hero-text .si-lead-paragraph {
    font-size: 15.5px;
    line-height: 1.6;
    margin-top: 16px;
    margin-bottom: 24px;
    color: var(--text-muted);
  }

  .si-hero-image-frame {
    width: 100%;
    height: auto;
    border-radius: 8px;
    border: 1px solid var(--border-light);
    box-shadow: 0 12px 24px rgba(0,0,0,0.03);
    display: block;
    order: -1;
  }

  /* SECTION 2: STACKED CONTEXT */
  .si-split-layout-grid {
    display: flex;
    flex-direction: column;
    gap: 28px;
  }

  .si-split-content-pane {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }

  .si-node-card-border {
    border-left: 2px solid var(--border-bold);
    padding-left: 16px;
  }

  .si-node-card-border h3 {
    font-family: var(--font-sans);
    font-size: 18px;
    font-weight: 600;
    margin-bottom: 6px;
  }

  .si-text-alert-frame {
    background: var(--bg-shade);
    border: 1px solid var(--border-light);
    padding: 20px;
    border-radius: 4px;
  }

  /* SECTION 3: STACKED DATA TILES */
  .si-triple-tile-grid {
    display: flex;
    flex-direction: column;
    gap: 16px;
    margin-top: 24px;
  }

  .si-data-step-card {
    border: 1px solid var(--border-light);
    padding: 28px 22px;
    border-radius: 4px;
    display: flex;
    flex-direction: column;
  }

  .si-data-step-card .index-num {
    font-family: var(--font-sans);
    font-size: 26px;
    font-weight: 700;
    color: var(--text-main);
    opacity: 0.25;
    margin-bottom: 16px;
  }

  .si-data-step-card h3 {
    font-family: var(--font-sans);
    font-size: 17px;
    font-weight: 600;
    margin-bottom: 8px;
  }

  /* SECTION 4: STACKED MATRIX LAYOUT */
  .si-matrix-layout-grid {
    display: flex;
    flex-direction: column;
    row-gap: 24px;
    margin-top: 28px;
  }

  .si-matrix-item-box {
    border-top: 1px solid var(--border-light);
    padding-top: 16px;
  }

  .si-matrix-item-box h3 {
    font-family: var(--font-sans);
    font-size: 17px;
    font-weight: 600;
    margin-bottom: 6px;
  }

  /* SECTION 5: TIMELINE ROW TRACKS */
  .si-linear-timeline-track {
    display: flex;
    flex-direction: column;
    margin-top: 28px;
  }

  .si-timeline-row-node {
    display: flex;
    flex-direction: column;
    gap: 6px;
    padding: 20px 0;
    border-top: 1px solid var(--border-light);
  }

  .si-timeline-row-node:last-child {
    border-bottom: 1px solid var(--border-light);
  }

  .si-timeline-row-node .node-indicator {
    font-size: 12px;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    color: var(--text-main);
    opacity: 0.6;
  }

  .si-timeline-row-node h3 {
    font-family: var(--font-sans);
    font-size: 18px;
    font-weight: 600;
  }

  /* SECTION 6: MANAGEMENT CONTEXT MODULE */
  .si-management-panel-dark {
    background: var(--border-bold);
    color: var(--bg-base);
    padding: 40px 24px;
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    gap: 32px;
  }

  .si-management-panel-dark h2 {
    color: var(--bg-base);
    font-family: var(--font-sans);
    font-size: 26px;
    font-weight: 700;
    line-height: 1.25;
  }

  .si-management-panel-dark p {
    color: #9CA3AF;
  }

  .si-management-inner-card {
    background: rgba(255,255,255,0.03);
    border: 1px solid rgba(255,255,255,0.08);
    padding: 24px;
    border-radius: 4px;
  }

  .si-management-inner-card h3 {
    font-family: var(--font-sans);
    font-size: 18px;
    font-weight: 600;
    color: var(--bg-base);
    margin-bottom: 10px;
  }

  /* SECTION 7: PRICING STACK */
  .si-pricing-matrix-row {
    display: flex;
    flex-direction: column;
    gap: 16px;
    margin-top: 28px;
  }

  .si-pricing-segment-box {
    border: 1px solid var(--border-light);
    padding: 28px 22px;
    border-radius: 4px;
    display: flex;
    flex-direction: column;
    gap: 24px;
  }

  .si-pricing-segment-box.featured-box {
    border-color: var(--border-bold);
    background: var(--bg-shade);
  }

  .si-pricing-segment-box h3 {
    font-family: var(--font-sans);
    font-size: 19px;
    font-weight: 600;
    margin-bottom: 10px;
  }

  /* SECTION 8: MOBILE ACCORDIONS */
  .si-faq-split-pane {
    display: flex;
    flex-direction: column;
    gap: 24px;
  }

  .si-faq-accordion-container {
    display: flex;
    flex-direction: column;
  }

  .si-faq-accordion-node {
    border-bottom: 1px solid var(--border-light);
  }

  .si-faq-accordion-node summary {
    list-style: none;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 12px;
    font-family: var(--font-sans);
    font-size: 15.5px;
    font-weight: 600;
    padding: 18px 0;
    cursor: pointer;
    user-select: none;
    color: var(--text-main);
  }

  .si-faq-accordion-node summary::-webkit-details-marker {
    display: none;
  }

  .si-faq-accordion-node summary::after {
    content: '+';
    font-family: var(--font-sans);
    font-size: 18px;
    font-weight: 300;
    flex-shrink: 0;
    transition: transform 0.2s cubic-bezier(0.16, 1, 0.3, 1);
  }

  .si-faq-accordion-node[open] summary::after {
    transform: rotate(45deg);
  }

  .si-faq-accordion-node p {
    padding: 0 0 18px 0;
    font-size: 14.5px;
    color: var(--text-muted);
    animation: slideDownAnimation 0.25s cubic-bezier(0.16, 1, 0.3, 1);
  }

  @keyframes slideDownAnimation {
    from { opacity: 0; transform: translateY(-6px); }
    to { opacity: 1; transform: translateY(0); }
  }

  /* SECTION 9: CONVERSION PANEL */
  .si-conversion-banner-box {
    background: var(--bg-shade);
    border: 1px solid var(--border-light);
    border-radius: 6px;
    padding: 40px 24px;
    display: flex;
    flex-direction: column;
    gap: 28px;
  }

  .si-conversion-banner-box h2 {
    font-family: var(--font-sans);
    font-size: 26px;
    font-weight: 700;
    margin-bottom: 12px;
  }

  .si-inline-chips-flex {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    margin-bottom: 16px;
  }

  .si-chip-meta-node {
    font-size: 10.5px;
    font-weight: 600;
    color: var(--text-muted);
    background: var(--bg-base);
    border: 1px solid var(--border-light);
    padding: 6px 12px;
    border-radius: 4px;
    text-transform: uppercase;
    letter-spacing: 0.05em;
  }

  .si-conversion-action-pane {
    display: flex;
  }

  .si-conversion-action-pane .si-action-btn {
    width: 100%;
  }
</style>

<div class="si-executive-mobile">

  <!-- SECTION 1: HERO CONTAINER -->
  <header class="si-hero-wrapper">
    <img src="https://framerusercontent.com/images/FQ6iJZEmYISLbQGbNzjIZ2vOKTA.webp?width=500&height=281" class="si-hero-image-frame" alt="Google Knowledge Panel for Realtors">
    <div class="si-hero-text">
      <span class="si-eyebrow-tag">Entity Graph Optimization</span>
      <h1>Google Knowledge Panel for Realtors</h1>
      <p class="si-lead-paragraph">Build a stronger professional presence with a professionally optimized Google Knowledge Panel for Realtors. At StatusIndex, we help real estate agents, brokers, and independent realtors build, optimize, and manage their presence in Google's Knowledge Graph. Unlike traditional SEO agencies, we focus on entity recognition that helps Google understand who you are and display accurate information in Search.</p>
      <div class="si-btn-group">
        <a class="si-action-btn" href="/eligibility">Free Realtor Entity Audit</a>
      </div>
    </div>
  </header>

  <!-- SECTION 2: WHY MANY REALTORS NEVER RECEIVE A PANEL -->
  <section class="si-split-layout-grid">
    <div>
      <span class="si-eyebrow-tag">The Structural Signal Gap</span>
      <h2 class="section-heading">Why Many Realtors Never Receive a Google Knowledge Panel</h2>
    </div>
    <div class="si-split-content-pane">
      <div class="si-node-card-border">
        <h3>Asset Dispersion</h3>
        <p>Having an active Google Business Profile, listings, or a strong online presence does not automatically earn you a Google Knowledge Panel. Google relies on consistent entity signals, trusted sources, and a well-connected digital footprint before recognizing a realtor as a verified entity.</p>
      </div>
      <div class="si-text-alert-frame">
        <p>Many realtors struggle with weak or missing Google Business Profile signals, inconsistent name, license, and brokerage data, no structured schema markup, and limited trusted mentions across the web. Without these trusted connections, Google treats the agent as an unverified entity, leading to lower trust and fewer inbound leads from search.</p>
      </div>
    </div>
  </section>

  <!-- SECTION 3: HOW STATUSINDEX BUILDS ENTITIES -->
  <section>
    <span class="si-eyebrow-tag">Framework Engineering</span>
    <h2 class="section-heading">How StatusIndex Builds Google-Recognized Realtor Entities</h2>
    <p style="margin-bottom: 24px;">At StatusIndex, we use an entity-first framework designed to strengthen your realtor digital identity rather than simply improve keyword rankings. Our goal is to help Google confidently recognize you as a realtor by creating consistent, trustworthy entity relationships across the web.</p>
    
    <div class="si-triple-tile-grid">
      <div class="si-data-step-card">
        <span class="index-num">01</span>
        <h3>Footprint Diagnostics</h3>
        <p>Our process begins by auditing your current digital footprint and identifying precise entity gaps across structural indices.</p>
      </div>
      <div class="si-data-step-card">
        <span class="index-num">02</span>
        <h3>RealEstateAgent Architecture</h3>
        <p>We optimize your Google Business Profile and execute structured deployment of explicit Schema.org RealEstateAgent markup.</p>
      </div>
      <div class="si-data-step-card">
        <span class="index-num">03</span>
        <h3>Authority Placement</h3>
        <p>We strengthen authoritative citations, align listings, and orchestrate brand footprints across trusted local reference nodes.</p>
      </div>
    </div>
  </section>

  <!-- SECTION 4: BENEFITS OF AN OPTIMIZED PANEL -->
  <section class="si-split-layout-grid">
    <div>
      <span class="si-eyebrow-tag">Measurable Architecture Advantages</span>
      <h2 class="section-heading">Benefits of an Optimized Google Knowledge Panel</h2>
      <p>A Google Knowledge Panel does more than display your name—it strengthens how Google and your clients perceive your professional identity. A well-optimized panel supports trust, improves branded search visibility, and helps buyers and sellers find accurate information in one place.</p>
    </div>
    <div class="si-matrix-layout-grid">
      <div class="si-matrix-item-box">
        <h3>Higher CTR</h3>
        <p>Higher click-through rates from Google search engine parameters.</p>
      </div>
      <div class="si-matrix-item-box">
        <h3>Stronger Trust</h3>
        <p>Stronger organic trust parameters established from active buyers and sellers.</p>
      </div>
      <div class="si-matrix-item-box">
        <h3>Direct Inquiries</h3>
        <p>More direct transactional inbound inquiries and localized leads.</p>
      </div>
      <div class="si-matrix-item-box">
        <h3>Brand Authority</h3>
        <p>Improved overall domain and brand authority footprints across local markets.</p>
      </div>
      <div class="si-matrix-item-box">
        <h3>Profile Uniformity</h3>
        <p>Keep your official brand information explicitly uniform across global web nodes.</p>
      </div>
      <div class="si-matrix-item-box">
        <h3>Long-Term Anchor</h3>
        <p>Create a robust, permanent structural foundation for ongoing Knowledge Graph updates.</p>
      </div>
    </div>
  </section>

  <!-- SECTION 5: OUR PROCESS LINEAR TIMELINE -->
  <section>
    <span class="si-eyebrow-tag">System Pipelines</span>
    <h2 class="section-heading">Our Realtor Knowledge Panel Process</h2>
    <p>We follow a transparent, step-by-step process designed to strengthen your entity signals and improve your eligibility for a Google Knowledge Panel.</p>
    
    <div class="si-linear-timeline-track">
      <div class="si-timeline-row-node">
        <span class="node-indicator">Phase 01</span>
        <h3>Entity Audit</h3>
        <p>We analyze your current search presence to identify missing signals, inconsistencies, and factors preventing entity recognition.</p>
      </div>
      <div class="si-timeline-row-node">
        <span class="node-indicator">Phase 02</span>
        <h3>Entity Research</h3>
        <p>We review your Google Business Profile, trusted sources, and online presence to understand how Google currently interprets your identity.</p>
      </div>
      <div class="si-timeline-row-node">
        <span class="node-indicator">Phase 03</span>
        <h3>Schema Alignment</h3>
        <p>We implement Schema.org RealEstateAgent markup that helps Google's systems connect your website with your verified realtor identity.</p>
      </div>
      <div class="si-timeline-row-node">
        <span class="node-indicator">Phase 04</span>
        <h3>Authority Building</h3>
        <p>We strengthen trusted references through authoritative citations, client reviews, and consistent entity information.</p>
      </div>
      <div class="si-timeline-row-node">
        <span class="node-indicator">Phase 05</span>
        <h3>Graph Optimization</h3>
        <p>We improve the signals Google uses to connect your Google Business Profile, website, and authoritative sources within the Knowledge Graph.</p>
      </div>
      <div class="si-timeline-row-node">
        <span class="node-indicator">Phase 06</span>
        <h3>Monitoring &amp; Management</h3>
        <p>As your business grows, we help keep your entity information accurate, consistent, and aligned across trusted platforms.</p>
      </div>
    </div>
  </section>

  <!-- SECTION 6: MANAGEMENT CONTEXT MODULE -->
  <section class="si-management-panel-dark">
    <div>
      <span class="si-eyebrow-tag" style="color: #9CA3AF;">Control Architecture</span>
      <h2>Claim, Verify and Manage Your Realtor Knowledge Panel</h2>
      <p style="margin-top: 14px;">Once Google generates your Knowledge Panel, maintaining accurate information becomes just as important as earning it. StatusIndex helps realtors navigate the official verification process, claim eligible panels, and keep their information up to date.</p>
    </div>
    <div class="si-management-inner-card">
      <h3>Ongoing Governance</h3>
      <p style="font-size: 14.5px; line-height: 1.6;">Our panel management services include identity verification guidance, correcting inaccurate business or bio information, updating photos, links, and contact details, syncing your Google Business Profile data, and maintaining consistent entity signals as your career evolves. The goal is to ensure your Google presence remains accurate, credible, and aligned with your professional brand.</p>
    </div>
  </section>

  <!-- SECTION 7: PRICING -->
  <section>
    <span class="si-eyebrow-tag">Investment Tiers</span>
    <h2 class="section-heading">Transparent Realtor Knowledge Panel Pricing</h2>
    <p>Choose the service tier that matches your current digital needs.</p>
    
    <div class="si-pricing-matrix-row">
      <div class="si-pricing-segment-box">
        <div>
          <h3>Entity Audit &amp; Strategy</h3>
          <p>A complete review of your digital footprint with a personalized action plan to improve your Knowledge Panel eligibility.</p>
        </div>
        <a class="si-action-btn si-action-btn-secondary" href="/pricing">View Pricing</a>
      </div>
      <div class="si-pricing-segment-box featured-box">
        <div>
          <h3>Build &amp; Optimization</h3>
          <p>Full implementation of structured business data, entity alignment, authoritative citations, and Google Knowledge Graph optimization.</p>
        </div>
        <a class="si-action-btn" href="/pricing">View Pricing</a>
      </div>
      <div class="si-pricing-segment-box">
        <div>
          <h3>Panel Management</h3>
          <p>Ongoing tracking, monitoring, corrections, and adjustments to protect your representation as your business grows.</p>
        </div>
        <a class="si-action-btn si-action-btn-secondary" href="/pricing">View Pricing</a>
      </div>
    </div>
  </section>

  <!-- SECTION 8: MOBILE ACCORDIONS -->
  <section class="si-faq-split-pane">
    <div>
      <span class="si-eyebrow-tag">Resource Base</span>
      <h2 class="section-heading">Frequently Asked Questions</h2>
      <p>System deployment mechanics and criteria frameworks.</p>
    </div>
    <div class="si-faq-accordion-container">
      <details class="si-faq-accordion-node">
        <summary>Can I create a Google Knowledge Panel myself?</summary>
        <p>No. Google generates Knowledge Panels automatically after recognizing strong and consistent entity signals across verified data hubs.</p>
      </details>
      <details class="si-faq-accordion-node">
        <summary>How long does the process take?</summary>
        <p>Timelines vary based on your current digital footprint, but many realtors begin strengthening their entity presence within 60–120 days.</p>
      </details>
      <details class="si-faq-accordion-node">
        <summary>Do independent realtors qualify?</summary>
        <p>Yes. Independent realtors can become eligible by building authority, maintaining consistent information records, and strengthening trusted entity signals.</p>
      </details>
      <details class="si-faq-accordion-node">
        <summary>Is a Google Business Profile required?</summary>
        <p>Not always mandatory, but it serves as a valuable authoritative local source that reinforces Google's understanding of realtor entities.</p>
      </details>
      <details class="si-faq-accordion-node">
        <summary>Can I claim my Knowledge Panel?</summary>
        <p>Yes, but only after Google has generated one. Verified representatives can claim eligible panels through Google's official verification process.</p>
      </details>
      <details class="si-faq-accordion-node">
        <summary>Can incorrect information be fixed?</summary>
        <p>Yes. Once verified, eligible realtors can suggest direct edits, and StatusIndex helps manage updates and maintain accurate information maps over time.</p>
      </details>
    </div>
  </section>

  <!-- SECTION 9: CONVERSION PANEL -->
  <footer class="si-conversion-banner-box">
    <div>
      <div class="si-inline-chips-flex">
        <span class="si-chip-meta-node">One Audit</span>
        <span class="si-chip-meta-node">No Obligation</span>
        <span class="si-chip-meta-node">Actionable Insights</span>
      </div>
      <h2>Get Your Free Realtor Entity Audit</h2>
      <p>Find out what's preventing your Google Knowledge Panel for Realtors from appearing. We'll review your professional identity, identify entity gaps, and provide a clear roadmap to strengthen your Google Knowledge Graph presence.</p>
    </div>
    <div class="si-conversion-action-pane">
      <a class="si-action-btn" href="/eligibility">Check Eligibility</a>
    </div>
  </footer>

</div>`}},children:o(A,{height:`100%`,html:`<meta name="viewport" content="width=device-width, initial-scale=1.0">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">

<style>
  :root {
    --bg-base: #FFFFFF;
    --bg-shade: #F9FAFB;
    --border-light: #E5E7EB;
    --border-bold: #111827;
    --text-main: #111827;
    --text-muted: #4B5563;
    --font-serif: 'Instrument Serif', Georgia, serif;
    --font-sans: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
  }

  /* Structural Resets */
  .si-executive-desktop * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  .si-executive-desktop {
    background: var(--bg-base);
    color: var(--text-main);
    font-family: var(--font-sans);
    -webkit-font-smoothing: antialiased;
    max-width: 1280px;
    margin: 0 auto;
    padding: 80px 40px;
    display: flex;
    flex-direction: column;
    gap: 140px;
  }

  /* Typography Blueprint */
  .si-executive-desktop h1 {
    font-family: var(--font-serif);
    font-size: 64px;
    font-weight: 400;
    line-height: 1.05;
    letter-spacing: -0.02em;
    color: var(--text-main);
  }

  .si-executive-desktop h2.section-heading {
    font-family: var(--font-sans);
    font-size: 48px;
    font-weight: 700;
    line-height: 1.2;
    letter-spacing: -0.01em;
    margin-bottom: 24px;
  }

  .si-executive-desktop p {
    font-size: 16px;
    line-height: 1.65;
    color: var(--text-muted);
  }

  .si-eyebrow-tag {
    font-size: 12px;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.14em;
    color: var(--text-main);
    margin-bottom: 16px;
    display: block;
    opacity: 0.7;
  }

  /* Global Corporate Buttons */
  .si-btn-group {
    display: flex;
    gap: 16px;
    align-items: center;
  }

  .si-action-btn {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: 18px 32px;
    background: var(--border-bold);
    color: var(--bg-base);
    border: 1px solid var(--border-bold);
    border-radius: 4px;
    font-weight: 500;
    font-size: 15px;
    text-decoration: none;
    transition: all 0.2s cubic-bezier(0.16, 1, 0.3, 1);
    cursor: pointer;
  }

  .si-action-btn:hover {
    background: transparent;
    color: var(--text-main);
  }

  .si-action-btn-secondary {
    background: transparent;
    color: var(--text-main);
    border: 1px solid var(--border-light);
  }

  .si-action-btn-secondary:hover {
    background: var(--bg-shade);
    border-color: var(--border-bold);
  }

  /* SECTION 1: ASYMMETRIC HERO LAYOUT */
  .si-hero-wrapper {
    display: grid;
    grid-template-columns: 1.1fr 0.9fr;
    gap: 64px;
    align-items: center;
    border-bottom: 1px solid var(--border-light);
    padding-bottom: 80px;
  }

  .si-hero-text .si-lead-paragraph {
    font-size: 18px;
    line-height: 1.6;
    margin-top: 24px;
    margin-bottom: 40px;
    color: var(--text-muted);
  }

  .si-hero-image-frame {
    width: 100%;
    height: auto;
    border-radius: 8px;
    border: 1px solid var(--border-light);
    box-shadow: 0 20px 40px rgba(0,0,0,0.03);
    display: block;
  }

  /* SECTION 2: 2-COLUMN SPLIT GRID CONTEXT */
  .si-split-layout-grid {
    display: grid;
    grid-template-columns: 0.8fr 1.2fr;
    gap: 80px;
  }

  .si-split-content-pane {
    display: flex;
    flex-direction: column;
    gap: 32px;
  }

  .si-node-card-border {
    border-left: 2px solid var(--border-bold);
    padding-left: 24px;
  }

  .si-node-card-border h3 {
    font-family: var(--font-sans);
    font-size: 22px;
    font-weight: 600;
    margin-bottom: 8px;
  }

  .si-text-alert-frame {
    background: var(--bg-shade);
    border: 1px solid var(--border-light);
    padding: 32px;
    border-radius: 4px;
  }

  /* SECTION 3: 3-COLUMN DATA TILES */
  .si-triple-tile-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 24px;
    margin-top: 40px;
  }

  .si-data-step-card {
    border: 1px solid var(--border-light);
    padding: 40px 32px;
    border-radius: 4px;
    display: flex;
    flex-direction: column;
  }

  .si-data-step-card .index-num {
    font-family: var(--font-sans);
    font-size: 32px;
    font-weight: 700;
    color: var(--text-main);
    opacity: 0.25;
    margin-bottom: 24px;
  }

  .si-data-step-card h3 {
    font-family: var(--font-sans);
    font-size: 20px;
    font-weight: 600;
    margin-bottom: 12px;
  }

  /* SECTION 4: 2x3 MATRIX LAYOUT */
  .si-matrix-layout-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    row-gap: 48px;
    column-gap: 64px;
    margin-top: 48px;
  }

  .si-matrix-item-box {
    border-top: 1px solid var(--border-light);
    padding-top: 24px;
  }

  .si-matrix-item-box h3 {
    font-family: var(--font-sans);
    font-size: 20px;
    font-weight: 600;
    margin-bottom: 10px;
  }

  /* SECTION 5: TIMELINE ROW TRACKS */
  .si-linear-timeline-track {
    display: flex;
    flex-direction: column;
    margin-top: 48px;
  }

  .si-timeline-row-node {
    display: grid;
    grid-template-columns: 0.3fr 0.7fr 1fr;
    padding: 32px 0;
    border-top: 1px solid var(--border-light);
    align-items: baseline;
  }

  .si-timeline-row-node:last-child {
    border-bottom: 1px solid var(--border-light);
  }

  .si-timeline-row-node .node-indicator {
    font-size: 13px;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.05em;
  }

  .si-timeline-row-node h3 {
    font-family: var(--font-sans);
    font-size: 20px;
    font-weight: 600;
  }

  /* SECTION 6: MANAGEMENT CONTEXT MODULE */
  .si-management-panel-dark {
    background: var(--border-bold);
    color: var(--bg-base);
    padding: 80px 64px;
    border-radius: 8px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 80px;
    align-items: center;
  }

  .si-management-panel-dark h2 {
    color: var(--bg-base);
    font-family: var(--font-sans);
    font-size: 44px;
    font-weight: 700;
    line-height: 1.2;
  }

  .si-management-panel-dark p {
    color: #9CA3AF;
  }

  .si-management-inner-card {
    background: rgba(255,255,255,0.03);
    border: 1px solid rgba(255,255,255,0.08);
    padding: 40px;
    border-radius: 4px;
  }

  .si-management-inner-card h3 {
    font-family: var(--font-sans);
    font-size: 22px;
    font-weight: 600;
    color: var(--bg-base);
    margin-bottom: 12px;
  }

  /* SECTION 7: PRICING INTERFACE MATRIX */
  .si-pricing-matrix-row {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 24px;
    margin-top: 48px;
  }

  .si-pricing-segment-box {
    border: 1px solid var(--border-light);
    padding: 48px 36px;
    border-radius: 4px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    min-height: 380px;
  }

  .si-pricing-segment-box.featured-box {
    border-color: var(--border-bold);
    background: var(--bg-shade);
  }

  .si-pricing-segment-box h3 {
    font-family: var(--font-sans);
    font-size: 22px;
    font-weight: 600;
    margin-bottom: 16px;
  }

  /* SECTION 8: DESKTOP SCHEMA ACCORDIONS */
  .si-faq-split-pane {
    display: grid;
    grid-template-columns: 0.7fr 1.3fr;
    gap: 80px;
  }

  .si-faq-accordion-container {
    display: flex;
    flex-direction: column;
  }

  .si-faq-accordion-node {
    border-bottom: 1px solid var(--border-light);
  }

  .si-faq-accordion-node summary {
    list-style: none;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-family: var(--font-sans);
    font-size: 18px;
    font-weight: 600;
    padding: 24px 0;
    cursor: pointer;
    user-select: none;
    color: var(--text-main);
  }

  .si-faq-accordion-node summary::-webkit-details-marker {
    display: none;
  }

  .si-faq-accordion-node summary::after {
    content: '+';
    font-family: var(--font-sans);
    font-size: 20px;
    font-weight: 300;
    transition: transform 0.2s cubic-bezier(0.16, 1, 0.3, 1);
  }

  .si-faq-accordion-node[open] summary::after {
    transform: rotate(45deg);
  }

  .si-faq-accordion-node p {
    padding: 0 0 24px 0;
    font-size: 15.5px;
    color: var(--text-muted);
    animation: slideDownAnimation 0.25s cubic-bezier(0.16, 1, 0.3, 1);
  }

  @keyframes slideDownAnimation {
    from { opacity: 0; transform: translateY(-6px); }
    to { opacity: 1; transform: translateY(0); }
  }

  /* SECTION 9: TERMINAL HERO CONVERSION PANEL */
  .si-conversion-banner-box {
    background: var(--bg-shade);
    border: 1px solid var(--border-light);
    border-radius: 6px;
    padding: 80px 64px;
    display: grid;
    grid-template-columns: 1.2fr 0.8fr;
    gap: 64px;
    align-items: center;
  }

  .si-conversion-banner-box h2 {
    font-family: var(--font-sans);
    font-size: 44px;
    font-weight: 700;
    margin-bottom: 16px;
  }

  .si-inline-chips-flex {
    display: flex;
    gap: 8px;
    margin-bottom: 24px;
  }

  .si-chip-meta-node {
    font-size: 11px;
    font-weight: 600;
    color: var(--text-muted);
    background: var(--bg-base);
    border: 1px solid var(--border-light);
    padding: 6px 14px;
    border-radius: 4px;
    text-transform: uppercase;
    letter-spacing: 0.05em;
  }

  .si-conversion-action-pane {
    display: flex;
    justify-content: flex-end;
  }
</style>

<div class="si-executive-desktop">

  <!-- SECTION 1: HERO CONTAINER -->
  <header class="si-hero-wrapper">
    <div class="si-hero-text">
      <span class="si-eyebrow-tag">Entity Graph Optimization</span>
      <h1>Google Knowledge Panel for Realtors</h1>
      <p class="si-lead-paragraph">Build a stronger professional presence with a professionally optimized Google Knowledge Panel for Realtors. At StatusIndex, we help real estate agents, brokers, and independent realtors build, optimize, and manage their presence in Google's Knowledge Graph. Unlike traditional SEO agencies, we focus on entity recognition that helps Google understand who you are and display accurate information in Search.</p>
      <div class="si-btn-group">
        <a class="si-action-btn" href="/eligibility">Free Realtor Entity Audit</a>
      </div>
    </div>

    <!-- IMAGE: temporary Founder/CEO asset, swap later for realtor image -->
    <img src="https://framerusercontent.com/images/FQ6iJZEmYISLbQGbNzjIZ2vOKTA.webp?width=500&height=281" class="si-hero-image-frame" alt="Google Knowledge Panel for Realtors">
  </header>

  <!-- SECTION 2: WHY MANY REALTORS NEVER RECEIVE A PANEL -->
  <section class="si-split-layout-grid">
    <div>
      <span class="si-eyebrow-tag">The Structural Signal Gap</span>
      <h2 class="section-heading">Why Many Realtors Never Receive a Google Knowledge Panel</h2>
    </div>
    <div class="si-split-content-pane">
      <div class="si-node-card-border">
        <h3>Asset Dispersion</h3>
        <p>Having an active Google Business Profile, listings, or a strong online presence does not automatically earn you a Google Knowledge Panel. Google relies on consistent entity signals, trusted sources, and a well-connected digital footprint before recognizing a realtor as a verified entity.</p>
      </div>
      <div class="si-text-alert-frame">
        <p>Many realtors struggle with weak or missing Google Business Profile signals, inconsistent name, license, and brokerage data, no structured schema markup, and limited trusted mentions across the web. Without these trusted connections, Google treats the agent as an unverified entity, leading to lower trust and fewer inbound leads from search.</p>
      </div>
    </div>
  </section>

  <!-- SECTION 3: HOW STATUSINDEX BUILDS ENTITIES -->
  <section>
    <span class="si-eyebrow-tag">Framework Engineering</span>
    <h2 class="section-heading">How StatusIndex Builds Google-Recognized Realtor Entities</h2>
    <p style="max-width: 760px; margin-bottom: 40px;">At StatusIndex, we use an entity-first framework designed to strengthen your realtor digital identity rather than simply improve keyword rankings. Our goal is to help Google confidently recognize you as a realtor by creating consistent, trustworthy entity relationships across the web.</p>
    
    <div class="si-triple-tile-grid">
      <div class="si-data-step-card">
        <span class="index-num">01</span>
        <h3>Footprint Diagnostics</h3>
        <p>Our process begins by auditing your current digital footprint and identifying precise entity gaps across structural indices.</p>
      </div>
      <div class="si-data-step-card">
        <span class="index-num">02</span>
        <h3>RealEstateAgent Architecture</h3>
        <p>We optimize your Google Business Profile and execute structured deployment of explicit Schema.org RealEstateAgent markup.</p>
      </div>
      <div class="si-data-step-card">
        <span class="index-num">03</span>
        <h3>Authority Placement</h3>
        <p>We strengthen authoritative citations, align listings, and orchestrate brand footprints across trusted local reference nodes.</p>
      </div>
    </div>
  </section>

  <!-- SECTION 4: BENEFITS OF AN OPTIMIZED PANEL -->
  <section class="si-split-layout-grid">
    <div>
      <span class="si-eyebrow-tag">Measurable Architecture Advantages</span>
      <h2 class="section-heading">Benefits of an Optimized Google Knowledge Panel</h2>
      <p>A Google Knowledge Panel does more than display your name—it strengthens how Google and your clients perceive your professional identity. A well-optimized panel supports trust, improves branded search visibility, and helps buyers and sellers find accurate information in one place.</p>
    </div>
    <div class="si-matrix-layout-grid">
      <div class="si-matrix-item-box">
        <h3>Higher CTR</h3>
        <p>Higher click-through rates from Google search engine parameters.</p>
      </div>
      <div class="si-matrix-item-box">
        <h3>Stronger Trust</h3>
        <p>Stronger organic trust parameters established from active buyers and sellers.</p>
      </div>
      <div class="si-matrix-item-box">
        <h3>Direct Inquiries</h3>
        <p>More direct transactional inbound inquiries and localized leads.</p>
      </div>
      <div class="si-matrix-item-box">
        <h3>Brand Authority</h3>
        <p>Improved overall domain and brand authority footprints across local markets.</p>
      </div>
      <div class="si-matrix-item-box">
        <h3>Profile Uniformity</h3>
        <p>Keep your official brand information explicitly uniform across global web nodes.</p>
      </div>
      <div class="si-matrix-item-box">
        <h3>Long-Term Anchor</h3>
        <p>Create a robust, permanent structural foundation for ongoing Knowledge Graph updates.</p>
      </div>
    </div>
  </section>

  <!-- SECTION 5: OUR PROCESS LINEAR TIMELINE -->
  <section>
    <span class="si-eyebrow-tag">System Pipelines</span>
    <h2 class="section-heading">Our Realtor Knowledge Panel Process</h2>
    <p style="max-width: 680px;">We follow a transparent, step-by-step process designed to strengthen your entity signals and improve your eligibility for a Google Knowledge Panel.</p>
    
    <div class="si-linear-timeline-track">
      <div class="si-timeline-row-node">
        <span class="node-indicator">Phase 01</span>
        <h3>Entity Audit</h3>
        <p>We analyze your current search presence to identify missing signals, inconsistencies, and factors preventing entity recognition.</p>
      </div>
      <div class="si-timeline-row-node">
        <span class="node-indicator">Phase 02</span>
        <h3>Entity Research</h3>
        <p>We review your Google Business Profile, trusted sources, and online presence to understand how Google currently interprets your identity.</p>
      </div>
      <div class="si-timeline-row-node">
        <span class="node-indicator">Phase 03</span>
        <h3>Schema Alignment</h3>
        <p>We implement Schema.org RealEstateAgent markup that helps Google's systems connect your website with your verified realtor identity.</p>
      </div>
      <div class="si-timeline-row-node">
        <span class="node-indicator">Phase 04</span>
        <h3>Authority Building</h3>
        <p>We strengthen trusted references through authoritative citations, client reviews, and consistent entity information.</p>
      </div>
      <div class="si-timeline-row-node">
        <span class="node-indicator">Phase 05</span>
        <h3>Graph Optimization</h3>
        <p>We improve the signals Google uses to connect your Google Business Profile, website, and authoritative sources within the Knowledge Graph.</p>
      </div>
      <div class="si-timeline-row-node">
        <span class="node-indicator">Phase 06</span>
        <h3>Monitoring &amp; Management</h3>
        <p>As your business grows, we help keep your entity information accurate, consistent, and aligned across trusted platforms.</p>
      </div>
    </div>
  </section>

  <!-- SECTION 6: MANAGEMENT CONTEXT MODULE -->
  <section class="si-management-panel-dark">
    <div>
      <span class="si-eyebrow-tag" style="color: #9CA3AF;">Control Architecture</span>
      <h2>Claim, Verify and Manage Your Realtor Knowledge Panel</h2>
      <p style="margin-top: 20px;">Once Google generates your Knowledge Panel, maintaining accurate information becomes just as important as earning it. StatusIndex helps realtors navigate the official verification process, claim eligible panels, and keep their information up to date.</p>
    </div>
    <div class="si-management-inner-card">
      <h3>Ongoing Governance</h3>
      <p style="font-size: 15px; line-height: 1.6;">Our panel management services include identity verification guidance, correcting inaccurate business or bio information, updating photos, links, and contact details, syncing your Google Business Profile data, and maintaining consistent entity signals as your career evolves. The goal is to ensure your Google presence remains accurate, credible, and aligned with your professional brand.</p>
    </div>
  </section>

  <!-- SECTION 7: PRICING INTERFACE MATRIX -->
  <section>
    <span class="si-eyebrow-tag">Investment Tiers</span>
    <h2 class="section-heading">Transparent Realtor Knowledge Panel Pricing</h2>
    <p>Choose the service tier that matches your current digital needs.</p>
    
    <div class="si-pricing-matrix-row">
      <div class="si-pricing-segment-box">
        <div>
          <h3>Entity Audit &amp; Strategy</h3>
          <p>A complete review of your digital footprint with a personalized action plan to improve your Knowledge Panel eligibility.</p>
        </div>
        <a class="si-action-btn si-action-btn-secondary" href="/pricing">View Pricing</a>
      </div>
      <div class="si-pricing-segment-box featured-box">
        <div>
          <h3>Build &amp; Optimization</h3>
          <p>Full implementation of structured business data, entity alignment, authoritative citations, and Google Knowledge Graph optimization.</p>
        </div>
        <a class="si-action-btn" href="/pricing">View Pricing</a>
      </div>
      <div class="si-pricing-segment-box">
        <div>
          <h3>Panel Management</h3>
          <p>Ongoing tracking, monitoring, corrections, and adjustments to protect your representation as your business grows.</p>
        </div>
        <a class="si-action-btn si-action-btn-secondary" href="/pricing">View Pricing</a>
      </div>
    </div>
  </section>

  <!-- SECTION 8: DESKTOP SCHEMA ACCORDIONS -->
  <section class="si-faq-split-pane">
    <div>
      <span class="si-eyebrow-tag">Resource Base</span>
      <h2 class="section-heading">Frequently Asked Questions</h2>
      <p>System deployment mechanics and criteria frameworks.</p>
    </div>
    <div class="si-faq-accordion-container">
      <details class="si-faq-accordion-node">
        <summary>Can I create a Google Knowledge Panel myself?</summary>
        <p>No. Google generates Knowledge Panels automatically after recognizing strong and consistent entity signals across verified data hubs.</p>
      </details>
      <details class="si-faq-accordion-node">
        <summary>How long does the process take?</summary>
        <p>Timelines vary based on your current digital footprint, but many realtors begin strengthening their entity presence within 60–120 days.</p>
      </details>
      <details class="si-faq-accordion-node">
        <summary>Do independent realtors qualify?</summary>
        <p>Yes. Independent realtors can become eligible by building authority, maintaining consistent information records, and strengthening trusted entity signals.</p>
      </details>
      <details class="si-faq-accordion-node">
        <summary>Is a Google Business Profile required?</summary>
        <p>Not always mandatory, but it serves as a valuable authoritative local source that reinforces Google's understanding of realtor entities.</p>
      </details>
      <details class="si-faq-accordion-node">
        <summary>Can I claim my Knowledge Panel?</summary>
        <p>Yes, but only after Google has generated one. Verified representatives can claim eligible panels through Google's official verification process.</p>
      </details>
      <details class="si-faq-accordion-node">
        <summary>Can incorrect information be fixed?</summary>
        <p>Yes. Once verified, eligible realtors can suggest direct edits, and StatusIndex helps manage updates and maintain accurate information maps over time.</p>
      </details>
    </div>
  </section>

  <!-- SECTION 9: TERMINAL HERO CONVERSION PANEL -->
  <footer class="si-conversion-banner-box">
    <div>
      <div class="si-inline-chips-flex">
        <span class="si-chip-meta-node">One Audit</span>
        <span class="si-chip-meta-node">No Obligation</span>
        <span class="si-chip-meta-node">Actionable Insights</span>
      </div>
      <h2>Get Your Free Realtor Entity Audit</h2>
      <p>Find out what's preventing your Google Knowledge Panel for Realtors from appearing. We'll review your professional identity, identify entity gaps, and provide a clear roadmap to strengthen your Google Knowledge Graph presence.</p>
    </div>
    <div class="si-conversion-action-pane">
      <a class="si-action-btn" href="/eligibility">Check Eligibility</a>
    </div>
  </footer>

</div>`,id:`eUnClJAow`,layoutId:`eUnClJAow`,radius:`0px`,style:{height:`100%`,width:`100%`},type:`html`,url:``,width:`100%`,zoom:1})})})})}),o(`div`,{id:`overlay`})]})})}),[`.framer-NxWMB.framer-1k5tfv7, .framer-NxWMB .framer-1k5tfv7 { display: block; }`,`.framer-NxWMB.framer-hnbqvu { align-content: center; align-items: center; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 1200px; }`,`.framer-NxWMB .framer-whpf7i-container { flex: none; height: 6400px; position: relative; width: 100%; }`,`@media (min-width: 810px) and (max-width: 1199.98px) { .framer-NxWMB.framer-hnbqvu { width: 810px; } .framer-NxWMB .framer-whpf7i-container { height: 8000px; }}`,`@media (max-width: 809.98px) { .framer-NxWMB.framer-hnbqvu { width: 390px; } .framer-NxWMB .framer-whpf7i-container { height: 7900px; }}`],`framer-NxWMB`),H.displayName=`Realtors`,H.defaultProps={height:6918,width:1200},h(H,[{explicitInter:!0,fonts:[]},...N],{supportsExplicitInterCodegen:!0}),U={exports:{queryParamNames:{type:`variable`,annotations:{framerContractVersion:`1`}},Props:{type:`tsType`,annotations:{framerContractVersion:`1`}},default:{type:`reactComponent`,name:`FramerMhh5yRln5`,slots:[],annotations:{framerIntrinsicWidth:`1200`,framerComponentViewportWidth:`true`,framerCanvasComponentVariantDetails:`{"propertyName":"variant","data":{"default":{"layout":["fixed","auto"]},"pKZgvw_vZ":{"layout":["fixed","auto"]},"XF9cNepyg":{"layout":["fixed","auto"]}}}`,framerIntrinsicHeight:`6918`,framerLayoutTemplateFlowEffect:`true`,framerAcceptsLayoutTemplate:`true`,framerAutoSizeImages:`true`,framerContractVersion:`1`,framerImmutableVariables:`true`,framerDisplayContentsDiv:`false`,framerColorSyntax:`true`,framerScrollSections:`false`,framerResponsiveScreen:`true`}},__FramerMetadata__:{type:`variable`}}}}))();export{U as __FramerMetadata__,H as default,F as queryParamNames};
//# sourceMappingURL=T_bR_gDvOpg0bHRhwIzukcOrJ97kaNVRL5VnVNzhs7g.COk6scA0.mjs.map