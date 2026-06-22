import"../chunks/Bzak7iHL.js";import{I as P,J as _t,R as it,aS as Ft,H as qt,N as Ot,O as Pt,aT as wt,M as It,T as Nt,a9 as Ut,a8 as yt,a4 as xt,x as zt,ae as Lt,ad as Jt,Q as Gt,V as A,X as p,ai as x,Z as _,_ as b,am as D,al as S,ao as Vt,W as j,n as d,an as w,U as $,u as K,Y as tt,F as vt,v as O,ak as I,az as Yt,aU as Qt,r as Zt}from"../chunks/D-LEvHX2.js";import{i as Ht,a as R,d as Wt}from"../chunks/D8n1WcDg.js";import{e as Y,i as Q,b as Xt,s as Kt,c as $t,d as te}from"../chunks/BQdEpx3j.js";import{c as ut,b as ee,i as V}from"../chunks/BbP9FdZf.js";import{s as mt,p as q}from"../chunks/CdFUhNF-.js";import{s as At}from"../chunks/CYx8mrRR.js";import{h as Ct,c as ae}from"../chunks/Cq9w4BsX.js";import{b as re}from"../chunks/DaB-RJFI.js";function pt(e,t,o,r,s,c){let v=P;P&&_t();var m,h,n=null;P&&it.nodeType===Ft&&(n=it,_t());var u=P?it:e,a;qt(()=>{const i=t()||null;var C=i==="svg"?wt:null;i!==m&&(a&&(i===null?Lt(a,()=>{a=null,h=null}):i===h?Jt(a):Gt(a)),i&&i!==h&&(a=Pt(()=>{if(n=P?n:C?document.createElementNS(C,i):document.createElement(i),It(n,n),r){P&&Ht(i)&&n.append(document.createComment(""));var f=P?Nt(n):n.appendChild(Ut());P&&(f===null?yt(!1):xt(f)),r(n,f)}zt.nodes_end=n,u.before(n)})),m=i,m&&(h=m))},Ot),v&&(yt(!0),xt(u))}var kt={},dt={},ct=34,X=10,lt=13;function St(e){return new Function("d","return {"+e.map(function(t,o){return JSON.stringify(t)+": d["+o+'] || ""'}).join(",")+"}")}function oe(e,t){var o=St(e);return function(r,s){return t(o(r),s,e)}}function Tt(e){var t=Object.create(null),o=[];return e.forEach(function(r){for(var s in r)s in t||o.push(t[s]=s)}),o}function M(e,t){var o=e+"",r=o.length;return r<t?new Array(t-r+1).join(0)+o:o}function ne(e){return e<0?"-"+M(-e,6):e>9999?"+"+M(e,6):M(e,4)}function se(e){var t=e.getUTCHours(),o=e.getUTCMinutes(),r=e.getUTCSeconds(),s=e.getUTCMilliseconds();return isNaN(e)?"Invalid Date":ne(e.getUTCFullYear())+"-"+M(e.getUTCMonth()+1,2)+"-"+M(e.getUTCDate(),2)+(s?"T"+M(t,2)+":"+M(o,2)+":"+M(r,2)+"."+M(s,3)+"Z":r?"T"+M(t,2)+":"+M(o,2)+":"+M(r,2)+"Z":o||t?"T"+M(t,2)+":"+M(o,2)+"Z":"")}function ie(e){var t=new RegExp('["'+e+`
\r]`),o=e.charCodeAt(0);function r(a,i){var C,f,l=s(a,function(y,g){if(C)return C(y,g-1);f=y,C=i?oe(y,i):St(y)});return l.columns=f||[],l}function s(a,i){var C=[],f=a.length,l=0,y=0,g,k=f<=0,T=!1;a.charCodeAt(f-1)===X&&--f,a.charCodeAt(f-1)===lt&&--f;function B(){if(k)return dt;if(T)return T=!1,kt;var U,F=l,E;if(a.charCodeAt(F)===ct){for(;l++<f&&a.charCodeAt(l)!==ct||a.charCodeAt(++l)===ct;);return(U=l)>=f?k=!0:(E=a.charCodeAt(l++))===X?T=!0:E===lt&&(T=!0,a.charCodeAt(l)===X&&++l),a.slice(F+1,U-1).replace(/""/g,'"')}for(;l<f;){if((E=a.charCodeAt(U=l++))===X)T=!0;else if(E===lt)T=!0,a.charCodeAt(l)===X&&++l;else if(E!==o)continue;return a.slice(F,U)}return k=!0,a.slice(F,f)}for(;(g=B())!==dt;){for(var N=[];g!==kt&&g!==dt;)N.push(g),g=B();i&&(N=i(N,y++))==null||C.push(N)}return C}function c(a,i){return a.map(function(C){return i.map(function(f){return u(C[f])}).join(e)})}function v(a,i){return i==null&&(i=Tt(a)),[i.map(u).join(e)].concat(c(a,i)).join(`
`)}function m(a,i){return i==null&&(i=Tt(a)),c(a,i).join(`
`)}function h(a){return a.map(n).join(`
`)}function n(a){return a.map(u).join(e)}function u(a){return a==null?"":a instanceof Date?se(a):t.test(a+="")?'"'+a.replace(/"/g,'""')+'"':a}return{parse:r,parseRows:s,format:v,formatBody:m,formatRows:h,formatRow:n,formatValue:u}}var de=ie(","),ce=de.parse,le=A('<section id="demo-link"><h2>Link</h2> <p><a href="elements">Default element styles demo</a></p> <p><a href="fonts">Pudding-hosted font previews</a></p></section>');function ue(e){var t=le();p(e,t)}var me=A('<section id="demo-image"><h2>Image</h2> <p>img tag</p> <img src="../assets/demo/test.jpg" alt="cat" class="svelte-b56t42"/> <p>background image</p> <div class="svelte-b56t42"></div></section>');function pe(e){var t=me();p(e,t)}var ve=A('<section id="demo-element"><h2>Dynamic Svelte Element</h2> <!></section>');function fe(e){const t=[{tag:"h3",text:"I am a h3 tag."},{tag:"p",text:"I am p tag."}];var o=ve(),r=x(_(o),2);Y(r,17,()=>t,Q,(s,c)=>{let v=()=>d(c).tag,m=()=>d(c).text;var h=D(),n=S(h);pt(n,v,!1,(u,a)=>{var i=Vt();j(()=>R(i,m())),p(a,i)}),p(s,h)}),b(o),p(e,o)}var ge=A("<p> </p>");function he(e,t){var o=ge(),r=_(o);b(o),j(()=>R(r,`I am component A and my favorite number is ${t.number??""}.`)),p(e,o)}var be=A("<p> </p>");function _e(e,t){var o=be(),r=_(o);b(o),j(()=>R(r,`I am component B and my name is ${t.name??""}.`)),p(e,o)}var ye=A('<section id="demo-component"><h2>Dynamic Svelte Component</h2> <!></section>');function xe(e){const t={A:he,B:_e},o=[{component:"A",number:42},{component:"B",name:"Russell"}];var r=ye(),s=x(_(r),2);Y(s,17,()=>o,Q,(c,v)=>{const m=w(()=>t[d(v).component]);var h=D(),n=S(h);ut(n,()=>d(m),(u,a)=>{a(u,mt(()=>d(v)))}),p(c,h)}),b(r),p(e,r)}var Ce=A("<div><!></div>");function ke(e,t){$(t,!0);let o=q(t,"root",3,null),r=q(t,"top",3,0),s=q(t,"bottom",3,0),c=q(t,"increments",3,100),v=q(t,"value",15,void 0),m=[],h=[],n=[],u=[],a;function i(){let g=0,k=0;for(let T=0;T<m.length;T++)m[T]>g&&(g=m[T],k=T);g>0?v(k):v(void 0)}function C(g,k){const T=Z=>{Z[0].isIntersecting;const et=Z[0].intersectionRatio;m[k]=et,i()},B=r()?r()*-1:0,N=s()?s()*-1:0,U=`${B}px 0px ${N}px 0px`,F={root:o(),rootMargin:U,threshold:h};u[k]&&u[k].disconnect();const E=new IntersectionObserver(T,F);E.observe(g),u[k]=E}function f(){n.length&&n.forEach(C)}K(()=>{for(let g=0;g<c()+1;g++)h.push(g/c());n=a.querySelectorAll(":scope > *:not(iframe)"),f()}),K(()=>{r(),s(),f()});var l=Ce(),y=_(l);At(y,()=>t.children??vt),b(l),ee(l,g=>a=g,()=>a),p(e,l),tt()}var Te=A('<div><p class="svelte-1sxgmm9"> </p></div>'),Ae=A('<section id="scrolly"><h2 class="svelte-1sxgmm9">Scrolly <span> </span></h2> <div class="spacer svelte-1sxgmm9"></div> <!> <div class="spacer svelte-1sxgmm9"></div></section>');function Se(e){let t=I(void 0);var o=Ae(),r=_(o),s=x(_(r)),c=_(s,!0);b(s),b(r);var v=x(r,4);ke(v,{get value(){return d(t)},set value(m){O(t,m,!0)},children:(m,h)=>{var n=D(),u=S(n);Y(u,16,()=>[0,1,2,3,4],Q,(a,i,C)=>{const f=w(()=>d(t)===C);var l=Te();let y;var g=_(l),k=_(g,!0);b(g),b(l),j(T=>{y=Xt(l,1,"step svelte-1sxgmm9",null,y,T),R(k,i)},[()=>({active:d(f)})]),p(a,l)}),p(m,n)},$$slots:{default:!0}}),Yt(2),b(o),j(()=>R(c,d(t)||"-")),p(e,o)}const Ee=`{\r
	"meta": {\r
		"title": "Como o Brega Funk conquistou o Brasil em 15 segundos?",\r
		"description": "Uma história sobre como um ritmo periférico de Recife conquistou as paradas nacionais por meio do passinho e das redes sociais.",\r
		"url": "https://jerbss.github.io/site-brega-funk/",\r
		"keywords": "brega funk, recife, passinho, tiktok, reels, musica, streaming"\r
	},\r
	"landing": {\r
		"title": "Como o Brega Funk conquistou o Brasil em 15 segundos?",\r
		"context": "A ascensão digital de um gênero periférico através da economia da atenção."\r
	},\r
	"sections": [\r
		{\r
			"id": "first-gen",\r
			"heading": "",\r
			"years": "",\r
			"numEnd": "",\r
			"coverAlt": "",\r
			"nodes": [\r
				{\r
					"type": "Image",\r
					"value": {\r
						"src": "loma.png",\r
						"alt": "Mirella Santos, MC Loma e Mariely Santos.",\r
						"shape": "full",\r
						"source": "MC Loma e as Gêmeas Lacração no clipe \\"Na Vibe\\" (2018)"\r
					}\r
				},\r
				{\r
					"type": "Text",\r
					"value": {\r
						"text": "No início de 2018, três jovens da periferia de Jaboatão dos Guararapes, em Pernambuco, decidiram criar um clipe de música. Sem qualquer orçamento, Paloma Roberta (MC Loma, de 15 anos) e as irmãs Mirella e Mariely Santos (as Gêmeas Lacração, de 18 anos) usaram a câmera de um celular comum para filmar a si mesmas dançando pelo bairro.",\r
						"speaker": "eunice"\r
					}\r
				},\r
				{\r
					"type": "Video",\r
					"value": {\r
						"url": "https://www.youtube-nocookie.com/embed/pOpyq-T4fnQ?si=jwnnH8FP0Xsc6OxI",\r
						"title": "YouTube video player"\r
					}\r
				},\r
				{\r
					"type": "Text",\r
					"value": {\r
						"text": "A produção simples da música \\"Envolvimento\\" viralizou no YouTube de forma inesperada. Em poucas semanas, o vídeo amador acumulou milhões de visualizações, recebeu apoio de influenciadores e chamou a atenção de artistas consagrados. A força do viral colocou a faixa nas paradas globais de streaming e forçou a indústria a olhar para o ritmo, culminando no topo do ranking nacional do Spotify logo após a assinatura com uma produtora no início de fevereiro.",\r
						"speaker": "minji"\r
					}\r
				},\r
				{\r
					"type": "Chart",\r
					"value": {\r
						"id": "chart-envolvimento-trajectory",\r
						"title": "A Rápida Ascensão no Spotify",\r
						"subtitle": "Trajetória semanal de \\"Envolvimento\\" no Top 200 Brasil. A faixa impressionou ao estrear direto na 38ª posição e, em apenas uma semana, saltou para o 2º lugar (atrás apenas de \\"Vai Malandra\\", de Anitta), alcançando a marca de 3,7 milhões de streams semanais no auge do viral.",\r
						"source": "Fonte: Spotify Charts Brasil (Fevereiro - Junho de 2018)"\r
					}\r
				},\r
				{\r
					"type": "Text",\r
					"value": {\r
						"text": "O estouro de \\"Envolvimento\\" provou que o sucesso na música brasileira podia nascer de forma totalmente orgânica nas redes sociais, dispensando os investimentos das grandes gravadoras. No entanto, embora a música tenha tocado no Brasil inteiro, o público fora de Pernambuco ainda não conhecia o nome do movimento. O termo \\"brega funk\\" permaneceria como um segredo de Recife por mais um ano, aguardando os próximos hits que consolidariam o gênero de vez na internet.",\r
						"speaker": "eunice"\r
					}\r
				}\r
			]\r
		},\r
		{\r
			"id": "second-gen",\r
			"heading": "",\r
			"years": "2000-2018",\r
			"numEnd": "st",\r
			"coverAlt": "Mapa de difusão do Brega Funk",\r
			"nodes": [\r
				{\r
					"type": "Text",\r
					"value": {\r
						"text": "Muito antes de \\"Envolvimento\\" dominar as paradas do país, o Brega Funk já servia de trilha sonora nas comunidades da Região Metropolitana do Recife. O gênero surgiu no início da década de 2010, unindo a melodia romântica do brega recifense às batidas aceleradas do funk carioca.",\r
						"speaker": "minji"\r
					}\r
				},\r
				{\r
					"type": "Chart",\r
					"value": {\r
						"id": "audio-early-brega-funk",\r
						"title": "Antiga Sonoridade: O Começo do Brega Funk",\r
						"subtitle": "Ouça \\"Pensei Que Era Pra Sempre\\" de MC Sheldon. A faixa exemplifica a transição do brega recifense clássico para o brega funk, mantendo o tom melódico e romântico, mas já incorporando os primeiros elementos rítmicos do funk carioca.",\r
						"source": "Clássico de 2012 que fundiu o Brega Romântico ao início das batidas do Funk"\r
					}\r
				},\r
				{\r
					"type": "Text",\r
					"value": {\r
						"text": "MCs e DJs locais, como Sheldon, Cego, Tocha, Troinha e Dadá Boladão, criaram as primeiras faixas eletrônicas do ritmo. As produções circulavam em CDs gravados artesanalmente, carros de som conhecidos como paredões e grupos de WhatsApp, movimentando uma rede de distribuição independente de gravadoras.",\r
						"speaker": "eunice"\r
					}\r
				},\r
				{\r
					"type": "Chart",\r
					"value": {\r
						"id": "chart-brega-funk-growth",\r
						"title": "A Explosão de Buscas pelo Brega Funk",\r
						"subtitle": "O gráfico demonstra que a popularização do termo na internet demorou a acontecer. No início de 2018, quando o hit \\"Envolvimento\\" estourou, quase ninguém pesquisava usando o termo \\"brega funk\\". A explosão de buscas só ocorreu entre o fim de 2019 e o início de 2020, impulsionada por grandes hits de Carnaval como \\"Sentadão\\" e \\"Tudo OK\\".",\r
						"source": "Fonte: Google Trends Brasil (2018 - 2026)"\r
					}\r
				},\r
				{\r
					"type": "Chart",\r
					"value": {\r
						"id": "map-google-trends-brega-funk",\r
						"title": "De Recife para o Brasil",\r
						"subtitle": "Mapa de interesse relativo pelo termo <em>brega funk</em> por estado brasileiro. Pernambuco lidera com ampla margem, mas o Nordeste inteiro vibra com o ritmo e o Sudeste/Sul demonstram penetração crescente.",\r
						"source": "Fonte: Google Trends Brasil (Interesse por sub-região)"\r
					}\r
				},\r
				{\r
					"type": "Text",\r
					"value": {\r
						"text": "Com a expansão da internet nos celulares, a circulação ganhou escala nacional. A plataforma Deezer, por exemplo, registrou um aumento de 680% no consumo do gênero no início de 2020. A partir de Recife, o brega funk alcançou as pistas de capitais do Nordeste, do Sudeste e do Sul.",\r
						"speaker": "minji"\r
					}\r
				}\r
			]\r
		},\r
		{\r
			"id": "third-gen",\r
			"heading": "",\r
			"years": "Dancinhas",\r
			"numEnd": "nd",\r
			"coverAlt": "Dançarinos fazendo passinho em Recife",\r
			"nodes": [\r
				{\r
					"type": "Text",\r
					"value": {\r
						"text": "A consolidação do brega funk no país ocorreu em sintonia com o passinho, estilo de dança urbana que serve como a tradução visual das batidas. O movimento começou como forma de expressão de jovens da periferia, que encontravam na dança uma linguagem própria de reconhecimento.",\r
						"speaker": "eunice"\r
					}\r
				},\r
				{\r
					"type": "Chart",\r
					"value": {\r
						"id": "grid-passinho-contexts",\r
						"title": "Múltiplos Contextos do Passinho",\r
						"subtitle": "Grid interativo com vídeos curtos ou GIFs comparativos do passinho em 4 cenários: nas calçadas de Recife (raiz), nas comemorações de futebol (Neymar), na televisão nacional e no TikTok.",\r
						"source": "Curadoria e Acervo de Redes Sociais (YouTube / TikTok)"\r
					}\r
				},\r
				{\r
					"type": "Text",\r
					"value": {\r
						"text": "Um dos maiores exemplos dessa cultura foi o Passinho do Jamal, criado no bairro de Santo Amaro, em Recife, por Romero Júnior e Eo Chapa. Os passos rápidos de pés e movimentos de mãos tornaram-se assinatura visual do gênero, espalhando-se por vídeos caseiros gravados nas calçadas das comunidades.",\r
						"speaker": "minji"\r
					}\r
				},\r
				{\r
					"type": "Text",\r
					"value": {\r
						"text": "A coreografia ultrapassou as redes e chegou a comemorações de jogadores de futebol, programas de televisão e reality shows. Esse apelo corporal ajudou a atrair novos públicos e alimentar os algoritmos de vídeos curtos em plataformas digitais.",\r
						"speaker": "eunice"\r
					}\r
				}\r
			]\r
		},\r
		{\r
			"id": "fourth-gen",\r
			"heading": "",\r
			"years": "Redes Sociais",\r
			"numEnd": "rd",\r
			"coverAlt": "Dancinhas de Tik Tok e Reels",\r
			"nodes": [\r
				{\r
					"type": "Text",\r
					"value": {\r
						"text": "A consolidação do TikTok e do Instagram Reels alterou o formato das músicas brasileiras devido à economia da atenção. Como plataformas de streaming contabilizam uma reprodução após trinta segundos de audição, produtores passaram a antecipar o refrão e cortar introduções instrumentais.",\r
						"speaker": "minji"\r
					}\r
				},\r
				{\r
					"type": "Chart",\r
					"value": {\r
						"id": "chart-song-duration-trend",\r
						"title": "Tendência de Queda na Duração das Músicas",\r
						"subtitle": "Evolução da duração mediana das músicas no Top 200 Brasil (2018 - 2025). Pontos destacados mostram como as faixas de brega funk anteciparam essa redução geral sob a economia da atenção.",\r
						"source": "Fonte: Spotify Audio Features API"\r
					}\r
				},\r
				{\r
					"type": "Text",\r
					"value": {\r
						"text": "A estrutura do brega funk se ajusta bem a essa exigência. As paradas marcadas no beat e as explosões rítmicas facilitam a criação de vídeos curtos. Muitas canções passaram a ter menos de dois minutos e meio de duração, concentrando o clímax no trecho exato que será compartilhado nos desafios de dança.",\r
						"speaker": "eunice"\r
					}\r
				},\r
				{\r
					"type": "Chart",\r
					"value": {\r
						"id": "interactive-bpm-comparator",\r
						"title": "Dissonância Rítmica: O que o Algoritmo Ouve",\r
						"subtitle": "Comparador de batidas por minuto (BPM). O algoritmo do Spotify registra faixas como \\"Envolvimento\\" a ~165 BPM, enquanto o andamento real do ritmo é o compasso binário de ~82 BPM. Clique para ouvir o metrônomo correspondente.",\r
						"source": "Fonte: Spotify Audio Features API & Medições Manuais"\r
					}\r
				},\r
				{\r
					"type": "Text",\r
					"value": {\r
						"text": "Essa dinâmica produziu anomalias nas plataformas de dados. Embora a velocidade real do brega funk varie de 115 a 135 BPM, o Spotify registra faixas como Envolvimento com 165 BPM. A síncope das palmas e o compasso acelerado da dança confundem o algoritmo de leitura automática de andamento.",\r
						"speaker": "minji"\r
					}\r
				}\r
			]\r
		},\r
		{\r
			"id": "fifth-gen",\r
			"heading": "",\r
			"years": "Playlists",\r
			"numEnd": "th",\r
			"coverAlt": "Paredão de caixas de som de Brega Funk",\r
			"nodes": [\r
				{\r
					"type": "Text",\r
					"value": {\r
						"text": "A engrenagem viral dos vídeos de dança também gerou impactos sociais e econômicos. O movimento estruturou uma cadeia de trabalho descentralizada, gerando renda para produtores musicais, MCs, dançarinos e criadores digitais nas periferias nordestinas.",\r
						"speaker": "minji"\r
					}\r
				},\r
				{\r
					"type": "Chart",\r
					"value": {\r
						"id": "playlist-brega-funk-anthology",\r
						"title": "Playlist Interativa: Antologia do Brega Funk",\r
						"subtitle": "Evolução cronológica do gênero por meio de faixas essenciais, desde a base recifense de 2011 até a invasão das paradas nacionais e as experimentações atuais.",\r
						"source": "Fonte: Spotify Embed Player (Curadoria Editorial)"\r
					}\r
				},\r
				{\r
					"type": "Text",\r
					"value": {\r
						"text": "Nomes históricos do brega recifense dividem espaço nas playlists nacionais com jovens produtores do passinho. Mesmo enfrentando resistências e preconceito contra suas origens, o brega funk estabeleceu-se como um dos principais influenciadores da música pop brasileira contemporânea.",\r
						"speaker": "eunice"\r
					}\r
				},\r
				{\r
					"type": "Chart",\r
					"value": {\r
						"id": "grid-artists-cards",\r
						"title": "Quem Fez a Cena: Protagonistas do Brega Funk",\r
						"subtitle": "Grade de cards com foto, cidade natal e principal sucesso dos produtores, MCs e dançarinos mais influentes da história do ritmo.",\r
						"source": "Fonte: Curadoria Editorial"\r
					}\r
				}\r
			]\r
		}\r
	],\r
	"methods": [\r
		{\r
			"type": "header",\r
			"value": "Metodologia"\r
		},\r
		{\r
			"type": "text",\r
			"value": "Os dados e fatos apresentados neste ensaio foram compilados a partir de relatórios da indústria de streaming musical, matérias jornalísticas e registros das redes sociais (YouTube, Deezer e TikTok). As referências completas estão detalhadas no documento de fundação teórica."\r
		}\r
	]\r
}`;var Me=A("<p><!></p>"),De=A("<section><!></section>");function Re(e,t){$(t,!0);let o=q(t,"components",19,()=>({})),r=q(t,"body",19,()=>[]);var s=D(),c=S(s);Y(c,17,r,Q,(v,m)=>{let h=()=>d(m).section,n=()=>d(m).content;const u=w(()=>h().toLowerCase().replace(/[^a-z0-9]/g,"")),a=w(()=>o()[h()]);var i=De(),C=_(i);{var f=y=>{var g=D(),k=S(g);ut(k,()=>d(a),(T,B)=>{B(T,mt(n))}),p(y,g)},l=y=>{var g=D(),k=S(g);Y(k,17,n,Q,(T,B,N,U)=>{let F=()=>d(B).type,E=()=>d(B).value;const Z=w(()=>o()[F()]),et=w(()=>typeof E()=="string");var ft=D(),Et=S(ft);{var Mt=z=>{var H=D(),at=S(H);ut(at,()=>d(Z),(rt,ot)=>{ot(rt,mt(E))}),p(z,H)},Dt=z=>{var H=D(),at=S(H);{var rt=L=>{var J=Me(),nt=_(J);Ct(nt,E),b(J),p(L,J)},ot=L=>{var J=D(),nt=S(J);{var Rt=G=>{var W=D(),st=S(W);pt(st,F,!1,(gt,ht)=>{var bt=D(),Bt=S(bt);Ct(Bt,E),p(ht,bt)}),p(G,W)},jt=G=>{var W=D(),st=S(W);pt(st,F,!1,(gt,ht)=>{$t(gt,()=>({...E()}))}),p(G,W)};V(nt,G=>{d(et)?G(Rt):G(jt,!1)},!0)}p(L,J)};V(at,L=>{F()==="text"?L(rt):L(ot,!1)},!0)}p(z,H)};V(Et,z=>{d(Z)?z(Mt):z(Dt,!1)})}p(T,ft)}),p(y,g)};V(C,y=>{d(a)?y(f):y(l,!1)})}b(i),j(()=>Kt(i,"id",d(u))),p(v,i)}),p(e,s),tt()}var je=A('<p> </p> <progress max="100"></progress>',1);function Be(e,t){let o=q(t,"label",3,"A"),r=q(t,"value",3,0);var s=je(),c=S(s),v=_(c,!0);b(c);var m=x(c,2);j(()=>{R(v,o()),te(m,r())}),p(e,s)}var Fe=A('<section id="cms"><h2>MicroCMS</h2> <code><pre> </pre></code> <!></section>');function qe(e,t){$(t,!0);const{body:o}=ae,r={Test:Be};var s=Fe(),c=x(_(s),2),v=_(c),m=_(v,!0);b(v),b(c);var h=x(c,2);Re(h,{get components(){return r},get body(){return o}}),b(s),j(n=>R(m,n),[()=>Ee.replace(/\t/g," ")]),p(e,s),tt()}const Oe=(e,t=vt)=>{var o=Pe(),r=_(o),s=_(r,!0);b(r);var c=x(r,2),v=_(c,!0);b(c),b(o),j(()=>{R(s,t().name),R(v,t().age)}),p(e,o)};var Pe=A('<div class="person svelte-q3gttf"><p class="svelte-q3gttf"> </p> <p class="svelte-q3gttf"> </p></div>'),we=(e,t)=>Qt(t),Ie=(e,t)=>t.random(Math.floor(Math.random()*10)),Ne=A('<h2>Svelte5</h2> <h3>Reactive variables 3 ways:</h3> <button class="svelte-q3gttf">count++</button> <p class="svelte-q3gttf"> </p> <p class="svelte-q3gttf"> </p> <p class="svelte-q3gttf"> </p> <h3>Children (previously slots):</h3> <div class="children"><!></div> <h3>Dispatch Event</h3> <button class="svelte-q3gttf">Random</button>  <h3>Snippets</h3> <div class="people svelte-q3gttf"></div>',1);function Ue(e,t){$(t,!0),q(t,"age",3,30);const o=[{name:"John",age:30},{name:"Jill",age:45}];let r=I(0),s=w(()=>d(r)*2),c=w(()=>d(r)*2),v=I(0);K(()=>{O(v,d(r)*2)});var m=Ne(),h=x(S(m),4);h.__click=[we,r];var n=x(h,2),u=_(n);b(n);var a=x(n,2),i=_(a);b(a);var C=x(a,2),f=_(C);b(C);var l=x(C,4),y=_(l);At(y,()=>t.children??vt),b(l);var g=x(l,4);g.__click=[Ie,t];var k=x(g,4);Y(k,21,()=>o,Q,(T,B)=>{Oe(T,()=>d(B))}),b(k),j(()=>{R(u,`${d(r)??""} doubled is ${d(s)??""} (derived)`),R(i,`${d(r)??""} doubled is ${d(c)??""} (derived by)`),R(f,`${d(r)??""} doubled is ${d(v)??""} ($effect)`)}),p(e,m),tt()}Wt(["click"]);const ze=(e,t)=>{let o=I(Zt(e)),r=I(null),s=I(!0),c=I(void 0);const v=(n=!0)=>{O(s,n,!0),n===!0&&(O(c,null),O(r,null))},m=async()=>{try{const n=await fetch(d(o),t);if(!n.ok)throw new Error(`Unexpected error occurred (status ${n.status})`);let u;if(d(o).includes(".csv")){const a=await n.text();u=ce(a)}else u=await n.json();return[null,u]}catch(n){const{errorMessage:u="Unexpected error eccurred"}=n;return[u,null]}},h=async n=>{v(!0);const[u,a]=await m();if(n===d(o)){if(u){v(!1),O(c,u,!0);return}v(!1),O(r,a,!0)}};return K(()=>{h(d(o))}),{get data(){return d(r)},get loading(){return d(s)},get error(){return d(c)},get url(){return d(o)},set url(n){d(o)!==n&&O(o,n,!0)}}};var Le=A("<p>loading data...</p>"),Je=A("<p> </p>"),Ge=A("<p>data loaded</p> <pre> </pre>",1),Ve=A('<div class="c"><h2>Load Data</h2> <div class="response"><!></div></div>');function Ye(e,t){$(t,!0);const o=`${re}/assets/demo/test.csv`,r=ze(o);K(()=>{});var s=Ve(),c=x(_(s),2),v=_(c);{var m=n=>{var u=Le();p(n,u)},h=n=>{var u=D(),a=S(u);{var i=f=>{var l=Je(),y=_(l);b(l),j(()=>R(y,`error: ${r.error??""}`)),p(f,l)},C=f=>{var l=Ge(),y=x(S(l),2),g=_(y,!0);b(y),j(k=>R(g,k),[()=>JSON.stringify(r.data,null,2)]),p(f,l)};V(a,f=>{r.error?f(i):f(C,!1)},!0)}p(n,u)};V(v,n=>{r.loading?n(m):n(h,!1)})}b(c),b(s),p(e,s),tt()}var Qe=A('<div id="demo" class="svelte-15aotx7"><h1>Demo</h1> <!> <!> <!> <!> <!> <!> <!> <!></div>');function Ze(e){let t=I(0);function o(i){console.log(i)}var r=Qe(),s=x(_(r),2);Ue(s,{random:o,get value(){return d(t)},set value(i){O(t,i,!0)}});var c=x(s,2);ue(c);var v=x(c,2);pe(v);var m=x(v,2);fe(m);var h=x(m,2);xe(h);var n=x(h,2);qe(n,{});var u=x(n,2);Ye(u,{});var a=x(u,2);Se(a),b(r),p(e,r)}function oa(e){Ze(e)}export{oa as component};
