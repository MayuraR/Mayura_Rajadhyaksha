export class restaurant_and_menu {

    constructor(
      public name: string,
      public menu : []
    ) {}
}

const rest1 = new restaurant_and_menu('rest1', [item1, item2]);
const rest2 = new restaurant_and_menu('rest1', [item1, item2]);
const rest3 = new restaurant_and_menu('rest1', [item1, item2]);

export {rest1, rest2, rest3}