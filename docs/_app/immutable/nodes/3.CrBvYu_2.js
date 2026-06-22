import"../chunks/Bzak7iHL.js";import{I as P,J as _t,R as it,aS as Ft,H as qt,N as Ot,O as Pt,aT as wt,M as It,T as Nt,a9 as Ut,a8 as yt,a4 as xt,x as zt,ae as Lt,ad as Jt,Q as Gt,V as A,X as p,ai as x,Z as _,_ as b,am as D,al as S,ao as Vt,W as j,n as d,an as w,U as $,u as K,Y as tt,F as vt,v as O,ak as I,az as Yt,aU as Qt,r as Zt}from"../chunks/D-LEvHX2.js";import{i as Ht,a as R,d as Wt}from"../chunks/D8n1WcDg.js";import{e as Y,i as Q,b as Xt,s as Kt,c as $t,d as te}from"../chunks/BQdEpx3j.js";import{c as ut,b as ee,i as V}from"../chunks/BbP9FdZf.js";import{s as mt,p as q}from"../chunks/CdFUhNF-.js";import{s as At}from"../chunks/CYx8mrRR.js";import{h as Ct,c as ae}from"../chunks/Cq9w4BsX.js";import{b as oe}from"../chunks/DhuIKqIR.js";function pt(e,t,n,o,s,c){let v=P;P&&_t();var m,h,r=null;P&&it.nodeType===Ft&&(r=it,_t());var u=P?it:e,a;qt(()=>{const i=t()||null;var C=i==="svg"?wt:null;i!==m&&(a&&(i===null?Lt(a,()=>{a=null,h=null}):i===h?Jt(a):Gt(a)),i&&i!==h&&(a=Pt(()=>{if(r=P?r:C?document.createElementNS(C,i):document.createElement(i),It(r,r),o){P&&Ht(i)&&r.append(document.createComment(""));var f=P?Nt(r):r.appendChild(Ut());P&&(f===null?yt(!1):xt(f)),o(r,f)}zt.nodes_end=r,u.before(r)})),m=i,m&&(h=m))},Ot),v&&(yt(!0),xt(u))}var kt={},dt={},ct=34,X=10,lt=13;function St(e){return new Function("d","return {"+e.map(function(t,n){return JSON.stringify(t)+": d["+n+'] || ""'}).join(",")+"}")}function ne(e,t){var n=St(e);return function(o,s){return t(n(o),s,e)}}function Tt(e){var t=Object.create(null),n=[];return e.forEach(function(o){for(var s in o)s in t||n.push(t[s]=s)}),n}function M(e,t){var n=e+"",o=n.length;return o<t?new Array(t-o+1).join(0)+n:n}function re(e){return e<0?"-"+M(-e,6):e>9999?"+"+M(e,6):M(e,4)}function se(e){var t=e.getUTCHours(),n=e.getUTCMinutes(),o=e.getUTCSeconds(),s=e.getUTCMilliseconds();return isNaN(e)?"Invalid Date":re(e.getUTCFullYear())+"-"+M(e.getUTCMonth()+1,2)+"-"+M(e.getUTCDate(),2)+(s?"T"+M(t,2)+":"+M(n,2)+":"+M(o,2)+"."+M(s,3)+"Z":o?"T"+M(t,2)+":"+M(n,2)+":"+M(o,2)+"Z":n||t?"T"+M(t,2)+":"+M(n,2)+"Z":"")}function ie(e){var t=new RegExp('["'+e+`
\r]`),n=e.charCodeAt(0);function o(a,i){var C,f,l=s(a,function(y,g){if(C)return C(y,g-1);f=y,C=i?ne(y,i):St(y)});return l.columns=f||[],l}function s(a,i){var C=[],f=a.length,l=0,y=0,g,k=f<=0,T=!1;a.charCodeAt(f-1)===X&&--f,a.charCodeAt(f-1)===lt&&--f;function B(){if(k)return dt;if(T)return T=!1,kt;var U,F=l,E;if(a.charCodeAt(F)===ct){for(;l++<f&&a.charCodeAt(l)!==ct||a.charCodeAt(++l)===ct;);return(U=l)>=f?k=!0:(E=a.charCodeAt(l++))===X?T=!0:E===lt&&(T=!0,a.charCodeAt(l)===X&&++l),a.slice(F+1,U-1).replace(/""/g,'"')}for(;l<f;){if((E=a.charCodeAt(U=l++))===X)T=!0;else if(E===lt)T=!0,a.charCodeAt(l)===X&&++l;else if(E!==n)continue;return a.slice(F,U)}return k=!0,a.slice(F,f)}for(;(g=B())!==dt;){for(var N=[];g!==kt&&g!==dt;)N.push(g),g=B();i&&(N=i(N,y++))==null||C.push(N)}return C}function c(a,i){return a.map(function(C){return i.map(function(f){return u(C[f])}).join(e)})}function v(a,i){return i==null&&(i=Tt(a)),[i.map(u).join(e)].concat(c(a,i)).join(`
`)}function m(a,i){return i==null&&(i=Tt(a)),c(a,i).join(`
`)}function h(a){return a.map(r).join(`
`)}function r(a){return a.map(u).join(e)}function u(a){return a==null?"":a instanceof Date?se(a):t.test(a+="")?'"'+a.replace(/"/g,'""')+'"':a}return{parse:o,parseRows:s,format:v,formatBody:m,formatRows:h,formatRow:r,formatValue:u}}var de=ie(","),ce=de.parse,le=A('<section id="demo-link"><h2>Link</h2> <p><a href="elements">Default element styles demo</a></p> <p><a href="fonts">Pudding-hosted font previews</a></p></section>');function ue(e){var t=le();p(e,t)}var me=A('<section id="demo-image"><h2>Image</h2> <p>img tag</p> <img src="../assets/demo/test.jpg" alt="cat" class="svelte-b56t42"/> <p>background image</p> <div class="svelte-b56t42"></div></section>');function pe(e){var t=me();p(e,t)}var ve=A('<section id="demo-element"><h2>Dynamic Svelte Element</h2> <!></section>');function fe(e){const t=[{tag:"h3",text:"I am a h3 tag."},{tag:"p",text:"I am p tag."}];var n=ve(),o=x(_(n),2);Y(o,17,()=>t,Q,(s,c)=>{let v=()=>d(c).tag,m=()=>d(c).text;var h=D(),r=S(h);pt(r,v,!1,(u,a)=>{var i=Vt();j(()=>R(i,m())),p(a,i)}),p(s,h)}),b(n),p(e,n)}var ge=A("<p> </p>");function he(e,t){var n=ge(),o=_(n);b(n),j(()=>R(o,`I am component A and my favorite number is ${t.number??""}.`)),p(e,n)}var be=A("<p> </p>");function _e(e,t){var n=be(),o=_(n);b(n),j(()=>R(o,`I am component B and my name is ${t.name??""}.`)),p(e,n)}var ye=A('<section id="demo-component"><h2>Dynamic Svelte Component</h2> <!></section>');function xe(e){const t={A:he,B:_e},n=[{component:"A",number:42},{component:"B",name:"Russell"}];var o=ye(),s=x(_(o),2);Y(s,17,()=>n,Q,(c,v)=>{const m=w(()=>t[d(v).component]);var h=D(),r=S(h);ut(r,()=>d(m),(u,a)=>{a(u,mt(()=>d(v)))}),p(c,h)}),b(o),p(e,o)}var Ce=A("<div><!></div>");function ke(e,t){$(t,!0);let n=q(t,"root",3,null),o=q(t,"top",3,0),s=q(t,"bottom",3,0),c=q(t,"increments",3,100),v=q(t,"value",15,void 0),m=[],h=[],r=[],u=[],a;function i(){let g=0,k=0;for(let T=0;T<m.length;T++)m[T]>g&&(g=m[T],k=T);g>0?v(k):v(void 0)}function C(g,k){const T=Z=>{Z[0].isIntersecting;const et=Z[0].intersectionRatio;m[k]=et,i()},B=o()?o()*-1:0,N=s()?s()*-1:0,U=`${B}px 0px ${N}px 0px`,F={root:n(),rootMargin:U,threshold:h};u[k]&&u[k].disconnect();const E=new IntersectionObserver(T,F);E.observe(g),u[k]=E}function f(){r.length&&r.forEach(C)}K(()=>{for(let g=0;g<c()+1;g++)h.push(g/c());r=a.querySelectorAll(":scope > *:not(iframe)"),f()}),K(()=>{o(),s(),f()});var l=Ce(),y=_(l);At(y,()=>t.children??vt),b(l),ee(l,g=>a=g,()=>a),p(e,l),tt()}var Te=A('<div><p class="svelte-1sxgmm9"> </p></div>'),Ae=A('<section id="scrolly"><h2 class="svelte-1sxgmm9">Scrolly <span> </span></h2> <div class="spacer svelte-1sxgmm9"></div> <!> <div class="spacer svelte-1sxgmm9"></div></section>');function Se(e){let t=I(void 0);var n=Ae(),o=_(n),s=x(_(o)),c=_(s,!0);b(s),b(o);var v=x(o,4);ke(v,{get value(){return d(t)},set value(m){O(t,m,!0)},children:(m,h)=>{var r=D(),u=S(r);Y(u,16,()=>[0,1,2,3,4],Q,(a,i,C)=>{const f=w(()=>d(t)===C);var l=Te();let y;var g=_(l),k=_(g,!0);b(g),b(l),j(T=>{y=Xt(l,1,"step svelte-1sxgmm9",null,y,T),R(k,i)},[()=>({active:d(f)})]),p(a,l)}),p(m,r)},$$slots:{default:!0}}),Yt(2),b(n),j(()=>R(c,d(t)||"-")),p(e,n)}const Ee=`{
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
						"source": "MC Loma e as Gêmeas Lacração no clipe \\"Na Vibe\\" (2018)"
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
						"subtitle": "Trajetória semanal de \\"Envolvimento\\" no Top 200 Brasil. A faixa impressionou ao estrear direto na 38ª posição e, em apenas uma semana, saltou para o 2º lugar (atrás apenas de \\"Vai Malandra\\", de Anitta), alcançando a marca de 3,7 milhões de streams semanais no auge do viral.",
						"source": "Fonte: Spotify Charts Brasil (Fevereiro - Junho de 2018)"
					}
				},
				{
					"type": "Text",
					"value": {
						"text": "O estouro de \\"Envolvimento\\" provou que o sucesso na música brasileira podia nascer de forma totalmente orgânica nas redes sociais, dispensando os investimentos das grandes gravadoras. No entanto, embora a música tenha tocado no Brasil inteiro, o público fora de Pernambuco ainda não conhecia o nome do movimento. O termo \\"brega funk\\" permaneceria como um segredo de Recife por mais um ano, aguardando os próximos hits que consolidariam o gênero de vez na internet.",
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
						"text": "Muito antes de \\"Envolvimento\\" dominar as paradas do país, o Brega Funk já servia de trilha sonora nas comunidades da Região Metropolitana do Recife. O gênero surgiu no início da década de 2010, unindo a melodia romântica do brega recifense às batidas aceleradas do funk carioca.",
						"speaker": "minji"
					}
				},
				{
					"type": "Chart",
					"value": {
						"id": "audio-early-brega-funk",
						"title": "Antiga Sonoridade: O Começo do Brega Funk",
						"subtitle": "Ouça \\"Pensei Que Era Pra Sempre\\" de MC Sheldon. A faixa exemplifica a transição do brega recifense clássico para o brega funk, mantendo o tom melódico e romântico, mas já incorporando os primeiros elementos rítmicos do funk carioca.",
						"source": "Clássico de 2012 que fundiu o Brega Romântico ao início das batidas do Funk"
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
						"title": "A Explosão de Buscas pelo Brega Funk",
						"subtitle": "O gráfico demonstra que a popularização do termo na internet demorou a acontecer. No início de 2018, quando o hit \\"Envolvimento\\" estourou, quase ninguém pesquisava usando o termo \\"brega funk\\". A explosão de buscas só ocorreu entre o fim de 2019 e o início de 2020, impulsionada por grandes hits de Carnaval como \\"Sentadão\\" e \\"Tudo OK\\".",
						"source": "Fonte: Google Trends Brasil (2018 - 2026)"
					}
				},
				{
					"type": "Chart",
					"value": {
						"id": "map-google-trends-brega-funk",
						"title": "De Recife para o Brasil",
						"subtitle": "Mapa de interesse relativo pelo termo <em>brega funk</em> por estado brasileiro. Pernambuco lidera com ampla margem, mas o Nordeste inteiro vibra com o ritmo e o Sudeste/Sul demonstram penetração crescente.",
						"source": "Fonte: Google Trends Brasil (Interesse por sub-região)"
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
}
`;var Me=A("<p><!></p>"),De=A("<section><!></section>");function Re(e,t){$(t,!0);let n=q(t,"components",19,()=>({})),o=q(t,"body",19,()=>[]);var s=D(),c=S(s);Y(c,17,o,Q,(v,m)=>{let h=()=>d(m).section,r=()=>d(m).content;const u=w(()=>h().toLowerCase().replace(/[^a-z0-9]/g,"")),a=w(()=>n()[h()]);var i=De(),C=_(i);{var f=y=>{var g=D(),k=S(g);ut(k,()=>d(a),(T,B)=>{B(T,mt(r))}),p(y,g)},l=y=>{var g=D(),k=S(g);Y(k,17,r,Q,(T,B,N,U)=>{let F=()=>d(B).type,E=()=>d(B).value;const Z=w(()=>n()[F()]),et=w(()=>typeof E()=="string");var ft=D(),Et=S(ft);{var Mt=z=>{var H=D(),at=S(H);ut(at,()=>d(Z),(ot,nt)=>{nt(ot,mt(E))}),p(z,H)},Dt=z=>{var H=D(),at=S(H);{var ot=L=>{var J=Me(),rt=_(J);Ct(rt,E),b(J),p(L,J)},nt=L=>{var J=D(),rt=S(J);{var Rt=G=>{var W=D(),st=S(W);pt(st,F,!1,(gt,ht)=>{var bt=D(),Bt=S(bt);Ct(Bt,E),p(ht,bt)}),p(G,W)},jt=G=>{var W=D(),st=S(W);pt(st,F,!1,(gt,ht)=>{$t(gt,()=>({...E()}))}),p(G,W)};V(rt,G=>{d(et)?G(Rt):G(jt,!1)},!0)}p(L,J)};V(at,L=>{F()==="text"?L(ot):L(nt,!1)},!0)}p(z,H)};V(Et,z=>{d(Z)?z(Mt):z(Dt,!1)})}p(T,ft)}),p(y,g)};V(C,y=>{d(a)?y(f):y(l,!1)})}b(i),j(()=>Kt(i,"id",d(u))),p(v,i)}),p(e,s),tt()}var je=A('<p> </p> <progress max="100"></progress>',1);function Be(e,t){let n=q(t,"label",3,"A"),o=q(t,"value",3,0);var s=je(),c=S(s),v=_(c,!0);b(c);var m=x(c,2);j(()=>{R(v,n()),te(m,o())}),p(e,s)}var Fe=A('<section id="cms"><h2>MicroCMS</h2> <code><pre> </pre></code> <!></section>');function qe(e,t){$(t,!0);const{body:n}=ae,o={Test:Be};var s=Fe(),c=x(_(s),2),v=_(c),m=_(v,!0);b(v),b(c);var h=x(c,2);Re(h,{get components(){return o},get body(){return n}}),b(s),j(r=>R(m,r),[()=>Ee.replace(/\t/g," ")]),p(e,s),tt()}const Oe=(e,t=vt)=>{var n=Pe(),o=_(n),s=_(o,!0);b(o);var c=x(o,2),v=_(c,!0);b(c),b(n),j(()=>{R(s,t().name),R(v,t().age)}),p(e,n)};var Pe=A('<div class="person svelte-q3gttf"><p class="svelte-q3gttf"> </p> <p class="svelte-q3gttf"> </p></div>'),we=(e,t)=>Qt(t),Ie=(e,t)=>t.random(Math.floor(Math.random()*10)),Ne=A('<h2>Svelte5</h2> <h3>Reactive variables 3 ways:</h3> <button class="svelte-q3gttf">count++</button> <p class="svelte-q3gttf"> </p> <p class="svelte-q3gttf"> </p> <p class="svelte-q3gttf"> </p> <h3>Children (previously slots):</h3> <div class="children"><!></div> <h3>Dispatch Event</h3> <button class="svelte-q3gttf">Random</button>  <h3>Snippets</h3> <div class="people svelte-q3gttf"></div>',1);function Ue(e,t){$(t,!0),q(t,"age",3,30);const n=[{name:"John",age:30},{name:"Jill",age:45}];let o=I(0),s=w(()=>d(o)*2),c=w(()=>d(o)*2),v=I(0);K(()=>{O(v,d(o)*2)});var m=Ne(),h=x(S(m),4);h.__click=[we,o];var r=x(h,2),u=_(r);b(r);var a=x(r,2),i=_(a);b(a);var C=x(a,2),f=_(C);b(C);var l=x(C,4),y=_(l);At(y,()=>t.children??vt),b(l);var g=x(l,4);g.__click=[Ie,t];var k=x(g,4);Y(k,21,()=>n,Q,(T,B)=>{Oe(T,()=>d(B))}),b(k),j(()=>{R(u,`${d(o)??""} doubled is ${d(s)??""} (derived)`),R(i,`${d(o)??""} doubled is ${d(c)??""} (derived by)`),R(f,`${d(o)??""} doubled is ${d(v)??""} ($effect)`)}),p(e,m),tt()}Wt(["click"]);const ze=(e,t)=>{let n=I(Zt(e)),o=I(null),s=I(!0),c=I(void 0);const v=(r=!0)=>{O(s,r,!0),r===!0&&(O(c,null),O(o,null))},m=async()=>{try{const r=await fetch(d(n),t);if(!r.ok)throw new Error(`Unexpected error occurred (status ${r.status})`);let u;if(d(n).includes(".csv")){const a=await r.text();u=ce(a)}else u=await r.json();return[null,u]}catch(r){const{errorMessage:u="Unexpected error eccurred"}=r;return[u,null]}},h=async r=>{v(!0);const[u,a]=await m();if(r===d(n)){if(u){v(!1),O(c,u,!0);return}v(!1),O(o,a,!0)}};return K(()=>{h(d(n))}),{get data(){return d(o)},get loading(){return d(s)},get error(){return d(c)},get url(){return d(n)},set url(r){d(n)!==r&&O(n,r,!0)}}};var Le=A("<p>loading data...</p>"),Je=A("<p> </p>"),Ge=A("<p>data loaded</p> <pre> </pre>",1),Ve=A('<div class="c"><h2>Load Data</h2> <div class="response"><!></div></div>');function Ye(e,t){$(t,!0);const n=`${oe}/assets/demo/test.csv`,o=ze(n);K(()=>{});var s=Ve(),c=x(_(s),2),v=_(c);{var m=r=>{var u=Le();p(r,u)},h=r=>{var u=D(),a=S(u);{var i=f=>{var l=Je(),y=_(l);b(l),j(()=>R(y,`error: ${o.error??""}`)),p(f,l)},C=f=>{var l=Ge(),y=x(S(l),2),g=_(y,!0);b(y),j(k=>R(g,k),[()=>JSON.stringify(o.data,null,2)]),p(f,l)};V(a,f=>{o.error?f(i):f(C,!1)},!0)}p(r,u)};V(v,r=>{o.loading?r(m):r(h,!1)})}b(c),b(s),p(e,s),tt()}var Qe=A('<div id="demo" class="svelte-15aotx7"><h1>Demo</h1> <!> <!> <!> <!> <!> <!> <!> <!></div>');function Ze(e){let t=I(0);function n(i){console.log(i)}var o=Qe(),s=x(_(o),2);Ue(s,{random:n,get value(){return d(t)},set value(i){O(t,i,!0)}});var c=x(s,2);ue(c);var v=x(c,2);pe(v);var m=x(v,2);fe(m);var h=x(m,2);xe(h);var r=x(h,2);qe(r,{});var u=x(r,2);Ye(u,{});var a=x(u,2);Se(a),b(o),p(e,o)}function na(e){Ze(e)}export{na as component};
