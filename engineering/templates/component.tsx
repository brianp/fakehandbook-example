// =============================================================================
// Nexus Technologies - React Component Template
// =============================================================================
//
// Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
// tempor incididunt ut labore et dolore magna aliqua.
//
// USAGE:
// ------
// Copy this template when creating new React components. Ut enim ad minim
// veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
// commodo consequat.
//
// STRUCTURE:
// ----------
// 1. Imports - External dependencies first, then internal modules
// 2. Types/Interfaces - Props and local type definitions
// 3. Component - Functional component with hooks
// 4. Styles - Styled components or CSS modules import
//
// NAMING CONVENTIONS:
// -------------------
// - Components: PascalCase (e.g., UserProfile, DataTable)
// - Props interfaces: ComponentNameProps (e.g., UserProfileProps)
// - Hooks: useHookName (e.g., useUserData)
// - Event handlers: handleEventName (e.g., handleClick, handleSubmit)
//
// EXAMPLE:
// --------
// interface UserCardProps {
//   user: User;
//   onSelect?: (userId: string) => void;
//   isSelected?: boolean;
// }
//
// export const UserCard: React.FC<UserCardProps> = ({
//   user,
//   onSelect,
//   isSelected = false,
// }) => {
//   const handleClick = useCallback(() => {
//     onSelect?.(user.id);
//   }, [user.id, onSelect]);
//
//   return (
//     <Card selected={isSelected} onClick={handleClick}>
//       <Avatar src={user.avatar} />
//       <Name>{user.name}</Name>
//     </Card>
//   );
// };
//
// TESTING:
// --------
// Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
// dolore eu fugiat nulla pariatur. All components should have:
// - Unit tests for business logic
// - Snapshot tests for UI consistency
// - Integration tests for complex interactions
//
// ACCESSIBILITY:
// --------------
// Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
// deserunt mollit anim id est laborum. Ensure all components:
// - Have proper ARIA labels
// - Support keyboard navigation
// - Meet WCAG 2.1 AA standards
//
// =============================================================================
