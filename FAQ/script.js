function addQuestion() {
  var questionInput = document.getElementById('questionfield').value;
  var questionList = document.getElementById('questionlist');

  // Erstelle ein neues Listenelement und füge die Frage zur Liste hinzu
  var newListItem = document.createElement('li');
  newListItem.className = 'mdl-list__item';
  newListItem.innerHTML = `
    <span class="mdl-list__item-primary-content">
      <i class="material-icons mdl-list__item-icon">search</i>
      ${questionInput}
    </span>
  `;
  questionList.appendChild(newListItem);
}
