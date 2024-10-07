import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArticleGridComponent } from '../article-grid/article-grid.component';

@Component({
  selector: 'app-world-news',
  standalone: true,
  imports: [CommonModule, ArticleGridComponent],
  templateUrl: './world-news.component.html',
  styleUrl: './world-news.component.css'
})
export class WorldNewsComponent {

}
