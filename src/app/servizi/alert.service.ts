import { Injectable } from '@angular/core';

declare var Swal: any; /* declare global variable fro SweetAlert usage */

@Injectable({
  providedIn: 'root'
})
export class AlertService {

  constructor() { }

  showSuccess(message: string, title: string = 'Operazione riuscita') {
    Swal.fire({
      title: title,
      text: message,
      icon: 'success',
      confirmButtonText: 'OK'
    });
  }

  showError(message: string, title: string = 'Errore') {
    Swal.fire({
      title: title,
      text: message,
      icon: 'error',
      confirmButtonText: 'OK'
    });
  }

  showDialogConfirm() {
    Swal.fire({
      title: "Sei sicuro?",
      text: "La tua preferenza non potrà essere più cambiata",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "blue",
      cancelButtonColor: "red",
      confirmButtonText: "Salva"
    }).then((result: any) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "Operazione riuscita",
          text: "La tua preferenza è stata salvata",
          icon: "success"
        });
      }
    });
  }

}
