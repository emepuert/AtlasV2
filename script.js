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
                
                // Ajouter un identifiant unique à l'iframe du PDF
                const iframeId = "pdfIframe_" + Date.now();
                openPopup(`<iframe id="${iframeId}" src="${pdfSrc}" frameborder="0" width="100%" height="100%"></iframe>`);
                
                // Attendre un court instant pour s'assurer que l'iframe est insérée dans le DOM
                setTimeout(function() {
                    pdfFrame = document.getElementById(iframeId);
                }, 10);
            } else if (sigGroup.id === "maison") {
                openPopup(`
                        <div class="container">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Fermentum dui faucibus in ornare quam viverra orci. Elit pellentesque habitant morbi tristique senectus. Id ornare arcu odio ut sem nulla. Congue mauris rhoncus aenean vel. Auctor elit sed vulputate mi sit amet. Ornare lectus sit amet est. Elit duis tristique sollicitudin nibh sit amet. In hac habitasse platea dictumst vestibulum rhoncus. Velit dignissim sodales ut eu sem integer vitae. Ac orci phasellus egestas tellus rutrum tellus pellentesque. Maecenas sed enim ut sem viverra. Viverra vitae congue eu consequat ac. Fermentum dui faucibus in ornare. Magna ac placerat vestibulum lectus mauris ultrices eros. Interdum consectetur libero id faucibus nisl.</p>
                        <div class="flex">
                            <p>Skill 1:</p>
                            <div class="bar">
                                <div class="inside1"></div>
                            </div>
                            <h3>90%</h3>
                        </div>
                        <div class="flex">
                            <p>Skill 2:</p>
                            <div class="bar">
                                <div class="inside2"></div>
                            </div>
                            <h3>80%</h3>
                        </div>
                        <div class="flex">
                            <p>Skill 3:</p>
                            <div class="bar">
                                <div class="inside3"></div>
                            </div>
                            <h3>50%</h3>
                        </div>
                        <div class="flex">
                            <p>Skill 4:</p>
                            <div class="bar">
                                <div class="inside4"></div>
                            </div>
                            <h3>50%</h3>
                        </div>
                        <div class="flex">
                            <p>Skill 5:</p>
                            <div class="bar">
                                <div class="inside5"></div>
                            </div>
                            <h3>50%</h3>
                        </div>
                    </div>
                `);
            } else if (sigGroup.id === "Fac") {
                openPopup(`
                    <div class="container">
                    <h1>Mon Parcours Scolaire</h1>
                    <ul>
                        <li><strong>2015 - 2017:</strong> Lycée Polyvalent Général - Bac S</li>
                        <li><strong>2017 - 2018:</strong> Faculté de Sciences et Technologiques de Vandoeuvre-lès-Nancy - L1 Physique-chimie, SPI Mécanique génie civil (FI) (FST)</li>
                        <li><strong>2018 - 2021:</strong> SHS Nancy - Licence Géographie et Aménagement</li>
                        <li><strong>2021 - 2023:</strong> SHS Nancy - Master Géographie Aménagement (parcours Transition, Reconversion, Aménagement)</li>
                    </ul>
                    </div>
                `);
            } else if (sigGroup.id === "Nege") {
                openPopup(`
                    <div class="container">
                    <h1>Mon Experience dans un bureau d'étude</h1>
                    <p>Fondé en 2011 par les géographes Yann Beauloye et Manuel Isnardon, Nord-Est Géo Environnement (NEGE) accompagne depuis une décennie les acteurs publics et privés dans l'élaboration de stratégies de développement territorial durable. En associant recherche universitaire et expertise pratique, NEGE a conseillé plus de 240 collectivités du Grand Est dans divers domaines : documents d'urbanisme, stratégies territoriales, études environnementales. L'équipe multidisciplinaire de NEGE valorise la participation des parties prenantes et maintient ses compétences à jour pour rester en phase avec les évolutions législatives et sociétales.</p>
                    <ul>
                        <li>Diagnostics Carte Communale et PLU(i)</li>
                        <li>Déclaration de Projets</li>
                        <li>Mise en compatibilité de documents d’urbanisme</li>
                        <li>Aménagement d’une place (avec Cabinet d’Architecture)</li>
                        <li>Réalisation de cartes (interactives) et de schémas en 3D (Blender)</li>
                        <li>Interventions lors de réunions publiques </li>
                    </ul>

                    </div>
                `);  
            } else if (sigGroup.id === "OldJob") {
                openPopup(`
                    <div class="container">
                    <<h1>Mes expériences professionelles</h1>>
                    <ul>
                        <li>Stage lié au Master 1, sujet d’étude sur l’évolution des potagers en lorraine</li>
                        <li>Cuisinier au restaurant « Le Voyou » à Nancy</li>
                        <li>Coursier à vélo</li>
                        <li>Ouvrier dans un silo à grain </li>
                        <li>Ouvrier polyvalent dans une chaine de restauration rapide</li>
                    </ul>
                    
                    </div>
                `);
            } else if (sigGroup.id === "Sig") {
                openPopup(`
                    <div class="container">
                    <p>Je me suis intéressé aux Systèmes d'Information Géographique (SIG) dès le début de ma licence, attiré par leur capacité à fusionner des données spatiales et à créer des représentations visuelles significatives. Au fil de mes études, j'ai rapidement réalisé le potentiel immense de ces outils pour analyser et résoudre des problèmes géospatiaux complexes. Mon enthousiasme m'a conduit à chercher des moyens de développer davantage mes compétences techniques dans ce domaine. J'ai entrepris des recherches personnelles, suivi des formations en ligne et exploré des projets concrets pour approfondir ma compréhension des SIG. Cette démarche m'a non seulement permis d'acquérir de nouvelles compétences techniques, mais elle m'a également renforcé dans ma conviction que les SIG sont essentiels pour aborder des enjeux variés tels que la durabilité environnementale, l'aménagement urbain et la prise de décision basée sur les données.</p>
                    <h2>Les SIG m'ont permis de développer de nouvelles compétences telles que :</h2>
                    <ul>
                        <li>De réaliser des cartes interactives </li>
                        <li>De collecter et d'analyser des données</li>
                        <li>De réaliser des analyses par télédétection</li>
                        <li>De réaliser des cartes 3d sur Blender</li>
                        <li>De mettre en place ou d'exploiter des bases de données</li>
                        <li>De réaliser des travaux d'automatisation</li>
                    </ul>
                    
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
