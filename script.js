/* =====================================================
   OUR UNIVERSE — COMPLETE SCRIPT
===================================================== */


/* =====================================================
   OPENING SCREEN — GENERATE STARS
===================================================== */

const sky = document.querySelector(".night-sky");

for (let i = 0; i < 140; i++) {

    const star = document.createElement("div");

    star.classList.add("star");

    star.style.left =
        Math.random() * 100 + "%";

    star.style.top =
        Math.random() * 100 + "%";

    star.style.animationDelay =
        Math.random() * 4 + "s";

    star.style.animationDuration =
        (2 + Math.random() * 3) + "s";

    sky.appendChild(star);
}


/* =====================================================
   ENTER OUR UNIVERSE
===================================================== */

function enterUniverse() {

    /* Start cinematic music */

    startMusic();


    const welcome =
        document.getElementById("welcome");

    const universe =
        document.getElementById("universe");


    /* Start opening transition */

    welcome.classList.add("entering");


    /* Reveal universe after transition */

    setTimeout(() => {

        welcome.style.display = "none";

        universe.classList.remove("hidden");

    }, 3000);

}


/* =====================================================
   STORY MEMORIES
===================================================== */

const memories = {

    1: {
        number: "MEMORY 01",
        title: "The Beginning",
        date: "End of July 2024",
        text:
            "We didn't know it at the time, but everything started with a game. Somewhere near the end of July 2024, two people met while playing — and that random game became the beginning of our story."
    },


    2: {
        number: "MEMORY 02",
        title: "Our First Conversation",
        date: "August 2024",
        text:
            "What started with meeting each other in a game slowly turned into an actual conversation. One conversation became another, and somehow talking to you started becoming one of my favorite things."
    },


    3: {
        number: "MEMORY 03",
        title: "I Love You",
        date: "19 September 2024",
        text:
            "19 September 2024. A date that became a part of our story forever — the day we said those three little words to each other: I love you."
    },


    4: {
        number: "MEMORY 04",
        title: "Our First Call",
        date: "22 June 2025",
        text:
            "22 June 2025. The first time our conversations moved beyond just messages and we heard each other's voices. Somehow, the distance felt a little smaller that day."
    },


    5: {
        number: "MEMORY 05",
        title: "The First Meeting",
        date: "Not yet...",
        text:
            "We haven't had our first meeting yet. And maybe that's what makes this star different. It's not a memory from the past — it's a memory we're still waiting to create together."
    }

};


/* =====================================================
   OPEN MEMORY
===================================================== */

function openMemory(number) {

    const memory =
        memories[number];


    document
        .getElementById("memory-number")
        .textContent =
        memory.number;


    document
        .getElementById("memory-title")
        .textContent =
        memory.title;


    document
        .getElementById("memory-date")
        .textContent =
        memory.date;


    document
        .getElementById("memory-text")
        .textContent =
        memory.text;


    document
        .getElementById("memory-modal")
        .classList.add("active");

}


/* =====================================================
   CLOSE MEMORY
===================================================== */

function closeMemory() {

    document
        .getElementById("memory-modal")
        .classList.remove("active");

}


/* =====================================================
   HER UNIVERSE — SCROLL REVEALS
===================================================== */

const herSections =
    document.querySelectorAll(
        "#her-universe > div"
    );


const revealObserver =
    new IntersectionObserver(

        (entries) => {

            entries.forEach((entry) => {

                if (entry.isIntersecting) {

                    entry.target
                        .classList
                        .add("revealed");

                }

            });

        },

        {
            threshold: 0.15
        }

    );


herSections.forEach((section) => {

    section.classList.add(
        "her-hidden"
    );

    revealObserver.observe(section);

});


/* =====================================================
   FIRST MEETING — FUTURE REVEAL
===================================================== */

function revealMeeting() {

    const futureMessage =
        document.getElementById(
            "future-message"
        );


    futureMessage
        .classList
        .add("active");

}


/* =====================================================
   FINAL LOVE LETTER — OPEN
===================================================== */

function openLoveLetter() {

    const letter =
        document.getElementById(
            "love-letter-card"
        );


    letter
        .classList
        .add("active");

}


/* =====================================================
   FINAL LOVE LETTER — CLOSE
===================================================== */

function closeLoveLetter() {

    const letter =
        document.getElementById(
            "love-letter-card"
        );


    letter
        .classList
        .remove("active");

}


/* =====================================================
   REPLAY OUR UNIVERSE
===================================================== */

function replayUniverse() {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

}


/* =====================================================
   CINEMATIC MUSIC
===================================================== */

const universeMusic =
    document.getElementById("universe-music");

const musicToggle =
    document.getElementById("music-toggle");

let musicFadeTimer = null;


/* =====================================================
   START MUSIC
===================================================== */

function startMusic() {

    if (!universeMusic) return;

    clearInterval(musicFadeTimer);

    universeMusic.volume = 0;

    universeMusic.play()
        .then(() => {

            if (musicToggle) {
                musicToggle.classList.add("playing");
                musicToggle.textContent = "♫";
            }

            let volume = 0;

            musicFadeTimer = setInterval(() => {

                volume += 0.03;

                if (volume >= 0.45) {

                    volume = 0.45;

                    clearInterval(musicFadeTimer);

                }

                universeMusic.volume = volume;

            }, 100);

        })
        .catch((error) => {

            console.log(
                "Music could not start:",
                error
            );

        });
}


/* =====================================================
   MUTE / UNMUTE MUSIC
===================================================== */

function toggleMusic() {

    if (!universeMusic) return;

    clearInterval(musicFadeTimer);


    /* MUSIC IS PLAYING → MUTE */

    if (!universeMusic.paused) {

        universeMusic.pause();

        if (musicToggle) {

            musicToggle.classList.remove("playing");

            musicToggle.textContent = "🔇";

        }

        return;
    }


    /* MUSIC IS PAUSED → PLAY */

    universeMusic.volume = 0.45;

    universeMusic.play()
        .then(() => {

            if (musicToggle) {

                musicToggle.classList.add("playing");

                musicToggle.textContent = "♫";

            }

        })
        .catch((error) => {

            console.log(
                "Music could not start:",
                error
            );

        });

}