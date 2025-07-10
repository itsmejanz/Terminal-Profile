$(".terminal-window").on("click", function () {
    $("#terminal-input").focus();
});

function processCommand(event) {
    if (event.key === "Enter") {
        const input = $("#terminal-input").val().trim();
        const output = $("#terminal-output");
        if (input === "" || input.length < 1) {
        } else {
            const newCommand = $("<div></div>").html(`<span class="prompt">C:\\Users\\cmd&gt;</span>${input}`);
            output.append(newCommand);

            $("#terminal-input").val("");

            if (input === "" || input.length < 1) {
            } else if (input.toLowerCase() === "help") {
                const helpList = `
                        <div class="help-list">
                            <p class="mb-0">For more information on a specific command, type HELP command-name</p>
                            <ul class="mb-0">
                                <li><code class="code">profile</code>: Show My Profile</li>
                                <li><code class="code">contact</code>: Show My Contact</li>
                                <li><code class="code">theme</code>: Show list theme supported</li>
                                <li><code class="code">clear</code>: Clear all terminal output</li>
                                <li><code class="code">shutdown</code>: Close terminal & shutdown</li>
                            </ul>
                        </div>
                    `;
                const helpOutput = $("<div></div>").html(helpList);
                output.append(helpOutput);
            } else if (input.toLowerCase() === "profile") {
                const profiles = `<p class="fw-bold mb-0">Introduction</p>
                <p>Hello! I’m Wafa Rifqi Anafin, a Creative Web Designer and Developer from Indonesia. With a solid foundation in Information Technology, I craft innovative websites that blend functionality and aesthetics. As a graduate in Information Systems from Nusa Mandiri University, I currently reside in Bekasi, channeling my creativity into impactful web prototypes.</p>
                <br>
                <p class="fw-bold mb-0">Skills and Experience</p>
                <p>I specialize in HTML5, CSS, Bootstrap, JavaScript, and PHP Native, with strong proficiency in PHP, Java, Dart, and Node.js. My expertise enables me to create exceptional user experiences and drive innovation in the digital realm. Each project is an opportunity to deliver solutions that provide real value to clients and users alike.</p>
                <br>
                <p class="fw-bold mb-0">Vision, Mission, and Motto</p>
                <p>I believe success is measured by the positive impact we make on others. My vision is to be a beacon of goodness and inspiration, leading with integrity and wisdom to foster a harmonious world. My mission is to spread happiness through selfless kindness and inspire personal growth.</p>
                <p>My motto, "The first step: be inspired; the next: inspire others. A meaningful life begins with action," reflects my commitment to making a positive mark in the world.</p>
                <br>
                <p class="fw-bold mb-0">Conclusion</p>
                <p>I’m always eager to explore new possibilities and tackle challenges in the tech industry, especially in web development. Thank you for allowing me to share my story. I look forward to collaborating and creating innovative solutions that benefit many.</p>`;
                const profilesOutput = $('<div class="mb-3"></div>').html(profiles);
                output.append(profilesOutput);
            } else if (input.toLowerCase().startsWith("theme ")) {
                const theme = input.split(" ")[1];
                if (theme === "yakuza" || theme === "mcd" || theme === "default") {
                    const currentClass = $("body").attr("class");
                    if (!currentClass.includes(theme)) {
                        $("body").attr("class", theme);
                    }
                } else {
                    const unknownCommand = $('<div class="mb-3"></div>').html(`'${theme}' theme not supported yet. Type 'help theme' for more information.`);
                    output.append(unknownCommand);
                }
            } else if (input.toLowerCase().startsWith("help ")) {
                const help = input.split(" ")[1];
                if (help === "profile") {
                    const help_profile = $('<div class="mb-3"></div>').html(`Show my profile to output terminal. Type 'profile' to show my profile output.`);
                    output.append(help_profile);
                } else if (help === "theme") {
                    const help_theme = $('<div class="mb-3"></div>').html(`<div class="help-list">
                            <p class="mb-0">Change theme for temporary. List theme supported</p>
                            <ul class="mb-0">
                                <li><code class="code">yakuza</code>: Green Theme</li>
                                <li><code class="code">mcd</code>: MCDonald's Theme</li>
                                <li><code class="code">default</code>: Default Theme</li>
                            </ul>
                            <p class="mb-0">For apply theme use command 'theme theme name' eg: 'theme yakuza'</p>
                        </div>`);
                    output.append(help_theme);
                }
            } else if (input.toLowerCase() === "contact") {
                const contactInfo = `
                    <p class="fw-bold mb-0">Contact Information</p>
                    <ul class="mb-0">
                        <li><strong>Email:</strong> wafarifqi@gmail.com</li>
                        <li><strong>Website:</strong> <a href="https://www.wafarifki.com" target="_blank">www.wafarifki.com</a></li>
                        <li><strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/wafarifqi/" target="_blank">linkedin.com/in/wafarifqi</a></li>
                        <li><strong>Instagram:</strong> <a href="https://instagram.com/wafarifqi" target="_blank">@wafarifqi</a></li>
                        <li><strong>GitHub:</strong> <a href="https://github.com/wafarifqi" target="_blank">github.com/wafarifqi</a></li>
                    </ul>
                `;
                const contactOutput = $('<div class="mb-3"></div>').html(contactInfo);
                output.append(contactOutput);
            } else if (input.toLowerCase() === "shutdown") {
                const shutdownOutput = $('<div class="mb-3"></div>').html("System shutting down...");
                output.append(shutdownOutput);

                setTimeout(() => {
                    window.open('', '_self').close(); // Menutup tab
                }, 1000);
            } else if (input.toLowerCase() === "clear" || input.toLowerCase() === "clr") {
                $(".welcometext").remove();
                output.empty();
                createnewpromptinput(output);
            } else {
                const unknownCommand = $('<div class="mb-3"></div>').html(`'${input}' is not recognized as an internal or external command, operable program or batch file. Type 'help' for more information.`);
                output.append(unknownCommand);
            }

            output.scrollTop(output[0].scrollHeight);
            const promptLine = $(".prompt-line").detach();
            output.append(promptLine);

            $("#terminal-input").focus();
        }
    }
}

function createnewpromptinput(output) {
    output.append(`<div class="prompt-line" id="current-prompt">
        <span class="prompt">C:\\Users\\cmd&gt;</span>
        <input type="text" id="terminal-input" class="terminal-input" autocomplete="off" onkeydown="processCommand(event)">
    </div>`);
}

$("body").addClass("default");