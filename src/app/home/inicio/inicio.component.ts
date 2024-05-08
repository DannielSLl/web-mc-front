import { Component } from '@angular/core';
import { ArticleComponent } from './article/article.component';
import { IArticle } from './article/article.interface';
import { ARTICLES } from './article/constants';
import { CarouselComponent } from './carousel/carousel.component';

@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [ArticleComponent,CarouselComponent],
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.css'
})
export class InicioComponent {

  articles: IArticle[] = ARTICLES;
}
