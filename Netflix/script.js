const questions = document.querySelectorAll('.faq-section .Q');

questions.forEach((question)=>{
  question.addEventListener('click', ()=>{
    const answer = question.nextElementSibling;
    answer.classList.toggle('hidden');
  })
})
