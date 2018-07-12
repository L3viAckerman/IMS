export class Entity {
  Id: string = "";
  IsEdit: boolean = false;
  IsSelected: boolean = false;
  IsActive: boolean = false;

  constructor() {

  }

  Clone(): Entity {
    return JSON.parse(JSON.stringify(this));
  }
  Apply(Entity: Entity) {

  }
}

