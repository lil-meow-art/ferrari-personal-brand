
// ==========================================
// 1. PAGE LOADER
// ==========================================

window.addEventListener("load", () => {
    const loader = document.getElementById("loader");

    setTimeout(() => {
        if (loader) {
            loader.classList.add("hidden");
        }
    }, 700);
});


// ==========================================
// 2. MOBILE NAVIGATION
// ==========================================

const menuToggle = document.getElementById("menuToggle");
const mainNav = document.getElementById("mainNav");

if (menuToggle && mainNav) {
    menuToggle.addEventListener("click", () => {
        mainNav.classList.toggle("open");
    });

    mainNav.querySelectorAll("a").forEach(link => {
        link.addEventListener("click", () => {
            mainNav.classList.remove("open");
        });
    });
}


// ==========================================
// 3. INTERACTIVE FERRARI CAR
// ==========================================

const carPopups = {
    performance: {
        number: "01",
        title: "PERFORMANCE",
        text: "Performance is built on precision. Every detail, every calculation and every small improvement can make a difference on the track."
    },

    strategy: {
        number: "02",
        title: "STRATEGY",
        text: "A successful strategy means analysing information, anticipating possible scenarios and choosing the right moment to act."
    },

    teamwork: {
        number: "03",
        title: "TEAMWORK",
        text: "Formula 1 is never a one-person job. Communication, trust and coordination turn individual skills into collective performance."
    }
};

const carPopup = document.getElementById("carPopup");
const popupClose = document.getElementById("popupClose");
const popupNumber = document.getElementById("popupNumber");
const popupTitle = document.getElementById("popupTitle");
const popupText = document.getElementById("popupText");

document.querySelectorAll(".car-hotspot").forEach(button => {
    button.addEventListener("click", () => {
        const key = button.dataset.popup;
        const information = carPopups[key];

        if (!information || !carPopup) return;

        popupNumber.textContent = information.number;
        popupTitle.textContent = information.title;
        popupText.textContent = information.text;

        carPopup.classList.add("active");
    });
});

if (popupClose && carPopup) {
    popupClose.addEventListener("click", () => {
        carPopup.classList.remove("active");
    });
}


// ==========================================
// 4. INTERACTIVE TECHNICAL SKILLS
// ==========================================

const skills = {
    python: {
        number: "01",
        symbol: "Py",
        title: "PYTHON",
        description: "Using Python to work with data, automate tasks and develop analytical solutions. It is one of the main tools in my technical toolkit.",
        level: "WORKING KNOWLEDGE",
        footer: "DATA ANALYSIS / AUTOMATION"
    },

    sql: {
        number: "02",
        symbol: "SQL",
        title: "DATABASES & SQL",
        description: "Working with structured information and understanding how databases organise, store and retrieve data.",
        level: "BASIC KNOWLEDGE",
        footer: "DATABASES / DATA RETRIEVAL"
    },

    programming: {
        number: "03",
        symbol: "{ }",
        title: "PROGRAMMING",
        description: "Understanding programming logic, algorithms and the structure of software solutions. I enjoy approaching problems in a systematic way.",
        level: "DEVELOPING SKILL",
        footer: "LOGIC / ALGORITHMS"
    },

    ml: {
        number: "04",
        symbol: "ML",
        title: "MACHINE LEARNING",
        description: "Exploring the fundamentals of machine learning, predictive models and how algorithms can identify patterns in data.",
        level: "FOUNDATIONAL KNOWLEDGE",
        footer: "MODELS / PREDICTIONS"
    }
};

const skillDisplay = document.getElementById("skillDisplay");
const skillButtons = document.querySelectorAll(".skill-hotspot");

skillButtons.forEach(button => {
    button.addEventListener("click", () => {
        const skillKey = button.dataset.skill;
        const skill = skills[skillKey];

        if (!skill || !skillDisplay) return;

        skillButtons.forEach(item => {
            item.classList.remove("active");
        });

        button.classList.add("active");

        skillDisplay.innerHTML = `
            <span class="info-overline">SELECTED COMPONENT / ${skill.number}</span>
            <div class="info-symbol">${skill.symbol}</div>
            <h3>${skill.title}</h3>
            <p>${skill.description}</p>
            <span class="skill-level">${skill.level}</span>
            <div class="info-footer">
                <span>${skill.footer}</span>
                <span>${skill.number} — 04</span>
            </div>
        `;

        skillDisplay.classList.add("skill-detail");
    });
});


// ==========================================
// 5. PIT WALL — RACE SCENARIOS
// ==========================================

const scenarios = {
    weather: {
        number: "01",
        title: "CHANGING WEATHER",

        description: "Rain is starting to fall. The track is becoming slippery, but the intensity is still low. Your driver is currently on medium tyres. What is your call?",

        data: [
            ["TRACK", "WETTING"],
            ["TYRES", "MEDIUM"],
            ["RAIN", "INCREASING"]
        ],

        options: [
            {
                id: "wait",
                label: "STAY OUT AND WAIT",
                feedback: "A patient decision. If the rain remains light, staying out can save valuable pit-stop time. However, you risk losing grip if conditions deteriorate quickly. Monitoring the weather and lap times is essential."
            },
            {
                id: "pit",
                label: "PIT FOR INTERMEDIATES",
                feedback: "An aggressive call. Intermediates can provide better grip as the track becomes wet, but pitting too early may cost time if the rain does not intensify. Timing is everything."
            }
        ]
    },

    tyres: {
        number: "02",
        title: "TYRE DEGRADATION",

        description: "Your driver reports that the tyres are losing grip. Lap times are getting slower, and the car behind is closing the gap. You still have several laps before the planned pit window. What do you do?",

        data: [
            ["TYRE CONDITION", "DEGRADING"],
            ["GAP BEHIND", "1.8 SEC"],
            ["PIT WINDOW", "4 LAPS"]
        ],

        options: [
            {
                id: "push",
                label: "PUSH FOR MORE LAPS",
                feedback: "Staying out could protect track position and avoid an unnecessary early stop. But pushing on worn tyres increases the risk of further degradation. You need to consider the gap, tyre life and pace of your rivals."
            },
            {
                id: "pit",
                label: "PIT FOR FRESH TYRES",
                feedback: "A proactive decision. Fresh tyres may restore performance and help defend against the car behind. However, an early stop can create strategic compromises later in the race."
            }
        ]
    },

    safety: {
        number: "03",
        title: "SAFETY CAR",

        description: "A Safety Car has been deployed. Your driver is running in P3, and the pit lane is open. Several competitors are staying out, but a pit stop could offer an opportunity to gain track position. What is your call?",

        data: [
            ["POSITION", "P3"],
            ["RACE STATUS", "SAFETY CAR"],
            ["PIT LANE", "OPEN"]
        ],

        options: [
            {
                id: "pit",
                label: "PIT DURING SAFETY CAR",
                feedback: "A potential strategic advantage. A Safety Car can reduce the time lost during a pit stop. If the timing works, fresh tyres could help you challenge for a higher position. But you must consider traffic and competitors' reactions."
            },
            {
                id: "stay",
                label: "STAY OUT AND KEEP TRACK POSITION",
                feedback: "Protecting track position can be valuable, especially when the race is approaching its final stages. However, staying out means accepting older tyres while your rivals may gain an advantage with fresh rubber."
            }
        ]
    }
};


// ==========================================
// 6. DISPLAY RACE SCENARIO
// ==========================================

const scenarioTabs = document.querySelectorAll(".scenario-tab");
const scenarioNumber = document.getElementById("scenarioNumber");
const scenarioTitle = document.getElementById("scenarioTitle");
const scenarioDescription = document.getElementById("scenarioDescription");
const scenarioData = document.getElementById("scenarioData");
const scenarioOptions = document.getElementById("scenarioOptions");
const decisionFeedback = document.getElementById("decisionFeedback");

function loadScenario(scenarioKey) {
    const scenario = scenarios[scenarioKey];

    if (!scenario) return;

    scenarioNumber.textContent = scenario.number;
    scenarioTitle.textContent = scenario.title;
    scenarioDescription.textContent = scenario.description;

    scenarioData.innerHTML = scenario.data.map(item => `
        <div>
            <span>${item[0]}</span>
            <strong>${item[1]}</strong>
        </div>
    `).join("");

    scenarioOptions.innerHTML = scenario.options.map((option, index) => `
        <button class="decision-btn" data-choice="${option.id}">
            <span>${index === 0 ? "A" : "B"}</span>
            ${option.label}
        </button>
    `).join("");

    decisionFeedback.innerHTML = `
        <span class="feedback-label">STRATEGY FEEDBACK</span>
        <p>Select your decision to see the outcome.</p>
    `;

    scenarioOptions.querySelectorAll(".decision-btn").forEach(button => {
        button.addEventListener("click", () => {
            const selectedOption = scenario.options.find(
                option => option.id === button.dataset.choice
            );

            if (!selectedOption) return;

            scenarioOptions.querySelectorAll(".decision-btn").forEach(item => {
                item.classList.remove("selected");
            });

            button.classList.add("selected");

            decisionFeedback.innerHTML = `
                <span class="feedback-label">STRATEGY FEEDBACK</span>
                <p>${selectedOption.feedback}</p>
            `;
        });
    });
}


// ==========================================
// 7. SCENARIO TAB SWITCHING
// ==========================================

scenarioTabs.forEach(tab => {
    tab.addEventListener("click", () => {
        scenarioTabs.forEach(item => {
            item.classList.remove("active");
        });

        tab.classList.add("active");

        loadScenario(tab.dataset.scenario);
    });
});


// ==========================================
// 8. INITIALISE FIRST SCENARIO
// ==========================================

loadScenario("weather");


// ==========================================
// 9. SIMPLE SCROLL REVEAL
// ==========================================

const revealElements = document.querySelectorAll(
    ".section-heading, .profile-grid, .approach-card, .racecraft-heading, .technical-layout, .soft-skills, .pitwall-intro, .pitwall-console"
);

if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.12
    });

    revealElements.forEach(element => {
        element.classList.add("reveal");
        observer.observe(element);
    });
}
