import "../chunks/Bzak7iHL.js"; import { I as F, J as _t, R as it, aS as Ot, H as Bt, N as It, O as Ft, aT as Nt, M as wt, T as Pt, a9 as Lt, a8 as yt, a4 as xt, x as Ut, ae as zt, ad as Vt, Q as Jt, V as E, X as p, ai as x, Z as _, _ as b, am as R, al as S, ao as Gt, W as q, n as d, an as N, U as $, u as K, Y as tt, F as vt, v as I, ak as w, az as Yt, aU as Ht, r as Qt } from "../chunks/D-LEvHX2.js"; import { i as Wt, a as D, d as Xt } from "../chunks/D8n1WcDg.js"; import { e as Y, i as H, b as Zt, s as Kt, c as $t, d as te } from "../chunks/BQdEpx3j.js"; import { c as lt, b as ee, i as G } from "../chunks/BbP9FdZf.js"; import { s as mt, p as B } from "../chunks/CdFUhNF-.js"; import { s as Et } from "../chunks/CYx8mrRR.js"; import { h as kt, c as ae } from "../chunks/D1v9IKK0.js"; import { b as oe } from "../chunks/C5FqUwm4.js"; function pt(e, t, n, o, s, c) { let v = F; F && _t(); var m, h, r = null; F && it.nodeType === Ot && (r = it, _t()); var l = F ? it : e, a; Bt(() => { const i = t() || null; var k = i === "svg" ? Nt : null; i !== m && (a && (i === null ? zt(a, () => { a = null, h = null }) : i === h ? Vt(a) : Jt(a)), i && i !== h && (a = Ft(() => { if (r = F ? r : k ? document.createElementNS(k, i) : document.createElement(i), wt(r, r), o) { F && Wt(i) && r.append(document.createComment("")); var f = F ? Pt(r) : r.appendChild(Lt()); F && (f === null ? yt(!1) : xt(f)), o(r, f) } Ut.nodes_end = r, l.before(r) })), m = i, m && (h = m)) }, It), v && (yt(!0), xt(l)) } var Ct = {}, dt = {}, ct = 34, Z = 10, ut = 13; function St(e) { return new Function("d", "return {" + e.map(function (t, n) { return JSON.stringify(t) + ": d[" + n + '] || ""' }).join(",") + "}") } function ne(e, t) { var n = St(e); return function (o, s) { return t(n(o), s, e) } } function At(e) { var t = Object.create(null), n = []; return e.forEach(function (o) { for (var s in o) s in t || n.push(t[s] = s) }), n } function M(e, t) { var n = e + "", o = n.length; return o < t ? new Array(t - o + 1).join(0) + n : n } function re(e) { return e < 0 ? "-" + M(-e, 6) : e > 9999 ? "+" + M(e, 6) : M(e, 4) } function se(e) { var t = e.getUTCHours(), n = e.getUTCMinutes(), o = e.getUTCSeconds(), s = e.getUTCMilliseconds(); return isNaN(e) ? "Invalid Date" : re(e.getUTCFullYear()) + "-" + M(e.getUTCMonth() + 1, 2) + "-" + M(e.getUTCDate(), 2) + (s ? "T" + M(t, 2) + ":" + M(n, 2) + ":" + M(o, 2) + "." + M(s, 3) + "Z" : o ? "T" + M(t, 2) + ":" + M(n, 2) + ":" + M(o, 2) + "Z" : n || t ? "T" + M(t, 2) + ":" + M(n, 2) + "Z" : "") } function ie(e) {
	var t = new RegExp('["' + e + `
\r]`), n = e.charCodeAt(0); function o(a, i) { var k, f, u = s(a, function (y, g) { if (k) return k(y, g - 1); f = y, k = i ? ne(y, i) : St(y) }); return u.columns = f || [], u } function s(a, i) { var k = [], f = a.length, u = 0, y = 0, g, C = f <= 0, A = !1; a.charCodeAt(f - 1) === Z && --f, a.charCodeAt(f - 1) === ut && --f; function j() { if (C) return dt; if (A) return A = !1, Ct; var L, O = u, T; if (a.charCodeAt(O) === ct) { for (; u++ < f && a.charCodeAt(u) !== ct || a.charCodeAt(++u) === ct;); return (L = u) >= f ? C = !0 : (T = a.charCodeAt(u++)) === Z ? A = !0 : T === ut && (A = !0, a.charCodeAt(u) === Z && ++u), a.slice(O + 1, L - 1).replace(/""/g, '"') } for (; u < f;) { if ((T = a.charCodeAt(L = u++)) === Z) A = !0; else if (T === ut) A = !0, a.charCodeAt(u) === Z && ++u; else if (T !== n) continue; return a.slice(O, L) } return C = !0, a.slice(O, f) } for (; (g = j()) !== dt;) { for (var P = []; g !== Ct && g !== dt;)P.push(g), g = j(); i && (P = i(P, y++)) == null || k.push(P) } return k } function c(a, i) { return a.map(function (k) { return i.map(function (f) { return l(k[f]) }).join(e) }) } function v(a, i) {
		return i == null && (i = At(a)), [i.map(l).join(e)].concat(c(a, i)).join(`
`)
	} function m(a, i) {
		return i == null && (i = At(a)), c(a, i).join(`
`)
	} function h(a) {
		return a.map(r).join(`
`)
	} function r(a) { return a.map(l).join(e) } function l(a) { return a == null ? "" : a instanceof Date ? se(a) : t.test(a += "") ? '"' + a.replace(/"/g, '""') + '"' : a } return { parse: o, parseRows: s, format: v, formatBody: m, formatRows: h, formatRow: r, formatValue: l }
} var de = ie(","), ce = de.parse, ue = E('<section id="demo-link"><h2>Link</h2> <p><a href="elements">Default element styles demo</a></p> <p><a href="fonts">Pudding-hosted font previews</a></p></section>'); function le(e) { var t = ue(); p(e, t) } var me = E('<section id="demo-image"><h2>Image</h2> <p>img tag</p> <img src="../assets/demo/test.jpg" alt="cat" class="svelte-b56t42"/> <p>background image</p> <div class="svelte-b56t42"></div></section>'); function pe(e) { var t = me(); p(e, t) } var ve = E('<section id="demo-element"><h2>Dynamic Svelte Element</h2> <!></section>'); function fe(e) { const t = [{ tag: "h3", text: "I am a h3 tag." }, { tag: "p", text: "I am p tag." }]; var n = ve(), o = x(_(n), 2); Y(o, 17, () => t, H, (s, c) => { let v = () => d(c).tag, m = () => d(c).text; var h = R(), r = S(h); pt(r, v, !1, (l, a) => { var i = Gt(); q(() => D(i, m())), p(a, i) }), p(s, h) }), b(n), p(e, n) } var ge = E("<p> </p>"); function he(e, t) { var n = ge(), o = _(n); b(n), q(() => D(o, `I am component A and my favorite number is ${t.number ?? ""}.`)), p(e, n) } var be = E("<p> </p>"); function _e(e, t) { var n = be(), o = _(n); b(n), q(() => D(o, `I am component B and my name is ${t.name ?? ""}.`)), p(e, n) } var ye = E('<section id="demo-component"><h2>Dynamic Svelte Component</h2> <!></section>'); function xe(e) { const t = { A: he, B: _e }, n = [{ component: "A", number: 42 }, { component: "B", name: "Russell" }]; var o = ye(), s = x(_(o), 2); Y(s, 17, () => n, H, (c, v) => { const m = N(() => t[d(v).component]); var h = R(), r = S(h); lt(r, () => d(m), (l, a) => { a(l, mt(() => d(v))) }), p(c, h) }), b(o), p(e, o) } var ke = E("<div><!></div>"); function Ce(e, t) { $(t, !0); let n = B(t, "root", 3, null), o = B(t, "top", 3, 0), s = B(t, "bottom", 3, 0), c = B(t, "increments", 3, 100), v = B(t, "value", 15, void 0), m = [], h = [], r = [], l = [], a; function i() { let g = 0, C = 0; for (let A = 0; A < m.length; A++)m[A] > g && (g = m[A], C = A); g > 0 ? v(C) : v(void 0) } function k(g, C) { const A = Q => { Q[0].isIntersecting; const et = Q[0].intersectionRatio; m[C] = et, i() }, j = o() ? o() * -1 : 0, P = s() ? s() * -1 : 0, L = `${j}px 0px ${P}px 0px`, O = { root: n(), rootMargin: L, threshold: h }; l[C] && l[C].disconnect(); const T = new IntersectionObserver(A, O); T.observe(g), l[C] = T } function f() { r.length && r.forEach(k) } K(() => { for (let g = 0; g < c() + 1; g++)h.push(g / c()); r = a.querySelectorAll(":scope > *:not(iframe)"), f() }), K(() => { o(), s(), f() }); var u = ke(), y = _(u); Et(y, () => t.children ?? vt), b(u), ee(u, g => a = g, () => a), p(e, u), tt() } var Ae = E('<div><p class="svelte-1sxgmm9"> </p></div>'), Ee = E('<section id="scrolly"><h2 class="svelte-1sxgmm9">Scrolly <span> </span></h2> <div class="spacer svelte-1sxgmm9"></div> <!> <div class="spacer svelte-1sxgmm9"></div></section>'); function Se(e) { let t = w(void 0); var n = Ee(), o = _(n), s = x(_(o)), c = _(s, !0); b(s), b(o); var v = x(o, 4); Ce(v, { get value() { return d(t) }, set value(m) { I(t, m, !0) }, children: (m, h) => { var r = R(), l = S(r); Y(l, 16, () => [0, 1, 2, 3, 4], H, (a, i, k) => { const f = N(() => d(t) === k); var u = Ae(); let y; var g = _(u), C = _(g, !0); b(g), b(u), q(A => { y = Zt(u, 1, "step svelte-1sxgmm9", null, y, A), D(C, i) }, [() => ({ active: d(f) })]), p(a, u) }), p(m, r) }, $$slots: { default: !0 } }), Yt(2), b(n), q(() => D(c, d(t) || "-")), p(e, n) } const Te = `{
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
						"src": "videoframe_53582.png",
						"alt": "Mirella Santos, MC Loma e Mariely Santos.",
						"shape": "full",
						"source": "MC Loma e as Gêmeas Lacração no clipe \\"Treme Treme\\" (2018)"
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
						"text": "Essa aceleração das músicas para agradar o algoritmo gerou um mercado real e independente no Recife. Longe das grandes gravadoras, jovens DJs, MCs e dançarinos passaram a viver da música que produzem nos próprios quartos e a divulgar pelo WhatsApp. No documentário abaixo, os artistas mostram como criam as batidas usando panelas no computador e como grupos de dança, como o de Santo Amaro, mudaram a rotina dos jovens locais.",
						"speaker": "eunice"
					}
				},
				{
					"type": "Video",
					"value": {
						"url": "https://www.youtube-nocookie.com/embed/3qLr-qILt1k?si=QAm_N7EtdYuzVBJm",
						"title": "Documentário Brega Funk Vai Dominar o Mundo (Spotify)"
					}
				},
				{
					"type": "Text",
					"value": {
						"text": "No fim das contas, o brega funk conquistou o Brasil porque uniu a coreografia rápida do passinho, que mistura passos de frevo e funk, com músicas que começam direto no refrão para ninguém pular. Essa combinação, feita para prender o ouvinte nos primeiros segundos, levou o som do Recife para o topo das plataformas de streaming e quebrou o domínio das produções do Sudeste no rádio e na internet.",
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
}`; var Me = E("<p><!></p>"), Re = E("<section><!></section>"); function De(e, t) { $(t, !0); let n = B(t, "components", 19, () => ({})), o = B(t, "body", 19, () => []); var s = R(), c = S(s); Y(c, 17, o, H, (v, m) => { let h = () => d(m).section, r = () => d(m).content; const l = N(() => h().toLowerCase().replace(/[^a-z0-9]/g, "")), a = N(() => n()[h()]); var i = Re(), k = _(i); { var f = y => { var g = R(), C = S(g); lt(C, () => d(a), (A, j) => { j(A, mt(r)) }), p(y, g) }, u = y => { var g = R(), C = S(g); Y(C, 17, r, H, (A, j, P, L) => { let O = () => d(j).type, T = () => d(j).value; const Q = N(() => n()[O()]), et = N(() => typeof T() == "string"); var ft = R(), Tt = S(ft); { var Mt = U => { var W = R(), at = S(W); lt(at, () => d(Q), (ot, nt) => { nt(ot, mt(T)) }), p(U, W) }, Rt = U => { var W = R(), at = S(W); { var ot = z => { var V = Me(), rt = _(V); kt(rt, T), b(V), p(z, V) }, nt = z => { var V = R(), rt = S(V); { var Dt = J => { var X = R(), st = S(X); pt(st, O, !1, (gt, ht) => { var bt = R(), jt = S(bt); kt(jt, T), p(ht, bt) }), p(J, X) }, qt = J => { var X = R(), st = S(X); pt(st, O, !1, (gt, ht) => { $t(gt, () => ({ ...T() })) }), p(J, X) }; G(rt, J => { d(et) ? J(Dt) : J(qt, !1) }, !0) } p(z, V) }; G(at, z => { O() === "text" ? z(ot) : z(nt, !1) }, !0) } p(U, W) }; G(Tt, U => { d(Q) ? U(Mt) : U(Rt, !1) }) } p(A, ft) }), p(y, g) }; G(k, y => { d(a) ? y(f) : y(u, !1) }) } b(i), q(() => Kt(i, "id", d(l))), p(v, i) }), p(e, s), tt() } var qe = E('<p> </p> <progress max="100"></progress>', 1); function je(e, t) { let n = B(t, "label", 3, "A"), o = B(t, "value", 3, 0); var s = qe(), c = S(s), v = _(c, !0); b(c); var m = x(c, 2); q(() => { D(v, n()), te(m, o()) }), p(e, s) } var Oe = E('<section id="cms"><h2>MicroCMS</h2> <code><pre> </pre></code> <!></section>'); function Be(e, t) { $(t, !0); const { body: n } = ae, o = { Test: je }; var s = Oe(), c = x(_(s), 2), v = _(c), m = _(v, !0); b(v), b(c); var h = x(c, 2); De(h, { get components() { return o }, get body() { return n } }), b(s), q(r => D(m, r), [() => Te.replace(/\t/g, " ")]), p(e, s), tt() } const Ie = (e, t = vt) => { var n = Fe(), o = _(n), s = _(o, !0); b(o); var c = x(o, 2), v = _(c, !0); b(c), b(n), q(() => { D(s, t().name), D(v, t().age) }), p(e, n) }; var Fe = E('<div class="person svelte-q3gttf"><p class="svelte-q3gttf"> </p> <p class="svelte-q3gttf"> </p></div>'), Ne = (e, t) => Ht(t), we = (e, t) => t.random(Math.floor(Math.random() * 10)), Pe = E('<h2>Svelte5</h2> <h3>Reactive variables 3 ways:</h3> <button class="svelte-q3gttf">count++</button> <p class="svelte-q3gttf"> </p> <p class="svelte-q3gttf"> </p> <p class="svelte-q3gttf"> </p> <h3>Children (previously slots):</h3> <div class="children"><!></div> <h3>Dispatch Event</h3> <button class="svelte-q3gttf">Random</button>  <h3>Snippets</h3> <div class="people svelte-q3gttf"></div>', 1); function Le(e, t) { $(t, !0), B(t, "age", 3, 30); const n = [{ name: "John", age: 30 }, { name: "Jill", age: 45 }]; let o = w(0), s = N(() => d(o) * 2), c = N(() => d(o) * 2), v = w(0); K(() => { I(v, d(o) * 2) }); var m = Pe(), h = x(S(m), 4); h.__click = [Ne, o]; var r = x(h, 2), l = _(r); b(r); var a = x(r, 2), i = _(a); b(a); var k = x(a, 2), f = _(k); b(k); var u = x(k, 4), y = _(u); Et(y, () => t.children ?? vt), b(u); var g = x(u, 4); g.__click = [we, t]; var C = x(g, 4); Y(C, 21, () => n, H, (A, j) => { Ie(A, () => d(j)) }), b(C), q(() => { D(l, `${d(o) ?? ""} doubled is ${d(s) ?? ""} (derived)`), D(i, `${d(o) ?? ""} doubled is ${d(c) ?? ""} (derived by)`), D(f, `${d(o) ?? ""} doubled is ${d(v) ?? ""} ($effect)`) }), p(e, m), tt() } Xt(["click"]); const Ue = (e, t) => { let n = w(Qt(e)), o = w(null), s = w(!0), c = w(void 0); const v = (r = !0) => { I(s, r, !0), r === !0 && (I(c, null), I(o, null)) }, m = async () => { try { const r = await fetch(d(n), t); if (!r.ok) throw new Error(`Unexpected error occurred (status ${r.status})`); let l; if (d(n).includes(".csv")) { const a = await r.text(); l = ce(a) } else l = await r.json(); return [null, l] } catch (r) { const { errorMessage: l = "Unexpected error eccurred" } = r; return [l, null] } }, h = async r => { v(!0); const [l, a] = await m(); if (r === d(n)) { if (l) { v(!1), I(c, l, !0); return } v(!1), I(o, a, !0) } }; return K(() => { h(d(n)) }), { get data() { return d(o) }, get loading() { return d(s) }, get error() { return d(c) }, get url() { return d(n) }, set url(r) { d(n) !== r && I(n, r, !0) } } }; var ze = E("<p>loading data...</p>"), Ve = E("<p> </p>"), Je = E("<p>data loaded</p> <pre> </pre>", 1), Ge = E('<div class="c"><h2>Load Data</h2> <div class="response"><!></div></div>'); function Ye(e, t) { $(t, !0); const n = `${oe}/assets/demo/test.csv`, o = Ue(n); K(() => { }); var s = Ge(), c = x(_(s), 2), v = _(c); { var m = r => { var l = ze(); p(r, l) }, h = r => { var l = R(), a = S(l); { var i = f => { var u = Ve(), y = _(u); b(u), q(() => D(y, `error: ${o.error ?? ""}`)), p(f, u) }, k = f => { var u = Je(), y = x(S(u), 2), g = _(y, !0); b(y), q(C => D(g, C), [() => JSON.stringify(o.data, null, 2)]), p(f, u) }; G(a, f => { o.error ? f(i) : f(k, !1) }, !0) } p(r, l) }; G(v, r => { o.loading ? r(m) : r(h, !1) }) } b(c), b(s), p(e, s), tt() } var He = E('<div id="demo" class="svelte-15aotx7"><h1>Demo</h1> <!> <!> <!> <!> <!> <!> <!> <!></div>'); function Qe(e) { let t = w(0); function n(i) { console.log(i) } var o = He(), s = x(_(o), 2); Le(s, { random: n, get value() { return d(t) }, set value(i) { I(t, i, !0) } }); var c = x(s, 2); le(c); var v = x(c, 2); pe(v); var m = x(v, 2); fe(m); var h = x(m, 2); xe(h); var r = x(h, 2); Be(r, {}); var l = x(r, 2); Ye(l, {}); var a = x(l, 2); Se(a), b(o), p(e, o) } function na(e) { Qe(e) } export { na as component };
