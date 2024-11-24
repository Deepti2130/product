import { Component, OnInit } from '@angular/core';
import { Ipassenger } from '../../model/passenger';
import { PassengerService } from '../../services/passenger.service';

@Component({
  selector: 'app-pass-dashboard',
  templateUrl: './pass-dashboard.component.html',
  styleUrls: ['./pass-dashboard.component.scss']
})
export class PassDashboardComponent implements OnInit {
passArr! : Array<Ipassenger>
checkIncount! : number;

  constructor(
    private _passService: PassengerService
  ) { }

  ngOnInit(): void {
    this.passArr = this._passService.fetchAllPass()
  }

  getcheckIncount(){
   this.checkIncount = this.passArr.filter(pass=>pass.checkedIn).length
   }

   onRemoveupdate(eve:any){
   this.getcheckIncount()
   }



  }
