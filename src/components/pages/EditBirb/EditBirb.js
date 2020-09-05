import React from 'react';
import DatePicker from 'react-datepicker';

import birbsData from '../../../helpers/data/birbsData';

class EditBirb extends React.Component {
  state = {
    birb: {
      type: '',
      color: '',
      size: '',
      seenAt: new Date(),
      altColor: '',
      wasSleeping: true,
      location: '',
      notes: '',
    },
  }

  componentDidMount() {
    birbsData.getBirbById(this.props.match.params.birbId)
      .then((res) => {
        const birb = res.data;
        birb.seenAt = new Date(birb.seenAt);
        this.setState({ birb });
      })
      .catch((err) => console.error('err in get single birb', err));
  }

  changeTypeEvent = (e) => {
    e.preventDefault();
    const { birb } = this.state;
    birb.type = e.target.value;
    this.setState({ birb });
  }

  changeColorEvent = (e) => {
    e.preventDefault();
    const { birb } = this.state;
    birb.color = e.target.value;
    this.setState({ birb });
  }

  changeSizeEvent = (e) => {
    e.preventDefault();
    const { birb } = this.state;
    birb.size = e.target.value;
    this.setState({ birb });
  }

  changeAltColor = (e) => {
    e.preventDefault();
    const { birb } = this.state;
    birb.altColor = e.target.value;
    this.setState({ birb });
  }

  changeLocation = (e) => {
    e.preventDefault();
    const { birb } = this.state;
    birb.location = e.target.value;
    this.setState({ birb });
  }

  changeNotesEvent = (e) => {
    e.preventDefault();
    const { birb } = this.state;
    birb.notes = e.target.value;
    this.setState({ birb });
  }

  changeWasSleepingEvent = (e) => {
    const { birb } = this.state;
    birb.wasSleeping = e.target.checked;
    this.setState({ birb });
  }

  seenAtEvent = (seenAt) => {
    const { birb } = this.state;
    birb.seenAt = seenAt;
    this.setState({ birb });
  };

  updateBirb = (e) => {
    e.preventDefault();
    const { birbId } = this.props.match.params;

    birbsData
      .updateBirb(birbId, this.state.birb)
      .then(() => {
        this.props.history.push(`/birbs/${birbId}`);
      })
      .catch((err) => console.error('edit birb broke', err));
  };

  render() {
    const {
      type,
      color,
      size,
      seenAt,
      altColor,
      wasSleeping,
      location,
      notes,
    } = this.state.birb;

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
              value={type}
              onChange={this.changeTypeEvent}
            />
          </div>
          <div className="form-group">
            <label htmlFor="birbColor">Color</label>
            <input
              type="text"
              className="form-control"
              id="birbColor"
              placeholder="Enter Birb Color"
              value={color}
              onChange={this.changeColorEvent}
            />
          </div>
          <div className="form-group">
            <label htmlFor="birbSize">Size</label>
            <input
              type="text"
              className="form-control"
              id="birbSize"
              placeholder="Enter Birb Size"
              value={size}
              onChange={this.changeSizeEvent}
            />
          </div>
          <div className="form-group">
            <label htmlFor="birbAltColor">Alt Color</label>
            <input
              type="text"
              className="form-control"
              id="birbAltColor"
              placeholder="Enter Birb Alt Color"
              value={altColor}
              onChange={this.changeAltColor}
            />
          </div>
          <div className="form-group">
            <label htmlFor="birbLocation">Location</label>
            <input
              type="text"
              className="form-control"
              id="birbLocation"
              placeholder="Enter Birb Location"
              value={location}
              onChange={this.changeLocation}
            />
          </div>
          <div className="form-group">
            <label htmlFor="birbNotes">Notes</label>
            <input
              type="textarea"
              className="form-control"
              id="birbNotes"
              placeholder="Enter Birb Notes"
              value={notes}
              onChange={this.changeNotesEvent}
            />
          </div>
          <div className="form-group">
            <label htmlFor="birbWasSleeping">Was Sleeping</label>
            <input
              type="checkbox"
              className="form-control"
              id="birbWasSleeping"
              checked={wasSleeping}
              onChange={this.changeWasSleepingEvent}
            />
          </div>
          <div className="form-group">
            <label htmlFor="birbSeenAt" className="mr-2">
              Seen At:{' '}
            </label>
            <DatePicker
              selected={seenAt}
              onChange={this.seenAtEvent}
              showTimeSelect
            />
          </div>
          <button className="btn btn-info" onClick={this.updateBirb}>
            Update Birb
          </button>
        </form>
      </div>
    );
  }
}

export default EditBirb;
