import { CaretLeft, CaretRight } from '@phosphor-icons/react';
import { useRef } from 'react';

// Must adjust the parent div size for overflow correction
// If parent can grow, this will not overflow
const CategoyFilter = () => {
  const scrollRef = useRef(null);

  const scrollLeft = () => {
    scrollRef.current.scrollBy({
      left: -100,
      behavior: 'smooth'
    });
  };

  const scrollRight = () => {
    scrollRef.current.scrollBy({
      left: 100,
      behavior: 'smooth'
    });
  };

  return (
    <div className="flex gap-4 my-4 bg-[#EEEEEE]">
      <button onClick={scrollLeft} className="hover:opacity-100 opacity-70">
        <CaretLeft size={'1.5rem'} />
      </button>
      <div
        ref={scrollRef}
        className="flex gap-4 overflow-auto no-scrollbar scroll-smooth"
      >
        <p>Software</p>
        <p>Software</p>
        <p>Software</p>
        <p>Software</p>
        <p>Software</p>
        <p>Software</p>
        <p>Software</p>
        <p>Software</p>
        <p>Software</p>
        <p>Software</p>
      </div>
      <button onClick={scrollRight} className="hover:opacity-100 opacity-70">
        <CaretRight size={'1.5rem'} />
      </button>
    </div>
  );
};

export default CategoyFilter;
