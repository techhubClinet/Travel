/**
 * HTML email template for contact form submissions.
 * Uses inline CSS and theme colors to match BioCare Express website.
 */
const theme = {
  primary: '#1d4ed8',
  primaryDark: '#1e3a8a',
  bgDark: '#1e3a5f',
  text: '#0f172a',
  textMuted: '#475569',
  border: '#e2e8f0',
  bgAlt: '#f8fafc',
  white: '#ffffff',
};

function escapeHtml(str) {
  if (!str) return '';
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/\n/g, '<br>');
}

/**
 * @param {Object} data - { name, email, company, serviceType, message }
 * @returns {string} HTML string for the email body
 */
export function getContactEmailHtml(data) {
  const { name, email, company, serviceType, message } = data;
  const safe = {
    name: escapeHtml(name?.trim()),
    email: escapeHtml(email?.trim()),
    company: company?.trim() ? escapeHtml(company.trim()) : '—',
    serviceType: escapeHtml(serviceType || 'general'),
    message: escapeHtml(message?.trim()),
  };

  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>New Contact Form Submission</title>
</head>
<body style="margin:0; padding:0; font-family: 'Segoe UI', system-ui, -apple-system, sans-serif; background-color: #f1f5f9; font-size: 16px; line-height: 1.6; color: ${theme.text};">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color: #f1f5f9; padding: 24px 16px;">
    <tr>
      <td align="center">
        <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width: 560px; margin: 0 auto;">
          <!-- Header -->
          <tr>
            <td style="background: linear-gradient(135deg, ${theme.bgDark} 0%, ${theme.primaryDark} 50%, ${theme.primary} 100%); padding: 28px 32px; border-radius: 10px 10px 0 0; text-align: center;">
              <h1 style="margin: 0; color: ${theme.white}; font-size: 22px; font-weight: 700;">BioCare Express</h1>
              <p style="margin: 6px 0 0; color: rgba(255,255,255,0.9); font-size: 14px;">New contact form submission</p>
            </td>
          </tr>
          <!-- Body -->
          <tr>
            <td style="background-color: ${theme.white}; padding: 28px 32px; border: 1px solid ${theme.border}; border-top: none; border-radius: 0 0 10px 10px;">
              <p style="margin: 0 0 20px; color: ${theme.textMuted}; font-size: 14px;">You received a new message from your website.</p>
              
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="margin-bottom: 20px;">
                <tr>
                  <td style="padding: 12px 16px; background-color: ${theme.bgAlt}; border-radius: 8px; border-left: 4px solid ${theme.primary};">
                    <strong style="color: ${theme.primaryDark}; font-size: 12px; text-transform: uppercase; letter-spacing: 0.05em;">Name</strong><br>
                    <span style="color: ${theme.text}; font-size: 16px;">${safe.name}</span>
                  </td>
                </tr>
                <tr><td style="height: 10px;"></td></tr>
                <tr>
                  <td style="padding: 12px 16px; background-color: ${theme.bgAlt}; border-radius: 8px; border-left: 4px solid ${theme.primary};">
                    <strong style="color: ${theme.primaryDark}; font-size: 12px; text-transform: uppercase; letter-spacing: 0.05em;">Email</strong><br>
                    <a href="mailto:${safe.email}" style="color: ${theme.primary}; text-decoration: none;">${safe.email}</a>
                  </td>
                </tr>
                <tr><td style="height: 10px;"></td></tr>
                <tr>
                  <td style="padding: 12px 16px; background-color: ${theme.bgAlt}; border-radius: 8px; border-left: 4px solid ${theme.primary};">
                    <strong style="color: ${theme.primaryDark}; font-size: 12px; text-transform: uppercase; letter-spacing: 0.05em;">Company</strong><br>
                    <span style="color: ${theme.text}; font-size: 16px;">${safe.company}</span>
                  </td>
                </tr>
                <tr><td style="height: 10px;"></td></tr>
                <tr>
                  <td style="padding: 12px 16px; background-color: ${theme.bgAlt}; border-radius: 8px; border-left: 4px solid ${theme.primary};">
                    <strong style="color: ${theme.primaryDark}; font-size: 12px; text-transform: uppercase; letter-spacing: 0.05em;">Service type</strong><br>
                    <span style="color: ${theme.text}; font-size: 16px;">${safe.serviceType}</span>
                  </td>
                </tr>
              </table>

              <p style="margin: 0 0 8px; color: ${theme.primaryDark}; font-size: 12px; text-transform: uppercase; letter-spacing: 0.05em; font-weight: 600;">Message</p>
              <div style="padding: 16px; background-color: ${theme.bgAlt}; border-radius: 8px; border: 1px solid ${theme.border}; color: ${theme.text};">
                ${safe.message}
              </div>

              <p style="margin: 24px 0 0; padding-top: 20px; border-top: 1px solid ${theme.border}; color: ${theme.textMuted}; font-size: 13px;">
                Moving What Matters—Safely, Quickly, and Reliably.<br>
                Reply to this email to respond to the customer.
              </p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>
  `.trim();
}
