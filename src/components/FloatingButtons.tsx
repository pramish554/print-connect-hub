import { useState, useEffect } from 'react';
import { Phone, Mail, Facebook, Instagram, X, MessageCircle } from 'lucide-react';

const FloatingButtons = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const actions = [
    {
      icon: Phone,
      label: 'Call',
      action: () => window.location.href = 'tel:+9779800000000',
      color: 'bg-primary hover:shadow-glow-cyan',
    },
    {
      icon: Mail,
      label: 'Email',
      action: () => window.location.href = 'mailto:printhub@example.com',
      color: 'bg-secondary hover:shadow-glow-magenta',
    },
    {
      icon: Facebook,
      label: 'Facebook',
      action: () => window.open('https://facebook.com/printhub', '_blank'),
      color: 'bg-[hsl(220,70%,50%)] hover:shadow-[0_8px_32px_-8px_hsl(220,70%,50%,0.4)]',
    },
    {
      icon: Instagram,
      label: 'Instagram',
      action: () => window.open('https://instagram.com/printhub', '_blank'),
      color: 'bg-gradient-to-br from-[hsl(340,80%,55%)] to-[hsl(30,90%,55%)] hover:shadow-glow-magenta',
    },
  ];

  return (
    <div
      className={`fixed bottom-6 right-6 z-50 transition-all duration-500 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8 pointer-events-none'
      }`}
    >
      {/* Action buttons */}
      <div
        className={`absolute bottom-16 right-0 flex flex-col-reverse gap-3 transition-all duration-300 ${
          isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
        }`}
      >
        {actions.map((item, index) => (
          <button
            key={index}
            onClick={() => {
              item.action();
              setIsOpen(false);
            }}
            className={`fab-button ${item.color} group animate-ripple`}
            style={{
              transitionDelay: isOpen ? `${index * 50}ms` : '0ms',
              transform: isOpen ? 'scale(1)' : 'scale(0.5)',
            }}
            aria-label={item.label}
          >
            <item.icon className="w-6 h-6" />
            
            {/* Tooltip */}
            <span className="absolute right-16 px-3 py-1.5 rounded-lg bg-foreground text-background text-sm font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
              {item.label}
            </span>
          </button>
        ))}
      </div>

      {/* Main toggle button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`fab-button bg-primary shadow-glow-cyan group ${
          isOpen ? 'rotate-180' : 'rotate-0'
        } transition-transform duration-300`}
        aria-label={isOpen ? 'Close menu' : 'Open contact menu'}
      >
        {isOpen ? (
          <X className="w-6 h-6" />
        ) : (
          <MessageCircle className="w-6 h-6" />
        )}
      </button>

      {/* Backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 -z-10"
          onClick={() => setIsOpen(false)}
        />
      )}
    </div>
  );
};

export default FloatingButtons;
