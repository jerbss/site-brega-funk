import"../chunks/Bzak7iHL.js";import{I as P,J as bt,R as it,aS as Ft,H as wt,N as It,O as Pt,aT as qt,M as Ot,T as Nt,a9 as zt,a8 as yt,a4 as xt,x as Ut,ae as Lt,ad as Jt,Q as Gt,V as A,X as p,ai as x,Z as b,_,am as D,al as S,ao as Yt,W as R,n as d,an as q,U as K,u as $,Y as tt,F as vt,v as I,ak as O,az as Vt,aU as Qt,r as Zt}from"../chunks/BMv0M8sc.js";import{i as Ht,a as j,d as Wt}from"../chunks/B-PFOxWu.js";import{e as V,i as Q,b as Xt,s as $t,c as Kt,d as te}from"../chunks/Kj4hIjr3.js";import{c as ut,b as ee,i as Y}from"../chunks/DFRHLSQ6.js";import{s as mt,p as w}from"../chunks/PmbK7F7n.js";import{s as At}from"../chunks/D0W2oKZF.js";import{h as Ct,c as ae}from"../chunks/bifnw9bu.js";import{b as ne}from"../chunks/DusvCVkK.js";function pt(e,t,o,n,s,c){let v=P;P&&bt();var m,h,r=null;P&&it.nodeType===Ft&&(r=it,bt());var u=P?it:e,a;wt(()=>{const i=t()||null;var C=i==="svg"?qt:null;i!==m&&(a&&(i===null?Lt(a,()=>{a=null,h=null}):i===h?Jt(a):Gt(a)),i&&i!==h&&(a=Pt(()=>{if(r=P?r:C?document.createElementNS(C,i):document.createElement(i),Ot(r,r),n){P&&Ht(i)&&r.append(document.createComment(""));var f=P?Nt(r):r.appendChild(zt());P&&(f===null?yt(!1):xt(f)),n(r,f)}Ut.nodes_end=r,u.before(r)})),m=i,m&&(h=m))},It),v&&(yt(!0),xt(u))}var kt={},dt={},ct=34,X=10,lt=13;function St(e){return new Function("d","return {"+e.map(function(t,o){return JSON.stringify(t)+": d["+o+'] || ""'}).join(",")+"}")}function oe(e,t){var o=St(e);return function(n,s){return t(o(n),s,e)}}function Tt(e){var t=Object.create(null),o=[];return e.forEach(function(n){for(var s in n)s in t||o.push(t[s]=s)}),o}function M(e,t){var o=e+"",n=o.length;return n<t?new Array(t-n+1).join(0)+o:o}function re(e){return e<0?"-"+M(-e,6):e>9999?"+"+M(e,6):M(e,4)}function se(e){var t=e.getUTCHours(),o=e.getUTCMinutes(),n=e.getUTCSeconds(),s=e.getUTCMilliseconds();return isNaN(e)?"Invalid Date":re(e.getUTCFullYear())+"-"+M(e.getUTCMonth()+1,2)+"-"+M(e.getUTCDate(),2)+(s?"T"+M(t,2)+":"+M(o,2)+":"+M(n,2)+"."+M(s,3)+"Z":n?"T"+M(t,2)+":"+M(o,2)+":"+M(n,2)+"Z":o||t?"T"+M(t,2)+":"+M(o,2)+"Z":"")}function ie(e){var t=new RegExp('["'+e+`
\r]`),o=e.charCodeAt(0);function n(a,i){var C,f,l=s(a,function(y,g){if(C)return C(y,g-1);f=y,C=i?oe(y,i):St(y)});return l.columns=f||[],l}function s(a,i){var C=[],f=a.length,l=0,y=0,g,k=f<=0,T=!1;a.charCodeAt(f-1)===X&&--f,a.charCodeAt(f-1)===lt&&--f;function B(){if(k)return dt;if(T)return T=!1,kt;var z,F=l,E;if(a.charCodeAt(F)===ct){for(;l++<f&&a.charCodeAt(l)!==ct||a.charCodeAt(++l)===ct;);return(z=l)>=f?k=!0:(E=a.charCodeAt(l++))===X?T=!0:E===lt&&(T=!0,a.charCodeAt(l)===X&&++l),a.slice(F+1,z-1).replace(/""/g,'"')}for(;l<f;){if((E=a.charCodeAt(z=l++))===X)T=!0;else if(E===lt)T=!0,a.charCodeAt(l)===X&&++l;else if(E!==o)continue;return a.slice(F,z)}return k=!0,a.slice(F,f)}for(;(g=B())!==dt;){for(var N=[];g!==kt&&g!==dt;)N.push(g),g=B();i&&(N=i(N,y++))==null||C.push(N)}return C}function c(a,i){return a.map(function(C){return i.map(function(f){return u(C[f])}).join(e)})}function v(a,i){return i==null&&(i=Tt(a)),[i.map(u).join(e)].concat(c(a,i)).join(`
`)}function m(a,i){return i==null&&(i=Tt(a)),c(a,i).join(`
`)}function h(a){return a.map(r).join(`
`)}function r(a){return a.map(u).join(e)}function u(a){return a==null?"":a instanceof Date?se(a):t.test(a+="")?'"'+a.replace(/"/g,'""')+'"':a}return{parse:n,parseRows:s,format:v,formatBody:m,formatRows:h,formatRow:r,formatValue:u}}var de=ie(","),ce=de.parse,le=A('<section id="demo-link"><h2>Link</h2> <p><a href="elements">Default element styles demo</a></p> <p><a href="fonts">Pudding-hosted font previews</a></p></section>');function ue(e){var t=le();p(e,t)}var me=A('<section id="demo-image"><h2>Image</h2> <p>img tag</p> <img src="../assets/demo/test.jpg" alt="cat" class="svelte-b56t42"/> <p>background image</p> <div class="svelte-b56t42"></div></section>');function pe(e){var t=me();p(e,t)}var ve=A('<section id="demo-element"><h2>Dynamic Svelte Element</h2> <!></section>');function fe(e){const t=[{tag:"h3",text:"I am a h3 tag."},{tag:"p",text:"I am p tag."}];var o=ve(),n=x(b(o),2);V(n,17,()=>t,Q,(s,c)=>{let v=()=>d(c).tag,m=()=>d(c).text;var h=D(),r=S(h);pt(r,v,!1,(u,a)=>{var i=Yt();R(()=>j(i,m())),p(a,i)}),p(s,h)}),_(o),p(e,o)}var ge=A("<p> </p>");function he(e,t){var o=ge(),n=b(o);_(o),R(()=>j(n,`I am component A and my favorite number is ${t.number??""}.`)),p(e,o)}var _e=A("<p> </p>");function be(e,t){var o=_e(),n=b(o);_(o),R(()=>j(n,`I am component B and my name is ${t.name??""}.`)),p(e,o)}var ye=A('<section id="demo-component"><h2>Dynamic Svelte Component</h2> <!></section>');function xe(e){const t={A:he,B:be},o=[{component:"A",number:42},{component:"B",name:"Russell"}];var n=ye(),s=x(b(n),2);V(s,17,()=>o,Q,(c,v)=>{const m=q(()=>t[d(v).component]);var h=D(),r=S(h);ut(r,()=>d(m),(u,a)=>{a(u,mt(()=>d(v)))}),p(c,h)}),_(n),p(e,n)}var Ce=A("<div><!></div>");function ke(e,t){K(t,!0);let o=w(t,"root",3,null),n=w(t,"top",3,0),s=w(t,"bottom",3,0),c=w(t,"increments",3,100),v=w(t,"value",15,void 0),m=[],h=[],r=[],u=[],a;function i(){let g=0,k=0;for(let T=0;T<m.length;T++)m[T]>g&&(g=m[T],k=T);g>0?v(k):v(void 0)}function C(g,k){const T=Z=>{Z[0].isIntersecting;const et=Z[0].intersectionRatio;m[k]=et,i()},B=n()?n()*-1:0,N=s()?s()*-1:0,z=`${B}px 0px ${N}px 0px`,F={root:o(),rootMargin:z,threshold:h};u[k]&&u[k].disconnect();const E=new IntersectionObserver(T,F);E.observe(g),u[k]=E}function f(){r.length&&r.forEach(C)}$(()=>{for(let g=0;g<c()+1;g++)h.push(g/c());r=a.querySelectorAll(":scope > *:not(iframe)"),f()}),$(()=>{n(),s(),f()});var l=Ce(),y=b(l);At(y,()=>t.children??vt),_(l),ee(l,g=>a=g,()=>a),p(e,l),tt()}var Te=A('<div><p class="svelte-1sxgmm9"> </p></div>'),Ae=A('<section id="scrolly"><h2 class="svelte-1sxgmm9">Scrolly <span> </span></h2> <div class="spacer svelte-1sxgmm9"></div> <!> <div class="spacer svelte-1sxgmm9"></div></section>');function Se(e){let t=O(void 0);var o=Ae(),n=b(o),s=x(b(n)),c=b(s,!0);_(s),_(n);var v=x(n,4);ke(v,{get value(){return d(t)},set value(m){I(t,m,!0)},children:(m,h)=>{var r=D(),u=S(r);V(u,16,()=>[0,1,2,3,4],Q,(a,i,C)=>{const f=q(()=>d(t)===C);var l=Te();let y;var g=b(l),k=b(g,!0);_(g),_(l),R(T=>{y=Xt(l,1,"step svelte-1sxgmm9",null,y,T),j(k,i)},[()=>({active:d(f)})]),p(a,l)}),p(m,r)},$$slots:{default:!0}}),Vt(2),_(o),R(()=>j(c,d(t)||"-")),p(e,o)}const Ee=`{
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
					"type": "Image",
					"value": {
						"src": "loma.png",
						"alt": "Mirella Santos, MC Loma e Mariely Santos.",
						"shape": "full",
						"source": "Frame do clipe \\"Na Vibe\\""
					}
				},
				{
					"type": "Text",
					"value": {
						"text": "No início de 2018, três jovens da periferia de Jaboatão dos Guararapes, em Pernambuco, decidiram criar um clipe de música. Sem qualquer orçamento, Paloma Roberta (MC Loma, de 15 anos) e as irmãs Mirella e Mariely Santos (as Gêmeas Lacração, de 18 anos) usaram a câmera de um celular comum para filmar a si mesmas dançando pelo bairro.",
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
						"text": "A produção simples da música \\"Envolvimento\\" viralizou no YouTube de forma inesperada. Em poucas semanas, o vídeo amador acumulou milhões de visualizações, recebeu apoio de influenciadores e chamou a atenção de artistas consagrados. A força do viral colocou a faixa nas paradas globais de streaming e forçou a indústria a olhar para o ritmo, culminando no topo do ranking nacional do Spotify logo após a assinatura com uma produtora no início de fevereiro.",
						"speaker": "minji"
					}
				},
				{
					"type": "Chart",
					"value": {
						"id": "chart-envolvimento-trajectory",
						"title": "A Rápida Ascensão no Spotify",
						"subtitle": "Trajetória semanal de \\"Envolvimento\\" no Top 200 Brasil. A faixa impressionou ao estrear direto na 38ª posição e, em apenas uma semana, saltou para o 2º lugar, alcançando a marca de 3,7 milhões de streams semanais no auge do viral.",
						"source": "Fonte: Spotify Charts Brasil (Fevereiro - Junho de 2018)"
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
			"heading": "",
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
						"id": "audio-early-brega-funk",
						"title": "Antiga sonoridade: O Brega Funk de 2011 a 2015",
						"subtitle": "Player de áudio com trecho instrumental ou clipe antigo do Dadá Boladão ou MC Sheldon (como soava o brega funk de raiz recifense antes da projeção nacional).",
						"source": "Fonte: Acervo Independente (YouTube)"
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
					"type": "Chart",
					"value": {
						"id": "chart-brega-funk-growth",
						"title": "Crescimento do Brega Funk no Spotify Charts Brasil",
						"subtitle": "Quantidade de faixas do gênero no Top 200 anual (2018 - 2025). Demonstra graficamente a explosão do ritmo de zero faixas em 2017 para dezenas por semana nos anos seguintes.",
						"source": "Fonte: Spotify Charts Brasil (2018 - 2025)"
					}
				},
				{
					"type": "Chart",
					"value": {
						"id": "map-google-trends-brega-funk",
						"title": "Mapa de Calor: Interesse por Estado (Google Trends)",
						"subtitle": "Mapa geográfico de buscas pelo termo 'brega funk' no Brasil, mostrando a concentração inicial em Pernambuco/Nordeste e posterior difusão para Sudeste e Sul.",
						"source": "Fonte: Google Trends Brasil"
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
			"heading": "",
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
						"id": "grid-passinho-contexts",
						"title": "Múltiplos Contextos do Passinho",
						"subtitle": "Grid interativo com vídeos curtos ou GIFs comparativos do passinho em 4 cenários: nas calçadas de Recife (raiz), nas comemorações de futebol (Neymar), na televisão nacional e no TikTok.",
						"source": "Curadoria e Acervo de Redes Sociais (YouTube / TikTok)"
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
			"heading": "",
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
						"id": "chart-song-duration-trend",
						"title": "Tendência de Queda na Duração das Músicas",
						"subtitle": "Evolução da duração mediana das músicas no Top 200 Brasil (2018 - 2025). Pontos destacados mostram como as faixas de brega funk anteciparam essa redução geral sob a economia da atenção.",
						"source": "Fonte: Spotify Audio Features API"
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
					"type": "Chart",
					"value": {
						"id": "interactive-bpm-comparator",
						"title": "Dissonância Rítmica: O que o Algoritmo Ouve",
						"subtitle": "Comparador de batidas por minuto (BPM). O algoritmo do Spotify registra faixas como \\"Envolvimento\\" a ~165 BPM, enquanto o andamento real do ritmo é o compasso binário de ~82 BPM. Clique para ouvir o metrônomo correspondente.",
						"source": "Fonte: Spotify Audio Features API & Medições Manuais"
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
			"heading": "",
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
						"id": "playlist-brega-funk-anthology",
						"title": "Playlist Interativa: Antologia do Brega Funk",
						"subtitle": "Evolução cronológica do gênero por meio de faixas essenciais, desde a base recifense de 2011 até a invasão das paradas nacionais e as experimentações atuais.",
						"source": "Fonte: Spotify Embed Player (Curadoria Editorial)"
					}
				},
				{
					"type": "Text",
					"value": {
						"text": "Nomes históricos do brega recifense dividem espaço nas playlists nacionais com jovens produtores do passinho. Mesmo enfrentando resistências e preconceito contra suas origens, o brega funk estabeleceu-se como um dos principais influenciadores da música pop brasileira contemporânea.",
						"speaker": "eunice"
					}
				},
				{
					"type": "Chart",
					"value": {
						"id": "grid-artists-cards",
						"title": "Quem Fez a Cena: Protagonistas do Brega Funk",
						"subtitle": "Grade de cards com foto, cidade natal e principal sucesso dos produtores, MCs e dançarinos mais influentes da história do ritmo.",
						"source": "Fonte: Curadoria Editorial"
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
		}
	]
}`;var Me=A("<p><!></p>"),De=A("<section><!></section>");function je(e,t){K(t,!0);let o=w(t,"components",19,()=>({})),n=w(t,"body",19,()=>[]);var s=D(),c=S(s);V(c,17,n,Q,(v,m)=>{let h=()=>d(m).section,r=()=>d(m).content;const u=q(()=>h().toLowerCase().replace(/[^a-z0-9]/g,"")),a=q(()=>o()[h()]);var i=De(),C=b(i);{var f=y=>{var g=D(),k=S(g);ut(k,()=>d(a),(T,B)=>{B(T,mt(r))}),p(y,g)},l=y=>{var g=D(),k=S(g);V(k,17,r,Q,(T,B,N,z)=>{let F=()=>d(B).type,E=()=>d(B).value;const Z=q(()=>o()[F()]),et=q(()=>typeof E()=="string");var ft=D(),Et=S(ft);{var Mt=U=>{var H=D(),at=S(H);ut(at,()=>d(Z),(nt,ot)=>{ot(nt,mt(E))}),p(U,H)},Dt=U=>{var H=D(),at=S(H);{var nt=L=>{var J=Me(),rt=b(J);Ct(rt,E),_(J),p(L,J)},ot=L=>{var J=D(),rt=S(J);{var jt=G=>{var W=D(),st=S(W);pt(st,F,!1,(gt,ht)=>{var _t=D(),Bt=S(_t);Ct(Bt,E),p(ht,_t)}),p(G,W)},Rt=G=>{var W=D(),st=S(W);pt(st,F,!1,(gt,ht)=>{Kt(gt,()=>({...E()}))}),p(G,W)};Y(rt,G=>{d(et)?G(jt):G(Rt,!1)},!0)}p(L,J)};Y(at,L=>{F()==="text"?L(nt):L(ot,!1)},!0)}p(U,H)};Y(Et,U=>{d(Z)?U(Mt):U(Dt,!1)})}p(T,ft)}),p(y,g)};Y(C,y=>{d(a)?y(f):y(l,!1)})}_(i),R(()=>$t(i,"id",d(u))),p(v,i)}),p(e,s),tt()}var Re=A('<p> </p> <progress max="100"></progress>',1);function Be(e,t){let o=w(t,"label",3,"A"),n=w(t,"value",3,0);var s=Re(),c=S(s),v=b(c,!0);_(c);var m=x(c,2);R(()=>{j(v,o()),te(m,n())}),p(e,s)}var Fe=A('<section id="cms"><h2>MicroCMS</h2> <code><pre> </pre></code> <!></section>');function we(e,t){K(t,!0);const{body:o}=ae,n={Test:Be};var s=Fe(),c=x(b(s),2),v=b(c),m=b(v,!0);_(v),_(c);var h=x(c,2);je(h,{get components(){return n},get body(){return o}}),_(s),R(r=>j(m,r),[()=>Ee.replace(/\t/g," ")]),p(e,s),tt()}const Ie=(e,t=vt)=>{var o=Pe(),n=b(o),s=b(n,!0);_(n);var c=x(n,2),v=b(c,!0);_(c),_(o),R(()=>{j(s,t().name),j(v,t().age)}),p(e,o)};var Pe=A('<div class="person svelte-q3gttf"><p class="svelte-q3gttf"> </p> <p class="svelte-q3gttf"> </p></div>'),qe=(e,t)=>Qt(t),Oe=(e,t)=>t.random(Math.floor(Math.random()*10)),Ne=A('<h2>Svelte5</h2> <h3>Reactive variables 3 ways:</h3> <button class="svelte-q3gttf">count++</button> <p class="svelte-q3gttf"> </p> <p class="svelte-q3gttf"> </p> <p class="svelte-q3gttf"> </p> <h3>Children (previously slots):</h3> <div class="children"><!></div> <h3>Dispatch Event</h3> <button class="svelte-q3gttf">Random</button>  <h3>Snippets</h3> <div class="people svelte-q3gttf"></div>',1);function ze(e,t){K(t,!0),w(t,"age",3,30);const o=[{name:"John",age:30},{name:"Jill",age:45}];let n=O(0),s=q(()=>d(n)*2),c=q(()=>d(n)*2),v=O(0);$(()=>{I(v,d(n)*2)});var m=Ne(),h=x(S(m),4);h.__click=[qe,n];var r=x(h,2),u=b(r);_(r);var a=x(r,2),i=b(a);_(a);var C=x(a,2),f=b(C);_(C);var l=x(C,4),y=b(l);At(y,()=>t.children??vt),_(l);var g=x(l,4);g.__click=[Oe,t];var k=x(g,4);V(k,21,()=>o,Q,(T,B)=>{Ie(T,()=>d(B))}),_(k),R(()=>{j(u,`${d(n)??""} doubled is ${d(s)??""} (derived)`),j(i,`${d(n)??""} doubled is ${d(c)??""} (derived by)`),j(f,`${d(n)??""} doubled is ${d(v)??""} ($effect)`)}),p(e,m),tt()}Wt(["click"]);const Ue=(e,t)=>{let o=O(Zt(e)),n=O(null),s=O(!0),c=O(void 0);const v=(r=!0)=>{I(s,r,!0),r===!0&&(I(c,null),I(n,null))},m=async()=>{try{const r=await fetch(d(o),t);if(!r.ok)throw new Error(`Unexpected error occurred (status ${r.status})`);let u;if(d(o).includes(".csv")){const a=await r.text();u=ce(a)}else u=await r.json();return[null,u]}catch(r){const{errorMessage:u="Unexpected error eccurred"}=r;return[u,null]}},h=async r=>{v(!0);const[u,a]=await m();if(r===d(o)){if(u){v(!1),I(c,u,!0);return}v(!1),I(n,a,!0)}};return $(()=>{h(d(o))}),{get data(){return d(n)},get loading(){return d(s)},get error(){return d(c)},get url(){return d(o)},set url(r){d(o)!==r&&I(o,r,!0)}}};var Le=A("<p>loading data...</p>"),Je=A("<p> </p>"),Ge=A("<p>data loaded</p> <pre> </pre>",1),Ye=A('<div class="c"><h2>Load Data</h2> <div class="response"><!></div></div>');function Ve(e,t){K(t,!0);const o=`${ne}/assets/demo/test.csv`,n=Ue(o);$(()=>{});var s=Ye(),c=x(b(s),2),v=b(c);{var m=r=>{var u=Le();p(r,u)},h=r=>{var u=D(),a=S(u);{var i=f=>{var l=Je(),y=b(l);_(l),R(()=>j(y,`error: ${n.error??""}`)),p(f,l)},C=f=>{var l=Ge(),y=x(S(l),2),g=b(y,!0);_(y),R(k=>j(g,k),[()=>JSON.stringify(n.data,null,2)]),p(f,l)};Y(a,f=>{n.error?f(i):f(C,!1)},!0)}p(r,u)};Y(v,r=>{n.loading?r(m):r(h,!1)})}_(c),_(s),p(e,s),tt()}var Qe=A('<div id="demo" class="svelte-15aotx7"><h1>Demo</h1> <!> <!> <!> <!> <!> <!> <!> <!></div>');function Ze(e){let t=O(0);function o(i){console.log(i)}var n=Qe(),s=x(b(n),2);ze(s,{random:o,get value(){return d(t)},set value(i){I(t,i,!0)}});var c=x(s,2);ue(c);var v=x(c,2);pe(v);var m=x(v,2);fe(m);var h=x(m,2);xe(h);var r=x(h,2);we(r,{});var u=x(r,2);Ve(u,{});var a=x(u,2);Se(a),_(n),p(e,n)}function oa(e){Ze(e)}export{oa as component};
