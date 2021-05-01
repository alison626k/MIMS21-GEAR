import React, { Component } from 'react';
import tableau from 'tableau-api';
 
 
class CityCharger extends Component {
    componentDidMount() {
      this.initViz();
    }
  
    //Function call API
    initViz() {
      const vizUrl =
        "https://prod-apnortheast-a.online.tableau.com/t/alison/views/EVWaffleCharts/Dashboard2?:showAppBanner=false&:display_count=n&:showVizHome=n&:origin=viz_share_link";
      const options = {
        height: "600px",
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
  export default CityCharger;