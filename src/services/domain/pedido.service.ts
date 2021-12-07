import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { API_CONFIG } from "../../config/api.config";
import { PedidoDTO } from "../../models/pedido.dto";

@Injectable()
export class PedidoService {
  constructor(public http: HttpClient) {}

  insert(obj: PedidoDTO) {
    return this.http.post(`${API_CONFIG.baseUrl}/pedidos`, obj, {
      observe: "response",
      responseType: "text",
      //Back-end retorna resposta com corpo vazio por ser um método post, se não colocar text a aplicação vai achar que é JSON e vai tentar dar um parse, e parse no vazio irá dar erro.
    });
  }
}
