"use client";

import '../globals.css';
import Head from 'next/head';

export default function Ml(){
    return (
        <>
            <Head>
                <meta charSet="utf-8" />
                <meta name="author" content="Jérémy GALLET" />
                <meta name="description" content="Contactez-nous en utilisant notre formulaire." />
                <title>Contact - Lebonplan</title>
            </Head>
            <main>
            <h2>Mentions Légales</h2>

            <section class="legal-notice">
                <h3>1. Éditeur du site</h3>
                <p>Le site <strong>Lebonplan</strong> est édité par :</p>
                <ul>
                    <li><strong>Nom de l'entreprise</strong></li>
                    <li><strong>Forme juridique</strong> : SARL</li>
                    <li><strong>Capital social</strong> : 100 000 €</li>
                    <li><strong>Siège social</strong> : Adresse complète</li>
                    <li><strong>Numéro SIRET</strong> : 123 456 789 00010</li>
                    <li><strong>Numéro de TVA intracommunautaire</strong> : FR 12 123456789</li>
                </ul>

                <h3>2. Directeur de la publication</h3>
                <p>Le directeur de la publication du site est <strong>Nom du directeur</strong>.</p>

                <h3>3. Hébergement du site</h3>
                <p>Le site est hébergé par :</p>
                <ul>
                    <li><strong>Nom de l'hébergeur</strong></li>
                    <li><strong>Adresse de l'hébergeur</strong></li>
                    <li><strong>Téléphone de l'hébergeur</strong></li>
                </ul>

                <h3>4. Propriété intellectuelle</h3>
                <p>Le contenu du site, incluant les textes, images, logos et autres éléments, est protégé par des droits de propriété intellectuelle. Toute reproduction, distribution, ou utilisation de ces éléments sans autorisation préalable est interdite.</p>

                <h3>5. Protection des données personnelles</h3>
                <p>Conformément à la législation en vigueur, nous vous informons que vos données personnelles collectées par le site Lebonplan sont traitées dans le respect de votre vie privée. Vous avez un droit d'accès, de rectification, et de suppression de vos données personnelles en nous contactant via notre page de contact.</p>

                <h3>6. Cookies</h3>
                <p>Le site utilise des cookies pour améliorer votre expérience utilisateur. En poursuivant votre navigation sur ce site, vous acceptez l’utilisation de ces cookies. Pour plus d'informations, consultez notre politique de cookies.</p>

                <h3>7. Responsabilité</h3>
                <p>Lebonplan ne saurait être tenu responsable des dommages directs ou indirects résultant de l’utilisation du site, notamment en cas de bug, d’interruption de service ou de perte de données.</p>

                <h3>8. Modifications des mentions légales</h3>
                <p>Nous nous réservons le droit de modifier ces mentions légales à tout moment. Toute modification sera publiée sur cette page.</p>

                <h3>9. Loi applicable</h3>
                <p>Les présentes mentions légales sont régies par la législation française. Tout litige relatif à l'utilisation du site Lebonplan sera soumis à la compétence des tribunaux français.</p>
            </section>
            </main>
        </>
    );
}