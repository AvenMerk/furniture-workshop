import { connect } from 'react-redux'
import { toggleTodo } from '../actions'
import ItemList from '../components/ItemList'

const mapStateToProps = state => ({
  items: state.items
})

const mapDispatchToProps = dispatch => ({
  toggleTodo: id => dispatch(toggleTodo(id))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ItemList)
