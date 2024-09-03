const base_url =  "https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies";

let dropdowns = document.querySelectorAll('.dropdown select');
const btn = document.querySelector('form button');
const from = document.querySelector('.from select');
const to = document.querySelector('.to select');



for (let select of dropdowns) {
    for (const currCode in countryList) {
        let newOption = document.createElement('option');
        newOption.innerText = currCode;
        newOption.value = currCode;
        if (select.name === 'from' && currCode === 'USD') {
            newOption.selected = "selected";
        } else if (select.name === 'to' && currCode === 'INR') {
            newOption.selected = "selected";
        }
        select.append(newOption);
    }

    select.addEventListener("change", (e) => {
        updateFlag(e.target);
    });

}

let updateFlag = (changeElement) => {
    currCode = changeElement.value;
    countryCode = countryList[currCode];
    let newSrc = `https://flagsapi.com/${countryCode}/flat/64.png`;
    let img = changeElement.parentElement.querySelector('img');
    img.src = newSrc;

}
btn.addEventListener('click', async(e) => {
    e.preventDefault();
    let amount = document.querySelector('.amount input');
    let amountValue = amount.value;
    console.log(amountValue);
    if (amountValue === '' || amountValue < 0) {
        alert('Please Enter the valid Amount');
        amount.value = 0;
    
    }
// console.log(from.value,to.vale)
    let url = `${base_url}/${from.value.toLowerCase()}/${to.value.toLowerCase()}.json`;
    let response = await fetch(url);
    response = await response.json();
    console.log(response);
});
