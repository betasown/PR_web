import Head from 'next/head';
import '../globals.css';

export default function Contact() {
    return (
        <>
            <Head>
                <meta charSet="utf-8" />
                <meta name="author" content="Jérémy GALLET" />
                <meta name="description" content="Contactez-nous en utilisant notre formulaire." />
                <title>Contact - Lebonplan</title>
                <link rel="stylesheet" href="/styles.css" />
            </Head>
            <main>
                <section className="center-text">
                    <h1>Nous sommes à votre écoute</h1>
                    <p>Vous pouvez nous contacter directement via <a href="mailto:info@lebonplan.fr">notre adresse de courriel</a> ou utilisez le formulaire ci-dessous. Nous vous répondrons dans tous les cas dans les délais les plus bref.</p>
                    <article>
                        <h2>Vous avez la parole</h2>
                        <form>
                            <label>Nom complet<br /><input name="fullname" type="text" size="50" required /></label>
                            <br /><br />
                            <label>Votre message<br /><textarea name="feedbacks" rows="5" cols="100"></textarea></label>
                            <br /><br />
                            <button type="submit">Envoyer</button>&nbsp;<button type="reset" className="btn-secondary">Effacer</button>
                        </form>
                    </article>
                </section>
            </main>
        </>
    );
}
