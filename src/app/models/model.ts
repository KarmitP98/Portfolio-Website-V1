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

export class JobModel {
  from!: string;
  to!: string;
  companyName!: string;
  title!: string;
  description!: string;
  duties!: string[];
}
