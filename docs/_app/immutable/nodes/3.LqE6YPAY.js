import"../chunks/Bzak7iHL.js";import{I as N,J as bt,R as it,aS as qt,H as Bt,N as It,O as Nt,aT as Ot,M as Pt,T as Ft,a9 as Ut,a8 as xt,a4 as yt,x as Lt,ae as zt,ad as Jt,Q as Vt,V as A,X as v,ai as y,Z as b,_,am as M,al as E,ao as Yt,W as j,n as d,an as O,U as K,u as $,Y as tt,F as pt,v as I,ak as P,aC as Gt,aU as Ht,r as Zt}from"../chunks/bbAY0-sh.js";import{i as Qt,a as D,d as Wt}from"../chunks/CqV49L9l.js";import{e as G,i as H,b as Xt,s as $t,c as Kt,d as te}from"../chunks/agUzZV2y.js";import{c as ut,b as ee,i as Y}from"../chunks/B4gROAES.js";import{s as mt,p as B}from"../chunks/vhkXsIHq.js";import{s as At}from"../chunks/CbUN1PuN.js";import{h as kt,c as ae}from"../chunks/Cg1cRESt.js";import{b as ne}from"../chunks/B574KNrl.js";function vt(e,t,o,n,s,c){let p=N;N&&bt();var m,h,r=null;N&&it.nodeType===qt&&(r=it,bt());var u=N?it:e,a;Bt(()=>{const i=t()||null;var k=i==="svg"?Ot:null;i!==m&&(a&&(i===null?zt(a,()=>{a=null,h=null}):i===h?Jt(a):Vt(a)),i&&i!==h&&(a=Nt(()=>{if(r=N?r:k?document.createElementNS(k,i):document.createElement(i),Pt(r,r),n){N&&Qt(i)&&r.append(document.createComment(""));var f=N?Ft(r):r.appendChild(Ut());N&&(f===null?xt(!1):yt(f)),n(r,f)}Lt.nodes_end=r,u.before(r)})),m=i,m&&(h=m))},It),p&&(xt(!0),yt(u))}var Ct={},dt={},ct=34,X=10,lt=13;function Et(e){return new Function("d","return {"+e.map(function(t,o){return JSON.stringify(t)+": d["+o+'] || ""'}).join(",")+"}")}function oe(e,t){var o=Et(e);return function(n,s){return t(o(n),s,e)}}function Tt(e){var t=Object.create(null),o=[];return e.forEach(function(n){for(var s in n)s in t||o.push(t[s]=s)}),o}function R(e,t){var o=e+"",n=o.length;return n<t?new Array(t-n+1).join(0)+o:o}function re(e){return e<0?"-"+R(-e,6):e>9999?"+"+R(e,6):R(e,4)}function se(e){var t=e.getUTCHours(),o=e.getUTCMinutes(),n=e.getUTCSeconds(),s=e.getUTCMilliseconds();return isNaN(e)?"Invalid Date":re(e.getUTCFullYear())+"-"+R(e.getUTCMonth()+1,2)+"-"+R(e.getUTCDate(),2)+(s?"T"+R(t,2)+":"+R(o,2)+":"+R(n,2)+"."+R(s,3)+"Z":n?"T"+R(t,2)+":"+R(o,2)+":"+R(n,2)+"Z":o||t?"T"+R(t,2)+":"+R(o,2)+"Z":"")}function ie(e){var t=new RegExp('["'+e+`
\r]`),o=e.charCodeAt(0);function n(a,i){var k,f,l=s(a,function(x,g){if(k)return k(x,g-1);f=x,k=i?oe(x,i):Et(x)});return l.columns=f||[],l}function s(a,i){var k=[],f=a.length,l=0,x=0,g,C=f<=0,T=!1;a.charCodeAt(f-1)===X&&--f,a.charCodeAt(f-1)===lt&&--f;function w(){if(C)return dt;if(T)return T=!1,Ct;var U,q=l,S;if(a.charCodeAt(q)===ct){for(;l++<f&&a.charCodeAt(l)!==ct||a.charCodeAt(++l)===ct;);return(U=l)>=f?C=!0:(S=a.charCodeAt(l++))===X?T=!0:S===lt&&(T=!0,a.charCodeAt(l)===X&&++l),a.slice(q+1,U-1).replace(/""/g,'"')}for(;l<f;){if((S=a.charCodeAt(U=l++))===X)T=!0;else if(S===lt)T=!0,a.charCodeAt(l)===X&&++l;else if(S!==o)continue;return a.slice(q,U)}return C=!0,a.slice(q,f)}for(;(g=w())!==dt;){for(var F=[];g!==Ct&&g!==dt;)F.push(g),g=w();i&&(F=i(F,x++))==null||k.push(F)}return k}function c(a,i){return a.map(function(k){return i.map(function(f){return u(k[f])}).join(e)})}function p(a,i){return i==null&&(i=Tt(a)),[i.map(u).join(e)].concat(c(a,i)).join(`
`)}function m(a,i){return i==null&&(i=Tt(a)),c(a,i).join(`
`)}function h(a){return a.map(r).join(`
`)}function r(a){return a.map(u).join(e)}function u(a){return a==null?"":a instanceof Date?se(a):t.test(a+="")?'"'+a.replace(/"/g,'""')+'"':a}return{parse:n,parseRows:s,format:p,formatBody:m,formatRows:h,formatRow:r,formatValue:u}}var de=ie(","),ce=de.parse,le=A('<section id="demo-link"><h2>Link</h2> <p><a href="elements">Default element styles demo</a></p> <p><a href="fonts">Pudding-hosted font previews</a></p></section>');function ue(e){var t=le();v(e,t)}var me=A('<section id="demo-image"><h2>Image</h2> <p>img tag</p> <img src="../assets/demo/test.jpg" alt="cat" class="svelte-b56t42"/> <p>background image</p> <div class="svelte-b56t42"></div></section>');function ve(e){var t=me();v(e,t)}var pe=A('<section id="demo-element"><h2>Dynamic Svelte Element</h2> <!></section>');function fe(e){const t=[{tag:"h3",text:"I am a h3 tag."},{tag:"p",text:"I am p tag."}];var o=pe(),n=y(b(o),2);G(n,17,()=>t,H,(s,c)=>{let p=()=>d(c).tag,m=()=>d(c).text;var h=M(),r=E(h);vt(r,p,!1,(u,a)=>{var i=Yt();j(()=>D(i,m())),v(a,i)}),v(s,h)}),_(o),v(e,o)}var ge=A("<p> </p>");function he(e,t){var o=ge(),n=b(o);_(o),j(()=>D(n,`I am component A and my favorite number is ${t.number??""}.`)),v(e,o)}var _e=A("<p> </p>");function be(e,t){var o=_e(),n=b(o);_(o),j(()=>D(n,`I am component B and my name is ${t.name??""}.`)),v(e,o)}var xe=A('<section id="demo-component"><h2>Dynamic Svelte Component</h2> <!></section>');function ye(e){const t={A:he,B:be},o=[{component:"A",number:42},{component:"B",name:"Russell"}];var n=xe(),s=y(b(n),2);G(s,17,()=>o,H,(c,p)=>{const m=O(()=>t[d(p).component]);var h=M(),r=E(h);ut(r,()=>d(m),(u,a)=>{a(u,mt(()=>d(p)))}),v(c,h)}),_(n),v(e,n)}var ke=A("<div><!></div>");function Ce(e,t){K(t,!0);let o=B(t,"root",3,null),n=B(t,"top",3,0),s=B(t,"bottom",3,0),c=B(t,"increments",3,100),p=B(t,"value",15,void 0),m=[],h=[],r=[],u=[],a;function i(){let g=0,C=0;for(let T=0;T<m.length;T++)m[T]>g&&(g=m[T],C=T);g>0?p(C):p(void 0)}function k(g,C){const T=Z=>{Z[0].isIntersecting;const et=Z[0].intersectionRatio;m[C]=et,i()},w=n()?n()*-1:0,F=s()?s()*-1:0,U=`${w}px 0px ${F}px 0px`,q={root:o(),rootMargin:U,threshold:h};u[C]&&u[C].disconnect();const S=new IntersectionObserver(T,q);S.observe(g),u[C]=S}function f(){r.length&&r.forEach(k)}$(()=>{for(let g=0;g<c()+1;g++)h.push(g/c());r=a.querySelectorAll(":scope > *:not(iframe)"),f()}),$(()=>{n(),s(),f()});var l=ke(),x=b(l);At(x,()=>t.children??pt),_(l),ee(l,g=>a=g,()=>a),v(e,l),tt()}var Te=A('<div><p class="svelte-1sxgmm9"> </p></div>'),Ae=A('<section id="scrolly"><h2 class="svelte-1sxgmm9">Scrolly <span> </span></h2> <div class="spacer svelte-1sxgmm9"></div> <!> <div class="spacer svelte-1sxgmm9"></div></section>');function Ee(e){let t=P(void 0);var o=Ae(),n=b(o),s=y(b(n)),c=b(s,!0);_(s),_(n);var p=y(n,4);Ce(p,{get value(){return d(t)},set value(m){I(t,m,!0)},children:(m,h)=>{var r=M(),u=E(r);G(u,16,()=>[0,1,2,3,4],H,(a,i,k)=>{const f=O(()=>d(t)===k);var l=Te();let x;var g=b(l),C=b(g,!0);_(g),_(l),j(T=>{x=Xt(l,1,"step svelte-1sxgmm9",null,x,T),D(C,i)},[()=>({active:d(f)})]),v(a,l)}),v(m,r)},$$slots:{default:!0}}),Gt(2),_(o),j(()=>D(c,d(t)||"-")),v(e,o)}const Se=`{
	"meta": {
		"title": "Como o Brega Funk conquistou o Brasil em 15 segundos?",
		"description": "Uma história sobre como um ritmo periférico de Recife conquistou as paradas nacionais por meio do passinho e das redes sociais.",
		"url": "https://jerbss.github.io/site-brega-funk/",
		"keywords": "brega funk, recife, passinho, tiktok, reels, musica, streaming"
	},
	"landing": {
		"title": "Como o Brega Funk conquistou o Brasil em 15 segundos?",
		"context": "A ascensão digital de um gênero periférico através da economia da atenção."
	},
	"sections": [
		{
			"id": "first-gen",
			"heading": "",
			"years": "",
			"numEnd": "",
			"coverAlt": "",
			"nodes": [
				{
					"type": "Text",
					"value": {
						"text": "No início de 2018, três adolescentes da periferia de Jaboatão dos Guararapes, em Pernambuco, decidiram criar um clipe de música. Sem recursos, Paloma Roberta (MC Loma) e as irmãs Mirella e Mariely Santos (as Gêmeas Lacração) usaram um celular emprestado para filmar a si mesmas dançando pelas ruas de barro de seu bairro, sob um orçamento de 40 reais.",
						"speaker": "eunice"
					}
				},
				{
					"type": "Video",
					"value": {
						"url": "https://www.youtube-nocookie.com/embed/pOpyq-T4fnQ?si=jwnnH8FP0Xsc6OxI",
						"title": "YouTube video player"
					}
				},
				{
					"type": "Text",
					"value": {
						"text": "A produção simples da música \\"Envolvimento\\" viralizou no YouTube de forma inesperada. Em poucas semanas, o vídeo amador acumulou dezenas de milhões de visualizações, recebeu apoio de influenciadores e chamou a atenção de artistas consagrados. Sem qualquer apoio de grandes gravadoras ou espaço nas rádios, a faixa alcançou o topo do ranking diário nacional do Spotify.",
						"speaker": "minji"
					}
				},
				{
					"type": "Text",
					"value": {
						"text": "Esse fenômeno abriu as portas do país para o brega funk, um ritmo que já pulsava nas comunidades de Recife. A história de Loma revelou uma nova engrenagem para a música pop brasileira: o sucesso não dependia mais das estruturas tradicionais do mercado físico, mas sim da rapidez dos passinhos de dança e da força dos virais da internet.",
						"speaker": "eunice"
					}
				}
			]
		},
		{
			"id": "second-gen",
			"heading": "Bailão nordestino",
			"years": "2000-2018",
			"numEnd": "st",
			"coverAlt": "Mapa de difusão do Brega Funk",
			"nodes": [
				{
					"type": "Text",
					"value": {
						"text": "Muito antes de \\"Envolvimento\\" dominar as paradas do país, o brega funk já servia de trilha sonora nas comunidades da Região Metropolitana do Recife. O gênero surgiu no início da década de 2010, unindo a melodia romântica do brega recifense às batidas aceleradas do funk carioca.",
						"speaker": "minji"
					}
				},
				{
					"type": "Chart",
					"value": {
						"id": "geo-diffusion",
						"title": "Mapeamento Rítmico de Capitais (Recife -> Brasil)",
						"subtitle": "Gráficos de difusão de hits a partir do Recife para o resto do país.",
						"source": "Fonte: Spotify Charts Geolocation Metadata"
					}
				},
				{
					"type": "Text",
					"value": {
						"text": "MCs e DJs locais, como Sheldon, Cego, Tocha, Troinha e Dadá Boladão, criaram as primeiras faixas eletrônicas do ritmo. As produções circulavam em CDs gravados artesanalmente, carros de som conhecidos como paredões e grupos de WhatsApp, movimentando uma rede de distribuição independente de gravadoras.",
						"speaker": "eunice"
					}
				},
				{
					"type": "Text",
					"value": {
						"text": "Com a expansão da internet nos celulares, a circulação ganhou escala nacional. A plataforma Deezer, por exemplo, registrou um aumento de 680% no consumo do gênero no início de 2020. A partir de Recife, o brega funk alcançou as pistas de capitais do Nordeste, do Sudeste e do Sul.",
						"speaker": "minji"
					}
				}
			]
		},
		{
			"id": "third-gen",
			"heading": "Pega o passinho",
			"years": "Dancinhas",
			"numEnd": "nd",
			"coverAlt": "Dançarinos fazendo passinho em Recife",
			"nodes": [
				{
					"type": "Text",
					"value": {
						"text": "A consolidação do brega funk no país ocorreu em sintonia com o passinho, estilo de dança urbana que serve como a tradução visual das batidas. O movimento começou como forma de expressão de jovens da periferia, que encontravam na dança uma linguagem própria de reconhecimento.",
						"speaker": "eunice"
					}
				},
				{
					"type": "Chart",
					"value": {
						"id": "passinho-videos",
						"title": "A Linguagem Corporal do Passinho",
						"subtitle": "Exemplo visual e vídeos curtos mostrando o passinho viral e sua coreografia.",
						"source": "Acervo e Tendências das Redes Sociais"
					}
				},
				{
					"type": "Text",
					"value": {
						"text": "Um dos maiores exemplos dessa cultura foi o Passinho do Jamal, criado no bairro de Santo Amaro, em Recife, por Romero Júnior e Eo Chapa. Os passos rápidos de pés e movimentos de mãos tornaram-se assinatura visual do gênero, espalhando-se por vídeos caseiros gravados nas calçadas das comunidades.",
						"speaker": "minji"
					}
				},
				{
					"type": "Text",
					"value": {
						"text": "A coreografia ultrapassou as redes e chegou a comemorações de jogadores de futebol, programas de televisão e reality shows. Esse apelo corporal ajudou a atrair novos públicos e alimentar os algoritmos de vídeos curtos em plataformas digitais.",
						"speaker": "eunice"
					}
				}
			]
		},
		{
			"id": "fourth-gen",
			"heading": "Virou viral",
			"years": "Redes Sociais",
			"numEnd": "rd",
			"coverAlt": "Dancinhas de Tik Tok e Reels",
			"nodes": [
				{
					"type": "Text",
					"value": {
						"text": "A consolidação do TikTok e do Instagram Reels alterou o formato das músicas brasileiras devido à economia da atenção. Como plataformas de streaming contabilizam uma reprodução após trinta segundos de audição, produtores passaram a antecipar o refrão e cortar introduções instrumentais.",
						"speaker": "minji"
					}
				},
				{
					"type": "Chart",
					"value": {
						"id": "tiktok-embed",
						"title": "Métricas de Retenção de Vídeos Curtos",
						"subtitle": "Estatísticas de engajamento do passinho em plataformas digitais.",
						"source": "Métricas agregadas do TikTok e Reels"
					}
				},
				{
					"type": "Text",
					"value": {
						"text": "A estrutura do brega funk se ajusta bem a essa exigência. As paradas marcadas no beat e as explosões rítmicas facilitam a criação de vídeos curtos. Muitas canções passaram a ter menos de dois minutos e meio de duração, concentrando o clímax no trecho exato que será compartilhado nos desafios de dança.",
						"speaker": "eunice"
					}
				},
				{
					"type": "Text",
					"value": {
						"text": "Essa dinâmica produziu anomalias nas plataformas de dados. Embora a velocidade real do brega funk varie de 115 a 135 BPM, o Spotify registra faixas como Envolvimento com 165 BPM. A síncope das palmas e o compasso acelerado da dança confundem o algoritmo de leitura automática de andamento.",
						"speaker": "minji"
					}
				}
			]
		},
		{
			"id": "fifth-gen",
			"heading": "Bota o paredão",
			"years": "Playlists",
			"numEnd": "th",
			"coverAlt": "Paredão de caixas de som de Brega Funk",
			"nodes": [
				{
					"type": "Text",
					"value": {
						"text": "A engrenagem viral dos vídeos de dança também gerou impactos sociais e econômicos. O movimento estruturou uma cadeia de trabalho descentralizada, gerando renda para produtores musicais, MCs, dançarinos e criadores digitais nas periferias nordestinas.",
						"speaker": "minji"
					}
				},
				{
					"type": "Chart",
					"value": {
						"id": "playlists-embed",
						"title": "Antologia do Brega Funk",
						"subtitle": "Playlists e faixas clássicas que moldaram o desenvolvimento do gênero.",
						"source": "Spotify e Acervo Histórico"
					}
				},
				{
					"type": "Text",
					"value": {
						"text": "Nomes históricos do brega recifense dividem espaço nas playlists nacionais com jovens produtores do passinho. Mesmo enfrentando resistências e preconceito contra suas origens, o brega funk estabeleceu-se como um dos principais influenciadores da música pop brasileira contemporânea.",
						"speaker": "eunice"
					}
				}
			]
		}
	],
	"methods": [
		{
			"type": "header",
			"value": "Metodologia"
		},
		{
			"type": "text",
			"value": "Os dados e fatos apresentados neste ensaio foram compilados a partir de relatórios da indústria de streaming musical, matérias jornalísticas e registros das redes sociais (YouTube, Deezer e TikTok). As referências completas estão detalhadas no documento de fundação teórica."
		},
		{
			"type": "header",
			"value": "Créditos"
		},
		{
			"type": "text",
			"value": "Adaptação textual e conceituação por equipe acadêmica."
		}
	]
}`;var Re=A("<p><!></p>"),Me=A("<section><!></section>");function De(e,t){K(t,!0);let o=B(t,"components",19,()=>({})),n=B(t,"body",19,()=>[]);var s=M(),c=E(s);G(c,17,n,H,(p,m)=>{let h=()=>d(m).section,r=()=>d(m).content;const u=O(()=>h().toLowerCase().replace(/[^a-z0-9]/g,"")),a=O(()=>o()[h()]);var i=Me(),k=b(i);{var f=x=>{var g=M(),C=E(g);ut(C,()=>d(a),(T,w)=>{w(T,mt(r))}),v(x,g)},l=x=>{var g=M(),C=E(g);G(C,17,r,H,(T,w,F,U)=>{let q=()=>d(w).type,S=()=>d(w).value;const Z=O(()=>o()[q()]),et=O(()=>typeof S()=="string");var ft=M(),St=E(ft);{var Rt=L=>{var Q=M(),at=E(Q);ut(at,()=>d(Z),(nt,ot)=>{ot(nt,mt(S))}),v(L,Q)},Mt=L=>{var Q=M(),at=E(Q);{var nt=z=>{var J=Re(),rt=b(J);kt(rt,S),_(J),v(z,J)},ot=z=>{var J=M(),rt=E(J);{var Dt=V=>{var W=M(),st=E(W);vt(st,q,!1,(gt,ht)=>{var _t=M(),wt=E(_t);kt(wt,S),v(ht,_t)}),v(V,W)},jt=V=>{var W=M(),st=E(W);vt(st,q,!1,(gt,ht)=>{Kt(gt,()=>({...S()}))}),v(V,W)};Y(rt,V=>{d(et)?V(Dt):V(jt,!1)},!0)}v(z,J)};Y(at,z=>{q()==="text"?z(nt):z(ot,!1)},!0)}v(L,Q)};Y(St,L=>{d(Z)?L(Rt):L(Mt,!1)})}v(T,ft)}),v(x,g)};Y(k,x=>{d(a)?x(f):x(l,!1)})}_(i),j(()=>$t(i,"id",d(u))),v(p,i)}),v(e,s),tt()}var je=A('<p> </p> <progress max="100"></progress>',1);function we(e,t){let o=B(t,"label",3,"A"),n=B(t,"value",3,0);var s=je(),c=E(s),p=b(c,!0);_(c);var m=y(c,2);j(()=>{D(p,o()),te(m,n())}),v(e,s)}var qe=A('<section id="cms"><h2>MicroCMS</h2> <code><pre> </pre></code> <!></section>');function Be(e,t){K(t,!0);const{body:o}=ae,n={Test:we};var s=qe(),c=y(b(s),2),p=b(c),m=b(p,!0);_(p),_(c);var h=y(c,2);De(h,{get components(){return n},get body(){return o}}),_(s),j(r=>D(m,r),[()=>Se.replace(/\t/g," ")]),v(e,s),tt()}const Ie=(e,t=pt)=>{var o=Ne(),n=b(o),s=b(n,!0);_(n);var c=y(n,2),p=b(c,!0);_(c),_(o),j(()=>{D(s,t().name),D(p,t().age)}),v(e,o)};var Ne=A('<div class="person svelte-q3gttf"><p class="svelte-q3gttf"> </p> <p class="svelte-q3gttf"> </p></div>'),Oe=(e,t)=>Ht(t),Pe=(e,t)=>t.random(Math.floor(Math.random()*10)),Fe=A('<h2>Svelte5</h2> <h3>Reactive variables 3 ways:</h3> <button class="svelte-q3gttf">count++</button> <p class="svelte-q3gttf"> </p> <p class="svelte-q3gttf"> </p> <p class="svelte-q3gttf"> </p> <h3>Children (previously slots):</h3> <div class="children"><!></div> <h3>Dispatch Event</h3> <button class="svelte-q3gttf">Random</button>  <h3>Snippets</h3> <div class="people svelte-q3gttf"></div>',1);function Ue(e,t){K(t,!0),B(t,"age",3,30);const o=[{name:"John",age:30},{name:"Jill",age:45}];let n=P(0),s=O(()=>d(n)*2),c=O(()=>d(n)*2),p=P(0);$(()=>{I(p,d(n)*2)});var m=Fe(),h=y(E(m),4);h.__click=[Oe,n];var r=y(h,2),u=b(r);_(r);var a=y(r,2),i=b(a);_(a);var k=y(a,2),f=b(k);_(k);var l=y(k,4),x=b(l);At(x,()=>t.children??pt),_(l);var g=y(l,4);g.__click=[Pe,t];var C=y(g,4);G(C,21,()=>o,H,(T,w)=>{Ie(T,()=>d(w))}),_(C),j(()=>{D(u,`${d(n)??""} doubled is ${d(s)??""} (derived)`),D(i,`${d(n)??""} doubled is ${d(c)??""} (derived by)`),D(f,`${d(n)??""} doubled is ${d(p)??""} ($effect)`)}),v(e,m),tt()}Wt(["click"]);const Le=(e,t)=>{let o=P(Zt(e)),n=P(null),s=P(!0),c=P(void 0);const p=(r=!0)=>{I(s,r,!0),r===!0&&(I(c,null),I(n,null))},m=async()=>{try{const r=await fetch(d(o),t);if(!r.ok)throw new Error(`Unexpected error occurred (status ${r.status})`);let u;if(d(o).includes(".csv")){const a=await r.text();u=ce(a)}else u=await r.json();return[null,u]}catch(r){const{errorMessage:u="Unexpected error eccurred"}=r;return[u,null]}},h=async r=>{p(!0);const[u,a]=await m();if(r===d(o)){if(u){p(!1),I(c,u,!0);return}p(!1),I(n,a,!0)}};return $(()=>{h(d(o))}),{get data(){return d(n)},get loading(){return d(s)},get error(){return d(c)},get url(){return d(o)},set url(r){d(o)!==r&&I(o,r,!0)}}};var ze=A("<p>loading data...</p>"),Je=A("<p> </p>"),Ve=A("<p>data loaded</p> <pre> </pre>",1),Ye=A('<div class="c"><h2>Load Data</h2> <div class="response"><!></div></div>');function Ge(e,t){K(t,!0);const o=`${ne}/assets/demo/test.csv`,n=Le(o);$(()=>{});var s=Ye(),c=y(b(s),2),p=b(c);{var m=r=>{var u=ze();v(r,u)},h=r=>{var u=M(),a=E(u);{var i=f=>{var l=Je(),x=b(l);_(l),j(()=>D(x,`error: ${n.error??""}`)),v(f,l)},k=f=>{var l=Ve(),x=y(E(l),2),g=b(x,!0);_(x),j(C=>D(g,C),[()=>JSON.stringify(n.data,null,2)]),v(f,l)};Y(a,f=>{n.error?f(i):f(k,!1)},!0)}v(r,u)};Y(p,r=>{n.loading?r(m):r(h,!1)})}_(c),_(s),v(e,s),tt()}var He=A('<div id="demo" class="svelte-15aotx7"><h1>Demo</h1> <!> <!> <!> <!> <!> <!> <!> <!></div>');function Ze(e){let t=P(0);function o(i){console.log(i)}var n=He(),s=y(b(n),2);Ue(s,{random:o,get value(){return d(t)},set value(i){I(t,i,!0)}});var c=y(s,2);ue(c);var p=y(c,2);ve(p);var m=y(p,2);fe(m);var h=y(m,2);ye(h);var r=y(h,2);Be(r,{});var u=y(r,2);Ge(u,{});var a=y(u,2);Ee(a),_(n),v(e,n)}function oa(e){Ze(e)}export{oa as component};
