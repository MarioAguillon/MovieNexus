import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { Movie, MovieResponse } from '../models/movie.model';
import { CreditsResponse } from '../models/cast.model';

@Injectable({ providedIn: 'root' })   // Disponible en toda la app
export class MovieService {
  getMovieCredits(id: string | number) {
    return this.http.get<CreditsResponse>
      (`${this.apiUrl}/movie/${id}/credits`);
  }
  private http = inject(HttpClient);   // Inyectamos el motor HTTP
  private apiUrl = environment.baseUrl;

  getTrendingMovies() {
    // Retornamos un Observable (una promesa de que llegarán datos)
    return this.http.get<MovieResponse>(
      `${this.apiUrl}/trending/movie/day`
    );
  }

  /**
   * Obtiene las películas populares con soporte para paginación.
   */
  getPopularMovies(page: number = 1) {
    return this.http.get<MovieResponse>(`${this.apiUrl}/movie/popular`, {
      params: { page: page.toString() }
    });
  }

  getMovieById(id: string | number) {
    return this.http.get<Movie>(`${this.apiUrl}/movie/${id}`);
  }

  searchMovies(query: string) {
    return this.http.get<MovieResponse>(
      `${this.apiUrl}/search/movie`, {
        params: { query }
      });
  }

  /**
   * Obtiene los videos (tráilers, teasers, etc.) de una película.
   * @param id ID de la película en TMDB
   */
  getMovieVideos(id: string | number) {
    return this.http.get<{ results: Array<{ key: string; site: string; type: string; name: string }> }>(
      `${this.apiUrl}/movie/${id}/videos`
    );
  }
}