export async function fetchCars() {
    const headers = {
        'X-RapidAPI-Key': '931d680df0msh1eab21a79ac5631p16c900jsn2b756634e5ad',
		'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com'
    }

    const response = await fetch('https://cars-by-api-ninjas.p.rapidapi.com/v1/cars', {
        headers: headers
    });

    const result = await response.json();

    return result;
}