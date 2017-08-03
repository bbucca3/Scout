import geolib from 'geolib';
import PushNotification from 'react-native-push-notification';

class Notifications {
  constructor() {
    this.notifications = [];
    this.notificationsToBeFired = [];
    this.distanceThresholdsToMeters = {
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
      this.notifications.push(...data);
    })
    .catch(err => console.log('this is the err!! in fetch notifics ', err));
  }

  intervalFetchNotifications(userid, milliseconds){
    setInterval(()=>{fetchNotifications(userid)}, milliseconds)
  }

  activateNotifications(){
    console.log('active notifications is firing!!')
    navigator.geolocation.getCurrentPosition((position)=>{
      console.log('this is what the current position looks like ', position)
      this.notifications.forEach((notification)=>{
        console.log('this is notification ', notification)
        const notificationCoordinates = {
          latitude: JSON.parse(notification.geotag).latitude,
          longitude: JSON.parse(notification.geotag).longitude
        };
        const userCoordinates = {
          latitude: position.coords.latitude,
          longitude: position.coords.longitude
        }
        const distance = geolib.getDistance(notificationCoordinates, userCoordinates);
        if(distance < this.distanceThresholdsToMeters[notification.location_threshold]){
          this.notificationsToBeFired.push(notification);
        }
        // if(geolib)
        // const distanceBetweenUserAndNotification = geolib.
        // console.log('this is what a notification object looks like ', notification)
        // console.log('this is what the longitude ', JSON.parse(notification.geotag).longitude)
        // if()

      })
      //in here I'm going to use geo lib to compare all of the notifications

    })



    // PushNotification.localNotificationSchedule({
    //   message: "HereNow Notification Message", // (required)
    //   number: 1,
    //   date: new Date(Date.now() + (10 * 1000)) // in 3 secs
    // });  

  }

  intervalActivateNotifications(){
  }



}

const notifications = new Notifications();

export default notifications;
