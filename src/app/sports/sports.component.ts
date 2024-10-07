import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArticleGridComponent } from '../article-grid/article-grid.component';

@Component({
  selector: 'app-sports',
  standalone: true,
  templateUrl: './sports.component.html',
  imports: [CommonModule, ArticleGridComponent],
  styleUrl: './sports.component.css'
})
export class SportsComponent {

}
