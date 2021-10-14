export class ProjectModel {
  title = '';
  imageURL = '';
  altText = '';
  githubLink = '';
  tags: TagModel[] = [];
  liveLink = '';
}

export class TagModel {
  name = '';
  class = '';
}

export class AwardModel {
  title = '';
  imageURL = '';
  altText = '';
}

import firebase from 'firebase/compat';
import DocumentReference = firebase.firestore.DocumentReference;

export class UserModel {
  id!: string;
  email!: string;
  fullName!: string;
  password!: string;
  profilePic!: string;
}

export class CountryModel {
  code!: string;
  name!: string;
}

export class CompanyModel {
  cId!: string;
  name!: string;
  aka!: string;
  website!: string;
  addressLine1!: string;
  postalCode!: string;
  city!: string;
  state!: string;
  country!: CountryModel;
  banner!: string;
  phone!: string;
  addressLine2?: string;
  background?: string;
  color?: string;

  constructor() {}
}

export class JobModel {
  id!: string;
  company!: DocumentReference<CompanyModel>;
  position!: string;
  status!: string;
  pay!: number;
  startDate!: Date;
  responsibilities: string[] = [ '', '', '', '', '' ];
  endDate?: Date;
  description?: string;
  companyName?: string | undefined;

  constructor() {}
}
