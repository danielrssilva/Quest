import { NextResponse } from 'next/server';

const quests = [
  {
    id: 'quest1',
    icon: '',
    playersPercentage: 0.1,
    isSecret: false,
  },
  {
    id: 'quest2',
    icon: '',
    playersPercentage: 0.1,
    isSecret: false,
  },
  {
    id: 'quest3',
    icon: '',
    playersPercentage: 0.1,
    isSecret: false,
  },
  {
    id: 'quest4',
    icon: '',
    playersPercentage: 0.1,
    isSecret: false,
  },
  {
    id: 'quest5',
    icon: '',
    playersPercentage: 0.1,
    isSecret: false,
  },
  {
    id: 'quest6',
    icon: '',
    playersPercentage: 0.1,
    isSecret: false,
  },
  {
    id: 'quest7',
    icon: '',
    playersPercentage: 0.1,
    isSecret: false,
  },
  {
    id: 'quest8',
    icon: '',
    playersPercentage: 0.001,
    isSecret: true,
  },
];

export async function GET() {
  return NextResponse.json(quests);
}
