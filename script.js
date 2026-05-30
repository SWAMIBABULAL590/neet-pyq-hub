fetch('questions.json')
.then(res => res.json())
.then(data => {

let container = document.getElementById("questions");
let search = document.getElementById("search");
let subject = document.getElementById("subject");

function displayQuestions(list){

container.innerHTML = "";

if(list.length === 0){
container.innerHTML = "<h3>No Questions Found</h3>";
return;
}

list.forEach(q => {

container.innerHTML += `
<div class="question-card">
<h3>${q.question}</h3>
<p><b>Subject:</b> ${q.subject}</p>
<p><b>Chapter:</b> ${q.chapter}</p>
</div>
`;

});
}

function filterData(){

let searchValue = search.value.toLowerCase();
let subjectValue = subject.value;

let filtered = data.filter(q => {

let matchChapter =
q.chapter.toLowerCase().includes(searchValue);

let matchSubject =
subjectValue === "" || q.subject === subjectValue;

return matchChapter && matchSubject;

});

displayQuestions(filtered);

}

displayQuestions(data);

search.addEventListener("input", filterData);
subject.addEventListener("change", filterData);

});
