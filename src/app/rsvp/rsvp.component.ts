import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { AlertService } from '../servizi/alert.service';
import { RestService } from '../servizi/rest.service';
import { NgxUiLoaderModule, NgxUiLoaderService } from 'ngx-ui-loader';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import e from 'express';
import { MatTooltip } from '@angular/material/tooltip';

declare var Swal: any; /* declare global variable fro SweetAlert usage */

@Component({
  selector: 'app-rsvp',
  templateUrl: './rsvp.component.html',
  styleUrl: './rsvp.component.css'
})
export class RsvpComponent implements OnInit {
  @ViewChild('guestNameInput', { read: MatTooltip }) tooltipName!: MatTooltip;
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
  allGuestsConfirmYes: boolean = false;

  tooltipNameDisabled = true;

  ngOnInit(): void {
    //  Swal.fire({
    //    title: 'Operazione riuscita',
    //    text: 'Grazie per la tua conferma',
    //    icon: 'success',
    //    imageUrl: "/img/vespetta.jpg",
    //    imageWidth: "25vh",
    //    imageHeight: "18vh",
    //    imageAlt: "Dani&Lory"
    //  });
  }

  toogleConfirmationGuest(idx: number, confirm: boolean) {
    this.guestsHasConfirmed[idx] = confirm;
  }

  willAllGuestsBePresent() {
    debugger;

    if (this.guestsHasConfirmed.length === 0) return false;
    else {
      for (let i = 0; i < this.guestsHasConfirmed.length; i++) {
        if (this.guestsHasConfirmed[i] === true) return true;
      }
      return false;
    }
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
    debugger;
    if (!formData.valid) {
      console.log('FORM NON VALIDO');
    } else {
      console.log('FORM VALIDO');
      this.ngxLoader.start();
      this.guestNames = [];
      this.restService
        .getApi('/getGuestsByName?guestName=' + formData.value.guestName)
        .subscribe(
          (response: any) => {
            this.guests = response.data;
            let i = 0;
            this.guests.forEach((g: any) => {
              g.confirm === 'Y'
                ? (this.guestNames[i] =
                    g.name +
                    "&nbsp;&nbsp;<i class='fa-regular fa-circle-check'>")
                : (this.guestNames[i] = g.name);
              i++;
            });
            console.log(this.guestNames);
            if (stepNum !== -1) this.stepActive = stepNum;
            else console.log('button disabilitato');
            this.ngxLoader.stop();
          },
          (error) => {
            console.error('Error occurred:', error);
            Swal.fire({
              icon: 'error',
              title: 'Oops...',
              text: 'Qualcosa è andato storto. Contatta gli sposi.',
            });
            this.ngxLoader.stop();
          }
        );
    }
  }

  getGuestSelected(stepNum: number) {
    this.guestsHasConfirmed = [];
    this.guestsData = {};
    this.ngxLoader.start();
    this.restService
      .getApi('/getGuestsById?id=' + this.idGuestSelected)
      .subscribe(
        (response: any) => {
          debugger;
          this.guestsSelected = response.data;
          console.log('Data received:', response.data);

          if (stepNum !== -1) this.stepActive = stepNum;
          else console.log('button disabilitato');

          this.ngxLoader.stop();
        },
        (error) => {
          console.error('Error occurred:', error);
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Qualcosa è andato storto. Contatta gli sposi.',
          });
          this.ngxLoader.stop();
        }
      );
  }

  saveGuestsData(formData: any) {
    debugger;

    if (!formData.valid) {
      console.log('FORM NON VALIDO');
    } else {
      this.guestsData.guests = Object.values(formData.value.guestGroup);
      this.guestsData.idGuestFather = this.idGuestSelected; // id padre (racchiude una solo persona o coppie)
      this.guestsData.childrenSelection = formData.value.childrenSelection;
      this.guestsData.guests.forEach((e: any) => {
        e.allergySelected === '' ? (e.allergySelected = []) : e.allergySelected;
        e.confirmSelection === undefined || e.confirmSelection === ''
          ? (e.confirmSelection = e['confirmSelection_' + e.id])
          : e.confirmSelection;
      });
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
              (response: any) => {
                console.log('Data received:', response.data);
                this.goToStep(0);
                this.ngxLoader.stop();
                Swal.fire({
                  title: 'Operazione riuscita',
                  text: 'Grazie per la tua conferma',
                  icon: 'success',
                  imageUrl: '/img/vespetta.jpg',
                  imageWidth: '25vh',
                  imageHeight: '18vh',
                  imageAlt: 'Dani&Lory',
                });
              },
              (error) => {
                console.error('Error occurred:', error);
                Swal.fire({
                  icon: 'error',
                  title: 'Oops...',
                  text: 'Qualcosa è andato storto. Contatta gli sposi.',
                });
                this.ngxLoader.stop();
              }
            );
        }
      });
    }
  }

  goToStep(stepNum: number) {
    debugger;
    this.stepActive = stepNum;
  }

  onGuestChecked(event: any) {
    debugger;
    this.guestSelected = true;
    this.idGuestSelected = event.source.value;
  }

  // selectCloserRadioBtn(ev: any) {
  //   let target =
  //     ev.target.parentElement.childNodes[0].childNodes[0].childNodes[0];
  //   target.checked = 'true';
  //   this.idGuestSelected = target.value;
  //   this.guestSelected = true;

  //   console.log('idGuestSelected: ' + this.idGuestSelected);
  // }
}
