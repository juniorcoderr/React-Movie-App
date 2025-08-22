const MovieCard = ({
  movie: { Title, Year, Poster, imdbRating, Language },
}) => {
  // Function to convert full language names to short codes
  const getShortLang = (langStr) => {
    if (!langStr) return "N/A";

    // Agar OMDB se multiple languages aati hain (comma separated)
    const langs = langStr.split(",").map((lang) => lang.trim());

    // Mapping languages to short codes
    const langMap = {
      English: "EN",
      Hindi: "HI",
      French: "FR",
      Spanish: "ES",
      German: "DE",
      Japanese: "JA",
      Chinese: "ZH",
      Korean: "KO",
      Italian: "IT",
      Russian: "RU",
    };

    // Map every language to its short code, default same if not in map
    return langs.map((lang) => langMap[lang] || lang).join(", ");
  };

  return (
    <div className="movie-card">
      <img src={Poster !== "N/A" ? Poster : "/no-movie.png"} alt={Title} />

      <div className="mt-4">
        <h3>{Title}</h3>

        <div className="content">
          <div className="rating">
            <img src="star.svg" alt="Star Icon" />
            <p>{imdbRating !== "N/A" ? imdbRating : "N/A"}</p>
          </div>

          <span>•</span>
          <p className="lang">{getShortLang(Language)}</p>

          <span>•</span>
          <p className="year">{Year || "N/A"}</p>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
