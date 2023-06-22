// import React from "react";
// import GridLayout from "react-grid-layout";

// const Draggablegrid = () => {
//   // Define the grid layout properties
//   const layout = [
//     { i: "div1", x: 0, y: 0, w: 1, h: 1 },
//     { i: "div2", x: 1, y: 0, w: 1, h: 1 },
//     { i: "div3", x: 0, y: 1, w: 1, h: 1 },
//     { i: "div4", x: 1, y: 1, w: 1, h: 1 },
//   ];

//   // Define the event handlers for the grid items
//   const onDragStart = (layout, oldItem, newItem) => {
//     console.log("onDragStart", layout, oldItem, newItem);
//   };
//   const onDrag = (layout, oldItem, newItem) => {
//     console.log("onDrag", layout, oldItem, newItem);
//   };
//   const onDragStop = (layout, oldItem, newItem) => {
//     console.log("onDragStop", layout, oldItem, newItem);
//   };
//   const onResizeStart = (layout, oldItem, newItem) => {
//     console.log("onResizeStart", layout, oldItem, newItem);
//   };
//   const onResize = (layout, oldItem, newItem) => {
//     console.log("onResize", layout, oldItem, newItem);
//   };
//   const onResizeStop = (layout, oldItem, newItem) => {
//     console.log("onResizeStop", layout, oldItem, newItem);
//   };

//   return (
//     <GridLayout
//       className="layout"
//       layout={layout}
//       cols={2}
//       rowHeight={100}
//       width={600}
//     >
//       <div
//         key="div1"
//         data-grid={{ ...layout[0], isResizable: true }}
//         draggable={true}
//         onDragStart={onDragStart}
//         onDrag={onDrag}
//         onDragStop={onDragStop}
//         onResizeStart={onResizeStart}
//         onResize={onResize}
//         onResizeStop={onResizeStop}
//       >
//         <div style={{ backgroundColor: "red", height: "100%", width: "100%" }}>
//           Div 1
//         </div>
//       </div>
//       <div
//         key="div2"
//         data-grid={{ ...layout[1], isResizable: true }}
//         draggable={true}
//         onDragStart={onDragStart}
//         onDrag={onDrag}
//         onDragStop={onDragStop}
//         onResizeStart={onResizeStart}
//         onResize={onResize}
//         onResizeStop={onResizeStop}
//       >
//         <div
//           style={{ backgroundColor: "green", height: "100%", width: "100%" }}
//         >
//           Div 2
//         </div>
//       </div>
//       <div
//         key="div3"
//         data-grid={{ ...layout[2], isResizable: true }}
//         draggable={true}
//         onDragStart={onDragStart}
//         onDrag={onDrag}
//         onDragStop={onDragStop}
//         onResizeStart={onResizeStart}
//         onResize={onResize}
//         onResizeStop={onResizeStop}
//       >
//         <div style={{ backgroundColor: "blue", height: "100%", width: "100%" }}>
//           Div 3
//         </div>
//       </div>

//       <div
//         key="div4"
//         data-grid={{ ...layout[3], isResizable: true }}
//         draggable={true}
//         onDragStart={onDragStart}
//         onDrag={onDrag}
//         onDragStop={onDragStop}
//         onResizeStart={onResizeStart}
//         onResize={onResize}
//         onResizeStop={onResizeStop}
//       >
//         <div style={{ backgroundColor: "blue", height: "100%", width: "100%" }}>
//           Div 3
//         </div>
//       </div>
//     </GridLayout>
//   );
// };
// export default Draggablegrid;

import React from "react";
import GridLayout from "react-grid-layout";

class Draggablegrid extends React.Component {
  render() {
    // layout is an array of objects, see the demo for more complete usage
    const layout = [
      { i: "a", x: 0, y: 0, w: 1, h: 2, static: true },
      { i: "b", x: 1, y: 0, w: 3, h: 2, minW: 2, maxW: 4 },
      { i: "c", x: 4, y: 0, w: 1, h: 2 },
    ];
    return (
      <GridLayout
        className="layout"
        layout={layout}
        cols={12}
        rowHeight={30}
        width={1200}
      >
        <div key="a" style={{ backgroundColor: "blue" }}>
          a
        </div>
        <div
          key="b"
          style={{
            height: "150px",
            width: "150px",
            backgroundColor: "skyblue",
          }}
        ></div>
        <div
          key="c"
          style={{ height: "150px", width: "150px", backgroundColor: "orange" }}
        >
          c
        </div>
      </GridLayout>
    );
  }
}
export default Draggablegrid;
