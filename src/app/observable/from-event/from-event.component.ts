import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { fromEvent } from 'rxjs';
import { DesignUtilityService } from '../../service/design-utility.service';

@Component({
  selector: 'app-from-event',
  standalone: true,
  imports: [],
  templateUrl: './from-event.component.html',
  styleUrl: './from-event.component.css'
})
export class FromEventComponent implements AfterViewInit{
  @ViewChild('btn1') addbutton!: ElementRef; 
 
  constructor(private designUtility: DesignUtilityService){}

  ngAfterViewInit(){
    let clicks=0;
    fromEvent(this.addbutton.nativeElement,'click').subscribe(res =>{
      this.designUtility.print(clicks++, 'ul-container');
    })
  }


  


}
