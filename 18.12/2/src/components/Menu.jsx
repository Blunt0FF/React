import MenuItem from './MenuItem'

function Menu(props) {
  return (
    <div>
      {props.menu.map(item => (
        <MenuItem
          key={item.id}
          name={item.name}
          description={item.description}
          price={item.price}
        />
      ))}
    </div>
  )
}

export default Menu
