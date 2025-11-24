import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Award, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';

gsap.registerPlugin(ScrollTrigger);

const Certificates = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.certificates-title', {
        scrollTrigger: {
          trigger: '.certificates-title',
          start: 'top 80%',
        },
        y: 50,
        opacity: 0,
        duration: 1,
      });

      gsap.from('.certificate-card', {
        scrollTrigger: {
          trigger: '.certificate-card',
          start: 'top 80%',
        },
        scale: 0.9,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const certificates = [
    {
      title: 'Full-Stack Web Development',
      issuer: 'Platform Name',
      year: '2024',
      description: 'Comprehensive course covering modern web development practices and technologies.',
      link: '#',
    },
    {
      title: 'React Advanced Patterns',
      issuer: 'Platform Name',
      year: '2024',
      description: 'Advanced React concepts, hooks, state management, and performance optimization.',
      link: '#',
    },
    {
      title: 'Python for Data Science',
      issuer: 'Platform Name',
      year: '2023',
      description: 'Data analysis, visualization, and machine learning fundamentals with Python.',
      link: '#',
    },
    {
      title: 'Backend Development with Node.js',
      issuer: 'Platform Name',
      year: '2023',
      description: 'Building scalable backend APIs and services with Node.js and Express.',
      link: '#',
    },
  ];

  return (
    <section id="certificates" ref={sectionRef} className="py-20 bg-darker-surface">
      <div className="container mx-auto px-4">
        <h2 className="certificates-title text-4xl md:text-5xl font-bold text-center mb-16">
          Certificates & <span className="bg-gradient-primary bg-clip-text text-transparent">Achievements</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {certificates.map((cert, index) => (
            <div
              key={index}
              className="certificate-card bg-card rounded-lg p-6 border border-border hover:border-primary transition-all duration-300 group relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-primary opacity-10 rounded-full blur-3xl group-hover:opacity-20 transition-opacity" />
              <div className="relative">
                <div className="flex items-start gap-4 mb-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <Award className="text-primary" size={24} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-1 group-hover:text-primary transition-colors">
                      {cert.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {cert.issuer} • {cert.year}
                    </p>
                  </div>
                </div>
                <p className="text-muted-foreground mb-4 text-sm">
                  {cert.description}
                </p>
                <Button
                  size="sm"
                  variant="outline"
                  className="border-primary text-primary hover:bg-primary/10"
                  asChild
                >
                  <a
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2"
                  >
                    View Certificate
                    <ExternalLink size={14} />
                  </a>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certificates;
