import"../chunks/Bzak7iHL.js";import{I,J as bt,R as it,aS as Bt,H as Ft,N as wt,O as It,aT as Ot,M as Nt,T as Lt,a9 as Ut,a8 as xt,a4 as yt,x as zt,ae as Pt,ad as Vt,Q as Yt,V as q,X as v,ai as y,Z as b,_,am as M,al as A,ao as Gt,W as R,n as c,an as O,U as K,u as $,Y as tt,F as pt,v as w,ak as N,aC as Jt,aU as Zt,r as Ht}from"../chunks/bbAY0-sh.js";import{i as Qt,a as D,d as Wt}from"../chunks/CqV49L9l.js";import{e as J,i as Z,b as Xt,s as $t,c as Kt,d as te}from"../chunks/agUzZV2y.js";import{c as mt,b as ee,i as G}from"../chunks/B4gROAES.js";import{s as lt,p as F}from"../chunks/vhkXsIHq.js";import{s as qt}from"../chunks/CbUN1PuN.js";import{h as kt,c as ae}from"../chunks/CiTES_qt.js";import{b as ne}from"../chunks/DjcVx8TI.js";function vt(e,t,o,n,s,u){let p=I;I&&bt();var l,h,r=null;I&&it.nodeType===Bt&&(r=it,bt());var m=I?it:e,a;Ft(()=>{const i=t()||null;var k=i==="svg"?Ot:null;i!==l&&(a&&(i===null?Pt(a,()=>{a=null,h=null}):i===h?Vt(a):Yt(a)),i&&i!==h&&(a=It(()=>{if(r=I?r:k?document.createElementNS(k,i):document.createElement(i),Nt(r,r),n){I&&Qt(i)&&r.append(document.createComment(""));var f=I?Lt(r):r.appendChild(Ut());I&&(f===null?xt(!1):yt(f)),n(r,f)}zt.nodes_end=r,m.before(r)})),l=i,l&&(h=l))},wt),p&&(xt(!0),yt(m))}var Ct={},ct={},ut=34,X=10,dt=13;function At(e){return new Function("d","return {"+e.map(function(t,o){return JSON.stringify(t)+": d["+o+'] || ""'}).join(",")+"}")}function oe(e,t){var o=At(e);return function(n,s){return t(o(n),s,e)}}function Tt(e){var t=Object.create(null),o=[];return e.forEach(function(n){for(var s in n)s in t||o.push(t[s]=s)}),o}function j(e,t){var o=e+"",n=o.length;return n<t?new Array(t-n+1).join(0)+o:o}function re(e){return e<0?"-"+j(-e,6):e>9999?"+"+j(e,6):j(e,4)}function se(e){var t=e.getUTCHours(),o=e.getUTCMinutes(),n=e.getUTCSeconds(),s=e.getUTCMilliseconds();return isNaN(e)?"Invalid Date":re(e.getUTCFullYear())+"-"+j(e.getUTCMonth()+1,2)+"-"+j(e.getUTCDate(),2)+(s?"T"+j(t,2)+":"+j(o,2)+":"+j(n,2)+"."+j(s,3)+"Z":n?"T"+j(t,2)+":"+j(o,2)+":"+j(n,2)+"Z":o||t?"T"+j(t,2)+":"+j(o,2)+"Z":"")}function ie(e){var t=new RegExp('["'+e+`
\r]`),o=e.charCodeAt(0);function n(a,i){var k,f,d=s(a,function(x,g){if(k)return k(x,g-1);f=x,k=i?oe(x,i):At(x)});return d.columns=f||[],d}function s(a,i){var k=[],f=a.length,d=0,x=0,g,C=f<=0,T=!1;a.charCodeAt(f-1)===X&&--f,a.charCodeAt(f-1)===dt&&--f;function S(){if(C)return ct;if(T)return T=!1,Ct;var U,B=d,E;if(a.charCodeAt(B)===ut){for(;d++<f&&a.charCodeAt(d)!==ut||a.charCodeAt(++d)===ut;);return(U=d)>=f?C=!0:(E=a.charCodeAt(d++))===X?T=!0:E===dt&&(T=!0,a.charCodeAt(d)===X&&++d),a.slice(B+1,U-1).replace(/""/g,'"')}for(;d<f;){if((E=a.charCodeAt(U=d++))===X)T=!0;else if(E===dt)T=!0,a.charCodeAt(d)===X&&++d;else if(E!==o)continue;return a.slice(B,U)}return C=!0,a.slice(B,f)}for(;(g=S())!==ct;){for(var L=[];g!==Ct&&g!==ct;)L.push(g),g=S();i&&(L=i(L,x++))==null||k.push(L)}return k}function u(a,i){return a.map(function(k){return i.map(function(f){return m(k[f])}).join(e)})}function p(a,i){return i==null&&(i=Tt(a)),[i.map(m).join(e)].concat(u(a,i)).join(`
`)}function l(a,i){return i==null&&(i=Tt(a)),u(a,i).join(`
`)}function h(a){return a.map(r).join(`
`)}function r(a){return a.map(m).join(e)}function m(a){return a==null?"":a instanceof Date?se(a):t.test(a+="")?'"'+a.replace(/"/g,'""')+'"':a}return{parse:n,parseRows:s,format:p,formatBody:l,formatRows:h,formatRow:r,formatValue:m}}var ce=ie(","),ue=ce.parse,de=q('<section id="demo-link"><h2>Link</h2> <p><a href="elements">Default element styles demo</a></p> <p><a href="fonts">Pudding-hosted font previews</a></p></section>');function me(e){var t=de();v(e,t)}var le=q('<section id="demo-image"><h2>Image</h2> <p>img tag</p> <img src="../assets/demo/test.jpg" alt="cat" class="svelte-b56t42"/> <p>background image</p> <div class="svelte-b56t42"></div></section>');function ve(e){var t=le();v(e,t)}var pe=q('<section id="demo-element"><h2>Dynamic Svelte Element</h2> <!></section>');function fe(e){const t=[{tag:"h3",text:"I am a h3 tag."},{tag:"p",text:"I am p tag."}];var o=pe(),n=y(b(o),2);J(n,17,()=>t,Z,(s,u)=>{let p=()=>c(u).tag,l=()=>c(u).text;var h=M(),r=A(h);vt(r,p,!1,(m,a)=>{var i=Gt();R(()=>D(i,l())),v(a,i)}),v(s,h)}),_(o),v(e,o)}var ge=q("<p> </p>");function he(e,t){var o=ge(),n=b(o);_(o),R(()=>D(n,`I am component A and my favorite number is ${t.number??""}.`)),v(e,o)}var _e=q("<p> </p>");function be(e,t){var o=_e(),n=b(o);_(o),R(()=>D(n,`I am component B and my name is ${t.name??""}.`)),v(e,o)}var xe=q('<section id="demo-component"><h2>Dynamic Svelte Component</h2> <!></section>');function ye(e){const t={A:he,B:be},o=[{component:"A",number:42},{component:"B",name:"Russell"}];var n=xe(),s=y(b(n),2);J(s,17,()=>o,Z,(u,p)=>{const l=O(()=>t[c(p).component]);var h=M(),r=A(h);mt(r,()=>c(l),(m,a)=>{a(m,lt(()=>c(p)))}),v(u,h)}),_(n),v(e,n)}var ke=q("<div><!></div>");function Ce(e,t){K(t,!0);let o=F(t,"root",3,null),n=F(t,"top",3,0),s=F(t,"bottom",3,0),u=F(t,"increments",3,100),p=F(t,"value",15,void 0),l=[],h=[],r=[],m=[],a;function i(){let g=0,C=0;for(let T=0;T<l.length;T++)l[T]>g&&(g=l[T],C=T);g>0?p(C):p(void 0)}function k(g,C){const T=H=>{H[0].isIntersecting;const et=H[0].intersectionRatio;l[C]=et,i()},S=n()?n()*-1:0,L=s()?s()*-1:0,U=`${S}px 0px ${L}px 0px`,B={root:o(),rootMargin:U,threshold:h};m[C]&&m[C].disconnect();const E=new IntersectionObserver(T,B);E.observe(g),m[C]=E}function f(){r.length&&r.forEach(k)}$(()=>{for(let g=0;g<u()+1;g++)h.push(g/u());r=a.querySelectorAll(":scope > *:not(iframe)"),f()}),$(()=>{n(),s(),f()});var d=ke(),x=b(d);qt(x,()=>t.children??pt),_(d),ee(d,g=>a=g,()=>a),v(e,d),tt()}var Te=q('<div><p class="svelte-1sxgmm9"> </p></div>'),qe=q('<section id="scrolly"><h2 class="svelte-1sxgmm9">Scrolly <span> </span></h2> <div class="spacer svelte-1sxgmm9"></div> <!> <div class="spacer svelte-1sxgmm9"></div></section>');function Ae(e){let t=N(void 0);var o=qe(),n=b(o),s=y(b(n)),u=b(s,!0);_(s),_(n);var p=y(n,4);Ce(p,{get value(){return c(t)},set value(l){w(t,l,!0)},children:(l,h)=>{var r=M(),m=A(r);J(m,16,()=>[0,1,2,3,4],Z,(a,i,k)=>{const f=O(()=>c(t)===k);var d=Te();let x;var g=b(d),C=b(g,!0);_(g),_(d),R(T=>{x=Xt(d,1,"step svelte-1sxgmm9",null,x,T),D(C,i)},[()=>({active:c(f)})]),v(a,d)}),v(l,r)},$$slots:{default:!0}}),Jt(2),_(o),R(()=>D(u,c(t)||"-")),v(e,o)}const Ee=`{
	"meta": {
		"title": "Como o Brega Funk conquistou o Brasil em 15 segundos?",
		"description": "Uma história sobre como um ritmo periférico de Recife conquistou as paradas nacionais por meio do passinho e das redes sociais.",
		"url": "https://pudding.cool/2026/05/brega-funk-15s",
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
						"text": "O que nasceu como uma mistura improvável entre o brega pernambucano e as batidas do funk acabou se transformando em um dos movimentos culturais mais influentes da música brasileira recente. O Brega Funk já virou realidade!",
						"speaker": "eunice"
					}
				},
				{
					"type": "Text",
					"value": {
						"text": "Essa história vai muito além de números e hits do momento, existe também uma geração de jovens que encontrou na música uma forma de trocar ideia, se expressar e ocupar espaços que durante muito tempo pareciam inacessíveis. O Brega Funk não é apenas um ritmo: é um fenômeno cultural que transformou a maneira como a periferia produz, consome e compartilha arte.",
						"speaker": "minji"
					}
				},
				{
					"type": "Text",
					"value": {
						"text": "Então me diz como um som que começou nos bailes da Região Metropolitana do Recife conseguiu chegar aos fones de milhões de brasileiros? E você sabe como a internet ajudou a transformar artistas independentes em fenômenos nacionais?",
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
						"text": "Muito antes das trends e dos milhões de visualizações, o Brega Funk já fazia parte da rotina das periferias da Região Metropolitana do Recife. Nascido da mistura entre o brega pernambucano e as batidas do funk carioca, o gênero começou a ganhar forma nos bailes, onde os MCs e o próprio público ajudavam a definir os sons que fariam sucesso.",
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
						"text": "Nos anos 2000, as músicas circulavam de forma independente em CDs, carros de som e festas locais. Com a popularização da internet e dos celulares na década seguinte, artistas passaram a alcançar públicos cada vez maiores através do YouTube e das redes sociais. Aos poucos, o Brega Funk deixou de ser um fenômeno regional e começou a chamar atenção em todo o país.",
						"speaker": "eunice"
					}
				},
				{
					"type": "Text",
					"value": {
						"text": "O sucesso de músicas como Envolvimento, de MC Loma e as Gêmeas Lacração, mostrou que aquele ritmo criado longe dos holofotes estava pronto para ganhar o Brasil. E, justamente quando isso aconteceu, uma nova era começava: a dos vídeos curtos e dos algoritmos, que transformariam o Brega Funk em um fenômeno nacional.",
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
						"text": "Se tem uma coisa que o Brega Funk provou é que música e dança andam juntas. Muito do sucesso do gênero veio do passinho, das coreografias e da cultura visual criada em torno dele. As pessoas encontraram na dança uma forma de expressão, reconhecimento e pertencimento. Afinal, no Brega Funk, ouvir e dançar sempre fizeram parte da mesma experiência.",
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
						"text": "Os bailes se tornaram espaços onde música, moda e comportamento se encontram. As roupas, o cabelo na régua, as gírias e uma estética própria são elementos que ajudaram a construir uma linguagem facilmente reconhecível por quem faz parte dessa cultura. E, assim como as músicas, essa identidade ultrapassou Pernambuco e ganhou espaço nas redes sociais.",
						"speaker": "minji"
					}
				},
				{
					"type": "Text",
					"value": {
						"text": "Foi justamente essa combinação entre som, imagem e performance que preparou o terreno para a próxima fase do Brega Funk. Porque quando os vídeos curtos dominaram a internet, o gênero já tinha tudo o que precisava para conquistar milhões de pessoas com apenas alguns segundos de música.",
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
						"text": "O Brega Funk não ficou gigante só por causa das músicas e das coreografias marcantes, ele explodiu mesmo quando a internet entrou no jogo. Com as redes sociais e os vídeos curtos, principalmente TikTok, Instagram e YouTube, qualquer trecho com batida envolvente e dança fácil de copiar podia virar febre in questão de dias. Foi assim que vários hits saíram dos bailes de Pernambuco direto para o Brasil inteiro, crescendo primeiro nas timelines antes mesmo de tocar nas rádios ou aparecer na TV.",
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
						"text": "Mas o impacto do Brega Funk vai muito além do viral, o movimento também abriu espaço para uma rede enorme de pessoas que vivem da cultura em torno dele: dançarinos, produtores, videomakers, organizadores de eventos e criadores digitais. Ao mesmo tempo em que dá visibilidade para histórias e vivências que antes ficavam de fora da mídia tradicional, o gênero também gera renda e oportunidades para muita gente das periferias. Mesmo com o sucesso, ainda enfrenta preconceitos antigos, mas segue mostrando força ao ocupar espaço na indústria do entretenimento e provar que grandes movimentos culturais podem nascer longe dos centros tradicionais e ainda assim influenciar o país inteiro.",
						"speaker": "eunice"
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
						"text": "Agora é hora de viajar por diferentes momentos do gênero, relaxar e escutar um som.\\nDe nomes que ajudaram a construir sua identidade aos hits que dominaram as redes sociais, cada faixa conta um pedaço dessa trajetória.",
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
						"text": "MC Sheldon, MC Loma e as Gêmeas Lacração, Dadá Boladão, Thiaguinho MT e tantos outros mostram como o Brega Funk evoluiu ao longo dos anos sem perder suas raízes. Algumas músicas nasceram nos bailes, outras explodiram na internet, mas todas ajudaram a transformar um ritmo local em um fenômeno nacional.",
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
}`;var je=q("<p><!></p>"),Me=q("<section><!></section>");function De(e,t){K(t,!0);let o=F(t,"components",19,()=>({})),n=F(t,"body",19,()=>[]);var s=M(),u=A(s);J(u,17,n,Z,(p,l)=>{let h=()=>c(l).section,r=()=>c(l).content;const m=O(()=>h().toLowerCase().replace(/[^a-z0-9]/g,"")),a=O(()=>o()[h()]);var i=Me(),k=b(i);{var f=x=>{var g=M(),C=A(g);mt(C,()=>c(a),(T,S)=>{S(T,lt(r))}),v(x,g)},d=x=>{var g=M(),C=A(g);J(C,17,r,Z,(T,S,L,U)=>{let B=()=>c(S).type,E=()=>c(S).value;const H=O(()=>o()[B()]),et=O(()=>typeof E()=="string");var ft=M(),Et=A(ft);{var jt=z=>{var Q=M(),at=A(Q);mt(at,()=>c(H),(nt,ot)=>{ot(nt,lt(E))}),v(z,Q)},Mt=z=>{var Q=M(),at=A(Q);{var nt=P=>{var V=je(),rt=b(V);kt(rt,E),_(V),v(P,V)},ot=P=>{var V=M(),rt=A(V);{var Dt=Y=>{var W=M(),st=A(W);vt(st,B,!1,(gt,ht)=>{var _t=M(),St=A(_t);kt(St,E),v(ht,_t)}),v(Y,W)},Rt=Y=>{var W=M(),st=A(W);vt(st,B,!1,(gt,ht)=>{Kt(gt,()=>({...E()}))}),v(Y,W)};G(rt,Y=>{c(et)?Y(Dt):Y(Rt,!1)},!0)}v(P,V)};G(at,P=>{B()==="text"?P(nt):P(ot,!1)},!0)}v(z,Q)};G(Et,z=>{c(H)?z(jt):z(Mt,!1)})}v(T,ft)}),v(x,g)};G(k,x=>{c(a)?x(f):x(d,!1)})}_(i),R(()=>$t(i,"id",c(m))),v(p,i)}),v(e,s),tt()}var Re=q('<p> </p> <progress max="100"></progress>',1);function Se(e,t){let o=F(t,"label",3,"A"),n=F(t,"value",3,0);var s=Re(),u=A(s),p=b(u,!0);_(u);var l=y(u,2);R(()=>{D(p,o()),te(l,n())}),v(e,s)}var Be=q('<section id="cms"><h2>MicroCMS</h2> <code><pre> </pre></code> <!></section>');function Fe(e,t){K(t,!0);const{body:o}=ae,n={Test:Se};var s=Be(),u=y(b(s),2),p=b(u),l=b(p,!0);_(p),_(u);var h=y(u,2);De(h,{get components(){return n},get body(){return o}}),_(s),R(r=>D(l,r),[()=>Ee.replace(/\t/g," ")]),v(e,s),tt()}const we=(e,t=pt)=>{var o=Ie(),n=b(o),s=b(n,!0);_(n);var u=y(n,2),p=b(u,!0);_(u),_(o),R(()=>{D(s,t().name),D(p,t().age)}),v(e,o)};var Ie=q('<div class="person svelte-q3gttf"><p class="svelte-q3gttf"> </p> <p class="svelte-q3gttf"> </p></div>'),Oe=(e,t)=>Zt(t),Ne=(e,t)=>t.random(Math.floor(Math.random()*10)),Le=q('<h2>Svelte5</h2> <h3>Reactive variables 3 ways:</h3> <button class="svelte-q3gttf">count++</button> <p class="svelte-q3gttf"> </p> <p class="svelte-q3gttf"> </p> <p class="svelte-q3gttf"> </p> <h3>Children (previously slots):</h3> <div class="children"><!></div> <h3>Dispatch Event</h3> <button class="svelte-q3gttf">Random</button>  <h3>Snippets</h3> <div class="people svelte-q3gttf"></div>',1);function Ue(e,t){K(t,!0),F(t,"age",3,30);const o=[{name:"John",age:30},{name:"Jill",age:45}];let n=N(0),s=O(()=>c(n)*2),u=O(()=>c(n)*2),p=N(0);$(()=>{w(p,c(n)*2)});var l=Le(),h=y(A(l),4);h.__click=[Oe,n];var r=y(h,2),m=b(r);_(r);var a=y(r,2),i=b(a);_(a);var k=y(a,2),f=b(k);_(k);var d=y(k,4),x=b(d);qt(x,()=>t.children??pt),_(d);var g=y(d,4);g.__click=[Ne,t];var C=y(g,4);J(C,21,()=>o,Z,(T,S)=>{we(T,()=>c(S))}),_(C),R(()=>{D(m,`${c(n)??""} doubled is ${c(s)??""} (derived)`),D(i,`${c(n)??""} doubled is ${c(u)??""} (derived by)`),D(f,`${c(n)??""} doubled is ${c(p)??""} ($effect)`)}),v(e,l),tt()}Wt(["click"]);const ze=(e,t)=>{let o=N(Ht(e)),n=N(null),s=N(!0),u=N(void 0);const p=(r=!0)=>{w(s,r,!0),r===!0&&(w(u,null),w(n,null))},l=async()=>{try{const r=await fetch(c(o),t);if(!r.ok)throw new Error(`Unexpected error occurred (status ${r.status})`);let m;if(c(o).includes(".csv")){const a=await r.text();m=ue(a)}else m=await r.json();return[null,m]}catch(r){const{errorMessage:m="Unexpected error eccurred"}=r;return[m,null]}},h=async r=>{p(!0);const[m,a]=await l();if(r===c(o)){if(m){p(!1),w(u,m,!0);return}p(!1),w(n,a,!0)}};return $(()=>{h(c(o))}),{get data(){return c(n)},get loading(){return c(s)},get error(){return c(u)},get url(){return c(o)},set url(r){c(o)!==r&&w(o,r,!0)}}};var Pe=q("<p>loading data...</p>"),Ve=q("<p> </p>"),Ye=q("<p>data loaded</p> <pre> </pre>",1),Ge=q('<div class="c"><h2>Load Data</h2> <div class="response"><!></div></div>');function Je(e,t){K(t,!0);const o=`${ne}/assets/demo/test.csv`,n=ze(o);$(()=>{});var s=Ge(),u=y(b(s),2),p=b(u);{var l=r=>{var m=Pe();v(r,m)},h=r=>{var m=M(),a=A(m);{var i=f=>{var d=Ve(),x=b(d);_(d),R(()=>D(x,`error: ${n.error??""}`)),v(f,d)},k=f=>{var d=Ye(),x=y(A(d),2),g=b(x,!0);_(x),R(C=>D(g,C),[()=>JSON.stringify(n.data,null,2)]),v(f,d)};G(a,f=>{n.error?f(i):f(k,!1)},!0)}v(r,m)};G(p,r=>{n.loading?r(l):r(h,!1)})}_(u),_(s),v(e,s),tt()}var Ze=q('<div id="demo" class="svelte-15aotx7"><h1>Demo</h1> <!> <!> <!> <!> <!> <!> <!> <!></div>');function He(e){let t=N(0);function o(i){console.log(i)}var n=Ze(),s=y(b(n),2);Ue(s,{random:o,get value(){return c(t)},set value(i){w(t,i,!0)}});var u=y(s,2);me(u);var p=y(u,2);ve(p);var l=y(p,2);fe(l);var h=y(l,2);ye(h);var r=y(h,2);Fe(r,{});var m=y(r,2);Je(m,{});var a=y(m,2);Ae(a),_(n),v(e,n)}function oa(e){He(e)}export{oa as component};
