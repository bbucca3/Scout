import geolib from 'geolib';

class Notifications {
  constructor() {
    this.notifications = [];
    this.notificationsToBeFired = [];
    this.DistanceThresholdsToMeters = {
      1: 30,
      2: 152,
      3: 609,
      4: 3218,
      5: 8046,
      6: 16093,
      7: 40233
    }
  }

  fetchNotifications(userid, geolocation){
    //do a get request to the server
  }

  intervalFetchNotifications(milliseconds){
  }

  activateNotifications(){
    //scroll through this.notifications, 
    //and if one is within distance
  }

  intervalActivateNotifications(){
  }



}

const notifications = new Notifications();

export default notifications;
