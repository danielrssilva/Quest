import { NextResponse } from 'next/server';

const favorites: GameAndIcon[] = [
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
];

const suggestions: GameAndIcon[] = [
  {
    id: 'portal-2',
    icon: '<svg width="16" height="16" viewBox="0 0 16 16" stroke="none" xmlns="http://www.w3.org/2000/svg"><g clipPath="url(#clip0_605_929)"><path d="M9.66141 0.483253C8.21109 0.165045 6.76634 0.278678 5.46054 0.737368L11.6573 5.02489L10.9651 0.89147C10.5502 0.720071 10.115 0.582754 9.66141 0.483253ZM11.4992 1.13664L12.7517 8.49204L15.1563 5.11035C14.4649 3.41318 13.1786 1.98606 11.4992 1.13664ZM4.96066 0.932723C3.24863 1.67114 1.82212 3.01925 1.01156 4.76656L8.50151 3.37512L4.96066 0.932723ZM15.3236 5.56274L11.0818 11.7089L15.1521 10.9316C15.3156 10.5298 15.447 10.1092 15.5432 9.67134L15.5782 9.50292C15.8453 8.14071 15.7364 6.79116 15.3236 5.56274ZM4.97859 4.51696L0.80735 5.24999C0.670454 5.60737 0.557755 5.97982 0.473231 6.36504C0.152672 7.82612 0.270946 9.28165 0.738254 10.5951L4.97859 4.51696ZM3.24782 7.74829L0.950845 11.1305C1.68152 12.7829 2.98292 14.1629 4.66246 14.9701L3.24782 7.74829ZM14.9476 11.3901L7.64856 12.806L11.0047 15.126C12.7 14.4094 14.1197 13.0962 14.9476 11.3901ZM4.42302 11.1716L5.12932 15.1754C5.52069 15.3325 5.92954 15.4597 6.35502 15.553C7.79711 15.8694 9.23399 15.7588 10.5339 15.3065L4.42302 11.1716Z"/></g><defs><clipPath id="clip0_605_929"><rect width="16" height="16" fill="white"/></clipPath></defs></svg>',
    name: 'Portal 2',
  },
];

const noUserSuggestions: GameNavigation = {
  favorites: [],
  suggestions: favorites,
};

const userMockData = [
  {
    id: 'ec4f27cc-9095-4fbb-ade7-6a82d67af919',
    favorites,
    suggestions,
  },
];

export async function GET(resquest: Request) {
  const url = new URL(resquest.url);
  const user = url.searchParams.get('user');
  const data =
    userMockData.find((item) => item.id === user) || noUserSuggestions;
  return NextResponse.json(data);
}
