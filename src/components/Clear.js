const Clear = ({ onClear }) => {
  return (
    <div className="switch  flex justify-center py-5">
      <button className="rounded-md py-3 px-7 md:px-12 border border-black" id="clear"  onClick={ onClear }>
        Clear
      </button>
    </div>
  );
};

export default Clear;