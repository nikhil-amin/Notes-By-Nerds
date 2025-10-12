# Guidance for AI contributors and Copilot helpers

This file provides project-specific instructions and constraints for automated code assistants (Copilot-style) working on the Notes-By-Nerds repository.

Key points:

- Project structure: There are two main folders: `BackEnd/` (Node/Express API) and `FrontEnd/` (Angular). When making changes, prefer editing only the targeted folder unless asked to coordinate both.
- Languages and frameworks: JavaScript/Node (CommonJS) on the backend, TypeScript/Angular on the frontend.
- Dev workflow: Backend uses `npm` and `nodemon` for development. Frontend uses Angular CLI (npm scripts in `FrontEnd/package.json`).
- Environment variables: Sensitive values (database connection strings, JWT secrets) must not be hard-coded. If a secret is currently in code (there is a JWT secret string in `BackEnd/config/jwtHelper.js`), suggest a migration to an env var and document the change clearly.
- Database: MongoDB via Mongoose. Use `process.env.MONGO_ONLINE_URL` as the primary connection string.
- Tests: Minimal test scaffolding exists in Frontend; the backend doesn't have automated tests. When adding tests, prefer Jest/Mocha for backend and Jasmine/Karma for Angular frontend.

Assistant behavior rules:

1. Do not introduce secrets in code. If a secret is required for a runnable example, use a placeholder and clearly mention it must be set in `.env` or secret management.
2. Preserve existing code style (CommonJS require/exports on the backend). Keep diffs minimal and local to requested files.
3. When changing startup logic or environment names, update `BackEnd/README.md` and relevant docs.
4. If a change affects both backend and frontend (for example, CORS URLs, API paths, or auth contract), mention both and suggest minimal, backward-compatible migration steps.
5. Run quick build/test checks where possible and report PASS/FAIL. For unit tests, add a small happy-path test and ensure it runs fast.

If you are unsure about a missing detail (which port to use, preferred JWT secret name, etc.), make one small, reasonable assumption, state it in the PR description, and proceed. Prefer `PORT=3000` and `JWT_SECRET` as the environment variable name.

Thanks — follow up with a short checklist in PR descriptions indicating what you ran (install, lint, tests, smoke start) and any manual verification steps.
