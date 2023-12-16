import React from 'react';
import './assets/css/style.css';

function StoriesTab ({ stories }) {  

  const handleNextSlide = () => {
    const storiesList = document.querySelector('.stories-list');
    const prevSlide = document.querySelector('.prev-slide');
    storiesList.scrollBy({
      left: 310,
      behavior: 'smooth'
    });
    prevSlide.classList.remove("visually-hidden");
  }

  const handlePrevSlide = () => {
    const storiesList = document.querySelector('.stories-list');
    const prevSlide = document.querySelector('.prev-slide');
    storiesList.scrollBy({ 
      left: -310,
      behavior: 'smooth'
    });

    if(storiesList.scrollLeft <= 350) { 
      prevSlide.classList.add("visually-hidden");
    }
  }

  return (
    <>
      <div className="container-fluid stories-tab d-flex justify-content-end">
        <span className='mt-3 prev-slide visually-hidden' onClick={handlePrevSlide}>
          <ion-icon name="chevron-back-circle"></ion-icon>
        </span>
        <div className="stories-list p-1">
          {stories.map((story) => (
            <div key={story.id} className="story-item">
              <img src={story.imageUrl} className="story-image" />
              <p className="story-username">{story.username}</p>
            </div>
          ))}  
        </div>
        <span className='mt-3 next-slide' onClick={handleNextSlide}>
          <ion-icon name="chevron-forward-circle"></ion-icon>
        </span>         
      </div>
    </>

  );
};

export default StoriesTab;
