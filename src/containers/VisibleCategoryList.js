import { connect } from 'react-redux'
import CategoryButtonsList from '../components/ListOfCategBut'

const mapStateToProps = state => ({
    categories: state.categories
})

export default connect(
  mapStateToProps
)(CategoryButtonsList)
