'use client';

import {
  createContext,
  useContext,
  Dispatch,
  SetStateAction,
  useState,
  ReactNode,
} from 'react';

export const userMock: User = {
  id: 'ec4f27cc-9095-4fbb-ade7-6a82d67af919',
  username: 'datFranky',
  gametag: '0807',
  friendsCount: 10,
  followersCount: 20,
  avatar:
    'https://pbs.twimg.com/profile_images/1545370176362876928/XLPla8ev_400x400.jpg',

  description:
    'Viverra nisi ultricies platea dui nunc rhoncus ullamcorper sit sed. Egestas et morbi sit donec montes diam vel at. Pellentesque amet egestas dolor at eu. Odio egestas augue augue bibendum in mattis.',
  email: 'franky@mail.com',
  social: ['https://twitter.com/datFranky', 'ADD', 'ADD', 'ADD', 'ADD'],
  wishlist: [],
  gameLibrary: [
    {
      genre: 'Sandbox',
      games: [
        {
          id: 'minecraft',
          name: 'Minecraft',
          icon: '<svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="inherit" xmlns="http://www.w3.org/2000/svg" className="stroke-inherit"><g clipPath="url(#clip0_605_908)"><path d="M15.3027 3.4286C15.2418 3.34597 15.1585 3.28251 15.0627 3.24574L8.20557 0.651456C8.14069 0.623137 8.07066 0.608521 7.99986 0.608521C7.92907 0.608521 7.85903 0.623137 7.79415 0.651456L0.937003 3.29146C0.846409 3.31545 0.76367 3.36273 0.697003 3.4286C0.617173 3.52517 0.572808 3.64617 0.571289 3.77146V12.1372C0.572771 12.2513 0.608399 12.3624 0.673581 12.4561C0.738763 12.5498 0.830512 12.6218 0.937003 12.6629L7.79415 15.3029H7.99986H8.20557L15.0627 12.6629C15.1692 12.6218 15.261 12.5498 15.3261 12.4561C15.3913 12.3624 15.427 12.2513 15.4284 12.1372V3.81717C15.4381 3.67629 15.3931 3.53711 15.3027 3.4286Z"  strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"/><path d="M8 15.3828V6.28571"  strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"/><path d="M8 6.28571V15.3828"  stroke-width="1.14286" strokeLinecap="round" strokeLinejoin="round"/><path d="M0.697266 3.4743L8.00012 6.28573L15.303 3.4743"  strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"/></g></svg>',
          favorite: true,
          playerInfo: {
            hours: '10.3',
            gametag: 'datFranky',
          },
        },
      ],
    },
    {
      genre: 'MOBA',
      games: [
        {
          id: 'league-of-legends',
          name: 'League of Legends',
          icon: '<svg width="16" height="16" viewBox="0 0 16 16" stroke="none" xmlns="http://www.w3.org/2000/svg"><g clipPath="url(#clip0_605_937)"><mask id="mask0_605_937" style="mask-type:luminance" maskUnits="userSpaceOnUse" x="0" y="0" width="16" height="16"><path d="M16 0H0V16H16V0Z" fill="white"/></mask><g mask="url(#mask0_605_937)"><path d="M7.2317 0H2.66699L3.52895 1.64926V14.3518L2.66699 16H13.1427L14.0929 12.8787H7.2317V0Z"/></g></g><defs><clipPath id="clip0_605_937"><rect width="16" height="16" fill="white"/></clipPath></defs></svg>',
          favorite: true,
          playerInfo: {
            hours: '10.3',
            gametag: 'datFranky #BR1',
            'current-highest-elo': 'Challenger',
            'favorite-champion': 'Ivern',
            'summoner-level': '420',
          },
        },
        {
          id: 'dota-2',
          name: 'Dota 2',
          icon: 'D',
          favorite: false,
          playerInfo: {
            hours: '10.3',
            gametag: 'datFranky',
            'favorite-hero': 'Rubick',
          },
        },
      ],
    },
    {
      genre: 'FPS',
      games: [
        {
          id: 'cs-go',
          name: 'CS:GO',
          icon: 'C',
          favorite: false,
          playerInfo: {
            hours: '10.3',
            gametag: 'datFranky',
            'favorite-weapon': 'AWP',
            ranking: 'Global Elite',
            achievements: '10/167',
          },
        },
        {
          id: 'valorant',
          name: 'VALORANT',
          icon: 'V',
          favorite: false,
          playerInfo: {
            hours: '10.3',
            gametag: 'datFranky #BR1',
            rank: 'Radiant',
            'favorite-agent': 'Skye',
          },
        },
        {
          id: 'overwatch-2',
          name: 'Overwatch 2',
          icon: '<svg width="16" height="16" viewBox="0 0 16 16" fill="inherit" stroke="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.00197 2.99144C9.20839 2.99331 10.3737 3.43041 11.2841 4.22253L12.6995 2.80619C11.413 1.6436 9.74122 1 8.00776 1C6.2743 1 4.60249 1.6436 3.31603 2.80619L4.71603 4.22253C5.62741 3.42954 6.79423 2.99238 8.00197 2.99144Z"/><path d="M13.1237 3.223L11.7083 4.63933C12.4061 5.41592 12.8443 6.39106 12.9618 7.42876C13.0794 8.46647 12.8703 9.515 12.3639 10.4282L9.56005 7.72671L8.29504 4.67793V9.26654L11.0719 11.941C10.1943 12.626 9.11308 12.9981 8 12.9981C6.88692 12.9981 5.80574 12.626 4.9281 11.941L7.70496 9.26654V4.67793L6.43995 7.73443L3.63609 10.4359C3.12966 9.52272 2.92064 8.47418 3.03817 7.43648C3.1557 6.39878 3.59392 5.42364 4.29174 4.64705L2.87631 3.223C1.94753 4.2214 1.33028 5.46942 1.10033 6.81389C0.870371 8.15835 1.03771 9.54074 1.58182 10.7914C2.12592 12.042 3.0231 13.1065 4.16324 13.8541C5.30338 14.6017 6.63686 15 8 15C9.36314 15 10.6966 14.6017 11.8368 13.8541C12.9769 13.1065 13.8741 12.042 14.4182 10.7914C14.9623 9.54074 15.1296 8.15835 14.8997 6.81389C14.6697 5.46942 14.0525 4.2214 13.1237 3.223Z"/></svg>',
          favorite: true,
          playerInfo: {
            hours: '10.3',
            gametag: 'datFranky #BR1',
            rank: 'Grandmaster',
            'favorite-hero': 'Lifeweaver',
          },
        },
      ],
    },
  ],
  status: 'online',
  platforms: {
    pc: true,
    console: false,
    mobile: true,
  },
  badges: [
    {
      id: 'badge1',
      name: 'Premium',
      description: 'This user has a premium account',
      icon: '<svg width="14" height="13" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M13.1107 6.55873L9.59809 7.49994L9.14287 2.2884L4.40194 4.49994L3.46073 0.9873L0.675014 5.8123C0.504518 6.10761 0.458315 6.45855 0.546571 6.78792C0.634826 7.1173 0.85031 7.39812 1.14562 7.56862L8.56869 11.8543C8.864 12.0248 9.21494 12.071 9.54432 11.9828C9.87369 11.8945 10.1545 11.679 10.325 11.3837L13.1107 6.55873Z" stroke="#FFC107" strokeLinecap="round" stroke-linejoin="round"/></svg>',
    },
    {
      id: 'badge2',
      name: 'Developer',
      description: 'This user is a developer at Quest',
      icon: '<svg width="14" height="13" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M13.1107 6.55873L9.59809 7.49994L9.14287 2.2884L4.40194 4.49994L3.46073 0.9873L0.675014 5.8123C0.504518 6.10761 0.458315 6.45855 0.546571 6.78792C0.634826 7.1173 0.85031 7.39812 1.14562 7.56862L8.56869 11.8543C8.864 12.0248 9.21494 12.071 9.54432 11.9828C9.87369 11.8945 10.1545 11.679 10.325 11.3837L13.1107 6.55873Z" stroke="#FFC107" strokeLinecap="round" stroke-linejoin="round"/></svg>',
    },
  ],
  tags: ['collector', 'casual', 'fashionista', 'singleplayer'],
  completedQuests: [
    {
      id: 'quest1',
      icon: '<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9.8005 4.56167C9.6803 4.76414 9.52695 4.93758 9.33709 5.08342C9.36673 5.03323 9.39448 4.98141 9.42031 4.92799C9.60754 4.56116 9.6945 4.1532 9.6945 3.71642C9.6945 3.02963 9.47108 2.4363 8.95297 2.03941C8.50016 1.68519 7.95978 1.51692 7.35941 1.51692C6.9516 1.51692 6.55826 1.59365 6.18316 1.74727C5.74935 1.91486 5.41242 2.22578 5.16771 2.64039C4.90484 3.08579 4.80233 3.67267 4.80233 4.34328V9.59497C4.80233 10.1628 5.12564 10.7108 5.68329 10.941C5.80861 10.9927 5.93239 11.0408 6.05461 11.0852C5.45952 10.9093 4.80233 11.3331 4.80233 12.0065V14.3488C4.80233 14.4323 4.73465 14.5 4.65116 14.5C4.56768 14.5 4.5 14.4323 4.5 14.3488V4.28756C4.5 3.54517 4.63833 3.01229 4.86721 2.64533C5.11965 2.24726 5.44961 1.96865 5.86448 1.79592L5.86451 1.79597L5.87154 1.79292C6.31409 1.60066 6.8173 1.5 7.38901 1.5C8.01186 1.5 8.50614 1.5952 8.88931 1.76402L8.8893 1.76404L8.89284 1.76556C9.28075 1.93292 9.54938 2.16846 9.72637 2.46696L9.73002 2.47312L9.73385 2.47917C9.91876 2.77158 10.0264 3.15616 10.0264 3.6607C10.0264 4.03094 9.94522 4.32323 9.80304 4.55745L9.80302 4.55744L9.8005 4.56167ZM10.1977 8.74527C10.1977 8.18808 10.081 7.68365 9.8098 7.26648C9.74902 7.16711 9.68267 7.07357 9.61082 6.98604C9.86711 7.15595 10.0696 7.37595 10.2227 7.65109L10.2263 7.65757L10.2301 7.66393C10.3997 7.94854 10.5 8.32783 10.5 8.82886C10.5 9.37681 10.3685 9.8127 10.1289 10.1619L10.1289 10.1619L10.1247 10.1682C9.88533 10.5287 9.55322 10.8075 9.1119 11.0039C8.6716 11.1948 8.15956 11.296 7.5666 11.296C7.22828 11.296 6.94193 11.2783 6.70459 11.2453C6.53958 11.2213 6.39039 11.1894 6.25604 11.1505C6.60862 11.2489 7.00888 11.293 7.4482 11.293C8.22419 11.293 8.90043 11.0934 9.41961 10.6405L9.41964 10.6405L9.42444 10.6362C9.95571 10.1605 10.1977 9.50696 10.1977 8.74527ZM7.92592 6.06041C7.9264 6.06844 7.92706 6.07642 7.92789 6.08434C7.90132 6.08073 7.87465 6.07749 7.84789 6.07462C7.87406 6.07029 7.90007 6.06555 7.92592 6.06041Z" stroke="#740986"/></svg>',
      completed: true,
      date: '2021-08-07T12:00:00.000Z',
      playersPercentage: 1.3,
    },
    {
      id: 'quest2',
      icon: '<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><g clipPath="url(#clip0_415_4195)"><path d="M5.71425 9.71429H2.28568L1.14282 4H14.8571L13.7143 9.71429H10.2857" stroke="#740986" strokeLinecap="round" stroke-linejoin="round"/><path d="M8 3.99998V0.571411" stroke="#740986" strokeLinecap="round" stroke-linejoin="round"/><path d="M5.71423 7.42859V15.4286" stroke="#740986" strokeLinecap="round" stroke-linejoin="round"/><path d="M10.2856 7.42859V15.4286" stroke="#740986" strokeLinecap="round" stroke-linejoin="round"/><path d="M4.57141 15.4286H11.4286" stroke="#740986" strokeLinecap="round" stroke-linejoin="round"/><path d="M2.85706 3.99998C2.85706 3.99998 2.85706 0.571411 5.14277 0.571411" stroke="#740986" strokeLinecap="round" stroke-linejoin="round"/><path d="M13.1428 3.99998C13.1428 3.99998 13.1428 0.571411 10.8571 0.571411" stroke="#740986" strokeLinecap="round" stroke-linejoin="round"/></g><defs><clipPath id="clip0_415_4195"><rect width="16" height="16" fill="white"/></clipPath></defs></svg>',
      completed: true,
      date: '2020-01-05T12:00:00.000Z',
      playersPercentage: 90.2,
    },
    {
      id: 'quest3',
      icon: '<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6.2857 10.8572L3.42855 4.57153L0.571411 10.8572C0.571411 11.615 0.872431 12.3417 1.40825 12.8776C1.94407 13.4134 2.67079 13.7144 3.42855 13.7144C4.18632 13.7144 4.91304 13.4134 5.44886 12.8776C5.98468 12.3417 6.2857 11.615 6.2857 10.8572Z" stroke="#740986" strokeLinecap="round" stroke-linejoin="round"/><path d="M15.4285 10.8572L12.5714 4.57153L9.71423 10.8572C9.71423 11.615 10.0153 12.3417 10.5511 12.8776C11.0869 13.4134 11.8136 13.7144 12.5714 13.7144C13.3291 13.7144 14.0559 13.4134 14.5917 12.8776C15.1275 12.3417 15.4285 11.615 15.4285 10.8572Z" stroke="#740986" strokeLinecap="round" stroke-linejoin="round"/><path d="M1.71423 4.57153H14.2857" stroke="#740986" strokeLinecap="round" stroke-linejoin="round"/><path d="M8 4.57148V2.28577" stroke="#740986" strokeLinecap="round" stroke-linejoin="round"/></svg>',
      completed: true,
      date: '2024-01-05T12:00:00.000Z',
      playersPercentage: 0.02,
    },
    {
      id: 'quest4',
      icon: '<svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg"><g clipPath="url(#clip0_415_4161)"><path d="M4.26416 6.68567L7.16702 2.04567C7.27952 1.86228 7.4376 1.71114 7.62587 1.607C7.81413 1.50285 8.02616 1.44924 8.2413 1.45139C8.41074 1.44527 8.57969 1.47318 8.73816 1.53348C8.89663 1.59377 9.0414 1.68521 9.16393 1.80241C9.28645 1.91961 9.38424 2.06018 9.45151 2.21581C9.51878 2.37145 9.55417 2.53899 9.55559 2.70853V6.03424H14.5727C14.7581 6.04026 14.9401 6.08544 15.1068 6.16683C15.2735 6.24822 15.421 6.36396 15.5398 6.50645C15.6585 6.64895 15.7458 6.81496 15.7958 6.99358C15.8458 7.1722 15.8574 7.35938 15.8299 7.54282L14.9156 13.44C14.8766 13.7551 14.7238 14.0452 14.486 14.2556C14.2482 14.4661 13.9417 14.5824 13.6242 14.5828H6.12702C5.77013 14.5842 5.41786 14.502 5.09845 14.3428L4.27559 13.9314" stroke="#740986" strokeLinecap="round" stroke-linejoin="round"/><path d="M4.26416 6.68567V13.8971" stroke="#740986" strokeLinecap="round" stroke-linejoin="round"/><path d="M1.55556 6.68567H4.26413V13.8971H1.55556C1.40401 13.8971 1.25866 13.8369 1.1515 13.7297C1.04433 13.6226 0.984131 13.4772 0.984131 13.3257V7.2571C0.984131 7.10555 1.04433 6.9602 1.1515 6.85304C1.25866 6.74587 1.40401 6.68567 1.55556 6.68567Z" stroke="#740986" strokeLinecap="round" stroke-linejoin="round"/></g><defs><clipPath id="clip0_415_4161"><rect width="16" height="16" fill="white" transform="translate(0.41272)"/></clipPath></defs></svg>',
      completed: true,
      date: '2024-01-05T12:00:00.000Z',
      playersPercentage: 46.02,
    },
    {
      id: 'quest5',
      icon: '<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"> <g clipPath="url(#clip0_415_4181)"> <path d="M7.85148 10.8571C10.6918 10.8571 12.9943 8.55459 12.9943 5.71427C12.9943 2.87395 10.6918 0.571411 7.85148 0.571411C5.01115 0.571411 2.70862 2.87395 2.70862 5.71427C2.70862 8.55459 5.01115 10.8571 7.85148 10.8571Z" stroke="#740986" strokeLinecap="round" stroke-linejoin="round"/> <path d="M7.85139 8.00002C9.11375 8.00002 10.1371 6.97667 10.1371 5.7143C10.1371 4.45194 9.11375 3.42859 7.85139 3.42859C6.58902 3.42859 5.56567 4.45194 5.56567 5.7143C5.56567 6.97667 6.58902 8.00002 7.85139 8.00002Z" stroke="#740986" strokeLinecap="round" stroke-linejoin="round"/> <path d="M6.85713 10.7657L5.85141 14.9943C5.83151 15.0746 5.79472 15.1498 5.74348 15.2148C5.69225 15.2799 5.62774 15.3332 5.55427 15.3714C5.47673 15.4051 5.39309 15.4224 5.30856 15.4224C5.22402 15.4224 5.14039 15.4051 5.06284 15.3714L1.26856 13.7143C1.18897 13.6766 1.11894 13.6215 1.06372 13.5529C1.0085 13.4843 0.969536 13.4042 0.949741 13.3184C0.929946 13.2326 0.929838 13.1434 0.949427 13.0576C0.969015 12.9718 1.00779 12.8915 1.06284 12.8228L3.99999 9.14282" stroke="#740986" strokeLinecap="round" stroke-linejoin="round"/> <path d="M9.14282 10.7085L10.1714 14.9942C10.1918 15.076 10.2301 15.1521 10.2835 15.2173C10.3368 15.2825 10.4039 15.3351 10.48 15.3714C10.5554 15.4055 10.6372 15.4231 10.72 15.4231C10.8027 15.4231 10.8845 15.4055 10.96 15.3714L14.7314 13.7142C14.8122 13.6771 14.8832 13.6215 14.9387 13.5521C14.9943 13.4827 15.0329 13.4012 15.0514 13.3142C15.0731 13.2291 15.074 13.1401 15.0541 13.0546C15.0342 12.9691 14.9941 12.8896 14.9371 12.8228L11.8743 8.92566" stroke="#740986" strokeLinecap="round" stroke-linejoin="round"/> </g> <defs> <clipPath id="clip0_415_4181"> <rect width="16" height="16" fill="white"/> </clipPath> </defs> </svg>',
      completed: true,
      date: '2024-01-05T12:00:00.000Z',
      playersPercentage: 0.01,
    },
    {
      id: 'quest6',
      icon: '<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5.71425 6.85709C7.13441 6.85709 8.28568 5.70582 8.28568 4.28566C8.28568 2.8655 7.13441 1.71423 5.71425 1.71423C4.29409 1.71423 3.14282 2.8655 3.14282 4.28566C3.14282 5.70582 4.29409 6.85709 5.71425 6.85709Z" stroke="#740986" strokeLinecap="round" stroke-linejoin="round"/><path d="M10.8571 15.4285H0.571411V14.2857C0.571411 12.9217 1.11325 11.6136 2.07772 10.6491C3.04219 9.68466 4.3503 9.14282 5.71427 9.14282C7.07824 9.14282 8.38634 9.68466 9.35082 10.6491C10.3153 11.6136 10.8571 12.9217 10.8571 14.2857V15.4285Z" stroke="#740986" strokeLinecap="round" stroke-linejoin="round"/><path d="M10.2856 1.71423C10.9676 1.71423 11.6217 1.98515 12.1039 2.46739C12.5862 2.94962 12.8571 3.60368 12.8571 4.28566C12.8571 4.96765 12.5862 5.6217 12.1039 6.10394C11.6217 6.58617 10.9676 6.85709 10.2856 6.85709" stroke="#740986" strokeLinecap="round" stroke-linejoin="round"/><path d="M12.1143 9.35999C13.0878 9.73033 13.9259 10.3875 14.5177 11.2447C15.1096 12.1018 15.4272 13.1184 15.4285 14.16V15.4286H13.7143" stroke="#740986" strokeLinecap="round" stroke-linejoin="round"/></svg>',
      completed: true,
      date: '2024-01-05T12:00:00.000Z',
      playersPercentage: 94,
    },
    {
      id: 'quest7',
      icon: '<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><g clipPath="url(#clip0_415_4172)"><path d="M8.00002 10.2857C9.42018 10.2857 10.5714 9.13441 10.5714 7.71425C10.5714 6.29409 9.42018 5.14282 8.00002 5.14282C6.57986 5.14282 5.42859 6.29409 5.42859 7.71425C5.42859 9.13441 6.57986 10.2857 8.00002 10.2857Z" stroke="#740986" strokeLinecap="round" stroke-linejoin="round"/><path d="M12.5714 15.4285C12.1388 14.5891 11.4833 13.8849 10.677 13.3933C9.87059 12.9018 8.94442 12.6417 8.00002 12.6417C7.05562 12.6417 6.12945 12.9018 5.32307 13.3933C4.51669 13.8849 3.86124 14.5891 3.42859 15.4285" stroke="#740986" strokeLinecap="round" stroke-linejoin="round"/><path d="M13.7143 12.0686C14.5253 11.0107 15.0241 9.74709 15.1544 8.42053C15.2846 7.09397 15.0411 5.75743 14.4513 4.56207C13.8615 3.36671 12.949 2.36023 11.817 1.65646C10.685 0.952688 9.37863 0.579712 8.04569 0.579712C6.71275 0.579712 5.4064 0.952688 4.27439 1.65646C3.14239 2.36023 2.22989 3.36671 1.6401 4.56207C1.05031 5.75743 0.80677 7.09397 0.937018 8.42053C1.06727 9.74709 1.56611 11.0107 2.37712 12.0686" stroke="#740986" strokeLinecap="round" stroke-linejoin="round"/></g><defs><clipPath id="clip0_415_4172"><rect width="16" height="16" fill="white"/></clipPath></defs></svg>',
      completed: true,
      date: '2024-01-05T12:00:00.000Z',
      playersPercentage: 0.001,
    },
  ],
  isProfileComplete: true,
  favoriteGames: [
    {
      id: 'minecraft',
      icon: '<svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="inherit" xmlns="http://www.w3.org/2000/svg" className="stroke-inherit"><g clipPath="url(#clip0_605_908)"><path d="M15.3027 3.4286C15.2418 3.34597 15.1585 3.28251 15.0627 3.24574L8.20557 0.651456C8.14069 0.623137 8.07066 0.608521 7.99986 0.608521C7.92907 0.608521 7.85903 0.623137 7.79415 0.651456L0.937003 3.29146C0.846409 3.31545 0.76367 3.36273 0.697003 3.4286C0.617173 3.52517 0.572808 3.64617 0.571289 3.77146V12.1372C0.572771 12.2513 0.608399 12.3624 0.673581 12.4561C0.738763 12.5498 0.830512 12.6218 0.937003 12.6629L7.79415 15.3029H7.99986H8.20557L15.0627 12.6629C15.1692 12.6218 15.261 12.5498 15.3261 12.4561C15.3913 12.3624 15.427 12.2513 15.4284 12.1372V3.81717C15.4381 3.67629 15.3931 3.53711 15.3027 3.4286Z"  strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"/><path d="M8 15.3828V6.28571"  strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"/><path d="M8 6.28571V15.3828"  stroke-width="1.14286" strokeLinecap="round" strokeLinejoin="round"/><path d="M0.697266 3.4743L8.00012 6.28573L15.303 3.4743"  strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"/></g></svg>',
      name: 'Minecraft',
    },
    {
      id: 'overwatch-2',
      icon: '<svg width="16" height="16" viewBox="0 0 16 16" fill="inherit" stroke="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.00197 2.99144C9.20839 2.99331 10.3737 3.43041 11.2841 4.22253L12.6995 2.80619C11.413 1.6436 9.74122 1 8.00776 1C6.2743 1 4.60249 1.6436 3.31603 2.80619L4.71603 4.22253C5.62741 3.42954 6.79423 2.99238 8.00197 2.99144Z"/><path d="M13.1237 3.223L11.7083 4.63933C12.4061 5.41592 12.8443 6.39106 12.9618 7.42876C13.0794 8.46647 12.8703 9.515 12.3639 10.4282L9.56005 7.72671L8.29504 4.67793V9.26654L11.0719 11.941C10.1943 12.626 9.11308 12.9981 8 12.9981C6.88692 12.9981 5.80574 12.626 4.9281 11.941L7.70496 9.26654V4.67793L6.43995 7.73443L3.63609 10.4359C3.12966 9.52272 2.92064 8.47418 3.03817 7.43648C3.1557 6.39878 3.59392 5.42364 4.29174 4.64705L2.87631 3.223C1.94753 4.2214 1.33028 5.46942 1.10033 6.81389C0.870371 8.15835 1.03771 9.54074 1.58182 10.7914C2.12592 12.042 3.0231 13.1065 4.16324 13.8541C5.30338 14.6017 6.63686 15 8 15C9.36314 15 10.6966 14.6017 11.8368 13.8541C12.9769 13.1065 13.8741 12.042 14.4182 10.7914C14.9623 9.54074 15.1296 8.15835 14.8997 6.81389C14.6697 5.46942 14.0525 4.2214 13.1237 3.223Z"/></svg>',
      name: 'Overwatch 2',
    },
    {
      id: 'league-of-legends',
      icon: '<svg width="16" height="16" viewBox="0 0 16 16" stroke="none" xmlns="http://www.w3.org/2000/svg"><g clipPath="url(#clip0_605_937)"><mask id="mask0_605_937" style="mask-type:luminance" maskUnits="userSpaceOnUse" x="0" y="0" width="16" height="16"><path d="M16 0H0V16H16V0Z" fill="white"/></mask><g mask="url(#mask0_605_937)"><path d="M7.2317 0H2.66699L3.52895 1.64926V14.3518L2.66699 16H13.1427L14.0929 12.8787H7.2317V0Z"/></g></g><defs><clipPath id="clip0_605_937"><rect width="16" height="16" fill="white"/></clipPath></defs></svg>',
      name: 'League of Legends',
    },
  ],
};

interface ContextProps {
  user: User | null;
  setUser: Dispatch<SetStateAction<User | null>>;
  // updateWishlist: (id: string) => void;
  // updateQuests: (id: string) => void;
  addFavoriteGame: (game: GameAndIcon) => void;
  removeFavoriteGame: (game: GameAndIcon) => void;
  setFavoriteGames: (games: GameAndIcon[]) => void;
}

const UserContext = createContext<ContextProps>({
  user: null,
  setUser: (): User | null => null,
  // updateWishlist: (): void => {},
  // updateQuests: (): void => {},
  addFavoriteGame: (): void => {
    return;
  },
  removeFavoriteGame: (): void => {
    return;
  },
  setFavoriteGames: (): void => {
    return;
  },
});

export const UserContextProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(userMock);

  const removeFavoriteGame = (game: GameAndIcon) => {
    const favorites = user?.favoriteGames.filter(({ id }) => id !== game.id);
    const updatedUser = { ...user, favoriteGames: favorites };
    setUser(updatedUser as User);
  };

  const addFavoriteGame = (game: GameAndIcon) => {
    if (user?.favoriteGames.includes(game)) {
      return;
    }
    const favorites = user?.favoriteGames;
    favorites?.push(game);
    const updatedUser = { ...user, favoriteGames: favorites };
    setUser(updatedUser as User);
  };

  const setFavoriteGames = (games: GameAndIcon[]) => {
    const updatedUser = { ...user, favoriteGames: games };
    setUser(updatedUser as User);
  };

  return (
    <UserContext.Provider
      value={{
        user,
        setUser,
        removeFavoriteGame,
        addFavoriteGame,
        setFavoriteGames,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const useUserContext = () => useContext(UserContext);
