import { take } from 'lodash';
import { NextResponse } from 'next/server';

interface ProfileRequestProps {
  params: {
    game: string;
  };
}

const key = process.env.RAWG;

export async function GET(_: Request, { params }: ProfileRequestProps) {
  const gameResponse = await fetch(
    `https://api.rawg.io/api/games/${params.game}?key=${key}`
  );
  const gameData = await gameResponse.json();
  const imagesResponse = await fetch(
    `https://api.rawg.io/api/games/${params.game}/screenshots?key=${key}&page_size=4`
  );
  const gameImages = await imagesResponse.json();
  const videosResponse = await fetch(
    `https://api.rawg.io/api/games/${params.game}/movies?key=${key}&page_size=10`
  );
  const gameVideos = await videosResponse.json();
  const similarResponse = await fetch(
    `https://api.rawg.io/api/games?key=${key}&page_size=6&genres=${gameData.genres[1].id}`
  );
  const similarGamesData = await similarResponse.json();

  const filteredSimilarGames = {
    ...similarGamesData,
    results: take(
      similarGamesData.results.filter(
        (game: { id: string }) => game.id !== gameData.id
      ),
      3
    ),
  };

  const mediaGallery = [
    ...gameImages.results.map((screenshot: { id: string; image: string }) => ({
      id: screenshot.id,
      url: screenshot.image,
      type: 'image',
    })),
    ...gameVideos.results.map(
      (video: { id: string; data: { max: string } }) => ({
        id: video.id,
        url: video.data.max,
        type: 'video',
      })
    ),
  ];

  const game = {
    id: gameData.id,
    icon: gameData.slug[0].toUpperCase(),
    name: gameData.name,
    description: gameData.description_raw,
    genres: gameData.genres
      .map((genre: { id: string; slug: string; name: string }) => ({
        id: genre.id,
        icon: genre.slug[0].toUpperCase(),
        name: genre.name,
      }))
      .slice(0, 2),
    tags: gameData.tags.map(({ name }: { name: string }) => name).slice(0, 1),
    purchaseOptions: gameData.stores.map(
      (store: { store: { id: string; slug: string; domain: string } }) => ({
        id: store.store.id,
        link: store.store.domain,
        icon: store.store.slug[0].toUpperCase(),
      })
    ),
    boxart: gameData.background_image,
    developer: gameData.developers[0].name,
    publisher: gameData.publishers[0].name,
    relatedGames: filteredSimilarGames.results.map(
      (game: { id: string; slug: string; name: string }) => ({
        id: game.id,
        name: game.name,
        slug: game.slug,
        icon: game.slug[0].toUpperCase(),
      })
    ),
    releaseDate: gameData.released,
    reviewRating: gameData.rating,
    reviewCount: gameData.ratings_count,
    mediaGallery: mediaGallery,
    isFavorite: false,
    isOnWishlist: false,
  } as Game;

  return NextResponse.json(game);
}
