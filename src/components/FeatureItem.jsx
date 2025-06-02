const FeatureItem = ({ feature, icon }) => {
  return (
    <li className="flex items-center">
      {icon && (
        <div className="w-6 h-6 ml-4 flex-shrink-0">
          <img 
            src={icon} 
            alt="Feature icon" 
            className="w-full h-full object-contain"
          />
        </div>
      )}
      <span className="text-sm leading-5">
        {feature.split("\n").map((line, lineIndex) => (
          <span key={lineIndex}>
            {line}
            {lineIndex < feature.split("\n").length - 1 && <br />}
          </span>
        ))}
      </span>
    </li>
  )
}

export default FeatureItem
