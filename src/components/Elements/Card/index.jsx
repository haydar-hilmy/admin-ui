const Card = (props) => {
    const { title = "", titleCard, children, variant } = props
    return (
        <>
        {
            title != "" ? (
                <div className="text-lg text-gray-600 mb-2">{title}</div>
            ) : ("")
        }
            <div style={{ flex: 1 }} className={`${variant} bg-white rounded-lg px-6 py-5 shadow-xl`}>
                {
                    titleCard != null ? (
                        <div className="text-lg text-gray-02 mb-2">{titleCard}</div>
                    ) : ("")
                }
                {children}
            </div>
        </>
    )
}

export default Card