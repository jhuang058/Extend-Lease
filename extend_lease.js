if (startDate, endDate && (startDate-leaseEndDate < 30)) {

  function questionExtendLease(boolean) {
    // send a request `Your current ends on (date), a new inquiry has been received for (start-end dates), would you like to extend the lease?` 
    //async...await tenant response...have 24 hrs to make a response or defaults response to false
    if (true) {
      //send payment|venmo link //options for that specific period, or customize period
      //decline other request
    } else {
      //approve other request
      //inform current tenant lease can be extended for a maximum of (startDate-leaseEndDate) days.
      //extend?
        if(extend) {
          //send payment link
        } else if (undecided) {
          //send request and payment link on leaseEndDate
        } else if (!extend) {
          //print your move out date is (leaseEndDate).
        }
    }
  }
} 