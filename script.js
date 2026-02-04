// ================= DATA =================

// T20 WORLD CUP
const t20WorldCup = [
 {type:"T20 World Cup",
  date:"7 Feb 2026",teams:["India","USA"],
  flags:["in","us"],time:"7:00 PM IST",
  stadium:"Wankhede Stadium, Mumbai"},

 {type:"T20 World Cup",date:"12 Feb 2026",
  teams:["India","Namibia"],flags:["in","na"],
  time:"7:00 PM IST",stadium:"Arun Jaitley Stadium, Delhi"},

 {type:"T20 World Cup",date:"15 Feb 2026",
  teams:["India","Pakistan"],flags:["in","pk"],time:"7:00 PM IST",
  stadium:"Sinhalese Sports Club, Colombo"},
  
 {type:"T20 World Cup",date:"18 Feb 2026",
  teams:["India","Netherlands"],flags:["in","nl"],time:"7:00 PM IST",
  stadium:"Narendra Modi Stadium, Ahmedabad"}
  
];

// ENGLAND T20
const englandT20 = [
 {type:"1st T20I",date:"1 Jul 2026",
  teams:["England","India"],flags:["gb-eng","in"],time:"11:00 PM IST",
 stadium:"Riverside Ground, Chester-le-Street"},

 {type:"2nd T20I",date:"4 Jul 2026",
  teams:["England","India"],flags:["gb-eng","in"],time:"7:00 PM IST",
  stadium:"Old Trafford, Manchester"},

 {type:"3rd T20I",date:"7 Jul 2026",
  teams:["England","India"],flags:["gb-eng","in"],time:"11:00 PM IST",
  stadium:"Trent Bridge, Nottingham"},

 {type:"4th T20I",date:"9 Jul 2026",
  teams:["England","India"],flags:["gb-eng","in"],time:"11:00 PM IST",
  stadium:"Seat Unique Stadium, Bristol"},

 {type:"5th T20I",date:"11 Jul 2026",
  teams:["England","India"],flags:["gb-eng","in"],time:"11:00 PM IST",
  stadium:"The Rose Bowl, Southampton"}

];


// ENGLAND ODI
const englandODI = [
 {type:"1st ODI",date:"14 Jul 2026",
  teams:["England","India"],flags:["gb-eng","in"],time:"5:30 PM IST",
  stadium:"Edgbaston, Birmingham"},

 {type:"2nd ODI",date:"16 Jul 2026",
  teams:["England","India"],flags:["gb-eng","in"],time:"5:30 PM IST",
  stadium:"Sophia Gardens, Cardiff"},

 {type:"3rd ODI",date:"19 Jul 2026",
  teams:["England","India"],flags:["gb-eng","in"],time:"3:30 PM IST",
  stadium:"Lord's Cricket Ground, London"}

];


// ================= RENDER =================

function render(sectionId,data){
  const box = document.getElementById(sectionId);
  data.forEach(m=>{
    box.innerHTML += `
      <div class="card">
        <span class="date">${m.date}</span>
        <div class="match-type">${m.type}</div>

        <div class="teams">
          <img src="https://flagcdn.com/w80/${m.flags[0]}.png">
          ${m.teams[0]} vs ${m.teams[1]}
          <img src="https://flagcdn.com/w80/${m.flags[1]}.png">
        </div>

        <div class="time">⏰ ${m.time}</div>
        <div class="time">📍 ${m.stadium}</div>
      </div>
    `;
  });
}

// ORDER MATTERS
render("t20wc", t20WorldCup);
render("t20eng", englandT20);
render("odi", englandODI);

// ================= SCROLL ANIMATION =================
window.addEventListener("scroll",()=>{
  document.querySelectorAll(".card").forEach(card=>{
    if(card.getBoundingClientRect().top < window.innerHeight - 100){
      card.classList.add("show");
    }
  });
});
