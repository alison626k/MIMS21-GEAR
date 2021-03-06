import React, { Component } from 'react';
import tableau from 'tableau-api';
 
 
class CityMap extends Component {
    componentDidMount() {
      this.initViz();
    }
  
    //Function call API
    initViz() {
      const vizUrl =
        "https://public.tableau.com/views/EVCharging/Gapsmap?:language=en&:display_count=y&:origin=viz_share_link";
      const options = {
        height: "1000px",
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
 
 
export default CityMap;