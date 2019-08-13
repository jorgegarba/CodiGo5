import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.component.html',
  styleUrls: ['./mapa.component.css']
})
export class MapaComponent {

  lat: number = 51.678418;
  lng: number = 7.809007;


  constructor(
    public dialogRef: MatDialogRef<MapaComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {
      this.lat = +data.lat;
      this.lng = +data.lon;
    }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
