import update from "immutability-helper";
import { useCallback, useState } from "react";
import { useDrop } from "react-dnd";
import { Box } from "./Box.js";

const styles = {
  width: "100%",
  height: "98vh",
  position: "relative"
};

export const Container = () => {

  const [box, setBox] = useState( {top: 1, left: 1 } );

  const moveBox = useCallback(
    (left, top) => { setBox( update(box, { $merge: { left, top } }))},
    [box, setBox]
  );

  const [, drop] = useDrop(
    () => ({
      accept: 'box',
      drop(item, monitor) {
        const delta = monitor.getDifferenceFromInitialOffset();
        const left = Math.round(item.left + delta.x);
        const top = Math.round(item.top + delta.y);
        moveBox(left, top);
        return undefined;
      }
    }),
    [moveBox]
  );

  const { left, top } = box;
  
  return (
    <div ref={drop} style={styles}>
      
      <Box left={left} top={top}/> 
    
    </div>
  );
};
