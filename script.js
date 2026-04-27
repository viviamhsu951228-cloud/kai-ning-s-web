const courses = [
  {
    title: "初級會計學",
    semester: "大一上、下",
    category: "Accounting",
    link: "",
    skills: ["Accounting Basics", "Journal Entries", "Financial Statements"],
    description: "學習會計基本概念與財務報表結構，培養理解企業財務資訊與帳務處理的能力。"
  },
  {
    title: "經濟學",
    semester: "大一上、下",
    category: "Economics",
    link: "",
    skills: ["Economic Thinking", "Supply and Demand", "Market Analysis"],
    description: "透過供需模型與市場機制，培養分析經濟現象與決策邏輯的能力。"
  },
  {
    title: "微積分",
    semester: "大一上、下",
    category: "Mathematics",
    link: "",
    skills: ["Logical Thinking", "Problem Solving", "Quantitative Analysis"],
    description: "學習微分與積分概念，強化數學推理與定量分析能力。"
  },
  {
    title: "電腦概論與程式設計",
    semester: "大一上、下",
    category: "Computer Science",
    link: "",
    skills: ["Programming Basics", "Computational Thinking", "Problem Solving"],
    description: "建立程式設計與電腦科學基礎，培養以邏輯拆解問題的能力。"
  },
  {
    title: "民法概要",
    semester: "大一上",
    category: "Law",
    link: "",
    skills: ["Legal Reasoning", "Case Analysis", "Critical Thinking"],
    description: "認識民法基本架構，培養法條理解與案例分析能力。"
  },
  {
    title: "國際政治與經濟學",
    semester: "大一上",
    category: "Political Economy",
    link: "",
    skills: ["Global Perspective", "Policy Analysis", "Critical Thinking"],
    description: "從國際政治與經濟互動中，培養分析全球議題的能力。"
  },
  {
    title: "兩岸議題與政治",
    semester: "大一下",
    category: "Politics",
    link: "",
    skills: ["Issue Analysis", "Political Awareness", "Contextual Thinking"],
    description: "透過兩岸關係議題，培養時事分析與多角度思考能力。"
  },
  {
    title: "Python 生程式 AI",
    semester: "大一下",
    category: "Programming / AI",
    link: "",
    skills: ["Python Basics", "AI Concepts", "Applied Learning"],
    description: "以 Python 與 AI 應用為核心，建立基礎程式能力與 AI 概念。"
  }
];

const projects = [];

const skills = {
  programming: [
    "Python Basics",
    "Programming Logic",
    "Computational Thinking"
  ],
  ai_ml: [
    "AI Concepts",
    "Introductory AI Applications"
  ],
  web: [],
  tools: [
    "Quantitative Analysis",
    "Case Analysis",
    "Structured Thinking"
  ],
  certification_teaching: [
    "C-level Swimming Coach Certification",
    "Swimming Instruction (Kids to Elementary Level)"
  ]
};

function createTagList(tags) {
  if (!tags || tags.length === 0) return "";

  return `
    <div class="tag-list">
      ${tags.map((tag) => `<span class="tag">${tag}</span>`).join("")}
    </div>
  `;
}

function renderSkills() {
  const skillsGrid = document.getElementById("skills-grid");
  if (!skillsGrid) return;

  const skillSections = [
    { key: "programming", title: "Programming" },
    { key: "ai_ml", title: "AI / ML" },
    { key: "web", title: "Web" },
    { key: "tools", title: "Tools" },
    { key: "certification_teaching", title: "Certification / Teaching" }
  ];

  skillsGrid.innerHTML = skillSections
    .map((section) => {
      const items = skills[section.key] || [];
      const content =
        items.length > 0
          ? `
            <div class="skill-list">
              ${items.map((item) => `<span class="skill-tag">${item}</span>`).join("")}
            </div>
          `
          : `<p class="empty-text">目前尚未補充內容。</p>`;

      return `
        <article class="skill-card">
          <h3 class="skill-card-title">${section.title}</h3>
          ${content}
        </article>
      `;
    })
    .join("");
}

function renderCourses() {
  const coursesGrid = document.getElementById("courses-grid");
  if (!coursesGrid) return;

  coursesGrid.innerHTML = courses
    .map((course) => {
      const courseLink = course.link
        ? `<a class="course-link" href="${course.link}" target="_blank" rel="noopener noreferrer">Course Link</a>`
        : "";

      return `
        <article class="course-card">
          <div class="course-meta">
            <span class="course-badge">${course.semester}</span>
            <span class="course-badge">${course.category}</span>
          </div>
          <h3 class="course-title">${course.title}</h3>
          <p class="course-description">${course.description}</p>
          ${createTagList(course.skills)}
          ${courseLink}
        </article>
      `;
    })
    .join("");
}

function renderProjects() {
  const projectsGrid = document.getElementById("projects-grid");
  if (!projectsGrid) return;

  if (projects.length === 0) {
    projectsGrid.innerHTML = `
      <div class="empty-card">
        <h3 class="empty-title">Projects coming soon</h3>
        <p class="empty-text">
          我目前還在整理專案內容，之後會把代表性的作品與成果補上。
        </p>
      </div>
    `;
    return;
  }

  projectsGrid.innerHTML = projects
    .map((project) => {
      const githubLink = project.github
        ? `<a class="project-link" href="${project.github}" target="_blank" rel="noopener noreferrer">GitHub</a>`
        : "";

      const demoLink = project.demo
        ? `<a class="project-link" href="${project.demo}" target="_blank" rel="noopener noreferrer">Demo</a>`
        : "";

      return `
        <article class="project-card">
          <div class="project-header">
            <h3 class="project-title">${project.title}</h3>
            <span class="project-status">${project.status}</span>
          </div>
          <p class="project-short">${project.shortDescription}</p>
          <p class="project-description">${project.description}</p>
          ${createTagList(project.techStack)}
          <div class="project-links">
            ${githubLink}
            ${demoLink}
          </div>
        </article>
      `;
    })
    .join("");
}

document.addEventListener("DOMContentLoaded", () => {
  renderSkills();
  renderCourses();
  renderProjects();
});