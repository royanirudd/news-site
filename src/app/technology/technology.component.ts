import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArticleGridComponent } from '../article-grid/article-grid.component';

@Component({
  selector: 'app-technology',
  standalone: true,
  imports: [CommonModule, ArticleGridComponent],
  templateUrl: './technology.component.html',
  styleUrl: './technology.component.css'
})
export class TechnologyComponent {

}
