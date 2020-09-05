import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import moment from 'moment';

import birbShape from '../../../helpers/propz/birbShape';

const BirbCard = (props) => {
  const { birb, deleteBirb } = props;

  const singleBirbLink = `/birbs/${birb.id}`;
  const editLink = `/edit/${birb.id}`;

  return (
    <div className="col-4 mb-3">
      <div className="Bird card border-0">
        <div className="card-body">
          <h5 className="card-title">{birb.type}</h5>
          <p className="card-text">{birb.notes}</p>
          <div className="btn-group">
            <Link to={singleBirbLink} className="btn btn-warning"><i className="fas fa-binoculars"></i></Link>
            <Link to={editLink} className="btn btn-success"><i className="fas fa-pencil-alt"></i></Link>
            <button className="btn btn-danger" onClick={() => { deleteBirb(birb.id); }}><i className="fas fa-trash-alt"></i></button>
          </div>
        </div>
        <div className="card-footer text-muted">
          Updated: {moment(birb.seenAt).fromNow()}
        </div>
      </div>
    </div>
  );
};

BirbCard.propTypes = {
  birb: birbShape.birbShape,
  deleteBirb: PropTypes.func.isRequired,
};

export default BirbCard;
