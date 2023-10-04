import Card from './components/Card';
import './App.css';

function App() {
  return (
    <div className='cards'>
      <Card 
        img = 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/07/d7/ca/15/krabi-island-thailand.jpg?w=1200&h=-1&s=1' 
        title = 'Таиланд: обзор' 
        text = 'Густые заросли джунглей Таиланда таят в себе невероятные приключения, а тайские тихие пляжи идеально подходят для отдыха на солнечном берегу моря.'
        link = '#'
      />
      <Card
        title = 'Карты'
        text = 'Карточка — это гибкий и расширяемый контейнер контента.'
        link = '#'
      />
    </div>
  )
}
export default App
