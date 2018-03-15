import React from 'react';
import PropTypes from 'prop-types';

import GuestList from './GuestList/index';
import Counter from './Counter';
import ConfirmedFilter from './ConfirmedFilter';


const MainContent = props =>
  <div className="main">
    <ConfirmedFilter
      toggleFilter={props.toggleFilter}
      isFiltered={props.isFiltered}
    />
    <Counter
      totalInvited={props.totalInvited}
      numberAttending={props.numberAttending}
      numberUnconfirmed={props.numberUnconfirmed}
    />

    <GuestList
      guests={props.guests}
      toggleConfirmationAt={props.toggleConfirmationAt}
      toggleEditingAt={props.toggleEditingAt}
      setNameAt={props.setNameAt}
      isFiltered={props.isFiltered}
      removeGuestAt={props.removeGuestAt}
      pendingGuest={props.pendingGuest}
    />
  </div>;

MainContent.propTypes = {
  guests: PropTypes.array.isRequired,
  toggleFilter: PropTypes.func.isRequired,
  isFiltered: PropTypes.bool.isRequired,
  totalInvited: PropTypes.number.isRequired,
  numberAttending: PropTypes.number.isRequired,
  numberUnconfirmed:  PropTypes.number.isRequired,
  toggleConfirmationAt: PropTypes.number.isRequired,
  toggleEditingAt: PropTypes.func.isRequired,
  setNameAt: PropTypes.func.isRequired,
  removeGuestAt: PropTypes.func.isRequired,
  pendingGuest: PropTypes.string.isRequired
  
};


export default MainContent;