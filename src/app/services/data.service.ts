import {Injectable} from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private afs: AngularFirestore) { }

  sendMessage(email: string, name: string, message: string): void {
    this.afs.collection('messages')
      .add({email, name, message});
    // .then(() => this.openSnackBar('Message has been successfully.', 'close'))
    // .catch(() => this.openSnackBar('The servers are not responding. Please try again.', 'close'));
  }

  // tslint:disable-next-line:typedef
  // openSnackBar(message: string, action: string) {
  //   this.snackBar.open(message, action, {
  //     duration: 2000,
  //   });
  // }

}
