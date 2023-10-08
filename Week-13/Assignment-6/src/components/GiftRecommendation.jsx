import OpenAI from "openai";
import React, { useState } from "react";

function GiftRecommendation() {
  const openai = new OpenAI({
    apiKey: process.env.REACT_APP_OPENAI_API_KEY,
    dangerouslyAllowBrowser: true,
  });
  const [recipientInfo, setRecipientInfo] = useState({
    age: "",
    gender: "",
    interests: "",
  });
  const [apiResponse, setApiResponse] = useState("");
  const [loading, setLoading] = useState(false);

  const onSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const chatCompletion = await openai.chat.completions.create({
        model: "gpt-3.5-turbo",
        messages: [
          {
            role: "user",
            content: `Gift recommendation for ${recipientInfo.age} years old ${recipientInfo.gender} who has interest in ${recipientInfo.interests}`,
          },
        ],
        max_tokens: 30,
      });
      setApiResponse(chatCompletion.choices[0].message.content);
    } catch (e) {
      setApiResponse("Something is going wrong, Please try again.");
    }
    setLoading(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setRecipientInfo({ ...recipientInfo, [name]: value });
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
            value={recipientInfo.age}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="gender">Gender:</label>
          <input
            type="text"
            id="gender"
            name="gender"
            value={recipientInfo.gender}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="interests">Interests:</label>
          <textarea
            id="interests"
            name="interests"
            value={recipientInfo.interests}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" disabled={loading}>
          Get Gift Recommendations
        </button>
      </form>
      {apiResponse && (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <pre>
            <strong>API response:</strong>
            {apiResponse}
          </pre>
        </div>
      )}
    </div>
  );
}

export default GiftRecommendation;
