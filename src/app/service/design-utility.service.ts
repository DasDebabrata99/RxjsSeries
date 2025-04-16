import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DesignUtilityService {

  constructor() { }

  print(value: number, container: string){
    let liElement = document.createElement('li');
    liElement.innerText = 'video' + value;
    document.getElementById(container)?.appendChild(liElement);
   

  }
}
