import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import RestaurantList from './components/RestaurantList';
import MainView from './MainView';

class Home extends Component {
  render() {
    return (
      <div className="site-wrap">
        <Navigation />
        <Hero />
        <MainView />
      </div>
    );
  }
}

export default App;




// function RestaurantList({ restaurants }) {
//   if (!restaurants.length) {
//     return (
//       <div>
//         No Restaurants
//       </div>
//     )
//   }
//   return (
//     <div className="site-section bg-light">
//       <div className="container">
//         <div className="row justify-content-start text-left mb-5">
//           <div className="col-md-9">
//             <h2 className="font-weight-bold text-black">Discover Restaurants</h2>
//           </div>
//         </div>

//         {restaurants.map(restaurant => {
//           return (
//             <Restaurant restaurant={restaurant} key={restaurant.id} />
//           );
//         })}
//       </div>
//     </div>
//   );
// }

// const mapStateToProps = state => {
//   return {
//     restaurants: state.restaurants
//   };
// };

// export default connect(
//   mapStateToProps
// )(RestaurantList);

class Home extends React.Component {
  render() {
    return (
      <div className="site-section bg-light">
        <div className="container">
          <div className="row justify-content-start text-left mb-5">
            <div className="col-md-9">
              <h2 className="font-weight-bold text-black">Discover Restaurants</h2>
            </div>
          </div>
          <RestaurantList />
        </div>
      </div>
    )
  }
}