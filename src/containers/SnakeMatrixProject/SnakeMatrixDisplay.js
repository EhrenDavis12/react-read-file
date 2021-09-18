import React, { useState } from "react";
import { withStore } from "../Store";
import { ComponentBox, Button } from "../../components/SharedStyles";
import {generateMatrix, getRecursiveSolutionFromMatrix} from "./Calculate";
import _ from 'lodash';

function SnakeMatrixDisplay({ store }) {
  const [matrix, setMatrix] = useState([]);
  const [listItems, setListItems] = useState();
  const [showMatrix, setShowMatrix] = useState(false);
  const [showSolution, setShowSolution] = useState(false);
  const [solution, setSolution] = useState();

  const getStoreDataAsync = async () => {
    return {
      matrixSize: await store.get("matrixSize")
    };
  };

  const compileMatrix = async () => {
    const localState = await getStoreDataAsync();
    let key = 0;
    let workingMatrix = generateMatrix(localState);
    setListItems(
      workingMatrix.map(row => {
        let result =  (<div key={key}>
          {row.map(x => (`${x} `))}
        </div>)
        key +=1;
        return result;
      })
    );
    setMatrix(workingMatrix);
    setShowMatrix(true);
    setShowSolution(false);
  };

  const compileSolution = async () => {
      let copyMatrix = _.cloneDeep(matrix);
      const newSolution = getRecursiveSolutionFromMatrix(copyMatrix);
      setSolution(newSolution);
      setShowSolution(true);
  };

  return (
    <div>
        <ComponentBox>
            <Button className="btn" onClick={() => compileMatrix()}>
              Compose Matrix
            </Button>
        </ComponentBox>

        {showMatrix ? (
            <ComponentBox>
              <div>{listItems}</div>
            </ComponentBox>
          ) : null}

        {showMatrix && !showSolution? (
            <ComponentBox>
              <Button className="btn" onClick={() => compileSolution()}>
                Solve Matrix
              </Button>
            </ComponentBox>
        ) : null}

        {showSolution ? (
            <ComponentBox>
              <p>{solution}</p>
            </ComponentBox>
        ) : null}
    </div>
  );
}

export default withStore(SnakeMatrixDisplay);
