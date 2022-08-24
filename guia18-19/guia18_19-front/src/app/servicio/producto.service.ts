import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {
  constructor(private http: HttpClient) { }

  obtenerProductos() {
    return this.http.get('http://localhost:3000/api/productos')
  }

  obtenerProductoPorId(id: number) {
    return this.http.get('http://localhost:3000/api/productos/' + id.toString())
  }

  getAllProducts() {
    return this.http.get(
      'https://productos-da502-default-rtdb.firebaseio.com/collection.json'
    );
  }

  getProductosByName(nombre: string) {
    const str = `https://productos-da502-default-rtdb.firebaseio.com/collection.json?orderBy=%22productoNombre%22&equalTo=%22${encodeURIComponent(
      nombre
    )}%22`;
    return this.http.get(str);
  }
}
