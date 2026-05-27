import { Component } from '@angular/core';
import { EmptyStateComponent } from '../../shared/components/empty-state/empty-state';

@Component({
  selector: 'app-not-found',
  standalone: true,
  imports: [EmptyStateComponent],
  templateUrl: './not-found.html',
  styles: `:host { display: flex; min-height: 80vh; align-items: center; justify-content: center; }`
})
export class NotFound {}
