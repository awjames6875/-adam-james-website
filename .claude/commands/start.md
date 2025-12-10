Start a new session by loading project state.

1. Read all 4 memory bank files in order:
   - `memory-bank/projectbrief.md` - Project goals and overview
   - `memory-bank/techContext.md` - Tech stack and architecture
   - `memory-bank/activeContext.md` - Current work focus
   - `memory-bank/progress.md` - Task status and session history

2. Summarize for the user:
   - **Current Task**: What's being worked on right now
   - **Recent Work**: Last 3 completed tasks
   - **Next Steps**: Ordered list of next actions
   - **Blockers**: Any issues preventing progress

3. Propose what to work on next based on memory bank state

4. Wait for user approval before proceeding

**Note**: This command initializes fresh session state. Use `/resume` if returning to incomplete work from previous session.
