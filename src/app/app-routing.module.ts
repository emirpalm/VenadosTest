import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PlayersComponent } from './pages/players/players.component';


const routes: Routes = [
  {
    path: 'Players',
    component: PlayersComponent,
    data: { titulo: 'Players' }
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
