import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MatDialog } from '@angular/material';
import { Router, ActivatedRoute } from '@angular/router';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-afficher',
  templateUrl: './afficher.component.html',
  styleUrls: ['./afficher.component.css']
})
export class AfficherComponent implements OnInit {
  id:any;
  user:any;

  constructor(
    private fb: FormBuilder,
    public dialog: MatDialog,
    private router: Router,
    private actR: ActivatedRoute,
    public firebaseService: UsersService
  )  { }

  ngOnInit() {
    this.id = this.actR.snapshot.paramMap.get('id');
    console.log(this.id);
    this.firebaseService.afficherUser(this.id)
    .subscribe(result => {
      console.log(result.data().email);
      this.user=result.data();
      console.log(this.user);
    })
    
  
  }

}
