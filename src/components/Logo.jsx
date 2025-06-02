const Logo = () => {
  return (
    <div className="flex items-center">
      <div className="bg-white text-navy w-8 h-8 flex items-center justify-center ml-3 transform rotate-90">
        <span className="text-lg">▶</span>
      </div>
      <div className="flex flex-col text-white">
        <span className="font-bold">modus</span>
        <span className="font-light">media</span>
      </div>
    </div>
  )
}

export default Logo
