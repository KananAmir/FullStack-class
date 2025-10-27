// export const BASE_URL = 'https://book-store-api-liard-three.vercel.app/';

// export const sum = (a,b)=>{
//     return a+b
// }
const BASE_URL = 'https://book-store-api-liard-three.vercel.app/';

const sum = (a, b) => {
    return a + b
}
// export vs import

// name export vs default export
 async function getData(endpoint){
   try {
        const response = await fetch(`${BASE_URL}${endpoint}`);
        const data = await response.json();
        return data;
        
    } catch (error) {
        console.log('Fetch error: ', error);
    }
}

export { BASE_URL, sum }


export default getData

