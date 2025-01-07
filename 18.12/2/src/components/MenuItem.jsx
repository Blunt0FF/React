function MenuItem(props) {
  return (
    <div>
      <h3>{props.name}</h3>
      <p>{props.description}</p>
      <p>{props.price}</p>
    </div>
  )
}

export default MenuItem
