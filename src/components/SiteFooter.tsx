import RowList from './RowList';

export default function SiteFooter() {
  return (
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

      <RowList>
        <h3>Посещаемое</h3>
        <p>Недвижимость - о сталинках</p>
        <p>Маркет - люстры и светильники</p>
        <p>Авто.ру - привод 4х4 до 500 000</p>
      </RowList>

      <RowList>
        <h3>Карта Германии</h3>
        <p>Расписания</p>
      </RowList>

      <RowList>
        <h3>Телепрограмма</h3>
        <p>10:35 Лесник. "Охота", 1-я и 2-я серии</p>
        <p>13:00 Сегодня</p>
        <p>14:00 Место встречи</p>
      </RowList>

      <RowList>
        <h3>Эфир</h3>
        <p>Управление как искусство</p>
        <p>Ночь. Мир в это время</p>
        <p>Андрей Возн...</p>
      </RowList>
  </footer>
  )
}
