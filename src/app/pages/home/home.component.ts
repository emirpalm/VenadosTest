import { Component, OnInit } from '@angular/core';
import { Games } from '../../models/games.models';
import { GameService } from '../../services/service.index';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  games: Games[] = [];

  constructor(public _gameService: GameService) { }

  ngOnInit() {
    this.cargarGames();
  }

  cargarGames() {
    this._gameService.cargarGames()
    .subscribe(data => {
      this.games = data.games;
      for (var i = 0; i < this.games.length; i++) {
       console.log(this.games[i].datetime);
    }
    }
    );
  }

}
