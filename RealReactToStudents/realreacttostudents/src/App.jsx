import { Book } from './Book'

const App = () => {
  return (
    <div>
      <h1>Создаём приложение на React</h1>
      <Book name="JS" year="2019" price="$87">
        Можно передать любой контент, который будет в компоненте определён как
        "children"
      </Book>
      <Book name="JS for beginners" year="2016" price="$33" />
      <Book year="2025" price="$117" />
    </div>
  );
};

export { App };