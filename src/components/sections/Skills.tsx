import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Palette, Server, Settings } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const Skills = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray(".skill-card").forEach((card, i) => {
        gsap.from(card, {
          scrollTrigger: {
            trigger: card,
            start: "top 85%",
          },
          y: 50,
          opacity: 0,
          duration: 0.8,
          delay: i * 0.15,
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const skillCategories = [
    {
      title: "Frontend",
      icon: <Palette size={24} />,
      skills: [
        "React",
        "HTML",
        "CSS",
        "JavaScript",
        "Bootstrap",
        "Tailwind CSS",
        "TypeScript",
        "Three.js",
        "GSAP",
      ],
      gradient: "from-purple-500 to-pink-500",
    },
    {
      title: "Backend",
      icon: <Server size={24} />,
      skills: [
        "Python",
        "MySQL",
        "Firebase",
        "Supabase",
        "PHP",
        "Express.js",
        "Node.js",
        "MongoDB",
      ],
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      title: "DevOps & Tools",
      icon: <Settings size={24} />,
      skills: ["Vercel", "Netlify", "GitHub", "VSCode", "Git"],
      gradient: "from-green-500 to-emerald-500",
    },
  ];

  return (
    <section id="skills" ref={sectionRef} className="py-20">
      <div className="container mx-auto px-4">
        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-bold text-center text-white mb-16">
          Skills &{" "}
          <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Expertise
          </span>
        </h2>

        {/* Skill Cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="skill-card bg-[#1E1E1E] rounded-xl p-6 border border-[#333] hover:border-primary transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-6">
                <div
                  className={`p-2 rounded-full bg-gradient-to-r ${category.gradient}`}
                >
                  {category.icon}
                </div>
                <h3
                  className={`text-2xl font-bold bg-gradient-to-r ${category.gradient} bg-clip-text text-transparent`}
                >
                  {category.title}
                </h3>
              </div>
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, i) => (
                  <span
                    key={i}
                    className="bg-[#2A2A2A] px-4 py-2 rounded-lg text-white text-sm font-medium hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-500 hover:text-white cursor-pointer transition-all"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
