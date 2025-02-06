"use client";

import { useParams } from 'next/navigation';
import Head from 'next/head';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import '../../globals.css'; 

export default function Offres() {
  const { id } = useParams();
  const [file, setFile] = useState(null);
  const [formData, setFormData] = useState({
    nom: "",
    prenom: "",
    courriel: "",
    message: "",
  });
  const [error, setError] = useState("");
  const [scrollPosition, setScrollPosition] = useState(0);

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
  ];

  const offre = offres.find(offre => offre.id === parseInt(id));

  if (!offre) {
    return (
      <div className="error-page">
      <main>
        <h2>Offre non trouvée</h2>
        <p>Désolé, l'offre que vous cherchez n'existe pas ou n'est plus disponible.</p>
        <button onClick={() => window.location.href = '/offres'} className="btn">Retour aux offres</button>
      </main>
      </div>
    );
  }

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData({
      ...formData,
      [id]: value,
    });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const fileSize = file.size / 1024 / 1024; // Taille en Mo
      const validFormats = ["pdf", "doc", "docx", "odt", "rtf", "jpg", "png"];

      if (fileSize > 2) {
        setError("Le fichier ne doit pas dépasser 2 Mo.");
        return;
      }

      const fileExtension = file.name.split(".").pop().toLowerCase();
      if (!validFormats.includes(fileExtension)) {
        setError("Le format de fichier n'est pas valide. Accepte : .pdf, .doc, .docx, .odt, .rtf, .jpg, .png.");
        return;
      }

      setFile(file);
      setError(""); 
    }
  };

  const handleRemoveFile = () => {
    setFile(null);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { nom, prenom, courriel, message } = formData;

    if (!nom || !prenom || !courriel || !message) {
      setError("Tous les champs obligatoires doivent être remplis.");
      return;
    }

    if (!validateEmail(courriel)) {
      setError("Le courriel doit être valide.");
      return;
    }

    if (error) {
      setError("");
    }

    alert("Formulaire soumis !");
  };

  const validateEmail = (email) => {
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return regex.test(email);
  };

  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Postuler à une offre de stage</title>
        <link rel="stylesheet" href="/styles.css" />
      </Head>

      <main>

        <h2>Postuler à une offre de stage</h2>
        <p>Vous pouvez ici répondre directement à l’offre de stage qui a été déposée par l’entreprise.</p>

        {/* Affichage des détails de l'offre */}
        <section className="offer-details">
          <h3>{offre.titre}</h3>
          <p className="subtitle"><strong>{offre.entreprise} | {offre.localisation} | Publiée le {offre.datePublication} | Réf. {offre.reference}</strong></p>

          <div className="tags">
            {offre.tags.map((tag, index) => (
              <span key={index}>{tag}</span>
            ))}
          </div>
        </section>

        <h3>Envoyez votre candidature dès maintenant !</h3>

        <form className="application-form" onSubmit={handleSubmit}>
          {/* Formulaire avec validation */}
          <label htmlFor="civilite">Civilité</label>
          <select id="civilite" onChange={handleInputChange}>
            <option value="madame">Madame</option>
            <option value="monsieur">Monsieur</option>
          </select>

          <label htmlFor="nom">Nom</label>
          <input 
            type="text" 
            id="nom" 
            value={formData.nom} 
            onChange={handleInputChange} 
            required 
          />

          <label htmlFor="prenom">Prénom</label>
          <input 
            type="text" 
            id="prenom" 
            value={formData.prenom} 
            onChange={handleInputChange} 
            required 
          />

          <label htmlFor="courriel">Courriel</label>
          <input 
            type="email" 
            id="courriel" 
            value={formData.courriel} 
            onChange={handleInputChange} 
            required 
          />

          <fieldset>
            <legend>A propos de vous</legend>
            <input type="checkbox" id="permis" />
            <label htmlFor="permis">Permis B</label>
            <input type="checkbox" id="vehicule" />
            <label htmlFor="vehicule">Véhicule</label>
            <input type="checkbox" id="certifications" />
            <label htmlFor="certifications">Certifications (Microsoft, Cisco...)</label>
          </fieldset>

          <fieldset>
            <legend>Vous êtes majeur ?</legend>
            <input type="radio" id="majeur" name="age" value="majeur" />
            <label htmlFor="majeur">Majeur</label>
            <input type="radio" id="mineur" name="age" value="mineur" />
            <label htmlFor="mineur">Mineur</label>
          </fieldset>

          <label htmlFor="message">Votre message au recruteur</label>
          <textarea 
            id="message" 
            value={formData.message} 
            onChange={handleInputChange} 
            required 
          />

          {/* Bouton pour ajouter un fichier (affiche le nom du fichier si sélectionné) */}
          <label htmlFor="cv" className="btn file-btn">
            {file ? file.name : "Ajoute mon CV"}
          </label>
          <input 
            type="file" 
            id="cv" 
            accept=".pdf, .doc, .docx, .odt, .rtf, .jpg, .png" 
            hidden 
            onChange={handleFileChange}
          />

          {/* Bouton pour supprimer le fichier (s'affiche uniquement si un fichier est sélectionné) */}
          {file && (
            <button 
              type="button" 
              className="btn-secondary" 
              onClick={handleRemoveFile} 
            >
              Supprimer le fichier
            </button>
          )}

          <div>
            <button type="submit" className="btn">Postuler</button>
            <button type="reset" className="btn-secondary">Réinitialiser</button>
          </div>

          {/* Affichage des erreurs */}
          {error && <p className="error-message">{error}</p>}

          <p className="terms">
            En cliquant sur "postuler", vous acceptez les <a href="/cgu" target="_blank">CGU</a> et déclarez avoir pris connaissance de <a href="/ml" target="_blank">la protection des données</a> de notre site.
          </p>
        </form>
      </main>
    </>
  );
}
