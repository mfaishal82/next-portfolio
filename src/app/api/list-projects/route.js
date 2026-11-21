import { fetchProjects } from '@/services/portfolioService';
import staticProjects from '@/project';
import { NextResponse } from 'next/server';

// Revalidate cache every 5 minutes (300 seconds)
export const revalidate = 300;

export async function GET() {
  try {
    const data = await fetchProjects();
    return NextResponse.json(
      {
        default: data,
        projects: data,
      },
      {
        headers: {
          'Cache-Control': 'public, s-maxage=300, stale-while-revalidate=600',
        },
      }
    );
  } catch (error) {
    console.error('API /api/list-projects error:', error);
    return NextResponse.json(staticProjects);
  }
}
