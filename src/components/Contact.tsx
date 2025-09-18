import React from 'react';
import { MapPin, Phone, Clock, Mail, AlertCircle } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contato" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Entre em <span className="gradient-text">Contato</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Estamos sempre prontos para atender você e seu pet. Agende sua consulta ou tire suas dúvidas
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            {/* Emergency Alert */}
            <div className="bg-red-50 border border-red-200 rounded-2xl p-6">
              <div className="flex items-center mb-4">
                <AlertCircle className="w-6 h-6 text-red-600 mr-3" />
                <h3 className="text-xl font-bold text-red-800">Emergência 24h</h3>
              </div>
              <p className="text-red-700 mb-4">
                Para emergências veterinárias, ligue imediatamente:
              </p>
              <a
                href="tel:+5518355512345"
                className="inline-flex items-center bg-red-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-red-700 transition-colors"
              >
                <Phone className="w-5 h-5 mr-2" />
                (18) 3555-1234
              </a>
            </div>

            {/* Contact Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white rounded-2xl p-6 shadow-lg">
                <div className="w-12 h-12 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-xl flex items-center justify-center mb-4">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Telefone</h3>
                <p className="text-gray-600 mb-2">(18) 3555-1234</p>
                <p className="text-gray-600">(18) 99999-9999</p>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-lg">
                <div className="w-12 h-12 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-xl flex items-center justify-center mb-4">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">E-mail</h3>
                <p className="text-gray-600">contato@comvet.com.br</p>
                <p className="text-gray-600">emergencia@comvet.com.br</p>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-lg">
                <div className="w-12 h-12 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-xl flex items-center justify-center mb-4">
                  <Clock className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Horário</h3>
                <p className="text-gray-600">Seg-Sex: 8h às 18h</p>
                <p className="text-gray-600">Sáb: 8h às 12h</p>
                <p className="text-gray-600">Emergência: 24h</p>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-lg">
                <div className="w-12 h-12 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-xl flex items-center justify-center mb-4">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Endereço</h3>
                <p className="text-gray-600">Rua Espírito Santo, 396</p>
                <p className="text-gray-600">Centro - Echaporã/SP</p>
                <p className="text-gray-600">CEP: 19830-000</p>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="flex-1 bg-gradient-to-r from-primary-600 to-secondary-500 text-white px-8 py-4 rounded-xl font-semibold hover:shadow-lg transform hover:scale-105 transition-all">
                Agendar Consulta
              </button>
              <button className="flex-1 border-2 border-primary-600 text-primary-600 px-8 py-4 rounded-xl font-semibold hover:bg-primary-50 transition-all">
                WhatsApp
              </button>
            </div>
          </div>

          {/* Map */}
          <div className="bg-white rounded-2xl overflow-hidden shadow-lg">
            <div className="h-full min-h-[500px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3687.977175453793!2d-50.20644008504285!3d-22.42988488525636!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjLCsDI1JzQ3LjYiUyA1MMKwMTInMTUuMyJX!5e0!3m2!1spt-BR!2sbr!4v1615316125498!5m2!1spt-BR!2sbr"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: '500px' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Localização da ComVet"
              ></iframe>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-primary-600 to-secondary-500 rounded-3xl p-8 md:p-12 text-white">
            <h3 className="text-3xl md:text-4xl font-bold mb-4">
              Pronto Para Cuidar do Seu Pet?
            </h3>
            <p className="text-xl mb-8 opacity-90">
              Agende uma consulta hoje mesmo e proporcione o melhor cuidado para seu companheiro
            </p>
            <button className="bg-white text-primary-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-50 transform hover:scale-105 transition-all">
              Agendar Agora
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;