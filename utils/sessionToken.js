import crypto from 'crypto';

/**
 * Generates a secure session token
 * @param {string} secret - The NEXTAUTH_SECRET environment variable
 * @param {string} email - The user's email
 * @returns {string} The generated session token
 */
export default function generateSessionToken(secret, email) {
   const timestamp = Date.now().toString();
   const data = `${email}${timestamp}`;

   // Generate a secure token using HMAC and SHA-256
   const token = crypto
      .createHmac('sha256', secret)
      .update(data)
      .digest('hex');

   return token;
};
