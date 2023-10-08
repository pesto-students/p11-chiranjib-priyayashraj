import React from 'react';
import URLShortener from './components/URLShortner';

function App() {

    return (
        <div className="App">
            <h1>URL Shortener</h1>
            <URLShortener onShorten />
        </div>
    );
}

export default App;
