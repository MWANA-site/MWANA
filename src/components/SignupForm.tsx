import React, { useState } from 'react';

const SignupForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    description: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Ajouter la logique pour envoyer ces données à un serveur ou une API
    console.log('Form data submitted: ', formData);
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-semibold mb-6">Inscrivez votre orphelinat/association</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Nom de l'organisation"
            className="mb-4 p-2 w-full md:w-1/2 rounded-lg border"
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email de contact"
            className="mb-4 p-2 w-full md:w-1/2 rounded-lg border"
          />
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            placeholder="Description de l'organisation"
            className="mb-4 p-2 w-full md:w-1/2 rounded-lg border"
          />
          <button type="submit" className="btn btn-primary">
            Soumettre
          </button>
        </form>
      </div>
    </section>
  );
};

export default SignupForm;
