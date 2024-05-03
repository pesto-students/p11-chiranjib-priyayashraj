import React, { useState } from "react";

function URLShortenerForm() {
  const [longUrl, setLongUrl] = useState("");
  const [shortenedUrl, setShortenedUrl] = useState();

  const shortenUrl = (longUrl) => {
    fetch(`https://api.shrtco.de/v2/shorten?url=${longUrl}`)
      .then((response) => response.json())
      .then((data) => {
        if (data.ok) {
          setShortenedUrl(data.result.short_link);
        } else {
          alert("Error shortening URL. Please try again.");
        }
      })
      .catch((error) => {
        console.error("Error:", error);
        alert("An error occurred while shortening the URL.");
      });
  };

  const handleShortenClick = () => {
    shortenUrl(longUrl);
    setLongUrl("");
  };

  return (
    <div>
      <div>
        <input
          type="text"
          placeholder="Enter URL"
          value={longUrl}
          onChange={(e) => setLongUrl(e.target.value)}
        />
        <button onClick={handleShortenClick}>Shorten</button>
      </div>
      {shortenedUrl}
    </div>
  );
}

export default URLShortenerForm;
