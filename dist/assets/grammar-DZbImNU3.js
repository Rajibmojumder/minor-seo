import{j as e}from"./plagiarism-BcKfkz5P.js";import{r as a}from"./react-vendor-BwsJXe3x.js";import{a as F,C as R,b as B,c as H,W as D,U as Y,T as L,A as $,B as Z,Z as q,S as K,d as Q,e as V,F as J}from"./icons-DbLPjCxz.js";const se=({result:u,text:m,fixedText:i,onTextUpdate:C,isLoading:d,onFixAll:N,isFixing:j,activeTab:n,onTabChange:h,showTabs:o})=>{const[y,O]=a.useState(m),[g,I]=a.useState([]),[w,v]=a.useState(null),[M,S]=a.useState(!1),f=a.useRef(new Map);a.useEffect(()=>{O(i||m);const s=u.matches.map(t=>({...t,originalOffset:t.offset,originalLength:t.length}));I(s),f.current=new Map,v(null)},[m,i,u]);const G=async()=>{try{await navigator.clipboard.writeText(i||y),S(!0),setTimeout(()=>S(!1),2e3)}catch(s){console.error("Failed to copy text:",s)}};a.useCallback((s,t)=>{const l=new Map(f.current);l.forEach((b,r)=>{r>s&&l.set(r,b+t)}),f.current=l},[]);const A=a.useCallback(s=>{let t=0;return f.current.forEach((l,b)=>{b<s&&(t+=l)}),s+t},[]),W=a.useCallback(()=>{const s=i||y;if(!s)return null;const t=[];let l=0;return[...g].map(r=>({...r,currentOffset:A(r.originalOffset)})).sort((r,x)=>r.currentOffset-x.currentOffset).forEach((r,x)=>{const c=r.currentOffset;c>l&&t.push(e.jsx("span",{children:s.slice(l,c)},`text-${l}-${c}`));const k=r.rule.category==="Grammar",U=s.slice(c,c+r.length);t.push(e.jsxs("span",{className:"relative inline-block",children:[e.jsx("span",{className:`cursor-pointer inline-block ${k?"border-b-2 border-red-400 hover:bg-red-50":"border-b-2 border-blue-400 hover:bg-blue-50"}`,onClick:p=>{p.stopPropagation(),v(w===x?null:x)},children:U}),w===x&&r.replacements&&r.replacements.length>0&&e.jsxs("div",{className:"absolute left-0 top-full mt-2 w-64 p-3 bg-white rounded-lg shadow-xl border border-gray-200 z-[100]",onClick:p=>p.stopPropagation(),children:[e.jsx("div",{className:`text-sm font-medium mb-2 ${k?"text-red-600":"text-blue-600"}`,children:"Suggested Corrections:"}),e.jsx("div",{className:"space-y-1",children:r.replacements.map((p,z)=>e.jsx("div",{className:`text-sm p-2 rounded ${k?"text-red-700":"text-blue-700"}`,children:p},`suggestion-${z}`))})]})]},`error-${c}-${r.length}-${x}`)),l=c+r.length}),l<s.length&&t.push(e.jsx("span",{children:s.slice(l)},`text-end-${l}`)),t},[y,g,w,A,i]),E=g.filter(s=>s.rule.category==="Grammar"),T=g.filter(s=>s.rule.category==="Spelling"),P=E.length>0||T.length>0;return e.jsxs("div",{className:"bg-white rounded-xl shadow-sm p-6",children:[o&&e.jsxs("div",{className:"flex space-x-4 mb-6 border-b border-gray-200",children:[e.jsx("button",{onClick:()=>h("original"),className:`pb-3 px-4 text-sm font-medium transition-colors relative ${n==="original"?"text-indigo-600 border-b-2 border-indigo-600":"text-gray-500 hover:text-gray-700"}`,children:"Original Analysis"}),e.jsx("button",{onClick:()=>h("fixed"),className:`pb-3 px-4 text-sm font-medium transition-colors relative ${n==="fixed"?"text-indigo-600 border-b-2 border-indigo-600":"text-gray-500 hover:text-gray-700"}`,children:"Fixed Result"})]}),e.jsxs("div",{className:"grid grid-cols-2 gap-4 mb-6",children:[e.jsxs("div",{className:"bg-red-50 rounded-lg p-4 text-center",children:[e.jsx("div",{className:"text-2xl font-bold text-red-600",children:E.length}),e.jsx("div",{className:"text-sm text-red-700",children:"Grammar Mistakes"})]}),e.jsxs("div",{className:"bg-blue-50 rounded-lg p-4 text-center",children:[e.jsx("div",{className:"text-2xl font-bold text-blue-600",children:T.length}),e.jsx("div",{className:"text-sm text-blue-700",children:"Spelling Mistakes"})]})]}),e.jsxs("div",{className:"relative prose prose-sm max-w-none",children:[d&&e.jsx("div",{className:"absolute inset-0 bg-white/80 flex items-center justify-center z-10",children:e.jsx(F,{className:"w-6 h-6 text-indigo-600 animate-spin"})}),g.length===0?e.jsxs("div",{className:"flex items-center justify-center text-green-600 bg-green-50 p-4 rounded-lg",children:[e.jsx(R,{className:"mr-2"}),"No grammar or spelling errors found!"]}):e.jsx("div",{className:"leading-relaxed whitespace-pre-wrap break-words",onClick:()=>v(null),children:W()})]}),e.jsxs("div",{className:"flex justify-between mt-6",children:[e.jsx("button",{onClick:G,className:"flex items-center px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors",children:M?e.jsxs(e.Fragment,{children:[e.jsx(B,{className:"w-4 h-4 mr-2"}),"Copied!"]}):e.jsxs(e.Fragment,{children:[e.jsx(H,{className:"w-4 h-4 mr-2"}),"Copy Text"]})}),P&&n==="original"&&e.jsx("button",{onClick:N,disabled:d||j,className:"bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold py-2 px-4 rounded-lg flex items-center transition-all duration-200 disabled:opacity-50",children:j?e.jsxs(e.Fragment,{children:[e.jsx(F,{className:"mr-2 animate-spin"}),"Fixing..."]}):e.jsxs(e.Fragment,{children:[e.jsx(D,{className:"mr-2"}),"Fix All Errors"]})})]})]})},re=({text:u,setText:m,onClear:i,onFileUpload:C,isChecking:d,wordCount:N,wordLimit:j,isOverLimit:n})=>{const h=a.useRef(null);return e.jsxs("div",{className:"bg-white rounded-xl shadow-sm p-6",children:[e.jsxs("div",{className:"flex justify-between items-center mb-4",children:[e.jsx("h2",{className:"text-lg font-semibold text-gray-900",children:"Enter or Paste Text"}),e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("input",{type:"file",ref:h,onChange:C,className:"hidden",accept:".txt"}),e.jsxs("button",{onClick:()=>{var o;return(o=h.current)==null?void 0:o.click()},disabled:d,className:"flex items-center px-3 py-1.5 text-sm text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed",children:[e.jsx(Y,{className:"w-4 h-4 mr-1"}),"Upload"]}),e.jsxs("button",{onClick:i,disabled:d,className:"flex items-center px-3 py-1.5 text-sm text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed",children:[e.jsx(L,{className:"w-4 h-4 mr-1"}),"Clear"]})]})]}),e.jsxs("div",{className:"relative",children:[e.jsx("textarea",{value:u,onChange:o=>m(o.target.value),placeholder:"Type or paste your text here...",className:`w-full h-64 p-4 bg-gray-50 border rounded-lg resize-none transition-colors mb-2 ${n?"border-red-500 focus:ring-red-500 focus:border-red-500":"border-gray-200 focus:ring-2 focus:ring-indigo-500 focus:border-transparent"}`,disabled:d}),e.jsxs("div",{className:"flex items-center justify-between text-sm mt-2",children:[e.jsxs("div",{className:`flex items-center ${n?"text-red-600":"text-gray-500"}`,children:[e.jsx("span",{children:N}),e.jsx("span",{className:"mx-1",children:"/"}),e.jsx("span",{children:j}),e.jsx("span",{className:"ml-1",children:"words"})]}),n&&e.jsxs("div",{className:"flex items-center text-red-600",children:[e.jsx($,{className:"w-4 h-4 mr-1"}),e.jsx("span",{children:"Word limit exceeded"})]})]})]}),e.jsx("p",{className:"mt-2 text-sm text-gray-500",children:"Supports plain text (.txt) files or direct input"})]})},te=()=>e.jsxs("div",{className:"mt-24 prose prose-lg max-w-none",children:[e.jsx("h2",{className:"text-3xl font-bold text-gray-900 mb-8",children:"Free Online Grammar Checker"}),e.jsx("div",{className:"bg-white rounded-xl p-8 shadow-sm mb-12",children:e.jsx("p",{className:"text-gray-600",children:"Our advanced grammar checker helps you write error-free content by detecting grammar, spelling, and punctuation mistakes in real-time. Perfect for students, writers, and professionals who want to ensure their writing is clear, correct, and impactful."})}),e.jsx("h2",{className:"text-3xl font-bold text-gray-900 mb-8",children:"How It Works"}),e.jsx("div",{className:"bg-white rounded-xl p-8 shadow-sm mb-12",children:e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-8",children:[e.jsxs("div",{children:[e.jsxs("div",{className:"flex items-center space-x-3",children:[e.jsx("div",{className:"flex-shrink-0 w-8 h-8 bg-indigo-100 text-indigo-600 rounded-full flex items-center justify-center font-semibold",children:"1"}),e.jsx("h3",{className:"text-lg font-semibold m-0",children:"Enter Your Text"})]}),e.jsx("p",{className:"text-gray-600 mt-3",children:"Type or paste your text into the editor. You can also upload text files."})]}),e.jsxs("div",{children:[e.jsxs("div",{className:"flex items-center space-x-3",children:[e.jsx("div",{className:"flex-shrink-0 w-8 h-8 bg-indigo-100 text-indigo-600 rounded-full flex items-center justify-center font-semibold",children:"2"}),e.jsx("h3",{className:"text-lg font-semibold m-0",children:"AI Analysis"})]}),e.jsx("p",{className:"text-gray-600 mt-3",children:"Our AI analyzes your text for grammar, spelling, and style improvements."})]}),e.jsxs("div",{children:[e.jsxs("div",{className:"flex items-center space-x-3",children:[e.jsx("div",{className:"flex-shrink-0 w-8 h-8 bg-indigo-100 text-indigo-600 rounded-full flex items-center justify-center font-semibold",children:"3"}),e.jsx("h3",{className:"text-lg font-semibold m-0",children:"Get Results"})]}),e.jsx("p",{className:"text-gray-600 mt-3",children:"Review suggestions and apply corrections with a single click."})]})]})}),e.jsx("h2",{className:"text-3xl font-bold text-gray-900 mb-8",children:"Key Features"}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-6 mb-12",children:[e.jsxs("div",{className:"bg-white rounded-xl p-6 shadow-sm",children:[e.jsxs("div",{className:"flex items-center space-x-3",children:[e.jsx(Z,{className:"h-6 w-6 text-indigo-600 flex-shrink-0"}),e.jsx("h3",{className:"text-lg font-semibold m-0",children:"Smart Detection"})]}),e.jsx("p",{className:"text-gray-600 mt-3",children:"Advanced AI algorithms detect complex grammar and spelling errors"})]}),e.jsxs("div",{className:"bg-white rounded-xl p-6 shadow-sm",children:[e.jsxs("div",{className:"flex items-center space-x-3",children:[e.jsx(q,{className:"h-6 w-6 text-indigo-600 flex-shrink-0"}),e.jsx("h3",{className:"text-lg font-semibold m-0",children:"Real-Time"})]}),e.jsx("p",{className:"text-gray-600 mt-3",children:"Instant error detection and correction suggestions"})]}),e.jsxs("div",{className:"bg-white rounded-xl p-6 shadow-sm",children:[e.jsxs("div",{className:"flex items-center space-x-3",children:[e.jsx(K,{className:"h-6 w-6 text-indigo-600 flex-shrink-0"}),e.jsx("h3",{className:"text-lg font-semibold m-0",children:"Context-Aware"})]}),e.jsx("p",{className:"text-gray-600 mt-3",children:"Understands context to provide accurate suggestions"})]})]}),e.jsx("h2",{className:"text-3xl font-bold text-gray-900 mb-8",children:"What We Check"}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6 mb-12",children:[e.jsxs("div",{className:"bg-white rounded-xl p-6 shadow-sm",children:[e.jsxs("div",{className:"flex items-center space-x-3",children:[e.jsx($,{className:"h-6 w-6 text-indigo-600 flex-shrink-0"}),e.jsx("h3",{className:"text-lg font-semibold m-0",children:"Grammar & Spelling"})]}),e.jsxs("ul",{className:"space-y-2 text-gray-600 mt-4",children:[e.jsx("li",{children:"Subject-verb agreement"}),e.jsx("li",{children:"Article usage"}),e.jsx("li",{children:"Verb tenses"}),e.jsx("li",{children:"Common misspellings"}),e.jsx("li",{children:"Punctuation errors"})]})]}),e.jsxs("div",{className:"bg-white rounded-xl p-6 shadow-sm",children:[e.jsxs("div",{className:"flex items-center space-x-3",children:[e.jsx(Q,{className:"h-6 w-6 text-indigo-600 flex-shrink-0"}),e.jsx("h3",{className:"text-lg font-semibold m-0",children:"Style & Clarity"})]}),e.jsxs("ul",{className:"space-y-2 text-gray-600 mt-4",children:[e.jsx("li",{children:"Sentence structure"}),e.jsx("li",{children:"Word choice"}),e.jsx("li",{children:"Readability"}),e.jsx("li",{children:"Redundancy"}),e.jsx("li",{children:"Tone consistency"})]})]})]}),e.jsx("h2",{className:"text-3xl font-bold text-gray-900 mb-8",children:"Best Practices"}),e.jsx("div",{className:"bg-white rounded-xl p-8 shadow-sm mb-12",children:e.jsxs("div",{className:"space-y-6",children:[e.jsxs("div",{children:[e.jsxs("div",{className:"flex items-center space-x-3",children:[e.jsx(R,{className:"h-6 w-6 text-indigo-600 flex-shrink-0"}),e.jsx("h3",{className:"text-lg font-semibold m-0",children:"Review in Context"})]}),e.jsx("p",{className:"text-gray-600 mt-3",children:"Always review grammar suggestions in the context of your writing to ensure they maintain your intended meaning."})]}),e.jsxs("div",{children:[e.jsxs("div",{className:"flex items-center space-x-3",children:[e.jsx(V,{className:"h-6 w-6 text-indigo-600 flex-shrink-0"}),e.jsx("h3",{className:"text-lg font-semibold m-0",children:"Regular Checks"})]}),e.jsx("p",{className:"text-gray-600 mt-3",children:"Check your text regularly while writing, rather than waiting until the end."})]}),e.jsxs("div",{children:[e.jsxs("div",{className:"flex items-center space-x-3",children:[e.jsx(J,{className:"h-6 w-6 text-indigo-600 flex-shrink-0"}),e.jsx("h3",{className:"text-lg font-semibold m-0",children:"Break Long Text"})]}),e.jsx("p",{className:"text-gray-600 mt-3",children:"For longer documents, break them into smaller sections for more thorough analysis."})]})]})}),e.jsx("h2",{className:"text-3xl font-bold text-gray-900 mb-8",children:"Frequently Asked Questions"}),e.jsxs("div",{className:"space-y-6 mb-12",children:[e.jsxs("details",{className:"group bg-white rounded-xl shadow-sm",children:[e.jsxs("summary",{className:"flex items-center justify-between p-6 cursor-pointer",children:[e.jsx("div",{className:"text-xl font-semibold",children:"How accurate is the grammar checker?"}),e.jsx("span",{className:"ml-4 flex-shrink-0",children:"+"})]}),e.jsx("div",{className:"px-6 pb-6",children:e.jsx("p",{className:"text-gray-600",children:"Our grammar checker achieves over 95% accuracy in detecting common grammar and spelling errors. However, we recommend reviewing suggestions in context as language can be complex and context-dependent."})})]}),e.jsxs("details",{className:"group bg-white rounded-xl shadow-sm",children:[e.jsxs("summary",{className:"flex items-center justify-between p-6 cursor-pointer",children:[e.jsx("div",{className:"text-xl font-semibold",children:"What types of errors are detected?"}),e.jsx("span",{className:"ml-4 flex-shrink-0",children:"+"})]}),e.jsxs("div",{className:"px-6 pb-6",children:[e.jsx("p",{className:"text-gray-600",children:"We detect a wide range of errors including grammar, spelling, punctuation, style issues, and more. Our AI is particularly good at identifying:"}),e.jsxs("ul",{className:"mt-2 space-y-1",children:[e.jsx("li",{children:"Grammar mistakes (subject-verb agreement, verb tenses)"}),e.jsx("li",{children:"Spelling errors and typos"}),e.jsx("li",{children:"Punctuation issues"}),e.jsx("li",{children:"Style and clarity problems"}),e.jsx("li",{children:"Word choice and redundancy"})]})]})]}),e.jsxs("details",{className:"group bg-white rounded-xl shadow-sm",children:[e.jsxs("summary",{className:"flex items-center justify-between p-6 cursor-pointer",children:[e.jsx("div",{className:"text-xl font-semibold",children:"Is there a word limit?"}),e.jsx("span",{className:"ml-4 flex-shrink-0",children:"+"})]}),e.jsxs("div",{className:"px-6 pb-6",children:[e.jsx("p",{className:"text-gray-600",children:"Yes, we have the following limits to ensure optimal performance:"}),e.jsxs("ul",{className:"mt-2 space-y-1",children:[e.jsx("li",{children:"Per check: Up to 3,000 words"}),e.jsx("li",{children:"Daily limit: 5,000 words"}),e.jsx("li",{children:"For longer texts, we recommend breaking them into smaller sections"})]})]})]}),e.jsxs("details",{className:"group bg-white rounded-xl shadow-sm",children:[e.jsxs("summary",{className:"flex items-center justify-between p-6 cursor-pointer",children:[e.jsx("div",{className:"text-xl font-semibold",children:"How do I use the grammar checker?"}),e.jsx("span",{className:"ml-4 flex-shrink-0",children:"+"})]}),e.jsx("div",{className:"px-6 pb-6",children:e.jsx("p",{className:"text-gray-600",children:"Simply paste your text into the editor or upload a file. Our AI will automatically analyze your text and highlight any issues. Click on the highlighted text to see suggestions and apply corrections with a single click."})})]})]})]});export{se as E,te as G,re as T};
