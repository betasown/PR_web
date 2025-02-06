"use client";

import Head from 'next/head';
import '../globals.css';

export default function Connexion() {
	return (
		<>
			<Head>
				<meta charSet="utf-8" />
				<meta name="author" content="Jérémy GALLET" />
				<meta name="description" content="Connectez-vous à votre espace." />
				<title>Connexion - Lebonplan</title>
				<link rel="stylesheet" href="/styles.css" />
			</Head>
			<main>
				<section>
					<h1>Bonjour !</h1>
					<p>Connectez-vous pour retrouver vos annonces sauvegardées et déposées.</p>
					<article>
						<h2>Formulaire de connexion</h2>
						<form>
							<label>
								Courriel<br />
								<input name="email" type="email" size="50" required />
							</label>
							<br /><br />
							<label>
								Mot de passe<br />
								<input name="password" type="password" size="50" required />
							</label>
							<br /><br />
							<button type="submit">Connexion</button>&nbsp;
							<button type="reset" className="btn-secondary">Effacer</button>
						</form>
					</article>
				</section>
			</main>
		</>
	);
}
