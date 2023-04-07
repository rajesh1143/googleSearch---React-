import './index.css'

const SuggestionItem = props => {
  const {suggestion, updateSuggestion} = props

  const onClickBtn = () => {
    updateSuggestion(suggestion)
  }

  return (
    <li className="suggestion-list">
      <p className="suggestion">{suggestion}</p>
      <button type="button" className="arrow-button" onClick={onClickBtn}>
        <img
          className="arrow-image"
          src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
          alt="arrow"
        />
      </button>
    </li>
  )
}

export default SuggestionItem
