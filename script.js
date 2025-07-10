class TerminalPortfolio {
    constructor() {
        this.output = document.getElementById('output');
        this.input = document.getElementById('terminal-input');
        this.terminal = document.querySelector('.terminal');
        this.currentTheme = 'dark';
        
        this.commands = {
            help: this.showHelp.bind(this),
            about: this.showAbout.bind(this),
            skills: this.showSkills.bind(this),
            projects: this.showProjects.bind(this),
            contact: this.showContact.bind(this),
            resume: this.showResume.bind(this),
            github: this.openGithub.bind(this),
            linkedin: this.openLinkedIn.bind(this),
            clear: this.clearTerminal.bind(this),
            theme: this.toggleTheme.bind(this),
            whoami: this.whoami.bind(this),
            date: this.showDate.bind(this),
            pwd: this.showPwd.bind(this),
            ls: this.listFiles.bind(this),
        };
        
        this.initializeEventListeners();
        this.showWelcome();
    }
    
    initializeEventListeners() {
        this.input.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                this.executeCommand();
            }
        });
        
        document.querySelectorAll('.cmd-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const command = e.target.dataset.command;
                this.executeCommand(command);
            });
        });
    }
    
    executeCommand(command = null) {
        const cmd = command || this.input.value.trim().toLowerCase();
        
        if (cmd) {
            this.addToOutput(`visitor@meet2197:~$ ${cmd}`);
            
            if (this.commands[cmd]) {
                this.commands[cmd]();
            } else {
                this.addToOutput(`Command not found: ${cmd}. Type 'help' for available commands.`, 'error');
            }
        }
        
        this.input.value = '';
        this.scrollToBottom();
    }
    
    addToOutput(text, className = '') {
        const div = document.createElement('div');
        div.textContent = text;
        if (className) {
            div.className = className;
        }
        this.output.appendChild(div);
    }
    
    scrollToBottom() {
        this.output.scrollTop = this.output.scrollHeight;
    }
    
    showWelcome() {
        const welcome = `
╔══════════════════════════════════════════════════════════════╗
║                    Welcome to Meet2197's Portfolio           ║
║                                                              ║
║  Type 'help' to see available commands or click the buttons  ║
║  on the right to navigate through my portfolio.              ║
╚══════════════════════════════════════════════════════════════╝
        `;
        this.addToOutput(welcome, 'info');
    }
    
    showHelp() {
        const help = `
Available commands:
┌─────────────────────────────────────────────────────────────┐
│  about      - Learn more about me                          │
│  skills     - View my technical skills                     │
│  projects   - See my projects                              │
│  contact    - Get my contact information                   │
│  resume     - View/download my resume                      │
│  github     - Visit my GitHub profile                      │
│  linkedin   - Visit my LinkedIn profile                    │
│  clear      - Clear the terminal                           │
│  theme      - Toggle between dark/light theme              │
│  whoami     - Display current user                         │
│  date       - Show current date and time                   │
│  pwd        - Show current directory                       │
│  ls         - List files and directories                   │
└─────────────────────────────────────────────────────────────┘
        `;
        this.addToOutput(help, 'info');
    }
    
    showAbout() {
        const about = `
About Me:
─────────────────────────────────────────────────────────────
Hello! I'm Meet2197, a passionate Full Stack Developer with expertise in
modern web technologies. I love creating efficient, scalable
solutions and learning new technologies.

🎯 Focus Areas:
  • Frontend Development (React, Vue, Angular)
  • Backend Development (Node.js, Python, Java)
  • Database Design (SQL, NoSQL)
  • Cloud Technologies (AWS, Azure)
  • DevOps & CI/CD

🌟 What drives me:
  • Building user-centric applications
  • Writing clean, maintainable code
  • Continuous learning and improvement
  • Collaborating with amazing teams
        `;
        this.addToOutput(about, 'success');
    }
    
    showSkills() {
        const skills = `
Technical Skills:
─────────────────────────────────────────────────────────────
Frontend:
  ▸ JavaScript (ES6+), TypeScript
  ▸ React.js, Vue.js, Angular
  ▸ HTML5, CSS3, SASS/SCSS
  ▸ Responsive Design, Bootstrap, Tailwind CSS

Backend:
  ▸ Node.js, Express.js
  ▸ Python (Django, Flask)
  ▸ Java (Spring Boot)
  ▸ RESTful APIs, GraphQL

Database:
  ▸ MongoDB, PostgreSQL, MySQL
  ▸ Redis, Firebase

DevOps & Tools:
  ▸ Git, Docker, Kubernetes
  ▸ AWS, Azure, Google Cloud
  ▸ CI/CD, GitHub Actions
  ▸ Linux, Bash scripting
        `;
        this.addToOutput(skills, 'info');
    }
    
    showProjects() {
        const projects = `
Featured Projects:
─────────────────────────────────────────────────────────────
1. Terminal Portfolio 💻
   • Interactive terminal-style portfolio website
   • Command-line interface with clickable buttons
   • Technologies: HTML, CSS, JavaScript, GitHub Actions

2. E-Commerce Platform 🛒
   • Full-stack application with modern frameworks
   • Payment integration, user authentication
   • Technologies: React, Node.js, MongoDB

3. Task Management App 📋
   • Real-time collaboration tool
   • Drag-and-drop interface, notifications
   • Technologies: Vue.js, Firebase

4. Weather Dashboard 🌤️
   • Interactive weather application
   • Location-based forecasts, data visualization
   • Technologies: JavaScript, Chart.js, APIs

Visit my GitHub for more projects and source code!
        `;
        this.addToOutput(projects, 'success');
    }
    
    showContact() {
        const contact = `
Contact Information:
─────────────────────────────────────────────────────────────
🐱 GitHub: https://github.com/Meet2197
💼 LinkedIn: https://linkedin.com/in/meet2197
📧 Email: meet2197@example.com
🌐 Portfolio: https://meet2197.github.io
📱 Available for collaboration opportunities!

Feel free to reach out for project collaborations,
questions, or just to say hello!
        `;
        this.addToOutput(contact, 'info');
    }
    
    showResume() {
        const resume = `
Resume & Experience:
─────────────────────────────────────────────────────────────
📄 Portfolio: https://meet2197.github.io
🔗 GitHub: https://github.com/Meet2197

📊 Highlights:
   • Full Stack Developer
   • Multiple programming languages
   • Modern web technologies
   • Open source contributions
   • Continuous learning mindset

📚 Always learning and building new projects!
        `;
        this.addToOutput(resume, 'warning');
    }
    
    openGithub() {
        this.addToOutput('Opening GitHub profile...', 'info');
        window.open('https://github.com/Meet2197', '_blank');
    }
    
    openLinkedIn() {
        this.addToOutput('Opening LinkedIn profile...', 'info');
        window.open('https://linkedin.com/in/meet2197', '_blank');
    }
    
    clearTerminal() {
        this.output.innerHTML = '';
        this.showWelcome();
    }
    
    toggleTheme() {
        this.currentTheme = this.currentTheme === 'dark' ? 'light' : 'dark';
        this.terminal.className = `terminal ${this.currentTheme}`;
        this.addToOutput(`Theme switched to ${this.currentTheme} mode`, 'success');
    }
    
    whoami() {
        this.addToOutput('Meet2197 - Full Stack Developer', 'info');
    }
    
    showDate() {
        const now = new Date();
        this.addToOutput(now.toString(), 'info');
    }
    
    showPwd() {
        this.addToOutput('/home/meet2197/portfolio', 'info');
    }
    
    listFiles() {
        const files = `
total 8
drwxr-xr-x  2 meet2197 meet2197 4096 ${new Date().toDateString()} .
drwxr-xr-x  3 meet2197 meet2197 4096 ${new Date().toDateString()} ..
-rw-r--r--  1 meet2197 meet2197  234 ${new Date().toDateString()} about.txt
-rw-r--r--  1 meet2197 meet2197  456 ${new Date().toDateString()} skills.txt
-rw-r--r--  1 meet2197 meet2197  789 ${new Date().toDateString()} projects.txt
-rw-r--r--  1 meet2197 meet2197  123 ${new Date().toDateString()} contact.txt
-rw-r--r--  1 meet2197 meet2197  345 ${new Date().toDateString()} portfolio.html
        `;
        this.addToOutput(files, 'info');
    }
}

// Initialize the terminal when the page loads
document.addEventListener('DOMContentLoaded', () => {
    new TerminalPortfolio();
});