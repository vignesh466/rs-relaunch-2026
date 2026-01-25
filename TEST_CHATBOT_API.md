# Chatbot API Test Instructions

## Issue Found & Fixed

**Problem**: The code was using `gemini-pro` which is deprecated/not available.  
**Solution**: Changed to `gemini-2.0-flash` in `/app/api/chat/route.ts`

## API Key Verification

✅ API Key is valid: `AIzaSyAlLwaUQS4y6_rTLvB52ei6pU7Z0iyIBMw`  
✅ Direct Gemini API test successful  
✅ Available models: `gemini-2.0-flash`, `gemini-2.5-flash`, `gemini-2.5-pro`

---

## How to Run Tests

### Step 1: Start Dev Server (Terminal 1)

```bash
cd /Users/Vignesh/Downloads/rs-relaunch-2026-main
npm run dev
```

**Wait for this message:**

```
✓ Ready in XXXms
```

**Keep this terminal open!**

---

### Step 2: Run Tests (Terminal 2 - New Tab/Window)

Open a new terminal and run these commands:

#### Test 1: NGO Query

```bash
curl -X POST http://localhost:3000/api/chat \
  -H "Content-Type: application/json" \
  -d '{"message":"Hi I am from NGO X. How can relific help me?"}'
```

**Expected Response:**

```json
{
  "response": "Relific offers three integrated AI-powered tools: ProGran for programme & grants management, Drive-R for data integration & reporting, and Surve-R for field data collection.\nThese work together to help you manage your impact operations from field data to donor reports across any social sector."
}
```

---

#### Test 2: Surve-R Health Query

```bash
curl -X POST http://localhost:3000/api/chat \
  -H "Content-Type: application/json" \
  -d '{"message":"Can Surve-r support health programs?"}'
```

**Expected Response:**

```json
{
  "response": "Yes! Surve-R is sector-agnostic and fully supports healthcare programmes.\nIt provides offline-first mobile forms, multi-language support, AI validation, and works seamlessly for health data collection."
}
```

---

#### Test 3: CSR Team Query

```bash
curl -X POST http://localhost:3000/api/chat \
  -H "Content-Type: application/json" \
  -d '{"message":"I am from ABC CSR team. How will this benefit me?"}'
```

**Expected Response:**

```json
{
  "response": "Relific centralizes your CSR programme portfolio with ProGran for grants management, Drive-R for unified impact reporting, and Surve-R for field data collection.\nYou get automated compliance, real-time dashboards, professional donor reports, and data-driven insights across all your CSR initiatives."
}
```

---

#### Bonus Test: Off-Topic Query (Should return "I don't know")

```bash
curl -X POST http://localhost:3000/api/chat \
  -H "Content-Type: application/json" \
  -d '{"message":"What is the weather today?"}'
```

**Expected Response:**

```json
{ "response": "I don't know." }
```

---

## All-in-One Test Script

Copy this into a file called `run_tests.sh`:

```bash
#!/bin/bash

echo "🧪 Chatbot API Tests"
echo "===================="
echo ""

echo "📝 TEST 1: NGO Query"
curl -s -X POST http://localhost:3000/api/chat \
  -H "Content-Type: application/json" \
  -d '{"message":"Hi I am from NGO X. How can relific help me?"}' | jq '.'
echo ""
echo "---"
echo ""

echo "📝 TEST 2: Healthcare/Surve-R Query"
curl -s -X POST http://localhost:3000/api/chat \
  -H "Content-Type: application/json" \
  -d '{"message":"Can Surve-r support health programs?"}' | jq '.'
echo ""
echo "---"
echo ""

echo "📝 TEST 3: CSR Team Benefits"
curl -s -X POST http://localhost:3000/api/chat \
  -H "Content-Type: application/json" \
  -d '{"message":"I am from ABC CSR team. How will this benefit me?"}' | jq '.'
echo ""
echo "---"
echo ""

echo "📝 BONUS: Off-Topic Query"
curl -s -X POST http://localhost:3000/api/chat \
  -H "Content-Type: application/json" \
  -d '{"message":"What is the weather today?"}' | jq '.'
echo ""
echo "---"
echo ""

echo "✅ Tests complete!"
```

Then run:

```bash
chmod +x run_tests.sh
./run_tests.sh
```

---

## Validation Checklist

After running tests, verify:

- [ ] **NGO Query**: Mentions all 3 products (ProGran, Drive-R, Surve-R)
- [ ] **NGO Query**: Says "any social sector" (not just agriculture)
- [ ] **NGO Query**: Response is ≤2 lines
- [ ] **Healthcare Query**: Confirms "Yes" and mentions "sector-agnostic"
- [ ] **Healthcare Query**: Lists features (offline, multi-language, AI)
- [ ] **Healthcare Query**: Response is ≤2 lines
- [ ] **CSR Query**: Mentions CSR-specific benefits (compliance, dashboards)
- [ ] **CSR Query**: Mentions portfolio management
- [ ] **CSR Query**: Response is ≤2 lines
- [ ] **Off-Topic**: Returns exactly "I don't know."
- [ ] **All responses**: Returned in <5 seconds

---

## Troubleshooting

### If you get connection errors:

```bash
# Check if server is running
curl http://localhost:3000/

# If not, restart:
pkill -f "next dev"
npm run dev
```

### If you get API errors:

```bash
# Check the server logs in Terminal 1
# Look for error messages in the output

# Verify API key is loaded:
grep GEMINI_API_KEY .env.local
```

### If responses are wrong:

- Check that you restarted the server after the model name fix
- Server must pick up the new code with `gemini-2.0-flash`

---

## Changes Made

1. **Fixed model name** in `/app/api/chat/route.ts`:
   - Changed from: `gemini-pro` (deprecated)
   - Changed to: `gemini-2.0-flash` (current stable model)

2. **Verified API key** works with direct Gemini API test

3. **Confirmed available models**:
   - `gemini-2.0-flash` ✅ (using this)
   - `gemini-2.5-flash` ✅
   - `gemini-2.5-pro` ✅

---

## Environment Variables

Located in `.env.local`:

```
GEMINI_API_KEY=AIzaSyAlLwaUQS4y6_rTLvB52ei6pU7Z0iyIBMw
API_EMAIL=coretech@relificl.io
API_PASSWORD=Backtoback!2024
```

Note: The email/password are in `.env.local` but not currently used by the chatbot (only API key is needed for Gemini).
