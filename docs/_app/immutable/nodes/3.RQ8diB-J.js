import"../chunks/Bzak7iHL.js";import{I as P,J as _t,R as it,aS as Bt,H as Ft,N as qt,O as Pt,aT as It,M as Nt,T as wt,a9 as Lt,a8 as yt,a4 as xt,x as Ut,ae as zt,ad as Gt,Q as Jt,V as T,X as v,ai as x,Z as _,_ as b,am as D,al as E,ao as Vt,W as O,n as d,an as I,U as $,u as K,Y as tt,F as pt,v as q,ak as N,az as Qt,aU as Yt,r as Ht}from"../chunks/D-LEvHX2.js";import{i as Zt,a as R,d as Wt}from"../chunks/D8n1WcDg.js";import{e as Q,i as Y,b as Xt,s as Kt,c as $t,d as te}from"../chunks/BQdEpx3j.js";import{c as lt,b as ee,i as V}from"../chunks/BbP9FdZf.js";import{s as mt,p as F}from"../chunks/CdFUhNF-.js";import{s as Tt}from"../chunks/CYx8mrRR.js";import{h as Ct,c as ae}from"../chunks/DPtosM2o.js";import{b as ne}from"../chunks/ssU2JIdU.js";function vt(e,t,o,n,s,c){let p=P;P&&_t();var m,h,r=null;P&&it.nodeType===Bt&&(r=it,_t());var l=P?it:e,a;Ft(()=>{const i=t()||null;var C=i==="svg"?It:null;i!==m&&(a&&(i===null?zt(a,()=>{a=null,h=null}):i===h?Gt(a):Jt(a)),i&&i!==h&&(a=Pt(()=>{if(r=P?r:C?document.createElementNS(C,i):document.createElement(i),Nt(r,r),n){P&&Zt(i)&&r.append(document.createComment(""));var f=P?wt(r):r.appendChild(Lt());P&&(f===null?yt(!1):xt(f)),n(r,f)}Ut.nodes_end=r,l.before(r)})),m=i,m&&(h=m))},qt),p&&(yt(!0),xt(l))}var kt={},dt={},ct=34,X=10,ut=13;function Et(e){return new Function("d","return {"+e.map(function(t,o){return JSON.stringify(t)+": d["+o+'] || ""'}).join(",")+"}")}function oe(e,t){var o=Et(e);return function(n,s){return t(o(n),s,e)}}function At(e){var t=Object.create(null),o=[];return e.forEach(function(n){for(var s in n)s in t||o.push(t[s]=s)}),o}function M(e,t){var o=e+"",n=o.length;return n<t?new Array(t-n+1).join(0)+o:o}function re(e){return e<0?"-"+M(-e,6):e>9999?"+"+M(e,6):M(e,4)}function se(e){var t=e.getUTCHours(),o=e.getUTCMinutes(),n=e.getUTCSeconds(),s=e.getUTCMilliseconds();return isNaN(e)?"Invalid Date":re(e.getUTCFullYear())+"-"+M(e.getUTCMonth()+1,2)+"-"+M(e.getUTCDate(),2)+(s?"T"+M(t,2)+":"+M(o,2)+":"+M(n,2)+"."+M(s,3)+"Z":n?"T"+M(t,2)+":"+M(o,2)+":"+M(n,2)+"Z":o||t?"T"+M(t,2)+":"+M(o,2)+"Z":"")}function ie(e){var t=new RegExp('["'+e+`
\r]`),o=e.charCodeAt(0);function n(a,i){var C,f,u=s(a,function(y,g){if(C)return C(y,g-1);f=y,C=i?oe(y,i):Et(y)});return u.columns=f||[],u}function s(a,i){var C=[],f=a.length,u=0,y=0,g,k=f<=0,A=!1;a.charCodeAt(f-1)===X&&--f,a.charCodeAt(f-1)===ut&&--f;function j(){if(k)return dt;if(A)return A=!1,kt;var L,B=u,S;if(a.charCodeAt(B)===ct){for(;u++<f&&a.charCodeAt(u)!==ct||a.charCodeAt(++u)===ct;);return(L=u)>=f?k=!0:(S=a.charCodeAt(u++))===X?A=!0:S===ut&&(A=!0,a.charCodeAt(u)===X&&++u),a.slice(B+1,L-1).replace(/""/g,'"')}for(;u<f;){if((S=a.charCodeAt(L=u++))===X)A=!0;else if(S===ut)A=!0,a.charCodeAt(u)===X&&++u;else if(S!==o)continue;return a.slice(B,L)}return k=!0,a.slice(B,f)}for(;(g=j())!==dt;){for(var w=[];g!==kt&&g!==dt;)w.push(g),g=j();i&&(w=i(w,y++))==null||C.push(w)}return C}function c(a,i){return a.map(function(C){return i.map(function(f){return l(C[f])}).join(e)})}function p(a,i){return i==null&&(i=At(a)),[i.map(l).join(e)].concat(c(a,i)).join(`
`)}function m(a,i){return i==null&&(i=At(a)),c(a,i).join(`
`)}function h(a){return a.map(r).join(`
`)}function r(a){return a.map(l).join(e)}function l(a){return a==null?"":a instanceof Date?se(a):t.test(a+="")?'"'+a.replace(/"/g,'""')+'"':a}return{parse:n,parseRows:s,format:p,formatBody:m,formatRows:h,formatRow:r,formatValue:l}}var de=ie(","),ce=de.parse,ue=T('<section id="demo-link"><h2>Link</h2> <p><a href="elements">Default element styles demo</a></p> <p><a href="fonts">Pudding-hosted font previews</a></p></section>');function le(e){var t=ue();v(e,t)}var me=T('<section id="demo-image"><h2>Image</h2> <p>img tag</p> <img src="../assets/demo/test.jpg" alt="cat" class="svelte-b56t42"/> <p>background image</p> <div class="svelte-b56t42"></div></section>');function ve(e){var t=me();v(e,t)}var pe=T('<section id="demo-element"><h2>Dynamic Svelte Element</h2> <!></section>');function fe(e){const t=[{tag:"h3",text:"I am a h3 tag."},{tag:"p",text:"I am p tag."}];var o=pe(),n=x(_(o),2);Q(n,17,()=>t,Y,(s,c)=>{let p=()=>d(c).tag,m=()=>d(c).text;var h=D(),r=E(h);vt(r,p,!1,(l,a)=>{var i=Vt();O(()=>R(i,m())),v(a,i)}),v(s,h)}),b(o),v(e,o)}var ge=T("<p> </p>");function he(e,t){var o=ge(),n=_(o);b(o),O(()=>R(n,`I am component A and my favorite number is ${t.number??""}.`)),v(e,o)}var be=T("<p> </p>");function _e(e,t){var o=be(),n=_(o);b(o),O(()=>R(n,`I am component B and my name is ${t.name??""}.`)),v(e,o)}var ye=T('<section id="demo-component"><h2>Dynamic Svelte Component</h2> <!></section>');function xe(e){const t={A:he,B:_e},o=[{component:"A",number:42},{component:"B",name:"Russell"}];var n=ye(),s=x(_(n),2);Q(s,17,()=>o,Y,(c,p)=>{const m=I(()=>t[d(p).component]);var h=D(),r=E(h);lt(r,()=>d(m),(l,a)=>{a(l,mt(()=>d(p)))}),v(c,h)}),b(n),v(e,n)}var Ce=T("<div><!></div>");function ke(e,t){$(t,!0);let o=F(t,"root",3,null),n=F(t,"top",3,0),s=F(t,"bottom",3,0),c=F(t,"increments",3,100),p=F(t,"value",15,void 0),m=[],h=[],r=[],l=[],a;function i(){let g=0,k=0;for(let A=0;A<m.length;A++)m[A]>g&&(g=m[A],k=A);g>0?p(k):p(void 0)}function C(g,k){const A=H=>{H[0].isIntersecting;const et=H[0].intersectionRatio;m[k]=et,i()},j=n()?n()*-1:0,w=s()?s()*-1:0,L=`${j}px 0px ${w}px 0px`,B={root:o(),rootMargin:L,threshold:h};l[k]&&l[k].disconnect();const S=new IntersectionObserver(A,B);S.observe(g),l[k]=S}function f(){r.length&&r.forEach(C)}K(()=>{for(let g=0;g<c()+1;g++)h.push(g/c());r=a.querySelectorAll(":scope > *:not(iframe)"),f()}),K(()=>{n(),s(),f()});var u=Ce(),y=_(u);Tt(y,()=>t.children??pt),b(u),ee(u,g=>a=g,()=>a),v(e,u),tt()}var Ae=T('<div><p class="svelte-1sxgmm9"> </p></div>'),Te=T('<section id="scrolly"><h2 class="svelte-1sxgmm9">Scrolly <span> </span></h2> <div class="spacer svelte-1sxgmm9"></div> <!> <div class="spacer svelte-1sxgmm9"></div></section>');function Ee(e){let t=N(void 0);var o=Te(),n=_(o),s=x(_(n)),c=_(s,!0);b(s),b(n);var p=x(n,4);ke(p,{get value(){return d(t)},set value(m){q(t,m,!0)},children:(m,h)=>{var r=D(),l=E(r);Q(l,16,()=>[0,1,2,3,4],Y,(a,i,C)=>{const f=I(()=>d(t)===C);var u=Ae();let y;var g=_(u),k=_(g,!0);b(g),b(u),O(A=>{y=Xt(u,1,"step svelte-1sxgmm9",null,y,A),R(k,i)},[()=>({active:d(f)})]),v(a,u)}),v(m,r)},$$slots:{default:!0}}),Qt(2),b(o),O(()=>R(c,d(t)||"-")),v(e,o)}const Se=`{
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
}`;var Me=T("<p><!></p>"),De=T("<section><!></section>");function Re(e,t){$(t,!0);let o=F(t,"components",19,()=>({})),n=F(t,"body",19,()=>[]);var s=D(),c=E(s);Q(c,17,n,Y,(p,m)=>{let h=()=>d(m).section,r=()=>d(m).content;const l=I(()=>h().toLowerCase().replace(/[^a-z0-9]/g,"")),a=I(()=>o()[h()]);var i=De(),C=_(i);{var f=y=>{var g=D(),k=E(g);lt(k,()=>d(a),(A,j)=>{j(A,mt(r))}),v(y,g)},u=y=>{var g=D(),k=E(g);Q(k,17,r,Y,(A,j,w,L)=>{let B=()=>d(j).type,S=()=>d(j).value;const H=I(()=>o()[B()]),et=I(()=>typeof S()=="string");var ft=D(),St=E(ft);{var Mt=U=>{var Z=D(),at=E(Z);lt(at,()=>d(H),(nt,ot)=>{ot(nt,mt(S))}),v(U,Z)},Dt=U=>{var Z=D(),at=E(Z);{var nt=z=>{var G=Me(),rt=_(G);Ct(rt,S),b(G),v(z,G)},ot=z=>{var G=D(),rt=E(G);{var Rt=J=>{var W=D(),st=E(W);vt(st,B,!1,(gt,ht)=>{var bt=D(),jt=E(bt);Ct(jt,S),v(ht,bt)}),v(J,W)},Ot=J=>{var W=D(),st=E(W);vt(st,B,!1,(gt,ht)=>{$t(gt,()=>({...S()}))}),v(J,W)};V(rt,J=>{d(et)?J(Rt):J(Ot,!1)},!0)}v(z,G)};V(at,z=>{B()==="text"?z(nt):z(ot,!1)},!0)}v(U,Z)};V(St,U=>{d(H)?U(Mt):U(Dt,!1)})}v(A,ft)}),v(y,g)};V(C,y=>{d(a)?y(f):y(u,!1)})}b(i),O(()=>Kt(i,"id",d(l))),v(p,i)}),v(e,s),tt()}var Oe=T('<p> </p> <progress max="100"></progress>',1);function je(e,t){let o=F(t,"label",3,"A"),n=F(t,"value",3,0);var s=Oe(),c=E(s),p=_(c,!0);b(c);var m=x(c,2);O(()=>{R(p,o()),te(m,n())}),v(e,s)}var Be=T('<section id="cms"><h2>MicroCMS</h2> <code><pre> </pre></code> <!></section>');function Fe(e,t){$(t,!0);const{body:o}=ae,n={Test:je};var s=Be(),c=x(_(s),2),p=_(c),m=_(p,!0);b(p),b(c);var h=x(c,2);Re(h,{get components(){return n},get body(){return o}}),b(s),O(r=>R(m,r),[()=>Se.replace(/\t/g," ")]),v(e,s),tt()}const qe=(e,t=pt)=>{var o=Pe(),n=_(o),s=_(n,!0);b(n);var c=x(n,2),p=_(c,!0);b(c),b(o),O(()=>{R(s,t().name),R(p,t().age)}),v(e,o)};var Pe=T('<div class="person svelte-q3gttf"><p class="svelte-q3gttf"> </p> <p class="svelte-q3gttf"> </p></div>'),Ie=(e,t)=>Yt(t),Ne=(e,t)=>t.random(Math.floor(Math.random()*10)),we=T('<h2>Svelte5</h2> <h3>Reactive variables 3 ways:</h3> <button class="svelte-q3gttf">count++</button> <p class="svelte-q3gttf"> </p> <p class="svelte-q3gttf"> </p> <p class="svelte-q3gttf"> </p> <h3>Children (previously slots):</h3> <div class="children"><!></div> <h3>Dispatch Event</h3> <button class="svelte-q3gttf">Random</button>  <h3>Snippets</h3> <div class="people svelte-q3gttf"></div>',1);function Le(e,t){$(t,!0),F(t,"age",3,30);const o=[{name:"John",age:30},{name:"Jill",age:45}];let n=N(0),s=I(()=>d(n)*2),c=I(()=>d(n)*2),p=N(0);K(()=>{q(p,d(n)*2)});var m=we(),h=x(E(m),4);h.__click=[Ie,n];var r=x(h,2),l=_(r);b(r);var a=x(r,2),i=_(a);b(a);var C=x(a,2),f=_(C);b(C);var u=x(C,4),y=_(u);Tt(y,()=>t.children??pt),b(u);var g=x(u,4);g.__click=[Ne,t];var k=x(g,4);Q(k,21,()=>o,Y,(A,j)=>{qe(A,()=>d(j))}),b(k),O(()=>{R(l,`${d(n)??""} doubled is ${d(s)??""} (derived)`),R(i,`${d(n)??""} doubled is ${d(c)??""} (derived by)`),R(f,`${d(n)??""} doubled is ${d(p)??""} ($effect)`)}),v(e,m),tt()}Wt(["click"]);const Ue=(e,t)=>{let o=N(Ht(e)),n=N(null),s=N(!0),c=N(void 0);const p=(r=!0)=>{q(s,r,!0),r===!0&&(q(c,null),q(n,null))},m=async()=>{try{const r=await fetch(d(o),t);if(!r.ok)throw new Error(`Unexpected error occurred (status ${r.status})`);let l;if(d(o).includes(".csv")){const a=await r.text();l=ce(a)}else l=await r.json();return[null,l]}catch(r){const{errorMessage:l="Unexpected error eccurred"}=r;return[l,null]}},h=async r=>{p(!0);const[l,a]=await m();if(r===d(o)){if(l){p(!1),q(c,l,!0);return}p(!1),q(n,a,!0)}};return K(()=>{h(d(o))}),{get data(){return d(n)},get loading(){return d(s)},get error(){return d(c)},get url(){return d(o)},set url(r){d(o)!==r&&q(o,r,!0)}}};var ze=T("<p>loading data...</p>"),Ge=T("<p> </p>"),Je=T("<p>data loaded</p> <pre> </pre>",1),Ve=T('<div class="c"><h2>Load Data</h2> <div class="response"><!></div></div>');function Qe(e,t){$(t,!0);const o=`${ne}/assets/demo/test.csv`,n=Ue(o);K(()=>{});var s=Ve(),c=x(_(s),2),p=_(c);{var m=r=>{var l=ze();v(r,l)},h=r=>{var l=D(),a=E(l);{var i=f=>{var u=Ge(),y=_(u);b(u),O(()=>R(y,`error: ${n.error??""}`)),v(f,u)},C=f=>{var u=Je(),y=x(E(u),2),g=_(y,!0);b(y),O(k=>R(g,k),[()=>JSON.stringify(n.data,null,2)]),v(f,u)};V(a,f=>{n.error?f(i):f(C,!1)},!0)}v(r,l)};V(p,r=>{n.loading?r(m):r(h,!1)})}b(c),b(s),v(e,s),tt()}var Ye=T('<div id="demo" class="svelte-15aotx7"><h1>Demo</h1> <!> <!> <!> <!> <!> <!> <!> <!></div>');function He(e){let t=N(0);function o(i){console.log(i)}var n=Ye(),s=x(_(n),2);Le(s,{random:o,get value(){return d(t)},set value(i){q(t,i,!0)}});var c=x(s,2);le(c);var p=x(c,2);ve(p);var m=x(p,2);fe(m);var h=x(m,2);xe(h);var r=x(h,2);Fe(r,{});var l=x(r,2);Qe(l,{});var a=x(l,2);Ee(a),b(n),v(e,n)}function oa(e){He(e)}export{oa as component};
