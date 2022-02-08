import Button from "@material-ui/core/Button";
import Textfield from "@material-ui/core/TextField";
import { useEffect, useState } from "react";
import {
  getFunction,
  todoDatasSelector,
  addFunction,
  deleteFunction,
} from "./redux/todoSlice";

import { useSelector, useDispatch } from "react-redux";

export const App = () => {
  const [description, setDescription] = useState<string>("");

  const listData = useSelector(todoDatasSelector);

  useEffect(() => {
    dispatch(getFunction());
  }, []);

  const dispatch = useDispatch();

  return (
    <>
      {" "}
      <Textfield
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <Button
        color="primary"
        onClick={() => {
          dispatch(addFunction(description));
          setDescription("");
        }}
      >
        Add Todo
      </Button>
      <div>hello</div>
      <p>
        {" "}
        {listData.map((list: any) => (
          <p>
            <Button
              color="primary"
              onClick={() => {
                dispatch(deleteFunction(list.id));
              }}
            >
              Delete
            </Button>
            {list.id}
            {list.message}
            {list.name}
          </p>
        ))}
      </p>
    </>
  );
};
