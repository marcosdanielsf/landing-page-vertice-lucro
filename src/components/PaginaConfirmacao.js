import React from 'react';

const PaginaConfirmacao = ({ onVoltar }) => {
  return (
    <div className="confirmacao-container">
      {/* Header da Confirmação */}
      <div className="confirmacao-header">
        <div className="confirmacao-icon">
          <i className="fas fa-check-circle"></i>
        </div>
        <h1 className="confirmacao-titulo">
          SUA APLICAÇÃO PARA O "VÉRTICE DO LUCRO" FOI RECEBIDA COM SUCESSO!
        </h1>
        <p className="confirmacao-subtitulo">
          Parabéns pela sua decisão de buscar vendas previsíveis.
        </p>
      </div>

      {/* Seção 1 - Próximos Passos */}
      <section className="confirmacao-secao">
        <h2 className="secao-titulo">
          O Que Acontece Agora? (Leia Com Atenção)
        </h2>
        <p className="secao-intro">
          Nossa equipe está revisando sua aplicação neste exato momento. Para garantir que possamos te ajudar da melhor forma possível, siga estes passos importantes:
        </p>
        
        <div className="passos-container">
          <div className="passo">
            <div className="passo-numero">1</div>
            <div className="passo-conteudo">
              <h3>Verifique seu E-mail/WhatsApp</h3>
              <p>Em alguns minutos, você receberá uma mensagem nossa confirmando o recebimento da aplicação e, se aplicável, um link para agendar sua "Análise de Oportunidade" de 15 minutos (se você ainda não agendou).</p>
            </div>
          </div>

          <div className="passo">
            <div className="passo-numero">2</div>
            <div className="passo-conteudo">
              <h3>Agende sua Análise de Oportunidade (Se Solicitado)</h3>
              <p>Se o link for enviado, clique e escolha o melhor horário. Essa é a etapa onde vamos entender seu cenário atual e mostrar como o "Vértice do Lucro" se encaixa perfeitamente no seu negócio para gerar 10-30 vendas em 90 dias.</p>
            </div>
          </div>

          <div className="passo">
            <div className="passo-numero">3</div>
            <div className="passo-conteudo">
              <h3>Adicione nosso Contato</h3>
              <p>Para garantir que você não perca nenhuma comunicação importante, salve nosso número de WhatsApp <strong>(11) 99999-9999</strong> e e-mail <strong>contato@verticelucro.com</strong> em seus contatos.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Seção 2 - Pré-Framing da Chamada */}
      <section className="confirmacao-secao analise-secao">
        <h2 className="secao-titulo">
          Prepare-se Para a Sua "Análise de Oportunidade": O Que Você Vai Descobrir
        </h2>
        <p className="analise-intro">
          Esta não é uma "ligação de vendas" comum. É uma sessão estratégica de 15 minutos focada exclusivamente em você e seu negócio de mentoria.
        </p>

        <div className="analise-beneficios">
          <h3>Nela, vamos:</h3>
          <ul className="beneficios-lista">
            <li>
              <i className="fas fa-chart-line"></i>
              Diagnosticar seus maiores gargalos atuais em vendas e previsibilidade.
            </li>
            <li>
              <i className="fas fa-route"></i>
              Mapear o caminho mais rápido para você atingir 10-30 novas vendas em 90 dias usando o Sistema Vértice do Lucro.
            </li>
            <li>
              <i className="fas fa-cogs"></i>
              Mostrar exatamente como o Kommo (CRM) será configurado para você em 72h, economizando seu tempo.
            </li>
            <li>
              <i className="fas fa-question-circle"></i>
              Responder todas as suas perguntas para você ter total clareza sobre como podemos te ajudar a escalar.
            </li>
          </ul>
        </div>

        <div className="preparacao-box">
          <h3>Para aproveitar ao máximo, pedimos que você venha preparado para compartilhar:</h3>
          <div className="preparacao-itens">
            <div className="preparacao-item">
              <i className="fas fa-exclamation-triangle"></i>
              <span>Seu principal desafio de vendas/previsibilidade hoje.</span>
            </div>
            <div className="preparacao-item">
              <i className="fas fa-target"></i>
              <span>Seus objetivos de faturamento para os próximos 90 dias.</span>
            </div>
            <div className="preparacao-item">
              <i className="fas fa-clock"></i>
              <span>Qual é o nível de tempo/esforço que você pode dedicar para implementar um sistema.</span>
            </div>
          </div>
        </div>
      </section>

      {/* Seção 3 - Credibilidade e Urgência */}
      <section className="confirmacao-secao credibilidade-secao">
        <h2 className="secao-titulo">Enquanto Você Aguarda...</h2>
        
        <div className="testimonial-box">
          <div className="testimonial-content">
            <div className="testimonial-foto">
              <i className="fas fa-user-circle"></i>
            </div>
            <div className="testimonial-texto">
              <blockquote>
                "Eu não acreditava que seria possível ter um funil de vendas funcionando em 72h. O Vértice do Lucro entregou isso e em 60 dias eu já tinha 18 novas vendas. É real!"
              </blockquote>
              <cite>— Maria Silva, Mentora de Emagrecimento</cite>
            </div>
          </div>
        </div>

        <div className="urgencia-box">
          <div className="urgencia-icon">
            <i className="fas fa-hourglass-half"></i>
          </div>
          <p>
            <strong>Lembrete:</strong> As vagas para novas implantações são limitadas a 10 por mês para garantir nossa qualidade de entrega. Ao agendar sua Análise, você está dando um passo crucial para garantir seu lugar.
          </p>
        </div>
      </section>

      {/* Seção 4 - Recurso de Valor Adicional */}
      <section className="confirmacao-secao recurso-secao">
        <h2 className="secao-titulo">Quer Acelerar Seu Conhecimento Agora?</h2>
        <p>Enquanto você aguarda nosso contato, separamos um recurso exclusivo para você:</p>
        
        <div className="recurso-box">
          <div className="recurso-icon">
            <i className="fas fa-play-circle"></i>
          </div>
          <div className="recurso-content">
            <h3>Vídeo Exclusivo: "Os 3 Pilares de Uma Oferta Irresistível"</h3>
            <p>Um conteúdo de 3 minutos que vai te ajudar a entender como criar ofertas que seus clientes não conseguem recusar.</p>
            <button className="recurso-btn">
              <i className="fas fa-play"></i>
              Assistir Agora
            </button>
          </div>
        </div>
      </section>

      {/* Seção Final - Contato e CTA */}
      <section className="confirmacao-secao contato-secao">
        <h2 className="secao-titulo">Alguma Dúvida Urgente?</h2>
        <p>Se você tem alguma pergunta imediata, entre em contato conosco:</p>
        
        <div className="contatos-container">
          <div className="contato-item">
            <i className="fab fa-whatsapp"></i>
            <div>
              <strong>WhatsApp:</strong>
              <span>(11) 99999-9999</span>
            </div>
          </div>
          <div className="contato-item">
            <i className="fas fa-envelope"></i>
            <div>
              <strong>E-mail:</strong>
              <span>contato@verticelucro.com</span>
            </div>
          </div>
        </div>

        <div className="cta-final">
          <button onClick={onVoltar} className="btn-voltar">
            <i className="fas fa-arrow-left"></i>
            Voltar para a Página Principal
          </button>
        </div>
      </section>
    </div>
  );
};

export default PaginaConfirmacao;