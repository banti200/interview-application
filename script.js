/*
  Final Interview Exam App - script.js
  - 80 MCQs embedded
  - Signup/Login with access code
  - Scoring: +5 correct, -2 wrong, -1 skipped
  - Timer: 40s per question
  - Certificate (professional) auto-fill & PDF download
*/

const POINT_CORRECT = 5;
const POINT_WRONG = -2;
const POINT_SKIP = -1;
const TIME_PER_Q = 40;

function simpleHash(s){ let h=0; for(let i=0;i<s.length;i++){ h=(h<<5)-h + s.charCodeAt(i); h |= 0 } return h.toString(16); }
function generateAccessCode(len=6){ const chars='ABCDEFGHJKLMNPQRSTUVWXYZ23456789'; let out=''; for(let i=0;i<len;i++){ out+=chars[Math.floor(Math.random()*chars.length)]; } return out; }
function saveUserObj(user){ const users = JSON.parse(localStorage.getItem('ai_users')||'{}'); users[user.email]=user; localStorage.setItem('ai_users', JSON.stringify(users)); }
function getUserObj(email){ const users = JSON.parse(localStorage.getItem('ai_users')||'{}'); return users[email]||null; }

// QUESTIONS_DB appended below

const QUESTIONS_DB = {
  "python": [
    {
      "q": "What is the output type of the expression: 3 // 2 in Python 3?",
      "options": [
        "0",
        "1.5",
        "2",
        "1"
      ],
      "answer": 3
    },
    {
      "q": "Which keyword is used to create a generator in Python?",
      "options": [
        "generate",
        "yieldfrom",
        "yield",
        "return"
      ],
      "answer": 2
    },
    {
      "q": "Which method adds an item to the end of a list?",
      "options": [
        "insert()",
        "extend()",
        "add()",
        "append()"
      ],
      "answer": 3
    },
    {
      "q": "What is the correct file mode to write (overwrite) a file?",
      "options": [
        "a",
        "x",
        "w",
        "r"
      ],
      "answer": 2
    },
    {
      "q": "Which built-in function returns the length of an object?",
      "options": [
        "length()",
        "size()",
        "count()",
        "len()"
      ],
      "answer": 3
    },
    {
      "q": "How do you start a comment in Python?",
      "options": [
        "#",
        "/*",
        "//",
        "<!--"
      ],
      "answer": 0
    },
    {
      "q": "Which collection type is ordered and mutable?",
      "options": [
        "tuple",
        "set",
        "frozenset",
        "list"
      ],
      "answer": 3
    },
    {
      "q": "What does PEP stand for?",
      "options": [
        "Python Execution Plan",
        "Python Enhancement Proposal",
        "Program Enhancement Process",
        "Performance Enhancing Patch"
      ],
      "answer": 1
    },
    {
      "q": "Which keyword defines a class?",
      "options": [
        "class",
        "object",
        "module",
        "struct"
      ],
      "answer": 0
    },
    {
      "q": "Which operator is used for exponentiation?",
      "options": [
        "exp()",
        "**",
        "^",
        "pow()"
      ],
      "answer": 1
    },
    {
      "q": "Which module is commonly used for JSON handling?",
      "options": [
        "xml",
        "pickle",
        "json",
        "yaml"
      ],
      "answer": 2
    },
    {
      "q": "What does __init__ do?",
      "options": [
        "Defines static method",
        "Initializes instance attributes",
        "Deletes instance",
        "Creates class variable"
      ],
      "answer": 1
    },
    {
      "q": "Which is a mutable mapping type?",
      "options": [
        "dict",
        "str",
        "int",
        "tuple"
      ],
      "answer": 0
    },
    {
      "q": "What is the boolean value of an empty list?",
      "options": [
        "None",
        "True",
        "0",
        "False"
      ],
      "answer": 3
    },
    {
      "q": "Which statement is used for exception handling?",
      "options": [
        "try/catch",
        "try/except",
        "handle/except",
        "do/catch"
      ],
      "answer": 1
    },
    {
      "q": "How to create a set literal?",
      "options": [
        "{1,2,3}",
        "[1,2,3]",
        "set(1,2,3)",
        "(1,2,3)"
      ],
      "answer": 0
    },
    {
      "q": "Which built-in creates an iterator from an iterable?",
      "options": [
        "iter()",
        "generator()",
        "cycle()",
        "next()"
      ],
      "answer": 0
    },
    {
      "q": "Which function converts a string '5' to integer?",
      "options": [
        "float('5')",
        "str(5)",
        "toInt('5')",
        "int('5')"
      ],
      "answer": 3
    },
    {
      "q": "What is the output of bool('')?",
      "options": [
        "None",
        "False",
        "Error",
        "True"
      ],
      "answer": 1
    },
    {
      "q": "Which package manager is standard for Python?",
      "options": [
        "gem",
        "apt",
        "npm",
        "pip"
      ],
      "answer": 3
    }
  ],
  "java": [
    {
      "q": "Which of these is a primitive type in Java?",
      "options": [
        "ArrayList",
        "Object",
        "int",
        "String"
      ],
      "answer": 2
    },
    {
      "q": "What is the entry point method signature for Java applications?",
      "options": [
        "static void main()",
        "public main(String args)",
        "public static void main(String[] args)",
        "public void main()"
      ],
      "answer": 2
    },
    {
      "q": "Which keyword is used to inherit a class?",
      "options": [
        "implements",
        "extends",
        "uses",
        "inherits"
      ],
      "answer": 1
    },
    {
      "q": "Which collection disallows duplicate elements?",
      "options": [
        "LinkedList",
        "HashSet",
        "HashMap",
        "ArrayList"
      ],
      "answer": 1
    },
    {
      "q": "Which keyword makes a variable belong to the class?",
      "options": [
        "final",
        "static",
        "volatile",
        "transient"
      ],
      "answer": 1
    },
    {
      "q": "What does JVM stand for?",
      "options": [
        "Java Visual Model",
        "Java Vendor Machine",
        "Java Virtual Machine",
        "Just Virtual Machine"
      ],
      "answer": 2
    },
    {
      "q": "Which interface has run() method?",
      "options": [
        "Callable",
        "Runnable",
        "Supplier",
        "Producer"
      ],
      "answer": 1
    },
    {
      "q": "What is garbage collection in Java?",
      "options": [
        "Manual free memory",
        "Memory allocation",
        "Automatic memory reclamation",
        "Process scheduling"
      ],
      "answer": 2
    },
    {
      "q": "Which version introduced lambda expressions?",
      "options": [
        "Java 6",
        "Java 9",
        "Java 7",
        "Java 8"
      ],
      "answer": 3
    },
    {
      "q": "Which class is immutable in Java?",
      "options": [
        "HashMap",
        "ArrayList",
        "StringBuilder",
        "String"
      ],
      "answer": 3
    },
    {
      "q": "What is JDBC used for?",
      "options": [
        "Logging",
        "Encryption",
        "Database connectivity",
        "GUI creation"
      ],
      "answer": 2
    },
    {
      "q": "Which keyword prevents method overriding?",
      "options": [
        "protected",
        "static",
        "private",
        "final"
      ],
      "answer": 3
    },
    {
      "q": "What is polymorphism?",
      "options": [
        "Multiple classes",
        "Inheritance only",
        "Same API with different implementations",
        "Static typing"
      ],
      "answer": 2
    },
    {
      "q": "Which exception is checked at compile time?",
      "options": [
        "NullPointerException",
        "IOException",
        "ArithmeticException",
        "RuntimeException"
      ],
      "answer": 1
    },
    {
      "q": "Which collection maintains insertion order?",
      "options": [
        "LinkedHashMap",
        "HashMap",
        "HashSet",
        "TreeMap"
      ],
      "answer": 0
    },
    {
      "q": "What does 'new' keyword do?",
      "options": [
        "Declare variable",
        "Create instance/object",
        "Delete object",
        "Call method"
      ],
      "answer": 1
    },
    {
      "q": "What is an abstract class?",
      "options": [
        "A class that can have abstract methods and cannot be instantiated",
        "Final class",
        "An interface with body",
        "Utility class"
      ],
      "answer": 0
    },
    {
      "q": "Which package contains core language classes?",
      "options": [
        "java.lang",
        "java.util",
        "java.io",
        "java.net"
      ],
      "answer": 0
    },
    {
      "q": "Which loop is guaranteed to run at least once?",
      "options": [
        "while",
        "do-while",
        "foreach",
        "for"
      ],
      "answer": 1
    },
    {
      "q": "What is method overloading?",
      "options": [
        "Same method name with different parameters",
        "Different return type only",
        "Same name, same params",
        "Private methods only"
      ],
      "answer": 0
    }
  ],
  "dbms": [
    {
      "q": "What does SQL stand for?",
      "options": [
        "Standard Query Language",
        "Sequential Query Language",
        "Structured Query Language",
        "Simple Query Language"
      ],
      "answer": 2
    },
    {
      "q": "Which command removes all rows but keeps table structure?",
      "options": [
        "TRUNCATE",
        "REMOVE",
        "DELETE",
        "DROP"
      ],
      "answer": 0
    },
    {
      "q": "What is a primary key?",
      "options": [
        "Foreign key",
        "Index",
        "Unique identifier for table records",
        "Constraint"
      ],
      "answer": 2
    },
    {
      "q": "Which normal form removes repeating groups?",
      "options": [
        "3NF",
        "BCNF",
        "2NF",
        "1NF"
      ],
      "answer": 3
    },
    {
      "q": "Which join returns only matching rows?",
      "options": [
        "INNER JOIN",
        "LEFT JOIN",
        "RIGHT JOIN",
        "FULL OUTER JOIN"
      ],
      "answer": 0
    },
    {
      "q": "What is denormalization?",
      "options": [
        "Normalizing further",
        "Encrypting data",
        "Introducing redundancy for performance",
        "Removing data"
      ],
      "answer": 2
    },
    {
      "q": "What is a view?",
      "options": [
        "Index file",
        "Physical table",
        "Virtual table representing a stored query",
        "Stored procedure"
      ],
      "answer": 2
    },
    {
      "q": "What does ACID stand for?",
      "options": [
        "Availability, Consistency, Integrity, Durability",
        "Access, Control, Integrity, Data",
        "Atomicity, Concurrency, Isolation, Durability",
        "Atomicity, Consistency, Isolation, Durability"
      ],
      "answer": 3
    },
    {
      "q": "What is indexing used for?",
      "options": [
        "Backup",
        "Compression",
        "Encrypting data",
        "Speeding up data retrieval"
      ],
      "answer": 3
    },
    {
      "q": "Which statement starts a transaction?",
      "options": [
        "OPEN TRANSACTION",
        "BEGIN TRANS",
        "INIT TRANSACTION",
        "BEGIN or START TRANSACTION"
      ],
      "answer": 3
    },
    {
      "q": "What is a foreign key?",
      "options": [
        "Primary key alias",
        "Constraint type",
        "Index",
        "Field referencing primary key of another table"
      ],
      "answer": 3
    },
    {
      "q": "Which isolation level allows dirty reads?",
      "options": [
        "SERIALIZABLE",
        "REPEATABLE READ",
        "READ UNCOMMITTED",
        "READ COMMITTED"
      ],
      "answer": 2
    },
    {
      "q": "What is normalization goal?",
      "options": [
        "Slow queries",
        "Reduce redundancy and dependency",
        "Increase redundancy",
        "Backup data"
      ],
      "answer": 1
    },
    {
      "q": "What is replication?",
      "options": [
        "Copying data across servers for availability",
        "Indexing",
        "Denial of service",
        "Encryption"
      ],
      "answer": 0
    },
    {
      "q": "Which SQL clause groups rows?",
      "options": [
        "WHERE",
        "GROUP BY",
        "HAVING",
        "ORDER BY"
      ],
      "answer": 1
    },
    {
      "q": "What does SELECT * do?",
      "options": [
        "Delete columns",
        "Update rows",
        "Create table",
        "Return all columns of a table"
      ],
      "answer": 3
    },
    {
      "q": "What is a stored procedure?",
      "options": [
        "View",
        "Client application",
        "Precompiled SQL routine stored in DB",
        "Index"
      ],
      "answer": 2
    },
    {
      "q": "What is sharding?",
      "options": [
        "Indexing",
        "Vertical partitioning",
        "Horizontal partitioning across multiple nodes",
        "Single server backup"
      ],
      "answer": 2
    },
    {
      "q": "What is MVCC?",
      "options": [
        "Multi-Version Concurrency Control",
        "Memory Version Control",
        "Managed Version Cache",
        "Multiple View Control"
      ],
      "answer": 0
    },
    {
      "q": "What is OLTP optimized for?",
      "options": [
        "Reporting",
        "Archival",
        "Analytics",
        "Transaction processing"
      ],
      "answer": 3
    }
  ],
  "webdev": [
    {
      "q": "What does HTML stand for?",
      "options": [
        "Hyperlink Text Mark Language",
        "HyperText Markup Language",
        "Hyper Transfer Markup Language",
        "HyperText Markdown Language"
      ],
      "answer": 1
    },
    {
      "q": "Which language is used to style web pages?",
      "options": [
        "CSS",
        "JavaScript",
        "Python",
        "SQL"
      ],
      "answer": 0
    },
    {
      "q": "Which runs in the browser?",
      "options": [
        "C#",
        "Java",
        "Ruby",
        "JavaScript"
      ],
      "answer": 3
    },
    {
      "q": "What is the DOM?",
      "options": [
        "Dynamic Object Manager",
        "Data Object Model",
        "Document Object Model",
        "Document Order Model"
      ],
      "answer": 2
    },
    {
      "q": "What is responsive web design?",
      "options": [
        "Fixed-width layouts",
        "Layouts that adapt to different screen sizes",
        "Server-side only",
        "Design for desktop only"
      ],
      "answer": 1
    },
    {
      "q": "What does AJAX do?",
      "options": [
        "Compress images",
        "Create databases",
        "Asynchronous requests to server",
        "Styles pages"
      ],
      "answer": 2
    },
    {
      "q": "What is REST?",
      "options": [
        "Database engine",
        "CSS module",
        "Architectural style for stateless HTTP APIs",
        "A framework"
      ],
      "answer": 2
    },
    {
      "q": "What is JSON?",
      "options": [
        "Binary protocol",
        "Markup language",
        "Lightweight data interchange format",
        "Styling language"
      ],
      "answer": 2
    },
    {
      "q": "What is a Service Worker?",
      "options": [
        "Database driver",
        "UI component",
        "Background script enabling offline features",
        "CSS preprocessor"
      ],
      "answer": 2
    },
    {
      "q": "What is a PWA?",
      "options": [
        "Persistent Web API",
        "Private Web App",
        "Public Web Access",
        "Progressive Web App"
      ],
      "answer": 3
    },
    {
      "q": "What is CORS?",
      "options": [
        "A DB protocol",
        "A JS library",
        "Browser security policy for cross-origin requests",
        "A CSS property"
      ],
      "answer": 2
    },
    {
      "q": "Which tag loads external JS file?",
      "options": [
        "<include>",
        "<script src='...'>",
        "<js>",
        "<link>"
      ],
      "answer": 1
    },
    {
      "q": "What is lazy loading?",
      "options": [
        "Inlining all assets",
        "Loading resources when needed",
        "Loading all resources",
        "Prefetching everything"
      ],
      "answer": 1
    },
    {
      "q": "What is a CDN?",
      "options": [
        "Central Data Node",
        "Code Distribution Node",
        "Compressed Data Network",
        "Content Delivery Network"
      ],
      "answer": 3
    },
    {
      "q": "What is WebAssembly used for?",
      "options": [
        "Fast browser execution of compiled code",
        "Image format",
        "Database",
        "CSS syntax"
      ],
      "answer": 0
    },
    {
      "q": "Which is a frontend framework?",
      "options": [
        "TensorFlow",
        "Hibernate",
        "MySQL",
        "React"
      ],
      "answer": 3
    },
    {
      "q": "What is SEO?",
      "options": [
        "Search Engine Optimization",
        "Server Execution Order",
        "Security Enhancement Option",
        "Style Editing Only"
      ],
      "answer": 0
    },
    {
      "q": "What is critical rendering path?",
      "options": [
        "Build pipeline",
        "Database query plan",
        "Sequence browser follows to render page",
        "Network routing"
      ],
      "answer": 2
    },
    {
      "q": "What is accessibility (a11y)?",
      "options": [
        "SEO only",
        "Making web accessible to people with disabilities",
        "Security only",
        "Faster loading only"
      ],
      "answer": 1
    },
    {
      "q": "What is HTTP/2 advantage?",
      "options": [
        "Slower transfer",
        "Multiplexing multiple requests over single connection",
        "Fewer requests",
        "No encryption"
      ],
      "answer": 1
    }
  ]
};

// Signup page
if(window.location.pathname.endsWith('index.html') || window.location.pathname.endsWith('/')){
  const form = document.getElementById('signupForm');
  const toLogin = document.getElementById('toLogin');
  const msg = document.getElementById('signupMsg');
  form.addEventListener('submit', (e)=>{
    e.preventDefault();
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim().toLowerCase();
    const qual = document.getElementById('qual').value.trim();
    const pass = document.getElementById('password').value;
    if(!name||!email||!qual||!pass){ msg.innerText='Please fill all fields.'; return; }
    if(getUserObj(email)){ msg.innerText='User exists. Please login.'; return; }
    const code = generateAccessCode();
    const user = {name,email,qual,passHash:simpleHash(pass),accessCode:code,history:[]};
    saveUserObj(user);
    msg.innerHTML = 'Signup successful! Your Access Code: <strong style="color:#7dd3fc">'+code+'</strong><br/>Save it safely — required to login.';
    const btn = document.createElement('button'); btn.className='btn outline'; btn.innerText='Copy Code'; btn.style.marginTop='8px';
    btn.addEventListener('click',()=>{ navigator.clipboard.writeText(code); btn.innerText='Copied'; });
    msg.appendChild(btn);
  });
  toLogin.addEventListener('click',()=>{ window.location.href='login.html'; });
}

// Login page
if(window.location.pathname.endsWith('login.html')){
  const form = document.getElementById('loginForm');
  const back = document.getElementById('backSignup');
  const msg = document.getElementById('loginMsg');
  form.addEventListener('submit',(e)=>{
    e.preventDefault();
    const email = document.getElementById('li_email').value.trim().toLowerCase();
    const pass = document.getElementById('li_password').value;
    const code = document.getElementById('li_code').value.trim();
    const user = getUserObj(email);
    if(!user){ msg.innerText='No account with this email.'; return; }
    if(user.passHash !== simpleHash(pass)){ msg.innerText='Incorrect password.'; return; }
    if(user.accessCode !== code){ msg.innerText='Invalid access code.'; return; }
    sessionStorage.setItem('ai_current', JSON.stringify({email}));
    window.location.href = 'exam.html';
  });
  back.addEventListener('click',()=>{ window.location.href='index.html'; });
}

// Exam page logic
if(window.location.pathname.endsWith('exam.html')){
  window.addEventListener('beforeunload', function (e) { e.preventDefault(); e.returnValue = 'Your exam is in progress. Leaving will end the exam.'; });
  const cur = JSON.parse(sessionStorage.getItem('ai_current')||'null');
  if(!cur){ alert('No active session. Please login.'); window.location.href='login.html'; }
  const user = getUserObj(cur.email);
  const domainNameEl = document.getElementById('domainName');
  const userNameEl = document.getElementById('userName');
  const userQualEl = document.getElementById('userQual');
  const questionBox = document.getElementById('questionBox');
  const optionsBox = document.getElementById('optionsBox');
  const submitBtn = document.getElementById('submitBtn');
  const skipBtn = document.getElementById('skipBtn');
  const endBtn = document.getElementById('endBtn');
  const timeEl = document.getElementById('time');
  const timerBar = document.getElementById('timerBar');
  const reveal = document.getElementById('reveal');
  const scoreEl = document.getElementById('score');
  const qIndexEl = document.getElementById('qIndex');
  const qTotalEl = document.getElementById('qTotal');

  let domain = prompt('Choose domain for exam: python / java / dbms / webdev','python');
  domain = domain ? domain.toLowerCase() : 'python';
  if(!['python','java','dbms','webdev'].includes(domain)){ domain='python'; }
  domainNameEl.innerText = domain;
  userNameEl.innerText = user.name;
  userQualEl.innerText = user.qual;

  let pool = QUESTIONS_DB[domain].slice();
  for(let i=pool.length-1;i>0;i--){ const j=Math.floor(Math.random()*(i+1)); [pool[i],pool[j]]=[pool[j],pool[i]]; }
  const TOTAL = pool.length;
  let index = 0; let score = 0; let timer = null; let timeLeft = TIME_PER_Q;
  qTotalEl.innerText = TOTAL; updateUI();

  function renderOptions(item){
    optionsBox.innerHTML='';
    item.options.forEach((opt,i)=>{
      const btn = document.createElement('button');
      btn.className='opt-btn';
      btn.innerText = String.fromCharCode(65+i) + '. ' + opt;
      btn.dataset.idx = i;
      btn.addEventListener('click', ()=>{ optionsBox.querySelectorAll('.opt-btn').forEach(b=>b.classList.remove('selected')); btn.classList.add('selected'); });
      optionsBox.appendChild(btn);
    });
  }

  function updateUI(){
    clearInterval(timer);
    scoreEl.innerText = score;
    qIndexEl.innerText = index+1;
    questionBox.innerText = pool[index].q;
    renderOptions(pool[index]);
    reveal.style.display='none';
    timeLeft = TIME_PER_Q; timeEl.innerText = timeLeft; timerBar.style.width='100%';
    startTimer();
  }

  function startTimer(){
    clearInterval(timer);
    timer = setInterval(()=>{
      timeLeft -=1;
      const pct = (timeLeft/TIME_PER_Q)*100;
      timerBar.style.width = pct+'%';
      timeEl.innerText = timeLeft;
      if(timeLeft<=0){ clearInterval(timer); handleSkip('Time up'); }
    },1000);
  }
  function clearTimer(){ if(timer) clearInterval(timer); timer=null; }

  function revealAnswer(correctIdx, note){
    const correctText = pool[index].options[correctIdx];
    reveal.style.display='block';
    reveal.innerHTML = '<div><strong>Answer:</strong> ' + String.fromCharCode(65+correctIdx) + '. ' + correctText + '</div><div class="muted small">'+note+'</div>';
  }

  function handleSubmit(){
    clearTimer();
    const selected = optionsBox.querySelector('.opt-btn.selected');
    const correctIdx = pool[index].answer;
    if(!selected){
      score += POINT_SKIP;
      revealAnswer(correctIdx, 'Skipped. -1 point');
    } else {
      const chosen = parseInt(selected.dataset.idx,10);
      if(chosen === correctIdx){ score += POINT_CORRECT; revealAnswer(correctIdx, 'Correct! +5 points'); selected.classList.add('selected'); }
      else { score += POINT_WRONG; revealAnswer(correctIdx, 'Incorrect. -2 points'); selected.classList.add('selected'); }
    }
    scoreEl.innerText = score;
    setTimeout(()=>{ index++; if(index>=TOTAL) finishExam(); else updateUI(); },2500);
  }

  function handleSkip(note){
    clearTimer();
    const correctIdx = pool[index].answer;
    score += POINT_SKIP;
    revealAnswer(correctIdx, note+' -1 point');
    scoreEl.innerText = score;
    setTimeout(()=>{ index++; if(index>=TOTAL) finishExam(); else updateUI(); },2500);
  }

  submitBtn.addEventListener('click', handleSubmit);
  skipBtn.addEventListener('click', ()=>{ handleSkip('User skipped'); });
  endBtn.addEventListener('click', ()=>{ if(confirm('End exam now?')) finishExam(); });

  function finishExam(){
    clearTimer();
    window.onbeforeunload = null;
    const hist = JSON.parse(localStorage.getItem('ai_history')||'[]');
    hist.push({email:user.email,name:user.name,domain,score,date:new Date().toISOString()});
    localStorage.setItem('ai_history', JSON.stringify(hist));
    sessionStorage.setItem('ai_last_result', JSON.stringify({name:user.name,domain,score,total:TOTAL,date:new Date().toISOString()}));
    // set values for certificate page
    localStorage.setItem('studentName', user.name);
    localStorage.setItem('examDomain', domain);
    localStorage.setItem('examScore', score);
    window.location.href = 'result.html';
  }
}

// Result page logic
if(window.location.pathname.endsWith('result.html')){
  const last = JSON.parse(sessionStorage.getItem('ai_last_result')||'null');
  if(!last){ window.location.href='index.html'; }
  document.getElementById('resName').innerText = last.name;
  document.getElementById('resDomain').innerText = last.domain;
  document.getElementById('resScore').innerText = last.score + ' / ' + (last.total*POINT_CORRECT);
  const pct = Math.max(0, Math.round((last.score/(last.total*POINT_CORRECT))*100));
  document.getElementById('finalBar').style.width = pct+'%';
  const msg = pct>=80 ? 'Excellent performance!' : pct>=50 ? 'Good job — keep practicing.' : 'Needs improvement. Try again.';
  document.getElementById('resMsg').innerText = msg;

  document.getElementById('retry').addEventListener('click', ()=>{ window.location.href='exam.html'; });
  document.getElementById('logout').addEventListener('click', ()=>{ sessionStorage.removeItem('ai_current'); window.location.href='index.html'; });
  document.getElementById('getCert').addEventListener('click', ()=>{ window.location.href='certificate.html'; });
}

// Certificate page logic (professional)
if(window.location.pathname.endsWith('certificate.html')){
  const last = JSON.parse(sessionStorage.getItem('ai_last_result')||'null');
  const certText = document.getElementById('certText');
  const name = localStorage.getItem('studentName') || (last && last.name) || 'Student Name';
  const domain = localStorage.getItem('examDomain') || (last && last.domain) || 'Domain';
  const score = localStorage.getItem('examScore') || (last && last.score) || 0;
  const date = last && last.date ? new Date(last.date).toLocaleDateString() : new Date().toLocaleDateString();
  if(!last){ certText.innerText = 'No recent result found.'; }
  else {
    certText.innerHTML = `This is proudly presented to <b>${name}</b><br/>
      for successfully completing the <b>Nayankumar Borse Architect Interview Exam</b><br/>
      Domain: <b>${domain}</b> &nbsp; | &nbsp; Score: <b>${score}</b> &nbsp; | &nbsp; Date: <b>${date}</b>`;
  }
  document.getElementById('downloadPdf').addEventListener('click', async ()=>{
    const { jsPDF } = window.jspdf;
    const node = document.querySelector('.certificate-box');
    const canvas = await html2canvas(node, { scale:2, useCORS:true, backgroundColor: null });
    const img = canvas.toDataURL('image/png');
    const pdf = new jsPDF({orientation:'landscape', unit:'px', format:[canvas.width, canvas.height]});
    pdf.addImage(img,'PNG',0,0,canvas.width, canvas.height);
    pdf.save((name ? name.replace(/[^A-Za-z0-9 ]/g,'') : 'certificate') + '-certificate.pdf');
  });
  document.getElementById('printBtn').addEventListener('click', ()=>{ window.print(); });
}
