// N8N Workflow Creator Script
// This script creates the Viral Content Machine workflow in your N8N instance

const https = require('https');
const fs = require('fs');

const N8N_API_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2YzY5OGEzYy0yYmM0LTRkNDYtYTZiZS1iNWM5MDlhOWM0OGYiLCJpc3MiOiJuOG4iLCJhdWQiOiJwdWJsaWMtYXBpIiwiaWF0IjoxNzYwMjY0MzgzLCJleHAiOjE3NjU0MzI4MDB9.45sglflkhwctGJvXhh78uTkjnOL25X5F1se1SddH2gM';
const N8N_BASE_URL = 'awjames.app.n8n.cloud';

console.log('🚀 Starting N8N Workflow Creation...\n');

// Read the workflow JSON
console.log('📖 Reading workflow JSON file...');
const workflowData = JSON.parse(fs.readFileSync('n8n-workflows/viral-content-machine-clean.json', 'utf8'));

console.log('✅ Workflow JSON loaded successfully!');
console.log(`   Workflow Name: ${workflowData.name}`);
console.log(`   Total Nodes: ${workflowData.nodes.length}`);
console.log('');

// Prepare the API request
const postData = JSON.stringify(workflowData);

const options = {
  hostname: N8N_BASE_URL,
  port: 443,
  path: '/api/v1/workflows',
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Content-Length': Buffer.byteLength(postData),
    'X-N8N-API-KEY': N8N_API_KEY
  }
};

console.log('🔌 Connecting to N8N at:', N8N_BASE_URL);
console.log('📤 Sending workflow to N8N...\n');

// Make the API request
const req = https.request(options, (res) => {
  let data = '';

  res.on('data', (chunk) => {
    data += chunk;
  });

  res.on('end', () => {
    if (res.statusCode === 200 || res.statusCode === 201) {
      const response = JSON.parse(data);
      console.log('✅ SUCCESS! Workflow created in N8N!\n');
      console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
      console.log('📋 WORKFLOW DETAILS:');
      console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
      console.log(`   Name: ${response.name}`);
      console.log(`   ID: ${response.id}`);
      console.log(`   Status: ${response.active ? '🟢 Active' : '🔴 Inactive'}`);
      console.log(`   Nodes: ${response.nodes.length}`);
      console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n');
      
      console.log('🎯 NEXT STEPS:\n');
      console.log('1. Open N8N: https://awjames.app.n8n.cloud');
      console.log('2. Find workflow: "Viral Content Machine - Phase 1"');
      console.log('3. Configure Gmail node with YOUR email address');
      console.log('4. Connect your Google account (OAuth)');
      console.log('5. Test the workflow');
      console.log('6. Activate it!\n');
      
      console.log('📧 Tomorrow at 8:30 AM, you\'ll receive your first');
      console.log('   viral content report with Reel scripts ready to film!\n');
      
      console.log('🚀 Your content machine is READY!');
    } else {
      console.error('❌ ERROR: Failed to create workflow');
      console.error(`   Status Code: ${res.statusCode}`);
      console.error(`   Response: ${data}`);
      console.log('\n📋 MANUAL IMPORT OPTION:');
      console.log('   1. Open: https://awjames.app.n8n.cloud');
      console.log('   2. Click: New Workflow');
      console.log('   3. Import file: n8n-workflows/viral-content-machine-phase1.json');
      console.log('   See N8N-SETUP-GUIDE.md for detailed instructions!');
    }
  });
});

req.on('error', (error) => {
  console.error('❌ CONNECTION ERROR:', error.message);
  console.log('\n📋 MANUAL IMPORT OPTION:');
  console.log('   1. Open: https://awjames.app.n8n.cloud');
  console.log('   2. Click: New Workflow → Import from File');
  console.log('   3. Select: n8n-workflows/viral-content-machine-phase1.json');
  console.log('   4. Follow N8N-SETUP-GUIDE.md for setup!');
});

req.write(postData);
req.end();

