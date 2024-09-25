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
      socialUrl: 'https://www.instagram.com/peter_imagelab/'
    },
    {
      label: 'Haircolormaliá',
      mapsUrl: 'https://maps.app.goo.gl/WMfMGBJuu6UHQoec7',
      socialUrl: 'https://www.instagram.com/haircolormalia_floridia/'
    },
    {
      label: 'Letizia Parisi Parrucchieri',
      mapsUrl: 'https://maps.app.goo.gl/iQPasDwTVcMR5Trp9',
      socialUrl: 'https://www.instagram.com/letiziaparisiparrucchieri/'
    },
    {
      label: 'Parrucchiere Antonio Gionfriddo',
      mapsUrl: 'https://maps.app.goo.gl/dfFvxHpD187UFNdV6',
      socialUrl: 'https://www.instagram.com/gionfriddohairstylist/'
    },
    {
      label: 'Liliana Amato | Be Blonde',
      mapsUrl: 'https://maps.app.goo.gl/zDakYntUnvTpxAyQA',
      socialUrl: 'https://www.instagram.com/lilianaamatobeblonde/'
    },
    {
      label: 'Francesco Fashion Style',
      mapsUrl: 'https://maps.app.goo.gl/UYzvJB4gC94EmooW6',
      socialUrl: 'https://www.instagram.com/francescofashionstyle/'
    },
    {
      label: 'Angelita Mollica',
      mapsUrl: 'https://maps.app.goo.gl/ur3CNiVVxUd8nJVW7',
      socialUrl: 'https://www.instagram.com/angelitamollica/'
    },
    {
      label: 'Idee in testa',
      mapsUrl: 'https://maps.app.goo.gl/jNDJFMokpTJYpdxi6',
      socialUrl: 'https://www.instagram.com/elisabettaaliffi/'
    }
  ];

  makeupItems = [
    {
      label: 'Bellinforma',
      mapsUrl: 'https://maps.app.goo.gl/RTe5gRbaW55ztpXv5',
      socialUrl: 'https://www.instagram.com/bellinforma_pinellamidolo/'
    },
    {
      label: 'SeSi beautyconcept',
      mapsUrl: 'https://maps.app.goo.gl/LHchwcMzUYVPfUf5A',
      socialUrl: 'https://www.instagram.com/sesibeautyconcept/'
    },
    {
      label: 'Marilisa Amore Bellezza Permanente',
      mapsUrl: 'https://maps.app.goo.gl/RcDQUGpWFcUSVGWA8',
      socialUrl: 'https://www.instagram.com/marilisamore/'
    },
    {
      label: 'Excellence Estetica e Benessere',
      mapsUrl: 'https://maps.app.goo.gl/12WAu8FNEcGyPGCJ7',
      socialUrl: 'https://www.instagram.com/excellence_esteticaebenessere/'
    },
    {
      label: 'Centro Oriental',
      mapsUrl: 'https://maps.app.goo.gl/MKEV3Ahd1kgESnQQ7',
      socialUrl: 'https://www.instagram.com/centro_estetico_oriental/'
    }
  ];

  barItems = [
    {
      label: 'Bar Centrale',
      mapsUrl: 'https://maps.app.goo.gl/DtLe3FDYLiCvfREk9',
      socialUrl: 'https://www.instagram.com/barcentralefloridia/'
    },
    {
      label: 'Mazzarella Cafè',
      mapsUrl: 'https://maps.app.goo.gl/v2JAgrVar5SJrF8QA',
      socialUrl: 'https://www.instagram.com/mazzarellacafe/'
    },
    {
      label: 'Incontri Cafè',
      mapsUrl: 'https://maps.app.goo.gl/puY7Dry4gqiCJNWu7',
      socialUrl: 'https://www.instagram.com/incontri_caffetteria_gourmet/'
    },
    {
      label: 'Pasticceria Brancato',
      mapsUrl: 'https://maps.app.goo.gl/RQjRAds3MUXBMK3C6',
      socialUrl: 'https://www.instagram.com/brancatopasticceria/'
    }
  ];

  foodItems = [
    {
      label: 'Memento',
      mapsUrl: 'https://maps.app.goo.gl/rpSikXXRCUzfNehNA',
      socialUrl: 'https://www.instagram.com/memento7floridia/'
    },
    {
      label: 'Casa Mia',
      mapsUrl: 'https://maps.app.goo.gl/Kr3VPyQQFChLnaA7A',
      socialUrl: 'https://www.instagram.com/casamiafloridia/'
    },
    {
      label: 'Ficostation',
      mapsUrl: 'https://maps.app.goo.gl/5hEk3zzGUWbMBKNZ8',
      socialUrl: 'https://www.instagram.com/ficostation/'
    },
    {
      label: 'Umore e Luce',
      mapsUrl: 'https://maps.app.goo.gl/U3jZ5wbsTLyhitef6',
      socialUrl: 'https://www.instagram.com/umore_e_luce/'
    },
    {
      label: 'Aquarium',
      mapsUrl: 'https://maps.app.goo.gl/jTXADQdcCqY6cWjw7',
      socialUrl: 'https://www.instagram.com/vecchioaquarium/'
    },
    {
      label: 'Villa del Casale',
      mapsUrl: 'https://maps.app.goo.gl/cwY7v8Aie88kRN7X6',
      socialUrl: 'https://www.instagram.com/villadelcasale/'
    }
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
    }
  ];

  hairstyleBreaksNumber = 1;
  makeupBreaksNumber = 3;
  foodBreaksNumber = 0;
  emergencyBreaksNumber = 4;
}
