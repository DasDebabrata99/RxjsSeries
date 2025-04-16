import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';
import { DesignUtilityService } from '../../service/design-utility.service';

@Component({
  selector: 'app-interval',
  standalone: true,
  imports: [],
  templateUrl: './interval.component.html',
  styleUrl: './interval.component.css'
})
export class IntervalComponent implements OnInit {
  
  constructor(private designUtility: DesignUtilityService){}
  ngOnInit(): void {
    const broadcaster = interval(1000);

    
    const subscriber = broadcaster.subscribe((res) =>{
      console.log(res);
      this.designUtility.print("Video "+res, 'ul-container');
      this.designUtility.print("Video "+res, 'ul-container2');
      this.designUtility.print("Video "+res, 'ul-container3');
      if(res > 10){
        subscriber.unsubscribe();
      }
    } );
  }


 
}
