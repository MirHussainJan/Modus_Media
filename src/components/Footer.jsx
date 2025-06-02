import ClientLogos from "./ClientLogos"

const Footer = () => {
  return (
    <footer className="p-5 text-center mt-5">
      <div className="text-lg font-bold mb-5">בין לקוחותינו</div>

      <ClientLogos />

      {/* Copyright */}
      <div className="flex justify-evenly text-xs text-gray-600 mt-8 px-5">
        <div>בכפוף לתנאי ההסכם</div>
        <div>*הצעת המחיר תקפה למשך 15 ימים מעת שליחתה.</div>
      </div>
    </footer>
  )
}

export default Footer
