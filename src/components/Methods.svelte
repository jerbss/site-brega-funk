<script>
	import copy from "$data/copy.json";

	const team = [
		{
			name: "Jamille Eliane",
			role: "Direção de Arte, Arquitetura da Informação & Design",
			instagram: "https://www.instagram.com/millezarcenis/",
			color: "var(--neon-pink, #ff007f)",
			shadow: "rgba(255, 0, 127, 0.25)"
		},
		{
			name: "Jerbesson Silva",
			role: "Desenvolvimento, Extração, Análise & Visualização de Dados",
			instagram: "https://www.instagram.com/jerdelicia/",
			color: "var(--neon-green, #d4ff00)",
			shadow: "rgba(212, 255, 0, 0.25)"
		},
		{
			name: "Renan Nunes",
			role: "Pesquisa & Escrita",
			instagram: "https://www.instagram.com/renan.nunes_/",
			color: "var(--neon-cyan, #00f3ff)",
			shadow: "rgba(0, 243, 255, 0.25)"
		}
	];
</script>

<section id="methods-credits">
	<div class="wrapper">
		<!-- Methodology Section -->
		<div class="methodology-container">
			{#each copy.methods as { type, value }}
				{#if type === "header"}
					<h3>{@html value}</h3>
				{:else if type === "text"}
					<p>{@html value}</p>
				{/if}
			{/each}
		</div>

		<!-- Divider line -->
		<div class="divider"></div>

		<!-- Credits Section -->
		<div class="credits-container">
			<h3>Créditos</h3>
			<div class="team-grid">
				{#each team as member}
					<div class="member-card" style="--accent: {member.color}; --glow: {member.shadow}">
						<div class="card-glow"></div>
						<div class="card-content">
							<h4 class="member-name">{member.name}</h4>
							<p class="member-role">{member.role}</p>
							
							<a href={member.instagram} target="_blank" rel="noopener noreferrer" class="instagram-link" aria-label={`Instagram de ${member.name}`}>
								<svg class="instagram-icon" viewBox="0 0 24 24" width="20" height="20">
									<path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.051.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
								</svg>
								<span>@{member.instagram.split("/").filter(Boolean).pop()}</span>
							</a>
						</div>
					</div>
				{/each}
			</div>
		</div>
	</div>
</section>

<style>
	section {
		padding: 5rem 2rem;
		background: transparent;
	}

	h3 {
		font-family: "Syne", sans-serif;
		font-size: 1.75rem;
		font-weight: 800;
		text-transform: uppercase;
		margin: 0 0 1rem 0;
		letter-spacing: -0.5px;
		color: #ffffff;
		text-shadow: 0 0 10px rgba(255, 255, 255, 0.1);
	}

	.wrapper {
		max-width: 900px;
		margin: 0 auto;
		background: rgba(10, 10, 10, 0.6);
		backdrop-filter: blur(25px);
		-webkit-backdrop-filter: blur(25px);
		border: 1px solid rgba(255, 255, 255, 0.08);
		border-radius: var(--border-radius, 16px);
		padding: 2.5rem;
		box-shadow: 0 20px 50px rgba(0, 0, 0, 0.4);
	}

	.methodology-container p {
		color: rgba(255, 255, 255, 0.7);
		line-height: 1.6;
		font-size: var(--16px, 1rem);
		margin: 0;
	}

	.divider {
		height: 1px;
		background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.15), transparent);
		margin: 2.5rem 0;
	}

	.team-grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
		gap: 1.5rem;
		margin-top: 1.5rem;
	}

	.member-card {
		position: relative;
		background: rgba(255, 255, 255, 0.03);
		border: 1.5px solid rgba(255, 255, 255, 0.08);
		border-radius: 12px;
		padding: 1.5rem;
		overflow: hidden;
		transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
		display: flex;
		flex-direction: column;
		justify-content: space-between;
	}

	.member-card:hover {
		transform: translateY(-5px);
		border-color: var(--accent);
		box-shadow: 0 10px 25px var(--glow);
		background: rgba(255, 255, 255, 0.05);
	}

	.card-glow {
		position: absolute;
		top: -50%;
		left: -50%;
		width: 200%;
		height: 200%;
		background: radial-gradient(circle, var(--glow) 0%, transparent 70%);
		opacity: 0;
		transition: opacity 0.3s ease;
		pointer-events: none;
		z-index: 0;
	}

	.member-card:hover .card-glow {
		opacity: 0.15;
	}

	.card-content {
		position: relative;
		z-index: 1;
		height: 100%;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
	}

	.member-name {
		font-family: "Syne", sans-serif;
		font-size: 1.25rem;
		font-weight: 700;
		margin: 0 0 0.5rem 0;
		color: #ffffff;
	}

	.member-card:hover .member-name {
		color: var(--accent);
	}

	.member-role {
		font-size: 0.9rem;
		color: rgba(255, 255, 255, 0.6);
		line-height: 1.4;
		margin: 0 0 1.5rem 0;
		flex-grow: 1;
	}

	.instagram-link {
		display: inline-flex;
		align-items: center;
		gap: 0.5rem;
		text-decoration: none;
		color: rgba(255, 255, 255, 0.8);
		font-size: 0.85rem;
		font-weight: 500;
		transition: color 0.2s ease;
		align-self: flex-start;
		border-radius: 4px;
	}

	.instagram-icon {
		fill: rgba(255, 255, 255, 0.8);
		transition: fill 0.2s ease, transform 0.2s ease;
	}

	.instagram-link:hover {
		color: var(--accent);
	}

	.instagram-link:hover .instagram-icon {
		fill: var(--accent);
		transform: scale(1.1);
	}

	@media (max-width: 600px) {
		.wrapper {
			padding: 1.5rem;
		}

		.team-grid {
			grid-template-columns: 1fr;
		}
		
		section {
			padding: 3rem 1rem;
		}
	}
</style>
