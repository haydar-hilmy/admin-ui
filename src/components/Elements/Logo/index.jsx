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
        <div className={`flex justify-center font-poppins tracking-wide text-primary text-4xl ${variant}`}>
          <span className="font-bold text-green-700">FINE</span>bank
          <span className="font-bold text-green-700">.IO</span>
        </div>
        )}
      </>
    )
}

export default Logo