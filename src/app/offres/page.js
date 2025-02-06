'use client';

import Link from 'next/link';
import '../globals.css';

export default function Offres() {
  const offres = [
    {
      id: 1,
      titre: "Stage - Administrateur Système et Réseau H/F",
      entreprise: "IBM", 
      localisation: "Pornichet - 44",
      datePublication: "29/01/2025",
      reference: "123X744",
      tags: ["3 mois", "Bac+2", "Bac+3", "Systèmes, Réseaux, Cloud"]
    },
    {
      id: 2,
      titre: "Stage - Développeur Full Stack H/F",
      entreprise: "Microsoft",
      localisation: "Paris - 75", 
      datePublication: "28/01/2025",
      reference: "456Y789",
      tags: ["6 mois", "Bac+4", "Bac+5", "React, Node.js, MongoDB"]
    },
    {
      id: 3,
      titre: "Stage - Data Scientist H/F",
      entreprise: "Orange",
      localisation: "Lyon - 69",
      datePublication: "27/01/2025",
      reference: "789Z123", 
      tags: ["4 mois", "Bac+5", "Python, Machine Learning"]
    },
    {
      id: 4,
      titre: "Stage - UX/UI Designer H/F",
      entreprise: "Apple",
      localisation: "Nantes - 44",
      datePublication: "26/01/2025",
      reference: "321A456",
      tags: ["5 mois", "Bac+3", "Bac+4", "Figma, Adobe XD"]
    },
    {
      id: 5,
      titre: "Stage - DevOps Engineer H/F",
      entreprise: "Amazon",
      localisation: "Bordeaux - 33",
      datePublication: "25/01/2025",
      reference: "654B987",
      tags: ["6 mois", "Bac+4", "Bac+5", "Docker, Kubernetes, AWS"]
    },
    {
      id: 6,
      titre: "Stage - Développeur Mobile H/F",
      entreprise: "Google",
      localisation: "Lille - 59",
      datePublication: "24/01/2025",
      reference: "987C321",
      tags: ["4 mois", "Bac+4", "React Native, Flutter"]
    },
    {
      id: 7,
      titre: "Stage - Cybersécurité H/F [Fake]",
      entreprise: "Thales",
      localisation: "Toulouse - 31",
      datePublication: "23/01/2025",
      reference: "147D258",
      tags: ["6 mois", "Bac+5", "Sécurité, Pentest"]
    },
    {
      id: 8,
      titre: "Stage - Business Intelligence H/F [Fake]",
      entreprise: "Capgemini",
      localisation: "Rennes - 35",
      datePublication: "22/01/2025",
      reference: "258E369",
      tags: ["5 mois", "Bac+4", "Bac+5", "Power BI, Tableau"]
    }
  ];

  return (
    <div>
      <main>
        <h2>Nos offres de stage</h2>
        <center><x>Découvrez nos dernières offres de stage et trouvez celle qui vous correspond !</x></center>

        <section className="offers-list">
          {offres.map(offre => (
            <article key={offre.id} className="offer-card">
              <h3>{offre.titre}</h3>
              <p className="subtitle">
                <strong>
                  {offre.entreprise} | {offre.localisation} |
                  Publiée le {offre.datePublication} |
                  Réf. {offre.reference}
                </strong>
              </p>

              <div className="tags">
                {offre.tags.map((tag, index) => (
                  <span key={index}>{tag}</span>
                ))}
              </div>

              <Link href={`/offres/${offre.id}`}>
                <button>Voir l&apos;offre</button>
              </Link>
            </article>
          ))}
        </section>
      </main>
    </div>
  );
}
