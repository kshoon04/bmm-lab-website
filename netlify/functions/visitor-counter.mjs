import { getStore } from '@netlify/blobs';

// Counts visits, not unique visitors. Concurrent writes can lose increments.
// The storage key is the Korea-local calendar date.
export default async (request) => {
  if (request.method !== 'GET' && request.method !== 'POST') {
    return new Response(JSON.stringify({ error: 'Method not allowed' }), { status: 405, headers: { 'Content-Type': 'application/json' } });
  }
  try {
    const store = getStore({ name: 'bmm-visitor-stats', consistency: 'strong' });
    const day = new Intl.DateTimeFormat('en-CA', { timeZone: 'Asia/Seoul', year: 'numeric', month: '2-digit', day: '2-digit' }).format(new Date());
    const dayKey = `day-${day}`;
    let [today, total] = await Promise.all([store.get(dayKey, { type: 'json' }), store.get('total', { type: 'json' })]);
    today = Number(today?.count || 0); total = Number(total?.count || 0);
    if (request.method === 'POST') {
      today += 1; total += 1;
      await Promise.all([store.setJSON(dayKey, { count: today }), store.setJSON('total', { count: total })]);
    }
    return new Response(JSON.stringify({ today, total, date: day }), { status: 200, headers: { 'Content-Type': 'application/json', 'Cache-Control': 'no-store' } });
  } catch (error) {
    console.error('Visitor counter failed', error);
    return new Response(JSON.stringify({ error: 'Counter unavailable' }), { status: 503, headers: { 'Content-Type': 'application/json' } });
  }
};
