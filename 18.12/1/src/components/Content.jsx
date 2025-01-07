function Content(props) {
  const { titleText, paragraghText, imgUrl } = props

  // Аналогично строке 2
  // const titleText = props.titleText
  // const paragraghText = props.paragraghText
  // const imgUrl = props.imgUrl
  return (
    <div>
      <h1>{titleText}</h1>
      <p>{paragraghText}</p>
      <img src={imgUrl} alt={titleText} />

      {props.children}
    </div>
  )
}

export default Content
