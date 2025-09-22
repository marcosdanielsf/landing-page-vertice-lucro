import React from 'react';

interface Stat {
  number: string;
  label: string;
  icon: string;
}

interface Achievement {
  title: string;
  description: string;
  icon: string;
}

const About: React.FC = () => {
  const stats: Stat[] = [
    { number: '500+', label: 'Empresas Transformadas', icon: '🏢' },
    { number: '300%', label: 'ROI Médio Alcançado', icon: '📈' },
    { number: '98%', label: 'Taxa de Satisfação', icon: '❤️' },
    { number: '5 Anos', label: 'de Experiência', icon: '🏆' }
  ];

  const achievements: Achievement[] = [
    {
      title: 'Metodologia Comprovada',
      description: 'Framework exclusivo desenvolvido ao longo de 5 anos de experiência no mercado.',
      icon: '🥇'
    },
    {
      title: 'Resultados Mensuráveis',
      description: 'Acompanhamento em tempo real com métricas claras e objetivos bem definidos.',
      icon: '🎯'
    },
    {
      title: 'Equipe Especializada',
      description: 'Profissionais certificados com expertise em vendas, marketing e gestão.',
      icon: '👥'
    }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-blue-400 to-purple-500 rounded-full blur-3xl transform translate-x-48 -translate-y-48"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-purple-400 to-pink-500 rounded-full blur-3xl transform -translate-x-40 translate-y-40"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
              <span className="mr-2">ℹ️</span>
              Sobre a Vertex
            </div>
            
            <h2 className="text-4xl lg:text-5xl font-bold leading-tight">
              Transformamos{' '}
              <span className="text-blue-600">Negócios em</span>{' '}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Máquinas de Vendas
              </span>
            </h2>
            
            <div className="space-y-4 text-lg text-gray-600">
              <p>
                A Vertex Solutions nasceu da necessidade de empresas que buscam crescimento 
                acelerado e sustentável. Nossa missão é transformar negócios através de 
                estratégias inovadoras, tecnologia de ponta e metodologias comprovadas.
              </p>
              
              <p>
                Com mais de 500 empresas transformadas e um ROI médio de 300%, somos 
                referência em aceleração de negócios no mercado brasileiro.
              </p>
            </div>
            
            {/* Achievements */}
            <div className="space-y-6">
              {achievements.map((achievement, index) => (
                <div 
                  key={index}
                  className="flex items-start space-x-4 p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-1"
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center text-white text-xl">
                    {achievement.icon}
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-gray-900 mb-2">{achievement.title}</h4>
                    <p className="text-gray-600">{achievement.description}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <a 
              href="#contact" 
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              <span>Conhecer Nossa Metodologia</span>
              <span className="ml-2">→</span>
            </a>
          </div>
          
          {/* Visual Content */}
          <div className="space-y-8">
            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <div 
                  key={index}
                  className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 text-center"
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  <div className="text-3xl mb-3">{stat.icon}</div>
                  <div className="text-3xl font-bold text-gray-900 mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-600 text-sm">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
            
            {/* Main Visual Card */}
            <div className="bg-gradient-to-br from-blue-600 to-purple-700 p-8 rounded-2xl text-white shadow-2xl relative overflow-hidden">
              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-20">
                <div className="absolute top-0 right-0 w-32 h-32 bg-white rounded-full blur-2xl transform translate-x-16 -translate-y-16"></div>
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-white rounded-full blur-xl transform -translate-x-12 translate-y-12"></div>
              </div>
              
              <div className="relative z-10">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-white bg-opacity-20 rounded-xl flex items-center justify-center text-2xl mr-4">
                    🏆
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold">Certificação Vertex</h3>
                    <p className="text-blue-100">Metodologia Exclusiva</p>
                  </div>
                </div>
                
                <p className="text-blue-50 mb-6 leading-relaxed">
                  Nossa metodologia proprietária combina as melhores práticas de vendas, 
                  marketing digital e gestão empresarial para garantir resultados excepcionais.
                </p>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="w-6 h-6 bg-green-400 rounded-full flex items-center justify-center mr-2">
                      ✓
                    </div>
                    <span className="text-sm">Metodologia Validada</span>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold">100%</div>
                    <div className="text-sm text-blue-100">Eficácia</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;