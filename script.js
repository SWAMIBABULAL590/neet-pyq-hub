fetch('questions.json')
.then(res=>res.json())
.then(data=>{

let container=document.getElementById("questions");

if(!container) return;

function displayQuestions(list){

container.innerHTML="";

list.forEach(q=>{

container.innerHTML+=`
<div class="question-card">
<h3>${q.question}</h3>
<p><b>Subject:</b> ${q.subject}</p>
<p><b>Chapter:</b> ${q.chapter}</p>
</div>
`;

});

}

displayQuestions(data);

let search=document.getElementById("search");

if(search){
search.addEventListener("input",(e)=>{

let value=e.target.value.toLowerCase();

let filtered=data.filter(q=>
q.chapter.toLowerCase().includes(value)
);

displayQuestions(filtered);

});
}

});
