import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from "./card";
import QuestionData from "./Data";
const App = () => {

  return (

    <>
      <div className="row justify-content-center">
        <div className="col-10 col-md-4">
          <div className="box mt-3">
            <h4 className="text-center mt-3">JavaScript Interview Question Answer</h4>
            {QuestionData.map((item) => {
              return (
                <Card
                  key={item.id}

                  ques={item.ques}
                  ans={item.ans}
                />
              )
            })}
          </div>
        </div>
      </div>
    </>
  )
}

export default App;
