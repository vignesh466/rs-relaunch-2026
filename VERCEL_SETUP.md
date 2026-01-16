# Vercel Deployment Setup

## Required Environment Variables

Add these environment variables in your Vercel project dashboard:
**Settings → Environment Variables**

### Strapi CMS Configuration

```
NEXT_PUBLIC_STRAPI_URL
Value: https://automatic-cabbage-5a6930dc68.strapiapp.com
```

```
NEXT_PUBLIC_STRAPI_TOKEN
Value: 7fd4b4f8bb5ce2962009c7eeedacd3f3ecfbba5f3d2706bc236b3c8222995b075d509888357e67e9ed9e26e5add1b5c2c28d04b6910c5aae89d37694633d7760d409119cef5e4e2458b62fd349ab332af02903a230aaab2e37d5c3ae66e72a3b87eb852a295b3fc2a10e1ad803de2bcc4383d4d4d5a87ecbe43daa873386bd97
```

### Formspree Configuration (Optional - Currently hardcoded in components)

```
LearnMore_Formspree
Value: https://formspree.io/f/mldgydww
```

```
Contact_Formspree
Value: https://formspree.io/f/mwpvjjoa
```

## Deployment Steps

1. **Push to GitHub**

   ```bash
   git add .
   git commit -m "Setup Strapi integration"
   GIT_SSH_COMMAND="ssh -i ~/SSH_Relific" git push origin main
   ```

2. **Configure Vercel**

   - Go to your Vercel project dashboard
   - Navigate to **Settings → Environment Variables**
   - Add the variables listed above for all environments (Production, Preview, Development)

3. **Redeploy**
   - Go to **Deployments** tab
   - Click on the latest deployment
   - Click **Redeploy** to pick up the new environment variables

## Verification

After deployment, verify:

- ✅ Blog page loads at `/blogs`
- ✅ Individual blog posts load at `/blogs/[slug]`
- ✅ Contact forms submit successfully
- ✅ No console errors

## Notes

- `NEXT_PUBLIC_*` variables are exposed to the browser (safe for client-side use)
- `.env.local` is for local development only and is not deployed to Vercel
- Formspree endpoints are currently hardcoded in contact form components
