export interface User{
    uid: string;
    nombre : string;
    correo: string;
    password: string;
    perfil: 'estudiante' | 'profesor';
}
export interface asis{
    uid: string;
    user: User;
    fecha: any;
    asistencia: boolean;
}

export interface notificacion {
    profesor:{
    asignatura: string;
    seccion: number;
    notif: string;
    profesor: string;
    id: string;
    } | null;
} 
export interface clase {
    fechas: any;
    asignatura: string;
    fecha: any[];
    asistencia: number;
}