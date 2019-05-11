import { Component } from '@angular/core';
import { FLAGS } from '@angular/core/src/render3/interfaces/view';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name:string="Kishori";
  address:string="Aundh";
  para="This is test";
  sal=23456;
  flag=false;
  flag1=true;
  hobbies=[];
  changeFlag=function(){
      this.flag=!this.flag;
      this.flag1=!this.flag1;

  }
  getVal=(e)=>{
        if(e.target.checked){
               this.hobbies.push(e.target.value)

        }else{}
  }
}
