import React from 'react';

import authData from '../../../helpers/data/authData';
import birbsData from '../../../helpers/data/birbsData';
import BirbCard from '../../shared/BirbCard/BirbCard';

class Home extends React.Component {
  state = {
    birbs: [],
  }

  // go get all our birbs (by uid) (convertFirebaseCollection helper?)
  // create birbData helper getBirbsByUid
  // getUid function for current user
  // setState: [], then fill with birbs -> componentDidMount
  // map over birbs (pass birb as props) and create birb cards down 👇🏻 in render
  // make a Birb card component
  // PropTypes for a birbShape!!!!

  componentDidMount() {
    birbsData.getBirbsByUid(authData.getUid())
      .then((birbs) => this.setState({ birbs }))
      .catch((err) => console.error('get birbs broke', err));
  }

  render() {
    const { birbs } = this.state;

    const birbCards = birbs.map((birb) => <BirbCard key={birb.id}/>);

    return (
      <div className="Home">
        <h1><span role="img" aria-label="birb emoji">🐦</span> <span role="img" aria-label="house emoji">🏚</span></h1>
        {birbCards}
      </div>
    );
  }
}

export default Home;
