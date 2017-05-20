import { Component,
        HostBinding,
        OnInit } from '@angular/core';
import { Article } from './article.model'; // <-- added

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {

  @HostBinding('attr.class') cssClass ='row';

  article: Article;

constructor() {
  this.article= new Article(
    'Angular 2',
    'http://angular.io',
    10  )
}

  voteUp(): boolean{

    this.article.voteUp(); // usando Article Class definido en aticle.model
    return false;
  }
  voteDown(){

    this.article.voteDown(); // usando Article Class definido en aticle.model
    return false;
  }

  ngOnInit() {
  }

}
