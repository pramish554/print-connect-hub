import { useEffect, useRef, useState } from 'react';
import { Award, Clock, Users, ThumbsUp } from 'lucide-react';

interface CounterProps {
  end: number;
  duration: number;
  suffix?: string;
}

const Counter = ({ end, duration, suffix = '' }: CounterProps) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [isVisible]);

  useEffect(() => {
    if (!isVisible) return;

    let startTime: number;
    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      setCount(Math.floor(progress * end));
      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [isVisible, end, duration]);

  return (
    <span ref={ref} className="animate-counter">
      {count}{suffix}
    </span>
  );
};

const AboutSection = () => {
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

  const stats = [
    { icon: Award, value: 10, suffix: '+', label: 'Years of Excellence', color: 'text-primary' },
    { icon: Users, value: 5000, suffix: '+', label: 'Happy Clients', color: 'text-secondary' },
    { icon: Clock, value: 24, suffix: '/7', label: 'Customer Support', color: 'text-accent' },
    { icon: ThumbsUp, value: 99, suffix: '%', label: 'Satisfaction Rate', color: 'text-primary' },
  ];

  return (
    <section
      id="about"
      ref={sectionRef}
      className="section-padding bg-muted/30"
    >
      <div className="container-max">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div>
            <span className="reveal opacity-0 inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4">
              About Us
            </span>
            <h2 className="reveal opacity-0 stagger-1 text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Quality Printing Since{' '}
              <span className="text-primary">2014</span>
            </h2>
            <p className="reveal opacity-0 stagger-2 text-muted-foreground text-lg leading-relaxed mb-6">
              We are a family-owned printing press dedicated to delivering exceptional quality 
              and service. From small business cards to large-format banners, we handle every 
              project with the same level of care and attention to detail.
            </p>
            <p className="reveal opacity-0 stagger-3 text-muted-foreground text-lg leading-relaxed mb-8">
              Our state-of-the-art equipment and experienced team ensure that your prints 
              look stunning every time. We believe in building lasting relationships with 
              our clients through trust, reliability, and outstanding results.
            </p>

            {/* Features list */}
            <div className="reveal opacity-0 stagger-4 grid sm:grid-cols-2 gap-4">
              {[
                'Premium Quality Materials',
                'Fast Turnaround Time',
                'Competitive Pricing',
                'Free Design Consultation',
              ].map((feature, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-primary" />
                  </div>
                  <span className="text-foreground font-medium">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 gap-4 md:gap-6">
            {stats.map((stat, index) => (
              <div
                key={index}
                className={`reveal opacity-0 stagger-${index + 1} card-elevated p-6 md:p-8 text-center group`}
              >
                <div className={`w-14 h-14 rounded-2xl bg-muted flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform ${stat.color}`}>
                  <stat.icon className="w-7 h-7" />
                </div>
                <div className={`text-3xl md:text-4xl font-bold ${stat.color} mb-2`}>
                  <Counter end={stat.value} duration={2000} suffix={stat.suffix} />
                </div>
                <div className="text-muted-foreground text-sm md:text-base">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
