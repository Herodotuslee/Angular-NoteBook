import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  // styleUrls: ['./app.component.css']
  styles: [`
  h1 {
    color:dodgerblue;
  }`]
})
export class AppComponent {
  name = 'My-Angular-textbook';
  post = {

    isFavorite: true
  };
  // onFavoriteChanged() {
  //   console.log('Favlorte changed', isFavorite);
  // }

  // output property
}
