import"../chunks/Bzak7iHL.js";import{I,J as _t,R as it,aS as Ot,H as Bt,N as Ft,O as It,aT as Pt,M as Nt,T as wt,a9 as Lt,a8 as yt,a4 as xt,x as Ut,ae as zt,ad as Gt,Q as Jt,V as E,X as p,ai as x,Z as _,_ as b,am as R,al as S,ao as Vt,W as q,n as d,an as P,U as $,u as K,Y as tt,F as vt,v as F,ak as N,az as Ht,aU as Qt,r as Wt}from"../chunks/D-LEvHX2.js";import{i as Yt,a as D,d as Xt}from"../chunks/D8n1WcDg.js";import{e as H,i as Q,b as Zt,s as Kt,c as $t,d as te}from"../chunks/BQdEpx3j.js";import{c as lt,b as ee,i as V}from"../chunks/BbP9FdZf.js";import{s as mt,p as B}from"../chunks/CdFUhNF-.js";import{s as Et}from"../chunks/CYx8mrRR.js";import{h as Ct,c as ae}from"../chunks/CwRXjB4j.js";import{b as ne}from"../chunks/DcnjWW70.js";function pt(e,t,o,n,s,c){let v=I;I&&_t();var m,h,r=null;I&&it.nodeType===Ot&&(r=it,_t());var l=I?it:e,a;Bt(()=>{const i=t()||null;var C=i==="svg"?Pt:null;i!==m&&(a&&(i===null?zt(a,()=>{a=null,h=null}):i===h?Gt(a):Jt(a)),i&&i!==h&&(a=It(()=>{if(r=I?r:C?document.createElementNS(C,i):document.createElement(i),Nt(r,r),n){I&&Yt(i)&&r.append(document.createComment(""));var f=I?wt(r):r.appendChild(Lt());I&&(f===null?yt(!1):xt(f)),n(r,f)}Ut.nodes_end=r,l.before(r)})),m=i,m&&(h=m))},Ft),v&&(yt(!0),xt(l))}var kt={},dt={},ct=34,Z=10,ut=13;function St(e){return new Function("d","return {"+e.map(function(t,o){return JSON.stringify(t)+": d["+o+'] || ""'}).join(",")+"}")}function oe(e,t){var o=St(e);return function(n,s){return t(o(n),s,e)}}function At(e){var t=Object.create(null),o=[];return e.forEach(function(n){for(var s in n)s in t||o.push(t[s]=s)}),o}function M(e,t){var o=e+"",n=o.length;return n<t?new Array(t-n+1).join(0)+o:o}function re(e){return e<0?"-"+M(-e,6):e>9999?"+"+M(e,6):M(e,4)}function se(e){var t=e.getUTCHours(),o=e.getUTCMinutes(),n=e.getUTCSeconds(),s=e.getUTCMilliseconds();return isNaN(e)?"Invalid Date":re(e.getUTCFullYear())+"-"+M(e.getUTCMonth()+1,2)+"-"+M(e.getUTCDate(),2)+(s?"T"+M(t,2)+":"+M(o,2)+":"+M(n,2)+"."+M(s,3)+"Z":n?"T"+M(t,2)+":"+M(o,2)+":"+M(n,2)+"Z":o||t?"T"+M(t,2)+":"+M(o,2)+"Z":"")}function ie(e){var t=new RegExp('["'+e+`
\r]`),o=e.charCodeAt(0);function n(a,i){var C,f,u=s(a,function(y,g){if(C)return C(y,g-1);f=y,C=i?oe(y,i):St(y)});return u.columns=f||[],u}function s(a,i){var C=[],f=a.length,u=0,y=0,g,k=f<=0,A=!1;a.charCodeAt(f-1)===Z&&--f,a.charCodeAt(f-1)===ut&&--f;function j(){if(k)return dt;if(A)return A=!1,kt;var L,O=u,T;if(a.charCodeAt(O)===ct){for(;u++<f&&a.charCodeAt(u)!==ct||a.charCodeAt(++u)===ct;);return(L=u)>=f?k=!0:(T=a.charCodeAt(u++))===Z?A=!0:T===ut&&(A=!0,a.charCodeAt(u)===Z&&++u),a.slice(O+1,L-1).replace(/""/g,'"')}for(;u<f;){if((T=a.charCodeAt(L=u++))===Z)A=!0;else if(T===ut)A=!0,a.charCodeAt(u)===Z&&++u;else if(T!==o)continue;return a.slice(O,L)}return k=!0,a.slice(O,f)}for(;(g=j())!==dt;){for(var w=[];g!==kt&&g!==dt;)w.push(g),g=j();i&&(w=i(w,y++))==null||C.push(w)}return C}function c(a,i){return a.map(function(C){return i.map(function(f){return l(C[f])}).join(e)})}function v(a,i){return i==null&&(i=At(a)),[i.map(l).join(e)].concat(c(a,i)).join(`
`)}function m(a,i){return i==null&&(i=At(a)),c(a,i).join(`
`)}function h(a){return a.map(r).join(`
`)}function r(a){return a.map(l).join(e)}function l(a){return a==null?"":a instanceof Date?se(a):t.test(a+="")?'"'+a.replace(/"/g,'""')+'"':a}return{parse:n,parseRows:s,format:v,formatBody:m,formatRows:h,formatRow:r,formatValue:l}}var de=ie(","),ce=de.parse,ue=E('<section id="demo-link"><h2>Link</h2> <p><a href="elements">Default element styles demo</a></p> <p><a href="fonts">Pudding-hosted font previews</a></p></section>');function le(e){var t=ue();p(e,t)}var me=E('<section id="demo-image"><h2>Image</h2> <p>img tag</p> <img src="../assets/demo/test.jpg" alt="cat" class="svelte-b56t42"/> <p>background image</p> <div class="svelte-b56t42"></div></section>');function pe(e){var t=me();p(e,t)}var ve=E('<section id="demo-element"><h2>Dynamic Svelte Element</h2> <!></section>');function fe(e){const t=[{tag:"h3",text:"I am a h3 tag."},{tag:"p",text:"I am p tag."}];var o=ve(),n=x(_(o),2);H(n,17,()=>t,Q,(s,c)=>{let v=()=>d(c).tag,m=()=>d(c).text;var h=R(),r=S(h);pt(r,v,!1,(l,a)=>{var i=Vt();q(()=>D(i,m())),p(a,i)}),p(s,h)}),b(o),p(e,o)}var ge=E("<p> </p>");function he(e,t){var o=ge(),n=_(o);b(o),q(()=>D(n,`I am component A and my favorite number is ${t.number??""}.`)),p(e,o)}var be=E("<p> </p>");function _e(e,t){var o=be(),n=_(o);b(o),q(()=>D(n,`I am component B and my name is ${t.name??""}.`)),p(e,o)}var ye=E('<section id="demo-component"><h2>Dynamic Svelte Component</h2> <!></section>');function xe(e){const t={A:he,B:_e},o=[{component:"A",number:42},{component:"B",name:"Russell"}];var n=ye(),s=x(_(n),2);H(s,17,()=>o,Q,(c,v)=>{const m=P(()=>t[d(v).component]);var h=R(),r=S(h);lt(r,()=>d(m),(l,a)=>{a(l,mt(()=>d(v)))}),p(c,h)}),b(n),p(e,n)}var Ce=E("<div><!></div>");function ke(e,t){$(t,!0);let o=B(t,"root",3,null),n=B(t,"top",3,0),s=B(t,"bottom",3,0),c=B(t,"increments",3,100),v=B(t,"value",15,void 0),m=[],h=[],r=[],l=[],a;function i(){let g=0,k=0;for(let A=0;A<m.length;A++)m[A]>g&&(g=m[A],k=A);g>0?v(k):v(void 0)}function C(g,k){const A=W=>{W[0].isIntersecting;const et=W[0].intersectionRatio;m[k]=et,i()},j=n()?n()*-1:0,w=s()?s()*-1:0,L=`${j}px 0px ${w}px 0px`,O={root:o(),rootMargin:L,threshold:h};l[k]&&l[k].disconnect();const T=new IntersectionObserver(A,O);T.observe(g),l[k]=T}function f(){r.length&&r.forEach(C)}K(()=>{for(let g=0;g<c()+1;g++)h.push(g/c());r=a.querySelectorAll(":scope > *:not(iframe)"),f()}),K(()=>{n(),s(),f()});var u=Ce(),y=_(u);Et(y,()=>t.children??vt),b(u),ee(u,g=>a=g,()=>a),p(e,u),tt()}var Ae=E('<div><p class="svelte-1sxgmm9"> </p></div>'),Ee=E('<section id="scrolly"><h2 class="svelte-1sxgmm9">Scrolly <span> </span></h2> <div class="spacer svelte-1sxgmm9"></div> <!> <div class="spacer svelte-1sxgmm9"></div></section>');function Se(e){let t=N(void 0);var o=Ee(),n=_(o),s=x(_(n)),c=_(s,!0);b(s),b(n);var v=x(n,4);ke(v,{get value(){return d(t)},set value(m){F(t,m,!0)},children:(m,h)=>{var r=R(),l=S(r);H(l,16,()=>[0,1,2,3,4],Q,(a,i,C)=>{const f=P(()=>d(t)===C);var u=Ae();let y;var g=_(u),k=_(g,!0);b(g),b(u),q(A=>{y=Zt(u,1,"step svelte-1sxgmm9",null,y,A),D(k,i)},[()=>({active:d(f)})]),p(a,u)}),p(m,r)},$$slots:{default:!0}}),Ht(2),b(o),q(()=>D(c,d(t)||"-")),p(e,o)}const Te=`{
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
						"title": "",
						"subtitle": "",
						"source": ""
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
						"title": "A Invasão dos Hits Curtos",
						"subtitle": "O gráfico demonstra o crescimento de hits curtos nas paradas nacionais. Em 2018, as faixas com menos de 2 minutos e meio representavam apenas 8,2% do Top 200, proporção que saltou para 24,1% em 2024 impulsionada pela economia da atenção de plataformas de vídeos curtos.",
						"source": "Fonte: Spotify Charts Brasil & Metadados do Spotify Web Player"
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
						"title": "\\"SURTADA\\": ORIGINAL VS. REMIX",
						"subtitle": "O comparativo demonstra a alteração estrutural e rítmica entre as duas versões da composição. O arranjo original segue um padrão linear com o clímax aos 0:57. Em contraste, a produção do brega funk descarta as introduções acústicas, eleva o andamento para 154 BPM e entrega o refrão logo no oitavo segundo de reprodução, reformatando a faixa para a velocidade de consumo da internet.",
						"source": "Fonte: Metadados do Spotify & Genius"
					}
				},
				{
					"type": "Text",
					"value": {
						"text": "Essa dinâmica gerou uma nova engenharia musical. Para contornar as barreiras do algoritmo e maximizar a monetização, muitas faixas de brega funk dispensam a tradicional introdução e começam diretamente no refrão. A estratégia garante que o ouvinte não pule a música antes dos trinta segundos cruciais, transformando a impaciência das redes sociais na fórmula exata para liderar o streaming.",
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
						"text": "Essa engrenagem para prender a atenção no Spotify não gerou apenas cliques na internet. Ela mudou a realidade financeira nas comunidades de Recife. Sem depender de grandes gravadoras, jovens DJs, MCs e dançarinos começaram a produzir seus próprios hits de dentro do quarto e a divulgá-los pelo WhatsApp, criando um mercado independente que hoje sustenta famílias inteiras na periferia.",
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
				},
				{
					"type": "Text",
					"value": {
						"text": "No fim das contas, a resposta para a nossa pergunta é simples. O brega funk conquistou o Brasil em 15 segundos porque soube unir as duas pontas da internet: a coreografia do passinho, feita sob medida para um vídeo curto, e um refrão que explode logo na largada, antes que você tenha tempo de pular a música. Juntando dança viral e hits adaptados para a nossa pressa, o som do Recife quebrou o monopólio cultural de Rio e São Paulo e fez o país inteiro dançar no ritmo dele.",
						"speaker": "minji"
					}
				}
			]
		},
		{
			"id": "extra-playlist",
			"heading": "",
			"years": "",
			"numEnd": "",
			"coverAlt": "Playlist curada de Brega Funk",
			"nodes": [
				{
					"type": "Chart",
					"value": {
						"id": "playlist-brega-funk-anthology",
						"title": "Playlist Interativa: Antologia do Brega Funk",
						"subtitle": "Evolução cronológica do gênero por meio de faixas essenciais, desde a base recifense de 2011 até a invasão das paradas nacionais e as experimentações atuais.",
						"source": "Fonte: Spotify Embed Player (Curadoria Editorial)"
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
}`;var Me=E("<p><!></p>"),Re=E("<section><!></section>");function De(e,t){$(t,!0);let o=B(t,"components",19,()=>({})),n=B(t,"body",19,()=>[]);var s=R(),c=S(s);H(c,17,n,Q,(v,m)=>{let h=()=>d(m).section,r=()=>d(m).content;const l=P(()=>h().toLowerCase().replace(/[^a-z0-9]/g,"")),a=P(()=>o()[h()]);var i=Re(),C=_(i);{var f=y=>{var g=R(),k=S(g);lt(k,()=>d(a),(A,j)=>{j(A,mt(r))}),p(y,g)},u=y=>{var g=R(),k=S(g);H(k,17,r,Q,(A,j,w,L)=>{let O=()=>d(j).type,T=()=>d(j).value;const W=P(()=>o()[O()]),et=P(()=>typeof T()=="string");var ft=R(),Tt=S(ft);{var Mt=U=>{var Y=R(),at=S(Y);lt(at,()=>d(W),(nt,ot)=>{ot(nt,mt(T))}),p(U,Y)},Rt=U=>{var Y=R(),at=S(Y);{var nt=z=>{var G=Me(),rt=_(G);Ct(rt,T),b(G),p(z,G)},ot=z=>{var G=R(),rt=S(G);{var Dt=J=>{var X=R(),st=S(X);pt(st,O,!1,(gt,ht)=>{var bt=R(),jt=S(bt);Ct(jt,T),p(ht,bt)}),p(J,X)},qt=J=>{var X=R(),st=S(X);pt(st,O,!1,(gt,ht)=>{$t(gt,()=>({...T()}))}),p(J,X)};V(rt,J=>{d(et)?J(Dt):J(qt,!1)},!0)}p(z,G)};V(at,z=>{O()==="text"?z(nt):z(ot,!1)},!0)}p(U,Y)};V(Tt,U=>{d(W)?U(Mt):U(Rt,!1)})}p(A,ft)}),p(y,g)};V(C,y=>{d(a)?y(f):y(u,!1)})}b(i),q(()=>Kt(i,"id",d(l))),p(v,i)}),p(e,s),tt()}var qe=E('<p> </p> <progress max="100"></progress>',1);function je(e,t){let o=B(t,"label",3,"A"),n=B(t,"value",3,0);var s=qe(),c=S(s),v=_(c,!0);b(c);var m=x(c,2);q(()=>{D(v,o()),te(m,n())}),p(e,s)}var Oe=E('<section id="cms"><h2>MicroCMS</h2> <code><pre> </pre></code> <!></section>');function Be(e,t){$(t,!0);const{body:o}=ae,n={Test:je};var s=Oe(),c=x(_(s),2),v=_(c),m=_(v,!0);b(v),b(c);var h=x(c,2);De(h,{get components(){return n},get body(){return o}}),b(s),q(r=>D(m,r),[()=>Te.replace(/\t/g," ")]),p(e,s),tt()}const Fe=(e,t=vt)=>{var o=Ie(),n=_(o),s=_(n,!0);b(n);var c=x(n,2),v=_(c,!0);b(c),b(o),q(()=>{D(s,t().name),D(v,t().age)}),p(e,o)};var Ie=E('<div class="person svelte-q3gttf"><p class="svelte-q3gttf"> </p> <p class="svelte-q3gttf"> </p></div>'),Pe=(e,t)=>Qt(t),Ne=(e,t)=>t.random(Math.floor(Math.random()*10)),we=E('<h2>Svelte5</h2> <h3>Reactive variables 3 ways:</h3> <button class="svelte-q3gttf">count++</button> <p class="svelte-q3gttf"> </p> <p class="svelte-q3gttf"> </p> <p class="svelte-q3gttf"> </p> <h3>Children (previously slots):</h3> <div class="children"><!></div> <h3>Dispatch Event</h3> <button class="svelte-q3gttf">Random</button>  <h3>Snippets</h3> <div class="people svelte-q3gttf"></div>',1);function Le(e,t){$(t,!0),B(t,"age",3,30);const o=[{name:"John",age:30},{name:"Jill",age:45}];let n=N(0),s=P(()=>d(n)*2),c=P(()=>d(n)*2),v=N(0);K(()=>{F(v,d(n)*2)});var m=we(),h=x(S(m),4);h.__click=[Pe,n];var r=x(h,2),l=_(r);b(r);var a=x(r,2),i=_(a);b(a);var C=x(a,2),f=_(C);b(C);var u=x(C,4),y=_(u);Et(y,()=>t.children??vt),b(u);var g=x(u,4);g.__click=[Ne,t];var k=x(g,4);H(k,21,()=>o,Q,(A,j)=>{Fe(A,()=>d(j))}),b(k),q(()=>{D(l,`${d(n)??""} doubled is ${d(s)??""} (derived)`),D(i,`${d(n)??""} doubled is ${d(c)??""} (derived by)`),D(f,`${d(n)??""} doubled is ${d(v)??""} ($effect)`)}),p(e,m),tt()}Xt(["click"]);const Ue=(e,t)=>{let o=N(Wt(e)),n=N(null),s=N(!0),c=N(void 0);const v=(r=!0)=>{F(s,r,!0),r===!0&&(F(c,null),F(n,null))},m=async()=>{try{const r=await fetch(d(o),t);if(!r.ok)throw new Error(`Unexpected error occurred (status ${r.status})`);let l;if(d(o).includes(".csv")){const a=await r.text();l=ce(a)}else l=await r.json();return[null,l]}catch(r){const{errorMessage:l="Unexpected error eccurred"}=r;return[l,null]}},h=async r=>{v(!0);const[l,a]=await m();if(r===d(o)){if(l){v(!1),F(c,l,!0);return}v(!1),F(n,a,!0)}};return K(()=>{h(d(o))}),{get data(){return d(n)},get loading(){return d(s)},get error(){return d(c)},get url(){return d(o)},set url(r){d(o)!==r&&F(o,r,!0)}}};var ze=E("<p>loading data...</p>"),Ge=E("<p> </p>"),Je=E("<p>data loaded</p> <pre> </pre>",1),Ve=E('<div class="c"><h2>Load Data</h2> <div class="response"><!></div></div>');function He(e,t){$(t,!0);const o=`${ne}/assets/demo/test.csv`,n=Ue(o);K(()=>{});var s=Ve(),c=x(_(s),2),v=_(c);{var m=r=>{var l=ze();p(r,l)},h=r=>{var l=R(),a=S(l);{var i=f=>{var u=Ge(),y=_(u);b(u),q(()=>D(y,`error: ${n.error??""}`)),p(f,u)},C=f=>{var u=Je(),y=x(S(u),2),g=_(y,!0);b(y),q(k=>D(g,k),[()=>JSON.stringify(n.data,null,2)]),p(f,u)};V(a,f=>{n.error?f(i):f(C,!1)},!0)}p(r,l)};V(v,r=>{n.loading?r(m):r(h,!1)})}b(c),b(s),p(e,s),tt()}var Qe=E('<div id="demo" class="svelte-15aotx7"><h1>Demo</h1> <!> <!> <!> <!> <!> <!> <!> <!></div>');function We(e){let t=N(0);function o(i){console.log(i)}var n=Qe(),s=x(_(n),2);Le(s,{random:o,get value(){return d(t)},set value(i){F(t,i,!0)}});var c=x(s,2);le(c);var v=x(c,2);pe(v);var m=x(v,2);fe(m);var h=x(m,2);xe(h);var r=x(h,2);Be(r,{});var l=x(r,2);He(l,{});var a=x(l,2);Se(a),b(n),p(e,n)}function oa(e){We(e)}export{oa as component};
