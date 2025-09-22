import React from 'react';

const ProvaSocial = () => {
  const depoimentos = [
    {
      nome: "Carlos Mendes",
      empresa: "Financial Consulting",
      resultado: "From $3K to $17K/month",
      tempo: "in 4 months",
      depoimento: "Before Vertex, I had knowledge but didn't know how to transform it into consistent sales. The system gave me the structure I needed. Today I have a sales machine that works 24/7.",
      foto: "https://ui-avatars.com/api/?name=Carlos+Mendes&background=6366f1&color=fff&size=150"
    },
    {
      nome: "Ana Paula Silva",
      empresa: "Relationship Coach",
      resultado: "From $1.6K to $9K/month",
      tempo: "in 3 months",
      depoimento: "What impressed me most was the speed of results. In just 3 months, I multiplied my revenue by 5. The automation system is incredible, I work less and earn much more.",
      foto: "https://ui-avatars.com/api/?name=Ana+Paula+Silva&background=6366f1&color=fff&size=150"
    },
    {
      nome: "Roberto Oliveira",
      empresa: "Digital Marketing Consultant",
      resultado: "From $5K to $24K/month",
      tempo: "in 6 months",
      depoimento: "I was already experienced in marketing, but Vertex showed me how to structure a real business. Today I have revenue predictability and an operation that scales itself.",
      foto: "https://ui-avatars.com/api/?name=Roberto+Oliveira&background=6366f1&color=fff&size=150"
    },
    {
      nome: "Mariana Costa",
      empresa: "Business Mentor",
      resultado: "From $2.4K to $13K/month",
      tempo: "in 5 months",
      depoimento: "The support is exceptional. Whenever I needed it, I had immediate support. The system works exactly as promised. My life has completely changed.",
      foto: "https://ui-avatars.com/api/?name=Mariana+Costa&background=6366f1&color=fff&size=150"
    },
    {
      nome: "Fernando Santos",
      empresa: "Business Consultant",
      resultado: "From $4K to $19K/month",
      tempo: "in 4 months",
      depoimento: "I tried several strategies before, but nothing worked consistently. Vertex gave me the complete system I needed. Today I have predictable results every month.",
      foto: "https://ui-avatars.com/api/?name=Fernando+Santos&background=6366f1&color=fff&size=150"
    },
    {
      nome: "Juliana Ferreira",
      empresa: "Executive Coach",
      resultado: "From $3.6K to $15.6K/month",
      tempo: "in 5 months",
      depoimento: "What surprised me most was how the system adapts to my niche. It's not a generic formula, it's personalized for my business. The results speak for themselves.",
      foto: "https://ui-avatars.com/api/?name=Juliana+Ferreira&background=6366f1&color=fff&size=150"
    }
  ];

  return (
    <section id="prova-social" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-vertex-dark mb-6">
            Real Results from Real Clients
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            See how other consultants and specialists transformed their knowledge 
            into profitable and scalable businesses with the Vertex Profit System.
          </p>
        </div>

        {/* Estatísticas Gerais */}
        <div className="grid md:grid-cols-4 gap-8 mb-16">
          <div className="text-center">
            <div className="text-4xl font-bold text-vertex-gold mb-2">500+</div>
            <div className="text-gray-600">Clients Served</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-vertex-gold mb-2">$10M+</div>
            <div className="text-gray-600">Generated in Sales</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-vertex-gold mb-2">4.2x</div>
            <div className="text-gray-600">Average Increase</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-vertex-gold mb-2">90%</div>
            <div className="text-gray-600">Success Rate</div>
          </div>
        </div>

        {/* Depoimentos */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {depoimentos.map((depoimento, index) => (
            <div key={index} className="bg-gray-50 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-center mb-6">
                <img 
                  src={depoimento.foto} 
                  alt={depoimento.nome}
                  className="w-16 h-16 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-bold text-vertex-dark">{depoimento.nome}</h4>
                  <p className="text-sm text-gray-600">{depoimento.empresa}</p>
                </div>
              </div>

              <div className="mb-6">
                <div className="bg-vertex-gold text-vertex-dark rounded-lg p-4 text-center mb-4">
                  <div className="font-bold text-lg">{depoimento.resultado}</div>
                  <div className="text-sm">{depoimento.tempo}</div>
                </div>
              </div>

              <blockquote className="text-gray-700 italic">
                "{depoimento.depoimento}"
              </blockquote>

              <div className="flex text-vertex-gold mt-4">
                {[...Array(5)].map((_, i) => (
                  <i key={i} className="fas fa-star"></i>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Video Testimonials */}
        <div className="mt-20 text-center">
          <h3 className="text-3xl font-bold text-vertex-dark mb-8">
            See Results in Video
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="video-depoimento bg-gray-100 rounded-2xl p-6 hover:shadow-lg transition-shadow">
              <div className="aspect-video bg-gray-300 rounded-lg mb-4 flex items-center justify-center">
                <i className="fas fa-play-circle text-4xl text-vertex-gold"></i>
              </div>
              <h4 className="font-bold text-vertex-dark mb-2">Carlos Mendes</h4>
              <p className="text-sm text-gray-600">How I went from $3K to $17K/month</p>
            </div>

            <div className="video-depoimento bg-gray-100 rounded-2xl p-6 hover:shadow-lg transition-shadow">
              <div className="aspect-video bg-gray-300 rounded-lg mb-4 flex items-center justify-center">
                <i className="fas fa-play-circle text-4xl text-vertex-gold"></i>
              </div>
              <h4 className="font-bold text-vertex-dark mb-2">Ana Paula Silva</h4>
              <p className="text-sm text-gray-600">Multiplying by 5 in just 3 months</p>
            </div>

            <div className="video-depoimento bg-gray-100 rounded-2xl p-6 hover:shadow-lg transition-shadow">
              <div className="aspect-video bg-gray-300 rounded-lg mb-4 flex items-center justify-center">
                <i className="fas fa-play-circle text-4xl text-vertex-gold"></i>
              </div>
              <h4 className="font-bold text-vertex-dark mb-2">Roberto Oliveira</h4>
              <p className="text-sm text-gray-600">From $5K to $24K/month</p>
            </div>
          </div>
        </div>

        {/* Results Guarantee */}
        <div className="bg-vertex-dark text-white rounded-2xl p-8 md:p-12 max-w-4xl mx-auto mt-16">
          <div className="text-center">
            <div className="text-vertex-gold text-4xl mb-4">
              <i className="fas fa-shield-alt"></i>
            </div>
            <h3 className="text-2xl md:text-3xl font-bold text-vertex-gold mb-4">
              Results Guarantee
            </h3>
            <p className="text-lg text-gray-300 mb-6">
              We're so confident in the Vertex Profit System that we offer a triple guarantee. 
              If you don't get results, we'll refund 100% of your investment.
            </p>
            <div className="grid md:grid-cols-3 gap-6 mt-8">
              <div className="text-center">
                <div className="text-vertex-gold text-2xl mb-2">7 days</div>
                <div className="text-sm">Unconditional Guarantee</div>
              </div>
              <div className="text-center">
                <div className="text-vertex-gold text-2xl mb-2">30 days</div>
                <div className="text-sm">Satisfaction Guarantee</div>
              </div>
              <div className="text-center">
                <div className="text-vertex-gold text-2xl mb-2">90 days</div>
                <div className="text-sm">Results Guarantee</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProvaSocial;