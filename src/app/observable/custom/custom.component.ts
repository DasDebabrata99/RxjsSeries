import { Component, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { DesignUtilityService } from '../../service/design-utility.service';
import { NgClass } from '@angular/common';
@Component({
  selector: 'app-custom',
  standalone: true,
  imports: [NgClass],
  templateUrl: './custom.component.html',
  styleUrl: './custom.component.css'
})
export class CustomComponent implements OnInit{
  techStatus = ""; 
  techStatus2 ="";

  constructor(private designUtility: DesignUtilityService){}
  ngOnInit(): void {
    const obs1 = new Observable((observer)=> {
        setTimeout(()=>{
          observer.next('Angular');
        },1000);

        setTimeout(()=>{
          observer.next('Typescript');
          
        },2000);

        setTimeout(()=>{
          observer.next('Javascript');
          
        },3000);

        setTimeout(()=>{
          observer.next('html');
          
        },4000);

        setTimeout(()=>{
          observer.next('React');
          
        },5000);

        setTimeout(()=>{
          observer.complete();
          this.techStatus='completed';
        },6000);
    });

    obs1.subscribe(res=>{
      console.log(res);
      this.designUtility.print(res,"techlist1");
    })

   const arr1=['Angular', 'React', 'html', 'JavaScript', 'Typescript', 'Node'];
   let count = 0; 
   let subsriber: Subscription;
   const obs2 = new Observable((observer) => {
      setInterval(()=>{
        observer.next(arr1[count]);
        count++;

        if(count > 5){
          observer.complete();
          this.techStatus2='completed';
        }
      }, 1000);

     
    });
    subsriber = obs2.subscribe(res=>{
      this.designUtility.print(res, "techlist2");
    },
    (error=>console.log("error")),
    (()=>{
      this.techStatus2='complete';
      console.log("Inside observable completion block")
      subsriber.unsubscribe();
  })
    );
  

  }
}


