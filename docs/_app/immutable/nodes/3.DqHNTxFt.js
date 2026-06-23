import"../chunks/Bzak7iHL.js";import{I as q,J as _t,R as it,aS as jt,H as Ft,N as Pt,O as qt,aT as It,M as Nt,T as wt,a9 as Lt,a8 as yt,a4 as xt,x as Ut,ae as zt,ad as Gt,Q as Jt,V as A,X as v,ai as x,Z as _,_ as b,am as R,al as E,ao as Vt,W as B,n as d,an as I,U as $,u as K,Y as tt,F as pt,v as P,ak as N,az as Qt,aU as Yt,r as Ht}from"../chunks/D-LEvHX2.js";import{i as Zt,a as D,d as Wt}from"../chunks/D8n1WcDg.js";import{e as Q,i as Y,b as Xt,s as Kt,c as $t,d as te}from"../chunks/BQdEpx3j.js";import{c as ut,b as ee,i as V}from"../chunks/BbP9FdZf.js";import{s as mt,p as F}from"../chunks/CdFUhNF-.js";import{s as At}from"../chunks/CYx8mrRR.js";import{h as Ct,c as ae}from"../chunks/DPW8qYux.js";import{b as oe}from"../chunks/BSnm5fRm.js";function vt(e,t,n,o,s,c){let p=q;q&&_t();var m,h,r=null;q&&it.nodeType===jt&&(r=it,_t());var u=q?it:e,a;Ft(()=>{const i=t()||null;var C=i==="svg"?It:null;i!==m&&(a&&(i===null?zt(a,()=>{a=null,h=null}):i===h?Gt(a):Jt(a)),i&&i!==h&&(a=qt(()=>{if(r=q?r:C?document.createElementNS(C,i):document.createElement(i),Nt(r,r),o){q&&Zt(i)&&r.append(document.createComment(""));var f=q?wt(r):r.appendChild(Lt());q&&(f===null?yt(!1):xt(f)),o(r,f)}Ut.nodes_end=r,u.before(r)})),m=i,m&&(h=m))},Pt),p&&(yt(!0),xt(u))}var kt={},dt={},ct=34,X=10,lt=13;function Et(e){return new Function("d","return {"+e.map(function(t,n){return JSON.stringify(t)+": d["+n+'] || ""'}).join(",")+"}")}function ne(e,t){var n=Et(e);return function(o,s){return t(n(o),s,e)}}function Tt(e){var t=Object.create(null),n=[];return e.forEach(function(o){for(var s in o)s in t||n.push(t[s]=s)}),n}function M(e,t){var n=e+"",o=n.length;return o<t?new Array(t-o+1).join(0)+n:n}function re(e){return e<0?"-"+M(-e,6):e>9999?"+"+M(e,6):M(e,4)}function se(e){var t=e.getUTCHours(),n=e.getUTCMinutes(),o=e.getUTCSeconds(),s=e.getUTCMilliseconds();return isNaN(e)?"Invalid Date":re(e.getUTCFullYear())+"-"+M(e.getUTCMonth()+1,2)+"-"+M(e.getUTCDate(),2)+(s?"T"+M(t,2)+":"+M(n,2)+":"+M(o,2)+"."+M(s,3)+"Z":o?"T"+M(t,2)+":"+M(n,2)+":"+M(o,2)+"Z":n||t?"T"+M(t,2)+":"+M(n,2)+"Z":"")}function ie(e){var t=new RegExp('["'+e+`
\r]`),n=e.charCodeAt(0);function o(a,i){var C,f,l=s(a,function(y,g){if(C)return C(y,g-1);f=y,C=i?ne(y,i):Et(y)});return l.columns=f||[],l}function s(a,i){var C=[],f=a.length,l=0,y=0,g,k=f<=0,T=!1;a.charCodeAt(f-1)===X&&--f,a.charCodeAt(f-1)===lt&&--f;function O(){if(k)return dt;if(T)return T=!1,kt;var L,j=l,S;if(a.charCodeAt(j)===ct){for(;l++<f&&a.charCodeAt(l)!==ct||a.charCodeAt(++l)===ct;);return(L=l)>=f?k=!0:(S=a.charCodeAt(l++))===X?T=!0:S===lt&&(T=!0,a.charCodeAt(l)===X&&++l),a.slice(j+1,L-1).replace(/""/g,'"')}for(;l<f;){if((S=a.charCodeAt(L=l++))===X)T=!0;else if(S===lt)T=!0,a.charCodeAt(l)===X&&++l;else if(S!==n)continue;return a.slice(j,L)}return k=!0,a.slice(j,f)}for(;(g=O())!==dt;){for(var w=[];g!==kt&&g!==dt;)w.push(g),g=O();i&&(w=i(w,y++))==null||C.push(w)}return C}function c(a,i){return a.map(function(C){return i.map(function(f){return u(C[f])}).join(e)})}function p(a,i){return i==null&&(i=Tt(a)),[i.map(u).join(e)].concat(c(a,i)).join(`
`)}function m(a,i){return i==null&&(i=Tt(a)),c(a,i).join(`
`)}function h(a){return a.map(r).join(`
`)}function r(a){return a.map(u).join(e)}function u(a){return a==null?"":a instanceof Date?se(a):t.test(a+="")?'"'+a.replace(/"/g,'""')+'"':a}return{parse:o,parseRows:s,format:p,formatBody:m,formatRows:h,formatRow:r,formatValue:u}}var de=ie(","),ce=de.parse,le=A('<section id="demo-link"><h2>Link</h2> <p><a href="elements">Default element styles demo</a></p> <p><a href="fonts">Pudding-hosted font previews</a></p></section>');function ue(e){var t=le();v(e,t)}var me=A('<section id="demo-image"><h2>Image</h2> <p>img tag</p> <img src="../assets/demo/test.jpg" alt="cat" class="svelte-b56t42"/> <p>background image</p> <div class="svelte-b56t42"></div></section>');function ve(e){var t=me();v(e,t)}var pe=A('<section id="demo-element"><h2>Dynamic Svelte Element</h2> <!></section>');function fe(e){const t=[{tag:"h3",text:"I am a h3 tag."},{tag:"p",text:"I am p tag."}];var n=pe(),o=x(_(n),2);Q(o,17,()=>t,Y,(s,c)=>{let p=()=>d(c).tag,m=()=>d(c).text;var h=R(),r=E(h);vt(r,p,!1,(u,a)=>{var i=Vt();B(()=>D(i,m())),v(a,i)}),v(s,h)}),b(n),v(e,n)}var ge=A("<p> </p>");function he(e,t){var n=ge(),o=_(n);b(n),B(()=>D(o,`I am component A and my favorite number is ${t.number??""}.`)),v(e,n)}var be=A("<p> </p>");function _e(e,t){var n=be(),o=_(n);b(n),B(()=>D(o,`I am component B and my name is ${t.name??""}.`)),v(e,n)}var ye=A('<section id="demo-component"><h2>Dynamic Svelte Component</h2> <!></section>');function xe(e){const t={A:he,B:_e},n=[{component:"A",number:42},{component:"B",name:"Russell"}];var o=ye(),s=x(_(o),2);Q(s,17,()=>n,Y,(c,p)=>{const m=I(()=>t[d(p).component]);var h=R(),r=E(h);ut(r,()=>d(m),(u,a)=>{a(u,mt(()=>d(p)))}),v(c,h)}),b(o),v(e,o)}var Ce=A("<div><!></div>");function ke(e,t){$(t,!0);let n=F(t,"root",3,null),o=F(t,"top",3,0),s=F(t,"bottom",3,0),c=F(t,"increments",3,100),p=F(t,"value",15,void 0),m=[],h=[],r=[],u=[],a;function i(){let g=0,k=0;for(let T=0;T<m.length;T++)m[T]>g&&(g=m[T],k=T);g>0?p(k):p(void 0)}function C(g,k){const T=H=>{H[0].isIntersecting;const et=H[0].intersectionRatio;m[k]=et,i()},O=o()?o()*-1:0,w=s()?s()*-1:0,L=`${O}px 0px ${w}px 0px`,j={root:n(),rootMargin:L,threshold:h};u[k]&&u[k].disconnect();const S=new IntersectionObserver(T,j);S.observe(g),u[k]=S}function f(){r.length&&r.forEach(C)}K(()=>{for(let g=0;g<c()+1;g++)h.push(g/c());r=a.querySelectorAll(":scope > *:not(iframe)"),f()}),K(()=>{o(),s(),f()});var l=Ce(),y=_(l);At(y,()=>t.children??pt),b(l),ee(l,g=>a=g,()=>a),v(e,l),tt()}var Te=A('<div><p class="svelte-1sxgmm9"> </p></div>'),Ae=A('<section id="scrolly"><h2 class="svelte-1sxgmm9">Scrolly <span> </span></h2> <div class="spacer svelte-1sxgmm9"></div> <!> <div class="spacer svelte-1sxgmm9"></div></section>');function Ee(e){let t=N(void 0);var n=Ae(),o=_(n),s=x(_(o)),c=_(s,!0);b(s),b(o);var p=x(o,4);ke(p,{get value(){return d(t)},set value(m){P(t,m,!0)},children:(m,h)=>{var r=R(),u=E(r);Q(u,16,()=>[0,1,2,3,4],Y,(a,i,C)=>{const f=I(()=>d(t)===C);var l=Te();let y;var g=_(l),k=_(g,!0);b(g),b(l),B(T=>{y=Xt(l,1,"step svelte-1sxgmm9",null,y,T),D(k,i)},[()=>({active:d(f)})]),v(a,l)}),v(m,r)},$$slots:{default:!0}}),Qt(2),b(n),B(()=>D(c,d(t)||"-")),v(e,n)}const Se=`{
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
						"subtitle": "Mapa de interesse relativo pelo termo <em>brega funk</em> por estado no Google Trends (todas as categorias, 01/01/2018 a 31/01/2026). Embora o ritmo tenha nascido no Recife, Pernambuco aparece em 4º lugar nas buscas. A liderança fica com Alagoas e Sergipe, seguidos pela Paraíba, evidenciando como o movimento se espalhou e dominou todo o Nordeste antes de ganhar o país.",
						"source": "Fonte: Google Trends Brasil (Interesse por Sub-Região)"
					}
				},
				{
					"type": "Text",
					"value": {
						"text": "Graças a essa rede alternativa de distribuição, o ritmo superou as fronteiras de Pernambuco e abraçou os estados vizinhos, consolidando-se como um movimento regional integrado. Foi essa força acumulada no Nordeste que deu fôlego para o gênero romper barreiras e ganhar espaço no Sul e no Sudeste, impulsionado pela era do streaming.",
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
						"text": "A popularização do brega funk no Brasil andou de mãos dadas com a cultura do \\"passinho dos maloka\\". Antes de dominar as redes sociais, a dança já era febre entre os jovens das periferias do Recife, que formavam grupos para inventar coreografias e acompanhar as batidas aceleradas.",
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
						"text": "Com o avanço dos vídeos curtos, os passos ganharam novas variações que dominaram a internet. Um dos maiores exemplos recentes dessa febre foi o Passinho do Jamal, criado no bairro de Santo Amaro, no Recife, pelos amigos Romero Júnior e Pedro Henrique. Os movimentos rápidos de mãos e pés tornaram-se assinatura visual do gênero na era do TikTok.",
						"speaker": "minji"
					}
				},
				{
					"type": "Text",
					"value": {
						"text": "A coreografia ultrapassou as redes e chegou a comemorações de jogadores de futebol, programas de televisão e reality shows. Esse apelo corporal ajudou a atrair novos públicos e alimentar os algoritmos das plataformas digitais.",
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
			"value": "APENAS AO FINAL DO DESENVOLVIMENTO, APÓS A IMPLEMENTAÇÃO DE TODOS OS GRÁFICOS E TEXTOS."
		}
	]
}`;var Me=A("<p><!></p>"),Re=A("<section><!></section>");function De(e,t){$(t,!0);let n=F(t,"components",19,()=>({})),o=F(t,"body",19,()=>[]);var s=R(),c=E(s);Q(c,17,o,Y,(p,m)=>{let h=()=>d(m).section,r=()=>d(m).content;const u=I(()=>h().toLowerCase().replace(/[^a-z0-9]/g,"")),a=I(()=>n()[h()]);var i=Re(),C=_(i);{var f=y=>{var g=R(),k=E(g);ut(k,()=>d(a),(T,O)=>{O(T,mt(r))}),v(y,g)},l=y=>{var g=R(),k=E(g);Q(k,17,r,Y,(T,O,w,L)=>{let j=()=>d(O).type,S=()=>d(O).value;const H=I(()=>n()[j()]),et=I(()=>typeof S()=="string");var ft=R(),St=E(ft);{var Mt=U=>{var Z=R(),at=E(Z);ut(at,()=>d(H),(ot,nt)=>{nt(ot,mt(S))}),v(U,Z)},Rt=U=>{var Z=R(),at=E(Z);{var ot=z=>{var G=Me(),rt=_(G);Ct(rt,S),b(G),v(z,G)},nt=z=>{var G=R(),rt=E(G);{var Dt=J=>{var W=R(),st=E(W);vt(st,j,!1,(gt,ht)=>{var bt=R(),Ot=E(bt);Ct(Ot,S),v(ht,bt)}),v(J,W)},Bt=J=>{var W=R(),st=E(W);vt(st,j,!1,(gt,ht)=>{$t(gt,()=>({...S()}))}),v(J,W)};V(rt,J=>{d(et)?J(Dt):J(Bt,!1)},!0)}v(z,G)};V(at,z=>{j()==="text"?z(ot):z(nt,!1)},!0)}v(U,Z)};V(St,U=>{d(H)?U(Mt):U(Rt,!1)})}v(T,ft)}),v(y,g)};V(C,y=>{d(a)?y(f):y(l,!1)})}b(i),B(()=>Kt(i,"id",d(u))),v(p,i)}),v(e,s),tt()}var Be=A('<p> </p> <progress max="100"></progress>',1);function Oe(e,t){let n=F(t,"label",3,"A"),o=F(t,"value",3,0);var s=Be(),c=E(s),p=_(c,!0);b(c);var m=x(c,2);B(()=>{D(p,n()),te(m,o())}),v(e,s)}var je=A('<section id="cms"><h2>MicroCMS</h2> <code><pre> </pre></code> <!></section>');function Fe(e,t){$(t,!0);const{body:n}=ae,o={Test:Oe};var s=je(),c=x(_(s),2),p=_(c),m=_(p,!0);b(p),b(c);var h=x(c,2);De(h,{get components(){return o},get body(){return n}}),b(s),B(r=>D(m,r),[()=>Se.replace(/\t/g," ")]),v(e,s),tt()}const Pe=(e,t=pt)=>{var n=qe(),o=_(n),s=_(o,!0);b(o);var c=x(o,2),p=_(c,!0);b(c),b(n),B(()=>{D(s,t().name),D(p,t().age)}),v(e,n)};var qe=A('<div class="person svelte-q3gttf"><p class="svelte-q3gttf"> </p> <p class="svelte-q3gttf"> </p></div>'),Ie=(e,t)=>Yt(t),Ne=(e,t)=>t.random(Math.floor(Math.random()*10)),we=A('<h2>Svelte5</h2> <h3>Reactive variables 3 ways:</h3> <button class="svelte-q3gttf">count++</button> <p class="svelte-q3gttf"> </p> <p class="svelte-q3gttf"> </p> <p class="svelte-q3gttf"> </p> <h3>Children (previously slots):</h3> <div class="children"><!></div> <h3>Dispatch Event</h3> <button class="svelte-q3gttf">Random</button>  <h3>Snippets</h3> <div class="people svelte-q3gttf"></div>',1);function Le(e,t){$(t,!0),F(t,"age",3,30);const n=[{name:"John",age:30},{name:"Jill",age:45}];let o=N(0),s=I(()=>d(o)*2),c=I(()=>d(o)*2),p=N(0);K(()=>{P(p,d(o)*2)});var m=we(),h=x(E(m),4);h.__click=[Ie,o];var r=x(h,2),u=_(r);b(r);var a=x(r,2),i=_(a);b(a);var C=x(a,2),f=_(C);b(C);var l=x(C,4),y=_(l);At(y,()=>t.children??pt),b(l);var g=x(l,4);g.__click=[Ne,t];var k=x(g,4);Q(k,21,()=>n,Y,(T,O)=>{Pe(T,()=>d(O))}),b(k),B(()=>{D(u,`${d(o)??""} doubled is ${d(s)??""} (derived)`),D(i,`${d(o)??""} doubled is ${d(c)??""} (derived by)`),D(f,`${d(o)??""} doubled is ${d(p)??""} ($effect)`)}),v(e,m),tt()}Wt(["click"]);const Ue=(e,t)=>{let n=N(Ht(e)),o=N(null),s=N(!0),c=N(void 0);const p=(r=!0)=>{P(s,r,!0),r===!0&&(P(c,null),P(o,null))},m=async()=>{try{const r=await fetch(d(n),t);if(!r.ok)throw new Error(`Unexpected error occurred (status ${r.status})`);let u;if(d(n).includes(".csv")){const a=await r.text();u=ce(a)}else u=await r.json();return[null,u]}catch(r){const{errorMessage:u="Unexpected error eccurred"}=r;return[u,null]}},h=async r=>{p(!0);const[u,a]=await m();if(r===d(n)){if(u){p(!1),P(c,u,!0);return}p(!1),P(o,a,!0)}};return K(()=>{h(d(n))}),{get data(){return d(o)},get loading(){return d(s)},get error(){return d(c)},get url(){return d(n)},set url(r){d(n)!==r&&P(n,r,!0)}}};var ze=A("<p>loading data...</p>"),Ge=A("<p> </p>"),Je=A("<p>data loaded</p> <pre> </pre>",1),Ve=A('<div class="c"><h2>Load Data</h2> <div class="response"><!></div></div>');function Qe(e,t){$(t,!0);const n=`${oe}/assets/demo/test.csv`,o=Ue(n);K(()=>{});var s=Ve(),c=x(_(s),2),p=_(c);{var m=r=>{var u=ze();v(r,u)},h=r=>{var u=R(),a=E(u);{var i=f=>{var l=Ge(),y=_(l);b(l),B(()=>D(y,`error: ${o.error??""}`)),v(f,l)},C=f=>{var l=Je(),y=x(E(l),2),g=_(y,!0);b(y),B(k=>D(g,k),[()=>JSON.stringify(o.data,null,2)]),v(f,l)};V(a,f=>{o.error?f(i):f(C,!1)},!0)}v(r,u)};V(p,r=>{o.loading?r(m):r(h,!1)})}b(c),b(s),v(e,s),tt()}var Ye=A('<div id="demo" class="svelte-15aotx7"><h1>Demo</h1> <!> <!> <!> <!> <!> <!> <!> <!></div>');function He(e){let t=N(0);function n(i){console.log(i)}var o=Ye(),s=x(_(o),2);Le(s,{random:n,get value(){return d(t)},set value(i){P(t,i,!0)}});var c=x(s,2);ue(c);var p=x(c,2);ve(p);var m=x(p,2);fe(m);var h=x(m,2);xe(h);var r=x(h,2);Fe(r,{});var u=x(r,2);Qe(u,{});var a=x(u,2);Ee(a),b(o),v(e,o)}function na(e){He(e)}export{na as component};
