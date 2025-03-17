export enum UserRole {
    admin = 'admin',
    editor = 'editor',
    guest = 'guest',
    }
    
   type RoleDescription = Record<UserRole, boolean>;

    const RoleDescription :RoleDescription  = {
    [UserRole.admin]: true,
    [UserRole.editor]: false,
    [UserRole.guest]: false,
    };
    