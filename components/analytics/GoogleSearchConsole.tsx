import Script from 'next/script';

const GSC_VERIFICATION_ID = process.env.NEXT_PUBLIC_GSC_VERIFICATION_ID || '';

export const GoogleSearchConsole = () => {
  if (!GSC_VERIFICATION_ID) {
    return null;
  }

  return (
    <Script
      id="google-search-console"
      strategy="afterInteractive"
      dangerouslySetInnerHTML={{
        __html: `
          <meta name="google-site-verification" content="${GSC_VERIFICATION_ID}" />
        `,
      }}
    />
  );
};

