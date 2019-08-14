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
    update(objCliente: Cliente) {
        this.lista.forEach(cliente => {
            if (cliente.id === objCliente.id) {
                cliente.nombre = objCliente.nombre;
            }
        })
    }

    getClienteById(id: string) {
        for (let i = 0; i < this.lista.length; i++) {
            if (this.lista[i].id === id) {
                return this.lista[i].nombre;
            }
        }
        return "";
    }
}