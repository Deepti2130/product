import { Injectable } from '@angular/core';
import { Ipassenger } from '../model/passenger';

@Injectable({
  providedIn: 'root'
})
export class PassengerService {

  passengerArr:Array<Ipassenger> = [
    {
      id:1,
      fullname:'stephen',
      checkedIn:true,
      checkInDate:1490452000000,
      children:null,
    },
    {
      id:2,
      fullname:'Rose',
      checkedIn:false,
      checkInDate:null,
      children:[
        {name:'Ted', age:12},
        {name:'chole', age:16}
      ]
    },
    {
      id:3,
      fullname:'Jhon',
      checkedIn:true,
      checkInDate:1490452000000,
      children:[
        {name:'mili', age:4},
        {name:'Dolly', age:6}
      ]
    },
    {
      id:4,
      fullname:'Devid',
      checkedIn:false,
      checkInDate:null,
      children:null,
    },
    {
      id:5,
      fullname:'Annie',
      checkedIn:true,
      checkInDate:178672000000,
      children:null,
    }
  ]
  constructor() { }

  fetchAllPass():Array<Ipassenger>{
    //API call to get all passenger
   return this.passengerArr
  }


  updatepassinfo(updatedpass:Ipassenger){
  let getIndex = this.passengerArr.findIndex(pass=>{
    return pass.id === updatedpass.id
  })

  this.passengerArr[getIndex] = updatedpass
  }


  removePass(id:number){
  //API call to remove pass

  let getIndex = this.passengerArr.findIndex(pass=> pass.id === id)
  console.log(getIndex)

  this.passengerArr.splice(getIndex,1)
  }
}
