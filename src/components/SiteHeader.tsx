import RowList from './RowList';
import TabSwitcher from './TabSwitcher';

export default function SiteHeader() {
  return (
    <header>
    <nav>
      <TabSwitcher widthTabSwitcher={'500px'}>
        <h3>Сейчас в СМИ</h3>
        <h3>В Германии</h3>
        <h3>Рекомендуем</h3>
        <div>
          Дата и время
        </div>
      </TabSwitcher>
    </nav>
    <div className='mainHeader'>
      
      <div className='leftHeader'>
        <RowList icons={<img src={require('../img/news.PNG')} 
            style={{
              width: '15px',
              marginRight: '10px'
            }}
            alt={'icon'}
          />}
        >
          <span>Пляжи Сочи закрыли из-за дождей</span> 
          <span>Число отравившихся шаурмой в Братске превысило 60 человек</span>
          <span>В Крыму за ночь и утро сбили и заглушили девять беспилотников</span>
          <span>Силуанов: KPI — чтобы пессимисты вернулись в Россию</span>
          <span>Египет подал заявку на вступление в БРИКС</span>
        </RowList>
        <TabSwitcher widthTabSwitcher={'500px'}>
          <h4>$ 84,61 +0,31</h4>
          <h4>€ 91,39 +0,45</h4>
          <h4>НЕФТЬ 75,72 +0,89</h4>
        </TabSwitcher>
      </div>

      <div className='rightHeader'> 
        <img src={require('../img/uch.PNG')} 
            style={{
              width: '100px',
              marginRight: '10px'
            }}
            alt={'icon'}
          />
        <h3>Работа над ошибками</h3>
        <p>Смотрите на Яндексе и запоминайте</p>
      </div>
          
    </div>

  </header>
  )
}
