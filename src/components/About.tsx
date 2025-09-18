import React from 'react';
import { Target, Eye, Handshake, Users } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: Users,
      title: 'ComVet',
      description: 'Somos uma clínica veterinária completa, dedicada ao cuidado integral da saúde dos seus pets. Com mais de 10 anos de experiência, oferecemos serviços de excelência com amor e dedicação.',
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: Target,
      title: 'Missão',
      description: 'Proporcionar cuidados veterinários de alta qualidade, promovendo a saúde e bem-estar dos animais através de tratamentos humanizados e tecnologia avançada.',
      color: 'from-green-500 to-green-600'
    },
    {
      icon: Eye,
      title: 'Visão',
      description: 'Ser referência em medicina veterinária na região, reconhecida pela excelência no atendimento, inovação tecnológica e compromisso com a vida animal.',
      color: 'from-purple-500 to-purple-600'
    },
    {
      icon: Handshake,
      title: 'Valores',
      description: 'Ética, transparência, respeito à vida animal, atendimento humanizado, excelência profissional e compromisso com a satisfação dos nossos clientes.',
      color: 'from-orange-500 to-orange-600'
    }
  ];

  return (
    <section id="sobre" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Sobre a <span className="gradient-text">ComVet</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Conheça nossa história, missão e valores que nos guiam no cuidado dos seus pets
          </p>
        </div>

        {/* Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => {
            const IconComponent = value.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300"
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${value.color} rounded-2xl flex items-center justify-center mb-6 mx-auto`}>
                  <IconComponent className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">
                  {value.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed text-center">
                  {value.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Stats Section */}
        <div className="mt-20 bg-gradient-to-r from-primary-600 to-secondary-500 rounded-3xl p-8 md:p-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-white">
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">10+</div>
              <div className="text-lg opacity-90">Anos de Experiência</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">5000+</div>
              <div className="text-lg opacity-90">Pets Atendidos</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">24h</div>
              <div className="text-lg opacity-90">Atendimento</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">100%</div>
              <div className="text-lg opacity-90">Dedicação</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;