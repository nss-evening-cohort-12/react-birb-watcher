import React from 'react';

import birbShape from '../../../helpers/propz/birbShape';

class BirbCard extends React.Component {
  static propTypes = {
    birb: birbShape.birbShape,
  }

  render() {
    const { birb } = this.props;

    return (
      <div className="Bird card">
        <div className="card-body">
          <h5 className="card-title">{birb.type}</h5>
          <p className="card-text">{birb.notes}</p>
        </div>
      </div>
    );
  }
}

export default BirbCard;
