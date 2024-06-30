import { Component, OnInit } from '@angular/core';
import { ArticleComponent } from './article/article.component';
import { IArticle } from './article/article.interface';
import { ARTICLES } from './article/constants';
import { CarouselComponent } from './carousel/carousel.component';
import { MatDialog} from '@angular/material/dialog'
import { DialogBodyLocalComponent } from '../dialog-body-local/dialog-body-local.component';
import { LocalElegidoService } from '../../services/local-elegido.service';

@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [ArticleComponent,CarouselComponent],
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.css'
})
export class InicioComponent{

  
  articles: IArticle[] = ARTICLES;

  constructor() {}

}

