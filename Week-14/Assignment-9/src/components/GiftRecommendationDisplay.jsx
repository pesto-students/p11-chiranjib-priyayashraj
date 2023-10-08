import React from 'react';
import { connect } from 'react-redux';

function GiftRecommendationDisplay({ gifts }) {
  return (
    <div>
      <h2>Recommended Gifts</h2>
      {/* <ul>
        {gifts.map((gift, index) => (
          <li key={index}>{gift}</li>
        ))}
      </ul> */}
      <p>
        {gifts}
      </p>
    </div>
  );
}

const mapStateToProps = (state) => ({
  gifts: state.recommendedGifts.gifts,
});

export default connect(mapStateToProps)(GiftRecommendationDisplay);