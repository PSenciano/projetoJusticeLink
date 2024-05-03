//Employees Informations
const employees = [
    {
        id: 0,
        img: "../assets/employees/gabriel-junior.jpg",
        name: "Gabriel Junior",
        speciality: "Direito do Trabalho",
        text: "Gabriel Junior é especialista em direito do trabalho, lida com trabalhadores ou empregadores em questões relacionadas a contratos de trabalho, demissões, discriminação no local de trabalho, segurança no local de trabalho e outras questões trabalhistas."
    }, 
    {
        id: 1,
        img: "../assets/employees/mariana-oliveira.jpg",
        name: "Marina Oliveira",
        speciality: "Direito da Família",
        text: "Marina Oliveira é especialista em direito da família, lida com questões relacionadas a casamentos, divórcios, guarda de filhos, pensão alimentícia, adoção e outras questões familiares.",
    },
    {
        id: 2,
        img: "../assets/employees/anabella-silva.jpg",
        name: "Anabella Silva",
        speciality: "Direito Empresarial",
        text: "Anabella Silva é especialista em direito empresarial, lida com questões relacionadas a empresas, incluindo formação de empresas, fusões e aquisições, contratos comerciais, litígios empresariais e conformidade regulatória.",
    },
    {
        id: 3,
        img: "../assets/employees/rafael-pereira.jpg",
        name: "Rafael Pereira",
        speciality: "Direito Penal",
        text: "Rafael Pereira é especialista em direito penal, lida com casos que envolvem acusações criminais, defendendo indivíduos acusados de crimes ou representando o Estado na acusação de crimes.",
    }, 
    {
        id: 4,
        img: "../assets/employees/marcos-azevedo.jpg",
        name: "Marcos Azevedo",
        speciality: "Direito Ambiental",
        text: "Marcos Azevedo é especialista em direito ambiental, lida com questões relacionadas à proteção do meio ambiente, incluindo regulamentações governamentais, conservação de recursos naturais, poluição e responsabilidade ambiental.",
    },
]

//Select Item

const img = document.querySelector("#employee-img");
const employeeName = document.querySelector("#employee-name");
const speciality = document.querySelector("#employee-speciality");
const text = document.querySelector("#employee-description");

const prev = document.querySelector("#prev");
const next = document.querySelector("#next");

//Set Staring Item
let currentItem = 0;

//Load Initial Item
window.addEventListener("DOMContentLoaded", function() {
    showEmployee();
});

//Show Employee Funciton
function showEmployee() {
    const item = employees[currentItem];
    img.src = item.img;
    employeeName.textContent = item.name;
    speciality.textContent = item.speciality;
    text.textContent = item.text;
}

//Prev Button
prev.addEventListener('click', function() {
    currentItem--;
    if(currentItem < 0) {
        currentItem = employees.length - 1;
    }
    showEmployee();
});

//Next Button
next.addEventListener('click', function() {
    currentItem++;
    if(currentItem > employees.length - 1) {
        currentItem = 0;
    }
    showEmployee();
});

//Random Button
random.addEventListener('click', function() {
    currentItem = Math.floor(Math.random() * (4 - 0 + 1)) + 0;
    showEmployee();
});