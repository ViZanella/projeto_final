export interface IperfumeType{
    id?:string;
    name: string;
}
export interface IperfumeMark{
    id?:string;
    name: string;
}
export interface IperfumeBottlesize{
    id?:string;
    name: string;
    make: IperfumeMark
}
export interface Iperfume{
    
    id?:string;
    name: string;
    description: string;
    photo: string;
    value: number;
    type: IperfumeType;
    bottlesize: IperfumeBottlesize;
}