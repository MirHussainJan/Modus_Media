import FeatureItem from "./FeatureItem"
import PriceSection from "./PriceSection"

const Package = ({ title, number, name, subtitle, features, icons, price }) => {
  return (
    <div className="bg-gray-100 rounded-2xl p-5 w-full max-w-md shadow-sm">
      {/* Package Header */}
      <div className="text-right mb-5">
        <h2 className="text-2xl text-blue-custom mb-3">{title}</h2>
        <div className="flex items-center justify-center gap-3 mb-2">
          <h3 className="text-3xl text-gray-800">{name}</h3>
          <div className="bg-blue-custom text-white w-8 h-8 rounded text-center leading-8 font-bold">{number}</div>
        </div>
        <p className="text-sm text-gray-600">{subtitle}</p>
      </div>

      {/* Features List */}
      <ul className="space-y-4 mb-8">
        {features.map((feature, index) => (
          <FeatureItem 
            key={index} 
            feature={feature} 
            index={index}
            icon={icons && icons[index] ? icons[index] : null}
          />
        ))}
      </ul>

      {/* Price Section */}
      <PriceSection price={price} />
    </div>
  )
}

export default Package
