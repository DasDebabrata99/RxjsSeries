import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DesignUtilityService {

  constructor() { }

  print(value: any, container: string){
    let liElement = document.createElement('li');
    liElement.innerText = value;
    document.getElementById(container)?.appendChild(liElement);
   

  }
}
