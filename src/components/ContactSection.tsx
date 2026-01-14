import { useEffect, useRef } from 'react';
import { Phone, Mail, Facebook, Instagram, MapPin, Clock } from 'lucide-react';

const ContactSection = () => {
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

  const contactCards = [
    {
      icon: Phone,
      title: 'Call Us',
      info: '+977 98-00000000',
      subInfo: 'Mon-Sat, 9AM - 6PM',
      action: () => window.location.href = 'tel:+9779800000000',
      color: 'bg-primary',
      hoverShadow: 'hover:shadow-glow-cyan',
    },
    {
      icon: Mail,
      title: 'Email Us',
      info: 'printhub@example.com',
      subInfo: 'We reply within 24 hours',
      action: () => window.location.href = 'mailto:printhub@example.com',
      color: 'bg-secondary',
      hoverShadow: 'hover:shadow-glow-magenta',
    },
    {
      icon: Facebook,
      title: 'Facebook',
      info: '@PrintHubNepal',
      subInfo: 'Message us anytime',
      action: () => window.open('https://facebook.com/printhub', '_blank'),
      color: 'bg-[hsl(220,70%,50%)]',
      hoverShadow: 'hover:shadow-[0_8px_32px_-8px_hsl(220,70%,50%,0.4)]',
    },
    {
      icon: Instagram,
      title: 'Instagram',
      info: '@printhub.nepal',
      subInfo: 'See our latest work',
      action: () => window.open('https://instagram.com/printhub', '_blank'),
      color: 'bg-gradient-to-br from-[hsl(340,80%,55%)] to-[hsl(30,90%,55%)]',
      hoverShadow: 'hover:shadow-glow-magenta',
    },
  ];

  const infoCards = [
    {
      icon: MapPin,
      title: 'Visit Our Shop',
      info: 'Main Road, Near City Center',
      subInfo: 'Kathmandu, Nepal',
    },
    {
      icon: Clock,
      title: 'Working Hours',
      info: 'Mon - Sat: 9:00 AM - 6:00 PM',
      subInfo: 'Sunday: Closed',
    },
  ];

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="section-padding bg-muted/30"
    >
      <div className="container-max">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="reveal opacity-0 inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4">
            Contact Us
          </span>
          <h2 className="reveal opacity-0 stagger-1 text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Get in <span className="gradient-text">Touch</span>
          </h2>
          <p className="reveal opacity-0 stagger-2 text-muted-foreground text-lg">
            Have a project in mind? Reach out to us through any of these channels and 
            we'll get back to you as soon as possible.
          </p>
        </div>

        {/* Contact Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {contactCards.map((card, index) => (
            <button
              key={index}
              onClick={card.action}
              className={`reveal opacity-0 stagger-${index + 1} card-elevated p-6 text-left group animate-ripple ${card.hoverShadow} w-full`}
            >
              <div className={`w-12 h-12 rounded-xl ${card.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                <card.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-bold text-foreground mb-1 group-hover:text-primary transition-colors">
                {card.title}
              </h3>
              <p className="text-foreground font-medium text-sm mb-1">{card.info}</p>
              <p className="text-muted-foreground text-sm">{card.subInfo}</p>
            </button>
          ))}
        </div>

        {/* Info Cards */}
        <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto">
          {infoCards.map((card, index) => (
            <div
              key={index}
              className="reveal opacity-0 stagger-3 card-elevated p-6 flex items-start gap-4"
            >
              <div className="w-12 h-12 rounded-xl bg-accent/20 flex items-center justify-center shrink-0">
                <card.icon className="w-6 h-6 text-accent-foreground" />
              </div>
              <div>
                <h3 className="font-bold text-foreground mb-1">{card.title}</h3>
                <p className="text-foreground text-sm">{card.info}</p>
                <p className="text-muted-foreground text-sm">{card.subInfo}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
