import"../chunks/Bzak7iHL.js";import{I as F,J as bt,R as it,aS as qt,H as wt,N as Nt,O as Ft,aT as It,M as Pt,T as Ot,a9 as Ut,a8 as xt,a4 as yt,x as zt,ae as Lt,ad as Jt,Q as Vt,V as A,X as v,ai as y,Z as b,_,am as R,al as E,ao as Gt,W as j,n as d,an as I,U as K,u as $,Y as tt,F as pt,v as N,ak as P,aC as Yt,aU as Zt,r as Ht}from"../chunks/bbAY0-sh.js";import{i as Wt,a as M,d as Qt}from"../chunks/CqV49L9l.js";import{e as Y,i as Z,b as Xt,s as $t,c as Kt,d as te}from"../chunks/agUzZV2y.js";import{c as ut,b as ee,i as G}from"../chunks/B4gROAES.js";import{s as mt,p as w}from"../chunks/vhkXsIHq.js";import{s as At}from"../chunks/CbUN1PuN.js";import{h as Ct,c as ae}from"../chunks/Bb8OvQwO.js";import{b as ne}from"../chunks/BkFXHRet.js";function vt(e,t,o,n,s,c){let p=F;F&&bt();var m,h,r=null;F&&it.nodeType===qt&&(r=it,bt());var u=F?it:e,a;wt(()=>{const i=t()||null;var C=i==="svg"?It:null;i!==m&&(a&&(i===null?Lt(a,()=>{a=null,h=null}):i===h?Jt(a):Vt(a)),i&&i!==h&&(a=Ft(()=>{if(r=F?r:C?document.createElementNS(C,i):document.createElement(i),Pt(r,r),n){F&&Wt(i)&&r.append(document.createComment(""));var f=F?Ot(r):r.appendChild(Ut());F&&(f===null?xt(!1):yt(f)),n(r,f)}zt.nodes_end=r,u.before(r)})),m=i,m&&(h=m))},Nt),p&&(xt(!0),yt(u))}var kt={},dt={},ct=34,X=10,lt=13;function Et(e){return new Function("d","return {"+e.map(function(t,o){return JSON.stringify(t)+": d["+o+'] || ""'}).join(",")+"}")}function oe(e,t){var o=Et(e);return function(n,s){return t(o(n),s,e)}}function Tt(e){var t=Object.create(null),o=[];return e.forEach(function(n){for(var s in n)s in t||o.push(t[s]=s)}),o}function D(e,t){var o=e+"",n=o.length;return n<t?new Array(t-n+1).join(0)+o:o}function re(e){return e<0?"-"+D(-e,6):e>9999?"+"+D(e,6):D(e,4)}function se(e){var t=e.getUTCHours(),o=e.getUTCMinutes(),n=e.getUTCSeconds(),s=e.getUTCMilliseconds();return isNaN(e)?"Invalid Date":re(e.getUTCFullYear())+"-"+D(e.getUTCMonth()+1,2)+"-"+D(e.getUTCDate(),2)+(s?"T"+D(t,2)+":"+D(o,2)+":"+D(n,2)+"."+D(s,3)+"Z":n?"T"+D(t,2)+":"+D(o,2)+":"+D(n,2)+"Z":o||t?"T"+D(t,2)+":"+D(o,2)+"Z":"")}function ie(e){var t=new RegExp('["'+e+`
\r]`),o=e.charCodeAt(0);function n(a,i){var C,f,l=s(a,function(x,g){if(C)return C(x,g-1);f=x,C=i?oe(x,i):Et(x)});return l.columns=f||[],l}function s(a,i){var C=[],f=a.length,l=0,x=0,g,k=f<=0,T=!1;a.charCodeAt(f-1)===X&&--f,a.charCodeAt(f-1)===lt&&--f;function B(){if(k)return dt;if(T)return T=!1,kt;var U,q=l,S;if(a.charCodeAt(q)===ct){for(;l++<f&&a.charCodeAt(l)!==ct||a.charCodeAt(++l)===ct;);return(U=l)>=f?k=!0:(S=a.charCodeAt(l++))===X?T=!0:S===lt&&(T=!0,a.charCodeAt(l)===X&&++l),a.slice(q+1,U-1).replace(/""/g,'"')}for(;l<f;){if((S=a.charCodeAt(U=l++))===X)T=!0;else if(S===lt)T=!0,a.charCodeAt(l)===X&&++l;else if(S!==o)continue;return a.slice(q,U)}return k=!0,a.slice(q,f)}for(;(g=B())!==dt;){for(var O=[];g!==kt&&g!==dt;)O.push(g),g=B();i&&(O=i(O,x++))==null||C.push(O)}return C}function c(a,i){return a.map(function(C){return i.map(function(f){return u(C[f])}).join(e)})}function p(a,i){return i==null&&(i=Tt(a)),[i.map(u).join(e)].concat(c(a,i)).join(`
`)}function m(a,i){return i==null&&(i=Tt(a)),c(a,i).join(`
`)}function h(a){return a.map(r).join(`
`)}function r(a){return a.map(u).join(e)}function u(a){return a==null?"":a instanceof Date?se(a):t.test(a+="")?'"'+a.replace(/"/g,'""')+'"':a}return{parse:n,parseRows:s,format:p,formatBody:m,formatRows:h,formatRow:r,formatValue:u}}var de=ie(","),ce=de.parse,le=A('<section id="demo-link"><h2>Link</h2> <p><a href="elements">Default element styles demo</a></p> <p><a href="fonts">Pudding-hosted font previews</a></p></section>');function ue(e){var t=le();v(e,t)}var me=A('<section id="demo-image"><h2>Image</h2> <p>img tag</p> <img src="../assets/demo/test.jpg" alt="cat" class="svelte-b56t42"/> <p>background image</p> <div class="svelte-b56t42"></div></section>');function ve(e){var t=me();v(e,t)}var pe=A('<section id="demo-element"><h2>Dynamic Svelte Element</h2> <!></section>');function fe(e){const t=[{tag:"h3",text:"I am a h3 tag."},{tag:"p",text:"I am p tag."}];var o=pe(),n=y(b(o),2);Y(n,17,()=>t,Z,(s,c)=>{let p=()=>d(c).tag,m=()=>d(c).text;var h=R(),r=E(h);vt(r,p,!1,(u,a)=>{var i=Gt();j(()=>M(i,m())),v(a,i)}),v(s,h)}),_(o),v(e,o)}var ge=A("<p> </p>");function he(e,t){var o=ge(),n=b(o);_(o),j(()=>M(n,`I am component A and my favorite number is ${t.number??""}.`)),v(e,o)}var _e=A("<p> </p>");function be(e,t){var o=_e(),n=b(o);_(o),j(()=>M(n,`I am component B and my name is ${t.name??""}.`)),v(e,o)}var xe=A('<section id="demo-component"><h2>Dynamic Svelte Component</h2> <!></section>');function ye(e){const t={A:he,B:be},o=[{component:"A",number:42},{component:"B",name:"Russell"}];var n=xe(),s=y(b(n),2);Y(s,17,()=>o,Z,(c,p)=>{const m=I(()=>t[d(p).component]);var h=R(),r=E(h);ut(r,()=>d(m),(u,a)=>{a(u,mt(()=>d(p)))}),v(c,h)}),_(n),v(e,n)}var Ce=A("<div><!></div>");function ke(e,t){K(t,!0);let o=w(t,"root",3,null),n=w(t,"top",3,0),s=w(t,"bottom",3,0),c=w(t,"increments",3,100),p=w(t,"value",15,void 0),m=[],h=[],r=[],u=[],a;function i(){let g=0,k=0;for(let T=0;T<m.length;T++)m[T]>g&&(g=m[T],k=T);g>0?p(k):p(void 0)}function C(g,k){const T=H=>{H[0].isIntersecting;const et=H[0].intersectionRatio;m[k]=et,i()},B=n()?n()*-1:0,O=s()?s()*-1:0,U=`${B}px 0px ${O}px 0px`,q={root:o(),rootMargin:U,threshold:h};u[k]&&u[k].disconnect();const S=new IntersectionObserver(T,q);S.observe(g),u[k]=S}function f(){r.length&&r.forEach(C)}$(()=>{for(let g=0;g<c()+1;g++)h.push(g/c());r=a.querySelectorAll(":scope > *:not(iframe)"),f()}),$(()=>{n(),s(),f()});var l=Ce(),x=b(l);At(x,()=>t.children??pt),_(l),ee(l,g=>a=g,()=>a),v(e,l),tt()}var Te=A('<div><p class="svelte-1sxgmm9"> </p></div>'),Ae=A('<section id="scrolly"><h2 class="svelte-1sxgmm9">Scrolly <span> </span></h2> <div class="spacer svelte-1sxgmm9"></div> <!> <div class="spacer svelte-1sxgmm9"></div></section>');function Ee(e){let t=P(void 0);var o=Ae(),n=b(o),s=y(b(n)),c=b(s,!0);_(s),_(n);var p=y(n,4);ke(p,{get value(){return d(t)},set value(m){N(t,m,!0)},children:(m,h)=>{var r=R(),u=E(r);Y(u,16,()=>[0,1,2,3,4],Z,(a,i,C)=>{const f=I(()=>d(t)===C);var l=Te();let x;var g=b(l),k=b(g,!0);_(g),_(l),j(T=>{x=Xt(l,1,"step svelte-1sxgmm9",null,x,T),M(k,i)},[()=>({active:d(f)})]),v(a,l)}),v(m,r)},$$slots:{default:!0}}),Yt(2),_(o),j(()=>M(c,d(t)||"-")),v(e,o)}const Se=`{
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
						"text": "Em janeiro de 2018, MC Loma e as Gêmeas Lacração gravaram o clipe de Envolvimento na periferia de Jaboatão dos Guararapes, Pernambuco. O orçamento do vídeo amador era de 40 reais, filmado com um celular emprestado.",
						"speaker": "eunice"
					}
				},
				{
					"type": "Text",
					"value": {
						"text": "Sem gravadora ou divulgação em rádio, a música viralizou nas redes sociais. Em poucas semanas, o clipe acumulava milhões de visualizações e a faixa alcançava o topo do ranking nacional do Spotify.",
						"speaker": "minji"
					}
				},
				{
					"type": "Text",
					"value": {
						"text": "Esse estouro marcou a expansão nacional do brega funk, um gênero nascido nas comunidades de Recife. A ascensão de Loma mostrou que o ritmo periférico conseguia dominar as paradas do país de forma digital, impulsionado por passinhos de dança e refrões otimizados para vídeos curtos.",
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
						"text": "Muito antes de 'Envolvimento' dominar o Brasil, o Brega Funk já era a trilha sonora oficial das favelas e comunidades de Recife. Nascido no início da década de 2010, o gênero surgiu da fusão entre as melodias sentimentais do brega romântico recifense e do eletrobrega com o peso rítmico das batidas do funk carioca.",
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
						"text": "Pioneiros como MC Sheldon, MC Cego, MC Tocha, MC Troinha e Dadá Boladão ajudaram a definir as primeiras batidas eletrônicas do ritmo. As faixas circulavam de maneira informal em CDs gravados à mão, carros de som (os famosos paredões) e grupos de WhatsApp, construindo uma rede de distribuição totalmente independente das grandes gravadoras.",
						"speaker": "eunice"
					}
				},
				{
					"type": "Text",
					"value": {
						"text": "Com a popularização dos smartphones, essa circulação descentralizada explodiu. O YouTube e plataformas de streaming consolidaram o brega funk nacionalmente: dados da Deezer registraram um salto impressionante de 680% no consumo do gênero no início de 2020. O que era um som estritamente local de Pernambuco começou a desenhar uma nova rota de difusão de sucessos, partindo de Recife para ganhar as pistas de capitais em todo o país.",
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
						"text": "No Brega Funk, música e corpo são indissociáveis. A consolidação do gênero nacionalmente foi impulsionada pela cultura do 'passinho' — coreografias ritmadas que servem como a tradução visual direta dos beats. A dança transformou-se em uma forma de expressão urbana, representatividade e afirmação da juventude periférica.",
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
						"text": "A trajetória do 'Passinho do Jamal' ilustra perfeitamente essa dinâmica. Criado nas ruas do bairro de Santo Amaro, em Recife, por Romero Júnior (Jamal) e Eo Chapa, os passos rápidos com os pés e movimentos característicos com as mãos tornaram-se uma assinatura visual inconfundível. Vídeos gravados de forma caseira nas calçadas rapidamente dominaram as timelines das redes sociais.",
						"speaker": "minji"
					}
				},
				{
					"type": "Text",
					"value": {
						"text": "Não demorou para que o passinho cruzasse a barreira digital: a dança passou a ser executada por jogadores de futebol em comemorações de gols, celebridades nacionais e participantes de reality shows, como o BBB. Essa forte linguagem corporal forneceu a roupagem perfeita para alimentar os algoritmos de vídeos curtos, transformando dancinhas amadoras em virais imparáveis.",
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
						"text": "A ascensão do TikTok e do Instagram Reels impôs uma nova métrica para a indústria da música: a economia da atenção. Plataformas de streaming como o Spotify contabilizam um 'play' apenas após 30 segundos de audição. Para capturar o ouvinte imediatamente e evitar que ele passe para a próxima música, produtores adotaram a 'estratégia dos 27 segundos': a redução drástica das introduções instrumentais e a antecipação imediata do refrão.",
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
						"text": "O Brega Funk encaixa-se nessa estrutura de forma quase cirúrgica. Com batidas sincopadas marcadas, paradas dramáticas no beat e explosões rítmicas (os chamados 'drops'), o gênero é musicalmente otimizado para desafios de dança de 10 a 15 segundos. Canções inteiras passaram a ser encurtadas para menos de 2 minutos e meio, projetadas para terem o seu ápice concentrado no trecho que será replicado nas redes sociais.",
						"speaker": "eunice"
					}
				},
				{
					"type": "Text",
					"value": {
						"text": "Essa sintonia algorítmica gerou fenômenos curiosos. O andamento real das faixas de Brega Funk reside em uma cadência arrastada e envolvente de 115 a 135 BPM. No entanto, canções como 'Envolvimento' são registradas na API do Spotify com anomalias de tempo duplo (marcando 165 BPM) devido à síncope acelerada das palmas e das batidas de sotaque rítmico que sustentam a dança. A métrica do streaming passou a ler a pulsação do corpo que dança.",
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
						"text": "A engrenagem viral dos ganchos curtos gerou um impacto que ultrapassa o entretenimento. O ecossistema do Brega Funk funciona hoje como uma economia descentralizada e geradora de renda para MCs, DJs, produtores de vídeo independentes, dançarinos e criadores digitais das periferias do Nordeste.",
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
						"text": "Nomes históricos como MC Sheldon e Dadá Boladão hoje dividem espaço em playlists nacionais de destaque com novos produtores e virais do passinho. Embora o movimento ainda enfrente resistência preconceituosa contra sua estética e origens humildes, o Brega Funk consolidou-se como o motor do pop nacional contemporâneo, provando que um loop de 15 segundos pode redefinir o ritmo de todo um país.",
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
}`;var De=A("<p><!></p>"),Re=A("<section><!></section>");function Me(e,t){K(t,!0);let o=w(t,"components",19,()=>({})),n=w(t,"body",19,()=>[]);var s=R(),c=E(s);Y(c,17,n,Z,(p,m)=>{let h=()=>d(m).section,r=()=>d(m).content;const u=I(()=>h().toLowerCase().replace(/[^a-z0-9]/g,"")),a=I(()=>o()[h()]);var i=Re(),C=b(i);{var f=x=>{var g=R(),k=E(g);ut(k,()=>d(a),(T,B)=>{B(T,mt(r))}),v(x,g)},l=x=>{var g=R(),k=E(g);Y(k,17,r,Z,(T,B,O,U)=>{let q=()=>d(B).type,S=()=>d(B).value;const H=I(()=>o()[q()]),et=I(()=>typeof S()=="string");var ft=R(),St=E(ft);{var Dt=z=>{var W=R(),at=E(W);ut(at,()=>d(H),(nt,ot)=>{ot(nt,mt(S))}),v(z,W)},Rt=z=>{var W=R(),at=E(W);{var nt=L=>{var J=De(),rt=b(J);Ct(rt,S),_(J),v(L,J)},ot=L=>{var J=R(),rt=E(J);{var Mt=V=>{var Q=R(),st=E(Q);vt(st,q,!1,(gt,ht)=>{var _t=R(),Bt=E(_t);Ct(Bt,S),v(ht,_t)}),v(V,Q)},jt=V=>{var Q=R(),st=E(Q);vt(st,q,!1,(gt,ht)=>{Kt(gt,()=>({...S()}))}),v(V,Q)};G(rt,V=>{d(et)?V(Mt):V(jt,!1)},!0)}v(L,J)};G(at,L=>{q()==="text"?L(nt):L(ot,!1)},!0)}v(z,W)};G(St,z=>{d(H)?z(Dt):z(Rt,!1)})}v(T,ft)}),v(x,g)};G(C,x=>{d(a)?x(f):x(l,!1)})}_(i),j(()=>$t(i,"id",d(u))),v(p,i)}),v(e,s),tt()}var je=A('<p> </p> <progress max="100"></progress>',1);function Be(e,t){let o=w(t,"label",3,"A"),n=w(t,"value",3,0);var s=je(),c=E(s),p=b(c,!0);_(c);var m=y(c,2);j(()=>{M(p,o()),te(m,n())}),v(e,s)}var qe=A('<section id="cms"><h2>MicroCMS</h2> <code><pre> </pre></code> <!></section>');function we(e,t){K(t,!0);const{body:o}=ae,n={Test:Be};var s=qe(),c=y(b(s),2),p=b(c),m=b(p,!0);_(p),_(c);var h=y(c,2);Me(h,{get components(){return n},get body(){return o}}),_(s),j(r=>M(m,r),[()=>Se.replace(/\t/g," ")]),v(e,s),tt()}const Ne=(e,t=pt)=>{var o=Fe(),n=b(o),s=b(n,!0);_(n);var c=y(n,2),p=b(c,!0);_(c),_(o),j(()=>{M(s,t().name),M(p,t().age)}),v(e,o)};var Fe=A('<div class="person svelte-q3gttf"><p class="svelte-q3gttf"> </p> <p class="svelte-q3gttf"> </p></div>'),Ie=(e,t)=>Zt(t),Pe=(e,t)=>t.random(Math.floor(Math.random()*10)),Oe=A('<h2>Svelte5</h2> <h3>Reactive variables 3 ways:</h3> <button class="svelte-q3gttf">count++</button> <p class="svelte-q3gttf"> </p> <p class="svelte-q3gttf"> </p> <p class="svelte-q3gttf"> </p> <h3>Children (previously slots):</h3> <div class="children"><!></div> <h3>Dispatch Event</h3> <button class="svelte-q3gttf">Random</button>  <h3>Snippets</h3> <div class="people svelte-q3gttf"></div>',1);function Ue(e,t){K(t,!0),w(t,"age",3,30);const o=[{name:"John",age:30},{name:"Jill",age:45}];let n=P(0),s=I(()=>d(n)*2),c=I(()=>d(n)*2),p=P(0);$(()=>{N(p,d(n)*2)});var m=Oe(),h=y(E(m),4);h.__click=[Ie,n];var r=y(h,2),u=b(r);_(r);var a=y(r,2),i=b(a);_(a);var C=y(a,2),f=b(C);_(C);var l=y(C,4),x=b(l);At(x,()=>t.children??pt),_(l);var g=y(l,4);g.__click=[Pe,t];var k=y(g,4);Y(k,21,()=>o,Z,(T,B)=>{Ne(T,()=>d(B))}),_(k),j(()=>{M(u,`${d(n)??""} doubled is ${d(s)??""} (derived)`),M(i,`${d(n)??""} doubled is ${d(c)??""} (derived by)`),M(f,`${d(n)??""} doubled is ${d(p)??""} ($effect)`)}),v(e,m),tt()}Qt(["click"]);const ze=(e,t)=>{let o=P(Ht(e)),n=P(null),s=P(!0),c=P(void 0);const p=(r=!0)=>{N(s,r,!0),r===!0&&(N(c,null),N(n,null))},m=async()=>{try{const r=await fetch(d(o),t);if(!r.ok)throw new Error(`Unexpected error occurred (status ${r.status})`);let u;if(d(o).includes(".csv")){const a=await r.text();u=ce(a)}else u=await r.json();return[null,u]}catch(r){const{errorMessage:u="Unexpected error eccurred"}=r;return[u,null]}},h=async r=>{p(!0);const[u,a]=await m();if(r===d(o)){if(u){p(!1),N(c,u,!0);return}p(!1),N(n,a,!0)}};return $(()=>{h(d(o))}),{get data(){return d(n)},get loading(){return d(s)},get error(){return d(c)},get url(){return d(o)},set url(r){d(o)!==r&&N(o,r,!0)}}};var Le=A("<p>loading data...</p>"),Je=A("<p> </p>"),Ve=A("<p>data loaded</p> <pre> </pre>",1),Ge=A('<div class="c"><h2>Load Data</h2> <div class="response"><!></div></div>');function Ye(e,t){K(t,!0);const o=`${ne}/assets/demo/test.csv`,n=ze(o);$(()=>{});var s=Ge(),c=y(b(s),2),p=b(c);{var m=r=>{var u=Le();v(r,u)},h=r=>{var u=R(),a=E(u);{var i=f=>{var l=Je(),x=b(l);_(l),j(()=>M(x,`error: ${n.error??""}`)),v(f,l)},C=f=>{var l=Ve(),x=y(E(l),2),g=b(x,!0);_(x),j(k=>M(g,k),[()=>JSON.stringify(n.data,null,2)]),v(f,l)};G(a,f=>{n.error?f(i):f(C,!1)},!0)}v(r,u)};G(p,r=>{n.loading?r(m):r(h,!1)})}_(c),_(s),v(e,s),tt()}var Ze=A('<div id="demo" class="svelte-15aotx7"><h1>Demo</h1> <!> <!> <!> <!> <!> <!> <!> <!></div>');function He(e){let t=P(0);function o(i){console.log(i)}var n=Ze(),s=y(b(n),2);Ue(s,{random:o,get value(){return d(t)},set value(i){N(t,i,!0)}});var c=y(s,2);ue(c);var p=y(c,2);ve(p);var m=y(p,2);fe(m);var h=y(m,2);ye(h);var r=y(h,2);we(r,{});var u=y(r,2);Ye(u,{});var a=y(u,2);Ee(a),_(n),v(e,n)}function oa(e){He(e)}export{oa as component};
