import React, { Component } from 'react';
import tableau from 'tableau-api';
 
 
class EquityRace extends Component {
    componentDidMount() {
      this.initViz();
    }
  
    //Function call API
    initViz() {
      const vizUrl =
        "https://public.tableau.com/views/race_inequity_final/Sheet1?:language=en&:display_count=y&publish=yes&:origin=viz_share_link";
      const options = {
        height: "500px",
        width: "100%",
        hideTabs: true,
        hideToolbar: true,
        backgroundColor: '#151719'
      };
      const vizContainer = this.vizContainer;
      let viz = new window.tableau.Viz(vizContainer, vizUrl, options);
    }
  
    render() {
      return (
        <div
          ref={div => {
            this.vizContainer = div;
          }}
        />
      );
    }
  }
 
 
export default EquityRace;