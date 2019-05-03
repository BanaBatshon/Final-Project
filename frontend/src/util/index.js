import axios from 'axios';

export const postToServer = (menuItem) => {
  for ( let k = 0; k < menuItem.length; k++ ) {
    menuItem[0].tags = [menuItem[0].tags];
    menuItem[0].restaurantId=1;
    axios
    .post ('http://localhost:3001/items', (menuItem[k]) )
  }
}