import ContactSidebar from "./ContactSidebar"
import Logo from "./Logo"
import ContactDetails from "./ContactDetails"

const Header = () => {
  return (
    <header className="bg-navy text-white rounded-2xl m-5 p-5 relative overflow-hidden">
      <div className="flex justify-between relative">
        {/* Logo Section - LEFT SIDE */}
        <div className="flex-1">
          <Logo />
        </div>

        {/* Header Info - CENTER/RIGHT */}
        <div className="flex-2 text-right">
          <h2 className="text-2xl mb-1">מודוס מדיה</h2>
          <p className="text-base mb-1">מדיה WE</p>
          <p className="text-sm mb-2">דרך מנחם בגין 150, תל אביב</p>
          <div className="text-sm flex justify-between">
            <span>בוא מהשטח - לידי טהור בוא</span>
            <span className="font-bold">02.02.2023</span>
          </div>
        </div>

        {/* Contact Sidebar - RIGHT SIDE */}
        <ContactSidebar />
      </div>

      {/* Contact Details - LEFT SIDE */}
      <ContactDetails />
    </header>
  )
}

export default Header
