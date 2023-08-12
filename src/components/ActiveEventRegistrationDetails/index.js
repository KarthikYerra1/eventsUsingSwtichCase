import './index.css'

const status = {
  yetToRegister: 'YET_TO_REGISTER',
  registered: 'REGISTERED',
  registrationsClosed: 'REGISTRATIONS_CLOSED',
}

const ActiveEventRegistrationDetails = props => {
  const {eventRegistrationStatus} = props

  const renderNoActiveRegistrations = () => (
    <p className="no-registrations">
      Click on an event, to view its registration details
    </p>
  )

  const renderYetToRegister = () => (
    <div className="status-view">
      <img
        src="https://assets.ccbp.in/frontend/react-js/events-register-img.png"
        alt="yet to register"
        className="yet-to-register"
      />
      <p className="yet-to-register-text">
        A live performance brings so much to your relationship with dance.
        Seeing dance live can make you often totally fall in love with this
        beautiful art form.
      </p>
      <button className="register-btn" type="button">
        Register Here
      </button>
    </div>
  )

  const renderRegistered = () => (
    <div className="status-view">
      <img
        src="https://assets.ccbp.in/frontend/react-js/events-regestered-img.png"
        alt="registered"
        className="registered-image"
      />
      <h1 className="registered-text">
        You have already registered for the event
      </h1>
    </div>
  )

  const renderRegistrationsClosed = () => (
    <div className="status-view">
      <img
        src="https://assets.ccbp.in/frontend/react-js/events-registrations-closed-img.png"
        alt="registrations closed"
        className="registrations-closed-image"
      />
      <h1 className="closed-heading">Registrations Are Closed Now!</h1>
      <p className="closed-text">Stay tuned. We will reopen</p>
    </div>
  )

  const showEventRegistrationDetails = () => {
    switch (eventRegistrationStatus) {
      case status.yetToRegister:
        return renderYetToRegister()
      case status.registered:
        return renderRegistered()
      case status.registrationsClosed:
        return renderRegistrationsClosed()
      default:
        return renderNoActiveRegistrations()
    }
  }

  return (
    <div className="status-container">{showEventRegistrationDetails()}</div>
  )
}

export default ActiveEventRegistrationDetails
