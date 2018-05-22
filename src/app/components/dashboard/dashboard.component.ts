import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(public dataService: DataService) {
    console.log("proto", this.dataService.devices);
    // debugger;
  }

  ngOnInit() {
    this.draw();

    // let container = document.getElementById('visualization');

    // var options = {};
    // var timeline = new vis.Timeline(container, data, options);



  }

  draw() {
    // create nodes



    // specify options
    let options = {
      stabilize: false,
      edges: {
        width: 2,
        style: 'arrow',
        color: 'gray'
      },
      nodes: {
        // default for all nodes
        fontFace: 'times',
        shape: 'circle',
        color: {
          border: 'orange',
          background: 'yellow',
          highlight: {
            border: 'darkorange',
            background: 'gold'
          }
        }
      },
      physics: { barnesHut: { springLength: 400 } }, // this is the correct way to set the length of the springs
      groups: {
        black: {
          // defaults for nodes in this group
          radius: 3,
          color: 'black',
          fontColor: 'white',
          fontSize: 12,
          fontFace: 'courier'
        },
        gray: {
          color: {
            border: 'black',
            background: 'gray',
            highlight: {
              border: 'black',
              background: 'lightgray'
            }
          },
          fontSize: 18,
          fontFace: 'arial',
          shape: 'circle'
        },
        white: {
          color: {
            border: 'black',
            background: 'white'
          },
          fontColor: 'red',
          shape: 'image',
          image: 'https://android-ui-utils.googlecode.com/hg-history/c6ea7998979878af070da0c363324c436e8a6e79/asset-studio/dist/res/clipart/icons/alerts_and_states_airplane_mode_off.svg'
        }
      }
    };

debugger;
    // create the network
    var container = document.getElementById('visualization');
    var data = {
      nodes: this.dataService.nodes,
      edges: this.dataService.edges
    };
    network = new vis.Network(container, data, options);
  }

}
