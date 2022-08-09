import { useDrag } from "react-dnd";
const style = {
  position: "absolute",
  border: "1px dashed gray",
  padding: "0.5rem 1rem",
  cursor: "move"
};

export const Box = ({ left, top }) => {

  const [{ isDragging }, drag] = useDrag(
    () => ({
      type: 'box',
      item: { left, top },
      collect: (monitor) => ({ isDragging: monitor.isDragging() })
    }),
    [left, top]
  );
  
  if (isDragging && true) return <div ref={drag} />;
  
  return (
    <div className="box" ref={drag} style={{ ...style, left, top }}>
      DragMe
    </div>
  );
};
