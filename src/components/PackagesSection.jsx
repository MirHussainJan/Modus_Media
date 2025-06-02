import Package from "./Package"

const PackagesSection = () => {
  const packagesData = [
    {
      id: 1,
      title: "חבילה",
      number: 1,
      name: "media",
      subtitle: "חבילה מדיה:",
      features: [
        "הכנת מוסיקה בהתאמה אישית\nכולל כל הזכויות המשפטיות",
        "עריכת מוסיקה טופים בהתאם\nלפרטים הטכניים",
        "הפצה גם באמצעות על השירות\nקידום ברשת רשתות חברתיות",
        "אפליקציות מובייל (iOS, Android)\nאתרי רשת והתאמה לכל הגדלים",
        "הפצה מלאה עבור הזמנה גדול\nאפליקציות מובייל",
      ],
      icons: [
        "/icons/mdi-light_music.png",
        "/icons/solar_settings-outline.png",
        "/icons/solar_play-line-duotone.png",
        "/icons/bi_phone.png",
        "/icons/codicon_tools.png",
      ],
      price: 170,
    },
    {
      id: 2,
      title: "חבילה",
      number: 2,
      name: "media",
      subtitle: "חבילה מדיה:",
      features: [
        "מערכת מחשב\nModus Mini Box",
        " תכני מוסיקה בהתאמה אישית\nלויות התמלוגים",
        "עריכת מוסיקה טופים בהתאם\nלפרטים הטכניים",
        "הפצה בכל\nרשתות המוסיקה",
        "אפליקציות מובייל (iOS, Android)\nאתרי רשת והתאמה לכל הגדלים",
        "הפצה מלאה עבור הזמנה גדול\nאפליקציות מובייל",
      ],
      icons: [
        "/icons/uil_music.png",
        "/icons/mdi-light_music.png",
        "/icons/solar_settings-outline.png",
        "/icons/solar_play-line-duotone.png",
        "/icons/bi_phone.png",
        "/icons/codicon_tools.png",
      ],
      price: 170,
    },
  ]

  return (
    <main className="flex flex-row-reverse justify-center gap-5 p-5 md:flex-row flex-col bg-white">
      {packagesData.map((packageData) => (
        <Package key={packageData.id} {...packageData} />
      ))}
    </main>
  )
}

export default PackagesSection
