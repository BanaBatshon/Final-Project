import DishListView from '../DishListView';
import React, {Component} from 'react';
import { connect } from 'react-redux';
import { fetchAllMyRatings } from '../../actions/index';


class MainView extends Component {

    componentDidMount() {
        this.props.dispatch(fetchAllMyRatings(1));
    }

    render() {
        return (
            <div className="site-section bg-light">
                <div className="container">
                <div className="row justify-content-start text-left mb-5">
                    <div className="col-md-9">
                    <h2 className="font-weight-bold text-black">My Ratings</h2>
                    </div>
                </div>
                  return <DishListView dishes={this.props.myRatings} />
                </div>
            </div>
            );
    } 
};

const mapStateToProps = state => {
  return {
     myRatings: state.myRatings.myRatings
  };
};

export default connect(
  mapStateToProps
)(MainView);