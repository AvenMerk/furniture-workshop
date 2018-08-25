import { connect } from 'react-redux'
import ItemList from '../components/ItemList'

const mapStateToProps = state => ({
  items: state.items
});

export default connect(
  mapStateToProps
)(ItemList)
