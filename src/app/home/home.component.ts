import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArticleGridComponent } from '../article-grid/article-grid.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, ArticleGridComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
