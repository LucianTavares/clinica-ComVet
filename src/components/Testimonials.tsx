import React from 'react';
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Maria Silva',
      pet: 'Luna (Golden Retriever)',
      rating: 5,
      comment: 'Excelente atendimento! A Dra. Ana cuidou da Luna com muito carinho e profissionalismo. Recomendo a todos!',
      image: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop'
    },
    {
      name: 'João Santos',
      pet: 'Mimi (Gato Persa)',
      rating: 5,
      comment: 'A ComVet salvou a vida da minha gatinha! Atendimento 24h impecável e veterinários muito competentes.',
      image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop'
    },
    {
      name: 'Ana Costa',
      pet: 'Rex (Pastor Alemão)',
      rating: 5,
      comment: 'Melhor clínica da região! Equipamentos modernos, ambiente limpo e profissionais dedicados. O Rex adora vir aqui!',
      image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop'
    },
    {
      name: 'Carlos Oliveira',
      pet: 'Bella (Labrador)',
      rating: 5,
      comment: 'Atendimento excepcional desde a recepção até o veterinário. A Bella sempre sai de lá feliz e saudável!',
      image: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop'
    },
    {
      name: 'Fernanda Lima',
      pet: 'Toby (Shih Tzu)',
      rating: 5,
      comment: 'Confiança total na equipe da ComVet. Cuidam do Toby há 3 anos e sempre com muito amor e dedicação.',
      image: 'https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop'
    },
    {
      name: 'Roberto Ferreira',
      pet: 'Nina (SRD)',
      rating: 5,
      comment: 'Preços justos, atendimento humanizado e resultados excelentes. A Nina foi muito bem cuidada na cirurgia.',
      image: 'https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop'
    }
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        className={`w-5 h-5 ${
          index < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
        }`}
      />
    ));
  };

  return (
    <section id="depoimentos" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            O que Nossos <span className="gradient-text">Clientes</span> Dizem
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Depoimentos reais de tutores que confiam na ComVet para cuidar dos seus pets
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-2xl p-8 hover:bg-white hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300 border border-gray-100 relative"
            >
              <Quote className="absolute top-4 right-4 w-8 h-8 text-primary-200" />
              
              <div className="flex items-center mb-6">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full object-cover mr-4"
                />
                <div>
                  <h3 className="font-bold text-gray-900 text-lg">
                    {testimonial.name}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Tutor(a) de {testimonial.pet}
                  </p>
                </div>
              </div>

              <div className="flex mb-4">
                {renderStars(testimonial.rating)}
              </div>

              <p className="text-gray-700 leading-relaxed italic">
                "{testimonial.comment}"
              </p>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-16 bg-gradient-to-r from-primary-600 to-secondary-500 rounded-3xl p-8 md:p-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-white">
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">98%</div>
              <div className="text-lg opacity-90">Satisfação</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">5.0</div>
              <div className="text-lg opacity-90">Avaliação Média</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">500+</div>
              <div className="text-lg opacity-90">Avaliações</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">95%</div>
              <div className="text-lg opacity-90">Recomendação</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;