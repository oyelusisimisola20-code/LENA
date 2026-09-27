const fs = require('fs');

async function testRoutes() {
  const projects = JSON.parse(fs.readFileSync('src/data/projects.json', 'utf8'));

  const staticRoutes = [
    '/',
    '/portfolio',
    '/portfolio?category=AI+Ads',
    '/portfolio?category=Product+Videos',
    '/portfolio?category=UGC',
    '/portfolio?category=Cinematic',
    '/portfolio?category=Social',
    '/services',
    '/about',
    '/contact',
  ];

  const dynamicRoutes = projects.map(p => `/portfolio/${p.id}`);
  const allRoutes = [...staticRoutes, ...dynamicRoutes];

  console.log(`Testing ${allRoutes.length} routes on http://localhost:3000...\n`);

  let passed = 0;
  let failed = 0;

  for (const route of allRoutes) {
    try {
      const res = await fetch(`http://localhost:3000${route}`);
      if (res.status === 200) {
        passed++;
      } else {
        console.error(`FAILED: ${route} -> Status ${res.status}`);
        failed++;
      }
    } catch (err) {
      console.error(`ERROR: ${route} ->`, err.message);
      failed++;
    }
  }

  console.log(`\n--- ROUTE AUDIT RESULTS ---`);
  console.log(`Total Routes: ${allRoutes.length}`);
  console.log(`Passed (200 OK): ${passed}`);
  console.log(`Failed: ${failed}`);

  if (failed === 0) {
    console.log('ALL ROUTES VALIDATED SUCCESSFULLY!');
  } else {
    process.exit(1);
  }
}

testRoutes().catch(console.error);
