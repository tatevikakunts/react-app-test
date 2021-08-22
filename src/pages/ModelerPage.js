import React from "react";
import BpmnJS from "bpmn-js/dist/bpmn-modeler.development.js";
import "bpmn-js/dist/assets/diagram-js.css";
import "bpmn-js/dist/assets/bpmn-font/css/bpmn-embedded.css";
import ModelerComponent from "../components/ModelerComponent";

// export a modeler page component
const ModelerPage = () => {
  return (
    <div className="container">
      <div className="col p-5">
        <h1>Modeler</h1>
        <div>
          <ModelerComponent />
        </div>
      </div>
    </div>
  );
};
export default ModelerPage;
// use the Modeler to instantiate a modeler instance
