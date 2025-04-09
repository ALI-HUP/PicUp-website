import { withAuth } from "next-auth/middleware"; // Import middleware for authentication

export default withAuth({
  pages: {
    signIn: "/login", // Redirect users to the login page if they are not authenticated
  },
  // Optional: You can specify specific paths that require authentication
});

export const config = {
  matcher: ["/home", "/dashboard"], // Only protect specific paths like /home and /dashboard
};
