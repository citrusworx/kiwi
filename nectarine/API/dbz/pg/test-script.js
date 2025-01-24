const dotenv = require('dotenv');
const path = require('path');
const fs = require('fs');

// ✅ Ensure .env exists
const envPath = path.resolve(__dirname, '.env');
if (!fs.existsSync(envPath)) {
    console.error("❌ ERROR: `.env` file NOT found at", envPath);
    process.exit(1);
}

// ✅ Manually read .env content
console.log("🔍 Reading `.env` file manually:");
console.log(fs.readFileSync(envPath, 'utf8'));

// ✅ Load dotenv explicitly
dotenv.config({ path: envPath });

console.log("\n🔍 Debugging Loaded Environment Variables:");
console.log("PG_USER:", process.env.PG_USER || "❌ Not Loaded");
console.log("PG_PASS:", process.env.PG_PASS || "❌ Not Loaded");
console.log("PG_DB:", process.env.PG_DB || "❌ Not Loaded");
console.log("PG_PORT:", process.env.PG_PORT || "❌ Not Loaded");
console.log("PG_HOST:", process.env.PG_HOST || "❌ Not Loaded");

if (!process.env.PG_USER) {
    console.error("❌ ERROR: Environment variables NOT loaded from .env");
    process.exit(1);
}

console.log("✅ Dotenv is working correctly!");

