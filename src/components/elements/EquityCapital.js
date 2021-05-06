import React, { Component } from 'react';
import tableau from 'tableau-api';
 
 
class EquityCapital extends Component {
    componentDidMount() {
      this.initViz();
    }
  
    //Function call API
    initViz() {
      const vizUrl =
        "https://public.tableau.com/views/per_capital_final_16199313183770/Dashboard1?:language=zh-Hant&:display_count=y&publish=yes&:origin=viz_share_link";
      const options = {
        height: "700px",
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
 
 
export default EquityCapital;