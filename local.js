const form = document.getElementById('Customer');
const main = document.querySelector('.Customers');
const namInput = form['name']
const ageInput = form['age'] 
const rollInput = form['roll'] 

// const Customer = [
//     {
//     name: "Salmaa",
//     age: 22,
//     roll: 50,
//     },
// ];
const Customer = JSON.parse(localStorage.getItem("Customer")) || [];

const addCustomer = (name, age, roll)=>{
    Customers.push({
        name, 
        age,
        roll, 
    });

    localStorage.setItem("Customer", JSON.stringify(Customer))
    return {name, age, roll}
};

const stEl = ({name, age, roll}) =>{
    const creatDv = document.createElement('div');
    const custNm = document.createElement('h2');
    const custdAge = document.createElement('p');
    const custdRol = document.createElement('p');

    custNm.innerText = 'Customer name: '+name;
    custAge.innerText = 'Customer age: '+age;
    custRol.innerText = 'Customer roll: '+roll;

    creatDv.append(custNm, custAge, custRol);
    main.appendChild(creatDv);

};
    main.style.display = Customers.length === 0 ? "none": "flex";
    students.forEach(stEl);

    form.onsubmit = e =>{
        e.preventDefault();

        const newCustomer = addCustomer(
            namInput.value,
            ageInput.value,
            rollInput.value
        );
        stEl(newCustomer);
        namInput.value = "";
        ageInput.value = "";
        rollInput.value = "";
    }