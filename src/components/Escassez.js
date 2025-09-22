import React, { useState, useEffect } from 'react';

const Escassez = ({ onOpenPopup }) => {
  const [timeLeft, setTimeLeft] = useState({
    days: 2,
    hours: 14,
    minutes: 32,
    seconds: 45
  });

  const [vagasRestantes, setVagasRestantes] = useState(23);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prevTime => {
        let { days, hours, minutes, seconds } = prevTime;
        
        if (seconds > 0) {
          seconds--;
        } else if (minutes > 0) {
          minutes--;
          seconds = 59;
        } else if (hours > 0) {
          hours--;
          minutes = 59;
          seconds = 59;
        } else if (days > 0) {
          days--;
          hours = 23;
          minutes = 59;
          seconds = 59;
        }
        
        return { days, hours, minutes, seconds };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const bonusUrgencia = [
    {
      titulo: "BÔNUS AÇÃO RÁPIDA #1",
      nome: "Sessão de Estratégia Individual",
      valor: "R$ 2.997",
      descricao: "Sessão individual de 1 hora para acelerar sua implementação",
      condicao: "Apenas para as próximas 10 pessoas"
    },
    {
      titulo: "BÔNUS AÇÃO RÁPIDA #2", 
      nome: "Acesso VIP por 6 Meses",
      valor: "R$ 5.994",
      descricao: "Acesso estendido à comunidade VIP e mentorias exclusivas",
      condicao: "Apenas para as próximas 15 pessoas"
    },
    {
      titulo: "BÔNUS AÇÃO RÁPIDA #3",
      nome: "Kit de Templates Premium",
      valor: "R$ 1.497",
      descricao: "Mais de 50 templates prontos para usar em seu negócio",
      condicao: "Apenas para as próximas 20 pessoas"
    }
  ];

  return (
    <section id="escassez" className="py-20 bg-gradient-to-br from-red-600 to-red-800 text-white">
      <div className="container mx-auto px-6">
        {/* Contador de Tempo */}
        <div className="text-center mb-16">
          <div className="text-4xl mb-4">
            <i className="fas fa-exclamation-triangle"></i>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            ÚLTIMAS HORAS!
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Esta oferta especial expira em breve e as vagas são limitadas. 
            Não perca a oportunidade de transformar seu conhecimento em lucro.
          </p>

          <div className="bg-black bg-opacity-50 rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-6">Tempo Restante:</h3>
            <div className="grid grid-cols-4 gap-4">
              <div className="text-center">
                <div className="bg-white text-red-600 rounded-lg p-4 text-3xl font-bold mb-2">
                  {timeLeft.days.toString().padStart(2, '0')}
                </div>
                <div className="text-sm">DIAS</div>
              </div>
              <div className="text-center">
                <div className="bg-white text-red-600 rounded-lg p-4 text-3xl font-bold mb-2">
                  {timeLeft.hours.toString().padStart(2, '0')}
                </div>
                <div className="text-sm">HORAS</div>
              </div>
              <div className="text-center">
                <div className="bg-white text-red-600 rounded-lg p-4 text-3xl font-bold mb-2">
                  {timeLeft.minutes.toString().padStart(2, '0')}
                </div>
                <div className="text-sm">MIN</div>
              </div>
              <div className="text-center">
                <div className="bg-white text-red-600 rounded-lg p-4 text-3xl font-bold mb-2">
                  {timeLeft.seconds.toString().padStart(2, '0')}
                </div>
                <div className="text-sm">SEG</div>
              </div>
            </div>
          </div>
        </div>

        {/* Vagas Limitadas */}
        <div className="bg-white text-vertex-dark rounded-2xl p-8 md:p-12 max-w-4xl mx-auto mb-16">
          <div className="text-center">
            <div className="text-red-600 text-4xl mb-4">
              <i className="fas fa-users"></i>
            </div>
            <h3 className="text-3xl md:text-4xl font-bold mb-6">
              Apenas {vagasRestantes} Vagas Restantes!
            </h3>
            <p className="text-lg text-gray-600 mb-8">
              Para garantir a qualidade do atendimento e acompanhamento personalizado, 
              limitamos esta turma a apenas 50 pessoas. Restam apenas {vagasRestantes} vagas.
            </p>

            <div className="bg-gray-100 rounded-lg p-6 mb-8">
              <div className="flex justify-between items-center mb-4">
                <span className="font-bold">Vagas Ocupadas:</span>
                <span className="font-bold">{50 - vagasRestantes}/50</span>
              </div>
              <div className="w-full bg-gray-300 rounded-full h-4">
                <div 
                  className="bg-red-600 h-4 rounded-full transition-all duration-500"
                  style={{ width: `${((50 - vagasRestantes) / 50) * 100}%` }}
                ></div>
              </div>
              <div className="text-sm text-gray-600 mt-2">
                {Math.round(((50 - vagasRestantes) / 50) * 100)}% das vagas já foram preenchidas
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-red-600 mb-1">50</div>
                <div className="text-sm text-gray-600">Vagas Totais</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-red-600 mb-1">{50 - vagasRestantes}</div>
                <div className="text-sm text-gray-600">Já Preenchidas</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-green-600 mb-1">{vagasRestantes}</div>
                <div className="text-sm text-gray-600">Ainda Disponíveis</div>
              </div>
            </div>
          </div>
        </div>

        {/* Bônus de Ação Rápida */}
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold mb-6">
              Bônus Exclusivos de Ação Rápida
            </h3>
            <p className="text-xl">
              Além de todos os bônus já incluídos, quem agir agora recebe estes bônus extras:
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {bonusUrgencia.map((bonus, index) => (
              <div key={index} className="bg-white text-vertex-dark rounded-2xl p-8 shadow-xl">
                <div className="text-center mb-6">
                  <div className="bg-red-600 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 font-bold text-xl">
                    {index + 1}
                  </div>
                  <div className="text-red-600 font-bold text-sm mb-2">
                    {bonus.titulo}
                  </div>
                  <h4 className="text-xl font-bold text-vertex-dark mb-2">
                    {bonus.nome}
                  </h4>
                  <div className="bg-red-100 text-red-800 rounded-lg p-2 inline-block">
                    <span className="font-bold">VALOR: {bonus.valor}</span>
                  </div>
                </div>

                <p className="text-gray-600 text-center mb-6">
                  {bonus.descricao}
                </p>

                <div className="bg-yellow-100 text-yellow-800 rounded-lg p-3 text-center">
                  <div className="font-bold text-sm">
                    {bonus.condicao}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <div className="bg-yellow-400 text-vertex-dark rounded-2xl p-6 max-w-2xl mx-auto">
              <h4 className="text-2xl font-bold mb-2">
                Valor Total dos Bônus de Ação Rápida:
              </h4>
              <div className="text-4xl font-bold">
                R$ 10.488
              </div>
              <div className="text-lg mt-2">
                100% GRATUITO para quem agir agora!
              </div>
            </div>
          </div>
        </div>

        {/* Razões para Urgência */}
        <div className="bg-black bg-opacity-50 rounded-2xl p-8 md:p-12 max-w-5xl mx-auto mt-16">
          <div className="text-center mb-8">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Por Que Esta Oferta é Por Tempo Limitado?
            </h3>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-xl font-bold mb-4">
                <i className="fas fa-users text-red-400 mr-3"></i>
                Atendimento Personalizado
              </h4>
              <p className="text-gray-300 mb-6">
                Para garantir que cada aluno receba atenção individual e suporte de qualidade, 
                limitamos o número de participantes por turma.
              </p>
            </div>

            <div>
              <h4 className="text-xl font-bold mb-4">
                <i className="fas fa-calendar text-red-400 mr-3"></i>
                Cronograma de Implementação
              </h4>
              <p className="text-gray-300 mb-6">
                O sistema funciona melhor quando todos os participantes começam juntos, 
                criando uma dinâmica de grupo que acelera os resultados.
              </p>
            </div>

            <div>
              <h4 className="text-xl font-bold mb-4">
                <i className="fas fa-chart-line text-red-400 mr-3"></i>
                Momento de Mercado
              </h4>
              <p className="text-gray-300 mb-6">
                O mercado de consultoria está em alta e quem entrar agora terá vantagem 
                competitiva sobre quem esperar.
              </p>
            </div>

            <div>
              <h4 className="text-xl font-bold mb-4">
                <i className="fas fa-gift text-red-400 mr-3"></i>
                Bônus Exclusivos
              </h4>
              <p className="text-gray-300 mb-6">
                Os bônus de ação rápida têm custo real para nós e só podemos oferecê-los 
                para um número limitado de pessoas.
              </p>
            </div>
          </div>
        </div>

        {/* Call to Action Final */}
        <div className="text-center mt-16">
          <div className="bg-vertex-gold text-vertex-dark rounded-2xl p-8 max-w-3xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Não Deixe Esta Oportunidade Passar!
            </h3>
            <p className="text-lg mb-6">
              Quando o tempo acabar, esta oferta sai do ar e você terá que esperar 
              pela próxima turma (que pode demorar meses para abrir).
            </p>
            <div className="text-center">
              <button 
                className="bg-red-600 text-white px-8 py-4 rounded-lg text-xl font-bold hover:bg-red-700 transition-colors"
                onClick={onOpenPopup}
              >
                QUERO GARANTIR MINHA VAGA AGORA!
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Escassez;