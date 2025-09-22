import React from 'react';

interface BonusItem {
  numero: number;
  titulo: string;
  valor: string;
  descricao: string;
  itens: string[];
  icone: string;
}

const BonusExclusivos: React.FC = () => {
  const bonus: BonusItem[] = [
    {
      numero: 1,
      titulo: "O ACELERADOR '10 REUNIÕES EM 10 DIAS'",
      valor: "R$ 2.997",
      descricao: "Sistema completo para agendar 10 reuniões qualificadas em apenas 10 dias, incluindo scripts, templates e estratégias de prospecção.",
      itens: [
        "Scripts de prospecção testados e aprovados",
        "Templates de mensagens para LinkedIn e WhatsApp",
        "Estratégia de follow-up automatizado",
        "Planilha de controle de prospecção",
        "Vídeo-aulas passo a passo"
      ],
      icone: "fas fa-rocket"
    },
    {
      numero: 2,
      titulo: "30 SCRIPTS DE WHATSAPP E INSTAGRAM",
      valor: "R$ 1.497",
      descricao: "Coleção completa de scripts testados para WhatsApp e Instagram que convertem prospects em clientes pagantes.",
      itens: [
        "Scripts para primeira abordagem",
        "Mensagens de follow-up",
        "Scripts para tratamento de objeções",
        "Templates para fechamento",
        "Estratégias de engajamento"
      ],
      icone: "fas fa-comments"
    },
    {
      numero: 3,
      titulo: "FUNIL DE VENDAS PRONTO PARA USAR",
      valor: "R$ 4.997",
      descricao: "Funil completo já estruturado e otimizado, pronto para ser implementado no seu negócio em questão de horas.",
      itens: [
        "Landing pages de alta conversão",
        "Sequência de e-mails automatizada",
        "Páginas de vendas otimizadas",
        "Sistema de checkout integrado",
        "Automações configuradas"
      ],
      icone: "fas fa-funnel-dollar"
    },
    {
      numero: 4,
      titulo: "MASTERCLASS: VENDAS DE ALTO TICKET",
      valor: "R$ 2.497",
      descricao: "Treinamento exclusivo sobre como vender serviços de alto valor (R$ 5k a R$ 50k) com técnicas avançadas de fechamento.",
      itens: [
        "Psicologia da venda de alto ticket",
        "Técnicas de descoberta de dor",
        "Scripts de fechamento avançados",
        "Como justificar preços altos",
        "Estratégias de follow-up premium"
      ],
      icone: "fas fa-gem"
    },
    {
      numero: 5,
      titulo: "SISTEMA DE AUTOMAÇÃO COMPLETO",
      valor: "R$ 3.497",
      descricao: "Todas as automações já configuradas e prontas para usar, incluindo CRM, e-mail marketing e chatbots.",
      itens: [
        "CRM configurado e personalizado",
        "Automações de e-mail marketing",
        "Chatbots para WhatsApp",
        "Integração com redes sociais",
        "Dashboards de acompanhamento"
      ],
      icone: "fas fa-cogs"
    },
    {
      numero: 6,
      titulo: "BANCO DE OBJEÇÕES E RESPOSTAS",
      valor: "R$ 1.997",
      descricao: "Mais de 100 objeções reais com suas respectivas respostas testadas e aprovadas para diferentes situações de venda.",
      itens: [
        "Objeções sobre preço",
        "Objeções sobre tempo",
        "Objeções sobre confiança",
        "Objeções sobre necessidade",
        "Scripts de reversão"
      ],
      icone: "fas fa-shield-alt"
    },
    {
      numero: 7,
      titulo: "ACESSO VITALÍCIO À COMUNIDADE VIP",
      valor: "R$ 997/mês",
      descricao: "Acesso permanente à nossa comunidade exclusiva com networking, mentorias e atualizações constantes do sistema.",
      itens: [
        "Grupo exclusivo no Telegram",
        "Mentorias mensais ao vivo",
        "Networking com outros especialistas",
        "Atualizações do sistema",
        "Suporte prioritário"
      ],
      icone: "fas fa-users"
    },
    {
      numero: 8,
      titulo: "CONSULTORIA ESTRATÉGICA PERSONALIZADA",
      valor: "R$ 5.997",
      descricao: "Sessão individual de 2 horas para personalizar todo o sistema para o seu nicho específico e acelerar seus resultados.",
      itens: [
        "Análise completa do seu negócio",
        "Estratégia personalizada",
        "Plano de ação detalhado",
        "Ajustes no sistema",
        "Acompanhamento por 30 dias"
      ],
      icone: "fas fa-user-tie"
    }
  ];

  const valorTotal: number = bonus.reduce((total: number, item: BonusItem) => {
    const valor = parseFloat(item.valor.replace('R$ ', '').replace('.', '').replace('/mês', ''));
    return total + valor;
  }, 0);

  return (
    <section id="bonus" className="py-20 bg-gradient-to-br from-vertex-dark to-gray-900 text-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-vertex-gold mb-6">
            Bônus Exclusivos
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Além do Sistema Vértice do Lucro completo, você também recebe estes 8 bônus 
            exclusivos que vão acelerar ainda mais seus resultados.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
          {bonus.map((item: BonusItem, index: number) => (
            <div key={index} className="bonus-card bg-white text-vertex-dark rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-shadow">
              <div className="flex items-start mb-6">
                <div className="bg-vertex-gold text-vertex-dark rounded-full w-16 h-16 flex items-center justify-center font-bold text-xl mr-6 flex-shrink-0">
                  {item.numero}
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <div className="text-vertex-gold text-2xl">
                      <i className={item.icone}></i>
                    </div>
                    <div className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                      VALOR: {item.valor}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-vertex-dark mb-3">
                    BÔNUS #{item.numero}: {item.titulo}
                  </h3>
                </div>
              </div>

              <p className="text-gray-600 mb-6">
                {item.descricao}
              </p>

              <div className="space-y-3">
                <h4 className="font-bold text-vertex-dark">O que você recebe:</h4>
                <ul className="space-y-2">
                  {item.itens.map((subitem: string, subindex: number) => (
                    <li key={subindex} className="flex items-start">
                      <i className="fas fa-check text-vertex-gold mr-3 mt-1 flex-shrink-0"></i>
                      <span className="text-gray-600">{subitem}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Resumo do Valor */}
        <div className="bg-vertex-gold text-vertex-dark rounded-2xl p-8 md:p-12 max-w-4xl mx-auto mt-16">
          <div className="text-center">
            <h3 className="text-3xl md:text-4xl font-bold mb-6">
              Valor Total dos Bônus
            </h3>
            <div className="text-6xl md:text-7xl font-bold mb-4">
              R$ {valorTotal.toLocaleString('pt-BR')}
            </div>
            <p className="text-xl mb-8">
              Isso mesmo! Você está recebendo mais de R$ 23 mil em bônus exclusivos 
              que vão acelerar seus resultados e garantir seu sucesso.
            </p>
            
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-2xl font-bold mb-2">8 Bônus</div>
                <div className="text-sm">Exclusivos</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold mb-2">R$ 23.479</div>
                <div className="text-sm">Em Valor Agregado</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold mb-2">100%</div>
                <div className="text-sm">Gratuito para Você</div>
              </div>
            </div>
          </div>
        </div>

        {/* Urgência dos Bônus */}
        <div className="bg-red-600 text-white rounded-2xl p-8 max-w-4xl mx-auto mt-12">
          <div className="text-center">
            <div className="text-4xl mb-4">
              <i className="fas fa-exclamation-triangle"></i>
            </div>
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              ATENÇÃO: Bônus por Tempo Limitado!
            </h3>
            <p className="text-lg mb-6">
              Estes bônus exclusivos só estão disponíveis para as primeiras 50 pessoas 
              que se inscreverem no Sistema Vértice do Lucro. Após isso, eles serão 
              vendidos separadamente pelo valor total de R$ 23.479.
            </p>
            <div className="bg-white text-red-600 rounded-lg p-4 inline-block">
              <div className="font-bold text-lg">Restam apenas:</div>
              <div className="text-3xl font-bold" id="vagas-restantes">23 vagas</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BonusExclusivos;