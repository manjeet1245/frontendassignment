import { useState } from "react";

import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

import { useDispatch } from "react-redux";
import { filterTable } from "../Redux/actions/filterTable";

import { useSelector } from "react-redux";

export const Dimensions = ({ setSettingsIsOpen }) => {
  const dispatch = useDispatch();
  const tableColState = useSelector((state) => state.tableCols);
  const { selectedColumns } = tableColState;
  const [dimensions, setDimensions] = useState(selectedColumns);
  const [columnId, setColumnId] = useState("");

  const handleAddColoumn = () => {
    if (columnId === "date" || columnId === "app_id") return;

    dispatch(filterTable(columnId));
    setSettingsIsOpen(false);
  };

  const handleOnDragEnd = (result) => {
    if (!result.destination) return;

    const items = Array.from(dimensions);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);
    setDimensions(items);
  };

  return (
    <div className="dimensions_container">
      <h3>Dimensions and Metrics</h3>

      <DragDropContext onDragEnd={handleOnDragEnd}>
        <Droppable droppableId="dimensions">
          {(provided) => (
            <ul
              className="dimensions_columns_box"
              {...provided.droppableProps}
              ref={provided.innerRef}
            >
              {dimensions.map(({ id, title, isVisible }, index) => (
                <Draggable key={id} draggableId={id} index={index}>
                  {(provided) => (
                    <li
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                      id={id}
                      key={id}
                      style={{
                        borderLeft: isVisible && "4px solid #136FED",
                      }}
                      onClick={() => {
                        setColumnId(id);
                        document.getElementById(id).classList.toggle("active");
                      }}
                      className="dimension_column "
                    >
                      <p>{title}</p>
                    </li>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </ul>
          )}
        </Droppable>
      </DragDropContext>

      <div className="buttons">
        <button
          onClick={() => setSettingsIsOpen(false)}
          className="btn btn__outlined"
        >
          Close
        </button>
        <button onClick={handleAddColoumn} className="btn btn__filled">
          Apply Changes
        </button>
      </div>
    </div>
  );
};
