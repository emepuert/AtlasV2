document.addEventListener("DOMContentLoaded", function() {
    const elements = [
        { id: "Activites", delay: 1000 },
        { id: "AnciensTravaux", delay: 1000 },
        { id: "Fac", delay: 1000 },
        { id: "Sig", delay: 1000 },
        { id: "OldJob", delay: 1000 },
        { id: "Nege", delay: 1000 },
        { id: "Contact", delay: 1000 },
        { id: "Texte", delay: 1000 },
        { id: "maison", delay: 1000 },
    ];

    const sigGroups = document.querySelectorAll(".sigtest");
    const popup = document.getElementById("popup");
    const pdfFrame = document.getElementById("pdfFrame");
    const image1 = document.querySelector(".image1");
    const image2 = document.querySelector(".image2");
    const switchButton = document.getElementById("switchButton");

    function openPopup(content) {
        popup.style.display = "block";
        popup.innerHTML = content;
    }

    function closePopup() {
        popup.style.display = "none";
        pdfFrame.src = "";
        popup.innerHTML = "";
    }

    elements.forEach(elementInfo => {
        const group = document.getElementById(elementInfo.id);
        setTimeout(function() {
            group.classList.add("animated-group", "active");
        }, elementInfo.delay);
    });

    sigGroups.forEach(function(sigGroup) {
        sigGroup.addEventListener("mouseover", function() {
            sigGroup.style.cursor = "pointer";
        });
    
        sigGroup.addEventListener("mouseout", function() {
            sigGroup.style.cursor = "default";
        });
    
        sigGroup.addEventListener("click", function(event) {
            event.stopPropagation();
            
            const imageUrl = sigGroup.getAttribute("data-image-url");
            const pdfSrc = sigGroup.getAttribute("data-pdf-src");
            
            if (imageUrl) {
                openPopup(`<img src="${imageUrl}" alt="Image" />`);
            } else if (pdfSrc) {
                pdfFrame.src = pdfSrc;
                pdfFrame.classList.add("pdf-content");

                // Ajouter un identifiant unique à l'iframe du PDF
                openPopup(`
                    <div class="popup-content">
                        <h1>Personal Projects</h1>
                        <p>Below are some achievements from my education as well as some personal projects.</p>
                        <iframe class="content" id="pdfFrame" src="${pdfSrc}" frameborder="0" width="100%" height="100%"></iframe>
                        <ul>
                            <li><a href="https://view.genial.ly/61d3b5138502620dee9ec37e/presentation-audit-nancy">Walk Study - Mobility FR</li>
                            <li><a href="https://view.genial.ly/61b986c7599d3a0dec0d9c48/presentation-projet-danimation-du-psm">Green Space Study - Urbanism FR</li>
                            <li><a href="https://view.genial.ly/60a52c8b7bc8690d5d225530/presentation-innondations">Flood Study - Climatology FR</li>
                        </ul>
                    </div>
                `);
                // Attendre un court instant pour s'assurer que l'iframe est insérée dans le DOM
                setTimeout(function() {
                    pdfFrame = document.getElementById("pdfFrame"); // Correction ici
                }, 10);
            } else if (sigGroup.id === "maison") {
                openPopup(`
                            <div class="container">
                            <h1>Hobbies</h1>
                            <p>My hobbies reflect my diverse interests and my desire to explore different facets of life. Swimming provides me with welcome relaxation and an invigorating exercise.
                            <br><br>
                            A cinema enthusiast, I immerse myself in a variety of films, enriching myself with captivating stories and cinematic emotions.
                            <br><br>
                            Traveling is a constant source of inspiration for me. I've been fortunate to explore various corners of the world, from Canada to Israel, passing through Turkey and numerous European countries such as Italy, Spain, the Netherlands, Austria, and Switzerland. Discovering new cultures and unknown horizons broadens my mind and nurtures my creativity.
                            <br><br>
                            Lately, my interest in development has taken shape. A year of exploration has enabled me to create concrete projects, especially through artificial intelligence. This fusion of technology and creativity motivates me to take on exciting new challenges.</p>
                            <div class="flex">
                                <img src="img/icon/html.png" alt="Image" />
                                <p class="skill">HTML :</p>
                                <div class="bar">
                                    <div class="inside1"></div>
                                </div>
                                <p>60%</p>
                            </div>
                            <div class="flex">
                                <img src="img/icon/css.png" alt="Image" />
                                <p class="skill">CSS :</p>
                                <div class="bar">
                                    <div class="inside2"></div>
                                </div>
                                <p>80%</p>
                            </div>
                            <div class="flex">
                                <img src="img/icon/js.png" alt="Image" /> 
                                <p class="skill">JS :</p>
                                <div class="bar">
                                    <div class="inside3"></div>
                                </div>
                                <p>30%</p>
                            </div>
                            <div class="flex">
                                <img src="img/icon/python.png" alt="Image" />
                                <p class="skill">Python :</p>
                                <div class="bar">
                                    <div class="inside4"></div>
                                </div>
                                <p>40%</p>
                            </div>
                            <div class="flex">
                                <img src="img/icon/3d.png" alt="Image" />
                                <p class="skill">Blender :</p>
                                <div class="bar">
                                    <div class="inside5"></div>
                                </div>
                                <p>60%</p>
                            </div>
                        </div>
                    `);
            } else if (sigGroup.id === "Fac") {
                openPopup(`
                    <div class="container">
                    <h1>My Educational Journey</h1>
                    <p>My academic background, focused on scientific paths, has formed the foundation upon which I've built my diverse skills. With a strong educational base, I've gained in-depth mastery of essential tools such as QGIS, ArcGIS, and Blender, which have allowed me to explore the world of cartography and 3D modeling. Furthermore, my familiarity with the Adobe Suite, Microsoft Office, and languages like HTML, CSS, and Python have enhanced my versatility.
                    <br><br>
                    At the core of my approach lies a commitment to rigor and scientific methodology. I've developed the ability to establish precise protocols to ensure reliable results. My working methods are often empirical, a means through which I explore and discover, creating a synergy between knowledge and practice.
                    <br><br>
                    The constant evolution of the scientific domain fuels my curiosity, compelling me to remain in a state of continuous learning. This thirst for knowledge and my passion for science guide me in seeking innovative solutions and applying technical skills to solve complex problems.</p>
                    <ul>
                        <li><strong>2015 - 2017:</strong> General Polyvalent High School - Scientific Baccalaureate</li>
                        <li><strong>2017 - 2018:</strong> Faculty of Sciences and Technology in Vandoeuvre-lès-Nancy - Year 1 in Physics-Chemistry, SPI Mechanics Civil Engineering (Initial Training) (FST)</li>
                        <li><strong>2018 - 2021:</strong> SHS Nancy - Bachelor's Degree in Geography and Urban Planning</li>
                        <li><strong>2021 - 2023:</strong> SHS Nancy - Master's Degree in Geography and Urban Planning (Transition, Conversion, Planning track)</li>
                        <li><strong>2022 - 2023:</strong> SHS Nancy and NEGE - Pursuing Master's Degree in apprenticeship within NEGE consultancy firm</li>
                    </ul>
                </div>
                `);
            } else if (sigGroup.id === "Nege") {
                openPopup(`
                        <div class="container">
                        <h1>My Experience in a Consultancy Firm</h1>
                        <p>Founded in 2011 by geographers Yann Beauloye and Manuel Isnardon, Nord-Est Géo Environnement (NEGE) has been supporting public and private stakeholders for a decade in the development of sustainable territorial strategies. By combining academic research and practical expertise, NEGE has advised over 240 local communities in the Grand Est region across various domains: urban planning documents, territorial strategies, and environmental studies. The multidisciplinary team at NEGE values stakeholder participation and keeps its skills up-to-date to align with legislative and societal changes.
                        <br><br>
                        I joined the consultancy firm as an apprentice in October 2022, and I immediately had the opportunity to work on concrete projects. Among these projects:</p>
                        <ul>
                            <li><img src="img/icon/document.png" alt="Image" />Creation of urban planning documents</li>
                            <li><img src="img/icon/enquete.png" alt="Image" />Territory diagnostics</li>
                            <li><img src="img/icon/carte.png" alt="Image" />Creation of maps and graphic productions</li>
                            <li><img src="img/icon/analyse.png" alt="Image" />Data collection, processing, and analysis</li>
                            <li><img src="img/icon/meeting.png" alt="Image" />Participation in public or working meetings</li>
                            <li><img src="img/icon/terrain.png" alt="Image" />Field studies with officials and residents</li>
                        </ul>
                    </div>
                `);  
            } else if (sigGroup.id === "OldJob") {
                openPopup(`
                        <div class="container">
                        <h1>My Professional Experiences</h1>
                        <ul>
                            <li><img src="img/icon/loterr.png" alt="Image" />Internship related to Master's 1 degree, research on the evolution of vegetable gardens in Lorraine</li>
                            <li><img src="img/icon/chef.png" alt="Image" />Cook at the "Le Voyou" restaurant in Nancy</li>
                            <li><img src="img/icon/uber.png" alt="Image" />Bicycle courier</li>
                            <li><img src="img/icon/silo.png" alt="Image" />Worker in a grain silo</li>
                            <li><img src="img/icon/chef.png" alt="Image" />Versatile worker in a fast-food chain</li>
                        </ul>
                    </div>
                `);
            } else if (sigGroup.id === "Sig") {
                openPopup(`
                        <div class="container">
                        <h1>My GIS Skills</h1>
                        <p>I became interested in Geographic Information Systems (GIS) right from the start of my bachelor's degree, drawn to their ability to merge spatial data and create meaningful visual representations. Throughout my studies, I quickly realized the immense potential of these tools to analyze and solve complex geospatial problems. My enthusiasm led me to seek ways to further develop my technical skills in this field. I embarked on personal research, followed online courses, and explored concrete projects to deepen my understanding of GIS. This endeavor not only allowed me to acquire new technical skills, but also strengthened my conviction that GIS is essential to address diverse challenges such as environmental sustainability, urban planning, and data-driven decision-making.<br><br>
                        GIS has enabled me to develop new skills such as:</p>
                        <ul>
                            <li><img src="img/icon/webmap.png" alt="Image" /> Creating interactive maps</li>
                            <li><img src="img/icon/data.png" alt="Image" /> Collecting and analyzing data</li>
                            <li><img src="img/icon/teledetection.png" alt="Image" /> Performing remote sensing analyses</li>
                            <li><img src="img/icon/3dmap.png" alt="Image" /> Creating 3D maps in Blender</li>
                            <li><img src="img/icon/databse.png" alt="Image" /> Setting up or utilizing databases</li>
                            <li><img src="img/icon/automatisation.png" alt="Image" /> Conducting automation tasks</li>
                        </ul>
                    </div>
                `);                 
            } else if (sigGroup.id === "Contact") {
                openPopup(`
                        <div class="container">
                        <h1>About Me</h1>
                        <p>Hello, I'm Dawa Tran Quang-Tru, and I currently call Nancy, France, my home. My journey begins with Vietnamese roots, and at 24 years old, I find myself fueled by a genuine passion for science and the environment. This enthusiasm has been kindled within me by my family's generations-long engagement with these realms. Growing up, discussions about scientific breakthroughs and environmental issues were commonplace at the dinner table, igniting my curiosity from a young age.
                        <br><br>
                        My personality strikes a balance between tranquility and sociability. I'm often drawn to moments of quiet reflection, allowing me to delve into the depths of various subjects. Yet, when in social settings, I thrive on meaningful conversations and the opportunity to connect with diverse individuals.
                        <br><br>
                        One of my favorite pastimes is indulging in the world of gastronomy. The tantalizing flavors of Italian cuisine and the rich tapestry of Middle Eastern dishes have a special place in my heart. These culinary experiences become more than just meals; they're journeys that mirror my quest for understanding and exploration.
                        <br><br>
                        In addition to my passion for science and the environment, I have developed a strong command of the English language. I can confidently communicate and engage in discussions in English. Furthermore, I have a basic understanding of Spanish, allowing me to connect with even more people and cultures.
                        <br><br>
                        As I embark on the journey of sharing my experiences and capabilities, this portfolio emerges as a conduit to not only introduce myself but also to showcase the skills I've honed over the years. It's a platform where my passion for science, my appreciation for the environment, and my love for learning find a unified voice</p>
                            <div class="image-container">
                            <a href="https://www.linkedin.com/in/dawa-tran-645a60231/" target="_blank" class="circle">
                                <img src="img/icon/linkedin.png" alt="LinkedIn" />
                            </a>
                            <a href="tel:+33664095162" class="circle">
                                <img src="img/icon/phone.png" alt="Phone" />
                            </a>
                            <a href="mailto:dawa.tranquangtru@gmail.com" class="circle">
                                <img src="img/icon/mail.png" alt="Email" />
                            </a>
                        </div>
                    </div>
                `); 
            } else {
                const popupText = sigGroup.getAttribute("data-popup-text");
                openPopup(popupText);
            }
        });
        
    });

    switchButton.addEventListener("click", function () {
        // Inverser la visibilité des images
        if (image1.style.display === "none") {
            image1.style.display = "block";
            image2.style.display = "none";
        } else {
            image1.style.display = "none";
            image2.style.display = "block";
        }
    });

    popup.addEventListener("click", function(event) {
        event.stopPropagation(); // Empêche la propagation des clics à l'intérieur du pop-up
    });

    pdfFrame.addEventListener("click", function(event) {
        event.stopPropagation(); // Empêche la fermeture du pop-up lors du clic à l'intérieur de l'iframe du PDF
    });

    document.addEventListener("click", function(event) {
        const clickedOutside = Array.from(sigGroups).every(function(sigGroup) {
            return !sigGroup.contains(event.target);
        });

        // Vérifiez également si l'élément cliqué est à l'intérieur du pop-up
        if (clickedOutside && !popup.contains(event.target)) {
            closePopup();
        }
    });
});
