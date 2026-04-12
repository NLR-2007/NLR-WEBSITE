import express from "express";
import bodyParser from "body-parser";
import twilio from "twilio";
import fs from "fs";

const { MessagingResponse } = twilio.twiml;

// Load knowledge base synchronously
const intents = JSON.parse(fs.readFileSync("./knowledge.json", "utf8"));

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));


// 🔷 Smart Matching Function (Bilingual Output)
function getBestMatch(msg) {
  let bestScore = 0;
  let bestAnswer = null;

  for (let intent of intents) {
    let score = 0;
    for (let keyword of intent.keywords) {
      if (msg.includes(keyword.toLowerCase())) {
        score++;
      }
    }
    
    // Only update if we find a slightly better keyword match
    if (score > bestScore) {
      bestScore = score;
      // Return both languages formatted together
      bestAnswer = `${intent.answer_en}\n\n${intent.answer_te}`;
    }
  }

  return bestAnswer;
}

// 🔷 Webhook
app.post("/webhook", (req, res) => {
  try {
    const msg = (req.body.Body || "").toLowerCase().trim();
    console.log(`\n📩 Incoming: "${msg}"`);

    let reply = getBestMatch(msg);

    // 🧪 Simple Diagnostic Test
    if (msg === "test") {
      reply = "Hello! This is a simple test message from your server. No emojis, no special characters.";
    }

    // 🔥 Completely Static Fallback Message (Bilingual)
    if (!reply) {
      reply = "🤔 Sorry, I am still learning and don't have an answer for that yet. Please contact 6302245307 or visit nlrgroupofcompany.in.\n\nక్షమించండి, నేను ఇంకా వ్యవసాయ విషయాలు నేర్చుకుంటున్నాను. దయచేసి సహాయం కోసం 6302245307 కు కాల్ చేయండి లేదా nlrgroupofcompany.in సందర్శించండి. 📞";
    }

    // Create TwiML Response
    const twiml = new MessagingResponse();
    twiml.message(reply);

    // Get the XML string (twiml.toString() usually includes the header, but we'll be safe)
    let xmlResponse = twiml.toString();
    if (!xmlResponse.startsWith('<?xml')) {
      xmlResponse = '<?xml version="1.0" encoding="UTF-8"?>' + xmlResponse;
    }
    
    console.log(`📤 Message Length: ${reply.length} chars`);
    console.log(`📜 FULL XML SENT: ${xmlResponse}`);

    // Standard Twilio headers
    res.set('Content-Type', 'text/xml; charset=utf-8');
    res.send(xmlResponse);
    
    console.log(`✅ RESPONSE DISPATCHED TO TWILIO`);

  } catch (error) {
    console.error("❌ Webhook Internal Error:", error);
    if (!res.headersSent) {
      res.status(500).send("Error");
    }
  }
});

// 🛡️ Global Crash Guard
process.on('uncaughtException', (err) => {
  console.error('💥 UNCAUGHT EXCEPTION:', err);
});

process.on('unhandledRejection', (reason, promise) => {
  console.error('💥 UNHANDLED REJECTION:', reason);
});

// Start server
app.listen(3000, () => {
  console.log("✅ Kisaan Krushi Chatbot is LIVE on port 3000");
  console.log("🚀 Waiting for WhatsApp messages...");
});