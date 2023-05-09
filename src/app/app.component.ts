import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormGroup,FormControl,Validators } from '@angular/forms';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title = 'frontnomina';
  description = '';
 
  
  constructor(
    private http: HttpClient ) { } 

    formEmpleado = new FormGroup({
      numEmpleado : new FormControl('',Validators.required),
      nombreEmpleado : new FormControl('',Validators.required),
      rolEmpleado: new FormControl('',Validators.required)
    })

    formMovimiento = new FormGroup({
      numEmpleado: new FormControl('',Validators.required),
      mes_ano:  new FormControl('',Validators.required),
      cantidad_mes: new FormControl("",Validators.required)
    })

    formRecibo = new FormGroup({
      numEmpleado: new FormControl('',Validators.required),
      mes_ano: new FormControl('',Validators.required)
    })

  ngOnInit():void {
   
    this.http.get("http://localhost:8025/consulta").subscribe((resp:any) =>{
      this.description = resp; 
    }
    )
    


    
  }




}
