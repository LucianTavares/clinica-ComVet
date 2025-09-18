import React from 'react';
import { Heart, Facebook, Instagram, Phone, Mail, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center mb-4">
              <img 
                src="clinica-comvet/imagens/logo/logo-com-descrição/Horizontal/PNG/comvet_logo_horizontal_branco.png" 
                alt="ComVet" 
                className="h-12 w-auto"
              />
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Há mais de 10 anos cuidando da saúde e bem-estar dos seus pets com amor, 
              dedicação e tecnologia avançada. Sua clínica veterinária de confiança em Echaporã/SP.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="w-10 h-10 bg-primary-600 rounded-full flex items-center justify-center hover:bg-primary-700 transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-primary-600 rounded-full flex items-center justify-center hover:bg-primary-700 transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <a href="#sobre" className="text-gray-300 hover:text-white transition-colors">
                  Sobre Nós
                </a>
              </li>
              <li>
                <a href="#servicos" className="text-gray-300 hover:text-white transition-colors">
                  Serviços
                </a>
              </li>
              <li>
                <a href="#produtos" className="text-gray-300 hover:text-white transition-colors">
                  Produtos
                </a>
              </li>
              <li>
                <a href="#depoimentos" className="text-gray-300 hover:text-white transition-colors">
                  Depoimentos
                </a>
              </li>
              <li>
                <a href="#contato" className="text-gray-300 hover:text-white transition-colors">
                  Contato
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contato</h3>
            <ul className="space-y-3">
              <li className="flex items-center">
                <Phone className="w-5 h-5 mr-3 text-primary-400" />
                <span className="text-gray-300">(18) 3555-1234</span>
              </li>
              <li className="flex items-center">
                <Mail className="w-5 h-5 mr-3 text-primary-400" />
                <span className="text-gray-300">contato@comvet.com.br</span>
              </li>
              <li className="flex items-start">
                <MapPin className="w-5 h-5 mr-3 text-primary-400 mt-1" />
                <span className="text-gray-300">
                  Rua Espírito Santo, 396<br />
                  Centro - Echaporã/SP<br />
                  CEP: 19830-000
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Emergency Banner */}
        <div className="mt-8 p-4 bg-red-600 rounded-xl text-center">
          <p className="font-semibold">
            🚨 EMERGÊNCIA 24H: (18) 3555-1234 - Atendimento veterinário de urgência
          </p>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2025 ComVet - Clínica Veterinária e Pet Shop. Todos os direitos reservados.
          </p>
          <div className="flex items-center mt-4 md:mt-0">
            <span className="text-gray-400 text-sm mr-2">Desenvolvido com</span>
            <Heart className="w-4 h-4 text-red-500 mr-2" />
            <span className="text-gray-400 text-sm">por</span>
            <a
              href="https://www.instagram.com/luciantavaresmartins/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary-400 hover:text-primary-300 ml-1 text-sm font-medium"
            >
              Lucian Tavares
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;