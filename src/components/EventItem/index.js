import './index.css'

const EventItem = props => {
  const {details, selectEventId, isSelected} = props
  const {id, imageUrl, name, location} = details

  const className = isSelected ? 'event-img active' : 'event-img'

  const onClickEvent = () => {
    selectEventId(id)
  }

  return (
    <li className="event-item">
      <button className="btn" type="button" onClick={onClickEvent}>
        <img src={imageUrl} alt="event" className={className} />
      </button>
      <p className="event-name">{name}</p>
      <p className="event-location">{location}</p>
    </li>
  )
}

export default EventItem
