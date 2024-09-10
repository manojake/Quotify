// app/quotes/favorites/page.tsx (Server Component)
// import { fetchFavoriteQuotes } from '@/lib/quotes';
import FavoriteQuotes from '@/app/components/FavoriteQuotes';

export default async function FavoritesPage() {
  const response = await fetch('http://localhost:3000/api/favorite');
  const favoriteQuotes = await response.json();
  // const favoriteQuotes = await fetchFavoriteQuotes(); // Server fetch for favorite quotes

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Favorite Quotes</h1>
      <FavoriteQuotes quotes={favoriteQuotes} />
    </div>
  );
}
