import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router'; 

@Component({
  selector: 'app-hobbies',
   standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './hobbies.html',
  styleUrl: './hobbies.css',
})
export class Hobbies {

}
