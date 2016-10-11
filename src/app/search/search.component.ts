import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {



		searchStr:string;
	
	
		searchMusic() {
			this._spotifyService.searchMusic(this.searchStr).subscribe(res => {
				console.log(res.artists.items);
			});
	
		}


  constructor(private _spotifyService:SpotifyService) { }

  ngOnInit() {
  }

}
