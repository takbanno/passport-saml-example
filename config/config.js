module.exports = {
  development: {
    app: {
      name: 'Passport SAML strategy example',
      port: process.env.PORT || 3000
    },
    passport: {
      strategy: 'saml',
      saml: {
        path: process.env.SAML_PATH || '/login/callback',
        entryPoint: process.env.SAML_ENTRY_POINT || 'https://openidp.feide.no/simplesaml/saml2/idp/SSOService.php',
        issuer: process.env.SAML_ISSUER || 'passport-saml',
        cert: process.env.SAML_CERT || null,
        protocol: process.env.SAML_PROTOCOL || 'https://',
        logoutUrl: process.env.SAML_LOGOUT_URL || null,
        logoutCallbackUrl: process.env.SAML_LOGOUT_CALLBACK || null,
      }
    }
  }
};
