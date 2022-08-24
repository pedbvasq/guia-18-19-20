import { Component, OnInit } from '@angular/core';
import { ProductoService } from '../servicio/producto.service';

@Component({
  selector: 'app-reporte',
  templateUrl: './reporte.component.html',
  styleUrls: ['./reporte.component.css']
})
export class ReporteComponent implements OnInit {
  productos: any = [];
  productos_rel: any = [];

  constructor(private productoService: ProductoService) { }


  ngOnInit(): void {
    this.productoService.obtenerProductos().subscribe((respuesta) => {
      this.productos_rel = respuesta as any;
    });

    this.productoService.getAllProducts().subscribe((data) => {
      this.productos = data;
    });
  }

  getProductoByName(producto: string) {
    this.productoService
      .getProductosByName(producto)
      .subscribe((data) => {
        this.productos = [];
        for (const p in data) {
          this.productos.push((data as any)[p]);
        }
      });
  }

  getProductoAll() {
    this.productoService.getAllProducts().subscribe((data) => {
      this.productos = data;
    });
  }
}
