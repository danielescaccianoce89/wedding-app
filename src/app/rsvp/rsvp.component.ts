import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { AlertService } from '../servizi/alert.service';
import { RestService } from '../servizi/rest.service';
import { NgxUiLoaderModule, NgxUiLoaderService } from 'ngx-ui-loader';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import e from 'express';

declare var Swal: any; /* declare global variable fro SweetAlert usage */

@Component({
  selector: 'app-rsvp',
  templateUrl: './rsvp.component.html',
  styleUrl: './rsvp.component.css',
})
export class RsvpComponent implements OnInit {
  [x: string]: any;
  data: any;

  constructor(
    private http: HttpClient,
    private restService: RestService,
    private ngxLoader: NgxUiLoaderService,
    private alertService: AlertService
  ) {}

  menuSelectedValueText: Array<any> = [];
  stepActive: number = 0;
  guestSelected: boolean = false;
  idGuestSelected!: number;
  selectedMenu = 0;
  sendDataGuest: any = {};
  guests: any;
  isEnabledOtherAllergiesBox: Array<any> = [];
  guestsSelected: any;
  confirmSelection: Array<any> = [];
  guestsHasConfirmed: Array<any> = [];
  guestNames: Array<any> = [];
  guestsData: any = {};
  // allergySelected: Array<any> = [];

  ngOnInit(): void {
  }

  toogleConfirmationGuest(idx: number, confirm: boolean) {
    this.guestsHasConfirmed[idx] = confirm;
  }

  onMenuSelectionChange(idx: number, ev: any) {
    switch (ev.value) {
      case '1':
        this.menuSelectedValueText[idx] = 'Pesce';
        break;
      case '2':
        this.menuSelectedValueText[idx] = 'Carne';
        break;
      case '3':
        this.menuSelectedValueText[idx] = 'Vegetariano';
        break;
      default:
        break;
    }
  }

  onConfirmSelectionChange(idx: number, ev: any) {
    this.confirmSelection[idx] = ev.target.value;
  }

  checkVisibilityOtherAllergiesBox(idx: number, ev: any) {
    debugger;
    let filtered = ev.value.filter(this.checkValue);
    let otherIsChecked = filtered.length === 0 ? false : true;

    this.isEnabledOtherAllergiesBox[idx] = otherIsChecked;
  }

  checkValue(val: String) {
    return val === 'Altro';
    // return val === '99';
  }

  searchGuests(formData: any, stepNum: number) {
    this.ngxLoader.start();
    this.guestNames = [];
    this.restService.getApi("/getGuestsByName?guestName=" + formData.value.guestName).subscribe(
      (response) => {
        this.guests = response;
        let i = 0;
        this.guests.forEach( (g:any) => {
          g.confirm === "Y" ? this.guestNames[i] = g.name + "&nbsp;&nbsp;<i class='fa-regular fa-circle-check'>" : this.guestNames[i] = g.name;  
          i++;    
        })
        console.log(this.guestNames);
        if (stepNum !== -1) this.stepActive = stepNum;
        else console.log('button disabilitato');
        this.ngxLoader.stop();
      },
      (error) => {
        console.error('Error occurred:', error);
        this.ngxLoader.stop();
      }
    );
  }

  getGuestSelected(stepNum: number) {
    this.guestsHasConfirmed = [];
    this.guestsData = {};
    this.ngxLoader.start();
    this.restService.getApi("/getGuestsById?id=" + this.idGuestSelected).subscribe(
      (response) => {
        debugger;
        this.guestsSelected = response.peopleById;
        console.log('Data received:', response);

        if (stepNum !== -1) this.stepActive = stepNum;
        else console.log('button disabilitato');

        this.ngxLoader.stop();
      },
      (error) => {
        console.error('Error occurred:', error);
        this.ngxLoader.stop();
      }
    );
  }

  saveGuestsData(formData: any) {
    debugger;
    this.guestsData.guests = Object.values(formData.value);    
    this.guestsData.idGuestFather = this.idGuestSelected; // id padre (racchiude una solo persona o coppie)

    this.guestsData.guests.forEach( (e:any) => {
      e.allergySelected === "" ? e.allergySelected = [] : e.allergySelected;
      (e.confirmSelection === undefined || e.confirmSelection === "") ?  e.confirmSelection = e['confirmSelection_' + e.id] : e.confirmSelection;
    })
    // this.alertService.showDialogConfirm();
    console.log(this.guestsData);
    Swal.fire({
      title: 'Sei sicuro?',
      text: 'La tua preferenza non potrà essere più cambiata',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: 'blue',
      cancelButtonColor: 'red',
      confirmButtonText: 'Salva',
    }).then((result: any) => {
      if (result.isConfirmed) {
        this.ngxLoader.start();
        this.restService
          .postApi('/updateGuestsPreferences', this.guestsData)
          .subscribe(
            (response) => {
              debugger;
              console.log('Data received:', response);
              this.goToStep(0);
              this.ngxLoader.stop();
              Swal.fire({
                title: 'Operazione riuscita',
                text: 'La tua preferenza è stata salvata',
                icon: 'success',
              });
            },
            (error) => {
              console.error('Error occurred:', error);
              this.ngxLoader.stop();
            }
          );
      }
    });
  }

  goToStep(stepNum: number) {
    debugger;
    this.stepActive = stepNum;
  }

  onGuestChecked(event: any) {
    console.log(event.target.value);
    this.guestSelected = true;
  }

  selectCloserRadioBtn(ev: any) {
    let target =
      ev.target.parentElement.childNodes[0].childNodes[0].childNodes[0];
    target.checked = 'true';
    this.idGuestSelected = target.value;
    this.guestSelected = true;

    console.log('idGuestSelected: ' + this.idGuestSelected);
  }
}
