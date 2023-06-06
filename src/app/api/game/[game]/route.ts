import { take } from 'lodash';
import { NextResponse } from 'next/server';

const gameMock: Game[] = [
  {
    id: '95988f14-8082-4520-8778-ef2502ee476d',
    icon: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g clipPath="url(#clip0_77_6784)"><path d="M12.1319 0.000164803C14.8026 0.0172836 17.4428 0.969302 19.5171 2.64349L17.2506 5.27492C15.3378 3.76536 12.7604 3.1502 10.3699 3.62544C9.05616 3.87817 7.80608 4.45503 6.75136 5.27492L4.4849 2.64349C6.63043 0.912169 9.3694 -0.041232 12.1319 0.000164803Z" fill="#3C353D"/><path d="M20.2549 3.2901C22.643 5.53368 24.0433 8.79508 23.999 12.0849C23.9976 15.4997 22.4398 18.8541 19.8529 21.0727C17.4617 23.1641 14.2095 24.2295 11.0344 23.96C7.59403 23.7038 4.32853 21.8662 2.30976 19.0743C0.344774 16.4211 -0.425077 12.9224 0.227196 9.67791C0.706699 7.19426 2.00882 4.89251 3.86069 3.18167L6.12716 5.8131C4.30093 7.53448 3.30376 10.0754 3.49177 12.5821C3.57401 13.824 3.93471 15.0497 4.54433 16.1405L9.16322 11.6789L11.4936 6.65563L11.4971 14.2628L6.82931 18.7798C8.90939 20.3959 11.7634 20.9319 14.2924 20.2156C15.3222 19.9283 16.2973 19.4464 17.1448 18.7997L12.4452 14.2628C12.4534 11.7895 12.4165 9.11969 12.4453 6.64745L14.7791 11.6789L19.4377 16.1775C20.8589 13.6965 20.8929 10.4891 19.525 7.98039C19.0973 7.17671 18.5313 6.44327 17.8747 5.8131L20.1412 3.18167C20.1791 3.21781 20.217 3.25396 20.2549 3.2901Z" fill="#3C353D"/></g><defs><clipPath id="clip0_77_6784"><rect width="24" height="24" fill="white" transform="matrix(-1 0 0 1 24 0)"/></clipPath></defs></svg>',
    name: 'Overwatch 2',
    description:
      'Odio sed et volutpat ac in elit vulputate diam vel. Sem luctus sed ut et scelerisque. Nec morbi molestie nisi aliquet. In et phasellus turpis proin dolor mattis urna aliquet iaculis. Nibh sit laoreet neque rhoncus laoreet tortor. Erat turpis metus pellentesque magna. Quis pellentesque facilisi id egestas nibh ultrices vitae magna nibh.',
    genres: [
      {
        id: '1',
        icon: '',
        name: 'FPS',
      },
    ],
    tags: ['Multiplayer'],
    purchaseOptions: [
      {
        id: 'battlenet',
        link: 'https://us.shop.battle.net/pt-br/family/overwatch',
        icon: '<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M13.2891 7.16992C13.2891 7.16992 14.4414 7.22852 14.4414 6.55078C14.4414 5.66602 12.9063 4.86914 12.9063 4.86914C12.9063 4.86914 13.1465 4.35938 13.2969 4.07422C13.4473 3.78906 13.8692 2.67969 13.9063 2.42578C13.9532 2.10547 13.8809 2.00586 13.8809 2.00586C13.7774 2.68945 12.6641 4.6582 12.5743 4.72461C11.4883 4.2168 9.99613 4.07422 9.99613 4.07422C9.99613 4.07422 8.53519 1 7.16019 1C5.79691 1 5.80473 3.63281 5.80473 3.63281C5.80473 3.63281 5.41996 2.88672 4.93559 2.88672C4.22855 2.88672 3.99613 3.95313 3.99613 5.11133C2.6016 5.11133 1.42777 5.42383 1.3223 5.45312C1.21879 5.48242 0.888711 5.72266 1.03715 5.69336C1.34379 5.5957 2.77738 5.37305 4.03129 5.48242C4.1016 6.58203 4.74418 8.01562 4.74418 8.01562C4.74418 8.01562 3.36527 10.0117 3.36527 11.4355C3.36527 11.8105 3.52934 12.4961 4.51762 12.4961C5.3477 12.4961 6.27934 11.998 6.45316 11.8984C6.30082 12.1152 6.18754 12.5312 6.18754 12.7227C6.18754 12.8789 6.28129 13.3223 6.91996 13.3223C7.74027 13.3223 8.65824 12.6934 8.65824 12.6934C8.65824 12.6934 9.52543 14.1309 10.2657 14.7891C10.4649 14.9668 10.6563 15 10.6563 15C10.6563 15 9.91996 14.293 8.95121 12.4688C9.8516 11.9141 10.7891 10.6016 10.7891 10.6016C10.7891 10.6016 10.9004 10.6055 11.7559 10.6055C13.0957 10.6055 14.9981 10.3242 14.9981 9.25977C15 8.16211 13.2891 7.16992 13.2891 7.16992ZM13.4375 6.50781C13.4375 6.89648 13.0684 6.89258 13.0684 6.89258L12.7871 6.91016C12.7871 6.91016 12.2539 6.63086 11.9297 6.49805C11.9297 6.49805 12.4317 5.72656 12.5489 5.51172C12.6368 5.56445 13.4375 6.06445 13.4375 6.50781ZM7.83012 2.54883C8.46098 2.54883 9.35941 4.0332 9.35941 4.0332C9.35941 4.0332 7.95707 3.9082 6.80277 4.58594C6.83402 3.51758 7.1934 2.54883 7.83012 2.54883ZM5.33598 3.75195C5.53519 3.75195 5.73051 3.99609 5.81254 4.20117C5.81254 4.33789 5.88285 5.13477 5.88285 5.13477L4.7266 5.08984C4.7266 4.04883 5.1348 3.75195 5.33598 3.75195ZM5.21488 10.9883C4.58207 10.9883 4.45316 10.6367 4.45316 10.3203C4.45316 9.60352 5.02543 8.59961 5.02543 8.59961C5.02543 8.59961 5.66801 9.94922 6.78715 10.5176C6.23246 10.8438 5.77348 10.9883 5.21488 10.9883ZM7.26762 12.4004C6.82426 12.4004 6.76957 12.1133 6.76957 12.0469C6.76957 11.8418 6.93168 11.5977 6.93168 11.5977C6.93168 11.5977 7.67582 11.0957 7.72269 11.041L8.27348 12.0684C8.27348 12.0684 7.71098 12.4004 7.26762 12.4004ZM8.65043 11.8418C8.3809 11.3711 8.18168 10.8789 8.18168 10.8789C8.18168 10.8789 9.2891 10.9492 9.8848 10.3359C9.51371 10.502 8.92191 10.7129 8.23441 10.6484C9.67191 9.38281 10.5118 8.46484 11.2207 7.51758C11.1602 7.44336 10.836 7.2168 10.7559 7.17969C10.3282 7.69531 8.66215 9.47461 7.11918 10.3555C5.16605 9.29102 4.7559 6.16016 4.71488 5.50977L5.78129 5.61133C5.78129 5.61133 5.3809 6.32227 5.3809 6.8457C5.3809 7.36719 5.4434 7.39453 5.4434 7.39453C5.4434 7.39453 5.42973 6.48438 5.99223 5.78125C6.42191 8.0625 6.86918 9.23047 7.21684 9.92773C7.39457 9.85352 7.72465 9.70703 7.72465 9.70703C7.72465 9.70703 6.74027 6.86914 6.79496 4.94922C7.24223 4.71094 7.90434 4.46484 8.65043 4.46484C10.6153 4.46484 12.1954 5.30859 12.1954 5.30859L11.5782 6.17188C11.5782 6.17188 11.0274 5.17578 10.2481 4.99805C10.6582 5.30273 11.1192 5.70703 11.3575 6.28711C9.72855 5.65234 7.76371 5.31641 7.13285 5.24219C7.07816 5.47461 7.08598 5.80664 7.08598 5.80664C7.08598 5.80664 9.72074 6.29297 11.6387 7.38867C11.625 9.78711 9.01176 11.6289 8.65043 11.8418ZM11.1465 10.0488C11.1465 10.0488 11.9649 8.97656 11.9512 7.55469C11.9512 7.55469 13.2735 8.37305 13.2735 9.17188C13.2735 10.0625 11.1465 10.0488 11.1465 10.0488Z" fill="#740986"/></svg>',
      },
    ],
    boxart: 'https://placehold.co/260x146/ECDDFF/740986.png?text=OVERWATCH',
    developer: 'Blizzard',
    publisher: 'Blizzard',
    releaseDate: '2021-08-01T00:00:00.000Z',
    reviewRating: '4.5',
    reviewCount: 8,
    mediaGallery: [
      {
        id: 'mediaGalery1',
        url: 'https://placehold.co/200x120/ECDDFF/740986.png?text=IMAGE',
        type: 'image',
      },
      {
        id: 'mediaGalery2',
        url: 'https://placehold.co/200x120/ECDDFF/740986.png?text=IMAGE',
        type: 'image',
      },
      {
        id: 'mediaGalery3',
        url: 'https://placehold.co/200x120/ECDDFF/740986.png?text=IMAGE',
        type: 'image',
      },
      {
        id: 'mediaGalery4',
        url: 'https://placehold.co/200x120/ECDDFF/740986.mp4?text=VIDEO',
        type: 'video',
      },
    ],
    relatedGames: [
      {
        id: 'VALORANT1',
        name: 'VALORANT',
        icon: 'V',
      },
      {
        id: 'APEX1',
        name: 'Apex Legends',
        icon: 'A',
      },
      {
        id: 'FORTNITE1',
        name: 'Fortnite',
        icon: 'F',
      },
    ],
    isFavorite: true,
    isOnWishlist: false,
  },
];

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
      similarGamesData.results.filter((game) => game.id !== gameData.id),
      3
    ),
  };

  const mediaGallery = [
    ...gameImages.results.map((screenshot) => ({
      id: screenshot.id,
      url: screenshot.image,
      type: 'image',
    })),
    ...gameVideos.results.map((video) => ({
      id: video.id,
      url: video.data.max,
      type: 'video',
    })),
  ];

  const game = {
    id: gameData.id,
    icon: gameData.slug[0].toUpperCase(),
    name: gameData.name,
    description: gameData.description_raw,
    genres: gameData.genres
      .map((genre) => ({
        id: genre.id,
        icon: genre.slug[0].toUpperCase(),
        name: genre.name,
      }))
      .slice(0, 2),
    tags: gameData.tags.map(({ name }) => name).slice(0, 1),
    purchaseOptions: gameData.stores.map((store) => ({
      id: store.store.id,
      link: store.store.domain,
      icon: store.store.slug[0].toUpperCase(),
    })),
    boxart: gameData.background_image,
    developer: gameData.developers[0].name,
    publisher: gameData.publishers[0].name,
    relatedGames: filteredSimilarGames.results.map((game) => ({
      id: game.id,
      name: game.name,
      slug: game.slug,
      icon: game.slug[0].toUpperCase(),
    })),
    releaseDate: gameData.released,
    reviewRating: gameData.rating,
    reviewCount: gameData.ratings_count,
    mediaGallery: mediaGallery,
    isFavorite: false,
    isOnWishlist: false,
  } as Game;

  return NextResponse.json(game);
}
