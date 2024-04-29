export const exerciseOptions = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': 'c7bf25dc95msh1286cb33308e55cp110da8jsn2f4ff17e39bd',
        'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
    }
}

export const fetchData = async(url, options) => {
    const response = await fetch(url, options);
    const jsonData = await response.json();
    return jsonData
}