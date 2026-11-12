import { fetchProjects } from '@/services/portfolioService';

export const dynamic = 'force-dynamic';

export async function GET() {
  try {
    const data = await fetchProjects();
    // Kompatibilitas dengan pembacaan data.default dan data array langsung
    return Response.json({
      default: data,
      projects: data,
    });
  } catch (error) {
    console.error('API /api/list-projects error:', error);
    const staticProjects = require('@/project');
    return Response.json(staticProjects);
  }
}
