rolling = false;
initialSelectionFlag = true;
transitionSlideUpIn = 50;
transitionSlideUpOut = 50;

async function performGiveaway() {
    chooseName();
    rolling=true;
    await sleep(6000);
    highlightName();
    switchButtons();
}

function highlightName() {
    setInterval(function(){
        $("#output").fadeIn(1000);
        $("#output").fadeOut(1000);
    }, 1500)
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function switchButtons() {

    var x = document.getElementById("stopButton");
    var y = document.getElementById("startButton");

    // Restart Button
    if (x.style.display === "none") {
        x.style.display = "block";

    } else {
        x.style.display = "none";
    }

    // Start Button
    if (y.style.display === "none") {
        y.style.display = "block";
    } else {
        y.style.display = "none";
    }
}

/*
async function chooseName() {
    names = ["@snackswithmom", "@socalfooodie", "@gloriasfoodadventure", "@iris", "@josh"]
    for(var x=0; x<40; x++){
        names.push("@snackswithmom");
    }
    for(var y=0; y<19; y++){
        names.push("@socalfooodie");
    }
    for(var z=0; z<23; z++){
        names.push("@gloriasfoodadventure");
    }

    for (var number=0; number<20; number++){
        names.push("@iris");
        names.push("@josh");
    }
    //max = 1000;
    max = names.length;
    min = 0;
    end = 25;
    //var count = document.getElementById('output').value;
    //var stat = document.createElement("p");
    //stat.id = "current_status";
    //document.body.appendChild(stat);

    var g = Math.floor(Math.random() * (max - min) + min)
    var count = 0;
    sayGiveawayFunc();
    var itvl = setInterval(async function() {
        await sleep(2000);
        update(g);
        g = names[Math.floor(Math.random() * (max - min) + min)];
        if(count == end){
            clearInterval(itvl)
        }
        count++;
    }, 50)

    function update(g) {
        $("#output").text(g);
    }
}
*/

function readNames() {
    names = {
            "@snackswithmom" : 40,
            "@socalfoodier" : 19,
            "@gloriasfoodadventure" : 23,
            "@_alex.rey" : 5,
            "@kodydevoux" : 6,
            "@liliann_2" : 23,
            "@food.vince" : 19,
            "@cozy_eats" : 11,
            "@marrymunches" : 26,
            "@2am.eats" : 5,
            "@randywrld" : 14,
            "@xaveyur" : 4,
            "@gobroke4boba" : 2,
            "@simone.eatsss" : 6,
            "@mzluv2travel" : 16,
            "@kristinajlim" : 8,
            "@mrmadmunchies" : 8,
            "@richcity.lashes" : 5,
            "@elysseyee" : 36,
            "@airickmusic" : 6,
            "@akingjosh" : 13,
            "@janessa.lourdes.eats" : 10,
            "@daanielley.53" : 13,
            "@yeet.hey.girl" : 7,
            "@annakissel13" : 1,
            "@lleana__" : 8,
            "@nat.jpg" : 5,
            "@chanellexlee" : 1,
            "@_ginaskitchen" : 7,
            "@jsm2n" : 7,
            "@sillyboopmonster" : 10,
            "@natnatnatt" : 4,
            "@mysteriouslyalluring" : 2,
            "@the_pampam" : 1,
            "@abitpeckish" : 30,
            "@jolly_bakas_everywhere" : 9,
            "@yourlocalhotcheetos" : 24,
            "@nailgazms" : 19,
            "@eatingsfrom" : 9,
            "@michellelieats" : 26
    }

    arrayNames = []
    numEntries = 0;
    for (var key in names){
        for (var entry=0; entry<names[key]; entry++){
            arrayNames.push(key)
            numEntries++;
        }
    }

    console.log("Number of entries: " + numEntries);
    return arrayNames
}

/* Using setTimeout to control loop speed & easier timeouts */

async function chooseName() {
    /*
    names = ["@snackswithmom", "@socalfooodie", "@gloriasfoodadventure", "@iris", "@josh"]
    for(var x=0; x<40; x++){
        names.push("@snackswithmom");
    }
    for(var y=0; y<19; y++){
        names.push("@socalfooodie");
    }
    for(var z=0; z<23; z++){
        names.push("@gloriasfoodadventure");
    }

    for (var number=0; number<20; number++){
        names.push("@iris");
        names.push("@josh");
    }
    */
    names = readNames();
    //max = 1000;
    max = names.length;
    min = 0;
    end = 80;
    speed = 16;
    //var count = document.getElementById('output').value;
    //var stat = document.createElement("p");
    //stat.id = "current_status";
    //document.body.appendChild(stat);

    var g = Math.floor(Math.random() * (max - min) + min)
    var count = 0;
    sayGiveawayFunc();
    await sleep(2000);
    function start(){
            update(g);
            g = names[Math.floor(Math.random() * (max - min) + min)];
            if(count > end/2){
                speed = speed/.94;
            }

            if(count == end){
                clearTimeout(t);
            }
            else{
            count++;
            t = setTimeout(start, speed);
            }
    }

    start();
    clearTimeout();

    function update(g) {
        $("#output").text(g);
    }
}

function sayGiveawayFunc () {
    var giveawayValue = ""
    if (!initialSelectionFlag){
        sayGiveaway = document.getElementsByClassName("chosen sayGiveaway");
        giveawayValue = "#" + sayGiveaway[0].id;
        $("#output").text($(giveawayValue).text())
    }
}

/* OLD VERSION - slower
function changeGiveaway(giveawayId){
    console.log(giveawayId);
    var footers=["#giveaway1", "#giveaway2", "#giveaway3"]
    for(var footer in footers){
        console.log("in for: " + footers[footer]);
        if (giveawayId == footers[footer]){
            $(giveawayId).animate({opacity: 1}, 500);
        }
        else {
            $(footers[footer]).animate({opacity: 0.3}, 500);
        }
    }
}
*/

function changeGiveaway(giveawayId){

    if(initialSelectionFlag){
        $("#initialSelectionBlock").fadeOut(500);
        $('#selectionBlock').fadeOut(500);
        $('#startButton').css("display", "block");
        $(giveawayId).animate({opacity: 1}, 500);
        $(giveawayId).addClass('chosen sayGiveaway');
        test = document.getElementsByClassName("chosen sayGiveaway");
        initialSelectionFlag = false;
    }

    else{
        if(rolling==false){
            chosen = document.getElementsByClassName("chosen sayGiveaway");
            sayGiveaway = document.getElementsByClassName('sayGiveaway');

            $(chosen).animate({opacity: 0.1}, 500);
            $(chosen).removeClass("chosen sayGiveaway").addClass("unchosen");
            $(giveawayId).animate({opacity: 1}, 500);
            $(giveawayId).removeClass("unchosen").addClass("chosen sayGiveaway");
        }
    }
}

