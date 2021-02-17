async function something(question) {
    try {
        let promise = new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(question);
            }, 1000);
        });
        let result = await promise;
        let check = prompt(result);
        (check !== '') ? alert(check): alert(new Error('Вы ввели пустую строку'));
    } catch (err) {
        throw new Error(err);
    }
}
something('Как вам?');
console.log('wow');