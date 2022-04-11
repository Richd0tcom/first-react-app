const Board = ({ color }) => {
  
  const Bstyle ={
    backgroundColor: color,
  }

  return (
    <div className="board w-3/4 h-1/2 p-12">
      <div className="rounded-md h-full bg-[#ff3362] border " id="board" style={Bstyle} ></div>
    </div>
  );
};



export default Board;
