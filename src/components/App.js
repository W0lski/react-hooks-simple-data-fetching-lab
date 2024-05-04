import React, { useState, useEffect } from "react";

function App() {
  const [dogImageUrl, setDogImageUrl] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchDogImage = () => {
      setIsLoading(true);
      fetch("https://dog.ceo/api/breeds/image/random")
        .then((response) => {
          if (!response.ok) {
            throw new Error("Failed to fetch dog image");
          }
          return response.json();
        })
        .then((data) => {
          setDogImageUrl(data.message);
          setIsLoading(false);
        })
        .catch((error) => {
          console.error("Error fetching dog image:", error);
          setIsLoading(false);
        });
    };

    fetchDogImage();

    // Cleanup function
    return () => {
      // Cleanup if necessary
    };
  }, []);

  return (
    <div>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <img
          src={dogImageUrl}
          alt="A Random Dog"
          style={{ maxWidth: "100%", height: "auto" }}
        />
      )}
    </div>
  );
}

export default App;