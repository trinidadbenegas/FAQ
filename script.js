const btns = document.querySelectorAll('.question-buttons');
console.log(btns)
 btns.forEach(btn => {
    btn.addEventListener('click', (e) => {
       let parent = e.currentTarget.parentElement.parentElement;
       parent.classList.toggle('show')
    })
    
 });