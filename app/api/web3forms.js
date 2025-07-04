import { NextResponse } from 'next/server';

export async function POST(req) {
  const response = await fetch('/api/web3forms', {
    method: 'POST',
    body: formData,
  });

  const data = await response.json();
  return NextResponse.json(data);
}