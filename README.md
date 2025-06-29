# Ignite Web3 Portfolio

A modern portfolio website built with React, TypeScript, and Vite.

## Features

- Responsive design
- Animated sections with scroll-based reveal
- Contact form with direct email functionality
- Portfolio showcase
- Services section
- Skills display

## Setup and Installation

1. Clone the repository
2. Install dependencies:

```bash
npm install
```

3. Install nodemailer for the contact form functionality:

```bash
npm install nodemailer
```

4. Start the development server:

```bash
npm run dev
```

## Netlify Deployment and Email Function Setup

This project uses Netlify Functions to handle the contact form email sending. Follow these steps to set it up:

### 1. Install Netlify CLI (optional for local testing)

```bash
npm install -g netlify-cli
```

### 2. Configure Environment Variables

You MUST set up the following environment variables in your Netlify dashboard after deployment:

- `EMAIL_USER`: The email address that will be used to send emails (e.g., your Gmail address)
- `EMAIL_PASS`: The password or app-specific password for the email account
- `RECEIVER_EMAIL`: The email address where you want to receive contact form submissions

To set these variables in Netlify:

1. Go to your Netlify site dashboard
2. Navigate to Site settings > Build & deploy > Environment
3. Add each variable under "Environment variables"

### 3. Security Note

Never commit your email credentials to your repository. Always use environment variables for sensitive information.

### 4. Testing Locally

To test the Netlify Functions locally:

```bash
netlify dev
```

This will start both your frontend and the Netlify Functions locally.

## Email Service Configuration

The contact form uses nodemailer with SMTP to send emails. By default, it's configured for Gmail, but you can modify the SMTP settings in `netlify/functions/send-email.js` to use a different email provider if needed.

If you're using Gmail, you might need to:

1. Enable "Less secure app access" (not recommended for production)
2. Or better, create an app-specific password in your Google account security settings
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
