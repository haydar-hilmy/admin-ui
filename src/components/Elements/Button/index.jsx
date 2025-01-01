const Button = (props) => {
    const { children, type, variant, disabled } = props;
    return (
        <button
            disabled={disabled}
            className={`${variant} disabled:cursor-not-allowed`}
            type={type}
        >
            {children}
        </button>
    )
}

export default Button