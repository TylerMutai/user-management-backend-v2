export type CreateUserParams = {
  name: string;
};

export type GetOneUserParams = {
  id: number;
};

export type UserEmployeeProfileParams = {
  userId: number;
  departmentId: number;
  positionId: number;
};

export interface CreateUserEmployeeProfileParams
  extends UserEmployeeProfileParams {}

export interface UpdateUserEmployeeProfileParams
  extends UserEmployeeProfileParams {}
