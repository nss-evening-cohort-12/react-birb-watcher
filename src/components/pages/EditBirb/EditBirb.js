import React, { useState, useEffect } from 'react';
import _ from 'underscore';
import DatePicker from 'react-datepicker';

import birbsData from '../../../helpers/data/birbsData';

const EditBirb = (props) => {
  const [birb, setBirb] = useState({
    type: '',
    color: '',
    size: '',
    seenAt: new Date(),
    altColor: '',
    wasSleeping: true,
    location: '',
    notes: '',
  });

  useEffect(() => {
    birbsData.getBirbById(props.match.params.birbId)
      .then((res) => {
        const bord = res.data;
        bord.seenAt = new Date(bord.seenAt);
        setBirb(bord);
      })
      .catch((err) => console.error('err in get single birb', err));
  }, [props.match.params.birbId]);

  const changeTypeEvent = (e) => {
    const birbCopy = _.clone(birb);
    birbCopy.type = e.target.value;
    setBirb(birbCopy);
  };

  const changeColorEvent = (e) => {
    const birbCopy = _.clone(birb);
    birbCopy.color = e.target.value;
    setBirb(birbCopy);
  };

  const changeSizeEvent = (e) => {
    const birbCopy = _.clone(birb);
    birbCopy.size = e.target.value;
    setBirb(birbCopy);
  };

  const changeAltColor = (e) => {
    const birbCopy = _.clone(birb);
    birbCopy.altColor = e.target.value;
    setBirb(birbCopy);
  };

  const changeLocation = (e) => {
    const birbCopy = _.clone(birb);
    birbCopy.location = e.target.value;
    setBirb(birbCopy);
  };

  const changeNotesEvent = (e) => {
    const birbCopy = _.clone(birb);
    birbCopy.notes = e.target.value;
    setBirb(birbCopy);
  };

  const changeWasSleepingEvent = (e) => {
    const birbCopy = _.clone(birb);
    birbCopy.wasSleeping = e.target.checked;
    setBirb(birbCopy);
  };

  const seenAtEvent = (seenAt) => {
    const birbCopy = _.clone(birb);
    birbCopy.seenAt = seenAt;
    setBirb(birbCopy);
  };

  const updateBirb = (e) => {
    e.preventDefault();
    const { birbId } = props.match.params;

    birbsData
      .updateBirb(birbId, birb)
      .then(() => {
        this.props.history.push(`/birbs/${birbId}`);
      })
      .catch((err) => console.error('edit birb broke', err));
  };

  return (
    <div className="EditBirb col-12">
      <h1>Edit Birb</h1>
      <form className="col-6 offset-3">
        <div className="form-group">
          <label htmlFor="birbType">Type</label>
          <input
            type="text"
            className="form-control"
            id="birbType"
            placeholder="Enter Birb Type"
            value={birb.type}
            onChange={changeTypeEvent}
          />
        </div>
        <div className="form-group">
          <label htmlFor="birbColor">Color</label>
          <input
            type="text"
            className="form-control"
            id="birbColor"
            placeholder="Enter Birb Color"
            value={birb.color}
            onChange={changeColorEvent}
          />
        </div>
        <div className="form-group">
          <label htmlFor="birbSize">Size</label>
          <input
            type="text"
            className="form-control"
            id="birbSize"
            placeholder="Enter Birb Size"
            value={birb.size}
            onChange={changeSizeEvent}
          />
        </div>
        <div className="form-group">
          <label htmlFor="birbAltColor">Alt Color</label>
          <input
            type="text"
            className="form-control"
            id="birbAltColor"
            placeholder="Enter Birb Alt Color"
            value={birb.altColor}
            onChange={changeAltColor}
          />
        </div>
        <div className="form-group">
          <label htmlFor="birbLocation">Location</label>
          <input
            type="text"
            className="form-control"
            id="birbLocation"
            placeholder="Enter Birb Location"
            value={birb.location}
            onChange={changeLocation}
          />
        </div>
        <div className="form-group">
          <label htmlFor="birbNotes">Notes</label>
          <input
            type="textarea"
            className="form-control"
            id="birbNotes"
            placeholder="Enter Birb Notes"
            value={birb.notes}
            onChange={changeNotesEvent}
          />
        </div>
        <div className="form-group">
          <label htmlFor="birbWasSleeping">Was Sleeping</label>
          <input
            type="checkbox"
            className="form-control"
            id="birbWasSleeping"
            checked={birb.wasSleeping}
            onChange={changeWasSleepingEvent}
          />
        </div>
        <div className="form-group">
          <label htmlFor="birbSeenAt" className="mr-2">
            Seen At:{' '}
          </label>
          <DatePicker
            selected={birb.seenAt}
            onChange={seenAtEvent}
            showTimeSelect
          />
        </div>
        <button className="btn btn-info" onClick={updateBirb}>
          Update Birb
        </button>
      </form>
    </div>
  );
};

export default EditBirb;
