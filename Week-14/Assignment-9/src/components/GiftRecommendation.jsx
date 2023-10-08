import OpenAI from "openai";
import React, { useState } from "react";
import { connect } from "react-redux";
import { setAge, setGender, setInterests } from "../redux/userPreferences";
import { setGifts } from "../redux/recommendedGiftsSlice";
import GiftRecommendationDisplay from "./GiftRecommendationDisplay";

function GiftRecommendationForm({
  age,
  gender,
  interests,
  setAge,
  setGender,
  setInterests,
}) {
  const [loading, setLoading] = useState(false);

  const handleChangeAge = (e) => {
    e.preventDefault();
    setAge(e.target.value);
  };
    const handleChangeGender = (e) => {
    e.preventDefault();
    setGender(e.target.value);
  };
    const handleChangeInterest = (e) => {
    e.preventDefault();
    setInterests(e.target.value);
  };
  const openai = new OpenAI({
    apiKey: process.env.REACT_APP_OPENAI_API_KEY,
    dangerouslyAllowBrowser: true,
  });

  const onSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const chatCompletion = await openai.chat.completions.create({
        model: "gpt-3.5-turbo",
        messages: [
          {
            role: "user",
            content: `Gift recommendation for ${age} years old ${gender} who has interest in ${interests}`,
          },
        ],
        max_tokens: 30,
      });
      setGifts(chatCompletion.choices[0].message.content);
    } catch (e) {
      setGifts("Something is going wrong, Please try again.");
    }
    setLoading(false);
  };

  return (
    <div className="gift-recommendation-form">
      <h2>Recipient Information</h2>
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label htmlFor="age">Age:</label>
          <input
            type="text"
            id="age"
            name="age"
            value={age}
            onChange={handleChangeAge}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="gender">Gender:</label>
          <input
            type="text"
            id="gender"
            name="gender"
            value={gender}
            onChange={handleChangeGender}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="interests">Interests:</label>
          <textarea
            id="interests"
            name="interests"
            value={interests}
            onChange={handleChangeInterest}
            required
          />
        </div>
        <button type="submit" disabled={loading}>
          Get Gift Recommendations
        </button>
      </form>
      {!loading && <GiftRecommendationDisplay />}
    </div>
  );
}
const mapStateToProps = (state) => ({
  age: state.userPreferences.age,
  gender: state.userPreferences.gender,
  interests: state.userPreferences.interests,
});

const mapDispatchToProps = { setAge, setGender, setInterests, setGifts };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GiftRecommendationForm);
