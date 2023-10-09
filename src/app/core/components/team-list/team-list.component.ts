import { Component } from '@angular/core';
import { TeamList, Worker } from '../../interfaces/team-list.interface';
import { environment } from 'src/app/environments/environment.prod';

@Component({
  selector: 'app-team-list',
  templateUrl: './team-list.component.html',
  styleUrls: ['./team-list.component.scss']
})
export class TeamListComponent {
  public teamListData!: any;
  public teamList!: TeamList;
  private url = environment.url;
  public sidebarVisible: boolean = false;
  public workerCurrent!:Worker;

  ngOnInit(): void {
   this.setContentAlingText();
  }

  setContentAlingText(){
    this.teamList = {
      id: this.teamListData.id,
      title: this.teamListData.title,
      worker: this.teamListData.worker
    }
  }

  get Url(){
    return this.url;
  }

  openModal(worker:Worker){
    this.sidebarVisible = true;
    this.workerCurrent = worker;
  }
}
