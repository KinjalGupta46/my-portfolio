
import React from "react";
import {
  BriefcaseBusiness,
  Trophy,
  Medal,
  Award,
} from "lucide-react";

const ExperienceCard = ({
  title,
  company,
  period,
  description,
  icon: Icon,
  achievements = [],
}) => (
  <div className="group relative overflow-hidden transform hover:-translate-y-2 transition-all duration-300 w-full h-full">
    {/* Glass background */}
    <div className="absolute inset-0 backdrop-blur-lg bg-white/5 rounded-lg" />

    {/* Gradient border */}
    <div className="absolute -inset-[2px] bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 rounded-lg opacity-0 group-hover:opacity-100 animate-gradient-xy transition-all duration-500" />

    <div className="relative bg-gray-900/90 rounded-lg p-6 md:p-8 h-full border border-gray-800/50 shadow-xl backdrop-blur-xl">
      {/* Icon */}
      <div className="relative mb-6">
        <div className="absolute -inset-4 bg-gradient-to-r from-cyan-500 to-blue-500 opacity-25 rounded-full blur-xl group-hover:opacity-75 animate-pulse transition-all duration-500" />
        <Icon className="w-12 h-12 text-cyan-400 relative z-10 transform group-hover:rotate-12 transition-transform duration-300" />
      </div>

      {/* Content */}
      <div className="space-y-4">
        <h3 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
          {title}
        </h3>

        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2 text-gray-300">
          <span className="font-semibold text-blue-400">
            {company}
          </span>

          <span className="text-sm font-mono bg-blue-500/10 px-3 py-1 rounded-full w-fit">
            {period}
          </span>
        </div>

        <p className="text-gray-300 border-l-4 border-blue-500/50 pl-4 leading-relaxed">
          {description}
        </p>

        {/* Achievement highlights */}
        {achievements.length > 0 && (
          <div className="pt-3 space-y-3">
            <h4 className="text-lg font-semibold text-cyan-300">
              Key Achievements
            </h4>

            {achievements.map((achievement, index) => {
              const AchievementIcon = achievement.icon;

              return (
                <div
                  key={achievement.title}
                  className="flex items-start gap-3 p-3 rounded-xl bg-white/5 border border-gray-700/70 hover:border-cyan-400/60 transition-colors duration-300"
                >
                  <AchievementIcon className="w-5 h-5 mt-0.5 text-yellow-400 shrink-0" />

                  <div>
                    <p className="font-semibold text-white">
                      {achievement.title}
                    </p>
                    <p className="text-sm text-gray-400 mt-1">
                      {achievement.detail}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>

      {/* Corner decorations */}
      <div className="absolute top-4 right-4 w-20 h-20 pointer-events-none">
        <div className="absolute top-0 right-0 w-6 h-[2px] bg-cyan-500/50" />
        <div className="absolute top-0 right-0 w-[2px] h-6 bg-cyan-500/50" />
      </div>

      <div className="absolute bottom-4 left-4 w-20 h-20 pointer-events-none">
        <div className="absolute bottom-0 left-0 w-6 h-[2px] bg-purple-500/50" />
        <div className="absolute bottom-0 left-0 w-[2px] h-6 bg-purple-500/50" />
      </div>
    </div>
  </div>
);

const ExperienceSection = () => {
  const experiences = [
    {
      icon: BriefcaseBusiness,
      title: "Data & Analytics Intern",
      company: "Infosys Springboard",
      period: "Jun 2026 – Sep 2026",
      description:
        "Worked on FinSight, a finance management application, applying Python, SQL, Pandas, and NumPy for data processing and validation. Contributed to backend functionality using Flask and MySQL for expense tracking, budget monitoring, and financial dashboards. Also tested REST APIs using Postman to validate responses and error handling.",
    },

    {
      icon: Trophy,
      title: "Hackathons & Achievements",
      company: "Innovation & Teamwork",
      period: "2025–2026",
      description:
        "Participated in multiple hackathons, including Amazon HackOn, Google Developer Hackathon, TechSprint, IBM Z Datathon, Bharatiya Antariksh Hackathon, Hacknovate 7.0, Hackaccino 4.0, Innovortex 3.0, Women Who Master Hackathon, and Devcation Delhi 2026. Collaborated with teams to develop innovative solutions, tackle real-world problems, and work effectively under time constraints.",
      achievements: [
        {
          icon: Medal,
          title: "Amazon HackOn",
          detail: "Top 30 Women Coders",
        },
        {
          icon: Award,
          title: "TechSprint",
          detail: "Top 10 Team Recognition",
        },
        {
          icon: Trophy,
          title: "Google Developer Hackathon",
          detail: "10th Position",
        },
      ],
    },
  ];

  return (
    <section
      id="experience"
      className="min-h-screen relative overflow-hidden bg-[#04081A] pt-32 pb-20"
    >
      {/* Grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(50,50,70,0.15)_1px,transparent_1px),linear-gradient(90deg,rgba(50,50,70,0.15)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none" />

      {/* Main content */}
      <div className="relative container mx-auto px-6 mt-10 z-10">
        <div className="flex flex-col items-center mb-16 space-y-6">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
            Experience
          </h2>

          <p className="text-lg md:text-xl text-gray-400 font-medium tracking-wide text-center max-w-2xl">
            "Building skills today to create solutions for tomorrow."
          </p>
        </div>

        {/* Experience cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 max-w-7xl mx-auto items-stretch">
          {experiences.map((experience) => (
            <ExperienceCard
              key={experience.title}
              {...experience}
            />
          ))}
        </div>
      </div>

      {/* Ambient background effects */}
      <div className="absolute top-20 left-20 w-72 h-72 md:w-96 md:h-96 bg-cyan-500/10 rounded-full filter blur-3xl animate-pulse pointer-events-none" />

      <div className="absolute bottom-20 right-20 w-72 h-72 md:w-96 md:h-96 bg-purple-500/10 rounded-full filter blur-3xl animate-pulse delay-1000 pointer-events-none" />
    </section>
  );
};

export default ExperienceSection;
