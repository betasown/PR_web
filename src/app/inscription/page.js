"use client";

import Head from 'next/head';
import { useState } from 'react';
import '../globals.css';

export default function Inscription() {
  const [formData, setFormData] = useState({
    title: 'ms',
    lastname: '',
    surname: '',
    email: '',
    password: '',
    password_confirm: '',
  });

  const [errors, setErrors] = useState({
    lastname: '',
    surname: '',
    email: '',
    password: '',
    password_confirm: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validateForm = () => {
    let formErrors = {};
    let formIsValid = true;

    // Vérification du nom
    if (!formData.lastname.trim()) {
      formErrors.lastname = 'Le nom est requis';
      formIsValid = false;
    } else {
      formData.lastname = formData.lastname.toUpperCase(); // Capitalisation automatique du nom
    }

    // Vérification du prénom
    if (!formData.surname.trim()) {
      formErrors.surname = 'Le prénom est requis';
      formIsValid = false;
    }

    // Vérification de l'email
    if (!formData.email) {
      formErrors.email = 'L\'email est requis';
      formIsValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      formErrors.email = 'L\'email doit être valide';
      formIsValid = false;
    }

    // Vérification du mot de passe
    if (!formData.password) {
      formErrors.password = 'Le mot de passe est requis';
      formIsValid = false;
    } else if (formData.password.length < 8) {
      formErrors.password = 'Le mot de passe doit comporter au moins 8 caractères';
      formIsValid = false;
    }

    // Vérification de la confirmation du mot de passe
    if (!formData.password_confirm) {
      formErrors.password_confirm = 'La confirmation du mot de passe est requise';
      formIsValid = false;
    } else if (formData.password !== formData.password_confirm) {
      formErrors.password_confirm = 'Les mots de passe ne correspondent pas';
      formIsValid = false;
    }

    setErrors(formErrors);
    return formIsValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      // Formulaire validé, vous pouvez envoyer ou traiter les données ici
      alert('Formulaire soumis avec succès!');
    }
  };

  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="author" content="Jérémy GALLET" />
        <meta name="description" content="Inscrivez-vous pour obtenir une meilleure expérience utilisateur." />
        <title>Inscription - Lebonplan</title>
        <link rel="stylesheet" href="styles.css" />
      </Head>
      <main>
        <section>
          <h1>Créez un compte</h1>
          <p>Pour déposer une annonce ou bénéficier d'une expérience personnalisée avec du contenu en lien avec vos recherches inscrivez-vous, c'est rapide et gratuit !</p>
          <article>
            <h2>Formulaire d'inscription</h2>
            <form onSubmit={handleSubmit}>
              <label>
                Civilité<br />
                <select name="title" value={formData.title} onChange={handleInputChange}>
                  <option value="ms">Madame</option>
                  <option value="mr">Monsieur</option>
                </select>
              </label>
              <br /><br />
              <label>
                Nom<br />
                <input
                  name="lastname"
                  type="text"
                  size="50"
                  value={formData.lastname}
                  onChange={handleInputChange}
                  required
                />
                {errors.lastname && <span className="error">{errors.lastname}</span>}
              </label>
              <br /><br />
              <label>
                Prénom<br />
                <input
                  name="surname"
                  type="text"
                  size="50"
                  value={formData.surname}
                  onChange={handleInputChange}
                  required
                />
                {errors.surname && <span className="error">{errors.surname}</span>}
              </label>
              <br /><br />
              <label>
                Courriel<br />
                <input
                  name="email"
                  type="email"
                  size="30"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                />
                {errors.email && <span className="error">{errors.email}</span>}
              </label>
              <br /><br />
              <label>
                Mot de passe<br />
                <input
                  name="password"
                  type="password"
                  size="30"
                  value={formData.password}
                  onChange={handleInputChange}
                  required
                />
                {errors.password && <span className="error">{errors.password}</span>}
              </label>
              <br />
              <label>
                Confirmation<br />
                <input
                  name="password_confirm"
                  type="password"
                  size="30"
                  minLength="8"
                  value={formData.password_confirm}
                  onChange={handleInputChange}
                  required
                />
                {errors.password_confirm && <span className="error">{errors.password_confirm}</span>}
              </label>
              <br /><br />
              <button type="submit">Envoyer</button>&nbsp;<button type="reset" className="btn-secondary">Effacer</button>
            </form>
          </article>
        </section>
      </main>
    </>
  );
}
