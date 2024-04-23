export const exerciseOptions = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '012d80296emsh0121727cf2a9408p10db9cjsn1daa0451ecce',
        'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
    }
}

export const fetchData = async(url, options) => {
    const response = await fetch(url, options);
    const jsonData = await response.json();
    return jsonData
}