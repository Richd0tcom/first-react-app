

const Hex = ({ code }) => {
    return (
        <div className="hex">
            <h1 className="py-3 md:py-7 text-center text-xl font-bold">
                { code.toUpperCase() }
            </h1>
        </div>
    )
}

export default Hex;