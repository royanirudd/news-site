import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewsService } from '../services/news.service';
import { Article } from '../models/article.model';

@Component({
  selector: 'app-article-grid',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './article-grid.component.html',
  styleUrls: ['./article-grid.component.css']
})
export class ArticleGridComponent implements OnInit {
  @Input() category: string = '';
  articles: Article[] = [];

  constructor(private newsService: NewsService) {}

  ngOnInit() {
    this.newsService.getTopHeadlines(this.category).subscribe(
      (response: any) => {
        this.articles = response.articles;
      },
      (error) => {
        console.error('Error fetching news:', error);
      }
    );
  }
}
