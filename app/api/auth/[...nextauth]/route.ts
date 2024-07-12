import NextAuth, { NextAuthOptions } from 'next-auth';
import AzureADProvider from 'next-auth/providers/azure-ad';

const env = process.env;

const options: NextAuthOptions = {
  providers: [
    AzureADProvider({
      clientId: env.NEXT_PUBLIC_AZURE_AD_CLIENT_ID || '',
      clientSecret: env.NEXT_PUBLIC_AZURE_AD_CLIENT_SECRET || '',
      tenantId: env.NEXT_PUBLIC_AZURE_AD_TENANT_ID || '',
      authorization: {
        params: { scope: 'openid email profile User.Read offline_access' },
      },
      httpOptions: { timeout: 10000 },
    }),
  ],
  session: {
    strategy: 'jwt',
    maxAge: 30 * 60,
  },
  jwt: {
    secret: env.NEXTAUTH_SECRET,
    maxAge: 30 * 60,
  },
  callbacks: {
    async jwt({ token, user, account }) {
      if (user) {
        token.id = user.id;
      }

      if (account?.id_token) {
        const decodedToken = JSON.parse(Buffer.from(account.id_token.split('.')[1], 'base64').toString());
        
        token.role = decodedToken.roles?.[0] || null;
        token.groups = decodedToken.groups || [];
      }

      return token;
    },
    async session({ session, token }) {
      console.log(token)
      if (token && session.user) {
        session.user.id = token.id!;
        session.user.role = token.role ?? undefined;
        session.user.image = token.image as string;
        session.user.groups = token.groups || [];
      }
      return session;
    },
  },
  pages: {
    // signIn: '/auth/signin',
    error: '/auth/error',
    verifyRequest: '/auth/verify-request',
  },
};

const handler = NextAuth(options);

export { handler as GET, handler as POST };
