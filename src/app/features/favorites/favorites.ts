import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FavoritesService } from '../../core/services/favorites.service';
import { MovieCard } from '../../shared/components/movie-card/movie-card';
import { EmptyStateComponent } from '../../shared/components/empty-state/empty-state';

@Component({
  selector: 'app-favorites',
  standalone: true,
  imports: [CommonModule, RouterModule, MovieCard, EmptyStateComponent],
  templateUrl: './favorites.html',
  styleUrl: './favorites.css'
})
export class Favorites {
  // Inyectamos el servicio para acceder a los favoritos
  public favoritesService = inject(FavoritesService);

  // Creamos un getter para facilitar el acceso en el HTML
  get favoriteMovies() {
    return this.favoritesService.favorites();
  }
}
