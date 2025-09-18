import React from 'react';
import { ShoppingBag, Award, Truck } from 'lucide-react';

const Products = () => {
  const categories = [
    {
      title: 'Rações Premium',
      description: 'As melhores marcas de ração para todas as idades e necessidades especiais',
      image: 'https://images.pexels.com/photos/1254140/pexels-photo-1254140.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
      brands: ['Royal Canin', 'Hill\'s', 'Pedigree', 'Whiskas', 'Premier Pet']
    },
    {
      title: 'Medicamentos',
      description: 'Medicamentos veterinários de alta qualidade para tratamento e prevenção',
      image: 'https://images.pexels.com/photos/3683107/pexels-photo-3683107.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
      brands: ['Bayer', 'Zoetis', 'Virbac', 'Ceva', 'Ourofino']
    },
    {
      title: 'Acessórios',
      description: 'Tudo que seu pet precisa para uma vida confortável e divertida',
      image: 'https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
      brands: ['Ferplast', 'Chalesco', 'Jambo Pet', 'Furacão Pet', 'Pawise']
    }
  ];

  const features = [
    {
      icon: Award,
      title: 'Produtos Certificados',
      description: 'Apenas marcas reconhecidas e aprovadas pelos órgãos competentes'
    },
    {
      icon: Truck,
      title: 'Entrega Rápida',
      description: 'Entregamos em toda Echaporã e região com agilidade e segurança'
    },
    {
      icon: ShoppingBag,
      title: 'Variedade Completa',
      description: 'Tudo que seu pet precisa em um só lugar, com os melhores preços'
    }
  ];

  return (
    <section id="produtos" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Nossos <span className="gradient-text">Produtos</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Pet shop completo com as melhores marcas e produtos para o bem-estar do seu pet
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {categories.map((category, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={category.image}
                  alt={category.title}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                />
              </div>
              
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  {category.title}
                </h3>
                
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {category.description}
                </p>

                <div className="mb-4">
                  <h4 className="font-semibold text-gray-900 mb-2">Principais Marcas:</h4>
                  <div className="flex flex-wrap gap-2">
                    {category.brands.map((brand, brandIndex) => (
                      <span
                        key={brandIndex}
                        className="bg-primary-100 text-primary-700 px-3 py-1 rounded-full text-sm font-medium"
                      >
                        {brand}
                      </span>
                    ))}
                  </div>
                </div>

                <button className="w-full bg-gradient-to-r from-primary-600 to-secondary-500 text-white py-3 rounded-xl font-semibold hover:shadow-lg transform hover:scale-105 transition-all">
                  Ver Produtos
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 text-center shadow-lg hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-2xl flex items-center justify-center mb-6 mx-auto">
                  <IconComponent className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-primary-600 to-secondary-500 rounded-3xl p-8 md:p-12 text-white">
            <h3 className="text-3xl md:text-4xl font-bold mb-4">
              Encontre Tudo Para Seu Pet
            </h3>
            <p className="text-xl mb-8 opacity-90">
              Visite nossa loja física ou entre em contato para conhecer todos os nossos produtos
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-primary-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-50 transform hover:scale-105 transition-all">
                Visitar Loja
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-primary-600 transform hover:scale-105 transition-all">
                Ver Catálogo
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;