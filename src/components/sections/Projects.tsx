import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ExternalLink, Github } from 'lucide-react';
import { Button } from '@/components/ui/button';

gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.projects-title', {
        scrollTrigger: {
          trigger: '.projects-title',
          start: 'top 80%',
        },
        y: 50,
        opacity: 0,
        duration: 1,
      });

      gsap.from('.project-card', {
        scrollTrigger: {
          trigger: '.project-card',
          start: 'top 80%',
        },
        y: 100,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const projects = [
    {
      title: 'Investment Hub',
      description: 'A comprehensive platform for tracking and managing investment portfolios with real-time data analysis and visualization.',
      technologies: ['HTML', 'CSS', 'JavaScript', 'Python', 'PHP'],
      liveUrl: '#',
      githubUrl: '#',
      gradient: 'from-blue-500 to-cyan-500',
    },
    {
      title: 'Expense Tracker',
      description: 'Modern expense tracking application with intuitive UI, category management, and detailed financial insights.',
      technologies: ['React', 'TypeScript', 'JavaScript', 'HTML', 'CSS'],
      liveUrl: '#',
      githubUrl: '#',
      gradient: 'from-purple-500 to-pink-500',
    },
    {
      title: 'Resume ATS System',
      description: 'Applicant Tracking System for optimizing resumes and analyzing compatibility with job descriptions.',
      technologies: ['HTML', 'CSS', 'JavaScript'],
      liveUrl: '#',
      githubUrl: '#',
      gradient: 'from-green-500 to-emerald-500',
    },
  ];

  return (
    <section id="projects" ref={sectionRef} className="py-20 relative">
      <div className="container mx-auto px-4">
        <h2 className="projects-title text-4xl md:text-5xl font-bold text-center mb-16">
          Featured <span className="bg-gradient-primary bg-clip-text text-transparent">Projects</span>
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <div
              key={index}
              className="project-card bg-card rounded-lg overflow-hidden border border-border hover:border-primary transition-all duration-300 group"
            >
              <div className={`h-2 bg-gradient-to-r ${project.gradient}`} />
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground mb-4 line-clamp-3">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="text-xs bg-muted px-3 py-1 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-3">
                  <Button
                    size="sm"
                    className="flex-1 bg-primary hover:bg-primary/90"
                    asChild
                  >
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2"
                    >
                      <ExternalLink size={16} />
                      Live Demo
                    </a>
                  </Button>
                  <Button
                    size="sm"
                    variant="outline"
                    className="border-primary text-primary hover:bg-primary/10"
                    asChild
                  >
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2"
                    >
                      <Github size={16} />
                      Code
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
