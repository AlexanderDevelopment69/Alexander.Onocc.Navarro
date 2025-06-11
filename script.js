// Navegación simple para sidebar
const links = document.querySelectorAll('.sidebar-nav a');
const sections = document.querySelectorAll('main section');

links.forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    links.forEach(l => l.classList.remove('active'));
    link.classList.add('active');

    const target = link.getAttribute('href').substring(1);
    sections.forEach(section => {
      section.style.display = section.id === target ? 'block' : 'none';
    });
  });
});

// Inicial: mostrar sólo 'about'
sections.forEach(section => (section.style.display = 'none'));
document.getElementById('about').style.display = 'block';

// Datos de badges para agregar dinámicamente

const badgesData = {
  languages: [
    {
      alt: "Java",
      src: "https://img.shields.io/badge/Java-%23ED8B00.svg?style=for-the-badge&logo=openjdk&logoColor=white",
    },
    {
      alt: "C#",
      src: "https://img.shields.io/badge/C%23-%23239120.svg?style=for-the-badge&logo=c-sharp&logoColor=white",
    },
    {
      alt: "Python",
      src: "https://img.shields.io/badge/Python-3670A0?style=for-the-badge&logo=python&logoColor=ffdd54",
    },
    {
      alt: "PHP",
      src: "https://img.shields.io/badge/PHP-%23777BB4.svg?style=for-the-badge&logo=php&logoColor=white",
    },
    {
      alt: "C++",
      src: "https://img.shields.io/badge/C++-%2300599C.svg?style=for-the-badge&logo=c%2B%2B&logoColor=white",
    },
  ],
  frameworks: [
    {
      alt: "Spring",
      src: "https://img.shields.io/badge/Spring-%236DB33F.svg?style=for-the-badge&logo=spring&logoColor=white",
    },
    {
      alt: ".NET",
      src: "https://img.shields.io/badge/.NET-512BD4?style=for-the-badge&logo=dotnet&logoColor=white",
    },
    {
      alt: "React",
      src: "https://img.shields.io/badge/React-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB",
    },
    {
      alt: "Angular",
      src: "https://img.shields.io/badge/Angular-%23DD0031.svg?style=for-the-badge&logo=angular&logoColor=white",
    },
    {
      alt: "Vue.js",
      src: "https://img.shields.io/badge/Vue.js-35495E?style=for-the-badge&logo=vue.js&logoColor=4FC08D",
    },
    {
      alt: "Laravel",
      src: "https://img.shields.io/badge/Laravel-F55247?style=for-the-badge&logo=laravel&logoColor=white",
    },
    {
      alt: "JavaFX",
      src: "https://img.shields.io/badge/JavaFX-FF6F00?style=for-the-badge&logo=java&logoColor=white",
    },
  ],
  databases: [
    {
      alt: "MySQL",
      src: "https://img.shields.io/badge/MySQL-%2300f.svg?style=for-the-badge&logo=mysql&logoColor=white",
    },
    {
      alt: "PostgreSQL",
      src: "https://img.shields.io/badge/PostgreSQL-%23316192.svg?style=for-the-badge&logo=postgresql&logoColor=white",
    },
    {
      alt: "SQL Server",
      src: "https://img.shields.io/badge/SQL_Server-CC2927?style=for-the-badge&logo=microsoft-sql-server&logoColor=white",
    },
    {
      alt: "Oracle",
      src: "https://img.shields.io/badge/Oracle-F80000?style=for-the-badge&logo=oracle&logoColor=white",
    },
    {
      alt: "MongoDB",
      src: "https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white",
    },
  ],
  cloud: [
    {
      alt: "Azure",
      src: "https://img.shields.io/badge/Azure-0072C6?style=for-the-badge&logo=microsoftazure&logoColor=white",
    },
    {
      alt: "GCP",
      src: "https://img.shields.io/badge/GCP-4285F4?style=for-the-badge&logo=google-cloud&logoColor=white",
    },
    {
      alt: "AWS",
      src: "https://img.shields.io/badge/AWS-232F3E?style=for-the-badge&logo=amazon-aws&logoColor=white",
    },
    {
      alt: "Docker",
      src: "https://img.shields.io/badge/Docker-%230db7ed.svg?style=for-the-badge&logo=docker&logoColor=white",
    },
    {
      alt: "Kubernetes",
      src: "https://img.shields.io/badge/Kubernetes-326CE5?style=for-the-badge&logo=kubernetes&logoColor=white",
    },
  ],
  data: [
    {
      alt: "Power BI",
      src: "https://img.shields.io/badge/Power%20BI-F2C811?style=for-the-badge&logo=powerbi&logoColor=white",
    },
    {
      alt: "Excel",
      src: "https://img.shields.io/badge/Excel-217346?style=for-the-badge&logo=microsoft-excel&logoColor=white",
    },
  ],
  tools: [
    {
      alt: "Linux",
      src: "https://img.shields.io/badge/Linux-FCC624?style=for-the-badge&logo=linux&logoColor=black",
    },
    {
      alt: "Git",
      src: "https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=git&logoColor=white",
    },
    {
      alt: "GitHub",
      src: "https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white",
    },
  ],
};

function renderBadges() {
  Object.entries(badgesData).forEach(([sectionId, badges]) => {
    const container = document.getElementById(sectionId);
    if (!container) return;
    badges.forEach(badge => {
      const img = document.createElement('img');
      img.alt = badge.alt;
      img.src = badge.src;
      container.appendChild(img);
    });
  });
}

renderBadges();
