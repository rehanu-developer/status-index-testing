import{t as e}from"./rolldown-runtime.Dh6celcD.mjs";import{B as t,I as n,P as r,R as i,T as a,k as o,l as s,s as c}from"./react.BcaIDK9K.mjs";import{E as l,W as u,o as d}from"./framer.B4AXX-9p.mjs";import{a as f,i as p,r as m,t as h}from"./default-utils.BwNK1Q8B.mjs";function g({type:e,url:t,html:n,zoom:r,radius:i,border:a,style:o={}}){return e===`url`&&t?s(v,{url:t,zoom:r,radius:i,border:a,style:o}):e===`html`&&n?s(b,{html:n,style:o}):s(_,{style:o})}function _({style:e}){return s(`div`,{style:{minHeight:D(e),...f,overflow:`hidden`,...e},children:s(`div`,{style:A,children:`To embed a website or widget, add it to the properties\xA0panel.`})})}function v({url:e,zoom:t,radius:i,border:a,style:o}){let c=!o.height;/[a-z]+:\/\//.test(e)||(e=`https://`+e);let l=m(),[u,d]=n(l?void 0:!1);return r(()=>{if(!l)return;let t=!0;d(void 0);async function n(){let n=await fetch(`https://api.framer.com/functions/check-iframe-url?url=`+encodeURIComponent(e));if(n.status==200){let{isBlocked:e}=await n.json();t&&d(e)}else{let e=await n.text();console.error(e),d(Error(`This site can’t be reached.`))}}return n().catch(e=>{console.error(e),d(e)}),()=>{t=!1}},[e]),l&&c?s(E,{message:`URL embeds do not support auto height.`,style:o}):e.startsWith(`https://`)?u===void 0?s(T,{}):u instanceof Error?s(E,{message:u.message,style:o}):u===!0?s(E,{message:`Can’t embed ${e} due to its content security policy.`,style:o}):s(`iframe`,{src:e,style:{...O,...o,...a,zoom:t,borderRadius:i,transformOrigin:`top center`},loading:`lazy`,fetchPriority:l?`low`:`auto`,referrerPolicy:`no-referrer`,sandbox:y(l),allowFullScreen:!0,allow:`presentation; fullscreen; accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture; clipboard-write`}):s(E,{message:`Unsupported protocol.`,style:o})}function y(e){let t=[`allow-same-origin`,`allow-scripts`];return e||t.push(`allow-downloads`,`allow-forms`,`allow-modals`,`allow-orientation-lock`,`allow-pointer-lock`,`allow-popups`,`allow-popups-to-escape-sandbox`,`allow-presentation`,`allow-storage-access-by-user-activation`,`allow-top-navigation-by-user-activation`),t.join(` `)}function b({html:e,...t}){if(e.includes(`<\/script>`)){let n=e.includes(`</spline-viewer>`),r=e.includes(`<!-- framer-direct-embed -->`);return s(n||r?S:x,{html:e,...t})}return s(C,{html:e,...t})}function x({html:e,style:i}){let a=o(),[c,l]=n(0);r(()=>{let e=a.current?.contentWindow;function n(t){if(t.source!==e)return;let n=t.data;if(typeof n!=`object`||!n)return;let r=n.embedHeight;typeof r==`number`&&l(r)}return t.addEventListener(`message`,n),e?.postMessage(`getEmbedHeight`,`*`),()=>{t.removeEventListener(`message`,n)}},[]);let u=`
<html>
    <head>
        <style>
            html, body {
                margin: 0;
                padding: 0;
            }

            body {
                display: flex;
                justify-content: center;
                align-items: center;
            }

            :root {
                -webkit-font-smoothing: antialiased;
                -moz-osx-font-smoothing: grayscale;
            }

            * {
                box-sizing: border-box;
                -webkit-font-smoothing: inherit;
            }

            h1, h2, h3, h4, h5, h6, p, figure {
                margin: 0;
            }

            body, input, textarea, select, button {
                font-size: 12px;
                font-family: sans-serif;
            }
        </style>
    </head>
    <body>
        ${e}
        <script type="module">
            let height = 0

            function sendEmbedHeight() {
                window.parent.postMessage({
                    embedHeight: height
                }, "*")
            }

            const observer = new ResizeObserver((entries) => {
                if (entries.length !== 1) return
                const entry = entries[0]
                if (entry.target !== document.body) return

                height = entry.contentRect.height
                sendEmbedHeight()
            })

            observer.observe(document.body)

            window.addEventListener("message", (event) => {
                if (event.source !== window.parent) return
                if (event.data !== "getEmbedHeight") return
                sendEmbedHeight()
            })
        <\/script>
    <body>
</html>
`,d={...O,...i};return i.height||(d.height=c+`px`),s(`iframe`,{ref:a,style:d,srcDoc:u})}function S({html:e,style:t}){let n=o();return r(()=>{let t=n.current;if(t)return t.innerHTML=e,w(t),()=>{t.innerHTML=``}},[e]),s(`div`,{ref:n,style:{...k,...t}})}function C({html:e,style:t}){return s(`div`,{style:{...k,...t},dangerouslySetInnerHTML:{__html:e}})}function w(e){if(e instanceof Element&&e.tagName===`SCRIPT`){let t=document.createElement(`script`);t.text=e.innerHTML;for(let{name:n,value:r}of e.attributes)t.setAttribute(n,r);e.parentElement.replaceChild(t,e)}else for(let t of e.childNodes)w(t)}function T(){return s(`div`,{className:`framerInternalUI-componentPlaceholder`,style:{...p,overflow:`hidden`},children:s(`div`,{style:A,children:`Loading…`})})}function E({message:e,style:t}){return s(`div`,{className:`framerInternalUI-errorPlaceholder`,style:{minHeight:D(t),...p,overflow:`hidden`,...t},children:s(`div`,{style:A,children:e})})}function D(e){if(!e.height)return 200}var O,k,A,j=e((()=>{i(),c(),a(),u(),h(),l(g,{type:{type:d.Enum,defaultValue:`url`,displaySegmentedControl:!0,options:[`url`,`html`],optionTitles:[`URL`,`HTML`]},url:{title:`URL`,type:d.String,description:`Some websites don’t support embedding.`,hidden(e){return e.type!==`url`}},html:{title:`HTML`,type:d.String,displayTextArea:!0,hidden(e){return e.type!==`html`}},border:{title:`Border`,type:d.Border,optional:!0,hidden(e){return e.type!==`url`}},radius:{type:d.BorderRadius,title:`Radius`,hidden(e){return e.type!==`url`}},zoom:{title:`Zoom`,defaultValue:1,type:d.Number,hidden(e){return e.type!==`url`},min:.1,max:1,step:.1,displayStepper:!0}}),O={width:`100%`,height:`100%`,border:`none`},k={width:`100%`,height:`100%`,display:`flex`,flexDirection:`column`,justifyContent:`center`,alignItems:`center`},A={textAlign:`center`,minWidth:140}}));export{j as n,g as t};
//# sourceMappingURL=Embed.Cc2crdEH.mjs.map