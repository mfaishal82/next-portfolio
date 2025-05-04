import { NextResponse } from 'next/server';
import Project from '@/models/project';

export async function GET(request) {
  try {
    const projects = await Project.getAll();
    return NextResponse.json(projects);
  } catch (error) {
    console.error('GET /api/projects error:', error);
    return NextResponse.json({ error: 'Failed to fetch projects' }, { status: 500 });
  }
}

export async function POST(request) {
  try {
    const project = await request.json();
    const id = await Project.create(project);
    return NextResponse.json({ message: 'Project created', id });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to create project' }, { status: 500 });
  }
}

export async function PUT(request) {
  try {
    const { slug, ...updateData } = await request.json();
    if (!slug) {
      return NextResponse.json({ error: 'Missing slug for update' }, { status: 400 });
    }
    const matchedCount = await Project.updateBySlug(slug, updateData);
    if (matchedCount === 0) {
      return NextResponse.json({ error: 'Project not found' }, { status: 404 });
    }
    return NextResponse.json({ message: 'Project updated' });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to update project' }, { status: 500 });
  }
}

export async function DELETE(request) {
  try {
    const { searchParams } = new URL(request.url);
    const slug = searchParams.get('slug');
    if (!slug) {
      return NextResponse.json({ error: 'Missing slug for delete' }, { status: 400 });
    }
    const deletedCount = await Project.deleteBySlug(slug);
    if (deletedCount === 0) {
      return NextResponse.json({ error: 'Project not found' }, { status: 404 });
    }
    return NextResponse.json({ message: 'Project deleted' });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to delete project' }, { status: 500 });
  }
}
