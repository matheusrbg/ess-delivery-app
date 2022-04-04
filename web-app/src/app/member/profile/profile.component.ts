import { Component } from "@angular/core";
import { ClientService } from "src/app/client/client.service";

@Component({
  selector: "profile",
  templateUrl: "./profile.component.html",
  styleUrls: ["./profile.component.css"],
})
export class ProfileComponent {
  name:string;
  cpf:string;
  telefone:string;
  enderecos:string[];
  metodos_pag:string;
  

  constructor(private clientService: ClientService) {}

  ngOnInit(): void {
    this.clientService.getClient().then((result) => {
      this.name = result.name;
      this.cpf = result.cpf
      this.telefone = result.phone
      this.enderecos = result.addresses
      this.metodos_pag = result.pay_method
    });
  }
  
}
