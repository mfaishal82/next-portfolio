import { fetchAllPortfolioData } from '@/services/portfolioService';

export const dynamic = 'force-dynamic';

export async function GET() {
  try {
    const data = await fetchAllPortfolioData();
    return Response.json(data);
  } catch (error) {
    console.error('API /api/portfolio error:', error);
    return Response.json({ error: error.message }, { status: 500 });
  }
}
