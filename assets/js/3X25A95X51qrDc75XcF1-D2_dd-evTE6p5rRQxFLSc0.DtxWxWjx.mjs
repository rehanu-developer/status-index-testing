import{t as e}from"./rolldown-runtime.Dh6celcD.mjs";import{M as t,T as n,b as r,j as i,k as a,l as o,s,u as c,v as l}from"./react.BcaIDK9K.mjs";import{S as u,a as d,r as f,t as p}from"./motion.BcpjdyXO.mjs";import{L as m,T as h,W as g,a as _,at as v,i as y,k as b,l as x,lt as S,nt as C,ot as w,st as T,ut as E,y as D,yt as O}from"./framer.B4AXX-9p.mjs";import{n as k,t as A}from"./Embed.Cc2crdEH.mjs";import j,{t as M}from"./K0HcJvqk4CWcPzc_orU1s8L_0J3qAO0D5bkN2kbWTsw.Cd0thxad.mjs";var N,P,F,I,L,R,z,B,V,H,U;e((()=>{s(),g(),p(),n(),k(),M(),N=m(A),P={i15YrGs7S:`(min-width: 1200px)`,KnzxWGInG:`(max-width: 809.98px)`,XQdnY5wN3:`(min-width: 810px) and (max-width: 1199.98px)`},F=[],I=`framer-kURzW`,L={i15YrGs7S:`framer-v-o7n8ht`,KnzxWGInG:`framer-v-1g9mjsn`,XQdnY5wN3:`framer-v-1a7oad3`},R=(e,t,n)=>e&&t?`position`:n,z={"Services Page":`i15YrGs7S`,Phone:`KnzxWGInG`,Tablet:`XQdnY5wN3`},B=({value:e})=>T()?null:o(`style`,{dangerouslySetInnerHTML:{__html:e},"data-framer-html-style":``}),V=({height:e,id:t,width:n,...r})=>({...r,variant:z[r.variant]??r.variant??`i15YrGs7S`}),H=O(l(function(e,n){let s=a(null),l=n??s,p=r(),{activeLocale:m,setLocale:h}=S();C();let{style:g,className:T,layoutId:O,variant:k,...M}=V(e);E(t(()=>j({},m),[m]));let[N,F]=w(k,P,!1),H=b(I),U=i(x)?.isLayoutTemplate,W=!!i(d)?.transition?.layout,G=R(U,W);return v({}),o(x.Provider,{value:{activeVariantId:N,humanReadableVariantMap:z,primaryVariantId:`i15YrGs7S`,variantClassNames:L},children:c(f,{id:O??p,children:[o(B,{value:`html body { background: none; }`}),o(u.div,{...M,className:b(H,`framer-o7n8ht`,T),ref:l,style:{...g},children:o(y,{children:o(_,{className:`framer-1aqmv5r-container`,id:`1aqmv5r`,isModuleExternal:!0,layout:G,nodeId:`RVx_GAyTm`,scopeId:`KsLfEA9nK`,children:o(D,{breakpoint:N,overrides:{KnzxWGInG:{html:`<meta name="viewport" content="width=device-width, initial-scale=1.0">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=Inter+Display:wght@400;500;600&display=swap" rel="stylesheet">

<style>
  :root {
    --bg-main: #FFFFFF;
    --bg-soft: #F8F9FA;
    --bg-card: #FFFFFF;
    --border-color: #E5E7EB;
    --border-dark: #111827;
    --text-primary: #111827;
    --text-muted: #4B5563;
    --accent-blue: #2563EB;
    --font-serif: 'Instrument Serif', Georgia, serif;
    --font-sans: 'Inter Display', -apple-system, BlinkMacSystemFont, sans-serif;
  }

  .si-services * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  .si-services {
    background: var(--bg-main);
    color: var(--text-primary);
    font-family: var(--font-sans);
    -webkit-font-smoothing: antialiased;
    padding: 24px 16px;
    display: flex;
    flex-direction: column;
    gap: 48px;
  }

  /* Typography Base */
  h1, h2, h3 {
    font-family: var(--font-serif);
    font-weight: 400;
    line-height: 1.15;
    letter-spacing: -0.01em;
    color: var(--text-primary);
  }

  p {
    font-family: var(--font-sans);
    font-weight: 400;
    font-size: 14.5px;
    line-height: 1.6;
    color: var(--text-muted);
  }

  /* Universal Layout Tokens */
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

  .section-title {
    font-size: 36px;
    margin-bottom: 14px;
  }

  .btn {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    padding: 16px 24px;
    background: var(--border-dark);
    color: var(--bg-main);
    border: 1px solid var(--border-dark);
    border-radius: 4px;
    font-weight: 500;
    font-size: 14px;
    text-decoration: none;
    transition: background 0.2s ease;
  }

  .btn-outline {
    background: transparent;
    color: var(--text-primary);
    border: 1px solid var(--border-color);
  }

  /* ---------- HERO SECTION ---------- */
  .hero {
    padding-top: 16px;
    border-bottom: 1px solid var(--border-color);
    padding-bottom: 40px;
  }

  .hero h1 {
    font-size: 48px;
    margin-bottom: 16px;
  }

  .hero .lead {
    font-size: 16.5px;
    margin-bottom: 28px;
  }

  .hero-ctas {
    display: flex;
    flex-direction: column;
    gap: 12px;
    margin-bottom: 40px;
  }

  /* Premium Clean Knowledge Panel Mockup (Light Theme) */
  .kp-mock {
    background: var(--bg-soft);
    border: 1px solid var(--border-color);
    border-radius: 6px;
    padding: 24px;
    position: relative;
  }

  .kp-header {
    display: flex;
    align-items: center;
    gap: 16px;
    margin-bottom: 20px;
    border-bottom: 1px solid var(--border-color);
    padding-bottom: 16px;
  }

  .kp-avatar {
    width: 48px;
    height: 48px;
    border: 1px solid var(--border-color);
    background: var(--bg-main);
    font-family: var(--font-serif);
    font-size: 22px;
    color: var(--text-primary);
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .kp-meta h4 {
    font-family: var(--font-serif);
    font-size: 24px;
    font-weight: 400;
  }

  .kp-meta span {
    font-size: 11px;
    color: var(--text-muted);
    text-transform: uppercase;
    letter-spacing: 0.05em;
  }

  .kp-data-row {
    margin-bottom: 14px;
  }

  .kp-label {
    display: flex;
    justify-content: space-between;
    font-size: 11.5px;
    margin-bottom: 6px;
    font-weight: 500;
  }

  .kp-bar-bg {
    height: 4px;
    background: #E5E7EB;
    border-radius: 2px;
    overflow: hidden;
  }

  .kp-bar-fill {
    height: 100%;
    background: var(--border-dark);
  }

  /* ---------- SECTION 2: THE CORE PROBLEM ---------- */
  .problem-grid {
    display: flex;
    flex-direction: column;
    gap: 12px;
    margin-top: 20px;
  }

  .problem-card {
    background: var(--bg-main);
    border-left: 2px solid var(--border-dark);
    padding: 16px 0 16px 16px;
  }

  .problem-card h3 {
    font-size: 22px;
    color: var(--text-primary);
    margin-bottom: 4px;
  }

  .problem-statement {
    margin-top: 24px;
    background: rgba(17, 24, 39, 0.03);
    border: 1px solid var(--border-color);
    padding: 20px;
    border-radius: 4px;
  }

  .problem-statement strong {
    color: var(--text-primary);
    font-weight: 600;
  }

  /* ---------- SECTION 3: FRAMEWORK ---------- */
  .pillar-list {
    display: flex;
    flex-direction: column;
    gap: 24px;
    margin-top: 24px;
  }

  .pillar-item {
    display: flex;
    gap: 16px;
  }

  .pillar-num {
    font-family: var(--font-serif);
    font-size: 32px;
    line-height: 1;
    color: var(--text-primary);
    opacity: 0.3;
  }

  .pillar-content h3 {
    font-size: 24px;
    margin-bottom: 6px;
  }

  .framework-footer {
    margin-top: 32px;
    border-top: 1px solid var(--border-color);
    padding-top: 20px;
    font-style: italic;
  }

  /* ---------- SECTION 4: CORE SERVICES ---------- */
  .services-layout {
    display: flex;
    flex-direction: column;
    gap: 16px;
    margin-top: 24px;
  }

  .service-node {
    background: var(--bg-soft);
    border: 1px solid var(--border-color);
    padding: 24px;
    position: relative;
    border-radius: 4px;
  }

  /* Structural UI markers instead of icons */
  .service-node::after {
    content: '';
    position: absolute;
    top: 24px;
    right: 24px;
    width: 6px;
    height: 6px;
    border-right: 1.5px solid var(--text-primary);
    border-top: 1.5px solid var(--text-primary);
    transform: rotate(45deg);
    opacity: 0.4;
  }

  .service-node h3 {
    font-size: 26px;
    margin-bottom: 8px;
  }

  /* ---------- SECTION 5: PROCESS ---------- */
  .timeline {
    display: flex;
    flex-direction: column;
    margin-top: 28px;
    position: relative;
    padding-left: 20px;
  }

  .timeline::before {
    content: '';
    position: absolute;
    left: 0; top: 8px; bottom: 8px;
    width: 1px;
    background: var(--border-color);
  }

  .timeline-step {
    position: relative;
    padding-bottom: 28px;
  }

  .timeline-step:last-child {
    padding-bottom: 0;
  }

  .timeline-step::before {
    content: '';
    position: absolute;
    left: -24px; top: 6px;
    width: 9px; height: 9px;
    border-radius: 50%;
    background: var(--bg-main);
    border: 2px solid var(--border-dark);
  }

  .timeline-step h3 {
    font-size: 22px;
    margin-bottom: 6px;
  }

  /* ---------- SECTION 6: FINAL CTA ---------- */
  .cta-block {
    background: var(--bg-soft);
    border: 1px solid var(--border-color);
    padding: 40px 20px;
    text-align: center;
    border-radius: 6px;
  }

  .cta-block h2 {
    font-size: 42px;
    margin-bottom: 16px;
  }

  .entity-tags {
    display: flex;
    flex-wrap: wrap;
    gap: 6px;
    justify-content: center;
    margin-bottom: 24px;
  }

  .entity-chip {
    font-size: 11px;
    font-weight: 500;
    color: var(--text-muted);
    background: var(--bg-main);
    border: 1px solid var(--border-color);
    padding: 6px 12px;
    border-radius: 4px;
  }

  .cta-block p {
    margin-bottom: 32px;
  }
</style>

<div class="si-services">

  <!-- HERO / SECTION 1 -->
  <header class="hero">
    <span class="eyebrow">Data Authority Architecture</span>
    <h1>Knowledge Panel Services for Entity Recognition</h1>
    <p class="lead">We architect structured parameters to secure your placement inside Google’s Knowledge Graph. StatusIndex validates identity matrices for founders, executives, authors, and corporate footprints.</p>
    
    <div class="hero-ctas">
      <a class="btn" href="/eligibility">Evaluate Entity Eligibility</a>
      <a class="btn btn-outline" href="#services">Supported Archetypes</a>
    </div>

    <!-- Premium Clean Knowledge Panel Mockup -->
    <div class="kp-mock">
      <div class="kp-header">
        <div class="kp-avatar">JD</div>
        <div class="kp-meta">
          <h4>Jordan Diaz</h4>
          <span>Verified Node Entry</span>
        </div>
      </div>
      
      <div class="kp-data-row">
        <div class="kp-label"><span>Entity Signal Strength</span><span>92%</span></div>
        <div class="kp-bar-bg"><div class="kp-bar-fill" style="width: 92%"></div></div>
      </div>

      <div class="kp-data-row">
        <div class="kp-label"><span>Graph Interconnectivity</span><span>87%</span></div>
        <div class="kp-bar-bg"><div class="kp-bar-fill" style="width: 87%"></div></div>
      </div>
    </div>
  </header>

  <!-- SECTION 2: THE CORE PROBLEM -->
  <section>
    <span class="eyebrow">The Index Imperfection</span>
    <h2 class="section-title">The Cost of Unstructured Footprints</h2>
    <p>Modern identity exists across fragmented networks. Because individual nodes remain disconnected, search engines struggle to unify profiles into verified ecosystem knowledge blocks.</p>
    
    <div class="problem-grid">
      <div class="problem-card">
        <h3>Founders &amp; Executives</h3>
        <p>Corporate records exist isolated on financial indexes without algorithmic structural links to the individual profile.</p>
      </div>
      <div class="problem-card">
        <h3>Authors &amp; Creators</h3>
        <p>Creative listings stay siloed within retailer marketplaces missing verified semantic graph validation signals.</p>
      </div>
      <div class="problem-card">
        <h3>Corporate Brands</h3>
        <p>Public awareness values exist broadly but lack systemic schema pipelines to anchor deep trust metrics.</p>
      </div>
    </div>

    <div class="problem-statement">
      <p>Without architectural alignment, your profile remains <strong>algorithmically ambiguous.</strong> Resolution requires systemic schema authority, not raw volume.</p>
    </div>
  </section>

  <!-- SECTION 3: FRAMEWORK -->
  <section>
    <span class="eyebrow">The System Blueprint</span>
    <h2 class="section-title">The Entity Integration Protocol</h2>
    <p>Moving past standard optimizations, we deploy direct data blueprints to catalog and confirm core markers across target engines.</p>
    
    <div class="pillar-list">
      <div class="pillar-item">
        <div class="pillar-num">01</div>
        <div class="pillar-content">
          <h3>Personal Provenance</h3>
          <p>Standardizing naming conventions, functional history, and key milestones cleanly across structural databases.</p>
        </div>
      </div>
      <div class="pillar-item">
        <div class="pillar-num">02</div>
        <div class="pillar-content">
          <h3>Enterprise Linkage</h3>
          <p>Aligning corporate vehicles, investment tracks, and structural brands explicitly to your primary metadata record.</p>
        </div>
      </div>
      <div class="pillar-item">
        <div class="pillar-num">03</div>
        <div class="pillar-content">
          <h3>External Validation</h3>
          <p>Syncing verified historical reporting and trusted external databases directly to confirm entity authenticity.</p>
        </div>
      </div>
    </div>
    
    <p class="framework-footer">These interlocking structural pillars establish an objective data blueprint, converting disparate web footprints into unified entity authorities.</p>
  </section>

  <!-- SECTION 4: CORE SERVICES -->
  <section id="services">
    <span class="eyebrow">Target Classes</span>
    <h2 class="section-title">Architectural Configurations</h2>
    <p>We program knowledge engines around specified structures, matching requirements directly to the entity classification models used by indexing bots.</p>
    
    <div class="services-layout">
      <div class="service-node">
        <h3>Founders &amp; Executives</h3>
        <p>Connecting executive histories and corporate structures directly to reinforce authority metrics.</p>
      </div>
      <div class="service-node">
        <h3>Entrepreneurs</h3>
        <p>Mapping diverse professional histories and corporate exits into concrete verified records.</p>
      </div>
      <div class="service-node">
        <h3>Authors &amp; Literary Figures</h3>
        <p>Unifying catalog identifiers and editorial notes to isolate clear creative authority maps.</p>
      </div>
      <div class="service-node">
        <h3>Real Estate Specialists</h3>
        <p>Grouping regional licenses, transactions, and office points into localized authority structures.</p>
      </div>
      <div class="service-node">
        <h3>Artists &amp; Producers</h3>
        <p>Tying media files and critical references into clean cultural data entries.</p>
      </div>
      <div class="service-node">
        <h3>Corporate Entities</h3>
        <p>Locking down market footprints and semantic parameters safely across core corporate frameworks.</p>
      </div>
    </div>
  </section>

  <!-- SECTION 5: PROCESS -->
  <section>
    <span class="eyebrow">The Path to Indexing</span>
    <h2 class="section-title">Structural Deployment Stages</h2>
    <p>A calculated, linear method designed to register structural modifications safely inside engine indexes.</p>
    
    <div class="timeline">
      <div class="timeline-step">
        <h3>01 / Footprint Forensic Audit</h3>
        <p>We trace and map data anomalies, conflicting entries, and disconnected records across active registries.</p>
      </div>
      <div class="timeline-step">
        <h3>02 / Custom Schema Composition</h3>
        <p>Developing rich JSON-LD graph code packages to feed data engine crawlers pristine, scannable data.</p>
      </div>
      <div class="timeline-step">
        <h3>03 / Platform Signal Equalization</h3>
        <p>Harmonizing validation data matrices across leading data platforms and operational registries globally.</p>
      </div>
      <div class="timeline-step">
        <h3>04 / Node Anchor Reinforcement</h3>
        <p>Generating verified connections on reliable structural nodes to validate global presence definitions.</p>
      </div>
      <div class="timeline-step">
        <h3>05 / Graph Submission &amp; Lock</h3>
        <p>Pushing finalized data architecture updates to prompt engine verification and achieve permanent panel recognition.</p>
      </div>
    </div>
  </section>

  <!-- SECTION 6: FINAL CTA -->
  <section>
    <div class="cta-block">
      <h2>Claim Your Entity Placement</h2>
      <div class="entity-tags">
        <span class="entity-chip">Corporate Node</span>
        <span class="entity-chip">Individual Profile</span>
        <span class="entity-chip">Author Registry</span>
        <span class="entity-chip">Brand Graph</span>
      </div>
      <p>Uncoordinated digital profiles invite semantic errors and depress organic authority scales. Secure your formal registry entry through verified architecture design.</p>
      <a class="btn" href="/eligibility">Request Preliminary Entity Audit</a>
    </div>
  </section>

</div>`}},children:o(A,{height:`100%`,html:`<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Knowledge Panel Services | StatusIndex</title>
<meta name="description" content="StatusIndex builds, strengthens, and manages Google Knowledge Panels for founders, entrepreneurs, authors, realtors, artists, and brands.">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">
<style>
  :root{
    --bg:#ffffff;
    --bg-soft:#F6F6FA;
    --ink:#0E1116;
    --ink-soft:#5B6072;
    --line:#E7E9F2;
    --accent:#2A3EFF;
    --accent-soft:#EEF0FF;
    --accent-ink:#ffffff;
    --gold:#C9922E;
    --radius:22px;
    --max:1180px;
    --serif:'Instrument Serif', Georgia, serif;
    --sans:'Inter', sans-serif;
  }
  *{box-sizing:border-box;}
  html{scroll-behavior:smooth;}
  body{
    margin:0;
    background:var(--bg);
    color:var(--ink);
    font-family:var(--sans);
    -webkit-font-smoothing:antialiased;
    overflow-x:hidden;
  }
  h1,h2,h3{
    font-family:var(--serif);
    font-weight:400;
  }
  .wrap{
    max-width:var(--max);
    margin:0 auto;
    padding:0 32px;
  }
  a{color:inherit;text-decoration:none;}

  .btn{
    display:inline-flex;align-items:center;gap:8px;
    background:var(--ink);color:#fff;
    padding:13px 26px;
    border-radius:999px;
    font-weight:600;font-size:14px;
    font-family:var(--sans);
    letter-spacing:-0.01em;
    border:1px solid var(--ink);
    transition:transform .15s ease, background .15s ease;
    cursor:pointer;
    white-space:nowrap;
  }
  .btn:hover{transform:translateY(-2px);background:var(--accent);border-color:var(--accent);}
  .btn-outline{
    background:transparent;color:var(--ink);border:1px solid var(--line);
  }
  .btn-outline:hover{background:var(--bg-soft);transform:translateY(-2px);}

  /* ---------- decorative clouds ---------- */
  .cloud{
    position:absolute;
    width:360px;height:360px;
    background:radial-gradient(circle at 30% 30%, rgba(42,62,255,0.07), rgba(42,62,255,0) 70%);
    border-radius:50%;
    filter:blur(4px);
    pointer-events:none;
  }

  /* ---------- HERO ---------- */
  .hero{
    position:relative;
    padding:110px 0 72px;
    text-align:center;
    overflow:hidden;
  }
  .hero .cloud.c1{top:-130px;left:-110px;}
  .hero .cloud.c2{top:-70px;right:-150px;background:radial-gradient(circle at 30% 30%, rgba(201,146,46,0.08), rgba(201,146,46,0) 70%);}
  .eyebrow{
    display:inline-flex;align-items:center;gap:8px;
    font-family:var(--sans);
    font-size:13px;font-weight:600;
    letter-spacing:0.06em;text-transform:uppercase;
    color:var(--accent);
    background:var(--accent-soft);
    border:1px solid rgba(42,62,255,0.15);
    padding:8px 18px;border-radius:999px;
    margin-bottom:28px;
  }
  .hero h1{
    font-size:clamp(46px,6.4vw,74px);
    line-height:1.04;
    letter-spacing:-0.01em;
    margin:0 auto 24px;
    max-width:840px;
  }
  .hero .lead{
    max-width:600px;
    margin:0 auto 38px;
    font-size:18px;
    line-height:1.65;
    color:var(--ink-soft);
    font-family:var(--sans);
  }
  .hero-ctas{display:flex;gap:14px;justify-content:center;flex-wrap:wrap;margin-bottom:68px;}

  /* Knowledge panel mockup - signature element */
  .kp-mock{
    position:relative;
    max-width:660px;
    margin:0 auto;
    background:#fff;
    border:1px solid var(--line);
    border-radius:var(--radius);
    box-shadow:0 40px 80px -30px rgba(14,17,22,0.18);
    padding:32px;
    text-align:left;
    display:flex;
    gap:24px;
  }
  .kp-mock .avatar{
    width:88px;height:88px;border-radius:18px;flex-shrink:0;
    background:linear-gradient(135deg,var(--accent),#7C89FF);
    display:flex;align-items:center;justify-content:center;
    color:#fff;font-family:var(--serif);font-size:32px;
  }
  .kp-mock .kp-name{font-family:var(--serif);font-size:22px;margin:0 0 3px;display:flex;align-items:center;gap:8px;}
  .kp-mock .verified{
    width:17px;height:17px;background:var(--accent);border-radius:50%;
    display:inline-flex;align-items:center;justify-content:center;color:#fff;font-size:10px;
  }
  .kp-mock .kp-role{font-size:13px;color:var(--ink-soft);margin-bottom:16px;font-family:var(--sans);}
  .kp-mock .kp-tags{display:flex;gap:8px;flex-wrap:wrap;margin-bottom:16px;}
  .kp-mock .kp-tag{
    font-family:var(--sans);
    font-size:11.5px;font-weight:600;color:var(--ink-soft);
    background:var(--bg-soft);border:1px solid var(--line);
    padding:5px 11px;border-radius:999px;
  }
  .kp-mock .kp-bar{height:7px;border-radius:4px;background:var(--bg-soft);overflow:hidden;margin-bottom:6px;}
  .kp-mock .kp-bar span{display:block;height:100%;background:var(--accent);border-radius:4px;}
  .kp-mock .kp-bar-label{font-family:var(--sans);font-size:11px;color:var(--ink-soft);display:flex;justify-content:space-between;margin-bottom:11px;}

  /* ---------- SECTION shell ---------- */
  section{padding:96px 0;}
  .section-head{max-width:700px;margin-bottom:52px;}
  .section-num{
    font-family:var(--sans);
    font-size:13px;font-weight:600;color:var(--accent);
    letter-spacing:0.06em;text-transform:uppercase;
    margin-bottom:16px;display:block;
  }
  .section-head h2{
    font-size:clamp(30px,3.6vw,44px);
    line-height:1.12;letter-spacing:-0.01em;
    margin:0 0 18px;
  }
  .section-head p{font-family:var(--sans);font-size:17px;line-height:1.7;color:var(--ink-soft);margin:0;}
  .soft{background:var(--bg-soft);}

  /* ---------- Section 2: problem cards ---------- */
  .problem-grid{
    display:grid;grid-template-columns:repeat(2,1fr);gap:18px;
  }
  .problem-card{
    background:#fff;border:1px solid var(--line);border-radius:18px;
    padding:28px 28px 26px;
    transition:box-shadow .15s ease, border-color .15s ease;
  }
  .problem-card:hover{box-shadow:0 20px 40px -24px rgba(14,17,22,0.18);border-color:#D8DCEA;}
  .problem-card .role{font-family:var(--serif);font-size:20px;margin-bottom:10px;display:flex;align-items:center;gap:10px;}
  .problem-card .role .dot{width:7px;height:7px;border-radius:50%;background:var(--gold);}
  .problem-card p{margin:0;color:var(--ink-soft);font-family:var(--sans);font-size:15px;line-height:1.65;}
  .problem-note{
    margin-top:28px;padding:24px 28px;border-radius:18px;
    background:var(--ink);color:#fff;font-family:var(--sans);font-size:15.5px;line-height:1.7;
  }
  .problem-note strong{color:var(--gold);font-weight:600;}

  /* ---------- Section 3: framework pillars ---------- */
  .pillars{display:grid;grid-template-columns:repeat(3,1fr);gap:20px;}
  .pillar{
    border:1px solid var(--line);border-radius:18px;padding:32px 28px;
    background:#fff;position:relative;
    transition:box-shadow .15s ease, border-color .15s ease;
  }
  .pillar:hover{box-shadow:0 20px 40px -24px rgba(14,17,22,0.18);border-color:#D8DCEA;}
  .pillar .pnum{
    font-family:var(--serif);
    font-size:16px;font-weight:400;color:var(--accent);
    background:var(--accent-soft);
    width:32px;height:32px;border-radius:50%;
    display:flex;align-items:center;justify-content:center;
    margin-bottom:20px;
  }
  .pillar h3{font-size:19px;margin:0 0 10px;}
  .pillar p{margin:0;font-family:var(--sans);font-size:14.5px;color:var(--ink-soft);line-height:1.65;}
  .framework-tail{
    margin-top:30px;font-family:var(--sans);font-size:16px;color:var(--ink-soft);line-height:1.75;
    border-left:2px solid var(--accent);padding-left:22px;
  }

  /* ---------- Section 4: services grid (professional icon cards) ---------- */
  .services-grid{
    display:grid;grid-template-columns:repeat(3,1fr);gap:20px;
  }
  .service-card{
    border:1px solid var(--line);border-radius:20px;
    padding:32px 28px;background:#fff;
    transition:border-color .18s ease, transform .18s ease, box-shadow .18s ease;
  }
  .service-card:hover{
    border-color:var(--accent);
    transform:translateY(-5px);
    box-shadow:0 24px 48px -26px rgba(42,62,255,0.28);
  }
  .service-card .icon-box{
    width:52px;height:52px;border-radius:14px;
    background:linear-gradient(155deg, var(--accent-soft), #fff);
    border:1px solid rgba(42,62,255,0.14);
    display:flex;align-items:center;justify-content:center;
    margin-bottom:22px;
    color:var(--accent);
  }
  .service-card .icon-box svg{width:24px;height:24px;}
  .service-card h3{font-size:19px;margin:0 0 9px;}
  .service-card p{margin:0;font-family:var(--sans);font-size:14.5px;color:var(--ink-soft);line-height:1.65;}

  /* ---------- Section 5: process steps ---------- */
  .steps{display:flex;flex-direction:column;}
  .step{
    display:grid;grid-template-columns:70px 1fr;gap:26px;
    padding:28px 0;border-top:1px solid var(--line);
  }
  .step:last-child{border-bottom:1px solid var(--line);}
  .step .snum{
    font-family:var(--serif);
    font-size:26px;color:var(--accent);
  }
  .step h3{margin:0 0 9px;font-size:19px;}
  .step p{margin:0;font-family:var(--sans);font-size:15px;color:var(--ink-soft);line-height:1.7;max-width:640px;}

  /* ---------- Section 6: final CTA ---------- */
  .final-cta{
    position:relative;
    background:var(--ink);
    color:#fff;
    border-radius:30px;
    padding:80px 40px;
    text-align:center;
    overflow:hidden;
  }
  .final-cta .cloud{
    background:radial-gradient(circle at 30% 30%, rgba(255,255,255,0.10), rgba(255,255,255,0) 70%);
  }
  .final-cta .cloud.c1{top:-130px;left:-90px;width:320px;height:320px;}
  .final-cta .cloud.c2{bottom:-150px;right:-110px;width:360px;height:360px;}
  .final-cta h2{
    font-size:clamp(30px,4.2vw,46px);
    letter-spacing:-0.01em;line-height:1.14;
    margin:0 0 18px;position:relative;
  }
  .final-cta .chip-row{
    display:flex;gap:10px;flex-wrap:wrap;justify-content:center;
    margin:28px 0 36px;position:relative;
  }
  .final-cta .chip{
    font-family:var(--sans);
    font-size:13px;font-weight:600;
    border:1px solid rgba(255,255,255,0.18);
    padding:8px 17px;border-radius:999px;color:rgba(255,255,255,0.85);
  }
  .final-cta p.sub{
    max-width:580px;margin:0 auto 36px;color:rgba(255,255,255,0.65);
    font-family:var(--sans);
    font-size:15.5px;line-height:1.75;position:relative;
  }
  .final-cta .btn{
    background:#fff;color:var(--ink);border-color:#fff;position:relative;
  }
  .final-cta .btn:hover{background:var(--gold);border-color:var(--gold);color:#fff;}

  @media (prefers-reduced-motion: reduce){
    *{transition:none !important;scroll-behavior:auto !important;}
  }
</style>
</head>
<body>

<!-- ============ HERO / SECTION 1 ============ -->
<header class="hero">
  <div class="cloud c1"></div>
  <div class="cloud c2"></div>
  <div class="wrap">
    <span class="eyebrow">Google Knowledge Panel Services</span>
    <h1>Knowledge Panel Services for Entity Authority</h1>
    <p class="lead">
      StatusIndex helps individuals and organizations become clearly recognized entities inside Google's Knowledge Graph.
      We build, strengthen, and manage Google Knowledge Panels for founders, CEOs, entrepreneurs, authors, realtors, artists, and brands —
      turning your digital presence into a structured, verified identity Google can confidently display.
    </p>
    <div class="hero-ctas">
      <a class="btn" href="/eligibility">Check Eligibility</a>
      <a class="btn btn-outline" href="#services">See Who We Work With</a>
    </div>

    <div class="kp-mock">
      <div class="avatar">JD</div>
      <div>
        <div class="kp-name">Jordan Diaz <span class="verified">✓</span></div>
        <div class="kp-role">Founder &amp; CEO — Structured Entity Profile</div>
        <div class="kp-tags">
          <span class="kp-tag">Presence</span>
          <span class="kp-tag">Identity</span>
          <span class="kp-tag">Visibility</span>
          <span class="kp-tag">Confidence</span>
        </div>
        <div class="kp-bar-label"><span>Entity signal strength</span><span>92%</span></div>
        <div class="kp-bar"><span style="width:92%"></span></div>
        <div class="kp-bar-label"><span>Knowledge Graph connectivity</span><span>87%</span></div>
        <div class="kp-bar"><span style="width:87%"></span></div>
      </div>
    </div>
  </div>
</header>

<!-- ============ SECTION 2: The Core Problem ============ -->
<section>
  <div class="wrap">
    <div class="section-head">
      <span class="section-num">The Core Problem</span>
      <h2>Unstructured Digital Identity</h2>
      <p>Most professionals already exist online, but their identity is fragmented across platforms — which is exactly why Google struggles to form a complete Knowledge Panel.</p>
    </div>
    <div class="problem-grid">
      <div class="problem-card">
        <div class="role"><span class="dot"></span>Founder</div>
        <p>Has company data on Crunchbase but no unified profile in Google.</p>
      </div>
      <div class="problem-card">
        <div class="role"><span class="dot"></span>Author</div>
        <p>Appears on Amazon but lacks structured Knowledge Panel signals.</p>
      </div>
      <div class="problem-card">
        <div class="role"><span class="dot"></span>Realtor</div>
        <p>Has active listings but weak personal entity recognition.</p>
      </div>
      <div class="problem-card">
        <div class="role"><span class="dot"></span>Brand</div>
        <p>Has visibility but no connected authority graph tying it together.</p>
      </div>
    </div>
    <div class="problem-note">
      Without structured identity signals, you remain <strong>partially visible — not fully recognized.</strong>
      This disconnect is what prevents Google from forming a complete Knowledge Panel.
    </div>
  </div>
</section>

<!-- ============ SECTION 3: Framework ============ -->
<section class="soft">
  <div class="wrap">
    <div class="section-head">
      <span class="section-num">Our Framework</span>
      <h2>An Entity-Based Knowledge Panel Framework</h2>
      <p>We don't rely on traditional SEO methods alone. We build entity architecture systems that connect your identity across the entire web.</p>
    </div>
    <div class="pillars">
      <div class="pillar">
        <div class="pnum">1</div>
        <h3>Personal Identity</h3>
        <p>Your name, role, and profession — aligned and consistent everywhere it appears.</p>
      </div>
      <div class="pillar">
        <div class="pnum">2</div>
        <h3>Organizational Identity</h3>
        <p>Your companies, ventures, and brands — connected to you as a recognized entity.</p>
      </div>
      <div class="pillar">
        <div class="pnum">3</div>
        <h3>External Authority Sources</h3>
        <p>Press, profiles, and structured databases that validate your identity from the outside.</p>
      </div>
    </div>
    <p class="framework-tail">
      Together, these three layers create a unified Knowledge Graph signal that strengthens your eligibility for a Google Knowledge Panel —
      a complete identity network instead of isolated SEO signals.
    </p>
  </div>
</section>

<!-- ============ SECTION 4: Core Services (professional line-icon cards) ============ -->
<section id="services">
  <div class="wrap">
    <div class="section-head">
      <span class="section-num">Who We Work With</span>
      <h2>Our Core Services</h2>
      <p>We build Knowledge Panel strategies across multiple professional categories — each one designed around how Google actually understands that entity type.</p>
    </div>
    <div class="services-grid">

      <div class="service-card">
        <div class="icon-box">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">
            <rect x="3" y="7.5" width="18" height="12.5" rx="2"/>
            <path d="M8 7.5V5.8A1.8 1.8 0 0 1 9.8 4h4.4A1.8 1.8 0 0 1 16 5.8V7.5"/>
            <line x1="3" y1="12.8" x2="21" y2="12.8"/>
            <line x1="10.8" y1="12.8" x2="13.2" y2="12.8"/>
          </svg>
        </div>
        <h3>Founders &amp; CEOs</h3>
        <p>We strengthen leadership identity, company association, and executive authority signals.</p>
      </div>

      <div class="service-card">
        <div class="icon-box">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">
            <path d="M12 2.5c2.6 2.1 4.1 5.7 4.1 9.3 0 2.1-.5 3.6-1.1 4.7L12 19.5l-3-3c-.6-1.1-1.1-2.6-1.1-4.7 0-3.6 1.5-7.2 4.1-9.3z"/>
            <circle cx="12" cy="9.8" r="1.6"/>
            <path d="M8.6 15.9 6.3 18.2l1 1 2.3-2.3"/>
            <path d="M15.4 15.9 17.7 18.2l-1 1-2.3-2.3"/>
          </svg>
        </div>
        <h3>Entrepreneurs</h3>
        <p>We connect startups, ventures, and achievements into a verified founder entity structure.</p>
      </div>

      <div class="service-card">
        <div class="icon-box">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">
            <path d="M4 5.8A2.3 2.3 0 0 1 6.3 3.5H12V20H6.3A2.3 2.3 0 0 0 4 22.3V5.8z"/>
            <path d="M20 5.8A2.3 2.3 0 0 0 17.7 3.5H12V20h5.7A2.3 2.3 0 0 1 20 22.3V5.8z"/>
          </svg>
        </div>
        <h3>Authors &amp; Writers</h3>
        <p>We align books, publications, and author profiles to create strong literary entity recognition.</p>
      </div>

      <div class="service-card">
        <div class="icon-box">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">
            <path d="M4 11 12 4.3 20 11"/>
            <path d="M6 10v9.2c0 .7.5 1.3 1.2 1.3h9.6c.7 0 1.2-.6 1.2-1.3V10"/>
            <path d="M9.8 20.5v-5.3h4.4v5.3"/>
          </svg>
        </div>
        <h3>Realtors</h3>
        <p>We build structured real estate agent identities with service areas, listings, and credibility signals.</p>
      </div>

      <div class="service-card">
        <div class="icon-box">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">
            <path d="M12 3.2a8.8 8.8 0 1 0 0 17.6c1.05 0 1.9-.85 1.9-1.9 0-.5-.2-.95-.5-1.28-.3-.36-.5-.78-.5-1.22 0-.85.7-1.5 1.5-1.5H16a4.8 4.8 0 0 0 4.8-4.8c0-3.85-3.85-6.9-8.8-6.9z"/>
            <circle cx="7.6" cy="10.6" r="1.05"/>
            <circle cx="10" cy="7.7" r="1.05"/>
            <circle cx="14.4" cy="7.7" r="1.05"/>
            <circle cx="16.3" cy="10.6" r="1.05"/>
          </svg>
        </div>
        <h3>Artists</h3>
        <p>We connect creative portfolios, media presence, and public recognition into a verified artistic entity.</p>
      </div>

      <div class="service-card">
        <div class="icon-box">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">
            <rect x="4" y="3.2" width="9.5" height="17.6" rx="1"/>
            <rect x="15" y="9.6" width="5" height="11.2" rx="1"/>
            <line x1="6.8" y1="7" x2="9" y2="7"/>
            <line x1="6.8" y1="10.6" x2="9" y2="10.6"/>
            <line x1="6.8" y1="14.2" x2="9" y2="14.2"/>
            <line x1="17" y1="13" x2="18.2" y2="13"/>
            <line x1="17" y1="16.4" x2="18.2" y2="16.4"/>
          </svg>
        </div>
        <h3>Companies &amp; Brands</h3>
        <p>We strengthen brand authority, digital presence, and structured business identity across Google Search.</p>
      </div>

    </div>
  </div>
</section>

<!-- ============ SECTION 5: Process ============ -->
<section class="soft">
  <div class="wrap">
    <div class="section-head">
      <span class="section-num">Our Process</span>
      <h2>How We Build &amp; Optimize Knowledge Panels</h2>
      <p>A structured, data-driven process — applied across every category, with tailored adjustments for each one.</p>
    </div>
    <div class="steps">
      <div class="step">
        <div class="snum">01</div>
        <div>
          <h3>Audit your digital footprint</h3>
          <p>We identify missing, weak, or conflicting identity signals across your existing online presence.</p>
        </div>
      </div>
      <div class="step">
        <div class="snum">02</div>
        <div>
          <h3>Build structured schema markup</h3>
          <p>We implement the structured data Google needs to correctly parse and understand your entity.</p>
        </div>
      </div>
      <div class="step">
        <div class="snum">03</div>
        <div>
          <h3>Align your presence across platforms</h3>
          <p>LinkedIn, Crunchbase, press, and media profiles are connected and made consistent with each other.</p>
        </div>
      </div>
      <div class="step">
        <div class="snum">04</div>
        <div>
          <h3>Reinforce entity signals</h3>
          <p>We build consistent citations that reinforce your identity across trusted, structured sources.</p>
        </div>
      </div>
      <div class="step">
        <div class="snum">05</div>
        <div>
          <h3>Strengthen Knowledge Graph connectivity</h3>
          <p>The final layer connects everything, so Google can confidently display your Knowledge Panel.</p>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- ============ SECTION 6: Final CTA ============ -->
<section>
  <div class="wrap">
    <div class="final-cta">
      <div class="cloud c1"></div>
      <div class="cloud c2"></div>
      <h2>Start Building Your Knowledge Panel Presence</h2>
      <div class="chip-row">
        <span class="chip">Founder or CEO</span>
        <span class="chip">Entrepreneur</span>
        <span class="chip">Author</span>
        <span class="chip">Realtor</span>
        <span class="chip">Artist</span>
        <span class="chip">Brand</span>
      </div>
      <p class="sub">
        If your identity isn't clearly structured in Google, you're missing authority, trust, and visibility.
        Start with a free entity audit and discover how Google currently understands your identity.
      </p>
      <a class="btn" href="/eligibility">Start With a Free Entity Audit</a>
    </div>
  </div>
</section>

</body>
</html>`,id:`RVx_GAyTm`,layoutId:`RVx_GAyTm`,radius:`0px`,style:{height:`100%`,maxHeight:`100%`,maxWidth:`100%`,width:`100%`},type:`html`,url:``,width:`100%`,zoom:1})})})})}),o(`div`,{id:`overlay`})]})})}),[`.framer-kURzW.framer-1mtkw3m, .framer-kURzW .framer-1mtkw3m { display: block; }`,`.framer-kURzW.framer-o7n8ht { align-content: center; align-items: center; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 1200px; }`,`.framer-kURzW .framer-1aqmv5r-container { flex: none; height: 5069px; max-height: 5439.32px; max-width: 1200px; position: relative; width: 1200px; z-index: 0; }`,`@media (min-width: 810px) and (max-width: 1199.98px) { .framer-kURzW.framer-o7n8ht { width: 810px; } .framer-kURzW .framer-1aqmv5r-container { width: 100%; }}`,`@media (max-width: 809.98px) { .framer-kURzW.framer-o7n8ht { width: 390px; } .framer-kURzW .framer-1aqmv5r-container { height: 4769px; max-height: 6440.32px; width: 100%; }}`],`framer-kURzW`),H.displayName=`Services`,H.defaultProps={height:5587,width:1200},h(H,[{explicitInter:!0,fonts:[]},...N],{supportsExplicitInterCodegen:!0}),U={exports:{Props:{type:`tsType`,annotations:{framerContractVersion:`1`}},queryParamNames:{type:`variable`,annotations:{framerContractVersion:`1`}},default:{type:`reactComponent`,name:`FramerKsLfEA9nK`,slots:[],annotations:{framerContractVersion:`1`,framerScrollSections:`false`,framerDisplayContentsDiv:`false`,framerColorSyntax:`true`,framerImmutableVariables:`true`,framerIntrinsicWidth:`1200`,framerIntrinsicHeight:`5587`,framerResponsiveScreen:`true`,framerAcceptsLayoutTemplate:`true`,framerCanvasComponentVariantDetails:`{"propertyName":"variant","data":{"default":{"layout":["fixed","auto"]},"XQdnY5wN3":{"layout":["fixed","auto"]},"KnzxWGInG":{"layout":["fixed","auto"]}}}`,framerComponentViewportWidth:`true`,framerLayoutTemplateFlowEffect:`true`,framerAutoSizeImages:`true`}},__FramerMetadata__:{type:`variable`}}}}))();export{U as __FramerMetadata__,H as default,F as queryParamNames};
//# sourceMappingURL=3X25A95X51qrDc75XcF1-D2_dd-evTE6p5rRQxFLSc0.DtxWxWjx.mjs.map