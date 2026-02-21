import { useCallback, useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import ConstellationBg from "./components/ConstellationBg";
import Navbar from "./components/Navbar";
import StarField from "./components/StarField";
import { DAYS } from "./data/archiveData";
import DayPage from "./pages/DayPage";
import FinalPage from "./pages/FinalPage";
import LandingPage from "./pages/LandingPage";

export default function SmoochlightArchive() {
  const [page, setPage] = useState(0);
  const [fadeClass, setFadeClass] = useState("fade-active");
  const [ready, setReady] = useState(true);
  const archiveAudioRef = useRef(null);

  const startArchiveAudio = useCallback(() => {
    const audio = archiveAudioRef.current;
    if (!audio) return;
    audio.pause();
    audio.currentTime = 0;
    const playPromise = audio.play();
    if (playPromise?.catch) {
      playPromise.catch(() => {});
    }
  }, []);

  const stopArchiveAudio = useCallback(() => {
    const audio = archiveAudioRef.current;
    if (!audio) return;
    audio.pause();
    audio.currentTime = 0;
  }, []);

  const goTo = useCallback(
    (p) => {
      if (!ready) return;
      setReady(false);
      setFadeClass("fade-exit");
      setTimeout(() => {
        setPage(p);
        window.scrollTo({ top: 0 });
        setFadeClass("fade-enter");
        requestAnimationFrame(() => {
          requestAnimationFrame(() => {
            setFadeClass("fade-active");
            setReady(true);
          });
        });
      }, 500);
    },
    [ready],
  );

  const showNav = page > 0;
  const showArrows = page > 0;

  useEffect(() => {
    if (page === 0) {
      stopArchiveAudio();
    }
  }, [page, stopArchiveAudio]);

  return (
    <div className="archive-root">
      <audio
        ref={archiveAudioRef}
        src="/audio/Smoochlight.wav"
        loop
        preload="auto"
      />
      <div className="bg-gradient" />
      <StarField />
      <ConstellationBg />

      {showNav && <Navbar page={page} goTo={goTo} />}

      {/* Side arrows */}
      {showArrows && page > 0 && page < 13 && (
        <div className="nav-arrow left" onClick={() => goTo(Math.max(0, page - 1))}>
          <ChevronLeft size={24} />
        </div>
      )}
      {showArrows && page < 13 && (
        <div
          className="nav-arrow right"
          onClick={() => goTo(Math.min(13, page + 1))}
        >
          <ChevronRight size={24} />
        </div>
      )}

      {/* Page content */}
      <div className={fadeClass} style={{ position: "relative", zIndex: 2 }}>
        {page === 0 && <LandingPage goTo={goTo} onEnterArchive={startArchiveAudio} />}
        {page >= 1 && page <= 12 && <DayPage dayData={DAYS[page - 1]} goTo={goTo} />}
        {page === 13 && <FinalPage goTo={goTo} />}
      </div>
    </div>
  );
}
