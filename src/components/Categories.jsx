import React from 'react'
export default function Categories() {

  const categories = ['Все', 'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые'];
  const [changeActive, setChangeActive] = React.useState(0);

  const handleActive = (index) => {
    setChangeActive(index);
  }

  return (
    <div className='categories'>
      <ul>
        {
          categories.map((value, index) => (
            <li onClick={() => handleActive(index)} className={changeActive === index ? 'active' : ''}>
              {value}
            </li>
          ))
        }
      </ul>
    </div>
  )
}