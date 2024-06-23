export interface Product {
    id:string, 
    name:string, 
    brand: string,
    description:string, 
    price:number,
    offert?: number,
    stock:number, 
    images:Array<string>, 
    colors:Array<string>,
    discount?:number
    url?:string
  }