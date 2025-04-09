import NextAuth, { AuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions: AuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        const email = credentials?.email;
        const password = credentials?.password;

        console.log("Login attempt", { email, password }); // Log login attempt

        if (!email || !password) {
          console.log("Missing email or password");
          return null;
        }

        if (email === "test@example.com" && password === "123456") {
          console.log("User authorized:", email); // Log successful login
          return { id: "1", name: "Test User", email };
        }

        console.log("Invalid credentials"); // Log invalid login
        return null;
      },
    }),
  ],
  session: {
    strategy: "jwt",
  },
  pages: {
    signIn: "/login",  // This is where users go to log in
  },
  secret: process.env.NEXTAUTH_SECRET,  // Ensure you have this secret in .env.local
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
