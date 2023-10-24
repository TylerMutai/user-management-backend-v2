export type CreateUserParams = {
  name: string;
};

export type GetOneUserParams = {
  id: number;
};

export type CreateUserEmployeeProfileParams = {
  user_id: number;
  departmentId: number;
  positionId: number;
};
