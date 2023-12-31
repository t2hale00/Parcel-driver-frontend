
import React from "react";
import { useState } from "react";

function UndeliveredParcels({  undeliveredParcels, handleSelectedParcel, selectedLocker,selectedParcel ,message}) {
  const [showUndeliveredParcels, setShowUndeliveredParcels] = useState(false);
  return (
    <div>
      {selectedLocker && (
              <button
                onClick={() => {
                  setShowUndeliveredParcels(!showUndeliveredParcels);
                }}
              >
                Show/Hide Parcels for Delivery
              </button>
            )}
      {showUndeliveredParcels && selectedLocker&& (
        <div>
          {!selectedParcel ? (
            <h2 style={{ color: "red" }}>
              Delivery steps:
              <br/>
              <br />
              1. Select one parcel <br />
              2. Select a free cabinet to put in
            </h2>
          ) : (
            <h2 style={{ color: "red" }}>{message}</h2>
          )}
          {undeliveredParcels.map((undeliveredparcel) => (
            <div key={undeliveredparcel.parcelid} className="Box">
              <p>Parcel ID: {undeliveredparcel.parcelid}</p>
              <p>Status: {undeliveredparcel.status}</p>
              <p>Sender Name:{undeliveredparcel.sendername}</p>
              <p>Recipient Name:{undeliveredparcel.recipientname}</p>
              <p>Recipient Address:{undeliveredparcel.recipientaddress}</p>
              <button
                className="smallbutton"
                onClick={() => {
                  handleSelectedParcel(undeliveredparcel.parcelid,undeliveredparcel.recipientname);
                }}
              >
                Select it
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default UndeliveredParcels;