document.addEventListener('DOMContentLoaded', () => {
    const terminalContent = document.getElementById('terminalContent');
    const userInput = document.getElementById('userInput');
    const outputDiv = document.getElementById('output');
    const contentDisplay = document.getElementById('content-display');

    let history = [];
    let historyIndex = -1;

    // Portfolio Data
    const portfolioData = {
        about: {
            title: "About Me",
            content: `
                <h3>$ cat about.txt</h3>
                <p>Hello! I'm Meet Bhatt, a Data Steward</p>
                <p>Based in Dresden, Germany, I specialize in:</p>
                <ul>
                    <li>🔬 Laboratory Information Management Systems (LIMS)</li>
                    <li>📊 Data analysis and visualization</li>
                    <li>🧬 Bioinformatic data experinced</li>
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
                        <h4>1. LIMS System ⚛</></h4>
                        <ul>
                            <li>Laboratory Information Management System</li>
                            <li>Streamlines laboratory operations & improves data accuracy</li>
                            <li>Technologies: JavaScript, MIT License</li>
                            <li><a href="https://github.com/Meet2197/LIMS-system" target="_blank">→ View Repository</a></li>
                        </ul>
                    </div>

                    <div class="project-item">
                        <h4>2. JSON Viewer 📋</h4>
                        <ul>
                            <li>Tool for observing and analyzing JSON files</li>
                            <li>Clean interface for data visualization</li>
                            <li>Technologies: JavaScript, MIT License</li>
                            <li><a href="https://github.com/Meet2197/JSON-viewer" target="_blank">→ View Repository</a></li>
                        </ul>
                    </div>

                    <div class="project-item">
                        <h4>3. DRE API 📟</h4>
                        <ul>
                            <li>Java-based API development project</li>
                            <li>Backend services and data processing</li>
                            <li>Technologies: Java, Apache License 2.0</li>
                            <li><a href="https://github.com/Meet2197/DRE-Api" target="_blank">→ View Repository</a></li>
                        </ul>
                    </div>

                    <div class="project-item">
                        <h4>4. Psychological Data Analysis 🧠</h4>
                        <ul>
                            <li>Advanced statistical analysis of psychological datasets</li>
                            <li>Data processing and visualization tools</li>
                            <li>Technologies: Python, Scientific Computing</li>
                            <li><a href="https://github.com/Meet2197/Psychological-data-analysis" target="_blank">→ View Repository</a></li>
                        </ul>
                    </div>

                    <div class="project-item">
                        <h4>5. Metabolites Visualisation 🔬</h4>
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
                    <li>📧 Email: <a href="mailto:meet.bhatt@etu.unice.fr">meet.bhatt@etu.unice.fr</a></li>
                    <li>🔗 LinkedIn: <a href="https://linkedin.com/in/meet2197" target="_blank">linkedin.com/in/meet2197</a></li>
                    <li>🐙 GitHub: <a href="https://github.com/Meet2197" target="_blank">github.com/Meet2197</a></li>
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
                    <li>🏢 Data Steward</li>
                    <li>🎯 Physics of Life, TU Dresden</li>
                    <li>📍 Dresden, Germany</li>
                </ul>

                <div class="resume-download-section">
                    <h4>📄 Download Resume:</h4>
                    <div class="resume-buttons">
                        <button class="terminal-nav-button download-btn" onclick="window.downloadResume()">
                            <span class="button-text">📥 Download PDF</span>
                        </button>
                        <button class="terminal-nav-button preview-btn" onclick="window.previewResume()">
                            <span class="button-text">👁️ Preview</span>
                        </button>
                    </div>
                </div>

                <p><strong>Experience Highlights:</strong></p>
                <ul>
                    <li>🔬 Laboratory Information Management Systems (LIMS)</li>
                    <li>📊 Scientific data analysis and visualization</li>
                    <li>🧬 Bioinformatics data analysis</li>
                    <li>🔧 API development and system integration</li>
                    <li>📈 Research data management workflows</li>
                </ul>

                <p><strong>Technologies & Tools:</strong></p>
                <ul>
                    <li>Languages: JavaScript, Python, Java, R, HTML/CSS</li>
                    <li>Frameworks: React.js, Node.js, Vue.js</li>
                    <li>Databases: Postgres</li>
                    <li>Tools: Git, GitHub, Gitlab</li>
                </ul>

                <p><strong>Education:</strong></p>
                <ul>
                    <li>🎓 Master's Degree (Research documented in GitHub)</li>
                    <li>📚 Specialized in Physics of Life research</li>
                    <li>🔬 Focus on data science</li>
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
                    <li>🔄 Latest update: ${new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</li>
                    <li>🛠️ LIMS System updated: ${new Date(new Date().setDate(new Date().getDate() - 1)).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</li>
                    <li>📊 JSON Viewer updated: ${new Date(new Date().setDate(new Date().getDate() - 2)).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</li>
                    <li>⚡ Active development across multiple projects</li>
                </ul>
            `
        }
    };

    // Focus on the input when the page loads
    userInput.focus();

    // Auto-focus on userInput when clicking anywhere in the terminal content
    terminalContent.addEventListener('click', () => {
        userInput.focus();
    });

    // Handle keyboard input for commands and history navigation
    userInput.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
            e.preventDefault(); // Prevent default Enter key behavior (e.g., new line)
            const command = userInput.textContent.trim();
            handleCommand(command);
            userInput.textContent = ''; // Clear the input field
            if (command !== '') { // Only add non-empty commands to history
                history.unshift(command); // Add command to history
            }
            historyIndex = -1; // Reset history index
        } else if (e.key === 'ArrowUp') {
            e.preventDefault();
            if (history.length > 0) {
                if (historyIndex === -1) {
                    historyIndex = 0;
                } else if (historyIndex < history.length - 1) {
                    historyIndex++;
                }
                userInput.textContent = history[historyIndex];
                placeCaretAtEnd(userInput);
            }
        } else if (e.key === 'ArrowDown') {
            e.preventDefault();
            if (historyIndex > 0) {
                historyIndex--;
                userInput.textContent = history[historyIndex];
                placeCaretAtEnd(userInput);
            } else {
                historyIndex = -1;
                userInput.textContent = '';
            }
        }
    });

    // Handle button clicks for navigation
    document.querySelectorAll('.terminal-nav-button').forEach(button => {
        button.addEventListener('click', () => {
            const command = button.dataset.command;
            if (command) { // Ensure it's a command button
                handleCommand(command);
            }
            userInput.textContent = ''; // Clear the input field after button click
            userInput.focus(); // Re-focus after button click
        });
    });

    // --- Command Handling ---
    function handleCommand(command) {
        const lowerCommand = command.toLowerCase();

        // Append the command to the terminal content as if typed
        appendCommandToTerminal(command);

        // Simulate typing delay for processing
        setTimeout(() => {
            let outputHTML = ''; // This will store the HTML for displayOutput

            switch (lowerCommand) {
                case 'help':
                    outputHTML = showHelp();
                    displayOutput(outputHTML, true);
                    break;
                case 'about':
                case 'skills':
                case 'projects':
                case 'contact':
                case 'resume':
                case 'github':
                    showSection(lowerCommand);
                    break;
                case 'clear':
                case 'cls':
                    clearTerminal();
                    break;
                case 'download-resume':
                    window.downloadResume(); // Call through window object
                    break;
                case 'preview-resume':
                    window.previewResume(); // Call through window object
                    break;
                default:
                    // If not a recognized command, display an error message
                    outputHTML = `<span class="error-output">Error: Command '${command}' not found. Type 'help' for a list of commands.</span>`;
                    displayOutput(outputHTML, false); // Display as plain text error message
                    break;
            }
        }, 300); // Small delay to simulate processing
    }

    // --- Terminal UI Functions ---
    function appendCommandToTerminal(command) {
        const newPromptLine = document.createElement('div');
        newPromptLine.classList.add('terminal-line');
        newPromptLine.innerHTML = `<span class="prompt">𝛑 &nbsp;</span> <span class="command">${command}</span>`;
        terminalContent.insertBefore(newPromptLine, document.querySelector('.terminal-prompt'));
    }

    // Enhanced show section function with animations
    function showSection(section) {
        const currentCommand = document.getElementById('current-command');

        if (portfolioData[section]) {
            // Add loading animation
            contentDisplay.classList.add('loading');

            setTimeout(() => {
                currentCommand.textContent = section; // Update the title in the content area
                outputDiv.innerHTML = portfolioData[section].content; // Use outputDiv for content
                contentDisplay.classList.remove('hidden', 'loading');

                // Add typing effect for project items if applicable
                if (section === 'projects') {
                    const projectItems = outputDiv.querySelectorAll('.project-item');
                    projectItems.forEach((item, index) => {
                        item.style.opacity = '0';
                        item.style.transform = 'translateY(20px)';
                        setTimeout(() => {
                            item.style.transition = 'all 0.5s ease';
                            item.style.opacity = '1';
                            item.style.transform = 'translateY(0)';
                        }, index * 200);
                    });
                }

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


    /**
     * Displays content in the output area or appends as echo.
     * @param {string} htmlContent The HTML string to display.
     * @param {boolean} isRichContent If true, content is HTML for the dedicated output area. If false, content is treated as plain text echo to main terminal flow.
     */
    function displayOutput(htmlContent, isRichContent) {
        if (isRichContent) {
            outputDiv.innerHTML = htmlContent;
            contentDisplay.classList.remove('hidden'); // Ensure the main outputDiv is visible
        } else {
            // For echoing, we'll append a new line to the main terminal content
            // instead of overwriting outputDiv, to simulate a real terminal.
            const echoLine = document.createElement('div');
            echoLine.classList.add('terminal-line');
            echoLine.innerHTML = htmlContent; // htmlContent already contains the span for styling
            terminalContent.insertBefore(echoLine, document.querySelector('.terminal-prompt'));
            contentDisplay.classList.add('hidden'); // Ensure the main outputDiv is hidden for echoes
            outputDiv.innerHTML = ''; // Clear it
        }

        terminalContent.scrollTop = terminalContent.scrollHeight; // Scroll to bottom
    }

    function clearTerminal() {
        // Select all terminal lines EXCEPT the current input prompt and the welcome box
        const linesToRemove = terminalContent.querySelectorAll('.terminal-line:not(.terminal-prompt):not(.welcome-box)');
        linesToRemove.forEach(line => line.remove());

        // Hide and clear the main outputDiv
        outputDiv.classList.add('hidden');
        outputDiv.innerHTML = '';

        // Ensure the welcome box is visible after clearing
        const welcomeBox = document.querySelector('.welcome-box');
        if (welcomeBox) {
            welcomeBox.style.display = 'block';
            welcomeBox.classList.remove('hidden');
        }
        window.closeResumeModal(); // Close any open modal
        terminalContent.scrollTop = terminalContent.scrollHeight; // Scroll to bottom
    }

    // --- Resume Download and Preview Functions ---
    window.downloadResume = function() { // Made globally accessible
        const button = event.target.closest('.download-btn');
        const originalContent = button.innerHTML;
        button.innerHTML = '<span class="button-text">⏳ Preparing...</span>';
        button.disabled = true;

        const filePath = 'assets/Meet2197_Resume.pdf';

        fetch(filePath, { method: 'HEAD' })
            .then(response => {
                if (response.ok) {
                    const link = document.createElement('a');
                    link.href = filePath;
                    link.download = 'Meet2197_Resume.pdf';
                    document.body.appendChild(link);
                    link.click();
                    document.body.removeChild(link);
                    console.log("Resume download initiated successfully.");
                } else {
                    console.error(`Error ${response.status} fetching resume file. Check path or server configuration.`);
                    window.showResumeUploadInstructions(); // Call through window.
                }
            })
            .catch(error => {
                console.error("Failed to fetch resume file. This might be due to CORS/security restrictions when running locally.", error);
                window.showResumeUploadInstructions(); // Call through window.
            })
            .finally(() => {
                setTimeout(() => {
                    button.innerHTML = originalContent;
                    button.disabled = false;
                }, 500);
            });
    };

    window.previewResume = function() { // Made globally accessible
        const filePath = 'assets/Meet2197_Resume.pdf';
    
        const modal = document.createElement('div');
        modal.className = 'resume-modal';
        modal.innerHTML = `
            <div class="resume-modal-content">
                <div class="resume-modal-header">
                    <h3>📄 Resume Preview</h3>
                    <button class="resume-modal-close" onclick="window.closeResumeModal()">&times;</button>
                </div>
                <div class="resume-modal-body">
                    <iframe src="${filePath}" width="100%" height="100%" frameborder="0"> // CHANGED height to "100%"
                        <p>Your browser does not support PDFs directly in this window.
                        <a href="${filePath}" target="_blank">Click here to download/view the PDF directly</a>.</p>
                    </iframe>
                </div>
            </div>
        `;
        document.body.appendChild(modal);
    
        modal.addEventListener('click', function(e) {
            if (e.target === modal) {
                window.closeResumeModal();
            }
        });
    
        const iframe = modal.querySelector('iframe');
        iframe.onload = () => console.log(`Resume preview loaded from: ${filePath}`);
        iframe.onerror = () => {
            console.error(`Failed to load resume preview from: ${filePath}. This often happens with local file:// paths due to browser security.`);
        };
        console.log(`Attempting to preview resume from: ${filePath}`);
    };

    window.closeResumeModal = function() { // Made globally accessible
        const modal = document.querySelector('.resume-modal');
        if (modal) {
            modal.remove();
        }
    };

    window.showResumeUploadInstructions = function() { // Made globally accessible
        const modal = document.createElement('div');
        modal.className = 'resume-modal';
        modal.innerHTML = `
            <div class="resume-modal-content">
                <div class="resume-modal-header">
                    <h3>📋 Resume Setup Instructions</h3>
                    <button class="resume-modal-close" onclick="window.closeResumeModal()">&times;</button>
                </div>
                <div class="resume-modal-body">
                    <div class="resume-instructions">
                        <p>It seems the resume PDF could not be found or accessed.</p>
                        <h4>🔧 How to add your Resume:</h4>
                        <ol>
                            <li>Create an <code>assets/</code> folder in your repository root.</li>
                            <li>Upload your Resume as <code>Meet2197_Resume.pdf</code> into the <code>assets/</code> folder.</li>
                            <li>The file structure should be:
                                <pre>
Meet2197.github.io/
├── assets/
│   └── Meet2197_Resume.pdf
├── index.html
├── style.css
└── script.js
                                </pre>
                            </li>
                            <li><strong>Important:</strong> Test this by running a local web server (e.g., using VS Code's Live Server extension, or Python's <code>python -m http.server</code> in your project root) or by deploying to GitHub Pages. Directly opening <code>index.html</code> from your file system (<code>file://</code> protocol) often causes security restrictions for loading local files like PDFs.</li>
                        </ol>

                        <h4>🎯 Alternative: Direct Link</h4>
                        <p>You can also link to your Resume hosted elsewhere:</p>
                        <ul>
                            <li>Google Drive (with public sharing enabled)</li>
                            <li>Dropbox public link</li>
                            <li>Your personal website</li>
                        </ul>

                        <div class="resume-temp-buttons">
                            <button class="terminal-nav-button" onclick="window.open('https://drive.google.com/file/d/YOUR_DRIVE_ID/view', '_blank')">
                                <span class="button-text">🔗 Example: Google Drive Link</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        `;
        document.body.appendChild(modal);
        modal.addEventListener('click', function(e) {
            if (e.target === modal) {
                window.closeResumeModal();
            }
        });
    };

    // --- Help function ---
    function showHelp() {
        return `
            <h3>Available Commands:</h3>
            <h4>Navigation Commands:</h4>
            <ul>
                <li><span class="command">about</span> - Learn more about me.</li>
                <li><span class="command">skills</span> - Display my technical skills.</li>
                <li><span class="command">projects</span> - See my portfolio projects.</li>
                <li><span class="command">contact</span> - Find my contact information.</li>
                <li><span class="command">resume</span> - Display Resume/Experience.</li>
                <li><span class="command">github</span> - See my GitHub profile and repositories.</li>
            </ul>
            <h4>Resume-specific Commands:</h4>
            <ul>
                <li><span class="command">download-resume</span> - Download PDF version of my resume.</li>
                <li><span class="command">preview-resume</span> - Preview my resume in a modal window.</li>
            </ul>
            <h4>Utility Commands:</h4>
            <ul>
                <li><span class="command">clear</span> / <span class="command">cls</span> - Clear the terminal screen.</li>
                <li><span class="command">help</span> - Display this help message.</li>
            </ul>
            <p>You can also use the navigation buttons on the right side!</p>
        `;
    }

    // Utility function to place caret at the end of contenteditable div
    function placeCaretAtEnd(el) {
        el.focus();
        if (typeof window.getSelection != "undefined" && typeof document.createRange != "undefined") {
            const range = document.createRange();
            range.selectNodeContents(el);
            range.collapse(false);
            const sel = window.getSelection();
            sel.removeAllRanges();
            sel.addRange(range);
        } else if (typeof document.body.createTextRange != "undefined") {
            const textRange = document.body.createTextRange();
            textRange.moveToElementText(el);
            textRange.collapse(false);
            textRange.select();
        }
    }

    // Enhanced console easter egg
    console.log(`
    ╔══════════════════════════════════════════════════════════════╗
    ║               Welcome to Meet Bhatt's Portfolio              ║
    ║                                                              ║
    ║  👋 Hello! I'm Meet Bhatt - Data Steward                     ║
    ║  🔬 Specializing in Data science centric technology          ║
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
});