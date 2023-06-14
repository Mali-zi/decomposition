import RowList from './RowList';
import TabSwitcher from './TabSwitcher';

export default function SiteHeader() {
  return (
    <header>
    <nav>
      <TabSwitcher>
        <p>Сейчас в СМИ</p>
        <p>В Германии</p>
        <p>Рекомендуем</p>
      </TabSwitcher>
      <div>
        Дата и время
      </div>
    </nav>
    <div className='leftHeader'>
      <RowList>
        <p>Пляжи Сочи закрыли из-за дождей</p>
        <p>Путин поручил интегрировать беспилотники в единое воздушное пространство России</p>
        <p>InfoBRICS: ВС России уничтожили большую часть Bradley из-за просчётов украинской армии</p>
        <p>В Екатеринбурге скончалась школьница, смешавшая пиво и таблетки</p>
        <p>Египет подал заявку на вступление в БРИКС</p>
      </RowList>
      <TabSwitcher>
        <p>$ 84,61 +0,31</p>
        <p>€ 91,39 +0,45</p>
        <p>75,72 +0,89</p>
      </TabSwitcher>
    </div>
    <div className='rightHeader'> 
      <img src='' alt=''></img>
      <h3>Работа над ошибками</h3>
      <p>Смотрите на Яндексе и запоминайте</p>
    </div>
  </header>
  )
}
