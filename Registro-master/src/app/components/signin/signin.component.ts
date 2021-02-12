import { ElementSchemaRegistry } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { allowedNodeEnvironmentFlags } from 'process';
import { User } from '../../models/user'
import { UserService } from '../../service/user.service'

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SignInComponent implements OnInit {
  public user:User;

  constructor(private userService:UserService) {
    this.user = new User('','', '',0,'','',)
   }

  ngOnInit(): void {
  }

  registrar(){
    this.userService.resgistrarUsuario(this.user).subscribe(
      (res: any) => {
        if(res.statusCode != 200){
          alert('No se pudo registar el usuario')
        }else{
          alert('Registro exitoso.!')
        }
      },
      (error) =>{
        var errorMensaje = <any>error;
        if(errorMensaje != null){
          console.log(error)
        }
      }
    )
  }

}

