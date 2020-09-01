import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';

import birbShape from '../../../helpers/propz/birbShape';

class BirbCard extends React.Component {
  static propTypes = {
    birb: birbShape.birbShape,
  }

  // be able to go to the SingleBirb view and the EditBirb view for THIS birb
  // create a link for each of those?
  // throw those links in the cards?
  // click on them?
  // 💸

  render() {
    const { birb } = this.props;

    const singleBirbLink = `/birbs/${birb.id}`;
    const editLink = `/edit/${birb.id}`;

    return (
      <div className="col-4 mb-3">
        <div className="Bird card">
          <div className="card-body">
            <h5 className="card-title">{birb.type}</h5>
            <p className="card-text">{birb.notes}</p>
            <Link to={singleBirbLink} className="btn btn-warning mr-2"><i className="fas fa-binoculars"></i></Link>
            <Link to={editLink} className="btn btn-success"><i className="fas fa-pencil-alt"></i></Link>
          </div>
          <div className="card-footer text-muted">
            Updated: {moment(birb.seenAt).fromNow()}
          </div>
        </div>
      </div>
    );
  }
}

export default BirbCard;
