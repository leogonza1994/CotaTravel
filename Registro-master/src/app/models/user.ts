export class User {
    constructor(
        public _id: string,
        public nombre: string,
        public apellido: string,
        public celular: number,
        public correo: string,
        public contrasena: string
    ){}
}
