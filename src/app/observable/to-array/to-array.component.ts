import { Component, OnInit } from '@angular/core';
import { interval, toArray, of, from, take } from 'rxjs';

@Component({
  selector: 'app-to-array',
  standalone: true,
  imports: [],
  templateUrl: './to-array.component.html',
  styleUrl: './to-array.component.css'
})
export class ToArrayComponent implements OnInit{

  ngOnInit(): void {
    //Example:1 from Interval
    const obs1 = interval(1000);
    obs1.pipe(take(5), toArray()).subscribe(res=>{
      console.log(res);
    })

  //Example:2 from Of
  const obs2 = of('Apple','Oranges', 'Banana');
    obs2.pipe(toArray()).subscribe(res=>{
      console.log(res);
    })

  
  //Example:3 from From
  const obs3 = from(['John','Jenny', 'Janardan']);
  obs3.pipe(toArray()).subscribe(res=>{
    console.log(res);
  })

  }

  
}
