import React, { useEffect, useState } from 'react';
import './App.css';
import Countdown from './Countdown';

function App() {
  // State to handle language toggle
  const [language, setLanguage] = useState('en');  // Default language is English
  const [isPlaying, setIsPlaying] = useState(false); // State to control audio playback
  const [audio] = useState(new Audio('/utomp3.com - A Thousand Years.mp3')); // Initialize audio element

  // English and Bengali translations
  const translations = {
    en: {
      invitation: "You're Invited!",
      toTheWedding: "To the wedding of",
      names: "Anamika & Animesh",
      weddingDetails: "Wedding Details",
      date: "Date: Monday, 3rd March 2025",
      time: "Time: 12:00-2:00 AM",
      venue: "Venue:  Uttar Kakchira(Tagore Bari), Bamna, Barguna",
      rsvp: "RSVP",
      footer: "Anamika & Animesh | 2025",
      message: "\"We are thrilled to celebrate this special day with our loved ones. Your presence will make it more joyful and memorable.\"",
      namePlaceholder: "Your Name",
      commentPlaceholder: "Your good wishes",
      submit: "Send",
      wishes: "Please leave your wishes here for the bride and groom",
      coming: "Are you Coming ?",
      yes: "yes",
      no: "No",
      countdown: "Countdown to Event",
      alert: "Thank you for your time!",
      alert2: "Sorry Your Message is not recorded Try again later!"
    },
    bn: {
      invitation: "আপনি আমন্ত্রিত!",
      toTheWedding: "বিয়েতে",
      names: "অনামিকা ও অনিমেষের",
      weddingDetails: "বিবাহ বিবরণী",
      date: "তারিখ: সোমবার, ৩রা মার্চ ২০২৫",
      time: "সময়: রাত ১২-২ টা",
      venue: "স্থান: উত্তর কাকচিড়া (ঠাকুর বাড়ি), বামনা, বরগুনা",
      rsvp: "অংশগ্রহণ জানানো",
      footer: "অনামিকা ও অনিমেষ | ২০২৪",
      message: "\"আমরা এই বিশেষ দিনটি আমাদের প্রিয়জনদের সাথে উদযাপন করতে পেরে অত্যন্ত আনন্দিত। আপনার উপস্থিতি এটিকে আরো আনন্দময় ও স্মরণীয় করবে।\"",
      namePlaceholder: "আপনার নাম",
      commentPlaceholder: "শুভেচ্ছা বার্তা",
      submit: "পাঠান",
      wishes: "বর এবং কনের জন্য এখানে আপনার শুভেচ্ছা বার্তা দিন",
      coming: "আপনি কি আসছেন ?",
      yes: "হ্যাঁ",
      no: "না",
      countdown: "কাউন্টডাউন",
      alert: "আপনার সময়ের জন্য ধন্যবাদ!",
      alert2: "দুঃখিত আপনার বার্তা রেকর্ড করা হয়নি পরে আবার চেষ্টা করুন!"
    }
  };

  // Handle language toggle
  const toggleLanguage = () => {
    setLanguage((prevLanguage) => (prevLanguage === 'en' ? 'bn' : 'en'));
  };

  useEffect(() => {
    // Set the initial volume to 50% and play music
    audio.volume = 0.1;
    audio.play().catch((error) => {
      console.error('Auto-play failed:', error);
      setIsPlaying(false); // If auto-play fails, update the state
    });

    // Cleanup on unmount
    return () => {
      audio.pause();
      audio.currentTime = 0;
    };
  }, [audio]);

  const toggleAudio = () => {
    if (isPlaying) {
      audio.pause();
    } else {
      audio.currentTime = 0;  // Reset to the beginning
      audio.play().catch((error) => {
        console.error('Auto-play failed:', error);
        setIsPlaying(false); // If auto-play fails, update the state
      });
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div>
      <img src="/left.png" alt="Top Left" className="top-left-image" />
      <img src="/right.png" alt="Top Right" className="top-right-image" />
      <div className="container">
      <header className="header">
        {language === 'bn' ? (
          <>
            <h1 style={{ fontSize: '35px', fontFamily: 'Atma, system-ui' }}>{translations[language].invitation}</h1>
            <h2 style={{ fontSize: '33px', fontFamily: 'Atma, system-ui' }}>{translations[language].names}</h2>
            <p style={{ fontSize: '25px', fontFamily: 'Atma, system-ui' }}>{translations[language].toTheWedding}</p>
          </>
        ) : (
          <>
            <h1>{translations[language].invitation}</h1>
            <p>{translations[language].toTheWedding}</p>
            <h2>{translations[language].names}</h2>
          </>
        )}
      </header>

        <section className="details">
          <h3>{translations[language].weddingDetails}</h3>
          <p><strong>{translations[language].date}</strong></p>
          <p><strong>{translations[language].time}</strong></p>
          <p><strong>{translations[language].venue}</strong></p>
          <section className="countdown">
            {language === 'bn' ? (
              <>
              <h3 style={{ fontSize: '25px', fontFamily: 'Atma, system-ui'  }}>{translations[language].countdown}</h3>
              </>
            ):(
              <>
              <h3 style={{ fontFamily: 'Dancing Script, cursive', fontSize: '25px'}}>{translations[language].countdown}</h3>
              </>
            )}
            <Countdown language={language} />
          </section>
        </section>

        <section className="message">
          {language === 'bn' ? (
            <>
            <p style={{ fontSize: '25px', fontFamily: 'Atma, system-ui'  }}>{translations[language].message}</p>
            </>
          ):(
            <>
            <p>{translations[language].message}</p>
            </>
          )}
        </section>

        <footer className="footer">
          <p>{translations[language].footer}</p>
        </footer>

       {/* Language and sound toggle buttons */}
        <div className="toggle-container">
          <button onClick={toggleLanguage} className="language-toggle">
            {language === 'en' ? 'BN' : 'EN'}
          </button>
          <button onClick={toggleAudio} className="sound-toggle">
            {isPlaying ? '🔊' : '🔈'}
          </button>
        </div>

      </div>
    </div>
  );
}

export default App;
