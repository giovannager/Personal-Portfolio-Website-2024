import '../style.css'

document.querySelector('#app').innerHTML = `
<!-----------------navbar------------------>
<div id="app"/>
<div class="navbar"></div>
<div class="rainbow-box"></div>
<div class="drop-shadow"></div>

<!-----------------header------------------>
    <div id="header">
        <div class="container">
            <a href="#header"><img src="/gg_GG_dot.svg" class="logo"></a>
            <nav>
                <ul id="sidemenu">
                    <li><a href="#header">Home</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#projects">Projects</a></li>
                    <li><a href="#contact">Contact</a></li>
                    <i class="fas fa-times" onclick="closemenu()"></i>
                </ul>
                <i class="fas fa-bars" onclick="openmenu()"></i>
            </nav>
            <div class="header-text">
                <h1>Hello.<br>I'm <span class="name-txt">Giovanna Gerada</span>!</h1>
                <p>A third year computer science student at McMaster University!</p>
            </div>
            <div class="arrow">
                <nav>
                    <ul>
                        <li><a href="#about"><img src="/arrow.png" class=id="arrow-img"></a></li>
                    </ul>
                </nav>
            </div>
        </div>
    </div>

<!-----------------about------------------>
    <div id="about">
        <div class="container">
            <div class="row">
                <div class="about-col-1">
                    <img src="/gio11.png" class="self-img">
                    <img src="/pixil-frame-0.png" class="heart-img">
                </div>
                <div class="about-col-2">
                    <h1 class="sub-title">About Me</h1>
                    <p class="paragraph">Hi, I'm Giovanna and I'm a third year Computer Science Co-op student at McMaster University who is
                        currently pursuing a Bachelor of Applied Science.
                        I'm very interested in web development, UX/UI design, game development, and graphics among other things.
                        In my free time you can usually find me learning something new, spending time with friends and family, or engaging in one of my hobbies.
                        You can click on the tabs below to learn a little more about me!
                    </p>
                    
                    <div class="tab-titles">
                        <p class="tab-links active-link" onclick="opentab('Skills');colorChange('Skills')">Skills</p>
                        <p class="tab-links" onclick="opentab('Experience');colorChange('Experience')">Experience</p>
                        <p class="tab-links" onclick="opentab('Education');colorChange('Education')">Education</p>
                        <p class="tab-links" onclick="opentab('Hobbies');colorChange('Hobbies')">Hobbies</p>
                    </div>
                    <div class="tab-contents active-tab" id="Skills">
                        <ul>
                            <li><span>Programming Languages</span><br>Python, Java, C, HTML, CSS, JavaScript, Haskell, SQL, Prolog, GDScript, ARM Assembly</li>
                            <li><span>Tools and Libraries</span><br> VS Code, Eclipse, GitHub, React, Vite, Discord.py, Pygame, Godot, Figma, Photoshop, vSphere, Active Directory, Service Now, LaTeX, Markdown, Microsoft & Google Suites</li>
                            <li><span>Core Skills</span><br>Leadership, Teamwork, Flexibility, Creativity, Attention to Detail, Time Management, Hard Worker</li>
                        </ul>
                    </div>
                    <div class="tab-contents" id="Experience">
                        <ul>
                            <li><span>CIBC</span><br>Technical Systems Analyst Co-op</li>
                            <li><span>McCarthy's Uniforms</span><br>Sales Associate & Cashier</li>
                            <li><span>Self Employment</span><br>Freelance Artist</li>
                        </ul>
                    </div>
                    <div class="tab-contents" id="Education">
                        <ul>
                            <li><span>McMaster University</span><br>Bachelor of Applied Science (Co-op)</li>
                            <li><span>Holy Trinity CSS</span><br>High School Diploma (<a href="https://gg.ca/en/honours/recipients/116-110131">Governor General's Medal</a> recipient)</li>
                        </ul>
                    </div>
                    <div class="tab-contents" id="Hobbies">
                        <ul>
                            <li><span>Creative</span><br>Digital art, Pencil drawings, Painting, Playing piano</li>
                            <li><span>Academic</span><br>Learning Korean, Coding personal projects, Reading</li>
                            <li><span>Misc</span><br>Cooking, Playing games, Listening to music, Watching shows</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
<!-----------------services------------------>
<div id="projects">
    <div class="container">
        <h1 class="sub-title">My Projects</h1>
        <div class="projects-list">
            <div class="website">
                <h2 class="heading"><i class="fa-solid fa-code"></i> Portfolio Website</h2>
                <p>My personal portfolio website that has been revamped for 2024! It was originally designed in Figma, and brought to life using Vite JS, HTML, and CSS. The results of this project are what you happen to be reading right now :)</p>
                <a href="https://github.com/giovannager/Personal-Portfolio-Website">Learn more</a>
            </div>
            <div class="edu-everywhere">
                <h2 class="heading"><i class="fa-solid fa-graduation-cap"></i> EDU Everywhere Learning Platform</h2>
                <p>A full-stack education platform that uses AI to leverage the Google Cloud Translation API and Google Cloud Vision API to provide global access to education through accurate translation of hand-written documents. Originally designed in Figma and further built using React JS, HTML, and CSS.</p>
                <a href="https://github.com/giovannager/Personal-Portfolio-Website">Learn more</a>
            </div>
            <div class="remindchuu">
                <h2 class="heading"><i class="fa-brands fa-discord"></i> RemindChuu Discord Bot</h2>
                <p>A discord bot that enables users to set, view, delete, and clear personal or server-wide reminders. 
                    The bot reminds users by pinging them at any set time with any set reminder. The bot was created with Python's Discord.py library. </p>
                <a href="https://github.com/giovannager/RemindChuu">Learn more</a>
            </div>
            <div class="blanc">
                <h2 class="heading"><i class="fa-solid fa-gamepad"></i> Blanc Puzzle Video Game</h2>
                <p>A nonogram puzzle video game which won the first place jury prize for KuriusHacks' 2021 Christmas Edition Game Jam.</p>
                <a href="https://github.com/madelahn/blanc">Learn more</a>&emsp;
                <a href="https://madelahn.itch.io/blanc" class="play-game">Play the game</a>
            </div>
            <div class="runnergame">
                <h2 class="heading"><i class="fa-solid fa-gamepad"></i> Endless Runner Video Game</h2>
                <p>An endless runner video game created in January 2020 as a final project for my grade 11 computer science course.
                    All art and sound was self-created using Clip Studio Paint and FL Studio. The project was put together using Python's PyGame.</p>
                <a href="https://github.com/giovannager/Endless-Runner-Game">Learn more</a>
            </div>
        </div>
        <!--<a href="https://github.com/giovannager" class="btn"><i class="fa-brands fa-github"></i> GitHub</a-->
    </div>
</div>
<!-----------------contact------------------>
<div id="contact">
    <div class="container">
        <form target="_blank" action="https://formsubmit.co/giovannagerada@gmail.com" method="POST">
            <div class="row">
                <div class="contact-left">
                    <h1 class="sub-title">Contact Me</h1>
                    <p><i class="fa-regular fa-envelope"></i>giovannagerada@gmail.com</p>
                    <div class="social-icons">
                        <a href="https://github.com/giovannager"><i class="fa-brands fa-github"></i></a>
                        <a href="https://www.linkedin.com/in/giovanna-gerada/"><i class="fa-brands fa-linkedin"></i></a>
                    </div>
                    <a href="Giovanna_Gerada_Resume_January_2023.pdf" download class="btn btn2">Download Resume</a>
                </div>
                <div class="contact-right">
                    <form>
                        <input type="text" name="Name" placeholder="Your Name" required>
                        <input type="email" name="email" placeholder="Your Email" required>
                        <textarea name="Message" rows="6" placeholder="Your Message"></textarea>
                        <button type="submit" class="btn btn2">Submit</button>
                    </form>
                </div>
            </div>
        </form>
    </div>
    <!--Copyright tag at bottom-->
    <div class="copyright">
        <p>Copyright © Giovanna Gerada.</p>
    </div>
</div>
`

// main.js
document.body.onmousemove = function(e) {
    document.documentElement.style.setProperty (
      '--x', (
        e.clientX+window.scrollX
      )
      + 'px'
    );
    document.documentElement.style.setProperty (
      '--y', (
        e.clientY+window.scrollY
      ) 
      + 'px'
    );
  }
