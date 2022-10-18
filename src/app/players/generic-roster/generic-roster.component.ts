import { Component, OnInit } from '@angular/core';
import { LoadRostersService } from 'src/app/services/load-rosters/load-rosters.service';

@Component({
  selector: 'app-generic-roster',
  templateUrl: './generic-roster.component.html',
  styleUrls: ['./generic-roster.component.scss']
})
export class GenericRosterComponent implements OnInit {

  constructor(private loadRostersService: LoadRostersService) { }

  ngOnInit(): void {
    this.loadRostersService.getRosters().subscribe();
  }

}
