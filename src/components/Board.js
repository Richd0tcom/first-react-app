const Board = ({ color }) => {
  
  const Bstyle ={
    backgroundColor: color,
  }

  return (
    <div className="board p-12">
      <div className="rounded-md h-[50vh] border" style={Bstyle} ></div>
    </div>
  );
};



export default Board;
