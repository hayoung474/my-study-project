// 기존의 _document.tsx , _app.tsx 를 합쳐놓은 역할을 한다.
'use client';
import StyledComponentsRegistry from '@/lib/registry';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const queryClient = new QueryClient();

  return (
    <html>
      <body>
        <QueryClientProvider client={queryClient}>
          <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
        </QueryClientProvider>
      </body>
    </html>
  );
}
