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
/*  votes: number;
  title: string;
  link: string;*/

// usando Article Class definido en aticle.model
  article: Article;

/*  constructor() {
    this.title ='Angular 2';
    this.link='http://angular.io';
    this.votes=10;
   }*/

// usando Article Class definido en aticle.model
constructor() {
  this.article= new Article(
    'Angular 2',
    'http://angular.io',
    10  )
}

  voteUp(): boolean{
    //this.votes+=1;
    //this.article.votes+=1; // usando Article Class definido en aticle.model
    this.article.voteUp(); // usando Article Class definido en aticle.model
    return false;
  }
  voteDown(){
    //this.votes-=1;
    //this.article.votes-=1; // usando Article Class definido en aticle.model
    this.article.voteDown(); // usando Article Class definido en aticle.model
    return false;
  }

  ngOnInit() {
  }

}
