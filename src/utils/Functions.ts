export interface Product{
    id: number,
    brand: string,
    colors: string[],
    description: string,
    images: string[],
    name: string,
    price: number,
    stock: number
}


//Función para cargar JSON
export async function loadJson(pathJson:string){
    try {
        const response = await fetch(pathJson)
        if (!response.ok){
            throw new Error('Network response was not ok')
        }
        const data = await response.json()
        return data
    } catch (error) {
        console.error('ERROR:', error)
    }
}