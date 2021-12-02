import { CidadeDTO } from "./cidade.dto";

export interface EnderecoDTO {
  id : string;
  lagradouro : string;
  numero : string;
  complemento : string;
  bairro : string;
  cep : string;
  cidade : CidadeDTO;
}
