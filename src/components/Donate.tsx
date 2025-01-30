import React from 'react';

const Donate = () => {
  return (
    <section className="py-20 bg-gray-200">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-semibold mb-6">Faites un don</h2>
        <p className="text-lg mb-8">
          Votre soutien est essentiel pour nous permettre de continuer à aider les enfants dans les orphelinats.
        </p>
        <a href="https://www.paypal.com/donate" className="btn btn-primary">
          Faites un don via PayPal
        </a>
      </div>
    </section>
  );
};

export default Donate;
