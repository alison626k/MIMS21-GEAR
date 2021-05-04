import React, { Component } from 'react';
import tableau from 'tableau-api';
 
 
class EquityIncome extends Component {
    componentDidMount() {
      this.initViz();
    }
  
    //Function call API
    initViz() {
      const vizUrl =
        "https://public.tableau.com/views/income_16199342413440/Dashboard1?:language=zh-Hant&:display_count=y&publish=yes&:origin=viz_share_link";
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
 
 
export default EquityIncome;