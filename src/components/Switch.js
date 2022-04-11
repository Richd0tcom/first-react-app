

const Switch = ({ onSwitch }) => {
  return (
    <div className="switch w-3/4 flex justify-center py-5">
      <button className="rounded-md py-3 px-7 md:px-20 border border-black"
             id="switch"
             onClick={ onSwitch }>
        Switch
      </button>
    </div>
  );
};

export default Switch;