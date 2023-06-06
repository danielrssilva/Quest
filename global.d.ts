/**
 * Game tags
 */
type GameTag = 'Singleplayer' | 'Multiplayer' | 'Co-op' | 'VR';

/**
 * Profile tags
 */
type ProfileTag =
  | 'singleplayer'
  | 'multiplayer'
  | 'speedrunner'
  | 'casual'
  | 'collector'
  | 'fashionista';

/**
 * Purchase availability platforms
 */
type PurchaseOption = {
  id: string;
  link: string;
  icon: string;
};

/**
 * Playable platform
 */
type Platform = 'PC' | 'Console' | 'Mobile';

/**
 * Genre object
 */
type Genre = {
  id: string;
  icon: string;
  name: string;
};

/**
 * Quest object
 */
type Quest = {
  id: string;
  icon: string;
  completed: boolean;
  date: string;
  playersPercentage: number;
  isSecret?: boolean;
};

/**
 * User Quests object
 */
interface UserQuest {
  username: string;
  gametag: string;
  profileQuests: Quest[];
  completedTotal: number;
  questsTotal: number;
}
/**
 * Wishlist object
 */
type WishlistGame = {
  id: string;
  name: string;
  icon: string;
};

/**
 * User Wishlist object
 */
interface UserWishlist {
  username: string;
  gametag: string;
  wishlist: WishlistGame[];
}
/**
 * Badge object
 */
type Badge = {
  id: string;
  name: string;
  description: string;
  icon: string;
};

/**
 * User object
 */
type User = {
  id: string;
  username: string;
  gametag: string;
  nickname?: string;
  avatar: string;
  description: string;
  email: string;
  wishlist: WishlistGame[];
  friendsCount: number;
  followersCount: number;
  gameLibrary: GameByGenre[];
  social: string[];
  status?: 'online' | 'offline' | 'away' | GameAndIcon;
  platforms: {
    pc?: boolean;
    console?: boolean;
    mobile?: boolean;
  };
  badges: Badge[];
  tags: ProfileTag[];
  completedQuests: Quest[];
  isProfileComplete?: boolean;
  favoriteGames: GameAndIcon[];
};

/**
 * Game library object
 */
type GameLibrary = GameAndIcon & {
  favorite: boolean;
  visible?: boolean;
  playerInfo: {
    [string]: unknown;
  };
};

/**
 * Game by genre object
 */
type GameByGenre = {
  genre: string;
  games: GameLibrary[];
};

/**
 * Game by platform object
 */
type GameByPlatform = {
  platform: string;
  games: GameLibrary[];
};

/**
 * Profile object
 */
type Profile = {
  id: string;
  username: string;
  gametag: string;
  nickname?: string;
  social: string[];
  avatar: string;
  description: string;
  friendsCount: number;
  followersCount: number;
  platforms: {
    pc?: boolean;
    console?: boolean;
    mobile: ?boolean;
  };
  badges: Badge[];
  tags: ProfileTag[];
};

type FriendListUser = {
  id: string;
  username: string;
  gametag: string;
  nickname: string;
  avatar: string;
  badges: Badge[];
  status: 'online' | 'offline' | 'away' | GameAndIcon;
};

type FriendList = {
  playing: FriendListUser[];
  online: FriendListUser[];
  offline: FriendListUser[];
};

type Chat = {
  author: Author;
  messages: Message[];
  newMessages: Message[];
  latestMessages: Message[];
};

type Inbox = {
  chats: Chat[];
};

type Message = {
  id: string;
  isMe?: boolean;
  date: string;
  content: string;
};

/**
 * News object
 */
type News = {
  id: string;
  title: string;
  game: string;
  icon: string;
  summary: string;
  image: string;
  date: string;
  author: NewsAuthor;
};

/**
 * Article object
 */
type Article = {
  id: string;
  title: string;
  game: string;
  date: string;
  author: Author;
  content: string; // [TBD] Change to HTML
  banner: string;
  comments: QuestComment[];
};

/**
 * News author object
 */
type NewsAuthor = {
  id: string;
  username: string;
  gametag: string;
};

/**
 * Comment object
 */
type QuestComment = {
  id: string;
  author: Author;
  content: string;
  date: string;
  // replies: Comment[];
};

/**
 * Game object
 */
type Game = {
  id: string;
  icon: string;
  name: string;
  description: string;
  genres: Genre[];
  tags: GameTag[];
  purchaseOptions: PurchaseOption[];
  boxart: string;
  developer: string;
  publisher: string;
  relatedGames: GameAndIcon[];
  releaseDate: string;
  reviewRating: string;
  reviewCount: number;
  mediaGallery: Media[];
  isFavorite?: boolean;
  isOnWishlist?: boolean;
};

/**
 * Game navigation object
 */
type GameNavigation = {
  favorites: GameAndIcon[];
  suggestions: GameAndIcon[];
};

/**
 * Game explore
 */
type GameExplore = {
  id: string;
  image: string;
  name: string;
};

/**
 * Current game object
 */
type GameAndIcon = {
  id: string;
  name: string;
  slug?: string;
  icon: string;
};

/**
 * Quest/Comment Author object
 */
type Author = {
  id: string;
  username: string;
  gametag: string;
  nickname: string;
  avatar: string;
  badges: Badge[];
};

/**
 * Media object
 */
type Media = {
  id: string;
  type: 'image' | 'video' | 'gif';
  url: string;
};

/**
 * Quest log object
 */
type QuestLog = {
  id: string;
  author: Author;
  content: string;
  media: Media[];
  date: string;
  game?: GameAndIcon;
  genre?: Genre;
  platform?: Platform;
  linkedLogs: QuestLog[];
  view?: 'everyone' | 'friends' | 'private';
  reply?: 'everyone' | 'friends' | 'none';
  likes: Author[];
  liked: boolean;
  comments: LogComment[];
  commented: boolean;
  // scheduled: boolean;
  // scheduledDate: string;
};
/**
 * Timeline object
 */
type TimelineItem = {
  type: 'News' | 'Log';
  item: News | Log;
};
type Timeline = TimelineItem[];

/**
 * Styling types
 */
type Color =
  | 'success'
  | 'warning'
  | 'error'
  | 'accent'
  | 'disabled'
  | 'orange'
  | 'blue';

type Size = 'sm' | 'md' | 'lg';
