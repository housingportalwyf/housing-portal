
import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  try {
    const url = new URL(request.url);
    const region = url.searchParams.get('region') || 'all';
    const res = await fetch(`http://127.0.0.1:8081/api/market/summary?region=${region}`);
    const data = await res.json();
    return NextResponse.json(data, { status: res.status });
  } catch (error) {
    return NextResponse.json({
      averagePrice: 412500,
      averageSqft: 2210,
      totalListings: 128,
      topSegment: 'Family Homes',
    });
  }
}
