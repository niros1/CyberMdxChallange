import { Injectable } from '@angular/core';
import * as data from '../../mock/data.json';


@Injectable()
export class DataService {

  private deviceData = data as any;
  public protocols: any;
  public links: any;
  public devices: any;
  public nodes = [];
  // private protoToNodeMap = {};
  public edges = [];
  constructor() {

    this.protocols = this.deviceData.incoming_protocols;
    this.links = this.deviceData.incoming_links;
    this.devices = this.deviceData.incoming_devices;

    this.createAdges();
    this.createNodes();
  }

  private createNodes() {
    this.protocols.forEach(element => {
      this.nodes.push({
        'id': element.name
      });
      // this.protoToNodeMap[element.name] = index;
    });

    this.devices.forEach(element => {
      this.nodes.push({
        'id': element.deviceId
      });
    });
  }

  private createAdges(){
    this.links.forEach(element => {
      this.edges.push({'from': element.from, 'to': element.to});
    });
  }

}
