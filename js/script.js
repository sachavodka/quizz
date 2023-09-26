$(window).on("load", function () {
    var url;
    var nbClick = 0;
    var niveau;
    var choix;
    var tabChoix = ["quizzweb.json", "quizzdessinsanimes.json", "quizzcultureg1.json", "quizzcultureg2.json", "quizzcultureg3.json", "quizzcultureg4.json", "quizzseriesus.json", "quizzhistoirefrance.json", "quizzanimauxenchiffres.json", "quizzchimie.json", "quizzdates20.json", "quizzlitteraire.json", "quizznintendo.json", "quizznombres.json", "quizzmicrosoft.json", "quizzfeuilletonstv.json", "quizzcultureg5.json", "quizzrequins.json", "quizzherosimaginaires.json", "quizzculturepersonnalites.json", "quizzherosmarvel.json", "quizzsecretscinema.json", "quizzculturevrac.json", "quizzhistoirepolitique.json", "quizzdragons.json", "quizzauteursclassiques.json", "quizzchats.json", "quizzpeuplesmonde.json", "quizzroyaumeuni.json", "quizzplayboy.json", "quizzmonumentsmonde.json", "quizzperigord.json","quizzsculture.json", "quizzanimauxcelebres.json", "quizzroilion.json", "quizzautomobile.json", "quizzconstructeursauto.json", "quizzhautencouleur.json","quizzappeldularge.json", "quizzmarquesslogans.json", "quizzinternet.json", "quizzchocolat.json", "quizzmarilyn.json", "quizzsuperheroines.json", "quizzculturemondiale.json", "quizzjeuxsociete.json", "quizzfauneflore.json", "quizzinventions.json", "quizzalbertcelebres.json", "quizzanimauxvrac.json", "quizzfourmis.json","quizztintin.json", "quizzcomedies.json", "quizztomhanks.json", "quizzreseauxsociaux.json", "quizzparis.json", "quizzalien.json", "quizzfictionpourtous.json", "quizzharrypotter.json","quizzjurassicpark.json", "quizzrolesecran.json", "quizzrobotscinema.json", "quizzincollable.json", "quizzlinux.json", "quizzopenbsd.json", "quizzcitationscourtes.json", "quizzexpressionsconnues.json", "quizzortho.json", "quizznikolatesla.json", "quizzanciennespubs.json", "quizzcasadepapel.json", "quizzpokemon.json", "quizzfranglaisdunet.json", "quizzinstagram.json", "quizzsnapchat.json", "quizzgrandsmonuments.json", "quizzphp.json", "quizzjavascript.json"];
    var tabLibelles = ["Applications Web", "Dessins Animés", "Culture Générale 1", "Culture Générale 2", "Culture Générale 3", "Culture Générale 4", "Séries US", "Histoire de France", "Animaux en Chiffres", "Chimie", "Dates du XX Siècle", "Littérature", "Nintendo", "Trouver le Nombre", "Microsoft", "Feuilletons TV", "Culture Générale 5", "Les Requins", "Héros Imaginaires", "Culture & Personnalités", "Héros Marvel", "Petits Secrets du Cinéma", "Culture en Vrac", "Histoire Politique", "Dragons Célèbres", "Auteurs Classiques", "Nos Amis les Chats", "Peuples du Monde", "Royaume-Uni", "Playboy", "Monuments du Monde", "Périgord", "Sculture", "Animaux Célèbres", "Le Roi Lion", "Automobile", "Constructeurs Auto", "Haut en Couleur", "Appel du Large", "Marques & Slogans", "Méandres d'Internet", "Le Chocolat", "Marilyn Monroe", "Super Heroïnes","Culture Mondiale", "Jeux de Société", "Faune et Flore", "Inventions", "Les Albert Célèbres", "Animaux en Vrac", "Les Fourmis", "Tintin", "Comédies", "Tom Hanks", "Reseaux Sociaux", "Paris", "Alien", "Fiction pour Tous", "Harry Potter", "Jurassic Park", "Rôles à l'Ecran", "Robots du Cinéma", "Incollable", "Linux", "OpenBSD", "Citations Courtes", "Expressions Connues", "Quizz Ortho","Nikola Tesla", "Anciennes Pubs", "Casa de Papel", "Pokémon", "Franglais du Net", "Instagram", "Snapchat", "Grands Monuments", "PHP", "JavaScript"];
    var tabimgChoix = ["web.jpg","dessins_animes.jpg","cultureg1.jpg","cultureg2.jpg","cultureg3.jpg","cultureg4.jpg","series_us.jpg","histoire_france.jpg","animaux_en_chiffres.jpg","chimie.jpg","dates20.jpg","litteraire.jpg","nintendo.jpg","nombres.jpg","microsoft.jpg","feuilletonstv.jpg","cultureg5.jpg","requins.jpg","herosimaginaires.jpg","culturepersonnalites.jpg","herosmarvel.jpg","secretsducinema.jpg","culturevrac.jpg","histoirepolitique.jpg","dragons.jpg","auteursclassiques.jpg","chats.jpg","peuplesmonde.jpg","royaumeuni.jpg","playboy.jpg","monumentsmonde.jpg","perigord.jpg", "sculpture.jpg", "animauxcelebres.jpg", "roilion.jpg", "automobile.jpg", "constructeursauto.jpg","hautencouleur.jpg", "appeldularge.jpg", "marquesslogans.jpg", "internet.jpg", "chocolat.jpg", "marilynmonroe.jpg", "superheroines.jpg", "culturemondiale.jpg", "jeuxsociete.jpg", "fauneflore.jpg", "inventions.jpg", "albertcelebres.jpg", "animauxvrac.jpg", "fourmis.jpg", "tintin.jpg", "comedies.jpg","tomhanks.jpg", "reseauxsociaux.jpg", "paris.jpg","alien.jpg", "fictionpourtous.jpg", "harrypotter.jpg", "jurassicpark.jpg", "rolesecran.jpg", "robotscinema.jpg", "incollable.jpg", "linux.jpg", "openbsd.jpg", "citationscourtes.jpg","expressionsconnues.jpg" ,"quizzortho.jpg", "nikolatesla.jpg", "anciennespubs.jpg", "casadepapel.jpg", "pokemon.jpg", "franglaisdunet.jpg", "instagram.jpg", "snapchat.jpg", "grandsmonuments.jpg", "PHP.jpg", "javascript.png"];
    var recup;
    var fluxhtml = "";
    var score = 0;
    var prenom;

    $("#quizz").on("mouseover", "li", function () {
        $(this).draggable({
            cursor: "url(./img/cursor_main_mini.png), auto"
        });
    });

    $("#droppable").droppable({
        drop: function (event, ui) {

            $(this).addClass("ui-state-highlight").find("p").html("");
            var drop = $(this);
            var drag = $(ui.draggable[0]);

            $.getJSON(url, function (data) {

                // Si réponse ok, la couleur de la zone droppable passe au vert
                if (data.quizz[niveau][drag.attr("id")].réponse === drag.html()) {
                    $("#droppable").css('background', '#17ff02');
                    score += 1;

                    // S'il y a une anecdote on l'affiche sinon rien !!!
                    if (data.quizz[niveau][drag.attr("id")].anecdote.length!==0) {
                        $("#anecdote").css('visibility','visible');
                        $("#anecdote").append("Anecdote : " + data.quizz[niveau][drag.attr("id")].anecdote);
                    }
                   
                // ... Sinon elle passe en rouge    
                } else {
                    $("#droppable").css('background', 'rgb(196, 12, 5)');
                }

                for (var i = 0; i < 4; i++) {
                    if (data.quizz[niveau][drag.attr("id")].propositions[i] === data.quizz[niveau][drag.attr("id")].réponse) {
                        $("li[ident=" + i + "]").css("background", "rgb(66, 214, 61)");
                    }
                }

            });

            $("li").draggable({
                disabled: true
            });

            // Activation du bouton Suivant
            $("#suivant").prop("disabled",false);

        },
        over: function (event, ui) {
            $(this).css('background', '#e489f0');
            $(this).addClass("ui-state-highlight").find("p").html("Au dessus !!!");
        },
        out: function (event, ui) {
            $(this).css('background', '#9ba2a7');
            $(this).addClass("ui-state-highlight").find("p").html("En Dehors !!!");
        }
    });

    $("#suivant").hide();
    $("#droppable").hide();

    $("input[type=radio][name=niveau]").on("change", function () {

        recup = $('input[name=niveau]:checked').val().split("-");
        niveau = recup[0];
        choix = recup[1];

        prenom = prompt("Entrez votre Prénom :");
        if (prenom != "") {
        } else {
            prenom = "Visiteur";
        }

        fluxhtml += "<h2>" + tabLibelles[choix] + " - Niveau " + recup[0] + "</h2>";
        fluxhtml += "<h3><span id=prenom> " + prenom + "</span>, vous allez pouvoir démarrer ce Quizz !!!</h3>";
        fluxhtml += "<img class='grandeimage' src=./img/"+tabimgChoix[choix]+" alt='"+tabLibelles[choix]+"'/><br>";

        $("#suivant").show();
        $("#suivant").text("Démarrer le Quizz");
        $("#container").hide();
        $("#quizz").empty();
        $("#quizz").append(fluxhtml);

    });

    $("#quizz").on("click","#reload" ,function () {
        location.reload(true);
    });


    $("#suivant").on("click", function () {
        $("#suivant").show();
        $("#suivant").text("Suivant");

        // Bouton Suivant désactivé, réactivé uniquement après le drag and drop
        $("#suivant").prop("disabled",true);

        $("#container").hide();
        $("#droppable").show();
        $("#droppable").css('background', 'rgb(233, 233, 233)');
        $("#droppable").addClass("ui-state-highlight").find("p").html("Posez votre réponse ici !!!");

        url = "json/" + tabChoix[choix];

        $.getJSON(url, function (data) {
            console.log(data);
            console.log(nbClick);

            var debutjson = data.quizz;
            fluxhtml = "";

            if (nbClick <= 10) {
                fluxhtml += "<h2>" + tabLibelles[choix] + " - Niveau " + recup[0] + "</h2><br>";
                fluxhtml += "<p id='question'><span id='labelquestion'>Question " + parseInt(nbClick) + "</span> : <span class=bold>" + debutjson[niveau][nbClick - 1].question + "</span></p>";
                fluxhtml += "<span id='anecdote'></span>";
                
                fluxhtml += "<ol type=A>";
                debutjson[niveau][nbClick - 1].propositions.forEach((elt, item) => {
                    fluxhtml += "<li ident=" + item + " id=" + parseInt(nbClick - 1) + " class='ui-widget-content'>" + elt + "</li>";
                });
                fluxhtml += "</ol>";

                $("#quizz").empty();
                $("#quizz").append(fluxhtml);
            } else {

                fluxhtml += "<h2>" + tabLibelles[choix] + " - Niveau " + recup[0] + "</h2>";
                fluxhtml += "<h3>Quizz Terminé !!</h3><br>";
                fluxhtml += "<h4>"+"<span id='prenom'>" + prenom + "</span>, vous avez obtenu le score de <span id='score'>" + score + "/10</span>"+"</h4><br><br>";
                fluxhtml += "<button id='reload'>Accueil</button>"

                $("#quizz").empty();
                $("#quizz").append(fluxhtml);
                $("#suivant").hide();
                $("#droppable").hide();
            }
        });
        nbClick += 1;
    });

});