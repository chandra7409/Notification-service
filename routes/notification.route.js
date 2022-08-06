const notificationController = require("../controllers/notification.controller");
module.exports = (app) => {

    /**
     * Insert a new notification request
     * POST /notiserv/api/v1/notifications  
     */
    app.post("/notifiser/api/v1/notification", notificationController.acceptNotificationRequest);


    /**
     * Get the notification status -> if the email notification was sent or not
     * 
     * GET /notiserv/api/v1/notifications/122155fsdsfsett456
     */

    app.get("/notifiser/api/v1/notification/:id", notificationController.getNotificatioDetails);
}