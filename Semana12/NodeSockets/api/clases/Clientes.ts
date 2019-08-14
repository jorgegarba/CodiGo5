import { Cliente } from './Cliente';
export class Clientes {
    private lista: Array<Cliente> = [];

    add(cliente: Cliente) {
        this.lista.push(cliente);
    }
    // get getclientes => la llamada seria objClientes.getclientes
    // getclientes() => lallamada seria objClientes.getclientes()
    getclientes() {
        return this.lista;
    }
    remove(id: string) {
        this.lista = this.lista.filter(cliente => cliente.id != id);
    }
}