import Text from "./Text";
//import { useState, useEffect } from 'react';

const History = ({ history }) => {
  return (
    <div className="board  p-12">
      <div className="rounded-md h-[50vh] border border-black" id="list">
        {
          (history.length > 1)?
            history.slice(1).map((historyText, i) => {
              return <Text key={i} value={historyText} />;
            }) : ''
        
        
          }
      </div>
    </div>
  );
};

export default History;
