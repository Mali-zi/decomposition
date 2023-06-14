import TabSwitcher from './TabSwitcher';

export default function SiteMain() {
  return (
    <main>
    <nav>
      <TabSwitcher>
        <p>Видео</p>
        <p>Картинки</p>
        <p>Новости</p>
        <p>Карты</p>
        <p>Маркет</p>
        <p>Переводчик</p>
        <p>Эфир</p>
        <p>Ещё</p>
      </TabSwitcher>
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
  )
}
