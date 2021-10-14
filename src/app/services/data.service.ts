import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { JobModel } from '../models/model';

@Injectable( {
               providedIn: 'root'
             } )
export class DataService {

  constructor( private afs: AngularFirestore ) { }

  sendMessage( email: string, name: string, message: string ): void {
    this.afs.collection( 'messages' )
        .add( { email, name, message } );
  }

  fetchAllWork(): AngularFirestoreCollection<JobModel> {
    return this.afs.collection<JobModel>( 'jobs' );
  }

}
