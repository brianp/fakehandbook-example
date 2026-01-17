// =============================================================================
// Nexus Technologies - API Route Handler Template
// =============================================================================
//
// Lorem ipsum dolor sit amet, consectetur adipiscing elit. This template
// provides the standard structure for API route handlers in our Node.js
// services.
//
// AUTHENTICATION:
// ---------------
// Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
// doloremque laudantium. All routes should use the appropriate auth middleware:
//
// - requireAuth: Requires valid JWT token
// - requireApiKey: Requires valid API key (for service-to-service)
// - optionalAuth: Attaches user if token present, continues if not
//
// REQUEST VALIDATION:
// -------------------
// Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.
// Use Zod schemas for request validation:
//
// const CreateUserSchema = z.object({
//   email: z.string().email(),
//   name: z.string().min(1).max(100),
//   role: z.enum(['admin', 'user', 'viewer']),
// });
//
// ERROR HANDLING:
// ---------------
// Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis.
// Throw AppError instances for expected errors:
//
// throw new AppError('USER_NOT_FOUND', 404);
// throw new AppError('INVALID_INPUT', 400, { field: 'email' });
//
// Unexpected errors are caught by global error handler and logged.
//
// RESPONSE FORMAT:
// ----------------
// Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse.
// All responses follow this structure:
//
// Success:
// {
//   "success": true,
//   "data": { ... }
// }
//
// Error:
// {
//   "success": false,
//   "error": {
//     "code": "ERROR_CODE",
//     "message": "Human readable message",
//     "details": { ... }
//   }
// }
//
// EXAMPLE HANDLER:
// ----------------
// export const getUser = async (req: Request, res: Response) => {
//   const { userId } = req.params;
//
//   const user = await userService.findById(userId);
//
//   if (!user) {
//     throw new AppError('USER_NOT_FOUND', 404);
//   }
//
//   res.json({
//     success: true,
//     data: { user: sanitizeUser(user) },
//   });
// };
//
// RATE LIMITING:
// --------------
// At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis.
// Apply rate limiting decorators as needed:
//
// @RateLimit({ windowMs: 60000, max: 100 })
// @RateLimit({ windowMs: 60000, max: 10, keyGenerator: (req) => req.ip })
//
// =============================================================================
