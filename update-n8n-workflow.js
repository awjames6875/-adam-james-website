// Update N8N Workflow - Add AI News and Coding Feeds
const https = require('https');

const N8N_API_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2YzY5OGEzYy0yYmM0LTRkNDYtYTZiZS1iNWM5MDlhOWM0OGYiLCJpc3MiOiJuOG4iLCJhdWQiOiJwdWJsaWMtYXBpIiwiaWF0IjoxNzYwMjY0MzgzLCJleHAiOjE3NjU0MzI4MDB9.45sglflkhwctGJvXhh78uTkjnOL25X5F1se1SddH2gM';
const N8N_BASE_URL = 'awjames.app.n8n.cloud';
const WORKFLOW_ID = '8Bzsc1uCp9NPh5u0';

console.log('🚀 Updating Viral Content Machine...\n');
console.log('Adding:');
console.log('   📰 AI News RSS Feed');
console.log('   💻 Coding/VibeCode RSS Feed\n');

// First, get the existing workflow
const getOptions = {
  hostname: N8N_BASE_URL,
  port: 443,
  path: `/api/v1/workflows/${WORKFLOW_ID}`,
  method: 'GET',
  headers: {
    'X-N8N-API-KEY': N8N_API_KEY
  }
};

console.log('📖 Fetching current workflow...');

const getReq = https.request(getOptions, (res) => {
  let data = '';

  res.on('data', (chunk) => {
    data += chunk;
  });

  res.on('end', () => {
    if (res.statusCode === 200) {
      const workflow = JSON.parse(data);
      console.log('✅ Current workflow loaded!\n');
      
      // Add two new RSS feed nodes
      const aiNewsNode = {
        parameters: {
          url: "https://www.artificialintelligence-news.com/feed/",
          options: {
            limit: 5
          }
        },
        name: "AI News Feed",
        type: "n8n-nodes-base.rssFeedRead",
        typeVersion: 1,
        position: [450, 600]
      };
      
      const codingNewsNode = {
        parameters: {
          url: "https://news.ycombinator.com/rss",
          options: {
            limit: 5
          }
        },
        name: "Hacker News Coding Feed",
        type: "n8n-nodes-base.rssFeedRead",
        typeVersion: 1,
        position: [450, 700]
      };
      
      // Add nodes to workflow
      workflow.nodes.push(aiNewsNode);
      workflow.nodes.push(codingNewsNode);
      
      // Update connections to include new feeds in the merge
      const triggerNode = workflow.connections["Daily Trigger - 8 AM CST"];
      triggerNode.main[0].push({
        node: "AI News Feed",
        type: "main",
        index: 0
      });
      triggerNode.main[0].push({
        node: "Hacker News Coding Feed",
        type: "main",
        index: 0
      });
      
      // Connect new feeds to merge node
      workflow.connections["AI News Feed"] = {
        main: [[{
          node: "Merge All Feeds",
          type: "main",
          index: 4
        }]]
      };
      
      workflow.connections["Hacker News Coding Feed"] = {
        main: [[{
          node: "Merge All Feeds",
          type: "main",
          index: 5
        }]]
      };
      
      console.log('✅ Added 2 new RSS feeds:');
      console.log('   📰 AI News Feed (artificialintelligence-news.com)');
      console.log('   💻 Hacker News Coding Feed (news.ycombinator.com)\n');
      
      // Now update the workflow via API
      const postData = JSON.stringify(workflow);
      
      const putOptions = {
        hostname: N8N_BASE_URL,
        port: 443,
        path: `/api/v1/workflows/${WORKFLOW_ID}`,
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Content-Length': Buffer.byteLength(postData),
          'X-N8N-API-KEY': N8N_API_KEY
        }
      };
      
      console.log('📤 Updating workflow in N8N...\n');
      
      const putReq = https.request(putOptions, (putRes) => {
        let putData = '';
        
        putRes.on('data', (chunk) => {
          putData += chunk;
        });
        
        putRes.on('end', () => {
          if (putRes.statusCode === 200) {
            const response = JSON.parse(putData);
            console.log('✅ SUCCESS! Workflow updated!\n');
            console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
            console.log('📋 UPDATED WORKFLOW:');
            console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
            console.log(`   Name: ${response.name}`);
            console.log(`   Total Nodes: ${response.nodes.length} (was 10, now 12)`);
            console.log(`   RSS Feeds: 6 sources`);
            console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n');
            
            console.log('🎯 NEW CONTENT SOURCES:\n');
            console.log('   📰 AI News:');
            console.log('      - Latest AI developments');
            console.log('      - Machine learning breakthroughs');
            console.log('      - AI business applications');
            console.log('      - Perfect for GrowthGenix.ai content!\n');
            
            console.log('   💻 Coding/Hacker News:');
            console.log('      - Tech trends');
            console.log('      - Developer insights');
            console.log('      - Startup stories');
            console.log('      - VibeCode content ideas!\n');
            
            console.log('🚀 Your workflow now monitors:');
            console.log('   ✅ Reddit Entrepreneur');
            console.log('   ✅ Reddit Small Business');
            console.log('   ✅ Entrepreneur Magazine');
            console.log('   ✅ Tulsa Business News');
            console.log('   ✅ AI News (NEW!)');
            console.log('   ✅ Hacker News/Coding (NEW!)\n');
            
            console.log('📧 Tomorrow\'s email will include viral content from ALL 6 sources!');
            console.log('🎬 You\'ll get AI and coding Reel ideas automatically!');
          } else {
            console.error('❌ ERROR: Failed to update workflow');
            console.error(`   Status Code: ${putRes.statusCode}`);
            console.error(`   Response: ${putData}`);
          }
        });
      });
      
      putReq.on('error', (error) => {
        console.error('❌ CONNECTION ERROR:', error.message);
      });
      
      putReq.write(postData);
      putReq.end();
      
    } else {
      console.error('❌ ERROR: Failed to fetch workflow');
      console.error(`   Status Code: ${res.statusCode}`);
      console.error(`   Response: ${data}`);
    }
  });
});

getReq.on('error', (error) => {
  console.error('❌ CONNECTION ERROR:', error.message);
});

getReq.end();





















