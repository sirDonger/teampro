import { ServicedialogboxComponent } from './servicedialogbox/servicedialogbox.component';
import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'xb-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {

 

  servicesData = [
    {
      'image':  'http://s8.staging-host.com/xpbid/images/profile1.jpg',
      'name':  'John Lennon',
      'job':  'Electronic Service Provider',
      'comment':  ' This is Photoshops version of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin',
    },
    {
      'image':  'http://s8.staging-host.com/xpbid/images/profile2.jpg',
      'name':  'Alex Lennon',
      'job':  'HR Manager',
      'comment':  'Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin',
    },
    {
      'image':  'http://s8.staging-host.com/xpbid/images/profile1.jpg',
      'name':  'Ruth Blair',
      'job':  'Electronic Service Provider',
      'comment':  'Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, This is Photoshops version of Lorem Ipsum. ',
    },
    {
      'image':  'http://s8.staging-host.com/xpbid/images/profile2.jpg',
      'name':  'Steverd Lennon',
      'job':  'Electronic Technical Department',
      'comment':  ' This is Photoshops vers auctor aliquet. Aenean sollicitudin',
    },
    {
      'image':  'http://s8.staging-host.com/xpbid/images/profile1.jpg',
      'name':  'Lennon John',
      'job':  'Mechanical Service Provider',
      'comment':  ' This is Photoshops version of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin',
    },
    {
      'image':  'http://s8.staging-host.com/xpbid/images/profile2.jpg',
      'name':  'John Lennon',
      'job':  'Web Service Provider',
      'comment':  ' This is Photoshops  Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin ibh vel velit auctor aliquet. Aenean sollicitudin',
    },
  ];


  carouselOptions = {
    margin: 25,
    nav: true,
    responsiveClass: true,
    responsive: {
      0: {
        loop: true,
        items: 1,
        nav: true
      },
      600: {
        loop: true,
        items: 1,
        nav: true
      },
      1000: {
        items: 2,
        nav: true,
        loop: true,
      },
      1500: {
        items: 2,
        nav: true,
        loop: true,
      }
    }
  }


  constructor(public dialog: MatDialog) {}

  ngOnInit() {}

  

  openDetailDBx(service): void {
    const dialogRef = this.dialog.open(ServicedialogboxComponent, {
      // width: '250px',
      data: service
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed result ', result);
       
    });
  }
  
}
