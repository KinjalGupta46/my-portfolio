export default function About() {
  const cards = [
    "🎓 3rd Year Student",
    "🤖 AI/ML Learner",
    "💻 Full-Stack Developer",
    "🧩 Problem Solver",
  ];

  return (
    <section
      id="about"
      className="min-h-screen bg-[#04081A] text-white py-20 px-6"
    >
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 items-center">

        {/* Left Side */}
        <div className="flex flex-col items-center space-y-8">

          {/* KG Avatar */}
          <div className="relative">
            <div className="absolute inset-0 rounded-full bg-cyan-500 blur-3xl opacity-30 animate-pulse"></div>

            <div className="relative w-48 h-48 rounded-full border border-cyan-400 flex items-center justify-center bg-white/5 backdrop-blur-xl">
              <h1 className="text-6xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                KG
              </h1>
            </div>
          </div>

          <div className="text-center">
            <h2 className="text-3xl font-bold">
              Full-Stack Developer
            </h2>

            <p className="text-gray-300 mt-2">
              AI Enthusiast • Problem Solver
            </p>

            <p className="italic text-gray-400 mt-4">
              "Driven by curiosity, powered by consistency."
            </p>
          </div>

          {/* Cards */}
          <div className="grid grid-cols-2 gap-4 w-full">
            {cards.map((card, index) => (
              <div
                key={index}
                className="bg-white/5 border border-gray-700 rounded-2xl p-5 text-center hover:border-cyan-400 transition duration-300"
              >
                {card}
              </div>
            ))}
          </div>
        </div>

        {/* Right Side */}
        <div className="space-y-8">

          <h2 className="text-5xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            About Me
          </h2>

          <p className="text-gray-300 leading-8 text-lg">
            Passionate about Full-Stack Development and Artificial Intelligence,
            I enjoy building impactful applications and continuously learning
            modern technologies. I am currently exploring Machine Learning,
            Deep Learning, NLP, and Computer Vision while strengthening my
            software development and problem-solving skills.
          </p>

          <blockquote className="border-l-4 border-cyan-400 pl-6 italic text-gray-400 leading-8">
            Beyond coding, I enjoy solving Data Structures and Algorithms
            problems, participating in hackathons, and collaborating on projects
            that challenge me to grow as a developer. I strongly believe in
            continuous learning and strive to transform ideas into practical and
            impactful digital solutions.
          </blockquote>

          <div>
            <h3 className="text-xl font-semibold">
              Kinjal Gupta
            </h3>

            <p className="text-gray-400 mt-2">
              B.Tech CSE Student • Full-Stack Developer • AI Enthusiast
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}