import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { debounceTime, distinctUntilChanged, fromEvent, map } from 'rxjs';

@Component({
  selector: 'app-debounce-time',
  standalone: true,
  imports: [],
  templateUrl: './debounce-time.component.html',
  styleUrl: './debounce-time.component.css'
})
export class DebounceTimeComponent implements AfterViewInit{
  
  @ViewChild('searchInput1') searchInput!: ElementRef;
  @ViewChild('searchInput2') searchInput2!: ElementRef;
  searchKey="";  
  searchKey2="";  
  


  ngAfterViewInit(): void {
    fromEvent<any>(this.searchInput.nativeElement,'keyup')
      .pipe(
        map(event => event.target.value),
        debounceTime(200)
      
      )
      .subscribe(
        res => {
          this.searchKey = res;
          console.log(res);
        }
      );
    
      fromEvent<any>(this.searchInput2.nativeElement, 'keyup')
        .pipe(
          map(e => e.target.value),
          debounceTime(200),
          distinctUntilChanged()
        ).subscribe(
          res => {
            
            this.searchKey2 = res;
            console.log(res);
          }
        );
  }


}
