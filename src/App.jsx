import Card from "./components/Card";
import Header from "./components/Header";
import './styles/styles.css'
import data from './data'

export default function App() {
  // Passing the properties of the data object to the cards to render
  const cards = data.map(element =>
    <Card
      key={element.id}
      // its a better practice to pass the complete mapped object, then speficy the properties on the component
      //element={element}
      // Spreading an object as props, so we can get rid of .element on the component, because we're working directly with the object props
      {...element}
    />
  )

  return (
    <div className="main-container"> 
      <Header />
      <section className="cards-container">
        {cards}
      </section> 
    </div>
  )
}

