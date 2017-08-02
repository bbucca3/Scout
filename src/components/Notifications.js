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

  fetchNotifications(userid){
    console.log('fetch notifications is firing!')
    fetch(`http://localhost:3000/api/notifications?userId=${userid}`)
    .then(res => res.json())
    .then(data => {
      console.log('heres the data we get from fetch notifcs ' ,data);
      this.notifications.push(data);
    })
    .catch(err => console.log('this is the err!! in fetch notifics ', err));
  }

  intervalFetchNotifications(userid, milliseconds){
    setInterval(()=>{console.log('this is firing')}, 2000)
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
