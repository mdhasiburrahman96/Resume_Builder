function addNewWField() {
    let newNode = document.createElement('textarea');
    newNode.classList.add('form-control');
    newNode.classList.add('weField')

    newNode.classList.add('mt-2')

    newNode.setAttribute('rows', 3);
    newNode.setAttribute('placeholder', 'Enter here')

    let weob = document.getElementById('we')
    let weAddButtonob = document.getElementById('weAddButton');

    weob.insertBefore(newNode, weAddButtonob);

}

function addNewAField() {
    let newNode = document.createElement('textarea');
    newNode.classList.add('form-control');
    newNode.classList.add('eqField')
    newNode.classList.add('mt-2')
    newNode.setAttribute('rows', 3);
    newNode.setAttribute('placeholder', 'Enter here')
    let aqob = document.getElementById('aq')
    let aqAddButtonob = document.getElementById('aqAddButton');
    aqob.insertBefore(newNode, aqAddButtonob);

}

//Genreting cv
function generateCV() {
    let nameField = document.getElementById('nameField').value;
    let nameT1 = document.getElementById('nameT1');
    nameT1.innerHTML = nameField;

    //direct
    document.getElementById('nameT2').innerHTML = nameField;
    //contact
    document.getElementById('contactT').innerHTML = document.getElementById('contactField').value;

    //address
    document.getElementById("addressT").innerHTML = document.getElementById('addressField').value;
    document.getElementById("fbT").innerHTML = document.getElementById('fbField').value;
    document.getElementById("instaT").innerHTML = document.getElementById('instaField').value;
    document.getElementById("linkedT").innerHTML = document.getElementById('linkedField').value;

    //objective
    document.getElementById('objectiveT').innerHTML = document.getElementById('objectiveField').value

    //work experince
    let wes = document.getElementsByClassName('weField')
    let str = ''
    for (let e of wes) {
        str = str + `<li> ${e.value} </li>`;
    }

    document.getElementById('weT').innerHTML = str;

    //Academic Qualifications

    let aqs = document.getElementsByClassName('eqField')
    let str1 = '';
    for (let e of aqs) {
        str1 += `<li> ${e.value} </li>`;
    }
    document.getElementById('aqT').innerHTML = str1;


    document.getElementById('cv-form').style.display = 'none'
    document.getElementById('cv-template').style.display = 'block'

}

//print cv

function printCV() {
    window.print();
}

