// Portfolio Data - Updated with Meet2197's actual repositories and details
const portfolioData = {
    about: {
        title: "About Me",
        content: `
            <h3>$ cat about.txt</h3>
            <p>Hello! I'm Meet Bhatt, a Data Steward at DFG cluster of excellence, Physics of Life, TU Dresden 🏀</p>
            <p>Based in Dresden, Germany, I specialize in:</p>
            <ul>
                <li>🔬 Laboratory Information Management Systems (LIMS)</li>
                <li>📊 Data analysis and visualization</li>
                <li>🧬 Bioinformatics and psychological data analysis</li>
                <li>⚡ Full-stack web development</li>
                <li>🔧 API development and integration</li>
                <li>📈 Scientific data management and workflows</li>
            </ul>
            <p>I bridge the gap between scientific research and technology, creating efficient solutions for complex data challenges.</p>
        `
    },
    skills: {
        title: "Technical Skills",
        content: `
            <h3>$ ls -la skills/</h3>
            <p><strong>Programming Languages:</strong></p>
            <ul>
                <li>JavaScript (ES6+) - Full-stack development</li>
                <li>Python - Data analysis & bioinformatics</li>
                <li>Java - Enterprise applications</li>
                <li>R - Statistical analysis & visualization</li>
                <li>HTML5 & CSS3 - Modern web interfaces</li>
            </ul>
            <p><strong>Frameworks & Libraries:</strong></p>
            <ul>
                <li>React.js - Interactive UIs</li>
                <li>Node.js - Server-side applications</li>
                <li>Vue.js - Progressive web apps</li>
                <li>Chart.js - Data visualization</li>
                <li>Firebase - Real-time databases</li>
            </ul>
            <p><strong>Scientific & Data Tools:</strong></p>
            <ul>
                <li>LIMS Systems - Laboratory data management</li>
                <li>MongoDB - NoSQL databases</li>
                <li>APIs - RESTful services</li>
                <li>Git & GitHub - Version control</li>
                <li>JSON Processing - Data interchange</li>
            </ul>
        `
    },
    projects: {
        title: "Featured Projects",
        content: `
            <h3>$ find projects/ -type f -name "*.md"</h3>
            <div class="projects-section">
                <div class="project-divider">───────────────────────────────────────────────────────────────</div>
                
                <div class="project-item">
                    <h4>1. Terminal Portfolio 💻</h4>
                    <ul>
                        <li>Interactive terminal-style portfolio website</li>
                        <li>Command-line interface with clickable buttons</li>
                        <li>Technologies: HTML, CSS, JavaScript, GitHub Actions</li>
                        <li><a href="https://github.com/Meet2197/Meet2197.github.io" target="_blank">→ View Repository</a></li>
                    </ul>
                </div>

                <div class="project-item">
                    <h4>2. LIMS System 🛒</h4>
                    <ul>
                        <li>Laboratory Information Management System</li>
                        <li>Streamlines laboratory operations & improves data accuracy</li>
                        <li>Technologies: JavaScript, MIT License</li>
                        <li><a href="https://github.com/Meet2197/LIMS-system" target="_blank">→ View Repository</a></li>
                    </ul>
                </div>

                <div class="project-item">
                    <h4>3. JSON Viewer 📋</h4>
                    <ul>
                        <li>Tool for observing and analyzing JSON files</li>
                        <li>Clean interface for data visualization</li>
                        <li>Technologies: JavaScript, MIT License</li>
                        <li><a href="https://github.com/Meet2197/JSON-viewer" target="_blank">→ View Repository</a></li>
                    </ul>
                </div>

                <div class="project-item">
                    <h4>4. DRE API 🌤️</h4>
                    <ul>
                        <li>Java-based API development project</li>
                        <li>Backend services and data processing</li>
                        <li>Technologies: Java, Apache License 2.0</li>
                        <li><a href="https://github.com/Meet2197/DRE-Api" target="_blank">→ View Repository</a></li>
                    </ul>
                </div>

                <div class="project-item">
                    <h4>5. Psychological Data Analysis 🧠</h4>
                    <ul>
                        <li>Advanced statistical analysis of psychological datasets</li>
                        <li>Data processing and visualization tools</li>
                        <li>Technologies: Python, Scientific Computing</li>
                        <li><a href="https://github.com/Meet2197/Psychological-data-analysis" target="_blank">→ View Repository</a></li>
                    </ul>
                </div>

                <div class="project-item">
                    <h4>6. Metabolites Visualisation 🔬</h4>
                    <ul>
                        <li>Bioinformatics tool for metabolite data visualization</li>
                        <li>Scientific data analysis and reporting</li>
                        <li>Technologies: R, Statistical Analysis</li>
                        <li><a href="https://github.com/Meet2197/Metabolites-Visualisation" target="_blank">→ View Repository</a></li>
                    </ul>
                </div>
            </div>
        `
    },
    contact: {
        title: "Contact Information",
        content: `
            <h3>$ cat contact.txt</h3>
            <p>📍 <strong>Location:</strong> Dresden, Germany</p>
            <p>🏢 <strong>Position:</strong> Data Steward at DFG cluster of excellence, Physics of Life, TU Dresden</p>
            <p>Let's connect! You can reach me through:</p>
            <ul>
                <li>📧 Email: <a href="mailto:meet@physicsoflife.tu-dresden.de">meet@physicsoflife.tu-dresden.de</a></li>
                <li>🔗 LinkedIn: <a href="https://linkedin.com/in/meet2197" target="_blank">linkedin.com/in/meet2197</a></li>
                <li>🐙 GitHub: <a href="https://github.com/Meet2197" target="_blank">github.com/Meet2197</a></li>
                <li>🐦 Twitter: <a href="https://twitter.com/meet2197" target="_blank">@meet2197</a></li>
            </ul>
            <p>I'm always interested in discussing:</p>
            <ul>
                <li>🔬 Scientific data management projects</li>
                <li>💻 Full-stack development opportunities</li>
                <li>🧬 Bioinformatics collaborations</li>
                <li>📊 Data analysis challenges</li>
            </ul>
        `
    },
    resume: {
        title: "Resume & Experience",
        content: `
            <h3>$ cat resume.pdf</h3>
            <p><strong>Current Position:</strong></p>
            <ul>
                <li>🏢 Data Steward at DFG cluster of excellence</li>
                <li>🎯 Physics of Life, TU Dresden</li>
                <li>📍 Dresden, Germany</li>
            </ul>
            
            <div class="cv-download-section">
                <h4>📄 Download Resume:</h4>
                <div class="cv-buttons">
                    <button class="cv-download-btn" onclick="downloadCV()">
                        <span class="cv-icon">📥</span>
                        Download PDF CV
                    </button>
                    <button class="cv-preview-btn" onclick="previewCV()">
                        <span class="cv-icon">👁️</span>
                        Preview CV
                    </button>
                </div>
            </div>
            
            <p><strong>Experience Highlights:</strong></p>
            <ul>
                <li>🔬 Laboratory Information Management Systems (LIMS)</li>
                <li>📊 Scientific data analysis and visualization</li>
                <li>💻 Full-stack web development</li>
                <li>🧬 Bioinformatics and psychological data analysis</li>
                <li>🔧 API development and system integration</li>
                <li>📈 Research data management workflows</li>
            </ul>
            
            <p><strong>Technologies & Tools:</strong></p>
            <ul>
                <li>Languages: JavaScript, Python, Java, R, HTML/CSS</li>
                <li>Frameworks: React.js, Node.js, Vue.js</li>
                <li>Databases: MongoDB, Firebase</li>
                <li>Tools: Git, GitHub, Chart.js, APIs</li>
            </ul>
            
            <p><strong>Education:</strong></p>
            <ul>
                <li>🎓 Master's Degree (Research documented in GitHub)</li>
                <li>📚 Specialized in Physics of Life research</li>
                <li>🔬 Focus on data stewardship and bioinformatics</li>
            </ul>
        `
    },
    github: {
        title: "GitHub Profile & Repositories",
        content: `
            <h3>$ git log --oneline --all</h3>
            <p>🐙 <strong>GitHub Profile:</strong> <a href="https://github.com/Meet2197" target="_blank">github.com/Meet2197</a></p>
            <p>📊 <strong>Activity:</strong> Active contributor with regular commits</p>
            
            <p><strong>🌟 Featured Repositories:</strong></p>
            <ul>
                <li><a href="https://github.com/Meet2197/Meet2197.github.io" target="_blank">📱 Terminal Portfolio</a> - Interactive portfolio website</li>
                <li><a href="https://github.com/Meet2197/LIMS-system" target="_blank">🔬 LIMS System</a> - Laboratory Information Management</li>
                <li><a href="https://github.com/Meet2197/JSON-viewer" target="_blank">📋 JSON Viewer</a> - Data visualization tool</li>
                <li><a href="https://github.com/Meet2197/DRE-Api" target="_blank">⚡ DRE API</a> - Java-based API services</li>
                <li><a href="https://github.com/Meet2197/Psychological-data-analysis" target="_blank">🧠 Psychological Data Analysis</a> - Python analytics</li>
                <li><a href="https://github.com/Meet2197/Metabolites-Visualisation" target="_blank">🔬 Metabolites Visualisation</a> - R-based bioinformatics</li>
                <li><a href="https://github.com/Meet2197/Master-arbeit" target="_blank">🎓 Master's Thesis</a> - Academic research project</li>
            </ul>
            
            <p><strong>🔧 Technologies Used:</strong></p>
            <ul>
                <li>JavaScript - Web development & APIs</li>
                <li>Python - Data analysis & bioinformatics</li>
                <li>Java - Enterprise applications</li>
                <li>R - Statistical analysis</li>
                <li>HTML/CSS - Frontend development</li>
            </ul>
            
            <p><strong>📈 Recent Activity:</strong></p>
            <ul>
                <li>🔄 Latest update: Jul 10, 2025 (Terminal Portfolio)</li>
                <li>🛠️ LIMS System updated: Jul 9, 2025</li>
                <li>📊 JSON Viewer updated: Jul 8, 2025</li>
                <li>⚡ Active development across multiple projects</li>
            </ul>
        `
    }
};

// Enhanced show section function with animations
function showSection(section) {
    const contentDisplay = document.getElementById('content-display');
    const currentCommand = document.getElementById('current-command');
    const contentOutput = document.getElementById('content-output');
    
    if (portfolioData[section]) {
        // Add loading animation
        contentDisplay.classList.add('loading');
        
        setTimeout(() => {
            currentCommand.textContent = section;
            contentOutput.innerHTML = portfolioData[section].content;
            contentDisplay.classList.remove('hidden', 'loading');
            
            // Add typing effect for project items
            const projectItems = contentOutput.querySelectorAll('.project-item');
            projectItems.forEach((item, index) => {
                item.style.opacity = '0';
                item.style.transform = 'translateY(20px)';
                setTimeout(() => {
                    item.style.transition = 'all 0.5s ease';
                    item.style.opacity = '1';
                    item.style.transform = 'translateY(0)';
                }, index * 200);
            });
            
            // Smooth scroll to content
            setTimeout(() => {
                contentDisplay.scrollIntoView({ 
                    behavior: 'smooth', 
                    block: 'start' 
                });
            }, 100);
        }, 500);
    }
}

// CV Download and Preview Functions
function downloadCV() {
    // Create a loading animation
    const button = event.target.closest('.cv-download-btn');
    const originalContent = button.innerHTML;
    button.innerHTML = '<span class="cv-icon">⏳</span> Preparing Download...';
    button.disabled = true;
    
    // Simulate download preparation
    setTimeout(() => {
        // Reset button
        button.innerHTML = originalContent;
        button.disabled = false;
        
        // Check if CV file exists, if not, show instructions
        if (!document.getElementById('cv-file-input')) {
            showCVUploadInstructions();
        } else {
            // Trigger download
            const link = document.createElement('a');
            link.href = 'assets/Meet2197_CV.pdf'; // Update this path to your CV
            link.download = 'Meet2197_CV.pdf';
            link.click();
        }
    }, 1500);
}

function previewCV() {
    // Create modal for CV preview
    const modal = document.createElement('div');
    modal.className = 'cv-modal';
    modal.innerHTML = `
        <div class="cv-modal-content">
            <div class="cv-modal-header">
                <h3>📄 CV Preview</h3>
                <button class="cv-modal-close" onclick="closeCVModal()">&times;</button>
            </div>
            <div class="cv-modal-body">
                <iframe src="assets/Meet2197_CV.pdf" width="100%" height="600px" frameborder="0">
                    <p>Your browser does not support PDFs. 
                    <a href="assets/Meet2197_CV.pdf" target="_blank">Download the PDF</a>.</p>
                </iframe>
            </div>
        </div>
    `;
    
    document.body.appendChild(modal);
    
    // Add event listener for clicking outside modal
    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            closeCVModal();
        }
    });
}

function closeCVModal() {
    const modal = document.querySelector('.cv-modal');
    if (modal) {
        modal.remove();
    }
}

function showCVUploadInstructions() {
    const modal = document.createElement('div');
    modal.className = 'cv-modal';
    modal.innerHTML = `
        <div class="cv-modal-content">
            <div class="cv-modal-header">
                <h3>📋 CV Setup Instructions</h3>
                <button class="cv-modal-close" onclick="closeCVModal()">&times;</button>
            </div>
            <div class="cv-modal-body">
                <div class="cv-instructions">
                    <h4>🔧 How to add your CV:</h4>
                    <ol>
                        <li>Create an <code>assets/</code> folder in your repository</li>
                        <li>Upload your CV as <code>Meet2197_CV.pdf</code></li>
                        <li>The file structure should be:
                            <pre>
Meet2197.github.io/
├── assets/
│   └── Meet2197_CV.pdf
├── index.html
├── style.css
└── script.js
                            </pre>
                        </li>
                        <li>Commit and push to GitHub</li>
                    </ol>
                    
                    <h4>🎯 Alternative: Direct Link</h4>
                    <p>You can also link to your CV hosted elsewhere:</p>
                    <ul>
                        <li>Google Drive (with public sharing)</li>
                        <li>Dropbox public link</li>
                        <li>Your personal website</li>
                    </ul>
                    
                    <div class="cv-temp-buttons">
                        <button class="cv-download-btn" onclick="window.open('https://drive.google.com/file/d/YOUR_DRIVE_ID/view', '_blank')">
                            <span class="cv-icon">🔗</span>
                            Example: Google Drive Link
                        </button>
                    </div>
                </div>
            </div>
        </div>
    `;
    
    document.body.appendChild(modal);
}

// Terminal command simulation
function simulateTyping(element, text, speed = 50) {
    element.textContent = '';
    let i = 0;
    const typing = setInterval(() => {
        if (i < text.length) {
            element.textContent += text.charAt(i);
            i++;
        } else {
            clearInterval(typing);
        }
    }, speed);
}

// Enhanced interactive features
document.addEventListener('DOMContentLoaded', function() {
    // Add typing effect to welcome message
    const welcomeTitle = document.querySelector('.welcome-title');
    if (welcomeTitle) {
        const originalText = welcomeTitle.textContent;
        simulateTyping(welcomeTitle, originalText, 100);
    }
    
    // Enhanced button interactions
    const buttons = document.querySelectorAll('.terminal-nav-button');
    
    buttons.forEach(button => {
        button.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-2px) scale(1.02)';
            this.style.boxShadow = '0 8px 25px rgba(0, 255, 0, 0.3)';
        });
        
        button.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
            this.style.boxShadow = '';
        });
        
        button.addEventListener('click', function() {
            // Add click animation
            this.style.transform = 'translateY(0) scale(0.98)';
            setTimeout(() => {
                this.style.transform = 'translateY(-2px) scale(1.02)';
            }, 150);
        });
    });
    
    // Keyboard navigation
    document.addEventListener('keydown', function(e) {
        switch(e.key) {
            case 'Escape':
                document.getElementById('content-display').classList.add('hidden');
                closeCVModal(); // Close CV modal if open
                break;
            case '1':
                if (e.ctrlKey) showSection('about');
                break;
            case '2':
                if (e.ctrlKey) showSection('skills');
                break;
            case '3':
                if (e.ctrlKey) showSection('projects');
                break;
            case '4':
                if (e.ctrlKey) showSection('contact');
                break;
            case '5':
                if (e.ctrlKey) showSection('resume');
                break;
            case '6':
                if (e.ctrlKey) showSection('github');
                break;
        }
    });
    
    // Add terminal cursor blinking animation
    const cursors = document.querySelectorAll('.cursor');
    cursors.forEach(cursor => {
        setInterval(() => {
            cursor.style.opacity = cursor.style.opacity === '0' ? '1' : '0';
        }, 500);
    });
    
    // Add matrix rain effect (optional)
    createMatrixRain();
});

// Matrix rain effect function
function createMatrixRain() {
    const canvas = document.createElement('canvas');
    canvas.style.position = 'fixed';
    canvas.style.top = '0';
    canvas.style.left = '0';
    canvas.style.width = '100%';
    canvas.style.height = '100%';
    canvas.style.pointerEvents = 'none';
    canvas.style.zIndex = '-1';
    canvas.style.opacity = '0.1';
    document.body.appendChild(canvas);
    
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%^&*()';
    const charArray = chars.split('');
    const fontSize = 14;
    const columns = canvas.width / fontSize;
    
    const drops = [];
    for (let x = 0; x < columns; x++) {
        drops[x] = 1;
    }
    
    function draw() {
        ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        
        ctx.fillStyle = '#00ff00';
        ctx.font = fontSize + 'px monospace';
        
        for (let i = 0; i < drops.length; i++) {
            const text = charArray[Math.floor(Math.random() * charArray.length)];
            ctx.fillText(text, i * fontSize, drops[i] * fontSize);
            
            if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
                drops[i] = 0;
            }
            drops[i]++;
        }
    }
    
    setInterval(draw, 100);
}

// Enhanced console easter egg
console.log(`
    ╔══════════════════════════════════════════════════════════════╗
    ║               Welcome to Meet Bhatt's Terminal Portfolio     ║
    ║                                                              ║
    ║  👋 Hello! I'm Meet - Data Steward at TU Dresden             ║
    ║  🔬 Specializing in LIMS and bioinformatics                  ║
    ║  💻 Full-stack developer with scientific background          ║
    ║                                                              ║
    ║  🎯 Keyboard shortcuts:                                      ║
    ║     Ctrl+1: About    Ctrl+2: Skills    Ctrl+3: Projects      ║
    ║     Ctrl+4: Contact  Ctrl+5: Resume    Ctrl+6: GitHub        ║
    ║     Esc: Hide content                                        ║
    ║                                                              ║
    ║  🚀 Thanks for exploring my portfolio!                       ║
    ║  📧 Feel free to reach out: meet.bhatt@etu.unice.fr          ║
    ╚══════════════════════════════════════════════════════════════╝
`);

// Add some fun terminal commands
const easterEggs = {
    'ls': 'about.txt  skills.txt  projects.txt  contact.txt  resume.pdf',
    'pwd': '/home/visitor/Meet_Bhatt-portfolio',
    'whoami': 'visitor@Meet_Bhatt-terminal',
    'date': new Date().toLocaleString(),
    'uptime': 'System running since portfolio launch',
    'ps': 'PID TTY TIME CMD\n1234 pts/0 00:00:01 terminal-portfolio',
    'free': 'total: ∞ GB, used: 0.1 GB, free: ∞ GB (creativity has no limits)',
    'df': 'Filesystem: /dev/creativity mounted on /portfolio (100% awesome)',
    'cat /etc/motd': 'Welcome to Meet_Bhatt\'s Terminal Portfolio v2.0\nBuilt with ❤️ in Dresden, Germany'
};

// Add terminal command functionality (bonus feature)
function handleTerminalCommand(command) {
    const output = easterEggs[command.toLowerCase().trim()];
    if (output) {
        return `<div class="terminal-line"><span class="prompt">visitor@Meet_Bhatt:~$</span> ${command}</div>
                <div class="terminal-line">${output}</div>`;
    }
    return `<div class="terminal-line"><span class="prompt">visitor@Meet_Bhatt:~$</span> ${command}</div>
            <div class="terminal-line">Command not found. Try: about, skills, projects, contact, resume, github</div>`;
}

// Export functions for potential future use
window.portfolioFunctions = {
    showSection,
    simulateTyping,
    handleTerminalCommand,
    downloadCV,
    previewCV,
    closeCVModal
};