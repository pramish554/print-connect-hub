import { useEffect, useRef } from 'react';
import { Phone, Mail, Facebook, Instagram } from 'lucide-react';

const HeroSection = () => {
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

  const contactActions = [
    {
      icon: Phone,
      label: 'Call Now',
      action: () => window.location.href = 'tel:+9779800000000',
      className: 'btn-primary animate-ripple',
    },
    {
      icon: Mail,
      label: 'Email Us',
      action: () => window.location.href = 'mailto:printhub@example.com',
      className: 'btn-secondary animate-ripple',
    },
    {
      icon: Facebook,
      label: 'Facebook',
      action: () => window.open('https://facebook.com/printhub', '_blank'),
      className: 'btn-outline animate-ripple',
    },
    {
      icon: Instagram,
      label: 'Instagram',
      action: () => window.open('https://instagram.com/printhub', '_blank'),
      className: 'btn-outline animate-ripple',
    },
  ];

  return (
    <section
      id="home"
      ref={sectionRef}
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20"
      style={{ background: 'var(--gradient-hero)' }}
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      {/* Decorative circles */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }} />
      <div className="absolute top-1/2 left-1/3 w-48 h-48 bg-accent/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />

      <div className="container-max px-4 md:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="reveal opacity-0 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-8">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-sm font-medium text-primary">Your Local Printing Partner</span>
          </div>

          {/* Main Headline */}
          <h1 className="reveal opacity-0 stagger-1 text-4xl md:text-6xl lg:text-7xl font-black text-foreground leading-tight mb-6">
            Best{' '}
            <span className="gradient-text">Printing Press</span>
            <br />
            Near You
          </h1>

          {/* Subtitle */}
          <p className="reveal opacity-0 stagger-2 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10">
            High-quality prints, lightning-fast delivery, and prices that won't break the bank. 
            From banners to business cards, we bring your ideas to life.
          </p>

          {/* CTA Buttons */}
          <div className="reveal opacity-0 stagger-3 flex flex-wrap justify-center gap-4">
            {contactActions.map((item, index) => (
              <button
                key={index}
                onClick={item.action}
                className={`${item.className} min-w-[140px]`}
              >
                <item.icon className="w-5 h-5" />
                {item.label}
              </button>
            ))}
          </div>

          {/* Trust indicators */}
          <div className="reveal opacity-0 stagger-4 mt-16 flex flex-wrap justify-center gap-8 md:gap-16">
            {[
              { value: '10+', label: 'Years Experience' },
              { value: '5000+', label: 'Happy Clients' },
              { value: '24/7', label: 'Support' },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-primary">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce-gentle">
        <div className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex items-start justify-center p-2">
          <div className="w-1.5 h-3 bg-primary rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
