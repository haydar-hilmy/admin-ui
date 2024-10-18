const Button = (props) => {
    const { children, type, variant } = props;
    return (
        <button
            className={variant}
            type={type}
        >
            {children}
        </button>
    )
}

export default Button