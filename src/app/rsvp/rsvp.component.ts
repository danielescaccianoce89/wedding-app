import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { AlertService } from '../servizi/alert.service';
import { RestService } from '../servizi/rest.service';
import { NgxUiLoaderModule, NgxUiLoaderService } from 'ngx-ui-loader';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import e from 'express';

@Component({
  selector: 'app-rsvp',
  templateUrl: './rsvp.component.html',
  styleUrl: './rsvp.component.css',
})
export class RsvpComponent implements OnInit {
  [x: string]: any;
  private apiUrl = 'http://localhost:8090/api'//'https://fake-json-api.mock.beeceptor.com/users'; // Sostituisci con il tuo URL
  data: any;

  constructor(
    private http: HttpClient,
    private restService: RestService,
    private ngxLoader: NgxUiLoaderService,
    private alertService: AlertService
  ) {}
  ngOnInit(): void {}

  menuSelectedValueText!: string;
  stepActive: number = 0;
  guestSelected: boolean = false;
  idGuestSelected!: number;
  selectedMenu = 0;
  sendDataGuest: any = {};
  guests: any;
  isEnabledOtherAllergiesBox: Array<any> = [];
  // guestsSelected: any;

  guestsSelected = [
    { id: 1, name: 'Apollonio', conferma: true },
    { id: 2, name: 'Vincenzina', conferma: true },
  ];

  onMenuSelectionChange(ev: any) {
    switch (ev.value) {
      case '1':
        this.menuSelectedValueText = 'Pesce';
        break;
      case '2':
        this.menuSelectedValueText = 'Carne';
        break;
      case '3':
        this.menuSelectedValueText = 'Vegetariano';
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
    return val === '99';
  }

  searchGuests(formData: any, stepNum: number) {
    this.ngxLoader.start();
    this.restService.getGuests(this.apiUrl + "/getGuestsByName?guestName=").subscribe(
      (response) => {
        this.guests = response;

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
    this.ngxLoader.start();
    this.restService.getGuestById(this.apiUrl, this.idGuestSelected).subscribe(
      (response) => {
        //this.guestsSelected = [response];
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
    let guestsData: any = {};
    guestsData.id = this.idGuestSelected; // id padre (racchiude una solo persona o coppie)
    guestsData.guests = formData.value;

    this.alertService.showDialogConfirm();
    console.log(JSON.stringify(guestsData));
  }

  saveFormData(formData: any) {
    this.sendDataGuest = {};
    this.sendDataGuest.id = this.idGuestSelected;
    this.sendDataGuest.children = formData.value;
    console.log(this.sendDataGuest);
  }

  saveGuestSelected() {}

  onSelezione(formInfoGuest: any) {
    console.log('passaggio');
    console.log(formInfoGuest);
  }

  goToStep(stepNum: number) {
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
