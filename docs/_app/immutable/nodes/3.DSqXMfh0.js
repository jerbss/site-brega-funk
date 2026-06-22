import"../chunks/Bzak7iHL.js";import{I as F,J as bt,R as it,aS as qt,H as Nt,N as wt,O as Ft,aT as Pt,M as It,T as Ot,a9 as Lt,a8 as xt,a4 as yt,x as zt,ae as Ut,ad as Jt,Q as Vt,V as A,X as p,ai as y,Z as b,_,am as R,al as E,ao as Gt,W as j,n as d,an as P,U as K,u as $,Y as tt,F as vt,v as w,ak as I,aC as Yt,aU as Zt,r as Ht}from"../chunks/bbAY0-sh.js";import{i as Wt,a as D,d as Qt}from"../chunks/CqV49L9l.js";import{e as Y,i as Z,b as Xt,s as $t,c as Kt,d as te}from"../chunks/agUzZV2y.js";import{c as lt,b as ee,i as G}from"../chunks/B4gROAES.js";import{s as mt,p as N}from"../chunks/vhkXsIHq.js";import{s as At}from"../chunks/CbUN1PuN.js";import{h as Ct,c as ae}from"../chunks/D9rGRQFl.js";import{b as ne}from"../chunks/CF31YaQR.js";function pt(e,t,o,n,s,c){let v=F;F&&bt();var m,h,r=null;F&&it.nodeType===qt&&(r=it,bt());var l=F?it:e,a;Nt(()=>{const i=t()||null;var C=i==="svg"?Pt:null;i!==m&&(a&&(i===null?Ut(a,()=>{a=null,h=null}):i===h?Jt(a):Vt(a)),i&&i!==h&&(a=Ft(()=>{if(r=F?r:C?document.createElementNS(C,i):document.createElement(i),It(r,r),n){F&&Wt(i)&&r.append(document.createComment(""));var f=F?Ot(r):r.appendChild(Lt());F&&(f===null?xt(!1):yt(f)),n(r,f)}zt.nodes_end=r,l.before(r)})),m=i,m&&(h=m))},wt),v&&(xt(!0),yt(l))}var kt={},dt={},ct=34,X=10,ut=13;function Et(e){return new Function("d","return {"+e.map(function(t,o){return JSON.stringify(t)+": d["+o+'] || ""'}).join(",")+"}")}function oe(e,t){var o=Et(e);return function(n,s){return t(o(n),s,e)}}function Tt(e){var t=Object.create(null),o=[];return e.forEach(function(n){for(var s in n)s in t||o.push(t[s]=s)}),o}function M(e,t){var o=e+"",n=o.length;return n<t?new Array(t-n+1).join(0)+o:o}function re(e){return e<0?"-"+M(-e,6):e>9999?"+"+M(e,6):M(e,4)}function se(e){var t=e.getUTCHours(),o=e.getUTCMinutes(),n=e.getUTCSeconds(),s=e.getUTCMilliseconds();return isNaN(e)?"Invalid Date":re(e.getUTCFullYear())+"-"+M(e.getUTCMonth()+1,2)+"-"+M(e.getUTCDate(),2)+(s?"T"+M(t,2)+":"+M(o,2)+":"+M(n,2)+"."+M(s,3)+"Z":n?"T"+M(t,2)+":"+M(o,2)+":"+M(n,2)+"Z":o||t?"T"+M(t,2)+":"+M(o,2)+"Z":"")}function ie(e){var t=new RegExp('["'+e+`
\r]`),o=e.charCodeAt(0);function n(a,i){var C,f,u=s(a,function(x,g){if(C)return C(x,g-1);f=x,C=i?oe(x,i):Et(x)});return u.columns=f||[],u}function s(a,i){var C=[],f=a.length,u=0,x=0,g,k=f<=0,T=!1;a.charCodeAt(f-1)===X&&--f,a.charCodeAt(f-1)===ut&&--f;function B(){if(k)return dt;if(T)return T=!1,kt;var L,q=u,S;if(a.charCodeAt(q)===ct){for(;u++<f&&a.charCodeAt(u)!==ct||a.charCodeAt(++u)===ct;);return(L=u)>=f?k=!0:(S=a.charCodeAt(u++))===X?T=!0:S===ut&&(T=!0,a.charCodeAt(u)===X&&++u),a.slice(q+1,L-1).replace(/""/g,'"')}for(;u<f;){if((S=a.charCodeAt(L=u++))===X)T=!0;else if(S===ut)T=!0,a.charCodeAt(u)===X&&++u;else if(S!==o)continue;return a.slice(q,L)}return k=!0,a.slice(q,f)}for(;(g=B())!==dt;){for(var O=[];g!==kt&&g!==dt;)O.push(g),g=B();i&&(O=i(O,x++))==null||C.push(O)}return C}function c(a,i){return a.map(function(C){return i.map(function(f){return l(C[f])}).join(e)})}function v(a,i){return i==null&&(i=Tt(a)),[i.map(l).join(e)].concat(c(a,i)).join(`
`)}function m(a,i){return i==null&&(i=Tt(a)),c(a,i).join(`
`)}function h(a){return a.map(r).join(`
`)}function r(a){return a.map(l).join(e)}function l(a){return a==null?"":a instanceof Date?se(a):t.test(a+="")?'"'+a.replace(/"/g,'""')+'"':a}return{parse:n,parseRows:s,format:v,formatBody:m,formatRows:h,formatRow:r,formatValue:l}}var de=ie(","),ce=de.parse,ue=A('<section id="demo-link"><h2>Link</h2> <p><a href="elements">Default element styles demo</a></p> <p><a href="fonts">Pudding-hosted font previews</a></p></section>');function le(e){var t=ue();p(e,t)}var me=A('<section id="demo-image"><h2>Image</h2> <p>img tag</p> <img src="../assets/demo/test.jpg" alt="cat" class="svelte-b56t42"/> <p>background image</p> <div class="svelte-b56t42"></div></section>');function pe(e){var t=me();p(e,t)}var ve=A('<section id="demo-element"><h2>Dynamic Svelte Element</h2> <!></section>');function fe(e){const t=[{tag:"h3",text:"I am a h3 tag."},{tag:"p",text:"I am p tag."}];var o=ve(),n=y(b(o),2);Y(n,17,()=>t,Z,(s,c)=>{let v=()=>d(c).tag,m=()=>d(c).text;var h=R(),r=E(h);pt(r,v,!1,(l,a)=>{var i=Gt();j(()=>D(i,m())),p(a,i)}),p(s,h)}),_(o),p(e,o)}var ge=A("<p> </p>");function he(e,t){var o=ge(),n=b(o);_(o),j(()=>D(n,`I am component A and my favorite number is ${t.number??""}.`)),p(e,o)}var _e=A("<p> </p>");function be(e,t){var o=_e(),n=b(o);_(o),j(()=>D(n,`I am component B and my name is ${t.name??""}.`)),p(e,o)}var xe=A('<section id="demo-component"><h2>Dynamic Svelte Component</h2> <!></section>');function ye(e){const t={A:he,B:be},o=[{component:"A",number:42},{component:"B",name:"Russell"}];var n=xe(),s=y(b(n),2);Y(s,17,()=>o,Z,(c,v)=>{const m=P(()=>t[d(v).component]);var h=R(),r=E(h);lt(r,()=>d(m),(l,a)=>{a(l,mt(()=>d(v)))}),p(c,h)}),_(n),p(e,n)}var Ce=A("<div><!></div>");function ke(e,t){K(t,!0);let o=N(t,"root",3,null),n=N(t,"top",3,0),s=N(t,"bottom",3,0),c=N(t,"increments",3,100),v=N(t,"value",15,void 0),m=[],h=[],r=[],l=[],a;function i(){let g=0,k=0;for(let T=0;T<m.length;T++)m[T]>g&&(g=m[T],k=T);g>0?v(k):v(void 0)}function C(g,k){const T=H=>{H[0].isIntersecting;const et=H[0].intersectionRatio;m[k]=et,i()},B=n()?n()*-1:0,O=s()?s()*-1:0,L=`${B}px 0px ${O}px 0px`,q={root:o(),rootMargin:L,threshold:h};l[k]&&l[k].disconnect();const S=new IntersectionObserver(T,q);S.observe(g),l[k]=S}function f(){r.length&&r.forEach(C)}$(()=>{for(let g=0;g<c()+1;g++)h.push(g/c());r=a.querySelectorAll(":scope > *:not(iframe)"),f()}),$(()=>{n(),s(),f()});var u=Ce(),x=b(u);At(x,()=>t.children??vt),_(u),ee(u,g=>a=g,()=>a),p(e,u),tt()}var Te=A('<div><p class="svelte-1sxgmm9"> </p></div>'),Ae=A('<section id="scrolly"><h2 class="svelte-1sxgmm9">Scrolly <span> </span></h2> <div class="spacer svelte-1sxgmm9"></div> <!> <div class="spacer svelte-1sxgmm9"></div></section>');function Ee(e){let t=I(void 0);var o=Ae(),n=b(o),s=y(b(n)),c=b(s,!0);_(s),_(n);var v=y(n,4);ke(v,{get value(){return d(t)},set value(m){w(t,m,!0)},children:(m,h)=>{var r=R(),l=E(r);Y(l,16,()=>[0,1,2,3,4],Z,(a,i,C)=>{const f=P(()=>d(t)===C);var u=Te();let x;var g=b(u),k=b(g,!0);_(g),_(u),j(T=>{x=Xt(u,1,"step svelte-1sxgmm9",null,x,T),D(k,i)},[()=>({active:d(f)})]),p(a,u)}),p(m,r)},$$slots:{default:!0}}),Yt(2),_(o),j(()=>D(c,d(t)||"-")),p(e,o)}const Se=`{
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
						"text": "No início de 2018, três adolescentes da periferia de Jaboatão dos Guararapes, em Pernambuco, decidiram criar um clipe de música. Sem recursos, Paloma Roberta (MC Loma) e as irmãs Mirella e Mariely Santos (as Gêmeas Lacração) usaram um celular emprestado para filmar a si mesmas dançando pelas ruas de seu bairro, sob um orçamento de 40 reais.",
						"speaker": "eunice"
					}
				},
				{
					"type": "Chart",
					"value": {
						"id": "loma-video",
						"figcaption": "Videoclipe oficial de Envolvimento por MC Loma e as Gêmeas Lacração"
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
}`;var Me=A("<p><!></p>"),Re=A("<section><!></section>");function De(e,t){K(t,!0);let o=N(t,"components",19,()=>({})),n=N(t,"body",19,()=>[]);var s=R(),c=E(s);Y(c,17,n,Z,(v,m)=>{let h=()=>d(m).section,r=()=>d(m).content;const l=P(()=>h().toLowerCase().replace(/[^a-z0-9]/g,"")),a=P(()=>o()[h()]);var i=Re(),C=b(i);{var f=x=>{var g=R(),k=E(g);lt(k,()=>d(a),(T,B)=>{B(T,mt(r))}),p(x,g)},u=x=>{var g=R(),k=E(g);Y(k,17,r,Z,(T,B,O,L)=>{let q=()=>d(B).type,S=()=>d(B).value;const H=P(()=>o()[q()]),et=P(()=>typeof S()=="string");var ft=R(),St=E(ft);{var Mt=z=>{var W=R(),at=E(W);lt(at,()=>d(H),(nt,ot)=>{ot(nt,mt(S))}),p(z,W)},Rt=z=>{var W=R(),at=E(W);{var nt=U=>{var J=Me(),rt=b(J);Ct(rt,S),_(J),p(U,J)},ot=U=>{var J=R(),rt=E(J);{var Dt=V=>{var Q=R(),st=E(Q);pt(st,q,!1,(gt,ht)=>{var _t=R(),Bt=E(_t);Ct(Bt,S),p(ht,_t)}),p(V,Q)},jt=V=>{var Q=R(),st=E(Q);pt(st,q,!1,(gt,ht)=>{Kt(gt,()=>({...S()}))}),p(V,Q)};G(rt,V=>{d(et)?V(Dt):V(jt,!1)},!0)}p(U,J)};G(at,U=>{q()==="text"?U(nt):U(ot,!1)},!0)}p(z,W)};G(St,z=>{d(H)?z(Mt):z(Rt,!1)})}p(T,ft)}),p(x,g)};G(C,x=>{d(a)?x(f):x(u,!1)})}_(i),j(()=>$t(i,"id",d(l))),p(v,i)}),p(e,s),tt()}var je=A('<p> </p> <progress max="100"></progress>',1);function Be(e,t){let o=N(t,"label",3,"A"),n=N(t,"value",3,0);var s=je(),c=E(s),v=b(c,!0);_(c);var m=y(c,2);j(()=>{D(v,o()),te(m,n())}),p(e,s)}var qe=A('<section id="cms"><h2>MicroCMS</h2> <code><pre> </pre></code> <!></section>');function Ne(e,t){K(t,!0);const{body:o}=ae,n={Test:Be};var s=qe(),c=y(b(s),2),v=b(c),m=b(v,!0);_(v),_(c);var h=y(c,2);De(h,{get components(){return n},get body(){return o}}),_(s),j(r=>D(m,r),[()=>Se.replace(/\t/g," ")]),p(e,s),tt()}const we=(e,t=vt)=>{var o=Fe(),n=b(o),s=b(n,!0);_(n);var c=y(n,2),v=b(c,!0);_(c),_(o),j(()=>{D(s,t().name),D(v,t().age)}),p(e,o)};var Fe=A('<div class="person svelte-q3gttf"><p class="svelte-q3gttf"> </p> <p class="svelte-q3gttf"> </p></div>'),Pe=(e,t)=>Zt(t),Ie=(e,t)=>t.random(Math.floor(Math.random()*10)),Oe=A('<h2>Svelte5</h2> <h3>Reactive variables 3 ways:</h3> <button class="svelte-q3gttf">count++</button> <p class="svelte-q3gttf"> </p> <p class="svelte-q3gttf"> </p> <p class="svelte-q3gttf"> </p> <h3>Children (previously slots):</h3> <div class="children"><!></div> <h3>Dispatch Event</h3> <button class="svelte-q3gttf">Random</button>  <h3>Snippets</h3> <div class="people svelte-q3gttf"></div>',1);function Le(e,t){K(t,!0),N(t,"age",3,30);const o=[{name:"John",age:30},{name:"Jill",age:45}];let n=I(0),s=P(()=>d(n)*2),c=P(()=>d(n)*2),v=I(0);$(()=>{w(v,d(n)*2)});var m=Oe(),h=y(E(m),4);h.__click=[Pe,n];var r=y(h,2),l=b(r);_(r);var a=y(r,2),i=b(a);_(a);var C=y(a,2),f=b(C);_(C);var u=y(C,4),x=b(u);At(x,()=>t.children??vt),_(u);var g=y(u,4);g.__click=[Ie,t];var k=y(g,4);Y(k,21,()=>o,Z,(T,B)=>{we(T,()=>d(B))}),_(k),j(()=>{D(l,`${d(n)??""} doubled is ${d(s)??""} (derived)`),D(i,`${d(n)??""} doubled is ${d(c)??""} (derived by)`),D(f,`${d(n)??""} doubled is ${d(v)??""} ($effect)`)}),p(e,m),tt()}Qt(["click"]);const ze=(e,t)=>{let o=I(Ht(e)),n=I(null),s=I(!0),c=I(void 0);const v=(r=!0)=>{w(s,r,!0),r===!0&&(w(c,null),w(n,null))},m=async()=>{try{const r=await fetch(d(o),t);if(!r.ok)throw new Error(`Unexpected error occurred (status ${r.status})`);let l;if(d(o).includes(".csv")){const a=await r.text();l=ce(a)}else l=await r.json();return[null,l]}catch(r){const{errorMessage:l="Unexpected error eccurred"}=r;return[l,null]}},h=async r=>{v(!0);const[l,a]=await m();if(r===d(o)){if(l){v(!1),w(c,l,!0);return}v(!1),w(n,a,!0)}};return $(()=>{h(d(o))}),{get data(){return d(n)},get loading(){return d(s)},get error(){return d(c)},get url(){return d(o)},set url(r){d(o)!==r&&w(o,r,!0)}}};var Ue=A("<p>loading data...</p>"),Je=A("<p> </p>"),Ve=A("<p>data loaded</p> <pre> </pre>",1),Ge=A('<div class="c"><h2>Load Data</h2> <div class="response"><!></div></div>');function Ye(e,t){K(t,!0);const o=`${ne}/assets/demo/test.csv`,n=ze(o);$(()=>{});var s=Ge(),c=y(b(s),2),v=b(c);{var m=r=>{var l=Ue();p(r,l)},h=r=>{var l=R(),a=E(l);{var i=f=>{var u=Je(),x=b(u);_(u),j(()=>D(x,`error: ${n.error??""}`)),p(f,u)},C=f=>{var u=Ve(),x=y(E(u),2),g=b(x,!0);_(x),j(k=>D(g,k),[()=>JSON.stringify(n.data,null,2)]),p(f,u)};G(a,f=>{n.error?f(i):f(C,!1)},!0)}p(r,l)};G(v,r=>{n.loading?r(m):r(h,!1)})}_(c),_(s),p(e,s),tt()}var Ze=A('<div id="demo" class="svelte-15aotx7"><h1>Demo</h1> <!> <!> <!> <!> <!> <!> <!> <!></div>');function He(e){let t=I(0);function o(i){console.log(i)}var n=Ze(),s=y(b(n),2);Le(s,{random:o,get value(){return d(t)},set value(i){w(t,i,!0)}});var c=y(s,2);le(c);var v=y(c,2);pe(v);var m=y(v,2);fe(m);var h=y(m,2);ye(h);var r=y(h,2);Ne(r,{});var l=y(r,2);Ye(l,{});var a=y(l,2);Ee(a),_(n),p(e,n)}function oa(e){He(e)}export{oa as component};
