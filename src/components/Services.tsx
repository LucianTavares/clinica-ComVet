import React from 'react';
import { Stethoscope, Scissors, Syringe, Heart, X, Microscope } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Stethoscope,
      title: 'Consultas Veterinárias',
      description: 'Consultas completas com veterinários especializados para diagnóstico e tratamento de diversas patologias.',
      features: ['Exame clínico completo', 'Diagnóstico preciso', 'Plano de tratamento personalizado']
    },
    {
      icon: Scissors,
      title: 'Banho e Tosa',
      description: 'Serviços de higiene e estética para manter seu pet sempre limpo, bonito e saudável.',
      features: ['Banho com produtos especializados', 'Tosa higiênica e estética', 'Corte de unhas']
    },
    {
      icon: Syringe,
      title: 'Vacinação',
      description: 'Programa completo de vacinação para proteger seu pet contra as principais doenças.',
      features: ['Vacinas importadas', 'Calendário personalizado', 'Carteira de vacinação']
    },
    {
      icon: Heart,
      title: 'Cirurgias',
      description: 'Centro cirúrgico equipado para procedimentos de baixa, média e alta complexidade.',
      features: ['Cirurgias eletivas', 'Procedimentos de emergência', 'Pós-operatório completo']
    },
    {
      icon: X,
      title: 'Emergências 24h',
      description: 'Atendimento de urgência e emergência disponível 24 horas por dia, todos os dias.',
      features: ['Plantão veterinário', 'UTI veterinária', 'Internação monitorada']
    },
    {
      icon: Microscope,
      title: 'Exames Laboratoriais',
      description: 'Laboratório próprio com equipamentos modernos para exames rápidos e precisos.',
      features: ['Hemograma completo', 'Bioquímica sanguínea', 'Exames de imagem']
    }
  ];

  return (
    <section id="servicos" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Nossos <span className="gradient-text">Serviços</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Oferecemos uma gama completa de serviços veterinários com tecnologia avançada e profissionais especializados
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div
                key={index}
                className="bg-gray-50 rounded-2xl p-8 hover:bg-white hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300 border border-gray-100"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-2xl flex items-center justify-center mb-6">
                  <IconComponent className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {service.title}
                </h3>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {service.description}
                </p>

                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-700">
                      <div className="w-2 h-2 bg-primary-500 rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-primary-600 to-secondary-500 rounded-3xl p-8 md:p-12 text-white">
            <h3 className="text-3xl md:text-4xl font-bold mb-4">
              Precisa de Atendimento Veterinário?
            </h3>
            <p className="text-xl mb-8 opacity-90">
              Nossa equipe está pronta para cuidar do seu pet com todo carinho e profissionalismo
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-primary-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-50 transform hover:scale-105 transition-all">
                Agendar Consulta
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-primary-600 transform hover:scale-105 transition-all">
                Emergência 24h
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;