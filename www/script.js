// --- GAME DATA POOL (EXPANDED FOR V3) --- //
const categories = {
    // Basic (T1)
    colors: {
        bins: [
            { id: "bin-red", label: "Merah", colorClass: "bin-1" },
            { id: "bin-green", label: "Hijau", colorClass: "bin-2" },
            { id: "bin-yellow", label: "Kuning", colorClass: "bin-3" },
            { id: "bin-blue", label: "Biru", colorClass: "bin-5" }
        ],
        items: [
            { name: "Apel", icon: "🍎", target: "bin-red" }, { name: "Stroberi", icon: "🍓", target: "bin-red" }, { name: "Tomat", icon: "🍅", target: "bin-red" },
            { name: "Daun Bawang", icon: "🥬", target: "bin-green" }, { name: "Brokoli", icon: "🥦", target: "bin-green" }, { name: "Timun", icon: "🥒", target: "bin-green" },
            { name: "Pisang", icon: "🍌", target: "bin-yellow" }, { name: "Lemon", icon: "🍋", target: "bin-yellow" }, { name: "Keju", icon: "🧀", target: "bin-yellow" },
            { name: "Blueberry", icon: "🫐", target: "bin-blue" }, { name: "Permen Biru", icon: "🍬", target: "bin-blue" }
        ]
    },
    shapes: {
        bins: [
            { id: "bin-round", label: "Bulat (O)", colorClass: "bin-3" },
            { id: "bin-long", label: "Panjang (I)", colorClass: "bin-1" }
        ],
        items: [
            { name: "Jeruk", icon: "🍊", target: "bin-round" }, { name: "Donat", icon: "🍩", target: "bin-round" }, { name: "Kue Tart", icon: "🎂", target: "bin-round" },
            { name: "Pisang", icon: "🍌", target: "bin-long" }, { name: "Wortel", icon: "🥕", target: "bin-long" }, { name: "Timun", icon: "🥒", target: "bin-long" }
        ]
    },
    // Medium (T2)
    types: {
        bins: [
            { id: "bin-fruit", label: "Buah", colorClass: "bin-4" },
            { id: "bin-veg", label: "Sayur", colorClass: "bin-2" },
            { id: "bin-meat", label: "Daging", colorClass: "bin-1" },
            { id: "bin-drink", label: "Minuman", colorClass: "bin-5" }
        ],
        items: [
            { name: "Apel", icon: "🍎", target: "bin-fruit" }, { name: "Anggur", icon: "🍇", target: "bin-fruit" },
            { name: "Wortel", icon: "🥕", target: "bin-veg" }, { name: "Bawang", icon: "🧅", target: "bin-veg" },
            { name: "Ayam", icon: "🍗", target: "bin-meat" }, { name: "Steak", icon: "🥩", target: "bin-meat" },
            { name: "Susu", icon: "🥛", target: "bin-drink" }, { name: "Jus", icon: "🧃", target: "bin-drink" }
        ]
    },
    storage: {
        bins: [
            { id: "bin-freezer", label: "Freezer 🥶", colorClass: "bin-5" },
            { id: "bin-fridge", label: "Kulkas ❄️", colorClass: "bin-2" },
            { id: "bin-shelf", label: "Rak Biasa 📦", colorClass: "bin-1" }
        ],
        items: [
            { name: "Es Krim", icon: "🍦", target: "bin-freezer" }, { name: "Es Batu", icon: "🧊", target: "bin-freezer" }, { name: "Daging Beku", icon: "🥩", target: "bin-freezer" },
            { name: "Susu Segar", icon: "🥛", target: "bin-fridge" }, { name: "Yogurt", icon: "🥣", target: "bin-fridge" }, { name: "Keju", icon: "🧀", target: "bin-fridge" },
            { name: "Mie Instan", icon: "🍜", target: "bin-shelf" }, { name: "Kopi", icon: "☕", target: "bin-shelf" }, { name: "Sirup", icon: "🍯", target: "bin-shelf" }
        ]
    },
    // Hard (T3)
    nutrition: {
        bins: [
            { id: "bin-sugar", label: "Banyak Gula 🍬", colorClass: "bin-3" },
            { id: "bin-protein", label: "Tinggi Protein 🍗", colorClass: "bin-1" },
            { id: "bin-fiber", label: "Kaya Serat 🥦", colorClass: "bin-2" }
        ],
        items: [
            { name: "Permen", icon: "🍬", target: "bin-sugar" }, { name: "Cokelat", icon: "🍫", target: "bin-sugar" }, { name: "Soda", icon: "🥤", target: "bin-sugar" },
            { name: "Telur", icon: "🥚", target: "bin-protein" }, { name: "Ayam", icon: "🍗", target: "bin-protein" }, { name: "Ikan", icon: "🐟", target: "bin-protein" },
            { name: "Apel", icon: "🍎", target: "bin-fiber" }, { name: "Brokoli", icon: "🥦", target: "bin-fiber" }, { name: "Oatmeal", icon: "🌾", target: "bin-fiber" }
        ]
    },
    recycle: {
        bins: [
            { id: "bin-organic", label: "Organik (Sisa Makanan)", colorClass: "bin-2" },
            { id: "bin-plastic", label: "Plastik/Botol", colorClass: "bin-5" },
            { id: "bin-general", label: "Lain-lain", colorClass: "bin-4" }
        ],
        items: [
            { name: "Sisa Apel", icon: "🍎", target: "bin-organic" }, { name: "Daun Bawang", icon: "🥬", target: "bin-organic" },
            { name: "Botol Kosong", icon: "🍼", target: "bin-plastic" }, { name: "Gelas Plastik", icon: "🥤", target: "bin-plastic" },
            { name: "Baterai", icon: "🔋", target: "bin-general" }, { name: "Tissue", icon: "🧻", target: "bin-general" }
        ]
    },
    diet: {
        bins: [
            { id: "bin-vegan", label: "Vegan 🌿", colorClass: "bin-2" },
            { id: "bin-nonvegan", label: "Bukan Vegan 🥩", colorClass: "bin-3" }
        ],
        items: [
            { name: "Tahu", icon: "🧊", target: "bin-vegan" }, { name: "Jamur", icon: "🍄", target: "bin-vegan" }, { name: "Apel", icon: "🍎", target: "bin-vegan" },
            { name: "Daging", icon: "🥩", target: "bin-nonvegan" }, { name: "Susu Sapi", icon: "🥛", target: "bin-nonvegan" }, { name: "Keju", icon: "🧀", target: "bin-nonvegan" }
        ]
    }
};

const compliments = ["Hebat!", "Luar Biasa!", "Pintar!", "Cerdas!", "Lincah!", "Mantap!"];

// --- GAME STATE --- //
let gameState = {
    highestUnlockedLevel: 1, // Max is 3000
    score: 0
};
let settings = { sound: true };

// Play session state
let currentLevelIndex = 1;
let remainingItems = -1;
let draggedElement = null;
let isHardChallenge = false;
let timeRemaining = 0;
let totalTime = 0;
let timerInterval = null;

// --- DOM ELEMENTS --- //
const welcomeScreen = document.getElementById('welcome-screen');
const levelSelectScreen = document.getElementById('level-select-screen');
const gameScreen = document.getElementById('game-screen');
const modalOverlay = document.getElementById('modal');
const challengeModal = document.getElementById('challenge-modal');

// Buttons & UI
const resumeBtn = document.getElementById('resume-btn');
const mapBtn = document.getElementById('map-btn');
const resetBtn = document.getElementById('reset-btn');
const navHomeBtn = document.getElementById('nav-home-btn');
const navSoundBtn = document.getElementById('nav-sound-btn');
const prevPageBtn = document.getElementById('prev-page-btn');
const nextPageBtn = document.getElementById('next-page-btn');
const currentPageSpan = document.getElementById('current-page');

const levelGrid = document.getElementById('level-grid');
const levelDisplayEl = document.getElementById('current-level-display');
const levelTitleEl = document.getElementById('level-title');
const instructionEl = document.getElementById('level-instruction');
const scoreEl = document.getElementById('score');
const timerText = document.getElementById('timer-text');
const timerBar = document.getElementById('timer-bar');

const conveyorEl = document.getElementById('item-conveyor');
const binsContainerEl = document.getElementById('bins-container');

// Audio
const bgm = document.getElementById('bgm');
const sfxCorrect = document.getElementById('sfx-correct');
const sfxWrong = document.getElementById('sfx-wrong');
const sfxWin = document.getElementById('sfx-win');
const sfxLose = document.getElementById('sfx-lose');
const sfxBeep = document.getElementById('sfx-beep');
const sfxGo = document.getElementById('sfx-go');
const sfxClick = document.getElementById('sfx-click');

const countdownOverlay = document.getElementById('countdown-overlay');
const countdownText = document.getElementById('countdown-text');

// --- AUDIO MANAGER --- //
function toggleSound() {
    settings.sound = !settings.sound;
    navSoundBtn.textContent = settings.sound ? "🔊" : "🔇";
    localStorage.setItem('minimarketSettings', JSON.stringify(settings));

    if (settings.sound) {
        bgm.volume = 0.3;
        bgm.play().catch(e => console.log("Auto-play prevented", e));
    } else {
        bgm.pause();
    }
}

function playSound(sfx) {
    if (!settings.sound) return;
    sfx.currentTime = 0;
    // Lower volume a bit
    if (sfx === sfxCorrect || sfx === sfxWrong) sfx.volume = 0.5;
    sfx.play().catch(e => console.log("Auto-play prevented", e));
}

// --- INIT & SAVE SYSTEM --- //
function initApp() {
    const savedData = localStorage.getItem('minimarketGameV3');
    const savedSettings = localStorage.getItem('minimarketSettings');

    if (savedData) gameState = JSON.parse(savedData);
    if (savedSettings) {
        settings = JSON.parse(savedSettings);
        navSoundBtn.textContent = settings.sound ? "🔊" : "🔇";
    }

    // Safety checks
    if (!gameState.highestUnlockedLevel) gameState = { highestUnlockedLevel: 1, score: 0 };
    if (gameState.highestUnlockedLevel > 3000) gameState.highestUnlockedLevel = 3000;

    document.getElementById('resume-level-display').textContent = `(Melanjutkan Level ${gameState.highestUnlockedLevel})`;

    // First interaction for audio
    document.body.addEventListener('click', initAudio, { once: true });

    // Global click listener for button SFX
    document.addEventListener('click', (e) => {
        if (e.target.closest('button') || e.target.classList.contains('btn') || e.target.classList.contains('lvl-btn') || e.target.classList.contains('icon-btn')) {
            playSound(sfxClick);
        }
    });
}

function initAudio() {
    if (settings.sound) {
        bgm.volume = 0.3;
        bgm.play().catch(e => console.log("Interaction needed:", e));
    }
}

function saveGame() {
    localStorage.setItem('minimarketGameV3', JSON.stringify(gameState));
}

function navigateTo(screenId) {
    [welcomeScreen, levelSelectScreen, gameScreen].forEach(s => {
        s.classList.remove('active');
        s.classList.add('hidden');
    });
    document.getElementById(screenId).classList.remove('hidden');
    document.getElementById(screenId).classList.add('active');
}

// --- BUTTON LISTENERS --- //
resumeBtn.addEventListener('click', () => {
    isHardChallenge = false;
    currentLevelIndex = gameState.highestUnlockedLevel;
    startLevel(currentLevelIndex);
});

mapBtn.addEventListener('click', () => {
    mapPage = Math.floor((gameState.highestUnlockedLevel - 1) / 50);
    renderMapPage();
    navigateTo('level-select-screen');
});

resetBtn.addEventListener('click', () => {
    if (confirm("Yakin ingin menghapus seluruh progres? Data tidak bisa kembali!")) {
        gameState = { highestUnlockedLevel: 1, score: 0 };
        saveGame();
        document.getElementById('resume-level-display').textContent = `(Level 1)`;
    }
});

navHomeBtn.addEventListener('click', () => {
    stopTimer();
    if (countdownInterval) clearInterval(countdownInterval);
    countdownOverlay.classList.add('hidden');
    document.getElementById('resume-level-display').textContent = `(Melanjutkan Level ${gameState.highestUnlockedLevel})`;
    navigateTo('welcome-screen');
});

navSoundBtn.addEventListener('click', toggleSound);

document.getElementById('modal-home-btn').addEventListener('click', () => {
    modalOverlay.classList.add('hidden');
    mapPage = Math.floor((gameState.highestUnlockedLevel - 1) / 50);
    renderMapPage();
    navigateTo('level-select-screen');
});

document.getElementById('next-level-btn').addEventListener('click', () => {
    modalOverlay.classList.add('hidden');
    // If we won a challenge, we might jump. Just play the target level.
    if (currentLevelIndex < 3000) {
        startLevel(currentLevelIndex + 1);
    } else {
        navigateTo('welcome-screen');
    }
});

// --- PETA LEVEL (MAP SCREEN) --- //
let mapPage = 0; // 0 for lvls 1-50, 1 for 51-100, max 59 for 2951-3000
const LEVELS_PER_PAGE = 50;

function renderMapPage() {
    const startLvl = (mapPage * LEVELS_PER_PAGE) + 1;
    let endLvl = startLvl + LEVELS_PER_PAGE - 1;
    if (endLvl > 3000) endLvl = 3000;

    currentPageSpan.textContent = (mapPage + 1);
    prevPageBtn.disabled = mapPage === 0;
    nextPageBtn.disabled = endLvl === 3000;

    levelGrid.innerHTML = '';

    for (let lvl = startLvl; lvl <= endLvl; lvl++) {
        const btn = document.createElement('button');
        btn.textContent = lvl;
        btn.className = 'lvl-btn';

        let targetLevelToPlay = lvl;

        if (lvl <= gameState.highestUnlockedLevel) {
            btn.classList.add('lvl-completed');
            btn.onclick = () => { isHardChallenge = false; startLevel(targetLevelToPlay); };
        } else if (lvl === gameState.highestUnlockedLevel + 1) {
            btn.classList.add('lvl-unlocked');
            btn.onclick = () => { isHardChallenge = false; startLevel(targetLevelToPlay); };
        } else if (lvl === gameState.highestUnlockedLevel + 2 || lvl === gameState.highestUnlockedLevel + 3) {
            // Allows skipping up to 2 levels ahead (e.g if highest is 10, unlocked is 11, skippable is 12 and 13)
            btn.classList.add('lvl-challenge');
            btn.title = "Tantangan Ekstrem Buka Level!";
            btn.onclick = () => promptChallenge(targetLevelToPlay);
        } else {
            btn.classList.add('lvl-locked');
            btn.disabled = true;
        }

        levelGrid.appendChild(btn);
    }
}

prevPageBtn.addEventListener('click', () => { if (mapPage > 0) { mapPage--; renderMapPage(); } });
nextPageBtn.addEventListener('click', () => { if (mapPage < 59) { mapPage++; renderMapPage(); } });

// --- CHALLENGE MODAL --- //
let challengeTargetLevel = 1;
function promptChallenge(lvl) {
    challengeTargetLevel = lvl;
    document.getElementById('challenge-level-num').textContent = lvl;
    challengeModal.classList.remove('hidden');
}

document.getElementById('cancel-challenge-btn').addEventListener('click', () => {
    challengeModal.classList.add('hidden');
});

document.getElementById('accept-challenge-btn').addEventListener('click', () => {
    challengeModal.classList.add('hidden');
    isHardChallenge = true;
    startLevel(challengeTargetLevel);
});

// --- CORE LOGIC: THEMES & GENERATOR --- //
function updateTheme(levelNum) {
    // 0 = default, 1 = beach, 2 = sunset, 3 = space. Cycles every 50 levels.
    const cycle = Math.floor((levelNum - 1) / 50) % 4;
    document.body.className = '';

    if (cycle === 0) document.body.classList.add('theme-default');
    if (cycle === 1) document.body.classList.add('theme-beach');
    if (cycle === 2) document.body.classList.add('theme-sunset');
    if (cycle === 3) document.body.classList.add('theme-space');
}

function generateLevelLogic(levelNum, isChallenge) {
    const keys = Object.keys(categories);
    // Difficulty Tiering
    let tierIndex = Math.min(Math.floor((levelNum - 1) / 500), keys.length - 1);

    // Make lower levels stick to simpler categories, higher levels mix all
    let availableCategories = keys.slice(0, Math.max(2, tierIndex + 2));

    // Pick random category from available
    let categoryKey = availableCategories[Math.floor(Math.random() * availableCategories.length)];
    let pool = categories[categoryKey];

    // Sub-scaling based on exactly what level we are on
    // Max bins depends on pool. Max items depends on level (caps around 25 on extreme levels)
    let binCount = 2 + Math.floor(levelNum / 500);
    if (binCount > pool.bins.length) binCount = pool.bins.length;

    let itemCount = 5 + Math.floor(levelNum / 20);
    if (itemCount > 25) itemCount = 25;

    // Hard challenge modifier
    if (isChallenge) {
        binCount = Math.min(pool.bins.length, binCount + 1);
        itemCount += 5;
    }

    let selectedBins = [...pool.bins].sort(() => Math.random() - 0.5).slice(0, binCount);
    const validBinIds = selectedBins.map(b => b.id);
    let possibleItems = pool.items.filter(item => validBinIds.includes(item.target));

    let levelItems = [];
    for (let i = 0; i < itemCount; i++) {
        let rItem = possibleItems[Math.floor(Math.random() * possibleItems.length)];
        levelItems.push({ id: `i-${i}`, name: rItem.name, icon: rItem.icon, targetBin: rItem.target });
    }

    return { title: `Misi Sortir ${categoryKey.toUpperCase()}`, instruction: `Kerjakan secepatnya!`, bins: selectedBins, items: levelItems };
}

// --- GAMEPLAY LOOP --- //
function startLevel(lvl) {
    currentLevelIndex = lvl;
    updateTheme(lvl);
    navigateTo('game-screen');

    const levelData = generateLevelLogic(lvl, isHardChallenge);

    levelDisplayEl.textContent = lvl + (isHardChallenge ? " 🔥" : "");
    levelTitleEl.textContent = levelData.title;
    instructionEl.textContent = isHardChallenge ? "TANTANGAN: Mode Cepat & Padat!" : levelData.instruction;
    remainingItems = levelData.items.length;

    // Timer logic
    // Normal: 5 seconds base + 3s per item. 
    // Hard Challenge: 2s per item.
    let timePerItem = isHardChallenge ? 2 : Math.max(1, 3 - (lvl / 1000)); // Gets slightly faster over 3000 levels
    totalTime = Math.floor(3 + (remainingItems * timePerItem));
    timeRemaining = totalTime;

    // Clear and Render
    conveyorEl.innerHTML = '';
    binsContainerEl.innerHTML = '';

    levelData.bins.forEach((binData, index) => {
        const binEl = document.createElement('div');
        binEl.className = 'bin';
        const colors = ['--bin-1', '--bin-2', '--bin-3', '--bin-4', '--bin-5'];
        const binColorVar = binData.colorClass ? `var(--${binData.colorClass})` : `var(${colors[index % colors.length]})`;

        binEl.style.borderColor = binColorVar;
        binEl.id = binData.id;
        binEl.innerHTML = `<span class="bin-title" style="background: ${binColorVar}">${binData.label}</span>`;

        // Touch & Mouse
        binEl.addEventListener('dragover', handleDragOver);
        binEl.addEventListener('dragenter', handleDragEnter);
        binEl.addEventListener('dragleave', handleDragLeave);
        binEl.addEventListener('drop', handleDrop);
        binEl.addEventListener('touchmove', handleTouchMove, { passive: false });

        binsContainerEl.appendChild(binEl);
    });

    const shuffled = [...levelData.items].sort(() => Math.random() - 0.5);
    shuffled.forEach((itemData, index) => {
        const itemEl = document.createElement('div');
        itemEl.className = 'item pop-in';
        itemEl.style.animationDelay = `${index * 0.05}s`;
        itemEl.draggable = true;
        itemEl.id = itemData.id;
        itemEl.setAttribute('data-target', itemData.targetBin);

        itemEl.innerHTML = `<span class="item-icon">${itemData.icon}</span>`;

        itemEl.addEventListener('dragstart', handleDragStart);
        itemEl.addEventListener('dragend', handleDragEnd);
        itemEl.addEventListener('touchstart', handleTouchStart, { passive: false });
        itemEl.addEventListener('touchmove', handleTouchMove, { passive: false });
        itemEl.addEventListener('touchend', handleTouchEnd);

        conveyorEl.appendChild(itemEl);
    });

    updateScoreDisplay();
    startCountdown(() => {
        startTimer();
    });
}

// --- COUNTDOWN MECHANIC --- //
let countdownInterval = null;
function startCountdown(callback) {
    if (countdownInterval) clearInterval(countdownInterval);
    countdownOverlay.classList.remove('hidden');

    let count = 3;
    countdownText.textContent = count;
    playSound(sfxBeep);

    countdownInterval = setInterval(() => {
        count--;
        if (count > 0) {
            countdownText.textContent = count;
            playSound(sfxBeep);
        } else if (count === 0) {
            countdownText.textContent = "GO!";
            countdownText.classList.add('pulse');
            playSound(sfxGo);
        } else {
            clearInterval(countdownInterval);
            countdownOverlay.classList.add('hidden');
            countdownText.classList.remove('pulse');
            if (callback) callback();
        }
    }, 1000);
}

// --- TIMER MECHANIC --- //
function startTimer() {
    stopTimer();
    updateTimerUI();
    document.querySelector('.timer-badge').classList.remove('timer-danger');

    timerInterval = setInterval(() => {
        timeRemaining--;
        updateTimerUI();

        if (timeRemaining <= 5 && timeRemaining > 0) {
            playSound(sfxWrong); // Tick sound warning
            document.querySelector('.timer-badge').classList.add('timer-danger');
        }

        if (timeRemaining <= 0) {
            stopTimer();
            handleTimeOut();
        }
    }, 1000);
}

function stopTimer() {
    if (timerInterval) clearInterval(timerInterval);
}

function updateTimerUI() {
    const min = Math.floor(timeRemaining / 60);
    const sec = timeRemaining % 60;
    timerText.textContent = `${min.toString().padStart(2, '0')}:${sec.toString().padStart(2, '0')}`;

    // Bar
    const pct = (timeRemaining / totalTime) * 100;
    timerBar.style.width = `${pct}%`;
    if (pct < 30) timerBar.style.backgroundColor = 'var(--error)';
    else if (pct < 60) timerBar.style.backgroundColor = 'var(--accent-dark)';
    else timerBar.style.backgroundColor = 'var(--success)';
}

function handleTimeOut() {
    playSound(sfxLose);
    document.getElementById('modal-title').textContent = "WAKTU HABIS!";
    document.getElementById('modal-message').textContent = "Aduh, kamu kurang cepat. Coba lagi level ini!";
    document.getElementById('modal-mascot').textContent = "⏱️";

    document.getElementById('next-level-btn').textContent = "Ulangi Level";
    document.getElementById('next-level-btn').onclick = () => {
        modalOverlay.classList.add('hidden');
        startLevel(currentLevelIndex); // restart same level on fail
    };

    modalOverlay.classList.remove('hidden');
}

// --- DRAG / TOUCH LOGIC (Ported from V2) --- //
let touchOffsetX = 0, touchOffsetY = 0, currentDropTarget = null;
function handleDragStart(e) {
    draggedElement = e.target;
    if (e.type !== 'touchstart') { setTimeout(() => e.target.classList.add('dragging'), 0); e.dataTransfer.setData('text/plain', e.target.id); e.dataTransfer.effectAllowed = 'move'; }
}
function handleDragEnd(e) { if (draggedElement) draggedElement.classList.remove('dragging'); document.querySelectorAll('.bin').forEach(b => b.classList.remove('drag-over')); }
function handleDragOver(e) { e.preventDefault(); e.dataTransfer.dropEffect = 'move'; return false; }
function handleDragEnter(e) { e.preventDefault(); if (e.currentTarget.classList.contains('bin')) e.currentTarget.classList.add('drag-over'); }
function handleDragLeave(e) { if (e.currentTarget.classList.contains('bin')) e.currentTarget.classList.remove('drag-over'); }
function handleDrop(e) { e.stopPropagation(); e.preventDefault(); processDrop(e.currentTarget); }

// Touch
function handleTouchStart(e) {
    const t = e.touches[0]; draggedElement = e.currentTarget;
    const r = draggedElement.getBoundingClientRect();
    window.lastScrollY = window.scrollY; // prevent accidental scroll on mobile
    touchOffsetX = t.clientX - r.left; touchOffsetY = t.clientY - r.top;
    draggedElement.style.position = 'fixed'; draggedElement.style.zIndex = '1000'; draggedElement.classList.add('dragging');
    mSt(t.clientX, t.clientY);
}
function handleTouchMove(e) {
    if (!draggedElement) return; e.preventDefault();
    const t = e.touches[0]; mSt(t.clientX, t.clientY);
    draggedElement.style.display = 'none';
    const under = document.elementFromPoint(t.clientX, t.clientY);
    draggedElement.style.display = 'flex';
    const newT = under ? under.closest('.bin') : null;
    if (currentDropTarget && currentDropTarget !== newT) currentDropTarget.classList.remove('drag-over');
    if (newT && newT !== currentDropTarget) newT.classList.add('drag-over');
    currentDropTarget = newT;
}
function handleTouchEnd(e) {
    if (!draggedElement) return;
    draggedElement.style.position = 'relative'; draggedElement.style.left = ''; draggedElement.style.top = ''; draggedElement.style.zIndex = ''; draggedElement.classList.remove('dragging');
    if (currentDropTarget) processDrop(currentDropTarget);
    if (currentDropTarget) currentDropTarget.classList.remove('drag-over');
    currentDropTarget = null; draggedElement = null;
}
function mSt(x, y) { draggedElement.style.left = (x - touchOffsetX) + 'px'; draggedElement.style.top = (y - touchOffsetY) + 'px'; }

// Validation
function processDrop(bin) {
    bin.classList.remove('drag-over');
    if (!draggedElement) return;

    if (draggedElement.getAttribute('data-target') === bin.id) {
        bin.classList.add('success');
        playSound(sfxCorrect);
        setTimeout(() => bin.classList.remove('success'), 400);

        let item = draggedElement; // capture reference before it clears
        item.style.transform = 'scale(0) rotate(180deg)';
        item.style.opacity = '0';

        setTimeout(() => {
            if (item.parentNode) item.parentNode.removeChild(item);
            gameState.score += 10;
            updateScoreDisplay();
            remainingItems--;

            if (remainingItems === 0) {
                stopTimer();
                handleWin();
            }
        }, 300);
    } else {
        bin.classList.add('error');
        playSound(sfxWrong);
        gameState.score = Math.max(0, gameState.score - 5);
        updateScoreDisplay();
        setTimeout(() => bin.classList.remove('error'), 400);

        if (draggedElement.style.position !== 'fixed') {
            draggedElement.classList.add('shakeItem');
            let itm = draggedElement;
            setTimeout(() => itm.classList.remove('shakeItem'), 400);
        }
    }
}

function updateScoreDisplay() {
    scoreEl.textContent = gameState.score;
}

// --- WIN LOGIC --- //
function handleWin() {
    playSound(sfxWin);

    // Update saves if they beat a new level (or a challenge)
    if (currentLevelIndex >= gameState.highestUnlockedLevel) {
        gameState.highestUnlockedLevel = Math.min(3000, currentLevelIndex + 1);
        saveGame();
    }

    const isEnd = currentLevelIndex >= 3000;

    document.getElementById('modal-title').textContent = isEnd ? "DEWA MINIMARKET!" : (isHardChallenge ? "TANTANGAN BERHASIL!" : compliments[Math.floor(Math.random() * compliments.length)]);
    document.getElementById('modal-message').textContent = isEnd ?
        `KAMU TELAH MENAKLUKKAN 3000 LEVEL! Skor Akhir: ${gameState.score}. Benar-benar legend!` :
        `Sisa Waktu: ${timeRemaining} detik. Hebat sekali!`;
    document.getElementById('modal-mascot').textContent = isEnd ? "👑" : "🌟";

    document.getElementById('next-level-btn').textContent = isEnd ? "Ulangi Game" : "Lanjut Level Berikutnya";
    document.getElementById('next-level-btn').onclick = () => {
        modalOverlay.classList.add('hidden');
        if (isEnd) {
            gameState.highestUnlockedLevel = 1; gameState.score = 0; saveGame();
            navigateTo('welcome-screen');
        } else {
            isHardChallenge = false;
            startLevel(currentLevelIndex + 1);
        }
    };

    modalOverlay.classList.remove('hidden');
    fireBigConfetti();
}

function fireBigConfetti() {
    if (typeof confetti === 'function') {
        const d = 3000; const e = Date.now() + d;
        (function f() {
            confetti({ particleCount: 5, angle: 60, spread: 55, origin: { x: 0 }, colors: ['#FF6B6B', '#4ECDC4', '#FFE66D'] });
            confetti({ particleCount: 5, angle: 120, spread: 55, origin: { x: 1 }, colors: ['#FF6B6B', '#4ECDC4', '#FFE66D'] });
            if (Date.now() < e) requestAnimationFrame(f);
        }());
    }
}

initApp();
