function showAsk() {
    document.getElementById("home").style.display = "none";
    document.getElementById("askSection").style.display = "block";
    document.getElementById("bibleSection").style.display = "none";
    document.getElementById("readerSection").style.display = "none";
}

function showBible() {
    document.getElementById("home").style.display = "none";
    document.getElementById("askSection").style.display = "none";
    document.getElementById("bibleSection").style.display = "block";
    document.getElementById("readerSection").style.display = "none";
}

function showReader() {
    document.getElementById("home").style.display = "none";
    document.getElementById("askSection").style.display = "none";
    document.getElementById("bibleSection").style.display = "none";
    document.getElementById("readerSection").style.display = "block";
    loadBooks();
}

function goHome() {
    document.getElementById("home").style.display = "block";
    document.getElementById("askSection").style.display = "none";
    document.getElementById("bibleSection").style.display = "none";
    document.getElementById("readerSection").style.display = "none";
}

const topics = [
    {
        keywords: ["lust", "temptation", "desire"],
        verse: "Matthew 5:28",
        text: "But I tell you that anyone who looks at a woman lustfully has already committed adultery with her in his heart.",
        explanation: "Jesus teaches that sin begins in the heart and mind, not just in actions. Lust treats people as objects rather than honoring them as God's creation.",
        guidance: "Guard your thoughts and what you watch. Focus on respecting others and building healthy relationships based on love, not lust."
    },
    {
        keywords: ["anger", "mad", "frustrated"],
        verse: "James 1:19-20",
        text: "My dear brothers and sisters, take note of this: Everyone should be quick to listen, slow to speak and slow to become angry, because human anger does not produce the righteousness that God desires.",
        explanation: "Anger itself isn't always wrong, but uncontrolled anger leads to words and actions we regret. God wants us to respond thoughtfully, not react emotionally.",
        guidance: "When you feel angry, pause and take deep breaths. Ask yourself: 'What would help this situation?' Respond with kindness when possible."
    },
    {
        keywords: ["fail", "failure", "hate myself", "disappointed", "mess up"],
        verse: "Romans 8:1",
        text: "Therefore, there is now no condemnation for those who are in Christ Jesus.",
        explanation: "Failure does not define your worth. God offers forgiveness and a fresh start. Even when you stumble, you are not condemned or rejected.",
        guidance: "Learn from your mistake, ask for forgiveness if needed, and focus on growing. Every person who ever did anything great failed many times first."
    },
    {
        keywords: ["forgive", "forgiveness", "hurt", "someone wronged me"],
        verse: "Ephesians 4:32",
        text: "Be kind and compassionate to one another, forgiving each other, just as in Christ God forgave you.",
        explanation: "Forgiveness is not about pretending something didn't hurt. It's about releasing the burden of anger and trusting God with justice.",
        guidance: "Forgiveness is a process. Start by praying for the person who hurt you, even if you don't feel it yet. This helps your own heart heal."
    },
    {
        keywords: ["jealous", "jealousy", "envy", "compare"],
        verse: "Proverbs 14:30",
        text: "A heart at peace gives life to the body, but envy rots the bones.",
        explanation: "Jealousy and comparison steal your joy and peace. They make you focus on what others have instead of being grateful for your own blessings.",
        guidance: "Practice gratitude daily. Write down three things you're thankful for. Celebrate others' success instead of comparing yourself to them."
    },
    {
        keywords: ["lonely", "alone", "isolated", "no friends"],
        verse: "Deuteronomy 31:6",
        text: "Be strong and courageous. Do not be afraid or terrified because of them, for the Lord your God goes with you; he will never leave you nor forsake you.",
        explanation: "Even when you feel alone, God promises to be with you. Loneliness is a feeling, but God's presence is a fact.",
        guidance: "Reach out to one person today, even just to say hello. Consider joining a church group or community where you can meet people."
    },
    {
        keywords: ["purpose", "meaning", "why am i here", "direction"],
        verse: "Jeremiah 29:11",
        text: "For I know the plans I have for you, declares the Lord, plans to prosper you and not to harm you, plans to give you hope and a future.",
        explanation: "God has a purpose for your life. Even when you don't know your direction, He does. Your existence is not an accident.",
        guidance: "Try different activities and see what you enjoy and what helps others. Your purpose often combines what you're good at, what you love, and how you can serve."
    }
];

function answerQuestion() {
    let q = document.getElementById("question").value.toLowerCase();
    let resultDiv = document.getElementById("answerResult");
    let found = false;
    let output = "";
    
    for (let t of topics) {
        for (let k of t.keywords) {
            if (q.includes(k)) {
                output += `
                <div style="background:rgba(255,245,235,0.8); padding:20px; margin-bottom:20px; border-radius:15px;">
                    <h3 style="color:#3f352c;">📖 Scripture</h3>
                    <p><strong>${t.verse}</strong></p>
                    <p><em>"${t.text}"</em></p>
                    
                    <h3 style="color:#3f352c;">💭 Explanation</h3>
                    <p>${t.explanation}</p>
                    
                    <h3 style="color:#3f352c;">🌟 Guidance</h3>
                    <p>${t.guidance}</p>
                </div>
                `;
                found = true;
                break;
            }
        }
    }
    
    if (!found) {
        output = `
        <div style="background:rgba(255,245,235,0.8); padding:25px; border-radius:15px;">
            <p>I don't have an answer for that specific question yet. Here are some topics I can help with:</p>
            <p>• Lust and temptation<br>• Anger<br>• Failure and self-hatred<br>• Forgiveness<br>• Jealousy<br>• Loneliness<br>• Purpose and direction</p>
            <p>Try asking about one of these topics, or check back soon as we add more!</p>
        </div>
        `;
    }
    
    resultDiv.innerHTML = output;
}

const bibleBooks = [
    "Genesis", "Exodus", "Leviticus", "Numbers", "Deuteronomy", "Joshua", "Judges", "Ruth",
    "1 Samuel", "2 Samuel", "1 Kings", "2 Kings", "1 Chronicles", "2 Chronicles", "Ezra", "Nehemiah",
    "Esther", "Job", "Psalm", "Proverbs", "Ecclesiastes", "Song of Solomon", "Isaiah", "Jeremiah",
    "Lamentations", "Ezekiel", "Daniel", "Hosea", "Joel", "Amos", "Obadiah", "Jonah", "Micah",
    "Nahum", "Habakkuk", "Zephaniah", "Haggai", "Zechariah", "Malachi",
    "Matthew", "Mark", "Luke", "John", "Acts", "Romans", "1 Corinthians", "2 Corinthians",
    "Galatians", "Ephesians", "Philippians", "Colossians", "1 Thessalonians", "2 Thessalonians",
    "1 Timothy", "2 Timothy", "Titus", "Philemon", "Hebrews", "James", "1 Peter", "2 Peter",
    "1 John", "2 John", "3 John", "Jude", "Revelation"
];

const chapterCounts = {
    "Genesis": 50, "Exodus": 40, "Leviticus": 27, "Numbers": 36, "Deuteronomy": 34,
    "Joshua": 24, "Judges": 21, "Ruth": 4, "1 Samuel": 31, "2 Samuel": 24,
    "1 Kings": 22, "2 Kings": 25, "1 Chronicles": 29, "2 Chronicles": 36,
    "Ezra": 10, "Nehemiah": 13, "Esther": 10, "Job": 42, "Psalm": 150,
    "Proverbs": 31, "Ecclesiastes": 12, "Song of Solomon": 8, "Isaiah": 66,
    "Jeremiah": 52, "Lamentations": 5, "Ezekiel": 48, "Daniel": 12,
    "Hosea": 14, "Joel": 3, "Amos": 9, "Obadiah": 1, "Jonah": 4,
    "Micah": 7, "Nahum": 3, "Habakkuk": 3, "Zephaniah": 3, "Haggai": 2,
    "Zechariah": 14, "Malachi": 4, "Matthew": 28, "Mark": 16, "Luke": 24,
    "John": 21, "Acts": 28, "Romans": 16, "1 Corinthians": 16, "2 Corinthians": 13,
    "Galatians": 6, "Ephesians": 6, "Philippians": 4, "Colossians": 4,
    "1 Thessalonians": 5, "2 Thessalonians": 3, "1 Timothy": 6, "2 Timothy": 4,
    "Titus": 3, "Philemon": 1, "Hebrews": 13, "James": 5, "1 Peter": 5,
    "2 Peter": 3, "1 John": 5, "2 John": 1, "3 John": 1, "Jude": 1,
    "Revelation": 22
};

let currentBook = "";
let currentChapter = 1;
let maxChapters = 0;

function loadBooks() {
    let output = "<h3>Select a Book:</h3><div class='book-grid'>";
    
    for (let book of bibleBooks) {
        output += `<button onclick="loadChapters('${book}')">${book}</button>`;
    }
    
    output += "</div>";
    document.getElementById("readerContent").innerHTML = output;
}

function loadChapters(book) {
    currentBook = book;
    maxChapters = chapterCounts[book] || 50;
    let output = `<button onclick="loadBooks()" style="margin-bottom:15px;">← Back to Books</button>`;
    output += `<h3>${book}</h3>`;
    output += `<div class="chapter-grid">`;
    
    for (let i = 1; i <= maxChapters; i++) {
        output += `<button onclick="loadChapter('${book}', ${i})">${i}</button>`;
    }
    
    output += `</div>`;
    document.getElementById("readerContent").innerHTML = output;
}

function loadChapter(book, chapter) {
    currentBook = book;
    currentChapter = chapter;
    maxChapters = chapterCounts[book] || 50;
    
    let output = `<div class="nav-buttons">`;
    output += `<button onclick="loadChapters('${book}')">← Back to Chapters</button>`;
    output += `</div>`;
    
    output += `<div class="chapter-navigation">`;
    if (chapter > 1) {
        output += `<button onclick="loadChapter('${book}', ${chapter - 1})">← Previous</button>`;
    } else {
        output += `<button disabled style="opacity:0.5; cursor:not-allowed;">← Previous</button>`;
    }
    
    output += `<span>${book} ${chapter}</span>`;
    
    if (chapter < maxChapters) {
        output += `<button onclick="loadChapter('${book}', ${chapter + 1})">Next →</button>`;
    } else {
        output += `<button disabled style="opacity:0.5; cursor:not-allowed;">Next →</button>`;
    }
    
    output += `</div>`;
    
    output += `<div id="chapter-text">`;
    output += `<p class="loading">Loading ${book} ${chapter}...</p>`;
    output += `</div>`;
    
    document.getElementById("readerContent").innerHTML = output;
    
    fetch(`https://bible-api.com/${book}+${chapter}?translation=kjv`)
        .then(response => response.json())
        .then(data => {
            let versesOutput = "";
            if (data.verses && data.verses.length > 0) {
                data.verses.forEach(verse => {
                    versesOutput += `<p><strong>${verse.verse}</strong> ${verse.text}</p>`;
                });
            } else {
                versesOutput = "<p>Could not load verses. Please try again later.</p>";
            }
            document.getElementById("chapter-text").innerHTML = versesOutput;
        })
        .catch(error => {
            document.getElementById("chapter-text").innerHTML = "<p>Error loading chapter. Please try again.</p>";
        });
}

function searchBible() {
    let word = document.getElementById("bibleSearch").value.toLowerCase();
    let resultDiv = document.getElementById("bibleResult");
    
    resultDiv.innerHTML = "<p class='loading'>Searching...</p>";
    
    fetch(`https://bible-api.com/${encodeURIComponent(word)}?translation=kjv`)
        .then(response => response.json())
        .then(data => {
            let output = "";
            let count = 0;
            
            if (data.verses && data.verses.length > 0) {
                data.verses.forEach(verse => {
                    output += `
                    <div style="background:rgba(255,245,235,0.8); padding:15px; margin-bottom:15px; border-radius:10px;">
                        <p><strong>${verse.book} ${verse.chapter}:${verse.verse}</strong><br>
                        ${verse.text}</p>
                    </div>
                    `;
                    count++;
                });
                output = `<p>Found ${count} verses:</p>` + output;
            } else {
                output = "<p>No verses found. Try a different word like 'love', 'faith', or 'pray'.</p>";
            }
            
            resultDiv.innerHTML = output;
        })
        .catch(error => {
            resultDiv.innerHTML = "<p>Error searching. Please try again.</p>";
        });
}
