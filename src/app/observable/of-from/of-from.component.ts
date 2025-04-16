import { Component, OnInit } from '@angular/core';
import { from, of } from 'rxjs';
import { DesignUtilityService } from '../../service/design-utility.service';

@Component({
  selector: 'app-of-from',
  standalone: true,
  imports: [],
  templateUrl: './of-from.component.html',
  styleUrl: './of-from.component.css'
})
export class OfFromComponent implements OnInit{

  constructor( private designUtility : DesignUtilityService){}
  ngOnInit(): void {
    const obs1 = of('Apples', 'Oranges', 'Bananas', 'Water-Melon');
    obs1.subscribe(res => {
      this.designUtility.print(res, "ul-container1");
      console.log(res);
    })


    const obs2 = of({a: 'Apples'},{ b: 'Ball'}, {c:'Cat'},{d: 'Dog'});
    obs2.subscribe(res => {
      this.designUtility.print(JSON.stringify(res), "ul-container2");
      console.log(res);
    });

    const obs3 = from(['John', 'Jenny', 'Janardan']);
    obs3.subscribe(res => {
      this.designUtility.print(res, "ul-container3");
      console.log(res);
    });

    const promise = new Promise((resolve, reject)=>{
      setTimeout(()=>{
        resolve("Promise Resolved");
      }, 3000
      )
    })
    const obs4 = from(promise);
    obs4.subscribe(res => {
      this.designUtility.print(res, "ul-container4");
      console.log(res);
    });

    const obs5 = from("Welcome to Tajpur");
    obs5.subscribe(res => {
      this.designUtility.print(res, "ul-container5");
      console.log(res);
    });
  }

  

  

}
