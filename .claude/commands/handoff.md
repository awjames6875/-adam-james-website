Prepare for IDE switch / session handoff.

1. Read all memory bank files:
   - `memory-bank/activeContext.md` - Current work
   - `memory-bank/progress.md` - Session history
   - `docs/memory-bank.md` - Historical context (optional)

2. Analyze all changes made this session (check git status, recent edits)

3. Update the 4 memory bank files with this session's work:
   - **`memory-bank/activeContext.md`**: Update with current task status, blockers, next steps
   - **`memory-bank/progress.md`**: Add completed tasks to current session, update milestone status
   - **`memory-bank/projectbrief.md`**: Update if goals/strategy changed
   - **`memory-bank/techContext.md`**: Update if architecture decisions changed

4. Also update `docs/memory-bank.md` with session summary for long-term historical tracking

5. Output a brief handoff summary for the user showing:
   - What was completed this session
   - Files that were changed
   - Next immediate steps
   - Any blockers to note

6. Remind user to:
   - Run `npm run lint` before committing
   - Run `npm run build` to verify no errors
   - Create atomic git commit with clear message
   - Push to GitHub with `git push`

7. Confirm all memory banks are synchronized and ready for the next IDE session
