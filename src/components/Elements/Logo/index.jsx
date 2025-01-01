const Logo = (props) => {
  const { type, variant } = props
    return (
      <>
      {type == "navbar" ? (
        <div className={`flex justify-center font-poppins tracking-wide text-primary text-lg sm:text-2xl ${variant}`}>
          <span className="font-bold text-white">FINE</span>bank
          <span className="font-bold text-white">.IO</span>
        </div>
      ) : (
        <div className={`flex justify-center font-poppins tracking-wide text-primary text-4xl animate-bounce ${variant}`}>
          <span className="font-bold text-primary">FINE</span>bank
          <span className="font-bold text-primary">.IO</span>
        </div>
        )}
      </>
    )
}

export default Logo