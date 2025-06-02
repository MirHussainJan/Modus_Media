import Header from "./components/Header"
import PackagesSection from "./components/PackagesSection"
import Footer from "./components/Footer"
import "./index.css"

function App() {
  return (
    <div className="font-heebo bg-gray-100 text-gray-800 min-h-screen">
      <Header />
      <PackagesSection />
      <Footer />
    </div>
  )
}

export default App
