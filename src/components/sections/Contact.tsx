import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Mail, Phone, MapPin, Github, Linkedin, Twitter } from 'lucide-react';
import { Button } from '@/components/ui/button';

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.contact-title', {
        scrollTrigger: {
          trigger: '.contact-title',
          start: 'top 80%',
        },
        y: 50,
        opacity: 0,
        duration: 1,
      });

      gsap.from('.contact-item', {
        scrollTrigger: {
          trigger: '.contact-item',
          start: 'top 80%',
        },
        y: 30,
        opacity: 0,
        duration: 0.6,
        stagger: 0.15,
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'vipul.raghatwan@example.com',
      link: 'mailto:vipul.raghatwan@example.com',
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+91 XXXXX XXXXX',
      link: 'tel:+91XXXXXXXXXX',
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Mumbai, Maharashtra',
      link: null,
    },
  ];

  const socialLinks = [
    {
      icon: Github,
      label: 'GitHub',
      url: 'https://github.com',
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      url: 'https://linkedin.com',
    },
    {
      icon: Twitter,
      label: 'Twitter',
      url: 'https://twitter.com',
    },
  ];

  return (
    <section id="contact" ref={sectionRef} className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <h2 className="contact-title text-4xl md:text-5xl font-bold text-center mb-8">
          Get In <span className="bg-gradient-primary bg-clip-text text-transparent">Touch</span>
        </h2>
        <p className="contact-item text-center text-muted-foreground mb-16 max-w-2xl mx-auto">
          I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
        </p>

        <div className="max-w-4xl mx-auto">
          {/* Contact Information */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {contactInfo.map((item, index) => (
              <div
                key={index}
                className="contact-item bg-card rounded-lg p-6 border border-border hover:border-primary transition-all duration-300 group text-center"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-full mb-4 group-hover:bg-primary/20 transition-colors">
                  <item.icon className="text-primary" size={24} />
                </div>
                <h3 className="text-lg font-semibold mb-2">{item.label}</h3>
                {item.link ? (
                  <a
                    href={item.link}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {item.value}
                  </a>
                ) : (
                  <p className="text-muted-foreground">{item.value}</p>
                )}
              </div>
            ))}
          </div>

          {/* Social Links */}
          <div className="contact-item text-center">
            <h3 className="text-2xl font-bold mb-6">Connect With Me</h3>
            <div className="flex justify-center gap-4">
              {socialLinks.map((social, index) => (
                <Button
                  key={index}
                  size="lg"
                  variant="outline"
                  className="border-primary text-primary hover:bg-primary hover:text-white transition-all duration-300"
                  asChild
                >
                  <a
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2"
                  >
                    <social.icon size={20} />
                    {social.label}
                  </a>
                </Button>
              ))}
            </div>
          </div>
        </div>

        {/* Decorative Background Elements */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -z-10" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl -z-10" />
      </div>

      {/* Footer */}
      <footer className="mt-20 py-8 border-t border-border">
        <div className="container mx-auto px-4 text-center">
          <p className="text-muted-foreground">
            © {new Date().getFullYear()} Vipul Raghatwan. Built with React, Tailwind CSS, and GSAP.
          </p>
        </div>
      </footer>
    </section>
  );
};

export default Contact;
