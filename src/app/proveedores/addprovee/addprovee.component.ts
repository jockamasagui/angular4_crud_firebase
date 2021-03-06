import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ProveedoresService } from '../../servicios/proveedores.service';

@Component({
  selector: 'app-addprovee',
  templateUrl: './addprovee.component.html',
  styleUrls: ['./addprovee.component.css']
})
export class AddproveeComponent implements OnInit {
  proveedorForm: FormGroup;
  proveedor: any;

  provincias: string[] = [ 'Álava','Albacete','Alicante','Almería','Asturias','Ávila','Badajoz',
     'Barcelona','Burgos', 'Cáceres', 'Cádiz','Cantabria','Castellón','Ciudad Real','Córdoba',
     'La Coruña','Cuenca','Gerona','Granada','Guadalajara', 'Guipúzcoa','Huelva','Huesca',
     'IslasBaleares','Jaén','León','Lérida','Lugo','Madrid', 'Málaga','Murcia','Navarra','Orense',
     'Palencia','Las Palmas','Pontevedra','La Rioja','Salamanca','Segovia','Sevilla','Soria',
     'Tarragona','Santa Cruz de Tenerife','Teruel','Toledo','Valencia','Valladolid','Vizcaya',
     'Zamora','Zaragoza' ]

  constructor(private pf: FormBuilder, private _proveedoresService:ProveedoresService) {
    this.proveedor = {
      nombre: '',
      cif: '',
      direccion: '',
      cp: '',
      localidad: '',
      provincia: '',
      telefono: null,
      email: '',
      contacto: ''
    }
  }

  ngOnInit() {
      this.proveedorForm = this.pf.group({
        nombre: new FormControl('', Validators.required ),
        cif: new FormControl('', Validators.required ),
        direccion: new FormControl('', Validators.required ),
        cp: new FormControl('', Validators.required ),
        localidad: new FormControl('', Validators.required ),
        telefono: new FormControl('', Validators.required ) ,
        provincia: new FormControl('', Validators.required ) ,
        email: new FormControl('', Validators.required ),
        contacto: new FormControl('', Validators.required )
    });

  }

  onSubmit() {
    this.proveedor = this.saveProveedor();
    this._proveedoresService.postProveedor(this.proveedor).subscribe(newPress => {

    })
    this.proveedorForm.reset();
  }

  saveProveedor(){
    const saveProovedor = {
      nombre: this.proveedorForm.get('nombre').value,
      cif: this.proveedorForm.get('cif').value,
      direccion: this.proveedorForm.get('direccion').value,
      cp: this.proveedorForm.get('cp').value,
      localidad: this.proveedorForm.get('localidad').value,
      provincia: this.proveedorForm.get('provincia').value,
      telefono: this.proveedorForm.get('telefono').value,
      email: this.proveedorForm.get('email').value,
      contacto: this.proveedorForm.get('contacto').value
    };
    return saveProovedor;
  }

}
