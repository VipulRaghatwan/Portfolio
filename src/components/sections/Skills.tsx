import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Skills = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.skills-title', {
        scrollTrigger: {
          trigger: '.skills-title',
          start: 'top 80%',
        },
        y: 50,
        opacity: 0,
        duration: 1,
      });

      gsap.utils.toArray(".project-card").forEach((card) => {
  gsap.from(card, {
    scrollTrigger: {
      trigger: card,
      start: "top 85%",
    },
    y: 100,
    opacity: 0,
    duration: 0.8,
  });
});

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const skillCategories = [
    {
      title: 'Frontend',
      skills: ['HTML', 'CSS', 'JavaScript', 'React.js', 'Bootstrap', 'Tailwind CSS', 'GSAP'],
      color: 'from-blue-500 to-cyan-500',
    },
    {
      title: 'Backend',
      skills: ['MySQL', 'Firebase', 'Python', 'Flask', 'Node.js', 'PHP'],
      color: 'from-purple-500 to-pink-500',
    },
    {
      title: 'DevOps & Tools',
      skills: ['Vercel', 'Netlify', 'GitHub', 'VSCode', 'Git'],
      color: 'from-green-500 to-emerald-500',
    },
  ];

  return (
    <section id="skills" ref={sectionRef} className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <h2 className="skills-title text-4xl md:text-5xl font-bold text-center mb-16">
          Skills & <span className="bg-gradient-primary bg-clip-text text-transparent">Expertise</span>
        </h2>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="skill-category bg-card rounded-lg p-6 border border-border hover:border-primary transition-all duration-300 group"
            >
              <div className="mb-6">
                <h3 className={`text-2xl font-bold bg-gradient-to-r ${category.color} bg-clip-text text-transparent`}>
                  {category.title}
                </h3>
              </div>
              <div className="space-y-3">
                {category.skills.map((skill, skillIndex) => (
                  <div
                    key={skillIndex}
                    className="bg-muted rounded-lg px-4 py-2 text-sm font-medium hover:bg-primary/10 hover:text-primary transition-colors duration-200"
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Decorative elements */}
        <div className="absolute top-1/4 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl -z-10" />
        <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-secondary/10 rounded-full blur-3xl -z-10" />
      </div>
    </section>
  );
};

export default Skills;
