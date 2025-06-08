import React, { useState, useEffect } from 'react';

const GithubCarousel = () => {
  const [repos, setRepos] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const githubUsername = 'arijiiiitttt'; // Replace with your GitHub username

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const response = await fetch(`https://api.github.com/users/${githubUsername}/repos?sort=updated&direction=desc`);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setRepos(data);
      } catch (error) {
        console.error('Error fetching repos:', error);
        // Handle error appropriately (e.g., display an error message)
      }
    };

    fetchRepos();
  }, [githubUsername]);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? repos.length - 1 : prevIndex - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === repos.length - 1 ? 0 : prevIndex + 1));
  };

  if (!repos || repos.length === 0) {
    return <div className="text-center py-4">Loading repositories...</div>; // Or display an error message
  }

  const currentRepo = repos[currentIndex];

  return (
    <div className="relative w-full max-w-2xl mx-auto overflow-hidden rounded-lg shadow-md">
      <div className="flex transition-transform duration-300 ease-in-out" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
        {repos.map((repo, index) => (
          <div key={repo.id} className="w-full flex-shrink-0 p-6">
            <h3 className="text-xl font-semibold text-gray-800">{repo.name}</h3>
            <p className="mt-2 text-gray-600">{repo.description || 'No description available.'}</p>
            <a href={repo.html_url} target="_blank" rel="noopener noreferrer" className="mt-4 inline-block text-blue-500 hover:underline">
              View on GitHub
            </a>
          </div>
        ))}
      </div>

      <button onClick={goToPrevious} className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-gray-200 hover:bg-gray-300 text-gray-700 font-bold py-2 px-4 rounded-full focus:outline-none">
        &lt;
      </button>
      <button onClick={goToNext} className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-gray-200 hover:bg-gray-300 text-gray-700 font-bold py-2 px-4 rounded-full focus:outline-none">
        &gt;
      </button>
    </div>
  );
};

export default GithubCarousel;
