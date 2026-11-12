/* ==========================================================
   ALL PORTFOLIO CONTENT LIVES HERE. Edit this file only.
   - An empty list [] or empty text "" hides that part of the site.
   - Add another item to any list by copying an existing { ... } block.
   ========================================================== */
const PORTFOLIO = {
  person: {
    name: "Khushi Kanwar",
    headline: "IT Enthusiast | CITS Trainee (CSA)",
    location: "Korba, Chhattisgarh",
    email: "khushikanwar26112006@gmail.com",
    phone: "9244251513",
    showPhone: false,               // set true to show phone on the site
    linkedin: "https://www.linkedin.com/in/khushi-kanwar-113849448",
    github: "https://github.com/khushikanwar26112006-nini",
    photo: "assets/images/profile.jpg",
    resume: "assets/documents/resume.pdf"
  },
  intro: "I am pursuing CITS in Computer Software Application at NSTI Kanpur and enjoy learning new technology. I recently built an AI Resume Builder project.",
  about: [
    "I am Khushi Kanwar, an IT enthusiast from Korba, Chhattisgarh. I completed ITI COPA at Government Women ITI, Korba, in 2026 and I am now pursuing CITS in Computer Software Application (CSA) at NSTI Kanpur (2026–27).",
    "I have basic skills in Python, MySQL, HTML and CSS, and I am a quick learner who wants to build a career in the computer field."
  ],
  education: [
    { title: "CITS – Computer Software Application (CSA)", place: "NSTI Kanpur", period: "Session 2026–27", note: "Pursuing" },
    { title: "ITI – COPA", place: "Government Women ITI, Korba, Chhattisgarh", period: "Passed 2026", note: "" }
  ],
  skills: [
    { group: "Core trade skills", items: ["Computer fundamentals", "Data entry", "MS Office", "Basic programming", "Internet operations", "Basic computer troubleshooting"] },
    { group: "Computer skills", items: ["MS Word", "MS Excel", "MS PowerPoint", "Typing", "Internet & Email"] },
    { group: "Software and tools", items: ["Python (basic)", "MySQL (basic)", "HTML", "CSS", "Visual Studio Code"] },
    { group: "Soft skills", items: ["Communication", "Problem solving", "Teamwork", "Time management", "Quick learning", "Hardworking and sincere", "Positive attitude"] }
  ],
  projects: [
    {
      name: "AI Resume Builder",
      description: "An AI-based application that helps users create professional resumes from their personal details, education, skills and experience. It produces a well-structured resume that can be downloaded as PDF.",
      tech: ["HTML", "CSS", "JavaScript", "React.js", "Python", "AI/ML", "APIs"],
      contribution: [
        "Designed and developed the user interface",
        "Built input forms for personal details, education, skills and experience",
        "Integrated AI to generate professional resume content",
        "Built resume formatting and preview",
        "Tested the application for a smooth user experience"
      ],
      image: "assets/images/ai-resume-builder.png",  // add your screenshot here
      demo: "",   // add live link to show a "Live demo" button
      repo: ""    // add GitHub repo link to show a "Source code" button
    }
  ],
  training: [
    {
      role: "CITS Trainee (CSA)", org: "National Skill Training Institute (NSTI), Kanpur", period: "2026 – present",
      learned: ["Computer fundamentals", "Python programming", "MySQL database management", "HTML and CSS", "MS Office", "Teaching and instructional skills", "Practical computer applications"]
    }
  ],
  certifications: [
    {
      name: "AI Literacy", org: "IBM SkillsBuild", year: "29 Oct 2026",
      link: "https://www.credly.com/go/HU2AF4kw",
      file: "assets/documents/ai-literacy-certificate.pdf",
      image: "assets/images/ai-literacy-certificate.jpg"
    }
  ]
};
