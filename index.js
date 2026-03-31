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
      if (msg.includes(keyword)) {
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
app.post("/webhook", async (req, res) => {
  const msg = (req.body.Body || "").toLowerCase().trim();
  console.log("User:", msg);

  let reply = getBestMatch(msg);

  // 🔥 Completely Static Fallback Message (Bilingual)
  if (!reply) {
    reply = "🤔 Sorry, I am still learning and don't have an answer for that yet. Please contact 6302245307 or visit nlrgroupofcompany.in.\n\nక్షమించండి, నేను ఇంకా వ్యవసాయ విషయాలు నేర్చుకుంటున్నాను. దయచేసి సహాయం కోసం 6302245307 కు కాల్ చేయండి లేదా nlrgroupofcompany.in సందర్శించండి. 📞";
  }

  // Create TwiML Response
  const twiml = new MessagingResponse();
  twiml.message(reply);

  res.set("Content-Type", "text/xml");
  res.send(twiml.toString());
});

// Start server
app.listen(3000, () => console.log("Server running on port 3000"));