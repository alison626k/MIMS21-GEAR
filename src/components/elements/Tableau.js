import React, { Component } from 'react';
import TableauReport from 'tableau-react';

const Test = props => (
  <TableauReport
    url="https://prod-apnortheast-a.online.tableau.com/t/alison/views/GEAR_EDA/brandcharger?:showAppBanner=false&:display_count=n&:showVizHome=n&:origin=viz_share_link"
    token="<TRUSTED TICKET HERE>"
  />
)

export default Test;