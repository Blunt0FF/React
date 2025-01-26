import { useState } from 'react'
import './App.css'
import CitySelector from './components/CitySelector'
import CityCard from './components/CityCard'
import MathQuiz from './components/MathQuiz'

function App() {
  
  const citiesData = [
  
    {
  
      name: "Токио",
  
      description: "Столица Японии, известная своими неоновыми огнями, многолюдностью и современной архитектурой.",
  
      imageUrl: "https://www.topmagazine.cz/wp-content/uploads/2021/06/tokio-1024x576.jpg",
  
      facts: [
  
        "Токио - самый населенный мегаполис в мире.",
  
        "Здесь расположена самая высокая башня в Японии - Токийская башня.",
  
        "В Токио проходят множество культурных событий и фестивалей."
  
      ]
  
    },
  
    {
  
      name: "Киото",
  
      description: "Город на острове Хонсю, известный своими многочисленными классическими буддийскими храмами, а также садами, императорскими дворцами, синтоистскими святилищами и традиционными деревянными домами.",
  
      imageUrl: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  
      facts: [
  
        "В Киото насчитывается более 1600 буддийских храмов.",
  
        "Этот город был столицей Японии более тысячи лет."
  
      ]
  
    },
  
    {
  
      name: "Осака",
  
      description: "Город в центральной части острова Хонсю, известен своими современными достопримечательностями и активной ночной жизнью.",
  
      imageUrl: "https://images.unsplash.com/photo-1593260970020-bf551923a36d?q=80&w=3534&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  
      facts: [
  
        "Осака известна своим замком, который играл ключевую роль в объединении Японии в XVI веке.",
  
        "Город является кулинарной столицей Японии."
  
      ]
  
    },
  
    {
  
      name: "Хоккайдо",
  
      description: "Самый северный остров Японии, известный своей природой, снежными фестивалями и уникальной культурой.",
  
      imageUrl: "https://plus.unsplash.com/premium_photo-1661882926003-91a51e3dfe64?q=80&w=3432&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  
      facts: [
  
        "Хоккайдо предлагает отличные условия для зимних видов спорта, особенно для лыжного спорта и сноубординга.",
  
        "Летом остров привлекает туристов своими цветущими лавандовыми полями."
  
      ]
  
    },
  
    {
  
      name: "Нагоя",
  
      description: "Город в центре Хонсю, известен своим отраслевым влиянием и историческими достопримечательностями.",
  
      imageUrl: "https://plus.unsplash.com/premium_photo-1715106090962-9def47b4d8bc?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  
      facts: [
  
        "Нагоя - один из важнейших промышленных городов Японии, центр автомобилестроения.",
  
        "Здесь находится известный Нагойский замок с позолоченными делфинами на крыше."
  
      ]
  
    }
  
  ];

  const [selectedCity, setSelectedCity] = useState(citiesData[0])
    const handleCityChange = (cityName) => {
    const city = citiesData.find((city) => city.name === cityName);
    if (city) setSelectedCity(city);
  };
  return (
    <>
     <CitySelector citiesData={citiesData} handleCityChange={handleCityChange} selectedCity={selectedCity}/>
     <CityCard selectedCity={selectedCity} />
     <MathQuiz/>
    </>
  )
}

export default App
