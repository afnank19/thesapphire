import { CaretLeft, CaretRight } from '@phosphor-icons/react';
import { useEffect, useRef } from 'react';
import { useCategoryStore } from '../../services/state/category';

// Must adjust the parent div size for overflow correction
// If parent can grow, this will not overflow
// IMP: Make sure no coupling with HomePage
// Remove coupling, should be a standalone component
const CategoyFilter = ({
  activeCategory,
  setActiveCtgry,
  invalidateQueries
}) => {
  const cat = useCategoryStore((state) => state.activeCategory);
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

  // Move to a general constants file maybe?
  const categories = [
    'Latest',
    'Software',
    'Design',
    'Art',
    'Education',
    'Science',
    'Entertainment',
    'Other'
  ];

  return (
    <div className="flex gap-4 my-4 bg-[#EEEEEE]">
      <button onClick={scrollLeft} className="hover:opacity-100 opacity-70">
        <CaretLeft size={'1.5rem'} />
      </button>
      <div
        ref={scrollRef}
        className="flex gap-4 overflow-auto no-scrollbar scroll-smooth"
      >
        {categories.map((category) => {
          return (
            <button
              key={category}
              onClick={() => {
                setActiveCtgry(category);
                invalidateQueries();
              }}
              className={
                cat === category
                  ? 'pb-1 border-b border-black'
                  : 'pb-1 text-gray-600'
              }
            >
              {category}
            </button>
          );
        })}
      </div>
      <button onClick={scrollRight} className="hover:opacity-100 opacity-70">
        <CaretRight size={'1.5rem'} />
      </button>
    </div>
  );
};

export default CategoyFilter;
