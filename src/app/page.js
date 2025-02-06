'use client';

import Link from 'next/link';
import './globals.css';

export default function Home() {
  return (
    <div>
      <main>
        <section>
          <h1>Le meilleur endroit pour trouver ou déposer votre annonce !</h1>

          <article>
            <h2>Catégories</h2>
            <ul>
              <li><Link href="">Développement Web</Link></li>
              <li><Link href="">Développement Mobile</Link></li>
              <li><Link href="">Data Science</Link></li>
              <li><Link href="">Cybersécurité</Link></li>
              <li><Link href="">DevOps</Link></li>
              <li><Link href="">Intelligence Artificielle</Link></li>
              <li><Link href="">Réseaux et Systèmes</Link></li>
            </ul>
          </article>

          <article>
            <h2>Derniers offres de stage ajoutés</h2>
            <table>
              <thead>
                <tr>
                  <th>Intitulé</th>
                  <th>Localisation</th>
                  <th>Entreprise</th>
                  <th>Durée</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Développeur Web</td>
                  <td>Paris</td>
                  <td>TechCorp</td>
                  <td>6 mois</td>
                </tr>
                <tr>
                  <td>Développeur Mobile</td>
                  <td>Bordeaux</td>
                  <td>AppDev</td>
                  <td>5 mois</td>
                </tr>
                <tr>
                  <td>Analyste Programmeur</td>
                  <td>Lille</td>
                  <td>DataSolutions</td>
                  <td>4 mois</td>
                </tr>
              </tbody>
            </table>
          </article>
        </section>
      </main>
    </div>
  );
}
