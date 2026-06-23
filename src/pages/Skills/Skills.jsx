import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import IconCloudDemo from "@/components/globe";
import { Brain, Code2, Database, Cpu, Cloud } from "lucide-react";

import {
  FaReact,
  FaNodeJs,
  FaPython,
  FaGitAlt,
  FaLinux,
} from "react-icons/fa";

import {
  SiJavascript,
  SiFastapi,
  SiFlask,
  SiTailwindcss,
  SiMongodb,
  SiFirebase,
  SiVercel,
  SiVite,
  SiRender,
  SiCplusplus,
} from "react-icons/si";

import { MdOutlineAutoGraph, MdTextFields, MdPsychology } from "react-icons/md";
import { AiOutlineEye } from "react-icons/ai";

import { TbBrandVscode } from "react-icons/tb";
import { BsFileEarmarkCode, BsGrid1X2 } from "react-icons/bs";

const SkillCard = ({ icon: Icon, title, skills, color }) => (
  <Card className="group relative overflow-hidden bg-gray-900/80 border-gray-700 hover:scale-[1.02] transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/20">
    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[rgba(100,100,255,0.1)] to-transparent group-hover:via-[rgba(100,100,255,0.2)] animate-shimmer"></div>
    <CardContent className="p-6 relative z-10">
      <div className="flex items-center gap-4 mb-6">
        <div
          className={`p-3 rounded-xl bg-gray-800/50 ${color} group-hover:scale-110 transition-transform duration-300`}
        >
          <Icon className="w-8 h-8" />
        </div>
        <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
          {title}
        </h3>
      </div>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill, index) => (
          <Badge
            key={index}
            variant="outline"
            className="group/badge relative bg-gray-800/50 hover:bg-gray-700/80 text-gray-100 border-gray-600 flex items-center gap-2 py-2 px-3 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/20"
          >
            <span className="transform group-hover/badge:scale-110 transition-transform duration-300">
              {skill.icon}
            </span>
            <span className="font-medium">{skill.name}</span>
          </Badge>
        ))}
      </div>
    </CardContent>
  </Card>
);

const SkillsSection = () => {
  const skillCategories = [
  {
    icon: Code2,
    title: "Languages",
    color: "text-blue-400",
    skills: [
      {
        name: "C++",
        icon: <SiCplusplus className="w-4 h-4 text-blue-500" />,
      },
      {
        name: "Python",
        icon: <FaPython className="w-4 h-4 text-[#3776AB]" />,
      },
    ],
  },

  {
    icon: Code2,
    title: "Frontend Development",
    color: "text-blue-400",
    skills: [
      {
        name: "React",
        icon: <FaReact className="w-4 h-4 text-[#61DAFB]" />,
      },
      {
        name: "Tailwind CSS",
        icon: <SiTailwindcss className="w-4 h-4 text-[#38B2AC]" />,
      },
      {
        name: "HTML5",
        icon: <BsFileEarmarkCode className="w-4 h-4 text-[#E34F26]" />,
      },
      {
        name: "CSS3",
        icon: <BsFileEarmarkCode className="w-4 h-4 text-[#1572B6]" />,
      },
    ],
  },

  {
    icon: Database,
    title: "Backend Development",
    color: "text-green-400",
    skills: [
      {
        name: "Node.js",
        icon: <FaNodeJs className="w-4 h-4 text-[#339933]" />,
      },
      {
        name: "Express.js",
        icon: <BsGrid1X2 className="w-4 h-4 text-green-400" />,
      },
      {
        name: "MongoDB",
        icon: <SiMongodb className="w-4 h-4 text-[#47A248]" />,
      },
      {
        name: "REST APIs",
        icon: <BsGrid1X2 className="w-4 h-4 text-orange-400" />,
      },
      {
        name: "FastAPI",
        icon: <SiFastapi className="w-4 h-4 text-teal-400" />,
      },
    ],
  },

  {
    icon: Brain,
    title: "Machine Learning & AI",
    color: "text-purple-400",
    skills: [
      {
        name: "Machine Learning",
        icon: <Brain className="w-4 h-4 text-green-400" />,
      },
      {
        name: "Deep Learning",
        icon: <MdOutlineAutoGraph className="w-4 h-4 text-blue-400" />,
      },
      {
        name: "NLP",
        icon: <MdTextFields className="w-4 h-4 text-purple-400" />,
      },
      {
        name: "Computer Vision",
        icon: <AiOutlineEye className="w-4 h-4 text-pink-400" />,
      },
      {
        name: "LLMs & Prompt Engineering",
        icon: <MdPsychology className="w-4 h-4 text-yellow-400" />,
      },
    ],
  },

  {
    icon: Cpu,
    title: "Core CS",
    color: "text-cyan-400",
    skills: [
      {
        name: "Data Structures & Algorithms",
        icon: <Code2 className="w-4 h-4 text-blue-400" />,
      },
      {
        name: "Object-Oriented Programming",
        icon: <Code2 className="w-4 h-4 text-green-400" />,
      },
      {
        name: "DBMS",
        icon: <Database className="w-4 h-4 text-yellow-400" />,
      },
      {
        name: "Operating Systems",
        icon: <Cpu className="w-4 h-4 text-red-400" />,
      },
    ],
  },

  {
    icon: Cloud,
    title: "Cloud & Deployment",
    color: "text-orange-400",
    skills: [
      {
        name: "Vercel",
        icon: <SiVercel className="w-4 h-4 text-white" />,
      },
      {
        name: "Render",
        icon: <SiRender className="w-4 h-4 text-blue-400" />,
      },
    ],
  },

  {
    icon: Cpu,
    title: "Tools & Technologies",
    color: "text-pink-400",
    skills: [
      {
        name: "VS Code",
        icon: <TbBrandVscode className="w-4 h-4 text-[#007ACC]" />,
      },
      {
        name: "GitHub",
        icon: <FaGitAlt className="w-4 h-4 text-white" />,
      },
      {
        name: "Firebase",
        icon: <SiFirebase className="w-4 h-4 text-[#FFCA28]" />,
      },
      {
        name: "Twilio",
        icon: <BsGrid1X2 className="w-4 h-4 text-pink-400" />,
      },
    ],
  },
];
  return (
    <main className="pt-15 lg:pt-0 text-white min-h-screen bg-[#04081A] relative">
      {/* Grid Background */}
      <div className="absolute inset-0 bg-grid-pattern opacity-20 pointer-events-none"></div>

      <section className="container mx-auto px-4 py-11 relative z-10">
        <div className="flex justify-center items-center">
          <IconCloudDemo />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <SkillCard
              key={index}
              icon={category.icon}
              title={category.title}
              skills={category.skills}
              color={category.color}
            />
          ))}
        </div>
      </section>

      <style jsx>{`
        @keyframes shimmer {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }

        .animate-shimmer {
          animation: shimmer 2s infinite;
        }

        .bg-grid-pattern {
          background-image:
            linear-gradient(
              to right,
              rgba(100, 100, 255, 0.1) 1px,
              transparent 1px
            ),
            linear-gradient(
              to bottom,
              rgba(100, 100, 255, 0.1) 1px,
              transparent 1px
            );
          background-size: 30px 30px;
        }
      `}</style>
    </main>
  );
};

export default SkillsSection;