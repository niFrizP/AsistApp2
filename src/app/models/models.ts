export interface User{
    uid: string
    nombre : string;
    correo: string;
    password: string;
    perfil: 'estudiante' | 'profesor'
}
export interface asis{
    uid: string;
    user: User;
    fecha: any;
    asistencia: boolean;
}