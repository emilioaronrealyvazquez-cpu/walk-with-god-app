function showAsk(){

document.getElementById("home").style.display="none";
document.getElementById("askSection").style.display="block";

}

function showBible(){

document.getElementById("home").style.display="none";
document.getElementById("bibleSection").style.display="block";

}

function goHome(){

document.getElementById("home").style.display="block";
document.getElementById("askSection").style.display="none";
document.getElementById("bibleSection").style.display="none";

}

const topics = [

{
keywords:["lust","temptation"],
verse:"Matthew 5:28",
text:"Anyone who looks at a woman with lust has already committed adultery in his heart.",
explanation:"Jesus teaches that lust begins in the heart and can damage how we view others.",
guidance:"Practice self-control and focus on respecting others."
},

{
keywords:["anger","mad"],
verse:"James 1:19-20",
text:"Everyone should be quick to listen, slow to speak and slow to become angry.",
explanation:"Uncontrolled anger often leads to harmful actions.",
guidance:"Take time to calm down before reacting."
},

{
keywords:["fail","failure","hate myself"],
verse:"Romans 8:1",
text:"There is now no condemnation for those who are in Christ Jesus.",
explanation:"Failure does not define a person. God offers forgiveness and growth.",
guidance:"Learn from mistakes and keep striving to improve."
}

];

function answerQuestion(){

let q=document.getElementById("question").value.toLowerCase();

let result="";

for(let t of topics){

for(let k of t.keywords){

if(q.includes(k)){

result+=`
<h3>Scripture</h3>
<p><b>${t.verse}</b></p>

<p>${t.text}</p>

<h3>Explanation</h3>
<p>${t.explanation}</p>

<h3>Guidance</h3>
<p>${t.guidance}</p>
`;

}

}

}

if(result===""){

result="I don't have an answer yet. Try asking about anger, temptation, or failure.";

}

document.getElementById("answerResult").innerHTML=result;

}

const bible=[

{book:"Genesis",chapter:1,verse:1,text:"In the beginning God created the heaven and the earth."},

{book:"John",chapter:3,verse:16,text:"For God so loved the world that he gave his only begotten Son."},

{book:"Psalm",chapter:23,verse:1,text:"The Lord is my shepherd; I shall not want."}

];

function searchBible(){

let word=document.getElementById("bibleSearch").value.toLowerCase();

let output="";

for(let v of bible){

if(v.text.toLowerCase().includes(word)){

output+=`
<p>
<b>${v.book} ${v.chapter}:${v.verse}</b><br>
${v.text}
</p>
`;

}

}

if(output===""){

output="No verses found.";

}

document.getElementById("bibleResult").innerHTML=output;

}
