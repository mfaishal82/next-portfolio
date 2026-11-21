import { fetchAllPortfolioData } from '@/services/portfolioService';
import { NextResponse } from 'next/server';

// Revalidate cache every 5 minutes (300 seconds) to prevent Firestore quota exhaustion & DoS
export const revalidate = 300;

export async function GET() {
  try {
    const data = await fetchAllPortfolioData();
    return NextResponse.json(data, {
      headers: {
        'Cache-Control': 'public, s-maxage=300, stale-while-revalidate=600',
      },
    });
  } catch (error) {
    console.error('API /api/portfolio error:', error);
    return NextResponse.json({ error: 'Failed to fetch portfolio data' }, { status: 500 });
  }
}
