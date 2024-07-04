import styles from "./NavigationArrows.module.css";

// eslint-disable-next-line react/prop-types
export default function NavigationArrows({
  musicPlayed,
  setMusicPlayed,
  playlistLength,
}) {
  const handleClick = (e) => {
    if (e.target.value === "previous" && musicPlayed > 1) {
        console.log(musicPlayed)
      setMusicPlayed(musicPlayed - 1);
    } else if (
      e.target.value === "next" &&
      musicPlayed < playlistLength
    ) {
        console.log(musicPlayed)
      setMusicPlayed(musicPlayed + 1);
    }
  };

  return (
    <div className={styles.navigationArrows}>
      <button
        type="button"
        onClick={handleClick}
        value="previous"
        className={styles.arrowPrevious}
      >
        &lt;
      </button>
      <button
        type="button"
        onClick={handleClick}
        value="next"
        className={styles.arrowNext}
      >
        &gt;
      </button>
    </div>
  );
}
