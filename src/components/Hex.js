

const Hex = ({ code }) => {
    return (
        <div className="hex w-3/4">
            <h1 className="py-3 md:py-7 text-center text-xl font-bold" id="code">
                { code.toUpperCase() }
            </h1>

        </div>
    )
}

export default Hex