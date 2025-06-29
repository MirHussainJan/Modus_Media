import Header from "../components/Header";
import PricingCard from "../components/PricingCard";
import ClientsSection from "../components/ClientsSection";
import Footer from "../components/Footer";
import BusinessServicesCard from "../components/BusinessServicesCard";
import React, { useState, useEffect } from "react";
import { getItemWithParentBoardRelation } from "../monday";
import BundleServices from "../components/BundleServices";
import BundlePricing from "../components/BundlePricing";
const BundleWithout = () => {
  const [mondayData, setMondayData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch Monday.com data on component mount
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getItemWithParentBoardRelation();
        if (response && response.length > 0) {
          setMondayData(response); // Get the first item
        }
      } catch (err) {
        setError(err.message);
        console.error("Error fetching Monday data:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const package1Features = [
    {
      icon: "/Music.svg",
      text: "תכני מוסיקה בהתאמה אישית כולל כל עדויות המהלומים",
    },
    { icon: "/Settings.svg", text: "עדכוני מוסיקה שוטפים בהתאם לפרופיל העסקי" },
    {
      icon: "/Play.svg",
      text: "תוכנת נגן התמקמת על מחשב לקוות לרגעים רגישים שימושי בה",
    },
    {
      icon: "/Phone.svg",
      text: "אפליקצית מובייל (iOS, Android) שליט ריחוק השולטת בתוכנת הנגן",
    },
    {
      icon: "/Tools.svg",
      text: "תמיכה טכנית עבור תוכנת הנגן ואפליקצית המובייל",
    },
  ];

  const package2Features = [
    {
      icon: "/uilMusic.svg",
      text: (
        <>
          מערכת מחשב + יחידת הגברה <br />{" "}
          <span className="text-blue-500">Modus Mini Box</span>
        </>
      ),
    },
    {
      icon: "/Music.svg",
      text: "תכני מוסיקה בהתאמה אישית כולל כל עדויות המהלומים",
    },
    {
      icon: "/Reload.svg",
      text: "תכני מוסיקה בהתאמה אישית כולל כל עדויות המהלומים",
    },
    {
      icon: "/Play.svg",
      text: "תוכנת נגן ורישיון שימוש בה",
    },
    {
      icon: "/Phone.svg",
      text: "אפליקצית מובייל (iOS, Android) שליט ריחוק השולטת בתוכנת הנגן",
    },
    {
      icon: "/Cloud.svg",
      text: "נגן וידאו חכם , פתרון ענן עד 2 מסכים , תכני וידאו מותאמים",
    },
    {
      icon: "/Calendar.svg",
      text: "תזמון והפעלה אוטומטיים בהתאם לשעות הפעילות",
    },
    {
      icon: "/Tools.svg",
      text: "תמיכה טכנית עבור תוכנת הנגן ואפליקצית המובייל",
    },
  ];

  // Show loading state
  if (loading) {
    return (
      <div className="min-h-screen p-8 xl:px-64">
        <Header />
        <div className="flex items-center justify-center mt-20">
          <div className="text-center">
            <div className="text-xl text-gray-600">טוען נתונים...</div>
          </div>
        </div>
        <ClientsSection />
        <Footer />
      </div>
    );
  }

  // Show error state
  if (error) {
    return (
      <div className="min-h-screen p-8 xl:px-64">
        <Header />
        <div className="flex items-center justify-center mt-20">
          <div className="text-center">
            <div className="text-xl text-red-500">
              שגיאה בטעינת הנתונים: {error}
            </div>
          </div>
        </div>
        <ClientsSection />
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen p-8 xl:px-64">
      <Header />
      <div className="flex flex-col md:flex-row gap-5 justify-between md:mt-20 w-full mt-14">
        <BundleServices
          title="מדעי עסקים בוחרים"
          subtitle="במדיום מדיה"
          packageTitle="חבילת"
          packageNumber="1"
          features={package1Features}
          price="170"
          currency="₪"
          priceNote="+ מע״מ לחודש לנקודת נגיעה"
        />
        <BundlePricing
          title="חבילת"
          number="bundle"
          features={package2Features}
          price="170"
          mondayData={mondayData}
        />
      </div>

      <ClientsSection />
      <Footer />
    </div>
  );
};

export default BundleWithout;
