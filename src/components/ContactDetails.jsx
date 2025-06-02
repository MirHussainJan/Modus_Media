const ContactDetails = () => {
  const contactInfo = [
    { icon: "📞", text: "0395521528" },
    { icon: "✉️", text: "sales@modusmedia.io" },
    { icon: "🔍", text: "modusmedia.io" },
  ]

  return (
    <div className="mt-4 flex flex-col space-y-1">
      {contactInfo.map((contact, index) => (
        <div key={index} className="flex items-center">
          <span className="ml-3">{contact.icon}</span>
          <span>{contact.text}</span>
        </div>
      ))}
    </div>
  )
}

export default ContactDetails
