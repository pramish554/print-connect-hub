import { useEffect, useRef } from 'react';
import { Layers, Flag, CreditCard, FileText, Palette, Package } from 'lucide-react';

const ServicesSection = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-up');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = sectionRef.current?.querySelectorAll('.reveal');
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const services = [
    {
      icon: Layers,
      title: 'Flex Printing',
      description: 'High-quality flex banners for outdoor and indoor advertising. Vibrant colors that last.',
      color: 'bg-primary',
      hoverShadow: 'hover:shadow-glow-cyan',
    },
    {
      icon: Flag,
      title: 'Banner Printing',
      description: 'Eye-catching vinyl and fabric banners perfect for events, promotions, and storefronts.',
      color: 'bg-secondary',
      hoverShadow: 'hover:shadow-glow-magenta',
    },
    {
      icon: CreditCard,
      title: 'Visiting Cards',
      description: 'Premium business cards that make a lasting impression. Multiple finishes available.',
      color: 'bg-primary',
      hoverShadow: 'hover:shadow-glow-cyan',
    },
    {
      icon: FileText,
      title: 'Brochures',
      description: 'Professional brochures and flyers for marketing. Crisp printing on quality paper.',
      color: 'bg-secondary',
      hoverShadow: 'hover:shadow-glow-magenta',
    },
    {
      icon: Palette,
      title: 'Poster Printing',
      description: 'Stunning posters in all sizes. Perfect for advertisements, decorations, and events.',
      color: 'bg-accent',
      hoverShadow: 'hover:shadow-glow-yellow',
    },
    {
      icon: Package,
      title: 'Packaging Design',
      description: 'Custom packaging solutions that protect your products and promote your brand.',
      color: 'bg-primary',
      hoverShadow: 'hover:shadow-glow-cyan',
    },
  ];

  return (
    <section
      id="services"
      ref={sectionRef}
      className="section-padding bg-background"
    >
      <div className="container-max">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="reveal opacity-0 inline-block px-4 py-1.5 rounded-full bg-secondary/10 text-secondary text-sm font-semibold mb-4">
            Our Services
          </span>
          <h2 className="reveal opacity-0 stagger-1 text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            What We <span className="gradient-text">Offer</span>
          </h2>
          <p className="reveal opacity-0 stagger-2 text-muted-foreground text-lg">
            From small prints to large format, we provide comprehensive printing solutions 
            tailored to your needs.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className={`reveal opacity-0 stagger-${(index % 4) + 1} card-elevated p-6 md:p-8 group cursor-pointer ${service.hoverShadow}`}
            >
              {/* Icon */}
              <div className={`w-14 h-14 rounded-2xl ${service.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                <service.icon className="w-7 h-7 text-white" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                {service.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {service.description}
              </p>

              {/* Hover arrow */}
              <div className="mt-6 flex items-center text-primary font-semibold opacity-0 group-hover:opacity-100 transition-opacity">
                <span>Learn more</span>
                <svg
                  className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="reveal opacity-0 text-center mt-12">
          <p className="text-muted-foreground mb-6">
            Need something specific? We offer custom printing solutions for all your needs.
          </p>
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="btn-secondary"
          >
            Get a Free Quote
          </a>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
