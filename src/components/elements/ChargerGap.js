import React, { Component } from 'react';
import tableau from 'tableau-api';
 
 
class ChargerGap extends Component {
    componentDidMount() {
      this.initViz();
    }
  
    //Function call API
    initViz() {
      const vizUrl =
        "https://public.tableau.com/views/EVWaffleCharts/ProgressWaffle?:language=en&:toolbar=no&:display_count=y&:origin=no";
      const options = {
        height: "550px",
        width: "1200px",
        hideTabs: true,
        hideToolbar: true,
        toobar:false,
        backgroundColor: '#151719',
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
  export default ChargerGap;