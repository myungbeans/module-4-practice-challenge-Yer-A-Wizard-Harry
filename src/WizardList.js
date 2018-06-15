import React from "react";
import Wizard from "./Wizard";



  //display all yer wizards, or filter by house


const WizardList = props => {
  console.log('WizList Props', props)
  let filteredWizards;
  props.filterBy === "All" ? filteredWizards = props.wizards : filteredWizards = props.wizards.filter(wiz => wiz.house === props.filterBy)
  const renderWizards = filteredWizards.map(wiz => <Wizard key={wiz.actor} name={wiz.name} house={wiz.house} imgSrc={wiz.image} />)
  
  return (
    <div className="WizardList">
      {renderWizards[0] ? renderWizards : 'er not a wizard yet, Harry'}
    </div>
  );
};

export default WizardList;