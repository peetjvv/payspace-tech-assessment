export type Book = {
  title: string;
  author: string;
  year: number;
  imgSrc: string;
};

export const books: Book[] = [
  {
    title: 'The Great Gatsby',
    author: 'F. Scott Fitzgerald',
    year: 1925,
    imgSrc: '@/assets/great_gatsby_cover_front.jpg',
  },
  {
    title: 'To Kill a Mockingbird',
    author: 'Harper Lee',
    year: 1960,
    imgSrc: '@/assets/to_kill_a_mockingbird_cover_front.jpg',
  },
  {
    title: 'Naruto: Volume 1',
    author: 'Masashi Kishimoto',
    year: 1999,
    imgSrc: '@/assets/naruto_vol_1_cover_front.jpg',
  },
];
