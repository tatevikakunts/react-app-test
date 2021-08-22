import React from "react";
import BpmnModeler from "bpmn-js/lib/Modeler";

import { newDiagram } from "../data/newDiagram.bpmn.js";

class ModelerComponent extends React.Component {
  modeler = null;

  componentDidMount = () => {
    this.modeler = new BpmnModeler({
      container: "#bpmncontainer"
    });

    this.createNewDiagram();
  };

  createNewDiagram = () => {
    this.openDiagram(newDiagram);
  };

  openDiagram = async (xml) => {
    try {
      await this.modeler.importXML(xml);
      var canvas = this.modeler.get("canvas");
      canvas.zoom("fit-viewport");
    } catch (error) {
      this.modeler.container.find(".error pre").text(error.message);
      console.error(error);
    }
  };

  render = () => {
    return (
      <div>
        <div
          className="container-fluid"
          id="bpmncontainer"
          style={{ height: "200vh" }}
        ></div>
      </div>
    );
  };
}

export default ModelerComponent;
