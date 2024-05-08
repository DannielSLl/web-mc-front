import { Component,Input } from '@angular/core';
import { IArticle } from './article.interface';

@Component({
  selector: 'app-article',
  standalone: true,
  imports: [],
  templateUrl: './article.component.html',
  styleUrl: './article.component.css'
})
export class ArticleComponent {
  
  @Input() article: IArticle =
  
  {
    title: "",
    img: ""
  }
}
