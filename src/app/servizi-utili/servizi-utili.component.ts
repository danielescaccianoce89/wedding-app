import { Component } from '@angular/core';

@Component({
  selector: 'app-servizi-utili',
  templateUrl: './servizi-utili.component.html',
  styleUrl: './servizi-utili.component.css',
})
export class ServiziUtiliComponent {
  
  Arr = Array;

  hairstyleItems = [
    {
      label: 'Peter Image Lab',
      mapsUrl: 'https://maps.app.goo.gl/XV6asDEzcifaPPUq6',
    },
    {
      label: 'Haircolormaliá',
      mapsUrl: 'https://maps.app.goo.gl/WMfMGBJuu6UHQoec7',
    },
    {
      label: 'Letizia Parisi Parrucchieri',
      mapsUrl: 'https://maps.app.goo.gl/iQPasDwTVcMR5Trp9',
    },
    {
      label: 'Parrucchiere Antonio Gionfriddo',
      mapsUrl: 'https://maps.app.goo.gl/dfFvxHpD187UFNdV6',
    },
    {
      label: 'Liliana Amato | Be Blonde',
      mapsUrl: 'https://maps.app.goo.gl/zDakYntUnvTpxAyQA',
    },
  ];

  makeupItems = [
    {
      label: 'Bellinforma',
      mapsUrl: 'https://maps.app.goo.gl/RTe5gRbaW55ztpXv5',
    },
    {
      label: 'SeSi beautyconcept',
      mapsUrl: 'https://maps.app.goo.gl/LHchwcMzUYVPfUf5A',
    },
    {
      label: 'Marilisa Amore Bellezza Permanente',
      mapsUrl: 'https://maps.app.goo.gl/RcDQUGpWFcUSVGWA8',
    },
  ];

  foodItems = [
    {
      label: 'Bar Centrale',
      mapsUrl: 'https://maps.app.goo.gl/DtLe3FDYLiCvfREk9',
    },
    {
      label: 'Mazzarella Cafè',
      mapsUrl: 'https://maps.app.goo.gl/v2JAgrVar5SJrF8QA',
    },
    {
      label: 'Bar Ariete',
      mapsUrl: 'https://maps.app.goo.gl/rpSikXXRCUzfNehNA',
    },
    {
      label: 'Incontri Cafè',
      mapsUrl: 'https://maps.app.goo.gl/puY7Dry4gqiCJNWu7',
    },
    {
      label: 'After Hour Bar',
      mapsUrl: 'https://maps.app.goo.gl/hwiYgBh8zXmvkpcU8',
    },
    {
      label: 'Pasticceria Brancato',
      mapsUrl: 'https://maps.app.goo.gl/RQjRAds3MUXBMK3C6',
    },
  ];

  emergencyItems = [
    {
      label: 'Giusy Sartoria',
      mapsUrl: 'https://maps.app.goo.gl/4VK9kdKHuAZvWVbU7',
    },
    {
      label: 'Farmacia',
      mapsUrl: 'https://maps.app.goo.gl/suSJjExtwk5VMm2z8',
    },
    {
      label: 'Ospedale Umberto I Pronto Soccorso',
      mapsUrl: 'https://maps.app.goo.gl/MexgihGMDC3REoeT8',
    },
  ];

  hairstyleBreaksNumber = 1;
  makeupBreaksNumber = 3;
  foodBreaksNumber = 0;
  emergencyBreaksNumber = 4;
}
