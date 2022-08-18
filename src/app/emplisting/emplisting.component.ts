import { Component, OnInit } from '@angular/core';
import { MasterService } from '../service/master.service';

@Component({
  selector: 'app-emplisting',
  templateUrl: './emplisting.component.html',
  styleUrls: ['./emplisting.component.css']
})
export class EmplistingComponent implements OnInit {
 
  emplisting:any;
  constructor(private service: MasterService) { 
    this.service.GetAllEmployee().subscribe(result => {
      this.emplisting = result;
    })
  }

  ngOnInit(): void {
  }

}
