export class UsersDto {
    id: number;
    name: string;
    lastname: string;
    email: string;
    phone: string;
    puntos: number;
    constructor(id: number, name: string, lastname: string, email: string, phone: string, puntos: number) {
        this.id = id;
        this.name = name;
        this.lastname = lastname;
        this.email = email;
        this.phone = phone;
        this.puntos = puntos;
    }
}
