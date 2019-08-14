import { Component, OnInit } from '@angular/core';
import {WebsocketService} from './../../services/websocket.service';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private _sWebsocket:WebsocketService) { }

  ngOnInit() {
  }

}
