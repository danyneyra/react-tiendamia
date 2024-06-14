export interface Product {
    id:string, 
    name:string, 
    brand: string,
    description:string, 
    price:string,
    offert?: string,
    stock:number, 
    images:Array<string>, 
    colors:Array<string>,
    discount?:string
    url?:string
  }