const cuurncyListApi = "https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies.json"
const exchangeApi = "https://v6.exchangerate-api.com/v6/134eda82d253ae7f7f53ce9a/pair/"

const fromCurr = "USD";
const toCurr = "INR";

fetch(cuurncyListApi)
    .then(response => response.json())
    .then(data => {
        console.log(data);
    })
    .catch(error => {
        console.log(error);
    });

    fetch(`${exchangeApi}${fromCurr}/${toCurr}`)