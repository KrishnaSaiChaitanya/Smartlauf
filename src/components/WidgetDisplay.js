import Widget1 from "../Widgets/Widget-1";
import { Widget2 } from "../Widgets/Widget-2";
import { Widget3 } from "../Widgets/Widget-3";
import { Widget4 } from "../Widgets/Widget-4";
import Widget5 from "../Widgets/Widget-5";
import Widget6 from "../Widgets/Widget-6";
import Widget8 from "../Widgets/Widget-8";
import Widget7 from "../Widgets/Widget-7";
import Widget10 from "../Widgets/Widget-10";
import Widget9 from "../Widgets/Widget-9";
import React, { useState } from "react";
import PropTypes from "prop-types";

function WidgetDisplay(props) {
  const [id, setid] = useState(props.id);
  return (
    <div>
      {id === "widget1" && <Widget1 display={props.display} />}
      {id === "widget2" && <Widget2 display={props.display} />}
      {id === "widget3" && <Widget3 display={props.display} />}
      {id === "widget4" && <Widget4 display={props.display} />}
      {id === "widget5" && <Widget5 display={props.display} />}
      {id === "widget6" && <Widget6 display={props.display} />}
      {id === "widget7" && <Widget7 display={props.display} />}
      {id === "widget8" && <Widget8 display={props.display} />}
      {id === "widget9" && <Widget9 display={props.display} />}
      {id === "widget10" && <Widget10 display={props.display} />}
    </div>
  );
}

export default WidgetDisplay;
