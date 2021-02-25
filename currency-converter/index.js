const axios = require('axios');
const getExchangeRate = async (fromCurrency, toCurrency) => {
    try {
        const response = await axios.get('http://api.currencylayer.com/live?access_key=5e6a36bc33c0f6d68f1ee378738388ef');
        const rate = response.data.quotes; //объект с курсами валют
        const baseCurrency = response.data.source; //базовая валюта
        const usd = 1 / rate[`${baseCurrency}${fromCurrency}`]; //
        const exchangeRate = usd * rate[`${baseCurrency}${toCurrency}`];
        return exchangeRate;
    } catch (err) {
        throw new Error(`Не получается перевести ${fromCurrency} to ${toCurrency}`);
    }
};

const getCurrencyCountries = async (currencyCode) => {
    try {
        const response = await axios.get(`https://restcountries.eu/rest/v2/currency/${currencyCode}`);
        return response.data.map(country => country.name);
    } catch (err) {
        throw new Error(`Не получается найти страну(ы) где используют ${currencyCode}`);
    }
}

const currencyConvert = async (fromCurrency, toCurrency, amount) => {
    const exchangeRate = await getExchangeRate(fromCurrency, toCurrency);
    const countries = await getCurrencyCountries(toCurrency);
    const converted = (amount * exchangeRate).toFixed(3);
    return `${amount} ${fromCurrency} стоит ${converted} ${toCurrency}. Их можно потратить в: \n ${countries}`;
}

async function convertOnClick() {
    const from = document.getElementById("from").value;
    const to = document.getElementById("to").value;
    const amount = document.getElementById("amount").value;
    await currencyConvert(from.toUpperCase(), to.toUpperCase(), Number(amount))
        .then(message => alert(message))
        .catch(err => console.log(err.message));
}
document.getElementById('submit').onclick = convertOnClick;