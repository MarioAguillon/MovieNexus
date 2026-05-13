export interface CastMember {
    id: number;
    name: string;
    character: string; // Nombre del personaje en la pelicula
    profile_path: string | null; // Foto del actor

}

export interface CreditsResponse {
    id: number;
    cast: CastMember[]; // Lista de actores
}
