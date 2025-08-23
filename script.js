const topics = [
    "האם עומר בעצם פיטר פן",
    "הכל חוץ מנופיקי",
    "שינוי אקלים ",
    "חתולים",
    "עוד חתולים",
    "כלום פשוט סתמו",
    "בואו משחק הציורים",
    "!בואו נתאבד קבוצתית ",
    "האם אני צריכה תחביבים אחרים",
   "האם יודו באמת קיים",
   "למה תומר מכיר כל שיר בעולם"
   
];

function generateTopic() {
    const randomIndex = Math.floor(Math.random() * topics.length);
    document.getElementById("topic").innerText = topics[randomIndex];
}