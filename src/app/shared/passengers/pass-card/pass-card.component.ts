import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Ipassenger } from '../../model/passenger';
import { PassengerService } from '../../services/passenger.service';

@Component({
  selector: 'app-pass-card',
  templateUrl: './pass-card.component.html',
  styleUrls: ['./pass-card.component.scss']
})
export class PassCardComponent implements OnInit {
@Input() passobj! :Ipassenger
@Output() emitpassInfo: EventEmitter<Ipassenger> = new EventEmitter<Ipassenger>()
IsinEditMode :boolean = false


  constructor(
    private _passService:PassengerService
  ) { }

  ngOnInit(): void {
  }

  onupdateuserName(updatedname:string){
   this.IsinEditMode = !this.IsinEditMode
   console.log({...this.passobj, fullname:updatedname})

   this._passService.updatepassinfo({...this.passobj, fullname:updatedname})

  }


  onRemovepass(id:number){
   console.log(id)
   this._passService.removePass(id)
   this.emitpassInfo.emit(this.passobj)

  }

}
