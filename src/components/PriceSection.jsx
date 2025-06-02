const PriceSection = ({ price }) => {
  return (
    <div className="border-t border-gray-200 pt-5">
      <div className="flex justify-between items-center">
        <div className="flex flex-col text-right text-xs text-gray-600">
          <span>+ מיסים</span>
          <span>לחודש</span>
          <span>לחודש מע״מ</span>
        </div>
        <div className="flex items-baseline text-blue-custom font-bold">
          <span className="text-2xl ml-1">₪</span>
          <span className="text-5xl">{price}</span>
        </div>
      </div>
    </div>
  )
}

export default PriceSection
