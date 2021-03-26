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
