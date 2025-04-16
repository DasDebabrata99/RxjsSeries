import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-promise',
  standalone: true,
  imports: [],
  templateUrl: './promise.component.html',
  styleUrl: './promise.component.css'
})
export class PromiseComponent {
  @ViewChild('result1') result1!: ElementRef;
  @ViewChild('result2') result2!: ElementRef;
  @ViewChild('result3') result3!: ElementRef;

  dell={
    brand:"Dell",
    hardDisk: "2tb",
    ram: "32gb",
  }
  buyLaptop = new Promise( (resolve, reject) =>{
      setTimeout(()=>{
        return resolve(this.dell);
      }, 3000)
  });

  
  withPromise(){
    this.buyLaptop.then((res)=>{ 
      this.result1.nativeElement.innerText =  JSON.stringify(res);    
    })
  }

  async withAsync(){
    const data = await this.buyLaptop;
    this.result2.nativeElement.innerText =  JSON.stringify(data);  
  }



  async withFetch(){
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await response.json();
    this.result3.nativeElement.innerText =  JSON.stringify(data);  
  }


}
