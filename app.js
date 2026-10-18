(() => {
  const toast = document.querySelector('.toast');
  let toastTimer;
  const showToast = message => {
    toast.textContent = message;
    toast.classList.add('show');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => toast.classList.remove('show'), 2500);
  };
  document.querySelectorAll('[data-toast]').forEach(button => button.addEventListener('click', () => showToast(button.dataset.toast)));

  const nav = document.querySelector('.main-nav');
  const menu = document.querySelector('.menu-toggle');
  menu.addEventListener('click', () => {
    const open = nav.classList.toggle('open');
    menu.setAttribute('aria-expanded', String(open));
  });
  nav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
    nav.classList.remove('open');
    menu.setAttribute('aria-expanded', 'false');
  }));

  document.querySelectorAll('.answer').forEach(answer => answer.addEventListener('click', () => {
    document.querySelectorAll('.answer').forEach(item => {
      item.classList.remove('selected', 'correct', 'wrong');
      item.querySelector('b').textContent = '';
    });
    answer.classList.add('selected');
    if (answer.dataset.answer === 'h1') {
      answer.classList.add('correct');
      answer.querySelector('b').textContent = '✓';
      document.querySelector('.answer-feedback').textContent = 'That’s it! You found the heading tag 🎉';
      document.querySelector('.lesson-continue').disabled = false;
      document.querySelector('.lesson-continue').innerHTML = 'Nice, got it! <span>✓</span>';
    } else {
      answer.classList.add('wrong');
      answer.querySelector('b').textContent = '↺';
      document.querySelector('.answer-feedback').textContent = 'Not quite—look for the heading element and try again.';
      document.querySelector('.lesson-continue').disabled = true;
    }
  }));
  document.querySelector('.lesson-continue').addEventListener('click', () => {
    document.querySelector('.answer-feedback').textContent = 'Lesson complete! A tiny step, a real skill. ✨';
    document.querySelector('.lesson-continue').innerHTML = 'You did it! <span>✓</span>';
    document.querySelector('.progress-label span:last-child').textContent = '3 / 5';
    document.querySelector('.progress-track i').style.width = '60%';
    showToast('First lesson complete! Keep that momentum 🌱');
  });

  const filterButtons = Array.from(document.querySelectorAll('.filter-button'));
  const courseCards = Array.from(document.querySelectorAll('.course-card'));
  filterButtons.forEach(button => button.addEventListener('click', () => {
    filterButtons.forEach(item => item.classList.toggle('active', item === button));
    const filter = button.dataset.filter;
    courseCards.forEach(card => { card.hidden = filter !== 'all' && card.dataset.category.split(' ').indexOf(filter) < 0; });
  }));

  const storageKey = 'mini-2-progress';
  let progress = {};
  try { progress = JSON.parse(localStorage.getItem(storageKey) || '{}'); } catch (_) { progress = {}; }
  const saveProgress = course => {
    progress[course] = Math.min(100, (progress[course] || 0) + 25);
    try { localStorage.setItem(storageKey, JSON.stringify(progress)); } catch (_) {}
    document.querySelectorAll('[data-progress="' + course + '"]').forEach(label => {
      label.textContent = progress[course] + '% complete';
      label.closest('.course-progress').querySelector('i').style.width = progress[course] + '%';
    });
  };
  document.querySelectorAll('[data-progress]').forEach(label => {
    const value = progress[label.dataset.progress] || 0;
    label.textContent = value + '% complete';
    label.closest('.course-progress').querySelector('i').style.width = value + '%';
  });

  const modal = document.querySelector('#lessonModal');
  const modalTitle = document.querySelector('#modalTitle');
  const modalDescription = document.querySelector('.modal-description');
  const modalQuestion = document.querySelector('.modal-question');
  const modalOptions = document.querySelector('.modal-options');
  const modalExample = document.querySelector('.modal-example');
  const modalEmoji = document.querySelector('.modal-emoji');
  const modalResult = document.querySelector('.modal-result');
  const modalNext = document.querySelector('.modal-next');
  const modalClose = document.querySelector('.modal-close');
  let activeCourse = 'html';
  const lessons = {
    html: {title:'Your first tiny step',emoji:'🌱',description:'A webpage starts with HTML—the building blocks that tell your browser what to show.',code:'<h1>Hello, world!</h1>',question:'What does <h1> make?',answers:['A large heading','A picture'],correct:0},
    css: {title:'Give it a little style',emoji:'🎨',description:'CSS gives a webpage its look. You can change colors, spacing, and so much more.',code:'h1 { color: purple; }',question:'What does CSS help you change?',answers:['How a page looks','The page address'],correct:0},
    javascript: {title:'Make something happen',emoji:'⚡',description:'JavaScript lets a webpage react when someone clicks, types, or explores.',code:'button.addEventListener("click", hello);',question:'What can JavaScript make a page do?',answers:['Respond to a click','Change your keyboard'],correct:0},
    python: {title:'Say hello to Python',emoji:'🐍',description:'Python is a friendly language for giving your computer clear instructions.',code:'print("Hello, world!")',question:'What does print() do?',answers:['Shows a message','Prints a paper page'],correct:0},
    react: {title:'Build with little pieces',emoji:'⚛️',description:'React helps you build a page from reusable pieces called components.',code:'function Button() { return <button>Hi</button> }',question:'What do we call a reusable piece in React?',answers:['A component','A browser tab'],correct:0},
    sql: {title:'Ask your data a question',emoji:'🔎',description:'SQL helps you find and organize information stored in a database.',code:'SELECT name FROM pets;',question:'What does SELECT help you do?',answers:['Find information','Design a button'],correct:0},
    web: {title:'Your website journey',emoji:'🌐',description:'Start with HTML, add a little style with CSS, then make things interactive.',code:'<h1>My new website</h1>',question:'Which language describes page structure?',answers:['HTML','SQL'],correct:0}
  };

  function openLesson(course) {
    activeCourse = lessons[course] ? course : 'html';
    const lesson = lessons[activeCourse];
    modalTitle.textContent = lesson.title;
    modalEmoji.textContent = lesson.emoji;
    modalDescription.textContent = lesson.description;
    modalExample.querySelector('code').textContent = lesson.code;
    modalQuestion.textContent = lesson.question;
    modalOptions.innerHTML = lesson.answers.map((answer, index) => '<button data-index="' + index + '">' + answer + '<span>↗</span></button>').join('');
    modalResult.textContent = '';
    modalNext.disabled = true;
    modalNext.innerHTML = 'Check answer <span>→</span>';
    modalOptions.querySelectorAll('button').forEach(button => button.addEventListener('click', () => {
      modalOptions.querySelectorAll('button').forEach(item => item.classList.remove('selected', 'correct', 'wrong'));
      button.classList.add('selected');
      const correct = Number(button.dataset.index) === lesson.correct;
      button.classList.add(correct ? 'correct' : 'wrong');
      modalResult.textContent = correct ? 'You got it! Great little win ✨' : 'Almost—give it one more try.';
      modalResult.style.color = correct ? '#73953f' : '#bb745d';
      modalNext.disabled = !correct;
      if (correct) modalNext.innerHTML = 'Finish this step <span>→</span>';
    }));
    modal.classList.add('open');
    modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
    modalClose.focus();
  }
  function closeLesson() {
    modal.classList.remove('open');
    modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }
  document.querySelectorAll('[data-course]').forEach(button => button.addEventListener('click', () => openLesson(button.dataset.course)));
  modalClose.addEventListener('click', closeLesson);
  modal.addEventListener('click', event => { if (event.target === modal) closeLesson(); });
  document.addEventListener('keydown', event => { if (event.key === 'Escape' && modal.classList.contains('open')) closeLesson(); });
  modalNext.addEventListener('click', () => {
    saveProgress(activeCourse);
    closeLesson();
    showToast('Nice work! ' + activeCourse.toUpperCase() + ' progress saved 🌱');
  });
})();

