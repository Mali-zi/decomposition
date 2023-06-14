import React from 'react';

function App() {
  return (
    <div>
      <header>
        <nav>
          <ul>
            <li>
              Сейчас в СМИ
            </li>
            <li>
              В Германии
            </li>
            <li>
              Рекомендуем
            </li>
          </ul>
          <div>
            Дата и время
          </div>
        </nav>
        <div className='leftHeader'>
          <ul>
            <li>
              Пляжи Сочи закрыли из-за дождей
            </li>
            <li>
              LSM: на границе Латвии появились очереди ожидающих въезда в Россию украинцев и молдаван
            </li>
            <li>
              Путин поручил интегрировать беспилотники в единое воздушное пространство России
            </li>
            <li>
              InfoBRICS: ВС России уничтожили большую часть Bradley из-за просчётов украинской армии
            </li>
            <li>
              В Екатеринбурге скончалась школьница, смешавшая пиво и таблетки
            </li>
          </ul>
          <ul>
            <li>
              $ 84,61 +0,31
            </li>
            <li>
              € 91,39 +0,45
            </li>
            <li>
              75,72 +0,89
            </li>
          </ul>
        </div>
        <div className='rightHeader'> 
          <img src='' alt=''></img>
          <h3>Работа над ошибками</h3>
          <p>Смотрите на Яндексе и запоминайте</p>
        </div>
      </header>
      <main>
        <nav>
          <li>
            Видео
          </li>
          <li>
            Картинки
          </li>
          <li>
            Новости
          </li>
          <li>
            Карты
          </li>
        </nav>
        <div>
          <img src='' alt=''></img>
          <form>
            <label htmlFor='search'>
              <input type='search' id='search'></input>
              Найдётся всё. Например, фаза луны сегодня
            </label>
            <input type='button' value='Найти'></input>
          </form>
        </div>
      </main>
      <footer>
        <div>
          <h3>Погода</h3>
          <div>
            <img src='' alt=''></img>
            <div>
              Утром +17, днём +20
            </div>
          </div>
        </div>

        <div>
          <h3>Посещаемое</h3>
          <ul>
            <li>
              Недвижимость - о сталинках
            </li>
            <li>
              Маркет - люстры и светильники
            </li>
            <li>
              Авто.ру - привод 4х4 до 500 000
            </li>
          </ul>
        </div>

        <div>
          <h3>Карта Германии</h3>
          <p>Расписания</p>
        </div>

        <div>
          <h3>Телепрограмма</h3>
          <ul>
            <li>
              10:35 Лесник. "Охота", 1-я и 2-я серии 
              <img src='' alt=''></img>
            </li>
            <li>
              13:00 Сегодня
              <img src='' alt=''></img>
            </li>
            <li>
              14:00 Место встречи
              <img src='' alt=''></img>
            </li>
          </ul>
        </div>

        <div>
          <h3>Эфир</h3>
          <ul>
            <li>
              Управление как искусство 
              <img src='' alt=''></img>
            </li>
            <li>
              Ночь. Мир в это время
              <img src='' alt=''></img>
            </li>
            <li>
              Андрей Возн...
              <img src='' alt=''></img>
            </li>
          </ul>
        </div>

      </footer>
    </div>
  );
}

export default App;
