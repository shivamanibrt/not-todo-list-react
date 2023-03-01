export const RandomStrGenerator = (length) => {
    let str = "";

    const strcollection = 'qwertyuiopasdfghjklzxcvbnmqwertyuiopasdfghjklzxcvbnm';

    for (let i = 0; i < length; i++) {
        const charPosition = Math.round(Math.random() * strcollection.length);

        str += strcollection[charPosition];
    }
    return str
}

