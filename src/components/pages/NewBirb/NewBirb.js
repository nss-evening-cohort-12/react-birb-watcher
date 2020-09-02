import React from 'react';
import DatePicker from 'react-datepicker';
import _ from 'underscore';

import authData from '../../../helpers/data/authData';

import 'react-datepicker/dist/react-datepicker.css';
import birbsData from '../../../helpers/data/birbsData';
// what does our birb look like? You know, as an object
// set up state
// get items off state in render?
// make sure to get the uid from authData before creating birb

class NewBirb extends React.Component {
  state = {
    type: '',
    color: '',
    size: '',
    seenAt: new Date(),
    altColor: '',
    wasSleeping: true,
    location: '',
    notes: '',
  };

  // do the same thing for everything else!
  changeTypeEvent = (e) => {
    e.preventDefault();
    this.setState({ type: e.target.value });
  }

  seenAtEvent = (seenAt) => {
    this.setState({ seenAt });
  }

  saveBirb = (e) => {
    e.preventDefault();
    // get birb items off state
    // create new birb object
    // pass that to a data function
    // do something on save?
    const keysIWant = ['type', 'color', 'size', 'seenAt', 'altColor', 'wasSleeping', 'location', 'notes'];

    const newBirb = _.pick(this.state, keysIWant);
    newBirb.uid = authData.getUid();

    birbsData.createBirb(newBirb)
      .then((res) => {
        this.props.history.push(`/birbs/${res.data.name}`);
      })
      .catch((err) => console.error('new birb broke', err));
  }

  render() {
    const { type, seenAt } = this.state;
    return (
      <div className="NewBirb">
        <h1>NewBirb</h1>
        <form className="col-6 offset-3">
          <div className="form-group">
            <label htmlFor="birbType">Type</label>
            <input
              type="text"
              className="form-control"
              id="birbType"
              placeholder="Enter Birb Type"
              value={type}
              onChange={this.changeTypeEvent}
            />
          </div>
          <div className="form-group">
            <label htmlFor="birbSeenAt">Seen At: </label>
            <DatePicker
              selected={seenAt}
              onChange={this.seenAtEvent}
              showTimeSelect
            />
          </div>
          <button className="btn btn-warning" onClick={this.saveBirb}>Save Birb</button>
        </form>
      </div>
    );
  }
}

export default NewBirb;
