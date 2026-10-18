(() => {
  const $ = selector => document.querySelector(selector);
  const $$ = selector => Array.from(document.querySelectorAll(selector));
  const storageKey = 'mini20-professional-v1';
  const toast = $('#toast');
  let toastTimer;
  function notify(message) {
    toast.textContent = message;
    toast.classList.add('show');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => toast.classList.remove('show'), 2500);
  }

  const tracks = [
    {id:'fullstack',name:'Full-Stack Developer',label:'Full-Stack',icon:'🧩',description:'Learn front-end, back-end, and database foundations by building useful web apps',sections:['Intro to Web Development','Interactive Webpages','Intermediate HTML & CSS','Comparisons & Loops','Flexbox','Grid','Arrays & Functions','Objects & ES6','DOM & Events','Semantic HTML & Accessibility','Async JavaScript','JavaScript Classes','React','SQL Basics','Intermediate SQL','Express Basics']},
    {id:'frontend',name:'Front-End Developer',label:'Front-End',icon:'🎨',description:'Design and build responsive, interactive websites',sections:['Web Foundations','HTML Essentials','CSS Foundations','Layout and Flexbox','Responsive Design','JavaScript Basics','DOM and Events','Interactive Interfaces','React Foundations','Reusable Components','Forms and State','Web Accessibility','Portfolio Project','Polish and Publish','Front-End Review']},
    {id:'python',name:'Python Developer',label:'Python',icon:'🐍',description:'Learn Python fundamentals and build useful programs',sections:['Python Foundations','Variables and Types','Working with Text','Making Decisions','Loops and Patterns','Functions','Collections','Files and Data','Object-Oriented Python','Working with APIs','Python Projects','Python Review']},
    {id:'data',name:'Data and SQL',label:'Data',icon:'📊',description:'Explore data, databases, and practical SQL',sections:['Data Foundations','Tables and Records','Your First Queries','Filtering Data','Sorting and Grouping','Joining Tables','SQL Functions','Working with Data','Data Project','SQL Review']}
  ];
  const fullStackCurriculum = [
    [
      ['How a webpage reaches your screen','LEARN','A browser requests a page from a server, receives files, then turns HTML, CSS, and JavaScript into the page you see.','Browser → request → server → HTML, CSS, JS','The browser renders the files into a webpage.'],
      ['Give a page its structure with HTML','LEARN','HTML describes the meaning and order of content. Put visible page content inside body, and give each heading a useful level.','<main>\n  <h1>My first page</h1>\n  <p>Small steps add up.</p>\n</main>','A page with a main heading and paragraph.'],
      ['Connect a stylesheet and add a link','LEARN','CSS controls presentation while anchors connect people to another page or place. Keep structure and visual rules in their own files as projects grow.','<link rel="stylesheet" href="styles.css">\n<a href="#projects">See projects</a>','A styled page with a working in-page link.'],
      ['Web foundations check','PRACTICE','Choose the right building block for a page and review how browser, server, HTML, and CSS work together.','HTML = structure\nCSS = appearance\nJavaScript = behavior','Three layers work together to make a page.'],
      ['Build a personal Linktree page','PROJECT','Create a compact profile with a heading, a short introduction, and a list of links. Make every link label clear and give the page a simple stylesheet.','<main>\n  <h1>Your name</h1>\n  <p>What you are learning</p>\n  <a href="https://example.com">A favorite link</a>\n</main>','A small personal page with a clear identity and useful links.']
    ],
    [
      ['Build a complete HTML document','LEARN','A document starts with a doctype and an html root. The head stores page information; the body holds the content people use.','<!doctype html>\n<html lang="en">\n  <head><title>My page</title></head>\n  <body><h1>Hello!</h1></body>\n</html>','A browser-ready HTML document.'],
      ['Style groups of elements with CSS','LEARN','A selector chooses elements, and declarations inside braces change their appearance. A class lets you apply the same style to a group.','.card {\n  padding: 1rem;\n  border-radius: 12px;\n  background: lavender;\n}','A reusable card style.'],
      ['Add behavior with JavaScript','LEARN','JavaScript can respond to user actions. Select an element, listen for an event, and update the page when that event happens.','button.addEventListener("click", () => {\n  status.textContent = "You clicked it!";\n});','The status message changes after a click.'],
      ['Interactive page check','PRACTICE','Identify which language supplies structure, styling, and behavior. Then trace what changes after a button event.','const button = document.querySelector("button");\nbutton.addEventListener("click", handleClick);','The handler runs when the button is clicked.'],
      ['Make a coffee shop menu','PROJECT','Organize drinks into readable groups, add prices, and style the menu so customers can scan it quickly. Use headings for categories and a responsive layout.','<section class="menu">\n  <h2>Warm drinks</h2>\n  <p>Latte <span>$4</span></p>\n</section>','A clear, responsive cafe menu.']
    ],
    [
      ['Use semantic page regions','LEARN','Elements such as header, nav, main, section, and footer describe the job of each region. Meaningful structure is easier to navigate and maintain.','<header>Brand</header>\n<nav>...</nav>\n<main><section>...</section></main>\n<footer>...</footer>','A page divided into meaningful regions.'],
      ['Target elements with selectors','LEARN','Element selectors style every matching tag. Class selectors start with a dot, while ID selectors start with a hash and should identify one unique element.','h1 { color: rebeccapurple; }\n.card { padding: 1rem; }\n#hero { min-height: 60vh; }','A heading, reusable card, and unique hero region.'],
      ['Control spacing with the box model','LEARN','Each element is a box: content, padding, border, and margin. Setting box-sizing to border-box makes declared widths easier to reason about.','* { box-sizing: border-box; }\n.card { padding: 16px; border: 1px solid #ddd; margin: 12px; }','A card with predictable size and spacing.'],
      ['HTML and CSS check','PRACTICE','Choose a semantic element and CSS rule that make a page easier to understand and maintain.','<article class="story">\n  <h2>...</h2>\n</article>','A standalone story styled as a component.'],
      ['Build a portfolio card','PROJECT','Create a project card with a title, summary, image or visual, and a link. Use spacing and contrast to make the next action obvious.','<article class="project-card">\n  <h2>Weather dashboard</h2>\n  <p>A tiny forecast app.</p>\n  <a href="#work">View project</a>\n</article>','A reusable portfolio project card.']
    ],
    [
      ['Compare values','LEARN','Comparison operators produce true or false. Strict equality checks both value and type, which avoids many surprising conversions.','const isReady = score >= 10;\nconst same = answer === "yes";','Boolean values you can use in a decision.'],
      ['Choose a path with if and else','LEARN','An if statement runs a block when its condition is true. An else branch handles the other case; else if can check another condition.','if (temperature > 25) {\n  message = "Warm";\n} else {\n  message = "Cool";\n}','A message chosen from the temperature.'],
      ['Repeat work with loops','LEARN','A loop repeats a block. Use a for loop when you know the counter or range, and make sure the update moves toward its stopping condition.','for (let step = 1; step <= 3; step++) {\n  console.log(step);\n}','The values 1, 2, and 3 are printed.'],
      ['Decisions and loops check','PRACTICE','Trace a condition and loop one iteration at a time. Predict the final value before running the code.','let total = 0;\nfor (let n = 1; n <= 3; n++) total += n;','The total is 6.'],
      ['Build a quiz with score feedback','PROJECT','Ask a short multiple-choice question, check the selected answer, and show a friendly result. Use a condition for correctness and a loop to render answer choices.','if (selectedAnswer === correctAnswer) {\n  score += 1;\n  feedback.textContent = "Correct!";\n}','A quiz that responds to the learner.']
    ],
    [
      ['Make a row or column with Flexbox','LEARN','Flexbox lays children along a main axis. Set display to flex, then choose row or column with flex-direction.','.toolbar {\n  display: flex;\n  flex-direction: row;\n  gap: 12px;\n}','Items arranged in a horizontal toolbar.'],
      ['Align and distribute items','LEARN','justify-content distributes items on the main axis. align-items positions them on the cross axis. Their effect changes when you change flex-direction.','.toolbar {\n  justify-content: space-between;\n  align-items: center;\n}','A centered row with space between its items.'],
      ['Let a layout wrap on small screens','LEARN','Flex items can wrap when a row runs out of space. Combine flex-wrap with a flexible basis so cards move to another line naturally.','.cards { display: flex; flex-wrap: wrap; gap: 1rem; }\n.card { flex: 1 1 220px; }','Cards wrap into a comfortable layout.'],
      ['Flexbox layout check','PRACTICE','Pick the main-axis or cross-axis property that matches a layout goal, then reason about wrapping.','.nav { display: flex; align-items: center; gap: 1rem; }','A navigation row with aligned links.'],
      ['Build a responsive profile gallery','PROJECT','Make a gallery of profile cards. Use Flexbox to align each card, add a gap, and let the row wrap to fit phones and desktops.','.gallery { display:flex; flex-wrap:wrap; gap:16px; }\n.profile { flex:1 1 220px; }','A profile gallery that adapts to available width.']
    ],
    [
      ['Create columns with CSS Grid','LEARN','Grid divides a container into rows and columns. Define columns on the parent, then let child items occupy the available cells.','.layout {\n  display: grid;\n  grid-template-columns: 240px 1fr;\n  gap: 20px;\n}','A sidebar beside a flexible content column.'],
      ['Repeat responsive tracks','LEARN','The repeat and minmax functions describe flexible tracks without hard-coding a different rule for every screen size.','.cards {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));\n  gap: 1rem;\n}','Cards automatically form as many columns as fit.'],
      ['Place an item across the grid','LEARN','Grid items can span more than one track. Named areas can also make larger page layouts easier to read.','.hero { grid-column: 1 / -1; }\n.layout { grid-template-areas: "nav main"; }','A hero item spans the full grid width.'],
      ['Grid layout check','PRACTICE','Choose a grid rule for a card gallery and predict how the number of columns changes as the container shrinks.','grid-template-columns: repeat(3, 1fr);','Three equal columns on a wide container.'],
      ['Build a photo mosaic','PROJECT','Create an image gallery with a featured tile and smaller tiles. Use grid spans and a narrow-screen fallback to keep every tile readable.','.mosaic { display:grid; grid-template-columns:repeat(3,1fr); gap:8px; }\n.featured { grid-row:span 2; }','A gallery with one featured image.']
    ],
    [
      ['Store a list in an array','LEARN','Arrays keep an ordered collection in one variable. Indexes start at zero, and length tells you how many items are stored.','const topics = ["HTML", "CSS", "JS"];\nconsole.log(topics[0]);','The first topic is HTML.'],
      ['Write a reusable function','LEARN','A function groups instructions behind a name. Parameters bring in values and return sends a result back to the caller.','function addTax(price, rate) {\n  return price * (1 + rate);\n}','A reusable calculation that returns a price.'],
      ['Transform a list with array methods','LEARN','map creates a new value for each item; filter keeps matching items; find returns the first match. These methods leave the original array unchanged.','const longNames = names.filter(name => name.length > 5);','A new array containing only longer names.'],
      ['Arrays and functions check','PRACTICE','Trace a callback for a few values and decide which items remain after a filter.','[2, 5, 8].filter(value => value > 4)','The result is [5, 8].'],
      ['Build a task list','PROJECT','Add tasks from an input, render them from an array, and let a person mark each task complete or remove it. Keep rendering in a function.','const tasks = ["Plan", "Build"];\nfunction renderTasks(items) { /* update the list */ }','A small task list with reusable rendering.']
    ],
    [
      ['Describe a thing with an object','LEARN','Objects store related information as key and value pairs. Read a property with dot notation when its key is known.','const learner = { name: "Mina", level: 2 };\nlearner.name','The learner name is Mina.'],
      ['Loop through object data','LEARN','Destructure properties into local names and use Object.entries when a loop needs both keys and values.','const { name, level } = learner;\nconsole.log(name, level);','Two values taken from one object.'],
      ['Use modern JavaScript syntax','LEARN','Template literals interpolate values, and arrow functions provide a compact function form. Use const by default and let when reassignment is needed.','const greeting = `Hi, ${learner.name}!`;\nconst double = n => n * 2;','A personalized greeting and reusable function.'],
      ['Objects and modern syntax check','PRACTICE','Read an object property, then predict the string created by a template literal.','const item = { title: "Notebook" };\n`Buy ${item.title}`','The result is Buy Notebook.'],
      ['Build a small product catalog','PROJECT','Represent each product as an object, store products in an array, and render a card for each one with its name, price, and category.','const product = { name: "Mug", price: 12, category: "Home" };','A data-driven catalog of product cards.']
    ],
    [
      ['Find elements in the document','LEARN','The DOM is the browser’s object model of a page. Query selectors let JavaScript find an element using a CSS-style selector.','const title = document.querySelector("h1");\ntitle.textContent = "Hello again";','The heading text changes.'],
      ['Respond to an event','LEARN','Events represent actions such as click, input, and submit. Add a listener to the element that should respond and keep the handler focused.','button.addEventListener("click", () => {\n  count += 1;\n});','The count changes after a click.'],
      ['Read and validate form input','LEARN','A submit handler can read input values and show feedback. Prevent the default form navigation when the page handles the data itself.','form.addEventListener("submit", event => {\n  event.preventDefault();\n  output.textContent = nameInput.value.trim();\n});','The submitted name appears on the page.'],
      ['DOM and events check','PRACTICE','Choose the right event for a button, text field, or form and identify which node receives the listener.','input.addEventListener("input", updatePreview);','The preview updates as the value changes.'],
      ['Build an interactive quiz card','PROJECT','Render one question at a time, accept an answer, and update the score and progress. Keep questions in data instead of repeating markup.','const question = { prompt: "2 + 2?", answer: "4" };','A quiz card that reacts to submitted answers.']
    ],
    [
      ['Choose semantic elements','LEARN','Use a button for an action and an anchor for navigation. Landmarks such as main and nav give assistive technology a useful page outline.','<nav aria-label="Main">...</nav>\n<main><article>...</article></main>','A page structure with clear navigation and main content.'],
      ['Write accessible names and image text','LEARN','Labels give form controls a name, and useful alt text explains meaningful images. Decorative images can use an empty alt value.','<label for="email">Email</label>\n<input id="email" type="email">\n<img src="chart.png" alt="Sales rise each month">','A labeled field and an image with meaningful alternative text.'],
      ['Check keyboard access and contrast','LEARN','Interactive controls should work without a mouse and show a visible focus state. Text and controls need sufficient contrast to remain legible.','button:focus-visible { outline: 3px solid #5b43c6; outline-offset: 3px; }','A clear keyboard focus indicator.'],
      ['Accessibility check','PRACTICE','Choose semantic controls, labels, and alternative text that preserve the same information for more people.','<button type="button">Save changes</button>','A native control that supports keyboard use.'],
      ['Build an accessible event page','PROJECT','Create an event page with a logical heading order, descriptive links, a labeled signup form, and keyboard-visible focus.','<main><h1>Community meetup</h1>\n  <form><label for="email">Email</label>...</form>\n</main>','An event page that works well with keyboard and assistive tools.']
    ],
    [
      ['Understand synchronous work','LEARN','Synchronous JavaScript runs one step at a time. A long task can delay later work, so browsers provide APIs for operations that finish later.','console.log("first");\nconsole.log("second");','The first message appears before the second.'],
      ['Wait for a promise','LEARN','A promise represents work that may finish in the future. Use then and catch or async and await to handle its result and errors.','async function loadProfile() {\n  const response = await fetch(url);\n  return response.json();\n}','A profile object after the request completes.'],
      ['Handle network errors','LEARN','Check whether a response succeeded and handle failures. A try/catch block gives the interface a chance to show a useful recovery message.','try {\n  const response = await fetch(url);\n  if (!response.ok) throw new Error("Request failed");\n} catch (error) {\n  showMessage("Try again soon");\n}','A friendly message when a request fails.'],
      ['Async JavaScript check','PRACTICE','Trace which lines wait for a request and which lines handle an error. Loading and failure states are part of the user experience.','const response = await fetch("/api/items");\nconst items = await response.json();','The data is read after the response arrives.'],
      ['Build a searchable recipe finder','PROJECT','Load a small set of recipes, show a loading state, filter by a search term, and display a useful empty or error state.','async function loadRecipes() {\n  showLoading();\n  try { /* fetch and render */ } catch { showError(); }\n}','A recipe finder with clear loading and error states.']
    ],
    [
      ['Create a class','LEARN','A class describes how to create objects with shared behavior. The constructor receives the data needed to make each instance.','class Timer {\n  constructor(seconds) { this.seconds = seconds; }\n}','A timer instance with its own seconds value.'],
      ['Add instance methods','LEARN','Methods are functions attached to a class. They can read or update the current instance through this.','class Counter {\n  value = 0;\n  increment() { this.value += 1; }\n}','A counter that can increment its own value.'],
      ['Extend a class carefully','LEARN','A subclass can reuse a parent class and specialize it. Call super in the constructor before using this in a derived class.','class SavingsGoal extends Goal {\n  constructor(name, target) { super(name); this.target = target; }\n}','A specialized goal that keeps the shared name behavior.'],
      ['Classes check','PRACTICE','Identify the constructor, instance value, and method call in a short class, then predict the updated state.','counter.increment();','The stored counter value increases by one.'],
      ['Build a habit tracker','PROJECT','Create a habit model and a list of habits. Add a completion action and show a weekly count using class methods for shared behavior.','class Habit {\n  constructor(name) { this.name = name; this.days = []; }\n  complete(day) { this.days.push(day); }\n}','A small tracker that records completed days.']
    ],
    [
      ['Think in React components','LEARN','A React component is a function that returns UI. Split a screen into components when a part has a clear purpose or can be reused.','function Welcome() {\n  return <h1>Welcome back</h1>;\n}','A component that renders a heading.'],
      ['Pass information with props','LEARN','Props are inputs passed from a parent to a child component. Treat them as read-only and use them to render different data.','function Greeting({ name }) {\n  return <p>Hello, {name}!</p>;\n}','A greeting that changes with its name prop.'],
      ['Update the screen with state','LEARN','State holds information that can change while a component is in use. Updating state asks React to render the component again.','const [count, setCount] = useState(0);\n<button onClick={() => setCount(count + 1)}>{count}</button>','A button whose displayed count updates.'],
      ['React foundations check','PRACTICE','Decide whether a value belongs in props or state, and trace how a state update changes the rendered interface.','<ProfileCard name="Ari" />','The child receives Ari as a prop.'],
      ['Build a component-based reading list','PROJECT','Create reusable book cards, pass each book as props, and use state to mark books as finished or still reading.','function BookCard({ book, onFinish }) {\n  return <button onClick={onFinish}>{book.title}</button>;\n}','A reading list built from reusable components.']
    ],
    [
      ['Read rows with SELECT','LEARN','A table stores records in columns. SELECT chooses which columns to return, and FROM names the table to read.','SELECT name, role\nFROM learners;','A result containing each learner name and role.'],
      ['Filter rows with WHERE','LEARN','WHERE keeps only rows that match a condition. Use comparison operators and combine conditions when you need a narrower result.','SELECT name\nFROM learners\nWHERE active = true;','Only active learners are returned.'],
      ['Sort, group, and count','LEARN','ORDER BY arranges rows. GROUP BY combines rows with the same value so aggregate functions such as COUNT can summarize them.','SELECT role, COUNT(*)\nFROM learners\nGROUP BY role;','A count of learners in each role.'],
      ['SQL basics check','PRACTICE','Choose clauses to select, filter, and sort a small result. SQL clauses describe what result you want from the table.','SELECT title FROM books WHERE pages < 200;','Book titles for records under 200 pages.'],
      ['Build a learning progress report','PROJECT','Query a learning table to count completed lessons by learner. Add a filter for the current month and sort the largest counts first.','SELECT learner_id, COUNT(*) AS done\nFROM lessons\nWHERE completed = true\nGROUP BY learner_id;','A grouped progress summary.']
    ],
    [
      ['Join related tables','LEARN','A join combines rows from related tables using a shared key. Choose aliases to keep a query readable when two tables have similar column names.','SELECT learners.name, lessons.title\nFROM learners\nJOIN lessons ON lessons.learner_id = learners.id;','Learner names paired with their lesson titles.'],
      ['Use subqueries and common table expressions','LEARN','A subquery can provide a result to another query. A common table expression names a temporary result and makes longer queries easier to follow.','WITH recent AS (\n  SELECT * FROM lessons WHERE created_at >= "2026-01-01"\n)\nSELECT COUNT(*) FROM recent;','A count of recent lessons.'],
      ['Make data safe and consistent','LEARN','Constraints protect stored data. Primary keys identify rows, foreign keys link related records, and parameterized statements keep user values separate from query text.','SELECT * FROM users WHERE email = ?;','A query whose value is passed separately.'],
      ['Intermediate SQL check','PRACTICE','Trace a join key and explain which rows appear when matching records exist in both tables.','SELECT * FROM orders\nJOIN customers ON orders.customer_id = customers.id;','Orders paired with their customer records.'],
      ['Build a bookstore insights page','PROJECT','Combine books, orders, and customers to summarize best-selling titles. Show totals in a small table and explain how the query groups the data.','SELECT books.title, SUM(items.quantity)\nFROM books JOIN items ON items.book_id = books.id\nGROUP BY books.title;','A small report based on joined tables.']
    ],
    [
      ['Start a Node server','LEARN','Node.js runs JavaScript outside the browser. A server listens for requests and sends responses, often as HTML or JSON.','const http = require("node:http");\nconst server = http.createServer((req, res) => res.end("Hello"));','A minimal server response.'],
      ['Define routes with Express','LEARN','Express maps an HTTP method and URL path to a handler. Keep route handlers focused on reading the request and returning a response.','app.get("/api/health", (req, res) => {\n  res.json({ status: "ok" });\n});','A JSON response from a health route.'],
      ['Validate input and return errors','LEARN','Treat request data as untrusted. Validate required fields and return a clear status code and message when a request is invalid.','app.post("/api/tasks", (req, res) => {\n  if (!req.body.title) return res.status(400).json({ error: "Title required" });\n});','A useful client error for missing input.'],
      ['Express basics check','PRACTICE','Match a route to its method and response. Think about what status should be returned when data cannot be found.','res.status(404).json({ error: "Not found" });','A not-found response with JSON details.'],
      ['Build a task API plan','PROJECT','Design routes to list, add, update, and delete tasks. Write down the HTTP method, path, request data, and response for each action.','GET /api/tasks\nPOST /api/tasks\nPATCH /api/tasks/:id\nDELETE /api/tasks/:id','A small, consistent API contract for a task app.']
    ]
  ];
  const fullProjectNames = ['Personal Linktree','Coffee shop menu','Portfolio card gallery','Interactive quiz','Responsive profile gallery','Photo mosaic','Task list','Product catalog','Interactive quiz card','Accessible event page','Recipe finder','Habit tracker','Reading list','Learning progress report','Bookstore insights','Task API'];
  const languageLessons = {
    frontend:[['Meet the browser','LEARN'],['Discovering HTML tags','LEARN'],['HTML Basics','PRACTICE'],['Make a link','LEARN'],['Style your first page','LEARN'],['CSS Basics','PRACTICE'],['Layout with Flexbox','LEARN'],['Responsive pages','LEARN'],['JavaScript basics','LEARN'],['Listen for clicks','PRACTICE'],['Build an interactive card','PROJECT'],['React components','LEARN'],['Make it accessible','LEARN'],['Build a portfolio','PROJECT'],['Front-End review','PRACTICE']],
    python:[['Meet Python','LEARN'],['Names and values','LEARN'],['Python Basics 1','PRACTICE'],['Text and numbers','LEARN'],['Make a decision','LEARN'],['Python Basics 2','PRACTICE'],['Repeat an action','LEARN'],['Write a function','LEARN'],['Lists and dictionaries','LEARN'],['Python Basics 3','PRACTICE'],['Build a mini game','PROJECT'],['Python review','PRACTICE']],
    data:[['What is a database?','LEARN'],['Read a table','LEARN'],['Your first SELECT','PRACTICE'],['Filter your results','LEARN'],['Sort the data','LEARN'],['SQL Basics 1','PRACTICE'],['Group your data','LEARN'],['Join two tables','LEARN'],['SQL Basics 2','PRACTICE'],['Build a data report','PROJECT']]
  };
  const defaultCode = '<!doctype html>\n<html>\n<head>\n  <meta name="viewport" content="width=device-width, initial-scale=1">\n  <style>body{font-family:Arial,sans-serif;padding:40px;background:#f5f2ff;color:#24213a}h1{color:#7654c8}button{background:#7654c8;color:white;padding:10px 16px;border:0;border-radius:8px}</style>\n</head>\n<body>\n  <h1>Hello, world!</h1>\n  <p>I built this page with Mini 2.0.</p>\n  <button onclick="this.textContent=&quot;You did it! ✨&quot;">Click me</button>\n</body>\n</html>';
  let state = {};
  try { state = JSON.parse(localStorage.getItem(storageKey) || '{}'); } catch (_) { state = {}; }
  state.track = tracks.some(track => track.id === state.track) ? state.track : 'fullstack';
  state.done = state.done && typeof state.done === 'object' ? state.done : {};
  state.done[state.track] = Array.isArray(state.done[state.track]) ? state.done[state.track] : [];
  state.practiceDone = Array.isArray(state.practiceDone) ? state.practiceDone : [];
  state.points = Number.isFinite(state.points) ? state.points : 200;
  state.streak = Number.isFinite(state.streak) ? state.streak : 0;
  state.projectCode = typeof state.projectCode === 'string' ? state.projectCode : defaultCode;
  let activeTrack = tracks.find(track => track.id === state.track);
  let activeSection = 0;
  let activeView = 'Learn';
  let openLessonRef = null;
  let questionIndex = 0;
  let toolLanguage = 'html';
  let buildCompletionRef = null;
  let buildTitle = 'Your web project';
  let buildDescription = '';
  const currentDone = () => state.done[activeTrack.id] || (state.done[activeTrack.id] = []);
  function save() { try { localStorage.setItem(storageKey, JSON.stringify(state)); } catch (_) { notify('Browser storage is unavailable; progress may not persist.'); } }
  function updateProgress() {
    const completed = currentDone().filter(item => item.indexOf('s' + activeSection + '-') === 0).length;
    const total = activeTrack.sections.length;
    const lessonCountFor = sectionIndex => activeTrack.id === 'fullstack' ? (fullStackCurriculum[sectionIndex] || []).length : (languageLessons[activeTrack.id] || []).length;
    const completedSections = activeTrack.sections.reduce((count,_,sectionIndex) => {
      const lessonCount = lessonCountFor(sectionIndex);
      const done = Array.from({length:lessonCount},(_,lessonIndex)=>'s'+sectionIndex+'-l'+lessonIndex).every(ref=>currentDone().includes(ref));
      return count + (done ? 1 : 0);
    },0);
    const percent = Math.min(100, Math.round(completedSections / total * 100));
    $('#coinCount').textContent = state.points;
    $('#streakCount').textContent = state.streak + (state.streak === 1 ? ' day' : ' days');
    $('#certificateCount').textContent = completedSections;
    $('#certificateTotal').textContent = total;
    $('#certificatePercent').textContent = percent + '%';
    $('#certificateBar').style.width = percent + '%';
    $('.switch-progress i').style.width = percent + '%';
    $('.profile-name small').textContent = 'Level ' + (1 + Math.floor(state.points / 250)) + ' · ' + activeTrack.label;
    return {completed,total,percent,completedSections};
  }
  function lessonsForSection(sectionIndex = activeSection) {
    if (activeTrack.id === 'fullstack') return fullStackCurriculum[sectionIndex] || fullStackCurriculum[0];
    return languageLessons[activeTrack.id] || languageLessons.frontend;
  }
  function makeSectionMenu() {
    const menu = $('#sectionMenu');
    menu.innerHTML = '';
    activeTrack.sections.forEach((name,index) => {
      const option = document.createElement('button');
      option.textContent = String(index + 1).padStart(2,'0') + '  ' + name;
      option.className = index === activeSection ? 'current' : '';
      option.addEventListener('click', () => { setSection(index); menu.classList.remove('open'); $('#sectionPicker').setAttribute('aria-expanded','false'); });
      menu.appendChild(option);
    });
    $('#sectionNumber').textContent = activeSection + 1;
    $('#sectionPicker').lastChild.textContent = ' OF ' + activeTrack.sections.length;
    $('#previousSection').disabled = activeSection === 0;
    $('#nextSection').disabled = activeSection >= activeTrack.sections.length - 1;
  }
  function setSection(index) {
    activeSection = Math.max(0,Math.min(activeTrack.sections.length - 1,index));
    makeSectionMenu();
    renderLearn();
  }
  function renderProjectCard(entry,index,unlocked) {
    const card = document.createElement('article');
    card.className = 'project-card';
    const part = index > 10 ? '2' : '1';
    card.innerHTML = '<div class="project-thumb ' + (part === '2' ? 'second-thumb' : '') + '"><div class="thumb-avatar">M</div><b>' + (activeTrack.id === 'fullstack' ? fullProjectNames[activeSection] || 'Your mini project' : 'Your mini project') + '</b><small>Made by you, step by step</small><span>My work</span><span>Say hello</span></div><div class="project-copy"><div><span class="lesson-number">' + String(index+1).padStart(2,'0') + '</span><strong>' + entry[0] + '</strong></div><p>' + (entry[2] || 'Build a small web project with the skills you have learned. Customize it, preview it, and save your work.') + '</p><div class="project-meta"><span>PART ' + part + '</span><span class="guided-pill">〈/〉 &nbsp;GUIDED PROJECT</span><span class="lock-icon">' + (unlocked ? '↗' : '♙') + '</span></div></div>';
    card.addEventListener('click', () => {
      if (!unlocked) { notify('Finish the earlier lessons to unlock this project.'); return; }
      buildCompletionRef = {index,section:activeSection};
      buildTitle = entry[0];
      buildDescription = entry[2] || '';
      setActiveView('Build');
    });
    return card;
  }
  function renderLearn() {
    activeView = 'Learn';
    $('.main-area').classList.add('learn-view');
    $('.course-heading').style.display = '';
    $('.section-switcher').style.display = 'flex';
    $('#courseTitle').textContent = activeTrack.sections[activeSection];
    $('#courseDescription').textContent = activeSection === 0 ? activeTrack.description : 'Keep learning with short lessons, practice, and projects.';
    $('#currentCourseName').textContent = activeTrack.name;
    makeSectionMenu();
    const list = $('#lessonList');
    list.innerHTML = '';
    const lessons = lessonsForSection();
    lessons.forEach((entry,index) => {
      const ref = 's' + activeSection + '-l' + index;
      const complete = currentDone().includes(ref);
      const unlocked = index === 0 || currentDone().includes('s' + activeSection + '-l' + (index - 1));
      if (entry[1] === 'PROJECT') { list.appendChild(renderProjectCard(entry,index,unlocked)); return; }
      const row = document.createElement('button');
      row.className = 'lesson-row' + (!complete && unlocked ? ' selected' : '') + (!unlocked ? ' locked' : '') + (complete ? ' completed' : '');
      const className = entry[1] === 'PRACTICE' ? 'practice' : 'learn';
      row.innerHTML = '<span class="lesson-number">' + String(index+1).padStart(2,'0') + '</span><span class="lesson-name">' + entry[0] + '</span><span class="lesson-type ' + className + '"><i>' + (className === 'practice' ? 'ϟ' : '▯') + '</i> ' + entry[1] + '</span>' + (complete ? '<span class="lesson-count">✓</span>' : (index === 0 && unlocked ? '<span class="lesson-count">0/2</span>' : '')) + (unlocked || complete ? '<span class="lesson-action">➜</span>' : '<span class="lock-icon">♙</span>');
      row.addEventListener('click', () => {
        if (!unlocked && !complete) { notify('Complete the previous lesson to unlock this one.'); return; }
        openLessonRef = {ref,title:entry[0],index,section:activeSection,kind:entry[1]};
        openLesson(entry[0],entry[1],entry);
      });
      if (entry[1] === 'PRACTICE' && index < 17) {
        const group = document.createElement('div'); group.className = 'lesson-group'; group.appendChild(row);
        const bonus = document.createElement('button'); bonus.className = 'supercharge locked'; bonus.innerHTML = '<span>ϟ &nbsp;SUPERCHARGE</span><span class="lock-icon">♙</span>';
        bonus.addEventListener('click', () => {
          if (!unlocked) { notify('Complete this practice lesson to unlock the bonus.'); return; }
          openLessonRef = {ref:'bonus-s'+activeSection+'-l'+index,title:entry[0]+' bonus',index,section:activeSection,kind:'PRACTICE'};
          openLesson(entry[0]+' bonus','PRACTICE');
        });
        group.appendChild(bonus); list.appendChild(group);
      } else list.appendChild(row);
    });
    const next = document.createElement('button'); next.className = 'next-track';
    const nextName = activeTrack.sections[Math.min(activeSection+1,activeTrack.sections.length-1)];
    next.innerHTML = '<span><small>' + (activeSection === activeTrack.sections.length-1 ? 'COURSE COMPLETE' : 'NEXT SECTION') + '</small><strong>' + nextName + '</strong><small>' + (activeSection === activeTrack.sections.length-1 ? 'Review your progress and celebrate your work' : 'Continue with the next part of your learning path') + '</small></span><b>' + (activeSection === activeTrack.sections.length-1 ? 'Course overview' : 'Continue learning&nbsp; ›') + '</b>';
    next.addEventListener('click', () => { if (activeSection < activeTrack.sections.length-1) setSection(activeSection+1); else setActiveView('Overview'); window.scrollTo({top:0,behavior:'smooth'}); });
    list.appendChild(next);
    updateProgress();
  }

  const questionBank = {
    html:[{prompt:'Which tag creates the main heading?',code:'<h1>Welcome</h1>',output:'Welcome',answers:[['<p>','Paragraph'],['<h1>','Main heading'],['<img>','Image']],correct:1,explain:'<h1> marks the main heading on a page.'},{prompt:'Which tag is best for a paragraph?',code:'<p>Nice to meet you.</p>',output:'Nice to meet you.',answers:[['<p>','Paragraph'],['<a>','Link'],['<h1>','Heading']],correct:0,explain:'The p tag is used for a paragraph.'}],
    css:[{prompt:'Which CSS property changes text color?',code:'h1 { color: rebeccapurple; }',output:'A purple heading',answers:[['color','Text color'],['href','Link address'],['src','Image source']],correct:0,explain:'The color property sets text color.'},{prompt:'How do you select every paragraph?',code:'p { font-size: 18px; }',output:'Larger paragraphs',answers:[['p','The p selector'],['#p','An ID selector'],['.p','A class selector']],correct:0,explain:'The p selector targets paragraph elements.'}],
    javascript:[{prompt:'Which keyword declares a changeable value?',code:'let score = 10;',output:'score is 10',answers:[['let','A changeable variable'],['paint','A CSS property'],['href','A link attribute']],correct:0,explain:'let declares a variable that can be reassigned.'},{prompt:'How do you select an element by its ID?',code:'document.getElementById("start")',output:'The start element',answers:[['getElementById','Select by ID'],['makeElement','Create a page'],['colorElement','Change text']],correct:0,explain:'getElementById selects an element using its ID.'}],
    python:[{prompt:'Which function displays a message?',code:'print("Hello!")',output:'Hello!',answers:[['print()','Display a message'],['showPage()','Open a website'],['echoHTML()','Add a heading']],correct:0,explain:'print() writes output to the screen.'},{prompt:'Which symbol starts a comment in Python?',code:'# a helpful note',output:'A comment',answers:[['#','Comment symbol'],['//','Division'],['<>','Comparison']],correct:0,explain:'A # starts a comment in Python.'}],
    sql:[{prompt:'Which SQL keyword reads data from a table?',code:'SELECT name FROM learners;',output:'A list of names',answers:[['SELECT','Read data'],['PAINT','Style a table'],['PUSH','Add a webpage']],correct:0,explain:'SELECT chooses the data you want to read.'},{prompt:'Which keyword chooses the table?',code:'SELECT name FROM learners;',output:'learners table',answers:[['FROM','Table source'],['COLOR','Text color'],['PRINT','Show a message']],correct:0,explain:'FROM tells SQL which table to read.'}]
  };
  function getLanguage(lessonName) {
    if (activeTrack.id === 'python' || activeTrack.id === 'data') return activeTrack.id === 'data' ? 'sql' : 'python';
    if (activeTrack.id === 'fullstack' && (activeSection === 13 || activeSection === 14)) return 'sql';
    if (activeTrack.id === 'fullstack' && activeSection === 12) return 'javascript';
    if (/css|style|layout|responsive|padding|border|box/i.test(lessonName)) return 'css';
    if (/javascript|interactive|click|function|variable|web app/i.test(lessonName)) return 'javascript';
    return 'html';
  }
  function openLesson(title,kind,material) {
    questionIndex = 0;
    const language = getLanguage(title);
    $('#modalHeading').textContent = title;
    $('#modalEyebrow').innerHTML = (kind === 'PRACTICE' ? 'PRACTICE' : 'LESSON') + ' <span>·</span> ' + language.toUpperCase();
    $('#modalDescription').textContent = material && material[2] ? material[2] : language === 'html' ? 'HTML gives a webpage its structure. Learn what each tag means and practice using the right one.' : language === 'css' ? 'CSS controls the look of a webpage. Explore selectors and properties with a quick hands-on check.' : language === 'javascript' ? 'JavaScript adds behavior to a webpage. Try a short challenge and see how code responds.' : language === 'python' ? 'Python is a clear, friendly language for giving a computer instructions.' : 'SQL helps you ask questions about information stored in a database.';
    $('#exampleLabel').textContent = language.toUpperCase() + ' EXAMPLE';
    $('#modalEmoji').textContent = language === 'html' ? '🌱' : language === 'css' ? '🎨' : language === 'javascript' ? '⚡' : language === 'python' ? '🐍' : '🔎';
    buildQuestion(language);
    if (material && material[3]) { $('#exampleCode').textContent = material[3]; $('#exampleOutput').textContent = material[4] || 'A result from the example code.'; }
    $('#lessonModal').classList.add('open'); $('#lessonModal').setAttribute('aria-hidden','false'); document.body.style.overflow='hidden'; $('#modalClose').focus();
  }
  function buildQuestion(language) {
    const question = questionBank[language][questionIndex];
    $('#exampleCode').textContent = question.code;
    $('#exampleOutput').textContent = question.output;
    $('#modalQuestion').textContent = 'Step ' + (questionIndex+1) + ' of 2 · ' + question.prompt;
    $$('.modal-progress i').forEach((bar,index) => bar.style.background = index <= questionIndex ? '#a779ff' : '#5a5e86');
    const answers = $('#modalAnswers'); answers.innerHTML='';
    question.answers.forEach((answer,index) => {
      const button=document.createElement('button'); button.innerHTML='<code></code><span></span>'; button.querySelector('code').textContent=answer[0]; button.querySelector('span').textContent=answer[1];
      button.addEventListener('click',() => {
        answers.querySelectorAll('button').forEach(item=>item.classList.remove('selected','correct','wrong'));
        button.classList.add('selected'); const correct=index===question.correct; button.classList.add(correct?'correct':'wrong');
        $('.answer-feedback').textContent=correct?question.explain:'Not quite. Try again and look closely at the code.';
        $('.answer-feedback').style.color=correct?'#a5e5af':'#f3a39a';
        const next=$('.modal-continue'); next.disabled=!correct; next.innerHTML=(questionIndex===1?'Finish lesson':'Continue lesson')+' <span>→</span>';
      }); answers.appendChild(button);
    });
    $('.answer-feedback').textContent=''; $('.modal-continue').disabled=true; $('.modal-continue').innerHTML='Check answer <span>→</span>';
  }
  function finishLesson() {
    if (!openLessonRef) return;
    const practice = openLessonRef.ref.indexOf('practice-') === 0 || openLessonRef.ref.indexOf('bonus-') === 0;
    const done = practice ? state.practiceDone : currentDone();
    if (!done.includes(openLessonRef.ref)) { done.push(openLessonRef.ref); state.points+=10; state.streak=Math.max(1,state.streak); save(); }
    $('#lessonModal').classList.remove('open'); $('#lessonModal').setAttribute('aria-hidden','true'); document.body.style.overflow='';
    if (practice && openLessonRef.ref.indexOf('bonus-') !== 0) setActiveView('Practice'); else renderLearn();
    notify('Lesson complete! Progress saved on this device. 🌱');
  }
  $('.modal-continue').addEventListener('click',() => {
    if ($('.modal-continue').disabled) return;
    if (questionIndex===0) { questionIndex=1; buildQuestion(getLanguage(openLessonRef ? openLessonRef.title : 'HTML')); }
    else finishLesson();
  });
  $('#modalClose').addEventListener('click',closeModal);
  $('#lessonModal').addEventListener('click',event=>{if(event.target===$('#lessonModal'))closeModal();});
  document.addEventListener('keydown',event=>{if(event.key==='Escape'&&$('#lessonModal').classList.contains('open'))closeModal();});
  function closeModal(){ $('#lessonModal').classList.remove('open'); $('#lessonModal').setAttribute('aria-hidden','true'); document.body.style.overflow=''; }

  function setActiveView(label) {
    activeView=label;
    $$('.side-link').forEach(link=>link.classList.toggle('active',link.dataset.nav===label));
    $('.sidebar').classList.remove('open');
    if(label==='Learn'){renderLearn();window.scrollTo({top:0,behavior:'smooth'});return;}
    $('.main-area').classList.remove('learn-view');$('.course-heading').style.display='none';$('.section-switcher').style.display='none';
    if(label==='Practice')renderPractice();else if(label==='Build'){if(!buildCompletionRef)buildTitle='Your web project';renderBuild(buildTitle);}else if(label==='Courses')renderCourses();else if(label==='Leaderboard')renderLeaderboard();else if(label==='Free tools')renderTools();else if(label==='Overview')renderOverview();else renderProfile();
    window.scrollTo({top:0,behavior:'smooth'});
  }
  function pageHeader(kicker,title,description,action) {
    return '<header class="page-header"><div><span class="eyebrow">'+kicker+'</span><h2>'+title+'</h2><p>'+description+'</p></div>'+(action||'')+'</header>';
  }

  function renderPractice() {
    const stats=updateProgress();
    $('#lessonList').innerHTML='<section class="app-page">'+pageHeader('PRACTICE STUDIO','Practice makes progress.','Short challenges help you remember what you have learned. Every set is free.')+'<div class="stats-grid"><div class="stat-card"><span>Lessons completed</span><b>'+currentDone().length+'</b><small>in this path</small></div><div class="stat-card"><span>Learning points</span><b>'+state.points+'</b><small>earned as you learn</small></div><div class="stat-card"><span>Current streak</span><b>'+state.streak+' days</b><small>keep showing up</small></div></div><div class="content-card"><h3>Choose a quick challenge</h3><p>Pick a topic and work through two short questions with instant feedback.</p>'+[['html','HTML tags','Structure a page with semantic elements.','▤'],['css','CSS selectors','Choose properties to style a page.','✳'],['javascript','JavaScript basics','Practice variables, events, and logic.','⚡'],['python','Python warm-up','Practice clear instructions and data.','🐍'],['sql','SQL starter','Read and filter information in a table.','⌕']].map(item=>'<div class="practice-item"><span class="practice-icon">'+item[3]+'</span><div><b>'+item[1]+'</b><small>'+item[2]+'</small></div><button data-practice="'+item[0]+'">Start · free</button></div>').join('')+'</div></section>';
    $$('[data-practice]').forEach(button=>button.addEventListener('click',()=>{
      const lang=button.dataset.practice;
      const track=lang==='python'?'python':lang==='sql'?'data':'fullstack';
      selectTrack(track); openLesson(lang==='html'?'Discovering HTML and Tags':lang==='css'?'CSS Basics 1':lang==='javascript'?'JavaScript Basics':lang==='python'?'Python warm-up':'SQL starter','PRACTICE');
      openLessonRef={ref:'practice-'+lang+'-'+Date.now(),title:lang.toUpperCase()+' Practice',index:0,section:0,kind:'PRACTICE'};
    }));
  }
  function renderCourses() {
    $('#lessonList').innerHTML='<section class="app-page">'+pageHeader('YOUR LEARNING LIBRARY','Choose a path. Build a skill.','Every path is open to you. Pick one to see its lessons and start learning.')+'<div class="page-grid">'+tracks.map(track=>{const active=track.id===activeTrack.id;const count=(state.done[track.id]||[]).length;return '<article class="course-tile"><span class="tile-icon">'+track.icon+'</span><h3>'+track.name+'</h3><p>'+track.description+'. Move at your own pace, one short lesson at a time.</p><span class="tile-meta">'+track.sections.length+' SECTIONS · '+count+' COMPLETED · FREE</span><button class="'+(active?'secondary-action':'primary-action')+'" data-select-track="'+track.id+'">'+(active?'Current path · Continue':'Choose this path')+'</button></article>';}).join('')+'</div></section>';
    $$('[data-select-track]').forEach(button=>button.addEventListener('click',()=>{selectTrack(button.dataset.selectTrack);setActiveView('Learn');notify('Your learning path is ready.');}));
  }
  function renderLeaderboard() {
    const people=[['01','Avery','980'],['02','Jordan','840'],['03','Riley','760'],['04','Taylor','640'],['05','Sam','510']];
    const rank=Math.max(1,Math.min(50,50-Math.floor(state.points/40)));
    const rows=people.map(row=>'<tr><td class="leader-rank">'+row[0]+'</td><td>'+row[1]+'</td><td>Full-Stack</td><td>'+row[2]+'</td></tr>').join('')+'<tr class="your-row"><td class="leader-rank">'+String(rank).padStart(2,'0')+'</td><td>You</td><td>'+activeTrack.label+'</td><td>'+state.points+'</td></tr>';
    $('#lessonList').innerHTML='<section class="app-page">'+pageHeader('WEEKLY LEARNING LEAGUE','A little progress adds up.','Your score is saved locally. Finish lessons to earn points and move up your personal practice board.')+'<div class="stats-grid"><div class="stat-card"><span>Your current place</span><b>#'+rank+'</b><small>practice board</small></div><div class="stat-card"><span>Your points</span><b>'+state.points+'</b><small>learning points</small></div><div class="stat-card"><span>Weekly reset</span><b>Monday</b><small>fresh start each week</small></div></div><div class="content-card"><h3>Weekly learner board</h3><p>Sample learner scores · your row updates when you finish lessons.</p><table class="leaderboard"><thead><tr><th>RANK</th><th>LEARNER</th><th>PATH</th><th>POINTS</th></tr></thead><tbody>'+rows+'</tbody></table></div></section>';
  }
  function renderOverview() {
    const stats=updateProgress();
    $('#lessonList').innerHTML='<section class="app-page">'+pageHeader('COURSE OVERVIEW',activeTrack.name,'A clear view of your learning path, progress, and next lesson.')+'<div class="stats-grid"><div class="stat-card"><span>Course completion</span><b>'+stats.percent+'%</b><small>'+currentDone().length+' lessons saved</small></div><div class="stat-card"><span>Sections</span><b>'+activeTrack.sections.length+'</b><small>short guided chapters</small></div><div class="stat-card"><span>Learning points</span><b>'+state.points+'</b><small>earned on this device</small></div></div><div class="content-card"><h3>Course roadmap</h3>'+activeTrack.sections.map((name,index)=>'<div class="setting-row"><span><b>'+(index+1)+'.</b> &nbsp;'+name+'</span><button class="secondary-action" data-open-section="'+index+'">'+(index===activeSection?'Current':'View section')+'</button></div>').join('')+'</div></section>';
    $$('[data-open-section]').forEach(button=>button.addEventListener('click',()=>{setSection(Number(button.dataset.openSection));setActiveView('Learn');}));
  }
  function renderProfile() {
    const stats=updateProgress();
    $('#lessonList').innerHTML='<section class="app-page">'+pageHeader('YOUR PROFILE','Every day, a little more capable.','Your Mini 2.0 learning activity stays in this browser.')+'<div class="content-card profile-summary"><span class="avatar">M</span><div><h3>Mini learner</h3><p>'+activeTrack.name+' · Level '+(1+Math.floor(state.points/250))+'</p></div></div><div class="stats-grid" style="margin-top:12px"><div class="stat-card"><span>Lessons done</span><b>'+currentDone().length+'</b><small>saved locally</small></div><div class="stat-card"><span>Points</span><b>'+state.points+'</b><small>learning rewards</small></div><div class="stat-card"><span>Streak</span><b>'+state.streak+' days</b><small>keep it going</small></div></div><div class="content-card"><h3>Your learning snapshot</h3><div class="progress-track-page"><i style="width:'+stats.percent+'%"></i></div><div class="setting-row"><span>Current path</span><b>'+activeTrack.name+'</b></div><div class="setting-row"><span>Progress</span><b>'+stats.percent+'%</b></div><div class="setting-row"><span>Plan</span><b>Free forever</b></div><div class="card-foot"><small>Progress is stored locally in this browser.</small><button class="secondary-action" data-profile-courses>Browse courses</button></div></div></section>';
    $('[data-profile-courses]').addEventListener('click',()=>setActiveView('Courses'));
  }
  function renderBuild(projectTitle) {
    const title=projectTitle||buildTitle||'Your web project';
    $('#lessonList').innerHTML='<section class="app-page">'+pageHeader('BUILD STUDIO',title,buildDescription||'Edit the HTML, run the preview, and save your project. Your draft stays on this device.','<button class="page-action" data-open-tools>Open free tools ↗</button>')+'<div class="workbench"><div class="editor-panel"><div class="editor-toolbar"><span>index.html</span><button data-run>Run preview</button><button data-reset>Reset</button></div><textarea id="projectEditor" spellcheck="false" aria-label="Project HTML code"></textarea><div class="editor-hint">Tip: edit the heading, add a link, then run your preview.</div><div style="padding:0 10px 10px"><button class="primary-action" data-save-project>Save project</button> <button class="secondary-action" data-copy-project>Copy code</button></div></div><div class="preview-panel"><div class="preview-toolbar"><span>LIVE PREVIEW</span><button data-refresh>↻ Refresh</button></div><iframe id="projectPreview" title="Your project preview" sandbox="allow-scripts"></iframe></div></div></section>';
    const editor=$('#projectEditor'),frame=$('#projectPreview');editor.value=state.projectCode||defaultCode;
    const run=()=>{frame.srcdoc=editor.value;state.projectCode=editor.value;save();};run();
    editor.addEventListener('input',()=>{clearTimeout(window.miniPreviewTimer);window.miniPreviewTimer=setTimeout(run,350);});
    $('[data-run]').addEventListener('click',run);$('[data-refresh]').addEventListener('click',run);
    $('[data-reset]').addEventListener('click',()=>{editor.value=defaultCode;run();notify('Starter project restored.');});
    $('[data-copy-project]').addEventListener('click',()=>copyText(editor.value));
    $('[data-save-project]').addEventListener('click',()=>{state.projectCode=editor.value;if(buildCompletionRef){const ref='s'+buildCompletionRef.section+'-l'+buildCompletionRef.index;if(!currentDone().includes(ref)){currentDone().push(ref);state.points+=20;state.streak=Math.max(1,state.streak);}buildCompletionRef=null;}save();updateProgress();notify('Project saved on this device. Keep building! ✨');});
    $('[data-open-tools]').addEventListener('click',()=>setActiveView('Free tools'));
  }
  function copyText(text) {
    if(navigator.clipboard&&window.isSecureContext)navigator.clipboard.writeText(text).then(()=>notify('Code copied to clipboard.')).catch(()=>fallbackCopy(text));else fallbackCopy(text);
  }
  function fallbackCopy(text) {
    const box=document.createElement('textarea');box.value=text;box.style.position='fixed';box.style.opacity='0';document.body.appendChild(box);box.select();
    try{document.execCommand('copy');notify('Code copied to clipboard.');}catch(_){notify('Select the code and copy it manually.');}box.remove();
  }
  const toolSnippets={html:'<main><h1>My first page</h1><p>Made with Mini 2.0.</p></main>',css:'body { font-family: sans-serif; padding: 32px; background: #f4f0ff; }\nh1 { color: #7654c8; }',javascript:'document.querySelector("h1").textContent = "It works! ✨";'};
  function renderTools() {
    $('#lessonList').innerHTML='<section class="app-page">'+pageHeader('FREE CODE PLAYGROUND','Try code. See it happen.','A tiny browser playground for HTML, CSS, and JavaScript. Code runs in an isolated preview on your device.')+'<div class="tool-tabs">'+['html','css','javascript'].map(lang=>'<button class="tool-tab '+(lang===toolLanguage?'active':'')+'" data-tool="'+lang+'">'+lang.toUpperCase()+'</button>').join('')+'</div><div class="workbench"><div class="editor-panel"><div class="editor-toolbar"><span id="toolFilename"></span><button data-run-tool>Run</button><button data-reset-tool>Reset</button></div><textarea id="toolEditor" spellcheck="false" aria-label="Code playground editor"></textarea><div class="editor-hint">The preview is sandboxed from the rest of this page.</div><div style="padding:0 10px 10px"><button class="secondary-action" data-copy-tool>Copy code</button></div></div><div class="preview-panel"><div class="preview-toolbar"><span>PREVIEW</span><button data-refresh-tool>↻ Refresh</button></div><iframe id="toolPreview" title="Code playground preview" sandbox="allow-scripts"></iframe></div></div></section>';
    const editor=$('#toolEditor'),frame=$('#toolPreview');editor.value=toolSnippets[toolLanguage];$('#toolFilename').textContent=toolLanguage==='html'?'index.html':toolLanguage==='css'?'styles.css':'script.js';
    const run=()=>{let source='<!doctype html><html><head><meta name="viewport" content="width=device-width, initial-scale=1"><style>body{font-family:Arial,sans-serif;padding:28px;color:#24213a}main{max-width:600px}h1{font-size:32px}</style>';if(toolLanguage==='css')source+='<style>'+editor.value+'</style>';source+='</head><body><main><h1>My first page</h1><p>Made with Mini 2.0.</p></main>';if(toolLanguage==='javascript')source+='<script>'+editor.value.replace(/<\/script/gi,'<\\/script')+'<\/script>';source+='</body></html>';frame.srcdoc=source;};run();
    $$('[data-tool]').forEach(button=>button.addEventListener('click',()=>{toolLanguage=button.dataset.tool;renderTools();}));
    $('[data-run-tool]').addEventListener('click',run);$('[data-refresh-tool]').addEventListener('click',run);$('[data-reset-tool]').addEventListener('click',()=>{editor.value=toolSnippets[toolLanguage];run();});$('[data-copy-tool]').addEventListener('click',()=>copyText(editor.value));
    editor.addEventListener('input',()=>{clearTimeout(window.miniToolTimer);window.miniToolTimer=setTimeout(run,250);});
  }

  function selectTrack(id) {
    activeTrack=tracks.find(track=>track.id===id)||tracks[0];state.track=activeTrack.id;state.done[activeTrack.id]=Array.isArray(state.done[activeTrack.id])?state.done[activeTrack.id]:[];activeSection=0;buildCompletionRef=null;save();$('#currentCourseName').textContent=activeTrack.name;renderTrackMenu();makeSectionMenu();updateProgress();
  }
  function renderTrackMenu() {
    const menu=$('#trackMenu');menu.innerHTML='';
    tracks.forEach(track=>{const button=document.createElement('button');button.className='track-option'+(track.id===activeTrack.id?' current':'');button.innerHTML='<b>'+track.icon+' &nbsp;'+track.name+'</b><small>'+track.description+'</small>';button.addEventListener('click',()=>{selectTrack(track.id);menu.classList.remove('open');$('#courseSwitch').setAttribute('aria-expanded','false');setActiveView('Learn');notify(track.name+' path selected.');});menu.appendChild(button);});
  }
  $('#courseSwitch').addEventListener('click',()=>{const menu=$('#trackMenu');const open=menu.classList.toggle('open');$('#courseSwitch').setAttribute('aria-expanded',String(open));});
  $('#profileButton').addEventListener('click',()=>setActiveView('Profile'));
  $('#courseOverview').addEventListener('click',()=>setActiveView('Overview'));
    $('#dailyGoal').addEventListener('click',()=>{setActiveView('Learn');const first=lessonsForSection()[0];openLessonRef={ref:'s'+activeSection+'-l0',title:first[0],index:0,section:activeSection,kind:first[1]};openLesson(first[0],first[1],first);});
  $$('.side-link').forEach(link=>link.addEventListener('click',event=>{event.preventDefault();setActiveView(link.dataset.nav);}));
  $('#mobileMenu').addEventListener('click',()=>$('.sidebar').classList.toggle('open'));
  $('.rail-card-content a').addEventListener('click',event=>{event.preventDefault();setActiveView('Courses');});
  $('.league-card>a').addEventListener('click',event=>{event.preventDefault();setActiveView('Leaderboard');});
  document.addEventListener('click',event=>{if(!event.target.closest('.section-switcher')){$('#sectionMenu').classList.remove('open');$('#sectionPicker').setAttribute('aria-expanded','false');}if(!event.target.closest('.course-switcher')&&!event.target.closest('.track-menu')){$('#trackMenu').classList.remove('open');$('#courseSwitch').setAttribute('aria-expanded','false');}});
  $('#previousSection').addEventListener('click',()=>setSection(activeSection-1));$('#nextSection').addEventListener('click',()=>setSection(activeSection+1));
  $('#sectionPicker').addEventListener('click',()=>{const menu=$('#sectionMenu');const open=menu.classList.toggle('open');$('#sectionPicker').setAttribute('aria-expanded',String(open));});
  $('#currentCourseName').textContent=activeTrack.name;
  renderTrackMenu();makeSectionMenu();updateProgress();renderLearn();
})();

